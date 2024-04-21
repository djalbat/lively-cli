"use strict";

const { statusCodes } = require("necessary");

const watch = require("./watch"),
      defaults = require("./defaults");

const { DEFAULT_QUIETLY } = defaults,
      { OK_200_STATUS_CODE } = statusCodes;

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
