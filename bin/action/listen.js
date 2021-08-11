"use strict";

const { createServer } = require("http");

const watch = require("../watch");

const { headersFromAllowedOrigin } = require("../utilities/headers"),
      { OKAY_200_STATUS_CODE } = require("../statusCodes"),
      { GET_METHOD, OPTIONS_METHOD } = require("../methods"),
      { DEFAULT_PORT, DEFAULT_QUIETLY } = require("../defaults"),
      { NO_WATCH_PATTERN, NO_ALLOWED_ORIGIN } = require("../messages");

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
        statusCode = OKAY_200_STATUS_CODE,
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
