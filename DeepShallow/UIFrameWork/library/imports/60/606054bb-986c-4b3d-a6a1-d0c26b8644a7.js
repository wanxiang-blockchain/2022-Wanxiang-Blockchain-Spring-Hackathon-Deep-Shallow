"use strict";
cc._RF.push(module, '60605S7mGxLPaah0MJrhkSn', 'UILight');
// Script/UIScript/UILight.ts

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
var Light_1 = require("../Common/Light/Light");
var LightUtils_1 = require("../Common/Light/LightUtils");
var Obstacle_1 = require("../Common/Light/Obstacle");
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILight = /** @class */ (function (_super) {
    __extends(UILight, _super);
    function UILight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.obstacle = null;
        _this.light = null;
        _this.camera = null;
        _this.spShadow = null;
        _this._shadowTexture = new cc.RenderTexture();
        return _this;
    }
    UILight.prototype.onLoad = function () {
        var _this = this;
        cc.director.on(cc.Director.EVENT_BEFORE_DRAW, function () {
            _this._shadowTexture = new cc.RenderTexture();
            _this._shadowTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.game._renderContext.STENCIL_INDEX8);
            _this.camera.targetTexture = _this._shadowTexture;
        }, this);
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, function () {
            _this.spShadow.spriteFrame.setTexture(_this._shadowTexture);
            _this.spShadow.spriteFrame.setFlipY(true);
            _this.spShadow.markForRender(true);
        }, this);
    };
    UILight.prototype.start = function () {
        var viewSize = cc.view.getVisibleSize();
        this.obstacle.addPolygon('', [
            cc.v2(0, 0), cc.v2(viewSize.width, 0), cc.v2(viewSize.width, viewSize.height), cc.v2(0, viewSize.height)
        ]);
        var ndObstacle = this.obstacle.node;
        var _loop_1 = function (i) {
            var node = ndObstacle.children[i];
            var com = node.getComponent(TexturePlus_1.default);
            if (!com)
                return "continue";
            var points = com.polygon.concat([]);
            points = points.map(function (e) { return e.add(node.getPosition()); });
            this_1.obstacle.addPolygon(com.node.uuid, points);
        };
        var this_1 = this;
        for (var i = 0; i < ndObstacle.childrenCount; i++) {
            _loop_1(i);
        }
        this.view.Back.addClick(function () {
            FormMgr_1.default.backScene();
        }, this);
    };
    UILight.prototype.draw = function () {
        var polygons = this.obstacle.getPolygons(this.light.getBound());
        var intersections = LightUtils_1.default.getIntersections(this.light.node.getPosition(), polygons);
        this.light.draw(intersections);
    };
    UILight.prototype.update = function (dt) {
        this.draw();
    };
    __decorate([
        property(Obstacle_1.default)
    ], UILight.prototype, "obstacle", void 0);
    __decorate([
        property(Light_1.default)
    ], UILight.prototype, "light", void 0);
    __decorate([
        property(cc.Camera)
    ], UILight.prototype, "camera", void 0);
    __decorate([
        property(cc.Sprite)
    ], UILight.prototype, "spShadow", void 0);
    UILight = __decorate([
        ccclass
    ], UILight);
    return UILight;
}(UIForm_1.UIScreen));
exports.default = UILight;

cc._RF.pop();