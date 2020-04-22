"use strict";

const http = require("http");

const watch = require("../watch"),
      messages = require("../messages"),
      constants = require("../constants"),
      headersUtilities = require("../utilities/headers");

const { createServer } = http,
      { headersFromAllowedOrigin } = headersUtilities,
      { NO_WATCH_PATTERN, NO_ALLOWED_ORIGIN } = messages,
      { GET_METHOD, DEFAULT_PORT, DEFAULT_QUIETLY, OPTIONS_METHOD, HTTP_200_STATUS_CODE } = constants;

function listen(options) {
  const { watchPattern, allowedOrigin } = options;

  if (!watchPattern) {
    console.log(NO_WATCH_PATTERN);

    process.exit(1);
  }

  if (!allowedOrigin) {
    console.log(NO_ALLOWED_ORIGIN);

    process.exit(1);
  }

  const { port = DEFAULT_PORT, quietly = DEFAULT_QUIETLY } = options,
        registerHandler = watch(watchPattern, quietly),
        statusCode = HTTP_200_STATUS_CODE,
        headers = headersFromAllowedOrigin(allowedOrigin);

  createServer((request, response) => {
    const { method } = request;

    switch (method) {
      case GET_METHOD : {
          const { connection } = response;

          response.writeHead(statusCode, headers);

          connection.setTimeout(0);

          registerHandler(() => {
            response.end();
          });
        }
        break;

      case OPTIONS_METHOD :
        response.writeHead(statusCode, headers);

        response.end();
        break;
    }
  }).listen(port);
}

module.exports = listen;
