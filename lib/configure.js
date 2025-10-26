"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return configure;
    }
});
var _defaults = require("./defaults");
var _commands = require("./commands");
function configure(command, argument, options, main) {
    var _options_help = options.help, help = _options_help === void 0 ? _defaults.DEFAULT_HELP : _options_help, _options_version = options.version, version = _options_version === void 0 ? _defaults.DEFAULT_VERSION : _options_version;
    if (false) {
    ///
    } else if (help) {
        command = _commands.HELP_COMMAND;
    } else if (version) {
        command = _commands.VERSION_COMMAND;
    } else {
        command = _commands.LISTEN_COMMAND;
    }
    main(command, argument, options);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfSEVMUCwgREVGQVVMVF9WRVJTSU9OIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IEhFTFBfQ09NTUFORCwgVkVSU0lPTl9DT01NQU5ELCBMSVNURU5fQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucywgbWFpbikge1xuICBjb25zdCB7IGhlbHAgPSBERUZBVUxUX0hFTFAsIHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT04gfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoaGVscCkge1xuICAgIGNvbW1hbmQgPSBIRUxQX0NPTU1BTkQ7XG4gIH0gZWxzZSBpZiAodmVyc2lvbikge1xuICAgIGNvbW1hbmQgPSBWRVJTSU9OX0NPTU1BTkQ7XG4gIH0gZWxzZSB7XG4gICAgY29tbWFuZCA9IExJU1RFTl9DT01NQU5EO1xuICB9XG5cbiAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsiY29uZmlndXJlIiwiY29tbWFuZCIsImFyZ3VtZW50Iiwib3B0aW9ucyIsIm1haW4iLCJoZWxwIiwiREVGQVVMVF9IRUxQIiwidmVyc2lvbiIsIkRFRkFVTFRfVkVSU0lPTiIsIkhFTFBfQ09NTUFORCIsIlZFUlNJT05fQ09NTUFORCIsIkxJU1RFTl9DT01NQU5EIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7O3dCQUhzQjt3QkFDZ0I7QUFFL0MsU0FBU0EsVUFBVUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsSUFBSTtJQUNoRSxvQkFBMkRELFFBQW5ERSxNQUFBQSxrQ0FBT0Msc0JBQVkscUNBQWdDSCxRQUE5QkksU0FBQUEsd0NBQVVDLHlCQUFlO0lBRXRELElBQUksT0FBTztJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlILE1BQU07UUFDZkosVUFBVVEsc0JBQVk7SUFDeEIsT0FBTyxJQUFJRixTQUFTO1FBQ2xCTixVQUFVUyx5QkFBZTtJQUMzQixPQUFPO1FBQ0xULFVBQVVVLHdCQUFjO0lBQzFCO0lBRUFQLEtBQUtILFNBQVNDLFVBQVVDO0FBQzFCIn0=