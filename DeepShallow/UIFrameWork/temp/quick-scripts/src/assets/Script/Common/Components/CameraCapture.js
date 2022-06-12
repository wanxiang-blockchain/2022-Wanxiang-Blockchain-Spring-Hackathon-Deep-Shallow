"use strict";
cc._RF.push(module, '29803DQKJdC2KvHyjig9y8N', 'CameraCapture');
// Script/Common/Components/CameraCapture.ts

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
var CocosHelper_1 = require("../../UIFrame/CocosHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CameraCapture = /** @class */ (function (_super) {
    __extends(CameraCapture, _super);
    function CameraCapture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.captureNode = null;
        _this.camera = null;
        return _this;
    }
    CameraCapture_1 = CameraCapture;
    CameraCapture.prototype.onLoad = function () {
        CameraCapture_1.inst = this;
        this.camera = this.getComponent(cc.Camera);
        if (!this.camera) {
            this.camera = this.addComponent(cc.Camera);
        }
        this.node.active = false;
    };
    CameraCapture.prototype.start = function () { };
    CameraCapture.prototype.captureTexture = function () {
        this.node.active = true;
        this.captureNode.active = false;
        var data = CocosHelper_1.default.captureScreen(this.camera, this.captureNode);
        this.captureNode.active = true;
        this.node.active = false;
        return data;
    };
    var CameraCapture_1;
    CameraCapture.inst = null;
    __decorate([
        property(cc.Node)
    ], CameraCapture.prototype, "captureNode", void 0);
    CameraCapture = CameraCapture_1 = __decorate([
        ccclass
    ], CameraCapture);
    return CameraCapture;
}(cc.Component));
exports.default = CameraCapture;

cc._RF.pop();