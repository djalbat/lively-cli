"use strict";

const liveReloadSnippet = `

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
                       
`;

export default liveReloadSnippet;
