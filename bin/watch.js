'use strict';

const chokidar = require('chokidar');

const swirlyUtilities = require('./utilities/swirly');

const { swirlyThing } = swirlyUtilities;

function watch(watchPattern) {
  const watcher = chokidar.watch(watchPattern);

  let unhandledEvents = 0,
      handler;

  unregisterHandler();

  watcher.on('ready', () => {
    watcher.on('all', (event, path) => {
      unhandledEvents++;

      swirlyThing();

      invokeHandler();

      unregisterHandler();
    });
  });

  return registerHandler;

  function invokeHandler() {
    if (handler) {
      handler();

      unhandledEvents--;
    }
  }

  function registerHandler(argument) {
    handler = argument;  ///

    if (unhandledEvents === 0) {
      return;
    }

    invokeHandler();

    unregisterHandler();
  }

  function unregisterHandler() {
    handler = undefined;
  }
}

module.exports = watch;
