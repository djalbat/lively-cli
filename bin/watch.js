"use strict";

const chokidar = require("chokidar");

const { ALL, READY } = require("./constants");

function watch(watchPattern, quietly) {
  if (!quietly) {
    console.log(`Watching "${watchPattern}".`);
  }

  const watcher = chokidar.watch(watchPattern);

  let handler = null,
      unhandledEvents = false;

  watcher.on(READY, () => {
    watcher.on(ALL, (event, path) => {
      unhandledEvents = true;

      callHandler();
    });
  });

  return registerHandler;

  function callHandler() {
    if (unhandledEvents && handler) {
      if (!quietly) {
        console.log("Calling handler.");
      }

      handler();

      handler = null;

      unhandledEvents = false;
    }
  }

  function registerHandler(argument) {
    if (!quietly) {
      console.log("Registering handler.");
    }

    handler = argument;  ///

    callHandler();
  }
}

module.exports = watch;
