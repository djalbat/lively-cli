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
    var handler = null, unhandledEvents = false;
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
            handler = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuXG5pbXBvcnQgeyBBTEwsIFJFQURZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKHdhdGNoUGF0dGVybiwgcXVpZXRseSkge1xuICBpZiAoIXF1aWV0bHkpIHtcbiAgICBjb25zb2xlLmxvZyhgV2F0Y2hpbmcgXCIke3dhdGNoUGF0dGVybn1cIi5gKTtcbiAgfVxuXG4gIGNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaCh3YXRjaFBhdHRlcm4pO1xuXG4gIGxldCBoYW5kbGVyID0gbnVsbCxcbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IGZhbHNlO1xuXG4gIHdhdGNoZXIub24oUkVBRFksICgpID0+IHtcbiAgICB3YXRjaGVyLm9uKEFMTCwgKGV2ZW50LCBwYXRoKSA9PiB7XG4gICAgICB1bmhhbmRsZWRFdmVudHMgPSB0cnVlO1xuXG4gICAgICBjYWxsSGFuZGxlcigpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVnaXN0ZXJIYW5kbGVyO1xuXG4gIGZ1bmN0aW9uIGNhbGxIYW5kbGVyKCkge1xuICAgIGlmICh1bmhhbmRsZWRFdmVudHMgJiYgaGFuZGxlcikge1xuICAgICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBoYW5kbGVyLlwiKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICBoYW5kbGVyID0gbnVsbDtcblxuICAgICAgdW5oYW5kbGVkRXZlbnRzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGFyZ3VtZW50KSB7XG4gICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdGVyaW5nIGhhbmRsZXIuXCIpO1xuICAgIH1cblxuICAgIGhhbmRsZXIgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgY2FsbEhhbmRsZXIoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIndhdGNoIiwid2F0Y2hQYXR0ZXJuIiwicXVpZXRseSIsImNvbnNvbGUiLCJsb2ciLCJ3YXRjaGVyIiwiY2hva2lkYXIiLCJoYW5kbGVyIiwidW5oYW5kbGVkRXZlbnRzIiwib24iLCJSRUFEWSIsIkFMTCIsImV2ZW50IiwicGF0aCIsImNhbGxIYW5kbGVyIiwicmVnaXN0ZXJIYW5kbGVyIiwiYXJndW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7K0RBSkg7eUJBRU07Ozs7OztBQUVaLFNBQVNBLE1BQU1DLFlBQVksRUFBRUMsT0FBTztJQUNqRCxJQUFJLENBQUNBLFNBQVM7UUFDWkMsUUFBUUMsR0FBRyxDQUFDLEFBQUMsYUFBeUIsT0FBYkgsY0FBYTtJQUN4QztJQUVBLElBQU1JLFVBQVVDLGlCQUFRLENBQUNOLEtBQUssQ0FBQ0M7SUFFL0IsSUFBSU0sVUFBVSxNQUNWQyxrQkFBa0I7SUFFdEJILFFBQVFJLEVBQUUsQ0FBQ0MsZ0JBQUssRUFBRTtRQUNoQkwsUUFBUUksRUFBRSxDQUFDRSxjQUFHLEVBQUUsU0FBQ0MsT0FBT0M7WUFDdEJMLGtCQUFrQjtZQUVsQk07UUFDRjtJQUNGO0lBRUEsT0FBT0M7SUFFUCxTQUFTRDtRQUNQLElBQUlOLG1CQUFtQkQsU0FBUztZQUM5QixJQUFJLENBQUNMLFNBQVM7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1lBRUFHO1lBRUFBLFVBQVU7WUFFVkMsa0JBQWtCO1FBQ3BCO0lBQ0Y7SUFFQSxTQUFTTyxnQkFBZ0JDLFFBQVE7UUFDL0IsSUFBSSxDQUFDZCxTQUFTO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBRUFHLFVBQVVTLFVBQVcsR0FBRztRQUV4QkY7SUFDRjtBQUNGIn0=