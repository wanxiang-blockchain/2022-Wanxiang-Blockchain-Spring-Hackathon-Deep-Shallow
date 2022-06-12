"use strict";
cc._RF.push(module, '2f727ajIaBJPYHecdX0LjtZ', 'UIScrollTexture');
// Script/UIScript/UIScrollTexture.ts

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
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIScrollTexture = /** @class */ (function (_super) {
    __extends(UIScrollTexture, _super);
    function UIScrollTexture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spTexture = null;
        _this.turn = 1;
        _this.progress = 0;
        return _this;
    }
    // onLoad () {}
    UIScrollTexture.prototype.start = function () {
    };
    UIScrollTexture.prototype.update = function (dt) {
        this.progress += dt * this.turn * 0.2;
        this.spTexture.getMaterial(0).setProperty('progress', this.progress);
        if (this.progress >= 1) {
            this.turn = -1;
        }
        if (this.progress <= 0) {
            this.turn = 1;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], UIScrollTexture.prototype, "spTexture", void 0);
    UIScrollTexture = __decorate([
        ccclass
    ], UIScrollTexture);
    return UIScrollTexture;
}(UIForm_1.UIScreen));
exports.default = UIScrollTexture;

cc._RF.pop();