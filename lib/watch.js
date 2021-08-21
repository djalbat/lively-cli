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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuXG5pbXBvcnQgeyBBTEwsIFJFQURZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKHdhdGNoUGF0dGVybiwgcXVpZXRseSkge1xuICBpZiAoIXF1aWV0bHkpIHtcbiAgICBjb25zb2xlLmxvZyhgV2F0Y2hpbmcgXCIke3dhdGNoUGF0dGVybn1cIi5gKTtcbiAgfVxuXG4gIGNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaCh3YXRjaFBhdHRlcm4pO1xuXG4gIGxldCBoYW5kbGVyLFxuICAgICAgdW5oYW5kbGVkRXZlbnRzID0gZmFsc2U7XG5cbiAgd2F0Y2hlci5vbihSRUFEWSwgKCkgPT4ge1xuICAgIHdhdGNoZXIub24oQUxMLCAoZXZlbnQsIHBhdGgpID0+IHtcbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IHRydWU7XG5cbiAgICAgIGNhbGxIYW5kbGVyKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZWdpc3RlckhhbmRsZXI7XG5cbiAgZnVuY3Rpb24gY2FsbEhhbmRsZXIoKSB7XG4gICAgaWYgKHVuaGFuZGxlZEV2ZW50cyAmJiBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsaW5nIGhhbmRsZXIuXCIpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIGhhbmRsZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihhcmd1bWVudCkge1xuICAgIGlmICghcXVpZXRseSkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmluZyBoYW5kbGVyLlwiKTtcbiAgICB9XG5cbiAgICBoYW5kbGVyID0gYXJndW1lbnQ7ICAvLy9cblxuICAgIGNhbGxIYW5kbGVyKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQU1ZLEtBQUs7QUFKUixHQUFVLENBQVYsU0FBVTtBQUVKLEdBQWEsQ0FBYixVQUFhOzs7Ozs7U0FFaEIsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQW9CM0MsV0FBVyxZQUFYLFdBQVcsR0FBRyxDQUFDO1FBQ3RCLEVBQUUsRUFBRSxlQUFlLElBQUksT0FBTyxFQUFFLENBQUM7WUFDL0IsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLEVBQUMsZ0JBQWtCO1lBQ2hDLENBQUM7WUFFRCxPQUFPO1lBRVAsT0FBTyxHQUFHLFNBQVM7WUFFbkIsZUFBZSxHQUFHLEtBQUs7UUFDekIsQ0FBQztJQUNILENBQUM7UUFFUSxlQUFlLFlBQWYsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLEVBQUMsb0JBQXNCO1FBQ3BDLENBQUM7UUFFRCxPQUFPLEdBQUcsUUFBUSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUV4QixXQUFXO0lBQ2IsQ0FBQztJQXpDRCxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVUsRUFBZSxNQUFFLENBQWYsWUFBWSxHQUFDLEdBQUU7SUFDMUMsQ0FBQztJQUVELEdBQUssQ0FBQyxPQUFPLEdBVE0sU0FBVSxTQVNKLEtBQUssQ0FBQyxZQUFZO0lBRTNDLEdBQUcsQ0FBQyxPQUFPLEVBQ1AsZUFBZSxHQUFHLEtBQUs7SUFFM0IsT0FBTyxDQUFDLEVBQUUsQ0FaZSxVQUFhLG1CQVlkLENBQUM7UUFDdkIsT0FBTyxDQUFDLEVBQUUsQ0FiYSxVQUFhLGVBYW5CLEtBQUssRUFBRSxJQUFJLEVBQUssQ0FBQztZQUNoQyxlQUFlLEdBQUcsSUFBSTtZQUV0QixXQUFXO1FBQ2IsQ0FBQztJQUNILENBQUM7V0FFTSxlQUFlO0FBeUJ4QixDQUFDIn0=