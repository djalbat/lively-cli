'use strict';

const options = require('./options');

const { PORT_OPTION,
        HELP_OPTION,
        VERSION_OPTION,
        WATCH_PATTERN_OPTION,
        ALLOWED_ORIGIN_OPTION } = options;

const p = PORT_OPTION,
      h = HELP_OPTION,
      v = VERSION_OPTION,
      w = WATCH_PATTERN_OPTION,
      o = ALLOWED_ORIGIN_OPTION;

module.exports = {
  p,
  h,
  v,
  w,
  o
};
