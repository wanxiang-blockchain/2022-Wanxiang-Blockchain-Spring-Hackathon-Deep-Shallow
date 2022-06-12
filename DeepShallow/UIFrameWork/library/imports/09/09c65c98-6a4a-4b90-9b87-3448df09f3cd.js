"use strict";
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