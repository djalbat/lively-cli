"use strict";

import { PORT_OPTION,
         HELP_OPTION,
         QUIETLY_OPTION,
         VERSION_OPTION,
         WATCH_PATTERN_OPTION,
         ALLOWED_ORIGIN_OPTION } from "./options";

const p = PORT_OPTION,
      h = HELP_OPTION,
      q = QUIETLY_OPTION,
      v = VERSION_OPTION,
      w = WATCH_PATTERN_OPTION,
      o = ALLOWED_ORIGIN_OPTION;

const abbreviations = {
  p,
  h,
  q,
  v,
  w,
  o
};

export default abbreviations;
