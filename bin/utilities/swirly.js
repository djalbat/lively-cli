'use strict';

const constants = require('../constants');

const { stdout } = process,
      { SWIRLY_INTERVAL } = constants;

let count,
    swirls = 0,
    identifier;

function swirl() {
  swirls++;

  if (swirls === 1) {
    count = 0;

    identifier = setInterval(swirly, SWIRLY_INTERVAL);
  }
}

module.exports = {
  swirl
};

function swirly() {
  count++;

  stdout.clearLine(0);

  stdout.cursorTo(0);

  switch (count) {
    case 1: stdout.write('↱'); break;
    case 2: stdout.write('↴'); break;
    case 3: stdout.write('↵'); break;

    default: {
      count = 0;

      swirls--;

      if (swirls === 0) {
        clearInterval(identifier);
      }
    }
    break;
  }
}
