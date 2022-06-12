"use strict";
cc._RF.push(module, 'c0967gbR3dMcbkSIeGpt59T', 'EnumUtils');
// Script/Common/Utils/EnumUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUtils = void 0;
var EnumUtils = /** @class */ (function () {
    function EnumUtils() {
    }
    EnumUtils.getNamesAndValues = function (e) {
        return this.getNames(e).map(function (_name) { return { name: _name, value: e[_name] }; });
    };
    EnumUtils.getNames = function (e) {
        return this.getObjectValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumUtils.getValues = function (e) {
        return this.getObjectValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumUtils.getObjectValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumUtils;
}());
exports.EnumUtils = EnumUtils;

cc._RF.pop();