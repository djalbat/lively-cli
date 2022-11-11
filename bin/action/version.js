"use strict";

const { LIVELY_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function versionAction() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${LIVELY_CLI} version ${version}`);
}

module.exports = versionAction;
