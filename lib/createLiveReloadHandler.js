"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _necessary = require("necessary");
var _watch = /*#__PURE__*/ _interop_require_default(require("./watch"));
var _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE;
function createLiveReloadHandler(watchPattern) {
    var quietly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_QUIETLY;
    var statusCode = OK_200_STATUS_CODE, registerHandler = (0, _watch.default)(watchPattern, quietly);
    return function liveReloadHandler(request, response) {
        var connection = response.connection;
        response.writeHead(statusCode);
        connection.setTimeout(0);
        registerHandler(function() {
            response.end();
        });
    };
}
module.exports = createLiveReloadHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVMaXZlUmVsb2FkSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RhdHVzQ29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB3YXRjaCBmcm9tIFwiLi93YXRjaFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1FVSUVUTFkgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IE9LXzIwMF9TVEFUVVNfQ09ERSB9ID0gc3RhdHVzQ29kZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpdmVSZWxvYWRIYW5kbGVyKHdhdGNoUGF0dGVybiwgcXVpZXRseSA9IERFRkFVTFRfUVVJRVRMWSkge1xuICBjb25zdCBzdGF0dXNDb2RlID0gT0tfMjAwX1NUQVRVU19DT0RFLFxuICAgICAgICByZWdpc3RlckhhbmRsZXIgPSB3YXRjaCh3YXRjaFBhdHRlcm4sIHF1aWV0bHkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBsaXZlUmVsb2FkSGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gcmVzcG9uc2U7XG5cbiAgICByZXNwb25zZS53cml0ZUhlYWQoc3RhdHVzQ29kZSk7XG5cbiAgICBjb25uZWN0aW9uLnNldFRpbWVvdXQoMCk7XG5cbiAgICByZWdpc3RlckhhbmRsZXIoKCkgPT4ge1xuICAgICAgcmVzcG9uc2UuZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVMaXZlUmVsb2FkSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJPS18yMDBfU1RBVFVTX0NPREUiLCJzdGF0dXNDb2RlcyIsImNyZWF0ZUxpdmVSZWxvYWRIYW5kbGVyIiwid2F0Y2hQYXR0ZXJuIiwicXVpZXRseSIsIkRFRkFVTFRfUVVJRVRMWSIsInN0YXR1c0NvZGUiLCJyZWdpc3RlckhhbmRsZXIiLCJ3YXRjaCIsImxpdmVSZWxvYWRIYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY29ubmVjdGlvbiIsIndyaXRlSGVhZCIsInNldFRpbWVvdXQiLCJlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozt5QkFFNEI7NERBRVY7d0JBRWM7Ozs7OztBQUVoQyxJQUFNLEFBQUVBLHFCQUF1QkMsc0JBQVcsQ0FBbENEO0FBRVIsU0FBU0Usd0JBQXdCQyxZQUFZO1FBQUVDLFVBQUFBLGlFQUFVQyx5QkFBZTtJQUN0RSxJQUFNQyxhQUFhTixvQkFDYk8sa0JBQWtCQyxJQUFBQSxjQUFLLEVBQUNMLGNBQWNDO0lBRTVDLE9BQU8sU0FBU0ssa0JBQWtCQyxPQUFPLEVBQUVDLFFBQVE7UUFDakQsSUFBTSxBQUFFQyxhQUFlRCxTQUFmQztRQUVSRCxTQUFTRSxTQUFTLENBQUNQO1FBRW5CTSxXQUFXRSxVQUFVLENBQUM7UUFFdEJQLGdCQUFnQjtZQUNkSSxTQUFTSSxHQUFHO1FBQ2Q7SUFDRjtBQUNGO0FBRUFDLE9BQU9DLE9BQU8sR0FBR2YifQ==