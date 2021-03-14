"use strict";

const help = require("./action/help"),
      listen = require("./action/listen"),
      version = require("./action/version");

const { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND, VERSION_COMMAND } = require("./commands");

function actions(command, argument, options) {
  const helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION);

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (helpOptionPresent) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND : help(); break;
    case VERSION_COMMAND : version(); break;

    default:
      listen(options);

      break;
  }
}

module.exports = actions;
