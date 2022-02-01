"use strict";

import { statusCodes } from "necessary";

import watch from "./watch";

import { DEFAULT_QUIETLY } from "./defaults";

const { OK_200_STATUS_CODE } = statusCodes;

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
