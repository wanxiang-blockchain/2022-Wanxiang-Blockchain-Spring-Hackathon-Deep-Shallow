
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/GlobalHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0dsb2JhbEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFRQSxDQUFDO0lBTmlCLHFCQUFRLEdBQXRCLFVBQXVCLElBQVksRUFBRSxJQUFTO1FBQzFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNhLGdCQUFHLEdBQWpCLFVBQXFCLElBQVk7UUFDN0IsT0FBTyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUYsQ0FBQztJQU5jLHVCQUFVLEdBQXlCLEVBQUUsQ0FBQztJQU96RCxtQkFBQztDQVJELEFBUUMsSUFBQTtrQkFSb0IsWUFBWTtBQVVqQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsWUFBWSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsSGVscGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfZ2xvYmFsTWFwOiB7IFtrOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXIobmFtZTogc3RyaW5nLCBpbnN0OiBhbnkpIHtcbiAgICAgICAgR2xvYmFsSGVscGVyW25hbWVdID0gaW5zdDtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBHZXQ8VD4obmFtZTogc3RyaW5nKTogVCB7XG4gICAgICAgIHJldHVybiBHbG9iYWxIZWxwZXIuX2dsb2JhbE1hcFtuYW1lXSA/IEdsb2JhbEhlbHBlci5fZ2xvYmFsTWFwW25hbWVdIGFzIFQgOiB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG53aW5kb3dbXCJHbG9iYWxIZWxwZXJcIl0gPSBHbG9iYWxIZWxwZXI7Il19