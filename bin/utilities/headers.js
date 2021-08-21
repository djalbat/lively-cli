"use strict";

import { constants } from "../../lib/index";

const { WILDCARD,
        OPTIONS_GET,
        ACCESS_CONTROL_ALLOW_ORIGIN,
        ACCESS_CONTROL_ALLOW_METHODS,
        ACCESS_CONTROL_ALLOW_HEADERS,
        ACCESS_CONTROL_REQUEST_METHOD } = constants;

function headersFromAllowedOrigin(allowedOrigin) {
  const headers = {};

  headers[ ACCESS_CONTROL_ALLOW_ORIGIN ] = allowedOrigin;
  headers[ ACCESS_CONTROL_ALLOW_METHODS ] = OPTIONS_GET;
  headers[ ACCESS_CONTROL_ALLOW_HEADERS ] = WILDCARD;
  headers[ ACCESS_CONTROL_REQUEST_METHOD ] = WILDCARD;

  return headers;
}

module.exports = {
  headersFromAllowedOrigin
};
