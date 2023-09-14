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
var liveReloadSnippet = '\n\n  <script>\n\n    var xmlHttpRequest = new XMLHttpRequest();\n\n    xmlHttpRequest.onreadystatechange = function() {\n      if (xmlHttpRequest.readyState == 4) {\n        if (xmlHttpRequest.status == 200) {\n          location.reload();\n        }\n      }\n    };\n\n    xmlHttpRequest.open("GET", "/live-reload");\n\n    xmlHttpRequest.send();\n\n  </script>\n                       \n';
var _default = liveReloadSnippet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXZlUmVsb2FkU25pcHBldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGxpdmVSZWxvYWRTbmlwcGV0ID0gYFxyXG5cclxuICA8c2NyaXB0PlxyXG5cclxuICAgIHZhciB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeG1sSHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgaWYgKHhtbEh0dHBSZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB4bWxIdHRwUmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiL2xpdmUtcmVsb2FkXCIpO1xyXG5cclxuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXZlUmVsb2FkU25pcHBldDtcclxuIl0sIm5hbWVzIjpbImxpdmVSZWxvYWRTbmlwcGV0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7QUF0QkEsSUFBTUEsb0JBQXFCO0lBc0IzQixXQUFlQSJ9