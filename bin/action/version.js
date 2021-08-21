"use strict";

const { constants } = require("../../lib/index");

const { getPackageVersion } = require("../utilities/packageJSON");

const { LIVELY_CLI } = constants;

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${LIVELY_CLI} version ${version}`);
}

module.exports = version;
