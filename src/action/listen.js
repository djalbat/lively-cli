"use strict";

import { createServer } from "http";
import { methods, statusCodes } from "necessary";

import watch from "../watch";

import { headersFromAllowedOrigin } from "../utilities/headers";
import { NO_WATCH_PATTERN, NO_ALLOWED_ORIGIN } from "../messages";

const { OK_200_STATUS_CODE } = statusCodes,
      { GET_METHOD, OPTIONS_METHOD } = methods;

export default function listenAction(port, quietly, watchPattern, allowedOrigin) {
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
