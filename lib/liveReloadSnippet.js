"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
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
const _default = liveReloadSnippet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXZlUmVsb2FkU25pcHBldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGxpdmVSZWxvYWRTbmlwcGV0ID0gYFxyXG5cclxuICA8c2NyaXB0PlxyXG5cclxuICAgIHZhciB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeG1sSHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgaWYgKHhtbEh0dHBSZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB4bWxIdHRwUmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiL2xpdmUtcmVsb2FkXCIpO1xyXG5cclxuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXZlUmVsb2FkU25pcHBldDtcclxuIl0sIm5hbWVzIjpbImxpdmVSZWxvYWRTbmlwcGV0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7QUF0QkEsTUFBTUEsb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0IzQixDQUFDO01BRUQsV0FBZUEifQ==