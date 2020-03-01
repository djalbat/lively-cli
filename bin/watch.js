'use strict';

const chokidar = require('chokidar');

function watch(watchPattern) {
  let events = 0,
      handler;

  const watcher = chokidar.watch(watchPattern);

  unregisterHandler();

  watcher.on('ready', () => {
    watcher.on('all', (event, path) => {
      events++;

      callHandler();

      unregisterHandler();
    });
  });

  return registerHandler;

  function callHandler() {
    if (handler) {
      handler();

      events--;
    }
  }

  function registerHandler(argument) {
    handler = argument;  ///

    if (events === 0) {
      return;
    }

    callHandler();

    unregisterHandler();
  }

  function unregisterHandler() {
    handler = undefined;
  }
}

module.exports = watch;
