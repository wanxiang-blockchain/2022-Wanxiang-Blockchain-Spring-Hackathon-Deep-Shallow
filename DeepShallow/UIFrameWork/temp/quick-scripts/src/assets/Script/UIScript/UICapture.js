"use strict";
cc._RF.push(module, '26449d5Y5lJSqtiyJTfLcTr', 'UICapture');
// Script/UIScript/UICapture.ts

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
var CameraCapture_1 = require("../Common/Components/CameraCapture");
var DrawBorad_1 = require("../Common/Components/DrawBorad");
var TouchPlus_1 = require("../Common/Components/TouchPlus");
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UICapture = /** @class */ (function (_super) {
    __extends(UICapture, _super);
    function UICapture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.camereCapture = null;
        _this.drawBorad = null;
        _this.touchPlus = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    UICapture.prototype.start = function () {
        var _this = this;
        this.touchPlus.addEvent(null, function (e) {
            var delta = e.getDelta();
            _this.touchPlus.node.x += delta.x;
            _this.touchPlus.node.y += delta.y;
        });
        this.view.Back.addClick(function () {
            FormMgr_1.default.backScene();
        }, this);
        this.view.Capture.addClick(this.onClickCapture, this);
        this.view.Pen.addClick(this.onClickPen, this);
        this.view.Reaser.addClick(this.onClickReaser, this);
        this.onClickCapture();
    };
    UICapture.prototype.onClickCapture = function () {
        var data = this.camereCapture.captureTexture();
        var texture = new cc.Texture2D();
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, this.drawBorad.node.width, this.drawBorad.node.height);
        this.sprite.spriteFrame = new cc.SpriteFrame(texture);
        this.sprite.spriteFrame.setFlipY(true);
        this.drawBorad.setData(data);
    };
    UICapture.prototype.onClickPen = function () {
        this.drawBorad.setPen();
    };
    UICapture.prototype.onClickReaser = function () {
        this.drawBorad.setReaser();
    };
    __decorate([
        property(cc.Sprite)
    ], UICapture.prototype, "sprite", void 0);
    __decorate([
        property(CameraCapture_1.default)
    ], UICapture.prototype, "camereCapture", void 0);
    __decorate([
        property(DrawBorad_1.default)
    ], UICapture.prototype, "drawBorad", void 0);
    __decorate([
        property(TouchPlus_1.default)
    ], UICapture.prototype, "touchPlus", void 0);
    UICapture = __decorate([
        ccclass
    ], UICapture);
    return UICapture;
}(UIForm_1.UIScreen));
exports.default = UICapture;

cc._RF.pop();