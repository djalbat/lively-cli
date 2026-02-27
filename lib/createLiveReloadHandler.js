"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createLiveReloadHandler;
    }
});
const _necessary = require("necessary");
const _watch = /*#__PURE__*/ _interop_require_default(require("./watch"));
const _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { OK_200_STATUS_CODE } = _necessary.statusCodes;
function createLiveReloadHandler(watchPattern, quietly = _defaults.DEFAULT_QUIETLY) {
    const statusCode = OK_200_STATUS_CODE, registerHandler = (0, _watch.default)(watchPattern, quietly);
    return function liveReloadHandler(request, response) {
        const { connection } = response;
        response.writeHead(statusCode);
        connection.setTimeout(0);
        registerHandler(()=>{
            response.end();
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVMaXZlUmVsb2FkSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RhdHVzQ29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB3YXRjaCBmcm9tIFwiLi93YXRjaFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1FVSUVUTFkgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IE9LXzIwMF9TVEFUVVNfQ09ERSB9ID0gc3RhdHVzQ29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxpdmVSZWxvYWRIYW5kbGVyKHdhdGNoUGF0dGVybiwgcXVpZXRseSA9IERFRkFVTFRfUVVJRVRMWSkge1xuICBjb25zdCBzdGF0dXNDb2RlID0gT0tfMjAwX1NUQVRVU19DT0RFLFxuICAgICAgICByZWdpc3RlckhhbmRsZXIgPSB3YXRjaCh3YXRjaFBhdHRlcm4sIHF1aWV0bHkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBsaXZlUmVsb2FkSGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gcmVzcG9uc2U7XG5cbiAgICByZXNwb25zZS53cml0ZUhlYWQoc3RhdHVzQ29kZSk7XG5cbiAgICBjb25uZWN0aW9uLnNldFRpbWVvdXQoMCk7XG5cbiAgICByZWdpc3RlckhhbmRsZXIoKCkgPT4ge1xuICAgICAgcmVzcG9uc2UuZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVMaXZlUmVsb2FkSGFuZGxlciIsIk9LXzIwMF9TVEFUVVNfQ09ERSIsInN0YXR1c0NvZGVzIiwid2F0Y2hQYXR0ZXJuIiwicXVpZXRseSIsIkRFRkFVTFRfUVVJRVRMWSIsInN0YXR1c0NvZGUiLCJyZWdpc3RlckhhbmRsZXIiLCJ3YXRjaCIsImxpdmVSZWxvYWRIYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY29ubmVjdGlvbiIsIndyaXRlSGVhZCIsInNldFRpbWVvdXQiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkJBUkk7OERBRVY7MEJBRWM7Ozs7OztBQUVoQyxNQUFNLEVBQUVDLGtCQUFrQixFQUFFLEdBQUdDLHNCQUFXO0FBRTNCLFNBQVNGLHdCQUF3QkcsWUFBWSxFQUFFQyxVQUFVQyx5QkFBZTtJQUNyRixNQUFNQyxhQUFhTCxvQkFDYk0sa0JBQWtCQyxJQUFBQSxjQUFLLEVBQUNMLGNBQWNDO0lBRTVDLE9BQU8sU0FBU0ssa0JBQWtCQyxPQUFPLEVBQUVDLFFBQVE7UUFDakQsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0Q7UUFFdkJBLFNBQVNFLFNBQVMsQ0FBQ1A7UUFFbkJNLFdBQVdFLFVBQVUsQ0FBQztRQUV0QlAsZ0JBQWdCO1lBQ2RJLFNBQVNJLEdBQUc7UUFDZDtJQUNGO0FBQ0YifQ==