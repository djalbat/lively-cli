"use strict";

import watch from "./watch";

import { DEFAULT_QUIETLY } from "./defaults";
import { OK_200_STATUS_CODE } from "./statusCodes";

function createLiveReloadHandler(watchPattern, quietly = DEFAULT_QUIETLY) {
  const statusCode = OK_200_STATUS_CODE,
        registerHandler = watch(watchPattern, quietly);

  return function liveReloadHandler(request, response) {
    const { connection } = response;

    response.writeHead(statusCode);

    connection.setTimeout(0);

    registerHandler(() => {
      response.end();
    });
  }
}

module.exports = createLiveReloadHandler;
