'use strict';

const options = require('./options');

const { PORT_OPTION,
        HELP_OPTION,
        VERSION_OPTION  } = options;

const p = PORT_OPTION,
      h = HELP_OPTION,
      v = VERSION_OPTION;

module.exports = {
  p,
  h,
  v
};
