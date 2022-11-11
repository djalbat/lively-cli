"use strict";

const { defaults } = require("../lib/index"); ///

const { DEFAULT_QUIETLY } = defaults;

const DEFAULT_PORT = 3000,
      DEFAULT_HELP = false,
      DEFAULT_VERSION = false,
      DEFAULT_WATCH_PATTERN = null,
      DEFAULT_ALLOWED_ORIGIN = null;

module.exports = {
  DEFAULT_PORT,
  DEFAULT_HELP,
  DEFAULT_QUIETLY,
  DEFAULT_VERSION,
  DEFAULT_WATCH_PATTERN,
  DEFAULT_ALLOWED_ORIGIN
};
