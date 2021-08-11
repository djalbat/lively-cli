"use strict";

const { WILDCARD, OPTIONS_GET } = require("../constants");

function headersFromAllowedOrigin(allowedOrigin) {
  const headers = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": OPTIONS_GET,
    "Access-Control-Allow-Headers": WILDCARD,
    "Access-Control-Request-Method": WILDCARD
  };

  return headers;
}

module.exports = {
  headersFromAllowedOrigin
};
