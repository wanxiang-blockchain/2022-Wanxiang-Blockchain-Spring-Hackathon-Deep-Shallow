
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UILight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlMaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBMkQ7QUFDM0QsK0NBQTBDO0FBQzFDLHlEQUFvRDtBQUNwRCxxREFBZ0Q7QUFDaEQsOENBQXlDO0FBQ3pDLDRDQUE2QztBQUV2QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBUTtJQUE3QztRQUFBLHFFQTZEQztRQTFEVyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFHNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUNKLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFeEMsb0JBQWMsR0FBcUIsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBa0R0RSxDQUFDO0lBaERHLHdCQUFNLEdBQU47UUFBQSxpQkFZQztRQVhHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDMUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3QyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNySCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3BELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMs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T0FDYSxPQUFPLENBNkQzQjtJQUFELGNBQUM7Q0E3REQsQUE2REMsQ0E3RG9DLGlCQUFRLEdBNkQ1QztrQkE3RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlMaWdodF9BdXRvIGZyb20gXCIuLi9BdXRvU2NyaXB0cy9VSUxpZ2h0X0F1dG9cIjtcbmltcG9ydCBUZXh0dXJlUGx1cyBmcm9tIFwiLi4vQ29tbW9uL0NvbXBvbmVudHMvVGV4dHVyZVBsdXNcIjtcbmltcG9ydCBMaWdodCBmcm9tIFwiLi4vQ29tbW9uL0xpZ2h0L0xpZ2h0XCI7XG5pbXBvcnQgTGlnaHRVdGlscyBmcm9tIFwiLi4vQ29tbW9uL0xpZ2h0L0xpZ2h0VXRpbHNcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi4vQ29tbW9uL0xpZ2h0L09ic3RhY2xlXCI7XG5pbXBvcnQgRm9ybU1nciBmcm9tIFwiLi4vVUlGcmFtZS9Gb3JtTWdyXCI7XG5pbXBvcnQgeyBVSVNjcmVlbiB9IGZyb20gXCIuLi9VSUZyYW1lL1VJRm9ybVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTGlnaHQgZXh0ZW5kcyBVSVNjcmVlbiB7XG4gICAgXG4gICAgQHByb3BlcnR5KE9ic3RhY2xlKVxuICAgIHByaXZhdGUgb2JzdGFjbGU6IE9ic3RhY2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTGlnaHQpXG4gICAgcHJpdmF0ZSBsaWdodDogTGlnaHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgc3BTaGFkb3c6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9zaGFkb3dUZXh0dXJlOiBjYy5SZW5kZXJUZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICB2aWV3OiBVSUxpZ2h0X0F1dG87XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX0RSQVcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1RleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xuICAgICAgICAgICAgdGhpcy5fc2hhZG93VGV4dHVyZS5pbml0V2l0aFNpemUoY2MudmlzaWJsZVJlY3Qud2lkdGgsIGNjLnZpc2libGVSZWN0LmhlaWdodCwgY2MuZ2FtZS5fcmVuZGVyQ29udGV4dC5TVEVOQ0lMX0lOREVYOCk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGhpcy5fc2hhZG93VGV4dHVyZTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfRFJBVywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zcFNoYWRvdy5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMuX3NoYWRvd1RleHR1cmUpO1xuICAgICAgICAgICAgdGhpcy5zcFNoYWRvdy5zcHJpdGVGcmFtZS5zZXRGbGlwWSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc3BTaGFkb3cubWFya0ZvclJlbmRlcih0cnVlKVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgdGhpcy5vYnN0YWNsZS5hZGRQb2x5Z29uKCcnLCBbXG4gICAgICAgICAgICBjYy52MigwLCAwKSwgY2MudjIodmlld1NpemUud2lkdGgsIDApLCBjYy52Mih2aWV3U2l6ZS53aWR0aCwgdmlld1NpemUuaGVpZ2h0KSwgY2MudjIoMCwgdmlld1NpemUuaGVpZ2h0KVxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgbmRPYnN0YWNsZSA9IHRoaXMub2JzdGFjbGUubm9kZTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bmRPYnN0YWNsZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gbmRPYnN0YWNsZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb20gPSBub2RlLmdldENvbXBvbmVudChUZXh0dXJlUGx1cyk7XG4gICAgICAgICAgICBpZighY29tKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHBvaW50cyA9IGNvbS5wb2x5Z29uLmNvbmNhdChbXSk7XG4gICAgICAgICAgICBwb2ludHMgPSBwb2ludHMubWFwKGUgPT4gZS5hZGQobm9kZS5nZXRQb3NpdGlvbigpKSk7XG5cbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGUuYWRkUG9seWdvbihjb20ubm9kZS51dWlkLCBwb2ludHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3LkJhY2suYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5iYWNrU2NlbmUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGRyYXcoKSB7XG4gICAgICAgIGxldCBwb2x5Z29ucyA9IHRoaXMub2JzdGFjbGUuZ2V0UG9seWdvbnModGhpcy5saWdodC5nZXRCb3VuZCgpKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbnRlcnNlY3Rpb25zID0gTGlnaHRVdGlscy5nZXRJbnRlcnNlY3Rpb25zKHRoaXMubGlnaHQubm9kZS5nZXRQb3NpdGlvbigpLCBwb2x5Z29ucyk7XG4gICAgICAgIHRoaXMubGlnaHQuZHJhdyhpbnRlcnNlY3Rpb25zKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmF3KCk7ICAgICAgIFxuICAgIH1cbn1cbiJdfQ==