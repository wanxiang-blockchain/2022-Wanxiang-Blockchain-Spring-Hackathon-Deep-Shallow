
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Light/Light.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0xpZ2h0L0xpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBK0M7QUFHekMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ2pCLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxnQkFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBbUZDO1FBbEZHLFNBQVM7UUFFVCxjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWMsQ0FBQyxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVQsV0FBVztRQUNILGVBQVMsR0FBZ0IsSUFBSSxDQUFDOztRQW1FdEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFsRUcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNB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QUMsQ0FBQztTQUM3QztRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhCLDJDQUEyQztRQUMzQyxxQ0FBcUM7UUFDckMseUNBQXlDO1FBQ3pDLGlEQUFpRDtRQUNqRCx5QkFBeUI7UUFDekIsSUFBSTtJQUNSLENBQUM7SUE3RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQ0FDTztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7NENBQ1o7SUFMUixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBbUZ6QjtJQUFELFlBQUM7Q0FuRkQsQUFtRkMsQ0FuRmtDLEVBQUUsQ0FBQyxTQUFTLEdBbUY5QztrQkFuRm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3VuZCB9IGZyb20gXCIuLi9Db21wb25lbnRzL1F1YWRUcmVlXCI7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb24gfSBmcm9tIFwiLi9MaWdodFN0cnVjdFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gTGlnaHRUeXBlIHtcbiAgICBSb3VuZCwgICAgICAvLyDlnIblvaJcbiAgICBTZWN0b3IsICAgICAvLyDmiYflvaJcbn1cblxubGV0IExpZ2h0Qm91bmQgPSBuZXcgQm91bmQoMCwgMCwgMCwgMCk7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qKiDnlLvnrJQgKi9cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oTGlnaHRUeXBlKX0pXG4gICAgbGlnaHRUeXBlOiBMaWdodFR5cGUgPSAwO1xuXG5cbiAgICBjYW52YXNTaXplOiBjYy5TaXplID0gbnVsbDtcbiAgICB2aXNpYWJsZVNpemU6IGNjLlNpemUgPSBudWxsO1xuXG4gICAgcmFkaXVzID0gMjAwO1xuICAgIGZhZGUgPSAxO1xuXG4gICAgLy8gZ3JhcGhpY3NcbiAgICBwcml2YXRlIF9tYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLmdyYXBoaWNzLmdldE1hdGVyaWFsKDApO1xuICAgIFxuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKTtcbiAgICAgICAgdGhpcy52aXNpYWJsZVNpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLmNhbnZhc1NpemUpO1xuXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KFwic2NyZWVuXCIsIGNjLnYyKHRoaXMuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5jYW52YXNTaXplLmhlaWdodCkpO1xuXG5cbiAgICAgICAgbGV0IHIgPSB0aGlzLnJhZGl1cyAvIHRoaXMuY2FudmFzU2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJtYXhSYWRpdXNcIiwgcik7XG4gICAgfVxuXG4gICAgXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLm5vZGUueCArPSBlLmdldERlbHRhWCgpO1xuICAgICAgICB0aGlzLm5vZGUueSArPSBlLmdldERlbHRhWSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb3VuZCgpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBMaWdodEJvdW5kLnggPSBwb3MueC10aGlzLnJhZGl1cy8yOyBMaWdodEJvdW5kLnkgPSBwb3MueS10aGlzLnJhZGl1cy8yOyBcbiAgICAgICAgTGlnaHRCb3VuZC53aWR0aCA9IExpZ2h0Qm91bmQuaGVpZ2h0ID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIHJldHVybiBMaWdodEJvdW5kO1xuICAgIH1cbiAgICBcblxuICAgIC8qKiDnu5jliLblhYkgKi9cbiAgICBwdWJsaWMgZHJhdyhpbnRlcnNlY3Rpb25zOiBJbnRlcnNlY3Rpb25bXSkge1xuICAgICAgICBsZXQgbGlnaHRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5fZG9EcmF3KHRoaXMuZ3JhcGhpY3MsIGxpZ2h0UG9zLCBpbnRlcnNlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJsaWdodFBvc1wiLCBjYy52MihsaWdodFBvcy54L3RoaXMudmlzaWFibGVTaXplLndpZHRoLCBsaWdodFBvcy55L3RoaXMudmlzaWFibGVTaXplLmhlaWdodCkpO1xuICAgIH1cblxuICAgIC8qKiDnu5jliLZsaWdodCAqL1xuICAgIHByaXZhdGUgX2RvRHJhdyhncmFwaGljczogY2MuR3JhcGhpY3MsIGxpZ2h0OiBjYy5WZWMyLCBpbnRlcnNlY3RzOiBJbnRlcnNlY3Rpb25bXSkge1xuICAgICAgICBcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKGludGVyc2VjdHNbMF0ueCwgaW50ZXJzZWN0c1swXS55KTtcbiAgICAgICAgZm9yKGxldCBpPTE7IGk8aW50ZXJzZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGludGVyc2VjdCA9IGludGVyc2VjdHNbaV07XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oaW50ZXJzZWN0LngsIGludGVyc2VjdC55KTtcbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oaW50ZXJzZWN0c1swXS54LCBpbnRlcnNlY3RzWzBdLnkpO1xuICAgICAgICBcbiAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuXG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPGludGVyc2VjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGxldCBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzW2ldO1xuICAgICAgICAvLyAgICAgZ3JhcGhpY3MubW92ZVRvKGxpZ2h0LngsIGxpZ2h0LnkpO1xuICAgICAgICAvLyAgICAgZ3JhcGhpY3MubGluZVRvKGludGVyc2VjdC54LCBpbnRlcnNlY3QueSk7XG4gICAgICAgIC8vICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAgICAgXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn0iXX0=