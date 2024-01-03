"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return watch;
    }
});
var _chokidar = /*#__PURE__*/ _interop_require_default(require("chokidar"));
var _constants = require("./constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function watch(watchPattern, quietly) {
    if (!quietly) {
        console.log('Watching "'.concat(watchPattern, '".'));
    }
    var watcher = _chokidar.default.watch(watchPattern);
    var handler, unhandledEvents = false;
    watcher.on(_constants.READY, function() {
        watcher.on(_constants.ALL, function(event, path) {
            unhandledEvents = true;
            callHandler();
        });
    });
    return registerHandler;
    function callHandler() {
        if (unhandledEvents && handler) {
            if (!quietly) {
                console.log("Calling handler.");
            }
            handler();
            handler = undefined;
            unhandledEvents = false;
        }
    }
    function registerHandler(argument) {
        if (!quietly) {
            console.log("Registering handler.");
        }
        handler = argument; ///
        callHandler();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuXG5pbXBvcnQgeyBBTEwsIFJFQURZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKHdhdGNoUGF0dGVybiwgcXVpZXRseSkge1xuICBpZiAoIXF1aWV0bHkpIHtcbiAgICBjb25zb2xlLmxvZyhgV2F0Y2hpbmcgXCIke3dhdGNoUGF0dGVybn1cIi5gKTtcbiAgfVxuXG4gIGNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaCh3YXRjaFBhdHRlcm4pO1xuXG4gIGxldCBoYW5kbGVyLFxuICAgICAgdW5oYW5kbGVkRXZlbnRzID0gZmFsc2U7XG5cbiAgd2F0Y2hlci5vbihSRUFEWSwgKCkgPT4ge1xuICAgIHdhdGNoZXIub24oQUxMLCAoZXZlbnQsIHBhdGgpID0+IHtcbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IHRydWU7XG5cbiAgICAgIGNhbGxIYW5kbGVyKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZWdpc3RlckhhbmRsZXI7XG5cbiAgZnVuY3Rpb24gY2FsbEhhbmRsZXIoKSB7XG4gICAgaWYgKHVuaGFuZGxlZEV2ZW50cyAmJiBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsaW5nIGhhbmRsZXIuXCIpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIGhhbmRsZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihhcmd1bWVudCkge1xuICAgIGlmICghcXVpZXRseSkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmluZyBoYW5kbGVyLlwiKTtcbiAgICB9XG5cbiAgICBoYW5kbGVyID0gYXJndW1lbnQ7ICAvLy9cblxuICAgIGNhbGxIYW5kbGVyKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ3YXRjaCIsIndhdGNoUGF0dGVybiIsInF1aWV0bHkiLCJjb25zb2xlIiwibG9nIiwid2F0Y2hlciIsImNob2tpZGFyIiwiaGFuZGxlciIsInVuaGFuZGxlZEV2ZW50cyIsIm9uIiwiUkVBRFkiLCJBTEwiLCJldmVudCIsInBhdGgiLCJjYWxsSGFuZGxlciIsInJlZ2lzdGVySGFuZGxlciIsInVuZGVmaW5lZCIsImFyZ3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OytEQUpIO3lCQUVNOzs7Ozs7QUFFWixTQUFTQSxNQUFNQyxZQUFZLEVBQUVDLE9BQU87SUFDakQsSUFBSSxDQUFDQSxTQUFTO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLGFBQXlCLE9BQWJILGNBQWE7SUFDeEM7SUFFQSxJQUFNSSxVQUFVQyxpQkFBUSxDQUFDTixLQUFLLENBQUNDO0lBRS9CLElBQUlNLFNBQ0FDLGtCQUFrQjtJQUV0QkgsUUFBUUksRUFBRSxDQUFDQyxnQkFBSyxFQUFFO1FBQ2hCTCxRQUFRSSxFQUFFLENBQUNFLGNBQUcsRUFBRSxTQUFDQyxPQUFPQztZQUN0Qkwsa0JBQWtCO1lBRWxCTTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQztJQUVQLFNBQVNEO1FBQ1AsSUFBSU4sbUJBQW1CRCxTQUFTO1lBQzlCLElBQUksQ0FBQ0wsU0FBUztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7WUFFQUc7WUFFQUEsVUFBVVM7WUFFVlIsa0JBQWtCO1FBQ3BCO0lBQ0Y7SUFFQSxTQUFTTyxnQkFBZ0JFLFFBQVE7UUFDL0IsSUFBSSxDQUFDZixTQUFTO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBRUFHLFVBQVVVLFVBQVcsR0FBRztRQUV4Qkg7SUFDRjtBQUNGIn0=