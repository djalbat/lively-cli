"use strict";

const constants = require("../constants"),
      packageJSONUtilities = require("../utilities/packageJSON");

const { LIVELY_CLI } = constants,
      { getPackageVersion } = packageJSONUtilities;

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${LIVELY_CLI} version ${version}`);
}

module.exports = version;
