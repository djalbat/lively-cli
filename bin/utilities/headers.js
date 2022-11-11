"use strict";

const { methods, headers } = require("necessary");

const { WILDCARD } = require("../constants");

const { GET_METHOD, OPTIONS_METHOD } = methods,
      { ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
        ACCESS_CONTROL_ALLOW_METHODS_HEADER,
        ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
        ACCESS_CONTROL_REQUEST_METHOD_HEADER } = headers;

function headersFromAllowedOrigin(allowedOrigin) {
  const headers = {};

  headers[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] = allowedOrigin;
  headers[ACCESS_CONTROL_ALLOW_METHODS_HEADER] = `${GET_METHOD}, ${OPTIONS_METHOD}`;  ///
  headers[ACCESS_CONTROL_ALLOW_HEADERS_HEADER] = WILDCARD;
  headers[ACCESS_CONTROL_REQUEST_METHOD_HEADER] = WILDCARD;

  return headers;
}

module.exports = {
  headersFromAllowedOrigin
};
