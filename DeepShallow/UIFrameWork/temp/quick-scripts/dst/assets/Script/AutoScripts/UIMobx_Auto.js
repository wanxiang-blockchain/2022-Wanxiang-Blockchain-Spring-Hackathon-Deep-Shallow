
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UIMobx_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09c65yYakpLkJuHNEjfCfPN', 'UIMobx_Auto');
// Script/AutoScripts/UIMobx_Auto.ts

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
var UIMobx_Auto = /** @class */ (function (_super) {
    __extends(UIMobx_Auto, _super);
    function UIMobx_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Close = null;
        _this.Txt1 = null;
        _this.Btn1 = null;
        _this.Txt2 = null;
        _this.Btn2 = null;
        _this.Txt3 = null;
        _this.Txt4 = null;
        _this.Btn3 = null;
        _this.Btn4 = null;
        _this.Txt5 = null;
        return _this;
    }
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMobx_Auto.prototype, "Close", void 0);
    __decorate([
        property(cc.Label)
    ], UIMobx_Auto.prototype, "Txt1", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMobx_Auto.prototype, "Btn1", void 0);
    __decorate([
        property(cc.Label)
    ], UIMobx_Auto.prototype, "Txt2", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMobx_Auto.prototype, "Btn2", void 0);
    __decorate([
        property(cc.Label)
    ], UIMobx_Auto.prototype, "Txt3", void 0);
    __decorate([
        property(cc.Label)
    ], UIMobx_Auto.prototype, "Txt4", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMobx_Auto.prototype, "Btn3", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMobx_Auto.prototype, "Btn4", void 0);
    __decorate([
        property(cc.Label)
    ], UIMobx_Auto.prototype, "Txt5", void 0);
    UIMobx_Auto = __decorate([
        ccclass
    ], UIMobx_Auto);
    return UIMobx_Auto;
}(cc.Component));
exports.default = UIMobx_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlNb2J4X0F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBc0JDO1FBcEJBLFdBQUssR0FBZSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWUsSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFlLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFlLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQWUsSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBYSxJQUFJLENBQUM7O0lBRXZCLENBQUM7SUFwQkE7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzs4Q0FDSTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7NkNBQ0c7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDRztJQUV0QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzZDQUNHO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDRztJQUV0QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzZDQUNHO0lBRXhCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7NkNBQ0c7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDRztJQXBCRixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBc0IvQjtJQUFELGtCQUFDO0NBdEJELEFBc0JDLENBdEJ3QyxFQUFFLENBQUMsU0FBUyxHQXNCcEQ7a0JBdEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnV0dG9uUGx1cyBmcm9tIFwiLi8uLi9Db21tb24vQ29tcG9uZW50cy9CdXR0b25QbHVzXCJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNb2J4X0F1dG8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0Q2xvc2U6IEJ1dHRvblBsdXMgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdFR4dDE6IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdEJ0bjE6IEJ1dHRvblBsdXMgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdFR4dDI6IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdEJ0bjI6IEJ1dHRvblBsdXMgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdFR4dDM6IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRUeHQ0OiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShCdXR0b25QbHVzKVxuXHRCdG4zOiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdEJ0bjQ6IEJ1dHRvblBsdXMgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdFR4dDU6IGNjLkxhYmVsID0gbnVsbDtcbiBcbn0iXX0=