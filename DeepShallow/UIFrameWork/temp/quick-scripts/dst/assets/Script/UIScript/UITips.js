
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UITips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff954WkF+tGYpoJLOVBFST0', 'UITips');
// Script/UIScript/UITips.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SysDefine_1 = require("../UIFrame/config/SysDefine");
var Struct_1 = require("../UIFrame/Struct");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UITips = /** @class */ (function (_super) {
    __extends(UITips, _super);
    function UITips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modalType = new Struct_1.ModalType(SysDefine_1.ModalOpacity.OpacityHalf, true);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    UITips.prototype.start = function () {
    };
    UITips.prototype.onShow = function (str) {
        this.view.Tips.string = str;
    };
    UITips = __decorate([
        ccclass
    ], UITips);
    return UITips;
}(UIForm_1.UIWindow));
exports.default = UITips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUEyRDtBQUMzRCw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFRO0lBQTVDO1FBQUEscUVBa0JDO1FBaEJHLGVBQVMsR0FBRyxJQUFJLGtCQUFTLENBQUMsd0JBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBZTFELGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsZUFBZTtJQUVmLHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEdBQVc7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUFmZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtCMUI7SUFBRCxhQUFDO0NBbEJELEFBa0JDLENBbEJtQyxpQkFBUSxHQWtCM0M7a0JBbEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVGlwc19BdXRvIGZyb20gXCIuLi9BdXRvU2NyaXB0cy9VSVRpcHNfQXV0b1wiO1xuaW1wb3J0IHsgTW9kYWxPcGFjaXR5IH0gZnJvbSBcIi4uL1VJRnJhbWUvY29uZmlnL1N5c0RlZmluZVwiO1xuaW1wb3J0IHsgTW9kYWxUeXBlIH0gZnJvbSBcIi4uL1VJRnJhbWUvU3RydWN0XCI7XG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gXCIuLi9VSUZyYW1lL1VJRm9ybVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVGlwcyBleHRlbmRzIFVJV2luZG93IHtcblxuICAgIG1vZGFsVHlwZSA9IG5ldyBNb2RhbFR5cGUoTW9kYWxPcGFjaXR5Lk9wYWNpdHlIYWxmLCB0cnVlKTtcblxuICAgIHZpZXc6IFVJVGlwc19BdXRvO1xuICAgIFxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBvblNob3coc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3LlRpcHMuc3RyaW5nID0gc3RyO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=