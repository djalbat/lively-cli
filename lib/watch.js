"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watch;
var _chokidar = _interopRequireDefault(require("chokidar"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function watch(watchPattern, quietly) {
    var callHandler = function callHandler() {
        if (unhandledEvents && handler) {
            if (!quietly) {
                console.log("Calling handler.");
            }
            handler();
            handler = undefined;
            unhandledEvents = false;
        }
    };
    var registerHandler = function registerHandler(argument) {
        if (!quietly) {
            console.log("Registering handler.");
        }
        handler = argument; ///
        callHandler();
    };
    if (!quietly) {
        console.log("Watching \"".concat(watchPattern, "\"."));
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
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJuYW1lcyI6WyJjaG9raWRhciIsIkFMTCIsIlJFQURZIiwid2F0Y2giLCJ3YXRjaFBhdHRlcm4iLCJxdWlldGx5IiwiY29uc29sZSIsImxvZyIsIndhdGNoZXIiLCJoYW5kbGVyIiwidW5oYW5kbGVkRXZlbnRzIiwib24iLCJldmVudCIsInBhdGgiLCJjYWxsSGFuZGxlciIsInJlZ2lzdGVySGFuZGxlciIsInVuZGVmaW5lZCIsImFyZ3VtZW50Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQU1ZLEtBQUs7QUFKUixHQUFVLENBQVYsU0FBVTtBQUVKLEdBQWEsQ0FBYixVQUFhOzs7Ozs7U0FFaEIsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQW9CM0MsV0FBVyxHQUFwQixRQUFRLENBQUMsV0FBVyxHQUFHLENBQUM7UUFDdEIsRUFBRSxFQUFFLGVBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMvQixFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsRUFBQyxnQkFBa0I7WUFDaEMsQ0FBQztZQUVELE9BQU87WUFFUCxPQUFPLEdBQUcsU0FBUztZQUVuQixlQUFlLEdBQUcsS0FBSztRQUN6QixDQUFDO0lBQ0gsQ0FBQztRQUVRLGVBQWUsR0FBeEIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxFQUFDLG9CQUFzQjtRQUNwQyxDQUFDO1FBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFeEIsV0FBVztJQUNiLENBQUM7SUF6Q0QsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFVLEVBQWUsTUFBRSxDQUFmLFlBQVksR0FBQyxHQUFFO0lBQzFDLENBQUM7SUFFRCxHQUFLLENBQUMsT0FBTyxHQVRNLFNBQVUsU0FTSixLQUFLLENBQUMsWUFBWTtJQUUzQyxHQUFHLENBQUMsT0FBTyxFQUNQLGVBQWUsR0FBRyxLQUFLO0lBRTNCLE9BQU8sQ0FBQyxFQUFFLENBWmUsVUFBYSxRQVlwQixRQUNwQixHQUQwQixDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxFQUFFLENBYmEsVUFBYSxNQWFwQixRQUFRLENBQVAsS0FBSyxFQUFFLElBQUksRUFBSyxDQUFDO1lBQ2hDLGVBQWUsR0FBRyxJQUFJO1lBRXRCLFdBQVc7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlO0FBeUJ4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaG9raWRhciBmcm9tIFwiY2hva2lkYXJcIjtcblxuaW1wb3J0IHsgQUxMLCBSRUFEWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXRjaCh3YXRjaFBhdHRlcm4sIHF1aWV0bHkpIHtcbiAgaWYgKCFxdWlldGx5KSB7XG4gICAgY29uc29sZS5sb2coYFdhdGNoaW5nIFwiJHt3YXRjaFBhdHRlcm59XCIuYCk7XG4gIH1cblxuICBjb25zdCB3YXRjaGVyID0gY2hva2lkYXIud2F0Y2god2F0Y2hQYXR0ZXJuKTtcblxuICBsZXQgaGFuZGxlcixcbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IGZhbHNlO1xuXG4gIHdhdGNoZXIub24oUkVBRFksICgpID0+IHtcbiAgICB3YXRjaGVyLm9uKEFMTCwgKGV2ZW50LCBwYXRoKSA9PiB7XG4gICAgICB1bmhhbmRsZWRFdmVudHMgPSB0cnVlO1xuXG4gICAgICBjYWxsSGFuZGxlcigpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVnaXN0ZXJIYW5kbGVyO1xuXG4gIGZ1bmN0aW9uIGNhbGxIYW5kbGVyKCkge1xuICAgIGlmICh1bmhhbmRsZWRFdmVudHMgJiYgaGFuZGxlcikge1xuICAgICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBoYW5kbGVyLlwiKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICBoYW5kbGVyID0gdW5kZWZpbmVkO1xuXG4gICAgICB1bmhhbmRsZWRFdmVudHMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoYXJndW1lbnQpIHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJpbmcgaGFuZGxlci5cIik7XG4gICAgfVxuXG4gICAgaGFuZGxlciA9IGFyZ3VtZW50OyAgLy8vXG5cbiAgICBjYWxsSGFuZGxlcigpO1xuICB9XG59XG4iXX0=