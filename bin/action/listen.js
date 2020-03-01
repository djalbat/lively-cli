'use strict';

const http = require('http');

const watch = require('../watch'),
      messages = require('../messages'),
      constants = require('../constants');

const { exit } = process,
      { createServer } = http,
      { DEFAULT_PORT } = constants,
      { NO_WATCH_PATTERN } = messages;

function listen(options) {
  const { watchPattern } = options;

  if (!watchPattern) {
    console.log(NO_WATCH_PATTERN);

    exit(1);
  }

  const { port = DEFAULT_PORT } = options,
        registerCallback = watch(watchPattern);

  createServer((request, response) => {
    registerCallback(() => response.end())
  }).listen(port);
}

module.exports = listen;
