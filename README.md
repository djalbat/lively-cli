# Lively-CLI

Live reloading when files change.

Lively watches files and reports when they change, typically allowing a website to be reloaded when they do so. It can be run by way of npm scripts or it can be integrated into a server application.

Lively works best hand in hand with [Watchful-CLI](https://github.com/djalbat/watchful-cli). 

## Installation

You can install Lively via [npm](https://www.npmjs.com/):
 
    npm install lively-cli
    
There is no need to install it globally, the recommended approach is to run it by way of [npm sciprts](https://docs.npmjs.com/misc/scripts). If you do decide to install it globally, however, you may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo), depending on your setup.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/lively-cli.git

...then install the dependencies with npm from within the project's root directory:

    npm install
    
## Usage

Lively has the following commands and options:

```
  lively [<command>] [<options>]

Commands:

  help                                           Show this help

  version                                        Show the version
  
Options:

  --help|-h                                      Show this help
  
  --version|-v                                   Show the version

  --port|-p                                      The port. The default is 3000

  --quietly|-q                                   Run quietly, without the swirly

  --watch-pattern|-w                             The glob pattern of files to watch

  --allowed_origin|-o                            The allowed origin, including port and protocol
```

The typical use case is to watch a bundle file produced by Watchful and notify the browser whenever it changes.

    lively --watch-pattern=./public/lib/client.js --allowed-origin=http://localhost:8000
    
Note that as well as the [glob](https://en.wikipedia.org/wiki/Glob_(programming)) pattern of files to watch, you must include the origin from which your site is served in order for Lively to correctly set the [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers.

There is a small amount of HTML needed in order to connect to Lively:

```
<script>

  var xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == 4) {
      if (xmlHttpRequest.status == 200) {
        location.reload();
      }
    }
  };

  xmlHttpRequest.open("GET", "http://localhost:3000");

  xmlHttpRequest.send();

</script>
```

It is strongly recommended that you use this only in development versions of your website. You could make use of a templating system to include it only when a certain environment variable is set, for example.

Once you have started Lively, refresh your browser and, assuming that the above snippet is present, the page will be reloaded whenever the watched files change.

### Running by way of npm scripts

What follows is best read with the Watchful npm scripts example in mind. 

As already mentioned, it is recommended that you install Lively as a project dependency rather than globally, then run it with npm scripts. Here are the additional or amended scripts to do with Lively: 

```
"scripts": {
  
  ...
    
  "lively": "lively --watch-pattern=./public/lib/client.js --allowed-origin=http://localhost:8084",
    
  ...
    
  "watch": "npm run clean && npm run batch && concurrently -k 'npm run incremental' 'npm run lively'",
    
  ...
    
}
```

These are the points worth noting:

* The `lively` script invokes Lively with the requisite options. Using a dedicated script in this way means that the options only have to be specified once.

* The `watch` script has been amended to run both Watchful and Lively concurrently. The `watch-debug` script can be treated entirely similarly. The [Concurrently](https://github.com/open-cli-tools/concurrently) package is used for this, in fact.

The Concurrently package has not been included in the dependencies because there are other approaches. You will therefore need to install it explicitly if you choose this approach.

## Integrating into a server application

Lively exports a `createLiveReloadHandler()` function that can be used to create a handler for use with [Express](https://expressjs.com/):

```
"use strict";

const lively = require("lively-cli"), ///
      express = require("express");

const { createLiveReloadHandler } = lively;

const server = express(); ///

const quietly = true,
      watchPattern = "./examples.js",
      liveReloadHandler = createLiveReloadHandler(watchPattern, quietly);

server.get("/live-reload", liveReloadHandler);

server.listen(8888);
```
Note that the `quietly` argument is optional, the default being `false`.

The live reload snippet given earlier can be simplified:

```
<script>

  var xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == 4) {
      if (xmlHttpRequest.status == 200) {
        location.reload();
      }
    }
  };

  xmlHttpRequest.open("GET", "/live-reload");

  xmlHttpRequest.send();

</script>
```

In fact, assuming that the above snippet will suffice, you can import it directly:

```
import { liveReloadSnippet } from "lively-cli";

... // Include the live reload snippet in the relevant templte HTML somehow
```

Note that the host is dispensed with in the `open()` method's second URL argument, only the relative `/live-reload` path needs to be given.

## Contact

- james.smith@djalbat.com
