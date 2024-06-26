"use strict";

const { createServer } = require("http"),
      { methods, statusCodes } = require("necessary");

const watch = require("../watch");

const { headersFromAllowedOrigin } = require("../utilities/headers"),
      { NO_WATCH_PATTERN, NO_ALLOWED_ORIGIN } = require("../messages");

const { OK_200_STATUS_CODE } = statusCodes,
      { GET_METHOD, OPTIONS_METHOD } = methods;

function listenAction(port, quietly, watchPattern, allowedOrigin) {
  if (watchPattern === null) {
    console.log(NO_WATCH_PATTERN);

    return;
  }

  if (allowedOrigin === null) {
    console.log(NO_ALLOWED_ORIGIN);

    return;
  }

  const registerHandler = watch(watchPattern, quietly),
        statusCode = OK_200_STATUS_CODE,
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

module.exports = listenAction;
