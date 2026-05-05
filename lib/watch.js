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
const _chokidar = require("chokidar");
const _constants = require("./constants");
function watch(watchPattern, quietly) {
    if (!quietly) {
        console.log(`Watching "${watchPattern}".`);
    }
    const watcher = (0, _chokidar.watch)(watchPattern);
    let handler = null, unhandledEvents = false;
    watcher.on(_constants.READY, ()=>{
        watcher.on(_constants.ALL, (event, path)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgd2F0Y2ggYXMgd2F0Y2hFeCB9IGZyb20gXCJjaG9raWRhclwiO1xuXG5pbXBvcnQgeyBBTEwsIFJFQURZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKHdhdGNoUGF0dGVybiwgcXVpZXRseSkge1xuICBpZiAoIXF1aWV0bHkpIHtcbiAgICBjb25zb2xlLmxvZyhgV2F0Y2hpbmcgXCIke3dhdGNoUGF0dGVybn1cIi5gKTtcbiAgfVxuXG4gIGNvbnN0IHdhdGNoZXIgPSB3YXRjaEV4KHdhdGNoUGF0dGVybik7XG5cbiAgbGV0IGhhbmRsZXIgPSBudWxsLFxuICAgICAgdW5oYW5kbGVkRXZlbnRzID0gZmFsc2U7XG5cbiAgd2F0Y2hlci5vbihSRUFEWSwgKCkgPT4ge1xuICAgIHdhdGNoZXIub24oQUxMLCAoZXZlbnQsIHBhdGgpID0+IHtcbiAgICAgIHVuaGFuZGxlZEV2ZW50cyA9IHRydWU7XG5cbiAgICAgIGNhbGxIYW5kbGVyKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZWdpc3RlckhhbmRsZXI7XG5cbiAgZnVuY3Rpb24gY2FsbEhhbmRsZXIoKSB7XG4gICAgaWYgKHVuaGFuZGxlZEV2ZW50cyAmJiBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsaW5nIGhhbmRsZXIuXCIpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIGhhbmRsZXIgPSBudWxsO1xuXG4gICAgICB1bmhhbmRsZWRFdmVudHMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoYXJndW1lbnQpIHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJpbmcgaGFuZGxlci5cIik7XG4gICAgfVxuXG4gICAgaGFuZGxlciA9IGFyZ3VtZW50OyAgLy8vXG5cbiAgICBjYWxsSGFuZGxlcigpO1xuICB9XG59XG4iXSwibmFtZXMiOlsid2F0Y2giLCJ3YXRjaFBhdHRlcm4iLCJxdWlldGx5IiwiY29uc29sZSIsImxvZyIsIndhdGNoZXIiLCJ3YXRjaEV4IiwiaGFuZGxlciIsInVuaGFuZGxlZEV2ZW50cyIsIm9uIiwiUkVBRFkiLCJBTEwiLCJldmVudCIsInBhdGgiLCJjYWxsSGFuZGxlciIsInJlZ2lzdGVySGFuZGxlciIsImFyZ3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzBCQUpTOzJCQUVOO0FBRVosU0FBU0EsTUFBTUMsWUFBWSxFQUFFQyxPQUFPO0lBQ2pELElBQUksQ0FBQ0EsU0FBUztRQUNaQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUVILGFBQWEsRUFBRSxDQUFDO0lBQzNDO0lBRUEsTUFBTUksVUFBVUMsSUFBQUEsZUFBTyxFQUFDTDtJQUV4QixJQUFJTSxVQUFVLE1BQ1ZDLGtCQUFrQjtJQUV0QkgsUUFBUUksRUFBRSxDQUFDQyxnQkFBSyxFQUFFO1FBQ2hCTCxRQUFRSSxFQUFFLENBQUNFLGNBQUcsRUFBRSxDQUFDQyxPQUFPQztZQUN0Qkwsa0JBQWtCO1lBRWxCTTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQztJQUVQLFNBQVNEO1FBQ1AsSUFBSU4sbUJBQW1CRCxTQUFTO1lBQzlCLElBQUksQ0FBQ0wsU0FBUztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7WUFFQUc7WUFFQUEsVUFBVTtZQUVWQyxrQkFBa0I7UUFDcEI7SUFDRjtJQUVBLFNBQVNPLGdCQUFnQkMsUUFBUTtRQUMvQixJQUFJLENBQUNkLFNBQVM7WUFDWkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFFQUcsVUFBVVMsVUFBVyxHQUFHO1FBRXhCRjtJQUNGO0FBQ0YifQ==