
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/MaskPlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvTWFza1BsdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUVuRCxJQUFZLFlBd0JYO0FBeEJELFdBQVksWUFBWTtJQUNwQjs7OztPQUlHO0lBQ0gsK0NBQVEsQ0FBQTtJQUNSOzs7O09BSUc7SUFDSCxxREFBVyxDQUFBO0lBQ1g7Ozs7T0FJRztJQUNILGlFQUFpQixDQUFBO0lBRWpCOztPQUVHO0lBQ0gscURBQVcsQ0FBQTtBQUNmLENBQUMsRUF4QlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUF3QnZCO0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFL0IsSUFBSSxhQUFhLEdBQUUsRUFBRSxDQUFDO0FBQ3RCLFNBQVMsZ0JBQWdCLENBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTO0lBQ2hELGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUMzQyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFO1FBQ3pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ3hFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENB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QUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQztxQkFDSTtvQkFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQzthQUNKO1lBQ0QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BCO2FBQUssSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7WUFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxJ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IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHMvQ29tbW9uVXRpbHNcIjtcblxuZXhwb3J0IGVudW0gTWFza1BsdXNUeXBlIHtcbiAgICAvKipcbiAgICAgKiAhI2VuIFJlY3QgbWFzay5cbiAgICAgKiAhI3poIOS9v+eUqOefqeW9ouS9nOS4uumBrue9qVxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRUNUXG4gICAgICovXG4gICAgUkVDVCA9IDAsXG4gICAgLyoqXG4gICAgICogISNlbiBFbGxpcHNlIE1hc2suXG4gICAgICogISN6aCDkvb/nlKjmpK3lnIbkvZzkuLrpga7nvalcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gRUxMSVBTRVxuICAgICAqL1xuICAgIEVMTElQU0UgPSAxLFxuICAgIC8qKlxuICAgICAqICEjZW4gSW1hZ2UgU3RlbmNpbCBNYXNrLlxuICAgICAqICEjemgg5L2/55So5Zu+5YOP5qih54mI5L2c5Li66YGu572pXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IElNQUdFX1NURU5DSUxcbiAgICAgKi9cbiAgICBJTUFHRV9TVEVOQ0lMID0gMixcblxuICAgIC8qKlxuICAgICAqIOWkmui+ueW9oumBrue9qVxuICAgICAqL1xuICAgIFBvbHlnb24gPSAzLFxufVxuXG5sZXQgX3ZlYzJfdGVtcCA9IG5ldyBjYy5WZWMyKCk7XG5sZXQgX21hdDRfdGVtcCA9IG5ldyBjYy5NYXQ0KCk7XG5cbmxldCBfY2lyY2xlcG9pbnRzID1bXTtcbmZ1bmN0aW9uIF9jYWxjdWxhdGVDaXJjbGUgKGNlbnRlciwgcmFkaXVzLCBzZWdlbWVudHMpIHtcbiAgICBfY2lyY2xlcG9pbnRzLmxlbmd0aCA9IDA7XG4gICAgbGV0IGFuZ2xlUGVyU3RlcCA9IE1hdGguUEkgKiAyIC8gc2VnZW1lbnRzO1xuICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgc2VnZW1lbnRzOyArK3N0ZXApIHtcbiAgICAgICAgX2NpcmNsZXBvaW50cy5wdXNoKGNjLnYyKHJhZGl1cy54ICogTWF0aC5jb3MoYW5nbGVQZXJTdGVwICogc3RlcCkgKyBjZW50ZXIueCxcbiAgICAgICAgICAgIHJhZGl1cy55ICogTWF0aC5zaW4oYW5nbGVQZXJTdGVwICogc3RlcCkgKyBjZW50ZXIueSkpO1xuICAgIH1cblxuICAgIHJldHVybiBfY2lyY2xlcG9pbnRzO1xufVxuXG5jbGFzcyBFbGxpcHNlQ29uZmlnIHtcbiAgICBjZW50ZXI6IGNjLlZlYzI7XG4gICAgcjogY2MuVmVjMjtcbiAgICBzZWdtZW50czogbnVtYmVyO1xufVxuXG4vKipcbiAqIOmBrue9qeaJqeWxlVxuICog6Ieq5a6a5LmJ5aSa6L655b2i6YGu572pXG4gKi9cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIG1lbnUsIGhlbHAsIGluc3BlY3Rvcn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL01hc2tQbHVzJykgXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBoZWxwKCdpMThuOkNPTVBPTkVOVC5oZWxwX3VybC5tYXNrJylcbkBpbnNwZWN0b3IoJ3BhY2thZ2VzOi8vbWFza3BsdXMvaW5zcGVjdG9yLmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tQbHVzIGV4dGVuZHMgY2MuTWFzayB7XG5cbiAgICBzdGF0aWMgVHlwZSA9IE1hc2tQbHVzVHlwZTtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRW51bShNYXNrUGx1c1R5cGUpLCBvdmVycmlkZTogdHJ1ZX0pXG4gICAgX3R5cGU6IE1hc2tQbHVzVHlwZSA9IDA7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKE1hc2tQbHVzVHlwZSksIG92ZXJyaWRlOiB0cnVlfSlcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlOyBcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHNldCB0eXBlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpc1snX3Jlc2V0QXNzZW1ibGVyJ10oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl90eXBlID09PSBNYXNrUGx1c1R5cGUuUG9seWdvbikge1xuICAgICAgICAgICAgaWYodGhpcy5fcG9seWdvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgW3gsIHksIHdpZHRoLCBoZWlnaHRdID0gdGhpcy5nZXROb2RlUmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BvbHlnb24ucHVzaChjYy52Mih4LCB5KSwgY2MudjIoeCt3aWR0aCwgeSksIGNjLnYyKHgrd2lkdGgsIHkraGVpZ2h0KSwgY2MudjIoeCwgeStoZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl90eXBlICE9PSBNYXNrUGx1c1R5cGUuSU1BR0VfU1RFTkNJTCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmFscGhhVGhyZXNob2xkID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUdyYXBoaWNzKCk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICB0aGlzWydfYWN0aXZhdGVNYXRlcmlhbCddKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuVmVjMl0sIHNlcmlhbGl6YWJsZTogdHJ1ZX0pXG4gICAgX3BvbHlnb246IGNjLlZlYzJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLlZlYzJdLCBzZXJpYWxpemFibGU6IHRydWV9KVxuICAgIHB1YmxpYyBnZXQgcG9seWdvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbHlnb247XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcG9seWdvbihwb2ludHM6IGNjLlZlYzJbXSkge1xuICAgICAgICB0aGlzLl9wb2x5Z29uID0gcG9pbnRzO1xuICAgICAgICB0aGlzLl91cGRhdGVHcmFwaGljcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZWxsaXBzZTogRWxsaXBzZUNvbmZpZyA9IG5ldyBFbGxpcHNlQ29uZmlnKCk7XG4gICAgcHVibGljIHNldEVsbGlwc2UoY2VudGVyPzogY2MuVmVjMiwgcj86IGNjLlZlYzIsIHNlZ21lbnRzPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWxsaXBzZS5jZW50ZXIgPSBjZW50ZXI7XG4gICAgICAgIHRoaXMuZWxsaXBzZS5yID0gcjtcbiAgICAgICAgdGhpcy5lbGxpcHNlLnNlZ21lbnRzID0gc2VnbWVudHMgfHwgdGhpcy5zZWdlbWVudHM7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUdyYXBoaWNzICgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXNbJ19ncmFwaGljcyddO1xuICAgICAgICAvLyBTaGFyZSByZW5kZXIgZGF0YSB3aXRoIGdyYXBoaWNzIGNvbnRlbnRcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoZmFsc2UpO1xuICAgICAgICBsZXQgW3gsIHksIHdpZHRoLCBoZWlnaHRdID0gdGhpcy5nZXROb2RlUmVjdCgpO1xuICAgICAgICBpZiAodGhpc1snX3R5cGUnXSA9PT0gTWFza1BsdXNUeXBlLlJFQ1QpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpc1snX3R5cGUnXSA9PT0gTWFza1BsdXNUeXBlLkVMTElQU0UpIHtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLmVsbGlwc2UuY2VudGVyIHx8IGNjLnYyKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmVsbGlwc2UuciB8fCB7eDogd2lkdGggLyAyLHk6IGhlaWdodCAvIDJ9O1xuICAgICAgICAgICAgbGV0IHNlZ21lbnRzID0gdGhpcy5lbGxpcHNlLnNlZ21lbnRzIHx8IHRoaXNbJ19zZWdtZW50cyddO1xuICAgICAgICAgICAgbGV0IHBvaW50cyA9IF9jYWxjdWxhdGVDaXJjbGUoY2VudGVyLCByYWRpdXMsIHNlZ21lbnRzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmFwaGljcy5jbG9zZSgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzWydfdHlwZSddID09PSBNYXNrUGx1c1R5cGUuUG9seWdvbikge1xuICAgICAgICAgICAgaWYodGhpcy5fcG9seWdvbi5sZW5ndGggPT09IDApIHRoaXMuX3BvbHlnb24ucHVzaChjYy52MigwLCAwKSk7XG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8odGhpcy5fcG9seWdvblswXS54LCB0aGlzLl9wb2x5Z29uWzBdLnkpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTE7IGk8dGhpcy5fcG9seWdvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh0aGlzLl9wb2x5Z29uW2ldLngsIHRoaXMuX3BvbHlnb25baV0ueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5fcG9seWdvblswXS54LCB0aGlzLl9wb2x5Z29uWzBdLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNjLmdhbWUucmVuZGVyVHlwZSA9PT0gY2MuZ2FtZS5SRU5ERVJfVFlQRV9DQU5WQVMpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hpdFRlc3QgKGNhbWVyYVB0OiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICBsZXQgc2l6ZSA9IG5vZGUuZ2V0Q29udGVudFNpemUoKSxcbiAgICAgICAgICAgIHcgPSBzaXplLndpZHRoLFxuICAgICAgICAgICAgaCA9IHNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgdGVzdFB0ID0gX3ZlYzJfdGVtcDtcbiAgICAgICAgXG4gICAgICAgIG5vZGVbJ191cGRhdGVXb3JsZE1hdHJpeCddKCk7XG4gICAgICAgIC8vIElmIHNjYWxlIGlzIDAsIGl0IGNhbid0IGJlIGhpdC5cbiAgICAgICAgaWYgKCFjYy5NYXQ0LmludmVydChfbWF0NF90ZW1wLCBub2RlWydfd29ybGRNYXRyaXgnXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9pbnQgPSBjYy52MigwLCAwKTtcbiAgICAgICAgY2MuVmVjMi50cmFuc2Zvcm1NYXQ0KHBvaW50LCBjYW1lcmFQdCwgX21hdDRfdGVtcCk7XG4gICAgICAgIHRlc3RQdC54ID0gcG9pbnQueCArIG5vZGVbJ19hbmNob3JQb2ludCddLnggKiB3O1xuICAgICAgICB0ZXN0UHQueSA9IHBvaW50LnkgKyBub2RlWydfYW5jaG9yUG9pbnQnXS55ICogaDtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IE1hc2tQbHVzVHlwZS5SRUNUIHx8IHRoaXMudHlwZSA9PT0gTWFza1BsdXNUeXBlLklNQUdFX1NURU5DSUwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRlc3RQdC54ID49IDAgJiYgdGVzdFB0LnkgPj0gMCAmJiB0ZXN0UHQueCA8PSB3ICYmIHRlc3RQdC55IDw9IGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09PSBNYXNrUGx1c1R5cGUuRUxMSVBTRSkge1xuICAgICAgICAgICAgbGV0IHJ4ID0gdyAvIDIsIHJ5ID0gaCAvIDI7XG4gICAgICAgICAgICBsZXQgcHggPSB0ZXN0UHQueCAtIDAuNSAqIHcsIHB5ID0gdGVzdFB0LnkgLSAwLjUgKiBoO1xuICAgICAgICAgICAgcmVzdWx0ID0gcHggKiBweCAvIChyeCAqIHJ4KSArIHB5ICogcHkgLyAocnkgKiByeSkgPCAxO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnR5cGUgPT09IE1hc2tQbHVzVHlwZS5Qb2x5Z29uKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBDb21tb25VdGlscy5pc0luUG9seWdvbihwb2ludCwgdGhpcy5wb2x5Z29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnZlcnRlZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gIXJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Tm9kZVJlY3QoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMubm9kZVsnX2NvbnRlbnRTaXplJ10ud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLm5vZGVbJ19jb250ZW50U2l6ZSddLmhlaWdodDtcbiAgICAgICAgbGV0IHggPSAtd2lkdGggKiB0aGlzLm5vZGVbJ19hbmNob3JQb2ludCddLng7XG4gICAgICAgIGxldCB5ID0gLWhlaWdodCAqIHRoaXMubm9kZVsnX2FuY2hvclBvaW50J10ueTtcbiAgICAgICAgcmV0dXJuIFt4LCB5LCB3aWR0aCwgaGVpZ2h0XTtcbiAgICB9XG5cbiAgICBcblxufVxuY2NbJ01hc2tQbHVzJ10gPSBNYXNrUGx1cztcbiJdfQ==