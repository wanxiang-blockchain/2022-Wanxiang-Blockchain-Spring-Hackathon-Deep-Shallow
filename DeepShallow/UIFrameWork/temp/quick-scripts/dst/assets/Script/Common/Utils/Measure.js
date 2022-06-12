
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/Measure.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88f3djvTDJHMY+UnVZdcrvg', 'Measure');
// Script/Common/Utils/Measure.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measure = void 0;
var measure = function (target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var start = performance.now();
        var result = originalMethod.apply(this, args);
        var finish = performance.now();
        console.log(propertyKey + " Execution time: " + (finish - start).toFixed(2) + " milliseconds");
        return result;
    };
    return descriptor;
};
exports.measure = measure;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL01lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxPQUFPLEdBQUcsVUFDckIsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLFVBQThCO0lBRTlCLElBQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFFeEMsVUFBVSxDQUFDLEtBQUssR0FBRztRQUFVLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ2xDLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBSSxXQUFXLHlCQUFvQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFlLENBQUMsQ0FBQztRQUMxRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFoQlcsUUFBQSxPQUFPLFdBZ0JsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtZWFzdXJlID0gKFxuICB0YXJnZXQ6IE9iamVjdCxcbiAgcHJvcGVydHlLZXk6IHN0cmluZyxcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yXG4pID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgY29uc3QgZmluaXNoID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coYCR7cHJvcGVydHlLZXl9IEV4ZWN1dGlvbiB0aW1lOiAkeyhmaW5pc2ggLSBzdGFydCkudG9GaXhlZCgyKX0gbWlsbGlzZWNvbmRzYCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07Il19