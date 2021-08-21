"use strict";
var _watch = _interopRequireDefault(require("./watch"));
var _defaults = require("./defaults");
var _statusCodes = require("./statusCodes");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createLiveReloadHandler(watchPattern, param) {
    var quietly = param === void 0 ? _defaults.DEFAULT_QUIETLY : param;
    var statusCode = _statusCodes.OK_200_STATUS_CODE, registerHandler = (0, _watch).default(watchPattern, quietly);
    return function liveReloadHandler(request, response) {
        var connection = response.connection;
        response.writeHead(statusCode);
        connection.setTimeout(0);
        registerHandler(function() {
            response.end();
        });
    };
}
module.exports = createLiveReloadHandler;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVMaXZlUmVsb2FkSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdhdGNoIGZyb20gXCIuL3dhdGNoXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfUVVJRVRMWSB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBPS18yMDBfU1RBVFVTX0NPREUgfSBmcm9tIFwiLi9zdGF0dXNDb2Rlc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXZlUmVsb2FkSGFuZGxlcih3YXRjaFBhdHRlcm4sIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFkpIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9IE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyID0gd2F0Y2god2F0Y2hQYXR0ZXJuLCBxdWlldGx5KTtcblxuICByZXR1cm4gZnVuY3Rpb24gbGl2ZVJlbG9hZEhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHJlc3BvbnNlO1xuXG4gICAgcmVzcG9uc2Uud3JpdGVIZWFkKHN0YXR1c0NvZGUpO1xuXG4gICAgY29ubmVjdGlvbi5zZXRUaW1lb3V0KDApO1xuXG4gICAgcmVnaXN0ZXJIYW5kbGVyKCgpID0+IHtcbiAgICAgIHJlc3BvbnNlLmVuZCgpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTGl2ZVJlbG9hZEhhbmRsZXI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTtBQUVNLEdBQVMsQ0FBVCxNQUFTO0FBRUssR0FBWSxDQUFaLFNBQVk7QUFDVCxHQUFlLENBQWYsWUFBZTs7Ozs7O1NBRXpDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxLQUF5QixFQUFFLENBQUM7UUFBNUIsT0FBTyxHQUFQLEtBQXlCLGNBSHhDLFNBQVksbUJBR0csS0FBeUI7SUFDdEUsR0FBSyxDQUFDLFVBQVUsR0FIaUIsWUFBZSxxQkFJMUMsZUFBZSxPQVBMLE1BQVMsVUFPSyxZQUFZLEVBQUUsT0FBTztvQkFFbkMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3BELEdBQUssQ0FBRyxVQUFVLEdBQUssUUFBUSxDQUF2QixVQUFVO1FBRWxCLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVTtRQUU3QixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkIsZUFBZSxZQUFPLENBQUM7WUFDckIsUUFBUSxDQUFDLEdBQUc7UUFDZCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLHVCQUF1QiJ9