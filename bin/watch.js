"use strict";

const chokidar = require("chokidar");

function watch(watchPattern, quietly) {
  if (!quietly) {
    console.log(`Watching "${watchPattern}".`);
  }

  const watcher = chokidar.watch(watchPattern);

  let handler,
      unhandledEvents = false;

  watcher.on("ready", () => {
    watcher.on("all", (event, path) => {
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
