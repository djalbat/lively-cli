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
var _necessary = require("necessary");
var _watch = /*#__PURE__*/ _interop_require_default(require("./watch"));
var _defaults = /*#__PURE__*/ _interop_require_default(require("./defaults"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var DEFAULT_QUIETLY = _defaults.default.DEFAULT_QUIETLY, OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE;
function createLiveReloadHandler(watchPattern) {
    var quietly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_QUIETLY;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVMaXZlUmVsb2FkSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RhdHVzQ29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB3YXRjaCBmcm9tIFwiLi93YXRjaFwiO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgREVGQVVMVF9RVUlFVExZIH0gPSBkZWZhdWx0cyxcbiAgICAgIHsgT0tfMjAwX1NUQVRVU19DT0RFIH0gPSBzdGF0dXNDb2RlcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGl2ZVJlbG9hZEhhbmRsZXIod2F0Y2hQYXR0ZXJuLCBxdWlldGx5ID0gREVGQVVMVF9RVUlFVExZKSB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPSBPS18yMDBfU1RBVFVTX0NPREUsXG4gICAgICAgIHJlZ2lzdGVySGFuZGxlciA9IHdhdGNoKHdhdGNoUGF0dGVybiwgcXVpZXRseSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGxpdmVSZWxvYWRIYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSByZXNwb25zZTtcblxuICAgIHJlc3BvbnNlLndyaXRlSGVhZChzdGF0dXNDb2RlKTtcblxuICAgIGNvbm5lY3Rpb24uc2V0VGltZW91dCgwKTtcblxuICAgIHJlZ2lzdGVySGFuZGxlcigoKSA9PiB7XG4gICAgICByZXNwb25zZS5lbmQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUxpdmVSZWxvYWRIYW5kbGVyIiwiREVGQVVMVF9RVUlFVExZIiwiZGVmYXVsdHMiLCJPS18yMDBfU1RBVFVTX0NPREUiLCJzdGF0dXNDb2RlcyIsIndhdGNoUGF0dGVybiIsInF1aWV0bHkiLCJzdGF0dXNDb2RlIiwicmVnaXN0ZXJIYW5kbGVyIiwid2F0Y2giLCJsaXZlUmVsb2FkSGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbm5lY3Rpb24iLCJ3cml0ZUhlYWQiLCJzZXRUaW1lb3V0IiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3lCQVJJOzREQUVWOytEQUNHOzs7Ozs7QUFFckIsSUFBTSxBQUFFQyxrQkFBb0JDLGlCQUFRLENBQTVCRCxpQkFDRixBQUFFRSxxQkFBdUJDLHNCQUFXLENBQWxDRDtBQUVPLFNBQVNILHdCQUF3QkssWUFBWTtRQUFFQyxVQUFBQSxpRUFBVUw7SUFDdEUsSUFBTU0sYUFBYUosb0JBQ2JLLGtCQUFrQkMsSUFBQUEsY0FBSyxFQUFDSixjQUFjQztJQUU1QyxPQUFPLFNBQVNJLGtCQUFrQkMsT0FBTyxFQUFFQyxRQUFRO1FBQ2pELElBQU0sQUFBRUMsYUFBZUQsU0FBZkM7UUFFUkQsU0FBU0UsU0FBUyxDQUFDUDtRQUVuQk0sV0FBV0UsVUFBVSxDQUFDO1FBRXRCUCxnQkFBZ0I7WUFDZEksU0FBU0ksR0FBRztRQUNkO0lBQ0Y7QUFDRiJ9