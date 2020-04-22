# Lively-CLI

Live relaoding when files change.

Lively watches files and reports when they change, typically allowing a website to be reloaded immediately thereafter. 

Lively works best hand in hand with [Watchful](https://github.com/djalbat/watchful-cli). 

## Installation

You can install Lively via [npm](https://www.npmjs.com/):
 
    npm install lively-cli
    
There is no need to install it globally, the recommended approach is to run it by way of [npm sciprts](https://docs.npmjs.com/misc/scripts). If you do decide to install it globally, however, you may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo), depending on your setup.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/lively-cli.git

...then install the dependencies with npm from within the project's root directory:

    npm install
    
## Usage

```
  lively [<command>] [<options>]

Commands:

  version                                        Show theh version

  help                                           Show this help
  
Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  
  --port|-p                                      The port. The default is 3000.

  --quietly|-q                                   Run quietly, without the swirly.

  --watch-pattern|-w                             The glob pattern of files to watch.

  --allowed_origin|-o                            The allowed origin, including port and protocol
```

The typical use case is to watch a bundle file produced by Watchful and notify the browser whenever it changes.

    lively --watch-pattern=./public/lib/client.js --allowed-origin=http://localhost:8000
    
Note that as well as the [glob](https://en.wikipedia.org/wiki/Glob_(programming)) pattern of files to watch, you must include the origin from which your site is served in order for Lively to correctly set the [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers.

There is a small amount of JavaScript needed in order to connect to Lively:

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

Once you have started Lively, refresh your browser and, assuming that the above code snippet is present, the page will be reloaded whenever the watched files change.

### Running by way of npm scripts

What follows is best read with the Watchful npm scripts example in mind. 

As already mentioned, it is recommended that you install Lively as a project dependency rather than globally, then run it with npm scripts. Here are the additional or amended scripts to do with Lively: 

```
"scripts": {
  
  ...
    
  "lively": "lively --watch-pattern=./public/lib/client.js --allowed-origin=http://localhost:8084",
    
  ...
    
  "watch": "npm run clean && npm run batch && concurrently 'npm run incremental' 'npm run lively'",
    
  ...
    
}
```

These are the points worth noting:

* The `lively` script invokes Lively with the requisite options. Using a dedicated script in this way means that the options only have to be specified once.

* The `watch` script has been amended to run both Watchful and Lively concurrently. The `watch-debug` script can be treated entirely similarly. The [Concurrently](https://github.com/kimmobrunfeldt/concurrently) package is used for this, in fact.

The Concurrently package has not been included in the dependencies because there are other approaches. You will therefore need to install it explicitly if you choose this approach.
        
## Contact

- james.smith@djalbat.com
- http://djalbat.com
