"use strict";
cc._RF.push(module, '8fc71BDtH9K7Js1AoFqRdoT', 'UIPop');
// Script/UIScript/UIPop.ts

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
var UIPop = /** @class */ (function (_super) {
    __extends(UIPop, _super);
    function UIPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modalType = new Struct_1.ModalType(SysDefine_1.ModalOpacity.OpacityHalf);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    UIPop.prototype.start = function () {
        var _this = this;
        this.view.Close.addClick(function () {
            _this.closeSelf();
        }, this);
    };
    UIPop = __decorate([
        ccclass
    ], UIPop);
    return UIPop;
}(UIForm_1.UIWindow));
exports.default = UIPop;

cc._RF.pop();