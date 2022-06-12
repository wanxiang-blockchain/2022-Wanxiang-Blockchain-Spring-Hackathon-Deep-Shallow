
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/EnumUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0VudW1VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBZ0JBLENBQUM7SUFmVSwyQkFBaUIsR0FBeEIsVUFBeUIsQ0FBTTtRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFNLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFTSxrQkFBUSxHQUFmLFVBQWdCLENBQU07UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBckIsQ0FBcUIsQ0FBYSxDQUFDO0lBQ2xGLENBQUM7SUFFTSxtQkFBUyxHQUFoQixVQUFpQixDQUFNO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQXJCLENBQXFCLENBQWEsQ0FBQztJQUNsRixDQUFDO0lBRWMseUJBQWUsR0FBOUIsVUFBK0IsQ0FBTTtRQUNqQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxnQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW51bVV0aWxzIHtcbiAgICBzdGF0aWMgZ2V0TmFtZXNBbmRWYWx1ZXMoZTogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hbWVzKGUpLm1hcChfbmFtZSA9PiB7IHJldHVybiB7IG5hbWU6IF9uYW1lLCB2YWx1ZTogZVtfbmFtZV0gYXMgbnVtYmVyIH07IH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXROYW1lcyhlOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0VmFsdWVzKGUpLmZpbHRlcih2ID0+IHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSBhcyBzdHJpbmdbXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsdWVzKGU6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RWYWx1ZXMoZSkuZmlsdGVyKHYgPT4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIGFzIG51bWJlcltdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldE9iamVjdFZhbHVlcyhlOiBhbnkpOiAobnVtYmVyIHwgc3RyaW5nKVtdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGUpLm1hcChrID0+IGVba10pO1xuICAgIH1cbn0iXX0=