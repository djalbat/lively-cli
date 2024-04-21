"use strict";

const chokidar = require("chokidar");

const { ALL, READY } = rquire("./constants");

function watch(watchPattern, quietly) {
  if (!quietly) {
    console.log(`Watching "${watchPattern}".`);
  }

  const watcher = chokidar.watch(watchPattern);

  let handler,
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

      handler = undefined;

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
