"use strict";

const { PORT_OPTION,
        HELP_OPTION,
        QUIETLY_OPTION,
        VERSION_OPTION,
        WATCH_PATTERN_OPTION,
        ALLOWED_ORIGIN_OPTION } = require("./options");

const p = PORT_OPTION,
      h = HELP_OPTION,
      q = QUIETLY_OPTION,
      v = VERSION_OPTION,
      w = WATCH_PATTERN_OPTION,
      o = ALLOWED_ORIGIN_OPTION;

module.exports = {
  p,
  h,
  q,
  v,
  w,
  o
};
