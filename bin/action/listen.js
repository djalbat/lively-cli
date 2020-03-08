'use strict';

const http = require('http');

const watch = require('../watch'),
      messages = require('../messages'),
      constants = require('../constants'),
      headersUtilities = require('../utilities/headers');

const { exit } = process,
      { createServer } = http,
      { headersFromAllowedOrigin } = headersUtilities,
      { NO_WATCH_PATTERN, NO_ALLOWED_ORIGIN } = messages,
      { GET_METHOD, DEFAULT_PORT, OPTIONS_METHOD, HTTP_200_STATUS_CODE } = constants;

function listen(options) {
  const { quietly, watchPattern, allowedOrigin } = options;

  if (!watchPattern) {
    console.log(NO_WATCH_PATTERN);

    exit(1);
  }

  if (!allowedOrigin) {
    console.log(NO_ALLOWED_ORIGIN);

    exit(1);
  }

  const { port = DEFAULT_PORT } = options,
        registerHandler = watch(watchPattern, quietly),
        statusCode = HTTP_200_STATUS_CODE,
        headers = headersFromAllowedOrigin(allowedOrigin);

  createServer((request, response) => {
    const { method } = request;

    switch (method) {
      case GET_METHOD :
        response.writeHead(statusCode, headers);

        registerHandler(() => {
          response.end();
        });
        break;

      case OPTIONS_METHOD :
        response.writeHead(statusCode, headers);

        response.end();
        break;
    }
  }).listen(port);
}

module.exports = listen;
