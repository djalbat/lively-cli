"use strict";

const watch = require("./watch"),
      defaults = require("./defaults"),
      liveReloadSnippet = require("./liveReloadSnippet"),
      createLiveReloadHandler = require("./createLiveReloadHandler");

module.exports = {
  watch,
  defaults,
  liveReloadSnippet,
  createLiveReloadHandler
};
