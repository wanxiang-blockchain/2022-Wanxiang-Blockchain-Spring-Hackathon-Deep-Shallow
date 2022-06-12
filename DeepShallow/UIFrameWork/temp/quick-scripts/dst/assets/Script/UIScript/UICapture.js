
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UICapture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlDYXB0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9FQUErRDtBQUMvRCw0REFBdUQ7QUFDdkQsNERBQXVEO0FBQ3ZELDhDQUF5QztBQUN6Qyw0Q0FBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVE7SUFBL0M7UUFBQSxxRUFrREM7UUEvQ0csWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFFcEMsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDOztRQXVDNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFwQ0csZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFDLENBQUM7WUFDNUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BCLGlCQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxpQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztvREFDWTtJQUVwQztRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7Z0RBQ1E7SUFWWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBa0Q3QjtJQUFELGdCQUFDO0NBbERELEFBa0RDLENBbERzQyxpQkFBUSxHQWtEOUM7a0JBbERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQ2FwdHVyZV9BdXRvIGZyb20gXCIuLi9BdXRvU2NyaXB0cy9VSUNhcHR1cmVfQXV0b1wiO1xuaW1wb3J0IENhbWVyYUNhcHR1cmUgZnJvbSBcIi4uL0NvbW1vbi9Db21wb25lbnRzL0NhbWVyYUNhcHR1cmVcIjtcbmltcG9ydCBEcmF3Qm9yYWQgZnJvbSBcIi4uL0NvbW1vbi9Db21wb25lbnRzL0RyYXdCb3JhZFwiO1xuaW1wb3J0IFRvdWNoUGx1cyBmcm9tIFwiLi4vQ29tbW9uL0NvbXBvbmVudHMvVG91Y2hQbHVzXCI7XG5pbXBvcnQgRm9ybU1nciBmcm9tIFwiLi4vVUlGcmFtZS9Gb3JtTWdyXCI7XG5pbXBvcnQgeyBVSVNjcmVlbiB9IGZyb20gXCIuLi9VSUZyYW1lL1VJRm9ybVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ2FwdHVyZSBleHRlbmRzIFVJU2NyZWVuIHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KENhbWVyYUNhcHR1cmUpXG4gICAgY2FtZXJlQ2FwdHVyZTogQ2FtZXJhQ2FwdHVyZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KERyYXdCb3JhZClcbiAgICBkcmF3Qm9yYWQ6IERyYXdCb3JhZCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFRvdWNoUGx1cylcbiAgICB0b3VjaFBsdXM6IFRvdWNoUGx1cyA9IG51bGw7XG5cbiAgICB2aWV3OiBVSUNhcHR1cmVfQXV0bztcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkgeyAgICAgICAgXG4gICAgICAgIHRoaXMudG91Y2hQbHVzLmFkZEV2ZW50KG51bGwsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGVsdGEgPSBlLmdldERlbHRhKCk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoUGx1cy5ub2RlLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMudG91Y2hQbHVzLm5vZGUueSArPSBkZWx0YS55O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZpZXcuQmFjay5hZGRDbGljaygoKSA9PiB7XG4gICAgICAgICAgICBGb3JtTWdyLmJhY2tTY2VuZSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy52aWV3LkNhcHR1cmUuYWRkQ2xpY2sodGhpcy5vbkNsaWNrQ2FwdHVyZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudmlldy5QZW4uYWRkQ2xpY2sodGhpcy5vbkNsaWNrUGVuLCB0aGlzKTtcbiAgICAgICAgdGhpcy52aWV3LlJlYXNlci5hZGRDbGljayh0aGlzLm9uQ2xpY2tSZWFzZXIsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGlja0NhcHR1cmUoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrQ2FwdHVyZSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNhbWVyZUNhcHR1cmUuY2FwdHVyZVRleHR1cmUoKTtcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKClcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEoZGF0YSwgY2MuVGV4dHVyZTJELlBpeGVsRm9ybWF0LlJHQkE4ODg4LCB0aGlzLmRyYXdCb3JhZC5ub2RlLndpZHRoLCB0aGlzLmRyYXdCb3JhZC5ub2RlLmhlaWdodCk7ICAgICAgICBcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7ICAgICAgICBcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUuc2V0RmxpcFkodHJ1ZSk7XG4gICAgICAgIHRoaXMuZHJhd0JvcmFkLnNldERhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgb25DbGlja1BlbigpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm9yYWQuc2V0UGVuKCk7XG4gICAgfVxuICAgIG9uQ2xpY2tSZWFzZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhd0JvcmFkLnNldFJlYXNlcigpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=