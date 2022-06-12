"use strict";
cc._RF.push(module, '84e75b8tBhNjY7KyBAgOsH/', 'DebugWindowUtils');
// Script/Common/Utils/DebugWindowUtils.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function hookCtor(func) {
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var result = func.call.apply(func, __spreadArrays([this], params)) || this;
        func['___ins'] = result;
        return result;
    };
}
var DebugWindowUtil = /** @class */ (function () {
    function DebugWindowUtil() {
    }
    DebugWindowUtil.getModuleName = function (modules) {
        if (typeof modules !== 'string') {
            return modules;
        }
        return modules.split('/').pop().split('.')[0];
    };
    DebugWindowUtil.init = function () {
        var require = typeof __modular !== 'undefined' ? __modular : {};
        if (!require || !require.modules) {
            return;
        }
        var installedModules = require.modules;
        var allExports = {};
        function addExports(k, obj, modName) {
            var name = k;
            if (obj && obj.name) {
                name = obj.name;
            }
            if (allExports[k]) {
                return addExports(k + modName, obj, modName);
            }
            var wraped = obj;
            // if(obj.prototype && Object.keys(obj).length > 1 && !wraped.__origin){
            //     wraped = hookCtor(obj);
            //     wraped.__origin = obj;
            //     Object.setPrototypeOf(wraped, obj);
            // }
            allExports[name] = wraped;
            return wraped;
        }
        for (var k in installedModules) {
            var module = installedModules[k];
            var file = module.file;
            var exports = module.module ? module.module.exports : {};
            var modName = this.getModuleName(file);
            for (var k_1 in exports) {
                if (k_1 === '__esModule') {
                    continue;
                }
                else if (k_1 === 'default') {
                    exports[k_1] = addExports(modName, exports[k_1], modName);
                    if (!exports[modName]) {
                        exports[modName] = exports[k_1];
                    }
                }
                else {
                    exports[k_1] = addExports(k_1, exports[k_1], modName);
                }
            }
            window[modName + "_mod"] = exports;
        }
        for (var k in allExports) {
            if (window[k]) {
                continue;
            }
            window[k] = allExports[k];
        }
    };
    return DebugWindowUtil;
}());
exports.default = DebugWindowUtil;

cc._RF.pop();