"use strict";

import { packageUtilities } from "necessary";

import { LIVELY_CLI } from "../constants";

const { getVersion } = packageUtilities;

export default function versionAction() {
  const version = getVersion(); ///

  console.log(`${LIVELY_CLI} version ${version}`);
}
