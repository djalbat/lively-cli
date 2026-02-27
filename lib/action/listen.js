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
const _http = require("http");
const _necessary = require("necessary");
const _watch = /*#__PURE__*/ _interop_require_default(require("../watch"));
const _headers = require("../utilities/headers");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { OK_200_STATUS_CODE } = _necessary.statusCodes, { GET_METHOD, OPTIONS_METHOD } = _necessary.methods;
function listenAction(port, quietly, watchPattern, allowedOrigin) {
    if (watchPattern === null) {
        console.log(_messages.NO_WATCH_PATTERN);
        return;
    }
    if (allowedOrigin === null) {
        console.log(_messages.NO_ALLOWED_ORIGIN);
        return;
    }
    const registerHandler = (0, _watch.default)(watchPattern, quietly), statusCode = OK_200_STATUS_CODE, headers = (0, _headers.headersFromAllowedOrigin)(allowedOrigin);
    (0, _http.createServer)((request, response)=>{
        const { method } = request;
        switch(method){
            case GET_METHOD:
                {
                    const { connection } = response;
                    response.writeHead(statusCode, headers);
                    connection.setTimeout(0);
                    registerHandler(()=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vbGlzdGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgbWV0aG9kcywgc3RhdHVzQ29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB3YXRjaCBmcm9tIFwiLi4vd2F0Y2hcIjtcblxuaW1wb3J0IHsgaGVhZGVyc0Zyb21BbGxvd2VkT3JpZ2luIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9oZWFkZXJzXCI7XG5pbXBvcnQgeyBOT19XQVRDSF9QQVRURVJOLCBOT19BTExPV0VEX09SSUdJTiB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IE9LXzIwMF9TVEFUVVNfQ09ERSB9ID0gc3RhdHVzQ29kZXMsXG4gICAgICB7IEdFVF9NRVRIT0QsIE9QVElPTlNfTUVUSE9EIH0gPSBtZXRob2RzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5BY3Rpb24ocG9ydCwgcXVpZXRseSwgd2F0Y2hQYXR0ZXJuLCBhbGxvd2VkT3JpZ2luKSB7XG4gIGlmICh3YXRjaFBhdHRlcm4gPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhOT19XQVRDSF9QQVRURVJOKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhbGxvd2VkT3JpZ2luID09PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coTk9fQUxMT1dFRF9PUklHSU4pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJIYW5kbGVyID0gd2F0Y2god2F0Y2hQYXR0ZXJuLCBxdWlldGx5KSxcbiAgICAgICAgc3RhdHVzQ29kZSA9IE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnNGcm9tQWxsb3dlZE9yaWdpbihhbGxvd2VkT3JpZ2luKTtcblxuICBjcmVhdGVTZXJ2ZXIoKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcXVlc3Q7XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSBHRVRfTUVUSE9EIDoge1xuICAgICAgICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXNwb25zZS53cml0ZUhlYWQoc3RhdHVzQ29kZSwgaGVhZGVycyk7XG5cbiAgICAgICAgICBjb25uZWN0aW9uLnNldFRpbWVvdXQoMCk7XG5cbiAgICAgICAgICByZWdpc3RlckhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZW5kKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT1BUSU9OU19NRVRIT0QgOlxuICAgICAgICByZXNwb25zZS53cml0ZUhlYWQoc3RhdHVzQ29kZSwgaGVhZGVycyk7XG5cbiAgICAgICAgcmVzcG9uc2UuZW5kKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSkubGlzdGVuKHBvcnQpO1xufVxuIl0sIm5hbWVzIjpbImxpc3RlbkFjdGlvbiIsIk9LXzIwMF9TVEFUVVNfQ09ERSIsInN0YXR1c0NvZGVzIiwiR0VUX01FVEhPRCIsIk9QVElPTlNfTUVUSE9EIiwibWV0aG9kcyIsInBvcnQiLCJxdWlldGx5Iiwid2F0Y2hQYXR0ZXJuIiwiYWxsb3dlZE9yaWdpbiIsImNvbnNvbGUiLCJsb2ciLCJOT19XQVRDSF9QQVRURVJOIiwiTk9fQUxMT1dFRF9PUklHSU4iLCJyZWdpc3RlckhhbmRsZXIiLCJ3YXRjaCIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIiwiaGVhZGVyc0Zyb21BbGxvd2VkT3JpZ2luIiwiY3JlYXRlU2VydmVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwiY29ubmVjdGlvbiIsIndyaXRlSGVhZCIsInNldFRpbWVvdXQiLCJlbmQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7c0JBWEs7MkJBQ1E7OERBRW5CO3lCQUV1QjswQkFDVzs7Ozs7O0FBRXBELE1BQU0sRUFBRUMsa0JBQWtCLEVBQUUsR0FBR0Msc0JBQVcsRUFDcEMsRUFBRUMsVUFBVSxFQUFFQyxjQUFjLEVBQUUsR0FBR0Msa0JBQU87QUFFL0IsU0FBU0wsYUFBYU0sSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtJQUM3RSxJQUFJRCxpQkFBaUIsTUFBTTtRQUN6QkUsUUFBUUMsR0FBRyxDQUFDQywwQkFBZ0I7UUFFNUI7SUFDRjtJQUVBLElBQUlILGtCQUFrQixNQUFNO1FBQzFCQyxRQUFRQyxHQUFHLENBQUNFLDJCQUFpQjtRQUU3QjtJQUNGO0lBRUEsTUFBTUMsa0JBQWtCQyxJQUFBQSxjQUFLLEVBQUNQLGNBQWNELFVBQ3RDUyxhQUFhZixvQkFDYmdCLFVBQVVDLElBQUFBLGlDQUF3QixFQUFDVDtJQUV6Q1UsSUFBQUEsa0JBQVksRUFBQyxDQUFDQyxTQUFTQztRQUNyQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtRQUVuQixPQUFRRTtZQUNOLEtBQUtuQjtnQkFBYTtvQkFDZCxNQUFNLEVBQUVvQixVQUFVLEVBQUUsR0FBR0Y7b0JBRXZCQSxTQUFTRyxTQUFTLENBQUNSLFlBQVlDO29CQUUvQk0sV0FBV0UsVUFBVSxDQUFDO29CQUV0QlgsZ0JBQWdCO3dCQUNkTyxTQUFTSyxHQUFHO29CQUNkO2dCQUNGO2dCQUNBO1lBRUYsS0FBS3RCO2dCQUNIaUIsU0FBU0csU0FBUyxDQUFDUixZQUFZQztnQkFFL0JJLFNBQVNLLEdBQUc7Z0JBQ1o7UUFDSjtJQUNGLEdBQUdDLE1BQU0sQ0FBQ3JCO0FBQ1oifQ==