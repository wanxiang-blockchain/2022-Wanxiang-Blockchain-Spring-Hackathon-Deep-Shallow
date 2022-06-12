
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UIDungeon_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74ba6VsKwJNPo4au7YjBx4f', 'UIDungeon_Auto');
// Script/AutoScripts/UIDungeon_Auto.ts

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
var UIDungeon_Auto = /** @class */ (function (_super) {
    __extends(UIDungeon_Auto, _super);
    function UIDungeon_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Items = null;
        _this.Back = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], UIDungeon_Auto.prototype, "Items", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIDungeon_Auto.prototype, "Back", void 0);
    UIDungeon_Auto = __decorate([
        ccclass
    ], UIDungeon_Auto);
    return UIDungeon_Auto;
}(cc.Component));
exports.default = UIDungeon_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlEdW5nZW9uX0F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBTUM7UUFKQSxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBZSxJQUFJLENBQUM7O0lBRXpCLENBQUM7SUFKQTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7Z0RBQ0c7SUFKSixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBTWxDO0lBQUQscUJBQUM7Q0FORCxBQU1DLENBTjJDLEVBQUUsQ0FBQyxTQUFTLEdBTXZEO2tCQU5vQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnV0dG9uUGx1cyBmcm9tIFwiLi8uLi9Db21tb24vQ29tcG9uZW50cy9CdXR0b25QbHVzXCJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlEdW5nZW9uX0F1dG8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoY2MuTm9kZSlcblx0SXRlbXM6IGNjLk5vZGUgPSBudWxsO1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0QmFjazogQnV0dG9uUGx1cyA9IG51bGw7XG4gXG59Il19