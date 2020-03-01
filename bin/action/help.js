'use strict';

function help() {
  console.log(`Usage: 
  
  lively [<command>] [<options>]

Commands:

  version                                        Show theh version

  help                                           Show this help
  
Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  
  --port|-p                                      The port. The default is 3000.

  --watch|-w                                     The glob pattern of files to watch.

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/lively-cli
`);
}

module.exports = help;
