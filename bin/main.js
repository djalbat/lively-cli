"use strict";

const helpAction = require("./action/help"),
      listenAction = require("./action/listen"),
      versionAction = require("./action/version");

const { HELP_COMMAND, LISTEN_COMMAND, VERSION_COMMAND } = require("./commands"),
      { NO_COMMAND_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { DEFAULT_PORT, DEFAULT_QUIETLY, DEFAULT_WATCH_PATTERN, DEFAULT_ALLOWED_ORIGIN } = require("./defaults");

function main(command, argument, options) {
  const { port = DEFAULT_PORT,
          quietly = DEFAULT_QUIETLY,
          watchPattern = DEFAULT_WATCH_PATTERN,
          allowedOrigin = DEFAULT_ALLOWED_ORIGIN } = options;

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      break;
    }

    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case LISTEN_COMMAND: {
      listenAction(port, quietly, watchPattern, allowedOrigin);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}

module.exports = main;
