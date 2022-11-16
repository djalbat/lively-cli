"use strict";

function helpAction() {
  console.log(`Usage: 
  
  lively [<command>] [<options>]

Commands:

  help                                           Show this help

  version                                        Show the version
  
Options:

  --help|-h                                      Show this help
  
  --version|-v                                   Show the version

  --port|-p                                      The port. The default is 3000.

  --quietly|-q                                   Run quietly, without the swirly.

  --watch-pattern|-w                             The glob pattern of files to watch.

  --allowed_origin|-o                            The allowed origin, including port and protocol

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/lively-cli
`);
}

module.exports = helpAction;
