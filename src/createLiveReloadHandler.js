"use strict";

import { statusCodes } from "necessary";

import watch from "./watch";
import defaults from "./defaults";

const { DEFAULT_QUIETLY } = defaults,
      { OK_200_STATUS_CODE } = statusCodes;

export default function createLiveReloadHandler(watchPattern, quietly = DEFAULT_QUIETLY) {
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
