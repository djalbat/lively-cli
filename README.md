# Lively-CLI

Live relaoding when bundles change.

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

## Contact

- james.smith@djalbat.com
- http://djalbat.com
