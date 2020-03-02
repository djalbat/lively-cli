'use strict';

const constants = require('../constants');

const { ACCESS_CONTROL_ALLOW_METHODS,
        ACCESS_CONTROL_ALLOW_HEADERS,
        ACCESS_CONTROL_REQUEST_METHOD } = constants;

function headersFromAllowedOrigin(allowedOrigin) {
  const headers = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
    'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS,
    'Access-Control-Request-Method': ACCESS_CONTROL_REQUEST_METHOD
  };

  return headers;
}

module.exports = {
  headersFromAllowedOrigin
};
