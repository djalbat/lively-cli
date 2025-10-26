"use strict";

import helpAction from "./action/help";
import listenAction from "./action/listen";
import versionAction from "./action/version";

import { HELP_COMMAND, LISTEN_COMMAND, VERSION_COMMAND } from "./commands";
import { NO_COMMAND_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } from "./messages";
import { DEFAULT_PORT, DEFAULT_QUIETLY, DEFAULT_WATCH_PATTERN, DEFAULT_ALLOWED_ORIGIN } from "./defaults";

export default function main(command, argument, options) {
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
