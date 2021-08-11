"use strict";

const watch = require("./watch");

const { DEFAULT_QUIETLY } = require("./defaults"),
      { OKAY_200_STATUS_CODE } = require("./statusCodes");

function createLiveReloadHandler(watchPattern, quietly = DEFAULT_QUIETLY) {
  const statusCode = OKAY_200_STATUS_CODE,
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
