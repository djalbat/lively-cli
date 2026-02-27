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
const _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
const _listen = /*#__PURE__*/ _interop_require_default(require("./action/listen"));
const _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
const _commands = require("./commands");
const _messages = require("./messages");
const _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    const { port = _defaults.DEFAULT_PORT, quietly = _defaults.DEFAULT_QUIETLY, watchPattern = _defaults.DEFAULT_WATCH_PATTERN, allowedOrigin = _defaults.DEFAULT_ALLOWED_ORIGIN } = options;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaGVscEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaGVscFwiO1xuaW1wb3J0IGxpc3RlbkFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vbGlzdGVuXCI7XG5pbXBvcnQgdmVyc2lvbkFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vdmVyc2lvblwiO1xuXG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIExJU1RFTl9DT01NQU5ELCBWRVJTSU9OX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuaW1wb3J0IHsgTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFLCBDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QT1JULCBERUZBVUxUX1FVSUVUTFksIERFRkFVTFRfV0FUQ0hfUEFUVEVSTiwgREVGQVVMVF9BTExPV0VEX09SSUdJTiB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBwb3J0ID0gREVGQVVMVF9QT1JULFxuICAgICAgICAgIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFksXG4gICAgICAgICAgd2F0Y2hQYXR0ZXJuID0gREVGQVVMVF9XQVRDSF9QQVRURVJOLFxuICAgICAgICAgIGFsbG93ZWRPcmlnaW4gPSBERUZBVUxUX0FMTE9XRURfT1JJR0lOIH0gPSBvcHRpb25zO1xuXG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgbnVsbDoge1xuICAgICAgY29uc29sZS5sb2coTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBIRUxQX0NPTU1BTkQ6IHtcbiAgICAgIGhlbHBBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBMSVNURU5fQ09NTUFORDoge1xuICAgICAgbGlzdGVuQWN0aW9uKHBvcnQsIHF1aWV0bHksIHdhdGNoUGF0dGVybiwgYWxsb3dlZE9yaWdpbik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVkVSU0lPTl9DT01NQU5EOiB7XG4gICAgICB2ZXJzaW9uQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnNvbGUubG9nKENPTU1BTkRfTk9UX1JFQ09HTklTRURfTUVTU0FHRSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1haW4iLCJjb21tYW5kIiwiYXJndW1lbnQiLCJvcHRpb25zIiwicG9ydCIsIkRFRkFVTFRfUE9SVCIsInF1aWV0bHkiLCJERUZBVUxUX1FVSUVUTFkiLCJ3YXRjaFBhdHRlcm4iLCJERUZBVUxUX1dBVENIX1BBVFRFUk4iLCJhbGxvd2VkT3JpZ2luIiwiREVGQVVMVF9BTExPV0VEX09SSUdJTiIsImNvbnNvbGUiLCJsb2ciLCJOT19DT01NQU5EX0dJVkVOX01FU1NBR0UiLCJIRUxQX0NPTU1BTkQiLCJoZWxwQWN0aW9uIiwiTElTVEVOX0NPTU1BTkQiLCJsaXN0ZW5BY3Rpb24iLCJWRVJTSU9OX0NPTU1BTkQiLCJ2ZXJzaW9uQWN0aW9uIiwiQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzZEQVJEOytEQUNFO2dFQUNDOzBCQUVvQzswQkFDVzswQkFDb0I7Ozs7OztBQUU5RSxTQUFTQSxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNyRCxNQUFNLEVBQUVDLE9BQU9DLHNCQUFZLEVBQ25CQyxVQUFVQyx5QkFBZSxFQUN6QkMsZUFBZUMsK0JBQXFCLEVBQ3BDQyxnQkFBZ0JDLGdDQUFzQixFQUFFLEdBQUdSO0lBRW5ELE9BQVFGO1FBQ04sS0FBSztZQUFNO2dCQUNUVyxRQUFRQyxHQUFHLENBQUNDLGtDQUF3QjtnQkFFcEM7WUFDRjtRQUVBLEtBQUtDLHNCQUFZO1lBQUU7Z0JBQ2pCQyxJQUFBQSxhQUFVO2dCQUVWO1lBQ0Y7UUFFQSxLQUFLQyx3QkFBYztZQUFFO2dCQUNuQkMsSUFBQUEsZUFBWSxFQUFDZCxNQUFNRSxTQUFTRSxjQUFjRTtnQkFFMUM7WUFDRjtRQUVBLEtBQUtTLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUE7WUFBUztnQkFDUFIsUUFBUUMsR0FBRyxDQUFDUSx3Q0FBOEI7Z0JBRTFDO1lBQ0Y7SUFDRjtBQUNGIn0=