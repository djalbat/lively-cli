# Lively-CLI

Live relaoding when files change.

Lively watches files and reports when they change, typically allowing a website under development to be reloaded. There is a small amount of JavaScript needed in order to connect to Lively: 

```
<script>

  var xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == 4) {
      location.reload();
    }
  };

  xmlHttpRequest.open('GET', 'http://localhost:3000');

  xmlHttpRequest.send();

</script>

```
It is strongly recommended that you include this only in development versions of your website. Use a templating system to include it only when a certain environment variable is present, for example.

Lively works hand in hand with [Watchful](https://github.com/djalbat/watchful-cli). 

## Contact

- james.smith@djalbat.com
- http://djalbat.com
