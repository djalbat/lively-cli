"use strict";

const helpAction = require("./action/help"),
      listenAction = require("./action/listen"),
      versionAction = require("./action/version");

const { HELP_COMMAND, LISTEN_COMMAND, VERSION_COMMAND } = require("./commands"),
      { DEFAULT_HELP, DEFAULT_PORT, DEFAULT_QUIETLY, DEFAULT_VERSION, DEFAULT_WATCH_PATTERN, DEFAULT_ALLOWED_ORIGIN } = require("./defaults");

function actions(command, argument, options) {
  const commandMissing = (command === null),
        { help = DEFAULT_HELP,
          port = DEFAULT_PORT,
          quietly = DEFAULT_QUIETLY,
          version = DEFAULT_VERSION,
          watchPattern = DEFAULT_WATCH_PATTERN,
          allowedOrigin = DEFAULT_ALLOWED_ORIGIN } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  } else if (commandMissing) {
    command = LISTEN_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND: helpAction(); break;
    case LISTEN_COMMAND: listenAction(port, quietly, watchPattern, allowedOrigin); break;
    case VERSION_COMMAND: versionAction(); break;
  }
}

module.exports = actions;
