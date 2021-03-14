"use strict";

const watch = require("./watch");

const { HTTP_200_STATUS_CODE, DEFAULT_QUIETLY } = require("./constants");

function createLiveReloadHandler(watchPattern, quietly = DEFAULT_QUIETLY) {
  const statusCode = HTTP_200_STATUS_CODE,
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
