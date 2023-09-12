"use strict";

const { packageUtilities } = require("necessary");

const { LIVELY_CLI } = require("../constants");

const { getVersion } = packageUtilities;

function versionAction() {
  const version = getVersion(); ///

  console.log(`${LIVELY_CLI} version ${version}`);
}

module.exports = versionAction;
