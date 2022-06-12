
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/DrawBorad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d19bkVv4BM774fPMww+bzv', 'DrawBorad');
// Script/Common/Components/DrawBorad.ts

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
var DrawingBoard_1 = require("../Utils/DrawingBoard");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawBorad = /** @class */ (function (_super) {
    __extends(DrawBorad, _super);
    function DrawBorad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ndBroad = null;
        _this._drawingBroad = null;
        _this._texture = new cc.Texture2D();
        _this._sprite = null;
        _this.broadYMax = -1; // 画板上边界最大值
        _this.broadXMin = -1; // 画板左边界最小值
        _this._touching = false;
        return _this;
    }
    DrawBorad.prototype.onLoad = function () {
        if (!this.ndBroad) {
            this.ndBroad = this.node;
        }
        this._sprite = this.ndBroad.getComponent(cc.Sprite);
        if (!this._sprite) {
            this.ndBroad.addComponent(cc.Sprite);
        }
        this._drawingBroad = new DrawingBoard_1.default(this.ndBroad.width, this.ndBroad.height);
        this._drawingBroad.setColor(0, 0, 0, 255);
        this._drawingBroad.setLineWidth(5);
        this._touching = false;
        var worldPos = this.ndBroad.convertToWorldSpaceAR(cc.v2(0, 0));
        this.broadYMax = worldPos.y + this.ndBroad.height / 2;
        this.broadXMin = worldPos.x - this.ndBroad.width / 2;
        this.ndBroad.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.ndBroad.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.ndBroad.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.ndBroad.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    };
    DrawBorad.prototype.start = function () {
    };
    DrawBorad.prototype.setData = function (data) {
        this._drawingBroad.setData(data);
        this.updateTexture(this._drawingBroad.getData(), this.ndBroad.width, this.ndBroad.height);
    };
    DrawBorad.prototype.touchStart = function (e) {
        if (this._touching)
            return;
        this._touching = true;
        var worldPos = e.getLocation();
        this._drawingBroad.moveTo(worldPos.x - this.broadXMin, this.getRealY(worldPos.y));
    };
    DrawBorad.prototype.touchMove = function (e) {
        if (!this._touching)
            return;
        var worldPos = e.getLocation();
        this._drawingBroad.lineTo(worldPos.x - this.broadXMin, this.getRealY(worldPos.y));
        this.updateTexture(this._drawingBroad.getData(), this.ndBroad.width, this.ndBroad.height);
    };
    DrawBorad.prototype.touchCancel = function (e) {
        this._touching = false;
    };
    DrawBorad.prototype.touchEnd = function (e) {
        this._touching = false;
    };
    DrawBorad.prototype.onDestroy = function () {
        this.ndBroad.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.ndBroad.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.ndBroad.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.ndBroad.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    };
    DrawBorad.prototype.setColor = function (r, g, b, a) {
        this._drawingBroad.setColor(r, g, b, a);
    };
    DrawBorad.prototype.setLineWidth = function (width) {
        this._drawingBroad.setLineWidth(width);
    };
    DrawBorad.prototype.setPen = function () {
        this.setColor(0, 0, 0, 255);
        this.setLineWidth(5);
    };
    DrawBorad.prototype.setReaser = function () {
        this.setColor(0, 0, 0, 0);
        this.setLineWidth(20);
    };
    DrawBorad.prototype.getTexture = function () {
        return this._texture;
    };
    DrawBorad.prototype.updateTexture = function (data, width, height) {
        this._texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, width, height);
        this._sprite.spriteFrame.setTexture(this._texture);
        this._sprite.markForRender(true);
    };
    DrawBorad.prototype.getRealY = function (y) {
        if (this._sprite.spriteFrame['_flipY']) {
            return this.broadYMax - (cc.visibleRect.height - y);
        }
        return this.broadYMax - y;
    };
    __decorate([
        property(cc.Node)
    ], DrawBorad.prototype, "ndBroad", void 0);
    DrawBorad = __decorate([
        ccclass
    ], DrawBorad);
    return DrawBorad;
}(cc.Component));
exports.default = DrawBorad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvRHJhd0JvcmFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUUzQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTBHQztRQXZHRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRWhCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyxjQUFRLEdBQWlCLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVMsV0FBVztRQUNuQyxlQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBUyxXQUFXO1FBQ25DLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBK0Y5QixDQUFDO0lBNUZHLDBCQUFNLEdBQU47UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHNCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLENB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LENBMUdzQyxFQUFFLENBQUMsU0FBUyxHQTBHbEQ7a0JBMUdvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdpbmdCb2FyZCBmcm9tIFwiLi4vVXRpbHMvRHJhd2luZ0JvYXJkXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0JvcmFkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5kQnJvYWQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZHJhd2luZ0Jyb2FkOiBEcmF3aW5nQm9hcmQgPSBudWxsO1xuICAgIHByaXZhdGUgX3RleHR1cmU6IGNjLlRleHR1cmUyRCA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICBwcml2YXRlIF9zcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGJyb2FkWU1heCA9IC0xOyAgICAgICAgIC8vIOeUu+adv+S4iui+ueeVjOacgOWkp+WAvFxuICAgIHByaXZhdGUgYnJvYWRYTWluID0gLTE7ICAgICAgICAgLy8g55S75p2/5bem6L6555WM5pyA5bCP5YC8XG4gICAgcHJpdmF0ZSBfdG91Y2hpbmcgPSBmYWxzZTtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZighdGhpcy5uZEJyb2FkKSB7XG4gICAgICAgICAgICB0aGlzLm5kQnJvYWQgPSB0aGlzLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5uZEJyb2FkLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZighdGhpcy5fc3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5kQnJvYWQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZHJhd2luZ0Jyb2FkID0gbmV3IERyYXdpbmdCb2FyZCh0aGlzLm5kQnJvYWQud2lkdGgsIHRoaXMubmRCcm9hZC5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9kcmF3aW5nQnJvYWQuc2V0Q29sb3IoMCwgMCwgMCwgMjU1KTtcbiAgICAgICAgdGhpcy5fZHJhd2luZ0Jyb2FkLnNldExpbmVXaWR0aCg1KTtcblxuICAgICAgICB0aGlzLl90b3VjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubmRCcm9hZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXG4gICAgICAgIHRoaXMuYnJvYWRZTWF4ID0gd29ybGRQb3MueSArIHRoaXMubmRCcm9hZC5oZWlnaHQvMiA7XG4gICAgICAgIHRoaXMuYnJvYWRYTWluID0gd29ybGRQb3MueCAtIHRoaXMubmRCcm9hZC53aWR0aC8yO1xuXG4gICAgICAgIHRoaXMubmRCcm9hZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5uZEJyb2FkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5uZEJyb2FkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICAgIHRoaXMubmRCcm9hZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZHJhd2luZ0Jyb2FkLnNldERhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSh0aGlzLl9kcmF3aW5nQnJvYWQuZ2V0RGF0YSgpLCB0aGlzLm5kQnJvYWQud2lkdGgsIHRoaXMubmRCcm9hZC5oZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmKHRoaXMuX3RvdWNoaW5nKSByZXR1cm4gO1xuICAgICAgICB0aGlzLl90b3VjaGluZyA9IHRydWU7XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5fZHJhd2luZ0Jyb2FkLm1vdmVUbyh3b3JsZFBvcy54LXRoaXMuYnJvYWRYTWluLCB0aGlzLmdldFJlYWxZKHdvcmxkUG9zLnkpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZighdGhpcy5fdG91Y2hpbmcpIHJldHVybiA7XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5fZHJhd2luZ0Jyb2FkLmxpbmVUbyh3b3JsZFBvcy54LXRoaXMuYnJvYWRYTWluLCB0aGlzLmdldFJlYWxZKHdvcmxkUG9zLnkpKTtcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKHRoaXMuX2RyYXdpbmdCcm9hZC5nZXREYXRhKCksIHRoaXMubmRCcm9hZC53aWR0aCwgdGhpcy5uZEJyb2FkLmhlaWdodCk7XG4gICAgfVxuICAgIHByaXZhdGUgdG91Y2hDYW5jZWwoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLl90b3VjaGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIHRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5fdG91Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubmRCcm9hZC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubmRCcm9hZC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5kQnJvYWQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICAgIHRoaXMubmRCcm9hZC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRDb2xvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZHJhd2luZ0Jyb2FkLnNldENvbG9yKHIsIGcsIGIsIGEpO1xuICAgIH1cbiAgICBzZXRMaW5lV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kcmF3aW5nQnJvYWQuc2V0TGluZVdpZHRoKHdpZHRoKTtcbiAgICB9XG4gICAgc2V0UGVuKCkge1xuICAgICAgICB0aGlzLnNldENvbG9yKDAsIDAsIDAsIDI1NSk7XG4gICAgICAgIHRoaXMuc2V0TGluZVdpZHRoKDUpO1xuICAgIH1cbiAgICBzZXRSZWFzZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0Q29sb3IoMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuc2V0TGluZVdpZHRoKDIwKTtcbiAgICB9XG5cbiAgICBnZXRUZXh0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRleHR1cmUoZGF0YTogYW55LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90ZXh0dXJlLmluaXRXaXRoRGF0YShkYXRhLCBjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0aGlzLl90ZXh0dXJlKVxuICAgICAgICB0aGlzLl9zcHJpdGUubWFya0ZvclJlbmRlcih0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmVhbFkoeTogbnVtYmVyKSB7XG4gICAgICAgIGlmKHRoaXMuX3Nwcml0ZS5zcHJpdGVGcmFtZVsnX2ZsaXBZJ10pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyb2FkWU1heCAtIChjYy52aXNpYmxlUmVjdC5oZWlnaHQteSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYnJvYWRZTWF4IC0geTtcbiAgICB9XG5cblxufSJdfQ==