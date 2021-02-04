"use strict";

const fs = require("fs");

function readFile(filePath, encoding = "utf8") {
  const options = {
          encoding
        },
        content = fs.readFileSync(filePath, options);

  return content;
}

module.exports = {
  readFile
};
