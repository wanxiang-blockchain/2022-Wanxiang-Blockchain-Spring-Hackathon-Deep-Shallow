"use strict";
cc._RF.push(module, '68edfvWcX9CWav9zMp303o6', 'Light');
// Script/Common/Light/Light.ts

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
exports.LightType = void 0;
var QuadTree_1 = require("../Components/QuadTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LightType;
(function (LightType) {
    LightType[LightType["Round"] = 0] = "Round";
    LightType[LightType["Sector"] = 1] = "Sector";
})(LightType = exports.LightType || (exports.LightType = {}));
var LightBound = new QuadTree_1.Bound(0, 0, 0, 0);
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 画笔 */
        _this.graphics = null;
        _this.lightType = 0;
        _this.canvasSize = null;
        _this.visiableSize = null;
        _this.radius = 200;
        _this.fade = 1;
        // graphics
        _this._material = null;
        return _this;
        // update (dt) {}
    }
    Light.prototype.onLoad = function () {
        this._material = this.graphics.getMaterial(0);
        this.canvasSize = cc.view.getCanvasSize();
        this.visiableSize = cc.view.getCanvasSize();
        this.node.setContentSize(this.canvasSize);
        this._material.setProperty("screen", cc.v2(this.canvasSize.width, this.canvasSize.height));
        var r = this.radius / this.canvasSize.width;
        this._material.setProperty("maxRadius", r);
    };
    Light.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    Light.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    Light.prototype.onTouchMove = function (e) {
        this.node.x += e.getDeltaX();
        this.node.y += e.getDeltaY();
    };
    Light.prototype.getBound = function () {
        var pos = this.node.getPosition();
        LightBound.x = pos.x - this.radius / 2;
        LightBound.y = pos.y - this.radius / 2;
        LightBound.width = LightBound.height = this.radius;
        return LightBound;
    };
    /** 绘制光 */
    Light.prototype.draw = function (intersections) {
        var lightPos = this.node.getPosition();
        this._doDraw(this.graphics, lightPos, intersections);
        this._material.setProperty("lightPos", cc.v2(lightPos.x / this.visiableSize.width, lightPos.y / this.visiableSize.height));
    };
    /** 绘制light */
    Light.prototype._doDraw = function (graphics, light, intersects) {
        graphics.clear();
        graphics.moveTo(intersects[0].x, intersects[0].y);
        for (var i = 1; i < intersects.length; i++) {
            var intersect = intersects[i];
            graphics.lineTo(intersect.x, intersect.y);
        }
        graphics.moveTo(intersects[0].x, intersects[0].y);
        graphics.fill();
        // for(let i=0; i<intersects.length; i++) {
        //     let intersect = intersects[i];
        //     graphics.moveTo(light.x, light.y);
        //     graphics.lineTo(intersect.x, intersect.y);
        //     graphics.stroke();
        // }
    };
    __decorate([
        property(cc.Graphics)
    ], Light.prototype, "graphics", void 0);
    __decorate([
        property({ type: cc.Enum(LightType) })
    ], Light.prototype, "lightType", void 0);
    Light = __decorate([
        ccclass
    ], Light);
    return Light;
}(cc.Component));
exports.default = Light;

cc._RF.pop();