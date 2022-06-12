
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UIFunction_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2840dNdtrlLRZJzxqaCbxi3', 'UIFunction_Auto');
// Script/AutoScripts/UIFunction_Auto.ts

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
var UIFunction_Auto = /** @class */ (function (_super) {
    __extends(UIFunction_Auto, _super);
    function UIFunction_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Setting = null;
        _this.Skills = null;
        _this.ScrollHelper = null;
        return _this;
    }
    __decorate([
        property(ButtonPlus_1.default)
    ], UIFunction_Auto.prototype, "Setting", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIFunction_Auto.prototype, "Skills", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIFunction_Auto.prototype, "ScrollHelper", void 0);
    UIFunction_Auto = __decorate([
        ccclass
    ], UIFunction_Auto);
    return UIFunction_Auto;
}(cc.Component));
exports.default = UIFunction_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlGdW5jdGlvbl9BdXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQVFDO1FBTkEsYUFBTyxHQUFlLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWUsSUFBSSxDQUFDOztJQUVqQyxDQUFDO0lBTkE7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztvREFDTTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNLO0lBRTFCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7eURBQ1c7SUFOWixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBUW5DO0lBQUQsc0JBQUM7Q0FSRCxBQVFDLENBUjRDLEVBQUUsQ0FBQyxTQUFTLEdBUXhEO2tCQVJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnV0dG9uUGx1cyBmcm9tIFwiLi8uLi9Db21tb24vQ29tcG9uZW50cy9CdXR0b25QbHVzXCJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlGdW5jdGlvbl9BdXRvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdFNldHRpbmc6IEJ1dHRvblBsdXMgPSBudWxsO1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0U2tpbGxzOiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdFNjcm9sbEhlbHBlcjogQnV0dG9uUGx1cyA9IG51bGw7XG4gXG59Il19