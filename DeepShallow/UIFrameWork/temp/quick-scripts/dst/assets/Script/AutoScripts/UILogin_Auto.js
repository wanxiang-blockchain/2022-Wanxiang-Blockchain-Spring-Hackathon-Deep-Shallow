
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UILogin_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a88begnTmZOIY7ImNZFjPCO', 'UILogin_Auto');
// Script/AutoScripts/UILogin_Auto.ts

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
var ButtonPlus_1 = require("./../Common/Components/ButtonPlus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILogin_Auto = /** @class */ (function (_super) {
    __extends(UILogin_Auto, _super);
    function UILogin_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Login = null;
        _this.btn = null;
        _this.Name = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], UILogin_Auto.prototype, "Login", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UILogin_Auto.prototype, "btn", void 0);
    __decorate([
        property(cc.Label)
    ], UILogin_Auto.prototype, "Name", void 0);
    UILogin_Auto = __decorate([
        ccclass
    ], UILogin_Auto);
    return UILogin_Auto;
}(cc.Component));
exports.default = UILogin_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlMb2dpbl9BdXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQVFDO1FBTkEsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixTQUFHLEdBQWUsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYSxJQUFJLENBQUM7O0lBRXZCLENBQUM7SUFOQTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7NkNBQ0U7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRztJQU5GLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FRaEM7SUFBRCxtQkFBQztDQVJELEFBUUMsQ0FSeUMsRUFBRSxDQUFDLFNBQVMsR0FRckQ7a0JBUm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCdXR0b25QbHVzIGZyb20gXCIuLy4uL0NvbW1vbi9Db21wb25lbnRzL0J1dHRvblBsdXNcIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUxvZ2luX0F1dG8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoY2MuTm9kZSlcblx0TG9naW46IGNjLk5vZGUgPSBudWxsO1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0YnRuOiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHROYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gXG59Il19