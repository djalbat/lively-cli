"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return prepare;
    }
});
var _defaults = require("./defaults");
var _commands = require("./commands");
function prepare(command, argument, options, main) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVwYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0hFTFAsIERFRkFVTFRfVkVSU0lPTiB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIFZFUlNJT05fQ09NTUFORCwgTElTVEVOX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zLCBtYWluKSB7XG4gIGNvbnN0IHsgaGVscCA9IERFRkFVTFRfSEVMUCwgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTiB9ID0gb3B0aW9ucztcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChoZWxwKSB7XG4gICAgY29tbWFuZCA9IEhFTFBfQ09NTUFORDtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uKSB7XG4gICAgY29tbWFuZCA9IFZFUlNJT05fQ09NTUFORDtcbiAgfSBlbHNlIHtcbiAgICBjb21tYW5kID0gTElTVEVOX0NPTU1BTkQ7XG4gIH1cblxuICBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKTtcbn1cbiJdLCJuYW1lcyI6WyJwcmVwYXJlIiwiY29tbWFuZCIsImFyZ3VtZW50Iiwib3B0aW9ucyIsIm1haW4iLCJoZWxwIiwiREVGQVVMVF9IRUxQIiwidmVyc2lvbiIsIkRFRkFVTFRfVkVSU0lPTiIsIkhFTFBfQ09NTUFORCIsIlZFUlNJT05fQ09NTUFORCIsIkxJU1RFTl9DT01NQU5EIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7O3dCQUhzQjt3QkFDZ0I7QUFFL0MsU0FBU0EsUUFBUUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsSUFBSTtJQUM5RCxvQkFBMkRELFFBQW5ERSxNQUFBQSxrQ0FBT0Msc0JBQVkscUNBQWdDSCxRQUE5QkksU0FBQUEsd0NBQVVDLHlCQUFlO0lBRXRELElBQUksT0FBTztJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlILE1BQU07UUFDZkosVUFBVVEsc0JBQVk7SUFDeEIsT0FBTyxJQUFJRixTQUFTO1FBQ2xCTixVQUFVUyx5QkFBZTtJQUMzQixPQUFPO1FBQ0xULFVBQVVVLHdCQUFjO0lBQzFCO0lBRUFQLEtBQUtILFNBQVNDLFVBQVVDO0FBQzFCIn0=