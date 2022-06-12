
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Logic/Manager/PlayerMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bea7406655LzLidqx+dJrtq', 'PlayerMgr');
// Script/Logic/Manager/PlayerMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseMgr_1 = require("./BaseMgr");
var PlayerMgr = /** @class */ (function (_super) {
    __extends(PlayerMgr, _super);
    function PlayerMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerMgr.prototype.onConfigChange = function () {
    };
    return PlayerMgr;
}(BaseMgr_1.BaseMgr));
exports.default = PlayerMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9naWMvTWFuYWdlci9QbGF5ZXJNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9DO0FBRXBDO0lBQXVDLDZCQUFPO0lBQTlDOztJQUtBLENBQUM7SUFIVSxrQ0FBYyxHQUFyQjtJQUVBLENBQUM7SUFDTCxnQkFBQztBQUFELENBTEEsQUFLQyxDQUxzQyxpQkFBTyxHQUs3QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNZ3IgfSBmcm9tIFwiLi9CYXNlTWdyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1nciBleHRlbmRzIEJhc2VNZ3Ige1xuXG4gICAgcHVibGljIG9uQ29uZmlnQ2hhbmdlKCkge1xuICAgICAgICBcbiAgICB9XG59Il19