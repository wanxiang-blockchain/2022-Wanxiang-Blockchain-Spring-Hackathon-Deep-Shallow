
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UIGame_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eb95Sc8n9DtbkW3ATza3Qx', 'UIGame_Auto');
// Script/AutoScripts/UIGame_Auto.ts

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
var UIGame_Auto = /** @class */ (function (_super) {
    __extends(UIGame_Auto, _super);
    function UIGame_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Back = null;
        _this.GuideNode = null;
        _this.LblTip = null;
        _this.guidNode = null;
        _this.toMap = null;
        _this.items = null;
        _this.buldtool = null;
        return _this;
    }
    __decorate([
        property(ButtonPlus_1.default)
    ], UIGame_Auto.prototype, "Back", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIGame_Auto.prototype, "GuideNode", void 0);
    __decorate([
        property(cc.Label)
    ], UIGame_Auto.prototype, "LblTip", void 0);
    __decorate([
        property(cc.Node)
    ], UIGame_Auto.prototype, "guidNode", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIGame_Auto.prototype, "toMap", void 0);
    __decorate([
        property(cc.Node)
    ], UIGame_Auto.prototype, "items", void 0);
    __decorate([
        property(cc.Node)
    ], UIGame_Auto.prototype, "buldtool", void 0);
    UIGame_Auto = __decorate([
        ccclass
    ], UIGame_Auto);
    return UIGame_Auto;
}(cc.Component));
exports.default = UIGame_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlHYW1lX0F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBc0JDO1FBcEJBLFVBQUksR0FBZSxJQUFJLENBQUM7UUFHckIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBR3RCLGNBQVEsR0FBVSxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBR3BCLGNBQVEsR0FBVSxJQUFJLENBQUM7O0lBRTNCLENBQUM7SUFwQkE7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzs2Q0FDRztJQUdyQjtRQURGLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO2tEQUNTO0lBRzNCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ007SUFHdEI7UUFERixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUTtJQUd2QjtRQURGLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzhDQUNLO0lBR3ZCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFHcEI7UUFERixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUTtJQXBCTixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBc0IvQjtJQUFELGtCQUFDO0NBdEJELEFBc0JDLENBdEJ3QyxFQUFFLENBQUMsU0FBUyxHQXNCcEQ7a0JBdEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnV0dG9uUGx1cyBmcm9tIFwiLi8uLi9Db21tb24vQ29tcG9uZW50cy9CdXR0b25QbHVzXCJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlHYW1lX0F1dG8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0QmFjazogQnV0dG9uUGx1cyA9IG51bGw7XG5cblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG4gICAgR3VpZGVOb2RlOiBCdXR0b25QbHVzPW51bGw7XG5cblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIExibFRpcDogY2MuTGFiZWw9bnVsbDtcblxuXHRAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBndWlkTm9kZTogY2MuTm9kZT1udWxsO1xuXG5cdEBwcm9wZXJ0eShCdXR0b25QbHVzKVxuICAgIHRvTWFwOiBCdXR0b25QbHVzPW51bGw7XG5cblx0QHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbXM6IGNjLk5vZGU9bnVsbDtcblxuXHRAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidWxkdG9vbDogY2MuTm9kZT1udWxsO1xuIFxufSJdfQ==