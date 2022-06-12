
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/DebugWindowUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0RlYnVnV2luZG93VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUyxRQUFRLENBQUMsSUFBYztJQUM1QixPQUFPO1FBQVUsZ0JBQVM7YUFBVCxVQUFTLEVBQVQscUJBQVMsRUFBVCxJQUFTO1lBQVQsMkJBQVM7O1FBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLE9BQVQsSUFBSSxrQkFBTSxJQUFJLEdBQUssTUFBTSxNQUFLLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRDtJQUFBO0lBeURBLENBQUM7SUF4RGtCLDZCQUFhLEdBQTVCLFVBQTZCLE9BQWU7UUFDeEMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDYSxvQkFBSSxHQUFsQjtRQUNJLElBQU0sT0FBTyxHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDOUIsT0FBTztTQUNWO1FBQ0QsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixTQUFTLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU87WUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDaEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDbkI7WUFDRCxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZixPQUFPLFVBQVUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNqQix3RUFBd0U7WUFDeEUsOEJBQThCO1lBQzlCLDZCQUE2QjtZQUM3QiwwQ0FBMEM7WUFDMUMsSUFBSTtZQUNKLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDMUIsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVELEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUU7WUFDNUIsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsS0FBSyxJQUFJLEdBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ25CLElBQUksR0FBQyxLQUFLLFlBQVksRUFBRTtvQkFDcEIsU0FBUztpQkFDWjtxQkFBTSxJQUFJLEdBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQztxQkFDakM7aUJBQ0o7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLEdBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNuRDthQUNKO1lBRUQsTUFBTSxDQUFJLE9BQU8sU0FBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ3RDO1FBQ0QsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQUUsU0FBUzthQUFFO1lBQzVCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXpEQSxBQXlEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBfX21vZHVsYXI7XG5cbmZ1bmN0aW9uIGhvb2tDdG9yKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZ1bmMuY2FsbCh0aGlzLCAuLi5wYXJhbXMpIHx8IHRoaXM7XG4gICAgICAgIGZ1bmNbJ19fX2lucyddID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1Z1dpbmRvd1V0aWwge1xuICAgIHByaXZhdGUgc3RhdGljIGdldE1vZHVsZU5hbWUobW9kdWxlczogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlcyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2R1bGVzLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKVswXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBjb25zdCByZXF1aXJlID0gdHlwZW9mIF9fbW9kdWxhciAhPT0gJ3VuZGVmaW5lZCcgPyBfX21vZHVsYXIgOiB7fTtcbiAgICAgICAgaWYgKCFyZXF1aXJlIHx8ICFyZXF1aXJlLm1vZHVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZS5tb2R1bGVzO1xuICAgICAgICBsZXQgYWxsRXhwb3J0cyA9IHt9O1xuICAgICAgICBmdW5jdGlvbiBhZGRFeHBvcnRzKGssIG9iaiwgbW9kTmFtZSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBrO1xuICAgICAgICAgICAgaWYob2JqICYmIG9iai5uYW1lKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG9iai5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFsbEV4cG9ydHNba10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkRXhwb3J0cyhrICsgbW9kTmFtZSwgb2JqLCBtb2ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB3cmFwZWQgPSBvYmo7XG4gICAgICAgICAgICAvLyBpZihvYmoucHJvdG90eXBlICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID4gMSAmJiAhd3JhcGVkLl9fb3JpZ2luKXtcbiAgICAgICAgICAgIC8vICAgICB3cmFwZWQgPSBob29rQ3RvcihvYmopO1xuICAgICAgICAgICAgLy8gICAgIHdyYXBlZC5fX29yaWdpbiA9IG9iajtcbiAgICAgICAgICAgIC8vICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yod3JhcGVkLCBvYmopO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgYWxsRXhwb3J0c1tuYW1lXSA9IHdyYXBlZDtcbiAgICAgICAgICAgIHJldHVybiB3cmFwZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrIGluIGluc3RhbGxlZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNba107XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gbW9kdWxlLmZpbGU7XG4gICAgICAgICAgICBjb25zdCBleHBvcnRzID0gbW9kdWxlLm1vZHVsZSA/IG1vZHVsZS5tb2R1bGUuZXhwb3J0cyA6IHt9O1xuICAgICAgICAgICAgY29uc3QgbW9kTmFtZSA9IHRoaXMuZ2V0TW9kdWxlTmFtZShmaWxlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gZXhwb3J0cykge1xuICAgICAgICAgICAgICAgIGlmIChrID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0c1trXSA9IGFkZEV4cG9ydHMobW9kTmFtZSwgZXhwb3J0c1trXSwgbW9kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwb3J0c1ttb2ROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0c1ttb2ROYW1lXSA9IGV4cG9ydHNba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHBvcnRzW2tdID0gYWRkRXhwb3J0cyhrLCBleHBvcnRzW2tdLCBtb2ROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvd1tgJHttb2ROYW1lfV9tb2RgXSA9IGV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgayBpbiBhbGxFeHBvcnRzKSB7XG4gICAgICAgICAgICBpZiAod2luZG93W2tdKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICB3aW5kb3dba10gPSBhbGxFeHBvcnRzW2tdO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==