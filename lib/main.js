"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return main;
    }
});
var _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
var _listen = /*#__PURE__*/ _interop_require_default(require("./action/listen"));
var _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
var _commands = require("./commands");
var _messages = require("./messages");
var _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    var _options_port = options.port, port = _options_port === void 0 ? _defaults.DEFAULT_PORT : _options_port, _options_quietly = options.quietly, quietly = _options_quietly === void 0 ? _defaults.DEFAULT_QUIETLY : _options_quietly, _options_watchPattern = options.watchPattern, watchPattern = _options_watchPattern === void 0 ? _defaults.DEFAULT_WATCH_PATTERN : _options_watchPattern, _options_allowedOrigin = options.allowedOrigin, allowedOrigin = _options_allowedOrigin === void 0 ? _defaults.DEFAULT_ALLOWED_ORIGIN : _options_allowedOrigin;
    switch(command){
        case null:
            {
                console.log(_messages.NO_COMMAND_GIVEN_MESSAGE);
                break;
            }
        case _commands.HELP_COMMAND:
            {
                (0, _help.default)();
                break;
            }
        case _commands.LISTEN_COMMAND:
            {
                (0, _listen.default)(port, quietly, watchPattern, allowedOrigin);
                break;
            }
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        default:
            {
                console.log(_messages.COMMAND_NOT_RECOGNISED_MESSAGE);
                break;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaGVscEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaGVscFwiO1xuaW1wb3J0IGxpc3RlbkFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vbGlzdGVuXCI7XG5pbXBvcnQgdmVyc2lvbkFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vdmVyc2lvblwiO1xuXG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIExJU1RFTl9DT01NQU5ELCBWRVJTSU9OX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuaW1wb3J0IHsgTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFLCBDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QT1JULCBERUZBVUxUX1FVSUVUTFksIERFRkFVTFRfV0FUQ0hfUEFUVEVSTiwgREVGQVVMVF9BTExPV0VEX09SSUdJTiB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBwb3J0ID0gREVGQVVMVF9QT1JULFxuICAgICAgICAgIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFksXG4gICAgICAgICAgd2F0Y2hQYXR0ZXJuID0gREVGQVVMVF9XQVRDSF9QQVRURVJOLFxuICAgICAgICAgIGFsbG93ZWRPcmlnaW4gPSBERUZBVUxUX0FMTE9XRURfT1JJR0lOIH0gPSBvcHRpb25zO1xuXG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgbnVsbDoge1xuICAgICAgY29uc29sZS5sb2coTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBIRUxQX0NPTU1BTkQ6IHtcbiAgICAgIGhlbHBBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBMSVNURU5fQ09NTUFORDoge1xuICAgICAgbGlzdGVuQWN0aW9uKHBvcnQsIHF1aWV0bHksIHdhdGNoUGF0dGVybiwgYWxsb3dlZE9yaWdpbik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVkVSU0lPTl9DT01NQU5EOiB7XG4gICAgICB2ZXJzaW9uQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnNvbGUubG9nKENPTU1BTkRfTk9UX1JFQ09HTklTRURfTUVTU0FHRSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1haW4iLCJjb21tYW5kIiwiYXJndW1lbnQiLCJvcHRpb25zIiwicG9ydCIsIkRFRkFVTFRfUE9SVCIsInF1aWV0bHkiLCJERUZBVUxUX1FVSUVUTFkiLCJ3YXRjaFBhdHRlcm4iLCJERUZBVUxUX1dBVENIX1BBVFRFUk4iLCJhbGxvd2VkT3JpZ2luIiwiREVGQVVMVF9BTExPV0VEX09SSUdJTiIsImNvbnNvbGUiLCJsb2ciLCJOT19DT01NQU5EX0dJVkVOX01FU1NBR0UiLCJIRUxQX0NPTU1BTkQiLCJoZWxwQWN0aW9uIiwiTElTVEVOX0NPTU1BTkQiLCJsaXN0ZW5BY3Rpb24iLCJWRVJTSU9OX0NPTU1BTkQiLCJ2ZXJzaW9uQWN0aW9uIiwiQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJEOzZEQUNFOzhEQUNDO3dCQUVvQzt3QkFDVzt3QkFDb0I7Ozs7OztBQUU5RSxTQUFTQSxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNyRCxvQkFHbURBLFFBSDNDQyxNQUFBQSxrQ0FBT0Msc0JBQVkscUNBR3dCRixRQUYzQ0csU0FBQUEsd0NBQVVDLHlCQUFlLDZDQUVrQkosUUFEM0NLLGNBQUFBLGtEQUFlQywrQkFBcUIsbURBQ09OLFFBQTNDTyxlQUFBQSxvREFBZ0JDLGdDQUFzQjtJQUU5QyxPQUFRVjtRQUNOLEtBQUs7WUFBTTtnQkFDVFcsUUFBUUMsR0FBRyxDQUFDQyxrQ0FBd0I7Z0JBRXBDO1lBQ0Y7UUFFQSxLQUFLQyxzQkFBWTtZQUFFO2dCQUNqQkMsSUFBQUEsYUFBVTtnQkFFVjtZQUNGO1FBRUEsS0FBS0Msd0JBQWM7WUFBRTtnQkFDbkJDLElBQUFBLGVBQVksRUFBQ2QsTUFBTUUsU0FBU0UsY0FBY0U7Z0JBRTFDO1lBQ0Y7UUFFQSxLQUFLUyx5QkFBZTtZQUFFO2dCQUNwQkMsSUFBQUEsZ0JBQWE7Z0JBRWI7WUFDRjtRQUVBO1lBQVM7Z0JBQ1BSLFFBQVFDLEdBQUcsQ0FBQ1Esd0NBQThCO2dCQUUxQztZQUNGO0lBQ0Y7QUFDRiJ9