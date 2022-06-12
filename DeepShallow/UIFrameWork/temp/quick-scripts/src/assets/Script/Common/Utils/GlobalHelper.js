"use strict";
cc._RF.push(module, '97861Bw45RARLIDvaYH8CIV', 'GlobalHelper');
// Script/Common/Utils/GlobalHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalHelper = /** @class */ (function () {
    function GlobalHelper() {
    }
    GlobalHelper.Register = function (name, inst) {
        GlobalHelper[name] = inst;
    };
    GlobalHelper.Get = function (name) {
        return GlobalHelper._globalMap[name] ? GlobalHelper._globalMap[name] : undefined;
    };
    GlobalHelper._globalMap = {};
    return GlobalHelper;
}());
exports.default = GlobalHelper;
window["GlobalHelper"] = GlobalHelper;

cc._RF.pop();