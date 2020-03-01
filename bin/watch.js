'use strict';

const chokidar = require('chokidar');

function watch(watchPattern) {
  let callback;

  const watcher = chokidar.watch(watchPattern);

  watcher.on('ready', () => {
    watcher.on('all', (event, path) => {
      callback && callback()
    });
  });

  return function registerCallback(argument) {
    callback = argument;  ///
  }
}

module.exports = watch;
