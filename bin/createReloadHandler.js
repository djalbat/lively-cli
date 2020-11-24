"use strict";

const watch = require("./watch"),
      constants = require("./constants");

const { HTTP_200_STATUS_CODE } = constants;

function createReloadHandler(watchPattern, quietly) {
  const statusCode = HTTP_200_STATUS_CODE,
        registerHandler = watch(watchPattern, quietly);

  return function reloadHandler(request, response) {
    const { connection } = response;

    response.writeHead(statusCode);

    connection.setTimeout(0);

    registerHandler(() => {
      response.end();
    });
  }
}

module.exports = createReloadHandler;
