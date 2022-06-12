"use strict";
cc._RF.push(module, 'a1aa9cyaadEZ67qCIT1FuzO', 'MaskPlus');
// Script/Common/Components/MaskPlus.ts

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
exports.MaskPlusType = void 0;
var CommonUtils_1 = require("../Utils/CommonUtils");
var MaskPlusType;
(function (MaskPlusType) {
    /**
     * !#en Rect mask.
     * !#zh 使用矩形作为遮罩
     * @property {Number} RECT
     */
    MaskPlusType[MaskPlusType["RECT"] = 0] = "RECT";
    /**
     * !#en Ellipse Mask.
     * !#zh 使用椭圆作为遮罩
     * @property {Number} ELLIPSE
     */
    MaskPlusType[MaskPlusType["ELLIPSE"] = 1] = "ELLIPSE";
    /**
     * !#en Image Stencil Mask.
     * !#zh 使用图像模版作为遮罩
     * @property {Number} IMAGE_STENCIL
     */
    MaskPlusType[MaskPlusType["IMAGE_STENCIL"] = 2] = "IMAGE_STENCIL";
    /**
     * 多边形遮罩
     */
    MaskPlusType[MaskPlusType["Polygon"] = 3] = "Polygon";
})(MaskPlusType = exports.MaskPlusType || (exports.MaskPlusType = {}));
var _vec2_temp = new cc.Vec2();
var _mat4_temp = new cc.Mat4();
var _circlepoints = [];
function _calculateCircle(center, radius, segements) {
    _circlepoints.length = 0;
    var anglePerStep = Math.PI * 2 / segements;
    for (var step = 0; step < segements; ++step) {
        _circlepoints.push(cc.v2(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y));
    }
    return _circlepoints;
}
var EllipseConfig = /** @class */ (function () {
    function EllipseConfig() {
    }
    return EllipseConfig;
}());
/**
 * 遮罩扩展
 * 自定义多边形遮罩
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help, inspector = _a.inspector;
var MaskPlus = /** @class */ (function (_super) {
    __extends(MaskPlus, _super);
    function MaskPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 0;
        _this._polygon = [];
        _this.ellipse = new EllipseConfig();
        return _this;
    }
    Object.defineProperty(MaskPlus.prototype, "type", {
        get: function () {
            return this._type;
        },
        // @ts-ignore
        set: function (value) {
            if (this._type !== value) {
                this['_resetAssembler']();
            }
            this._type = value;
            if (this._type === MaskPlusType.Polygon) {
                if (this._polygon.length === 0) {
                    var _a = this.getNodeRect(), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
                    this._polygon.push(cc.v2(x, y), cc.v2(x + width, y), cc.v2(x + width, y + height), cc.v2(x, y + height));
                }
            }
            if (this._type !== MaskPlusType.IMAGE_STENCIL) {
                this.spriteFrame = null;
                this.alphaThreshold = 0;
                this._updateGraphics();
            }
            this['_activateMaterial']();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskPlus.prototype, "polygon", {
        get: function () {
            return this._polygon;
        },
        set: function (points) {
            this._polygon = points;
            this._updateGraphics();
        },
        enumerable: false,
        configurable: true
    });
    MaskPlus.prototype.setEllipse = function (center, r, segments) {
        this.ellipse.center = center;
        this.ellipse.r = r;
        this.ellipse.segments = segments || this.segements;
    };
    MaskPlus.prototype._updateGraphics = function () {
        var node = this.node;
        var graphics = this['_graphics'];
        // Share render data with graphics content
        graphics.clear(false);
        var _a = this.getNodeRect(), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
        if (this['_type'] === MaskPlusType.RECT) {
            graphics.rect(x, y, width, height);
        }
        else if (this['_type'] === MaskPlusType.ELLIPSE) {
            var center = this.ellipse.center || cc.v2(x + width / 2, y + height / 2);
            var radius = this.ellipse.r || { x: width / 2, y: height / 2 };
            var segments = this.ellipse.segments || this['_segments'];
            var points = _calculateCircle(center, radius, segments);
            for (var i = 0; i < points.length; ++i) {
                var point = points[i];
                if (i === 0) {
                    graphics.moveTo(point.x, point.y);
                }
                else {
                    graphics.lineTo(point.x, point.y);
                }
            }
            graphics.close();
        }
        else if (this['_type'] === MaskPlusType.Polygon) {
            if (this._polygon.length === 0)
                this._polygon.push(cc.v2(0, 0));
            graphics.moveTo(this._polygon[0].x, this._polygon[0].y);
            for (var i = 1; i < this._polygon.length; i++) {
                graphics.lineTo(this._polygon[i].x, this._polygon[i].y);
            }
            graphics.lineTo(this._polygon[0].x, this._polygon[0].y);
        }
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
            graphics.stroke();
        }
        else {
            graphics.fill();
        }
    };
    MaskPlus.prototype._hitTest = function (cameraPt) {
        var node = this.node;
        var size = node.getContentSize(), w = size.width, h = size.height, testPt = _vec2_temp;
        node['_updateWorldMatrix']();
        // If scale is 0, it can't be hit.
        if (!cc.Mat4.invert(_mat4_temp, node['_worldMatrix'])) {
            return false;
        }
        var point = cc.v2(0, 0);
        cc.Vec2.transformMat4(point, cameraPt, _mat4_temp);
        testPt.x = point.x + node['_anchorPoint'].x * w;
        testPt.y = point.y + node['_anchorPoint'].y * h;
        var result = false;
        if (this.type === MaskPlusType.RECT || this.type === MaskPlusType.IMAGE_STENCIL) {
            result = testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h;
        }
        else if (this.type === MaskPlusType.ELLIPSE) {
            var rx = w / 2, ry = h / 2;
            var px = testPt.x - 0.5 * w, py = testPt.y - 0.5 * h;
            result = px * px / (rx * rx) + py * py / (ry * ry) < 1;
        }
        else if (this.type === MaskPlusType.Polygon) {
            result = CommonUtils_1.CommonUtils.isInPolygon(point, this.polygon);
        }
        if (this.inverted) {
            result = !result;
        }
        return result;
    };
    MaskPlus.prototype.getNodeRect = function () {
        var width = this.node['_contentSize'].width;
        var height = this.node['_contentSize'].height;
        var x = -width * this.node['_anchorPoint'].x;
        var y = -height * this.node['_anchorPoint'].y;
        return [x, y, width, height];
    };
    MaskPlus.Type = MaskPlusType;
    __decorate([
        property({ type: cc.Enum(MaskPlusType), override: true })
    ], MaskPlus.prototype, "_type", void 0);
    __decorate([
        property({ type: cc.Enum(MaskPlusType), override: true })
    ], MaskPlus.prototype, "type", null);
    __decorate([
        property({ type: [cc.Vec2], serializable: true })
    ], MaskPlus.prototype, "_polygon", void 0);
    __decorate([
        property({ type: [cc.Vec2], serializable: true })
    ], MaskPlus.prototype, "polygon", null);
    MaskPlus = __decorate([
        ccclass,
        menu('i18n:MAIN_MENU.component.renderers/MaskPlus'),
        executeInEditMode,
        help('i18n:COMPONENT.help_url.mask'),
        inspector('packages://maskplus/inspector.js')
    ], MaskPlus);
    return MaskPlus;
}(cc.Mask));
exports.default = MaskPlus;
cc['MaskPlus'] = MaskPlus;

cc._RF.pop();