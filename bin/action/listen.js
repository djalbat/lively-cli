'use strict';

const http = require('http');

const constants = require('../constants');

const { createServer } = http,
      { DEFAULT_PORT } = constants;

function listen(options) {
  const { port = DEFAULT_PORT } = options;

  createServer((request, response) => {
    debugger
  }).listen(port);
}

module.exports = listen;
