'use strict';

const constants = require('../constants');

const { stdout } = process,
      { SWIRLY_INTERVAL } = constants;

function swirlyThing() {
  let count = 0,
      identifier = setInterval(swirl, SWIRLY_INTERVAL);

  function swirl() {
    stdout.clearLine();

    stdout.cursorTo(0);

    switch (count) {
      case 0: stdout.write('↱'); break;
      case 1: stdout.write('↴'); break;
      case 2: stdout.write('↵'); break;

      default:
        clearInterval(identifier);
        break;
    }

    count++;
  }
}

module.exports = {
  swirlyThing
};
