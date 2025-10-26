"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return listenAction;
    }
});
var _http = require("http");
var _necessary = require("necessary");
var _watch = /*#__PURE__*/ _interop_require_default(require("../watch"));
var _headers = require("../utilities/headers");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE, GET_METHOD = _necessary.methods.GET_METHOD, OPTIONS_METHOD = _necessary.methods.OPTIONS_METHOD;
function listenAction(port, quietly, watchPattern, allowedOrigin) {
    if (watchPattern === null) {
        console.log(_messages.NO_WATCH_PATTERN);
        return;
    }
    if (allowedOrigin === null) {
        console.log(_messages.NO_ALLOWED_ORIGIN);
        return;
    }
    var registerHandler = (0, _watch.default)(watchPattern, quietly), statusCode = OK_200_STATUS_CODE, headers = (0, _headers.headersFromAllowedOrigin)(allowedOrigin);
    (0, _http.createServer)(function(request, response) {
        var method = request.method;
        switch(method){
            case GET_METHOD:
                {
                    var connection = response.connection;
                    response.writeHead(statusCode, headers);
                    connection.setTimeout(0);
                    registerHandler(function() {
                        response.end();
                    });
                }
                break;
            case OPTIONS_METHOD:
                response.writeHead(statusCode, headers);
                response.end();
                break;
        }
    }).listen(port);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vbGlzdGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgbWV0aG9kcywgc3RhdHVzQ29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB3YXRjaCBmcm9tIFwiLi4vd2F0Y2hcIjtcblxuaW1wb3J0IHsgaGVhZGVyc0Zyb21BbGxvd2VkT3JpZ2luIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9oZWFkZXJzXCI7XG5pbXBvcnQgeyBOT19XQVRDSF9QQVRURVJOLCBOT19BTExPV0VEX09SSUdJTiB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IE9LXzIwMF9TVEFUVVNfQ09ERSB9ID0gc3RhdHVzQ29kZXMsXG4gICAgICB7IEdFVF9NRVRIT0QsIE9QVElPTlNfTUVUSE9EIH0gPSBtZXRob2RzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5BY3Rpb24ocG9ydCwgcXVpZXRseSwgd2F0Y2hQYXR0ZXJuLCBhbGxvd2VkT3JpZ2luKSB7XG4gIGlmICh3YXRjaFBhdHRlcm4gPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhOT19XQVRDSF9QQVRURVJOKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhbGxvd2VkT3JpZ2luID09PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coTk9fQUxMT1dFRF9PUklHSU4pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJIYW5kbGVyID0gd2F0Y2god2F0Y2hQYXR0ZXJuLCBxdWlldGx5KSxcbiAgICAgICAgc3RhdHVzQ29kZSA9IE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnNGcm9tQWxsb3dlZE9yaWdpbihhbGxvd2VkT3JpZ2luKTtcblxuICBjcmVhdGVTZXJ2ZXIoKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcXVlc3Q7XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSBHRVRfTUVUSE9EIDoge1xuICAgICAgICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXNwb25zZS53cml0ZUhlYWQoc3RhdHVzQ29kZSwgaGVhZGVycyk7XG5cbiAgICAgICAgICBjb25uZWN0aW9uLnNldFRpbWVvdXQoMCk7XG5cbiAgICAgICAgICByZWdpc3RlckhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZW5kKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT1BUSU9OU19NRVRIT0QgOlxuICAgICAgICByZXNwb25zZS53cml0ZUhlYWQoc3RhdHVzQ29kZSwgaGVhZGVycyk7XG5cbiAgICAgICAgcmVzcG9uc2UuZW5kKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSkubGlzdGVuKHBvcnQpO1xufVxuIl0sIm5hbWVzIjpbImxpc3RlbkFjdGlvbiIsIk9LXzIwMF9TVEFUVVNfQ09ERSIsInN0YXR1c0NvZGVzIiwiR0VUX01FVEhPRCIsIm1ldGhvZHMiLCJPUFRJT05TX01FVEhPRCIsInBvcnQiLCJxdWlldGx5Iiwid2F0Y2hQYXR0ZXJuIiwiYWxsb3dlZE9yaWdpbiIsImNvbnNvbGUiLCJsb2ciLCJOT19XQVRDSF9QQVRURVJOIiwiTk9fQUxMT1dFRF9PUklHSU4iLCJyZWdpc3RlckhhbmRsZXIiLCJ3YXRjaCIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIiwiaGVhZGVyc0Zyb21BbGxvd2VkT3JpZ2luIiwiY3JlYXRlU2VydmVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwiY29ubmVjdGlvbiIsIndyaXRlSGVhZCIsInNldFRpbWVvdXQiLCJlbmQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7b0JBWEs7eUJBQ1E7NERBRW5CO3VCQUV1Qjt3QkFDVzs7Ozs7O0FBRXBELElBQU0sQUFBRUMscUJBQXVCQyxzQkFBVyxDQUFsQ0Qsb0JBQ0FFLGFBQStCQyxrQkFBTyxDQUF0Q0QsWUFBWUUsaUJBQW1CRCxrQkFBTyxDQUExQkM7QUFFTCxTQUFTTCxhQUFhTSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxhQUFhO0lBQzdFLElBQUlELGlCQUFpQixNQUFNO1FBQ3pCRSxRQUFRQyxHQUFHLENBQUNDLDBCQUFnQjtRQUU1QjtJQUNGO0lBRUEsSUFBSUgsa0JBQWtCLE1BQU07UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQ0UsMkJBQWlCO1FBRTdCO0lBQ0Y7SUFFQSxJQUFNQyxrQkFBa0JDLElBQUFBLGNBQUssRUFBQ1AsY0FBY0QsVUFDdENTLGFBQWFmLG9CQUNiZ0IsVUFBVUMsSUFBQUEsaUNBQXdCLEVBQUNUO0lBRXpDVSxJQUFBQSxrQkFBWSxFQUFDLFNBQUNDLFNBQVNDO1FBQ3JCLElBQU0sQUFBRUMsU0FBV0YsUUFBWEU7UUFFUixPQUFRQTtZQUNOLEtBQUtuQjtnQkFBYTtvQkFDZCxJQUFNLEFBQUVvQixhQUFlRixTQUFmRTtvQkFFUkYsU0FBU0csU0FBUyxDQUFDUixZQUFZQztvQkFFL0JNLFdBQVdFLFVBQVUsQ0FBQztvQkFFdEJYLGdCQUFnQjt3QkFDZE8sU0FBU0ssR0FBRztvQkFDZDtnQkFDRjtnQkFDQTtZQUVGLEtBQUtyQjtnQkFDSGdCLFNBQVNHLFNBQVMsQ0FBQ1IsWUFBWUM7Z0JBRS9CSSxTQUFTSyxHQUFHO2dCQUNaO1FBQ0o7SUFDRixHQUFHQyxNQUFNLENBQUNyQjtBQUNaIn0=