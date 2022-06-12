
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UISplitTexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlTcGxpdFRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDJEQUEwRDtBQUMxRCw0Q0FBNkM7QUFFN0MsOENBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFRO0lBQXBEO1FBQUEscUVBNklDO1FBeklHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBRWpCLGNBQVEsR0FBa0IsRUFBRSxDQUFDO1FBQzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBaUlyQyxDQUFDO0lBN0hHLDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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QUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxDQUFDLEdBQUcsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQyxHQUFHLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQXhJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0RBQ087SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDRTtJQVJSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E2SWxDO0lBQUQscUJBQUM7Q0E3SUQsQUE2SUMsQ0E3STJDLGlCQUFRLEdBNkluRDtrQkE3SW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dHVyZVBsdXMgZnJvbSBcIi4uL0NvbW1vbi9Db21wb25lbnRzL1RleHR1cmVQbHVzXCI7XG5pbXBvcnQgeyBQb2x5Z29uVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbHMvUG9seWdvblV0aWxcIjtcbmltcG9ydCB7IFVJU2NyZWVuIH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5pbXBvcnQgVUlTcGxpdFRleHR1cmVfQXV0byBmcm9tIFwiLi4vQXV0b1NjcmlwdHMvVUlTcGxpdFRleHR1cmVfQXV0b1wiO1xuaW1wb3J0IEZvcm1NZ3IgZnJvbSBcIi4uL1VJRnJhbWUvRm9ybU1nclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3BsaXRUZXh0dXJlIGV4dGVuZHMgVUlTY3JlZW4ge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0dXJlUm9vdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcbiAgICBwaWM6IGNjLlRleHR1cmUyRCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRleHR1cmVzOiBUZXh0dXJlUGx1c1tdID0gW107XG4gICAgcHJpdmF0ZSBzdGFydFBvaW50OiBjYy5WZWMyID0gbnVsbDtcbiAgICBwcml2YXRlIGVuZFBvaW50OiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHZpZXc6IFVJU3BsaXRUZXh0dXJlX0F1dG87XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzLm5vZGUueCA9IC1jYy52aXNpYmxlUmVjdC53aWR0aC8yO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLm5vZGUueSA9IC1jYy52aXNpYmxlUmVjdC5oZWlnaHQvMjtcblxuICAgICAgICB0aGlzLnZpZXcuQ2xvc2UuYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5iYWNrU2NlbmUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgdCA9IG5vZGUuYWRkQ29tcG9uZW50KFRleHR1cmVQbHVzKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnRleHR1cmVSb290O1xuICAgICAgICB0LnRleHR1cmUgPSB0aGlzLnBpYztcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKHQpO1xuICAgIH1cbiAgICBvblRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBlLmdldExvY2F0aW9uKCk7XG4gICAgfVxuICAgIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyh0aGlzLnN0YXJ0UG9pbnQueCwgdGhpcy5zdGFydFBvaW50LnkpO1xuICAgICAgICBsZXQgcCA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8ocC54LCBwLnkpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgIH1cbiAgICBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVuZFBvaW50ID0gZS5nZXRMb2NhdGlvbigpO1xuICAgICAgICB0aGlzLnVzZUxpbmVDdXRQb2x5Z29uKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1NwbGl0KCkge1xuICAgICAgICBsZXQgaCA9IHRoaXMucGljLmhlaWdodCwgdyA9IHRoaXMucGljLndpZHRoO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTwxNTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcDAgPSBjYy52MigtKHcvMisxMCksIChNYXRoLnJhbmRvbSgpICogaCktaC8yKTtcbiAgICAgICAgICAgIGxldCBwMSA9IGNjLnYyKHcvMisxMCwgKE1hdGgucmFuZG9tKCkgKiBoKS1oLzIpO1xuICAgICAgICAgICAgdGhpcy51c2VMaW5lQ3V0UG9seWdvbihwMCwgcDEsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDE1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwMCA9IGNjLnYyKE1hdGgucmFuZG9tKCkgKiB3IC0gdy8yLCAtKGgvMisxMCkpO1xuICAgICAgICAgICAgbGV0IHAxID0gY2MudjIoTWF0aC5yYW5kb20oKSAqIHcgLSB3LzIsIChoLzIrMTApKTtcbiAgICAgICAgICAgIHRoaXMudXNlTGluZUN1dFBvbHlnb24ocDAsIHAxLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVzZUxpbmVDdXRQb2x5Z29uKHAwOiBjYy5WZWMyLCBwMTogY2MuVmVjMiwgaXNXb3JsZCA9IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBpPXRoaXMudGV4dHVyZXMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLnRleHR1cmVzW2ldO1xuICAgICAgICAgICAgbGV0IHBhID0gcDAuY2xvbmUoKTtcbiAgICAgICAgICAgIGxldCBwYiA9IHAxLmNsb25lKCk7XG4gICAgICAgICAgICBpZihpc1dvcmxkKSB7XG4gICAgICAgICAgICAgICAgcGEgPSB0ZXh0dXJlLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocDApO1xuICAgICAgICAgICAgICAgIHBiID0gdGV4dHVyZS5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb2x5Z29ucyA9IFBvbHlnb25VdGlsLmxpbmVDdXRQb2x5Z29uKHBhLCBwYiwgdGV4dHVyZS5wb2x5Z29uKTtcbiAgICAgICAgICAgIGlmKHBvbHlnb25zLmxlbmd0aCA8PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRUZXh0dXJlKHRleHR1cmUsIHBvbHlnb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3BsaXRUZXh0dXJlKHRleHR1cmU6IFRleHR1cmVQbHVzLCBwb2x5Z29uczogY2MuVmVjMltdW10pIHtcbiAgICAgICAgdGV4dHVyZS5wb2x5Z29uID0gcG9seWdvbnNbMF07XG4gICAgICAgIGZvcihsZXQgaT0xOyBpPHBvbHlnb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBsZXQgdCA9IG5vZGUuYWRkQ29tcG9uZW50KFRleHR1cmVQbHVzKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy50ZXh0dXJlUm9vdDtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGV4dHVyZS5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHQudGV4dHVyZSA9IHRoaXMucGljO1xuICAgICAgICAgICAgdC5wb2x5Z29uID0gcG9seWdvbnNbaV07XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2godCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrRmx5KCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnRleHR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5nZXRQb2x5Z29uQ2VudGVyKHRoaXMudGV4dHVyZXNbaV0ucG9seWdvbik7XG4gICAgICAgICAgICBsZXQgZGlyID0gY2VudGVyLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXh0dXJlc1tpXS5ub2RlKS5ieSg1LCB7eDogZGlyLnggKiA1MDAsIHk6IGRpci55ICogNTAwfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tSZXNldCgpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy50ZXh0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuZ2V0UG9seWdvbkNlbnRlcih0aGlzLnRleHR1cmVzW2ldLnBvbHlnb24pO1xuICAgICAgICAgICAgbGV0IGRpciA9IGNlbnRlci5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dHVyZXNbaV0ubm9kZSkuYnkoNSwge3g6IC1kaXIueCAqIDUwMCwgeTogLWRpci55ICogNTAwfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gdGhpcy50ZXh0dXJlcy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVSb290LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVSb290LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIG9uRmFsbERvd24oKSB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudGV4dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLmdldFBvbHlnb25DZW50ZXIodGhpcy50ZXh0dXJlc1tpXS5wb2x5Z29uKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dHVyZXNbaV0ubm9kZSkuZGVsYXkoKGNlbnRlci55ICsgdGhpcy5waWMuaGVpZ2h0KS90aGlzLnBpYy5oZWlnaHQpLmJ5KDIsIHt5OiAtNTAwfSwgY2MuZWFzZUNpcmNsZUFjdGlvbkluKCkpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25SZXNldEZhbGxEb3duKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBvbHlnb25DZW50ZXIocG9seWdvbjogY2MuVmVjMltdKSB7XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBvbHlnb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHggKz0gcG9seWdvbltpXS54O1xuICAgICAgICAgICAgeSArPSBwb2x5Z29uW2ldLnk7XG4gICAgICAgIH1cbiAgICAgICAgeCA9IHgvcG9seWdvbi5sZW5ndGg7XG4gICAgICAgIHkgPSB5L3BvbHlnb24ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gY2MudjIoeCwgeSlcbiAgICB9XG59XG4iXX0=