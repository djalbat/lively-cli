"use strict";

const { constants } = require("../../Lib/index"),
      { arrayUtilities } = require("necessary");

const { second } = arrayUtilities,
      { readFile } = require("../utilities/fileSystem");

const { PACKAGE_JSON } = constants;

const utilitiesDirectoryName = __dirname, ///
      matches = utilitiesDirectoryName.match(/^(.+)\/bin\/utilities$/),
      secondMatch = second(matches),
      applicationDirectoryName = secondMatch, ///
      packageJSONFilePath = `${applicationDirectoryName}/${PACKAGE_JSON}`,
      packageJSONFile = readFile(packageJSONFilePath),
      packageJSON = JSON.parse(packageJSONFile),
      { version } = packageJSON,
      packageVersion = version;  ///

function getPackageVersion() {
  return packageVersion;
}

module.exports = {
  getPackageVersion
};
