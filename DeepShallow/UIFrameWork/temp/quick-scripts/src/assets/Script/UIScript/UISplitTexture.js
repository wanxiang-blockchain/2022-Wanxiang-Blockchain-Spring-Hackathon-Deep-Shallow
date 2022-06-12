"use strict";
cc._RF.push(module, '7b812zUAqRCDKXwz6AOISUT', 'UISplitTexture');
// Script/UIScript/UISplitTexture.ts

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
var TexturePlus_1 = require("../Common/Components/TexturePlus");
var PolygonUtil_1 = require("../Common/Utils/PolygonUtil");
var UIForm_1 = require("../UIFrame/UIForm");
var FormMgr_1 = require("../UIFrame/FormMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISplitTexture = /** @class */ (function (_super) {
    __extends(UISplitTexture, _super);
    function UISplitTexture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textureRoot = null;
        _this.graphics = null;
        _this.pic = null;
        _this.textures = [];
        _this.startPoint = null;
        _this.endPoint = null;
        return _this;
    }
    UISplitTexture.prototype.start = function () {
        this.init();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.graphics.node.x = -cc.visibleRect.width / 2;
        this.graphics.node.y = -cc.visibleRect.height / 2;
        this.view.Close.addClick(function () {
            FormMgr_1.default.backScene();
        }, this);
    };
    UISplitTexture.prototype.init = function () {
        var node = new cc.Node();
        var t = node.addComponent(TexturePlus_1.default);
        node.parent = this.textureRoot;
        t.texture = this.pic;
        this.textures.push(t);
    };
    UISplitTexture.prototype.onTouchStart = function (e) {
        this.startPoint = e.getLocation();
    };
    UISplitTexture.prototype.onTouchMove = function (e) {
        this.graphics.clear();
        this.graphics.moveTo(this.startPoint.x, this.startPoint.y);
        var p = e.getLocation();
        this.graphics.lineTo(p.x, p.y);
        this.graphics.stroke();
    };
    UISplitTexture.prototype.onTouchEnd = function (e) {
        this.graphics.clear();
        this.endPoint = e.getLocation();
        this.useLineCutPolygon(this.startPoint, this.endPoint);
    };
    UISplitTexture.prototype.doSplit = function () {
        var h = this.pic.height, w = this.pic.width;
        for (var i = 0; i < 15; i++) {
            var p0 = cc.v2(-(w / 2 + 10), (Math.random() * h) - h / 2);
            var p1 = cc.v2(w / 2 + 10, (Math.random() * h) - h / 2);
            this.useLineCutPolygon(p0, p1, false);
        }
        for (var i = 0; i < 15; i++) {
            var p0 = cc.v2(Math.random() * w - w / 2, -(h / 2 + 10));
            var p1 = cc.v2(Math.random() * w - w / 2, (h / 2 + 10));
            this.useLineCutPolygon(p0, p1, false);
        }
    };
    UISplitTexture.prototype.useLineCutPolygon = function (p0, p1, isWorld) {
        if (isWorld === void 0) { isWorld = true; }
        for (var i = this.textures.length - 1; i >= 0; i--) {
            var texture = this.textures[i];
            var pa = p0.clone();
            var pb = p1.clone();
            if (isWorld) {
                pa = texture.node.convertToNodeSpaceAR(p0);
                pb = texture.node.convertToNodeSpaceAR(p1);
            }
            var polygons = PolygonUtil_1.PolygonUtil.lineCutPolygon(pa, pb, texture.polygon);
            if (polygons.length <= 0)
                continue;
            this.splitTexture(texture, polygons);
        }
    };
    UISplitTexture.prototype.splitTexture = function (texture, polygons) {
        texture.polygon = polygons[0];
        for (var i = 1; i < polygons.length; i++) {
            var node = new cc.Node();
            var t = node.addComponent(TexturePlus_1.default);
            node.parent = this.textureRoot;
            node.setPosition(texture.node.position);
            t.texture = this.pic;
            t.polygon = polygons[i];
            this.textures.push(t);
        }
    };
    UISplitTexture.prototype.onClickFly = function () {
        for (var i = 0; i < this.textures.length; i++) {
            var center = this.getPolygonCenter(this.textures[i].polygon);
            var dir = center.normalize();
            cc.tween(this.textures[i].node).by(5, { x: dir.x * 500, y: dir.y * 500 }).start();
        }
    };
    UISplitTexture.prototype.onClickReset = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var center = this_1.getPolygonCenter(this_1.textures[i].polygon);
            var dir = center.normalize();
            cc.tween(this_1.textures[i].node).by(5, { x: -dir.x * 500, y: -dir.y * 500 }).call(function () {
                if (i === _this.textures.length - 1) {
                    _this.textureRoot.destroyAllChildren();
                    _this.textureRoot.removeAllChildren();
                    _this.textures = [];
                    _this.init();
                }
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.textures.length; i++) {
            _loop_1(i);
        }
    };
    UISplitTexture.prototype.onFallDown = function () {
        for (var i = 0; i < this.textures.length; i++) {
            var center = this.getPolygonCenter(this.textures[i].polygon);
            cc.tween(this.textures[i].node).delay((center.y + this.pic.height) / this.pic.height).by(2, { y: -500 }, cc.easeCircleActionIn()).start();
        }
    };
    UISplitTexture.prototype.onResetFallDown = function () {
    };
    UISplitTexture.prototype.getPolygonCenter = function (polygon) {
        var x = 0, y = 0;
        for (var i = 0; i < polygon.length; i++) {
            x += polygon[i].x;
            y += polygon[i].y;
        }
        x = x / polygon.length;
        y = y / polygon.length;
        return cc.v2(x, y);
    };
    __decorate([
        property(cc.Node)
    ], UISplitTexture.prototype, "textureRoot", void 0);
    __decorate([
        property(cc.Graphics)
    ], UISplitTexture.prototype, "graphics", void 0);
    __decorate([
        property(cc.Texture2D)
    ], UISplitTexture.prototype, "pic", void 0);
    UISplitTexture = __decorate([
        ccclass
    ], UISplitTexture);
    return UISplitTexture;
}(UIForm_1.UIScreen));
exports.default = UISplitTexture;

cc._RF.pop();