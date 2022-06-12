
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Light/Obstacle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaa90oCwvRPFqm2RBIJWdZL', 'Obstacle');
// Script/Common/Light/Obstacle.ts

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
var QuadTree_1 = require("../Components/QuadTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Obstacle = /** @class */ (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._quadtree = null;
        _this._polygons = cc.js.createMap();
        return _this;
    }
    Obstacle.prototype.onLoad = function () {
        var size = cc.view.getVisibleSize();
        this._quadtree = new QuadTree_1.default({ x: 0, y: 0, width: size.width, height: size.height });
    };
    Obstacle.prototype.addPolygon = function (uid, points) {
        this._polygons[uid] = points;
        var bound = this._getBound(points);
        bound.uid = uid;
        this._quadtree.insert(bound);
    };
    Obstacle.prototype.removePolygon = function (uid) {
        // todo...
    };
    Obstacle.prototype.getPolygons = function (bound) {
        var bounds = this._quadtree.retrieve(bound);
        var polygons = [];
        for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
            var e = bounds_1[_i];
            polygons.push(this._polygons[e.uid]);
        }
        return polygons;
    };
    Obstacle.prototype._getBound = function (points) {
        var point = points[0];
        var xMin = point.x;
        var xMax = point.x;
        var yMin = point.y;
        var yMax = point.y;
        for (var i = 0; i < points.length; i++) {
            if (points[i].x < xMin)
                xMin = points[i].x;
            if (points[i].x > xMax)
                xMax = points[i].x;
            if (points[i].y < yMin)
                yMin = points[i].y;
            if (points[i].y > yMax)
                yMax = points[i].y;
        }
        return new QuadTree_1.Bound(xMin, yMin, xMax - xMin, yMax - yMin);
    };
    Obstacle.prototype.clear = function () {
        this._quadtree.clear();
        this._polygons = {};
    };
    Obstacle = __decorate([
        ccclass
    ], Obstacle);
    return Obstacle;
}(cc.Component));
exports.default = Obstacle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0xpZ2h0L09ic3RhY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1EQztRQWpEVyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBK0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7SUFnRHRFLENBQUM7SUE3Q0cseUJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtCQUFRLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsTUFBaUI7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sZ0NBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixVQUFVO0lBQ2QsQ0FBQztJQUVNLDhCQUFXLEdBQWxCLFVBQW1CLEtBQVk7UUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixLQUFlLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1lBQW5CLElBQU0sQ0FBQyxlQUFBO1lBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVPLDRCQUFTLEdBQWpCLFVBQWtCLE1BQWlCO1FBQy9CLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25CLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO2dCQUFFLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO2dCQUFFLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO2dCQUFFLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO2dCQUFFLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxJQUFJLGdCQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sd0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWpEZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1ENUI7SUFBRCxlQUFDO0NBbkRELEFBbURDLENBbkRxQyxFQUFFLENBQUMsU0FBUyxHQW1EakQ7a0JBbkRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1YWR0cmVlLCB7IEJvdW5kIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvUXVhZFRyZWVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF9xdWFkdHJlZTogUXVhZHRyZWUgPSBudWxsO1xuICAgIHByaXZhdGUgX3BvbHlnb25zOiB7W2tleTogc3RyaW5nXTogY2MuVmVjMltdfSA9IGNjLmpzLmNyZWF0ZU1hcCgpO1xuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICB0aGlzLl9xdWFkdHJlZSA9IG5ldyBRdWFkdHJlZSh7eDogMCwgeTogMCwgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHR9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUG9seWdvbih1aWQ6IHN0cmluZywgcG9pbnRzOiBjYy5WZWMyW10pIHtcbiAgICAgICAgdGhpcy5fcG9seWdvbnNbdWlkXSA9IHBvaW50cztcbiAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5fZ2V0Qm91bmQocG9pbnRzKTtcbiAgICAgICAgYm91bmQudWlkID0gdWlkO1xuICAgICAgICB0aGlzLl9xdWFkdHJlZS5pbnNlcnQoYm91bmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVQb2x5Z29uKHVpZDogc3RyaW5nKSB7XG4gICAgICAgIC8vIHRvZG8uLi5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9seWdvbnMoYm91bmQ6IEJvdW5kKSB7XG4gICAgICAgIGxldCBib3VuZHMgPSB0aGlzLl9xdWFkdHJlZS5yZXRyaWV2ZShib3VuZCk7XG4gICAgICAgIGxldCBwb2x5Z29uczogY2MuVmVjMltdW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IGUgb2YgYm91bmRzKSB7XG4gICAgICAgICAgICBwb2x5Z29ucy5wdXNoKHRoaXMuX3BvbHlnb25zW2UudWlkXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvbHlnb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEJvdW5kKHBvaW50czogY2MuVmVjMltdKSB7XG4gICAgICAgIGxldCBwb2ludCA9IHBvaW50c1swXTtcbiAgICAgICAgbGV0IHhNaW4gPSBwb2ludC54O1xuICAgICAgICBsZXQgeE1heCA9IHBvaW50Lng7XG4gICAgICAgIGxldCB5TWluID0gcG9pbnQueTtcbiAgICAgICAgbGV0IHlNYXggPSBwb2ludC55O1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHBvaW50c1tpXS54IDwgeE1pbikgeE1pbiA9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgaWYocG9pbnRzW2ldLnggPiB4TWF4KSB4TWF4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZihwb2ludHNbaV0ueSA8IHlNaW4pIHlNaW4gPSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgIGlmKHBvaW50c1tpXS55ID4geU1heCkgeU1heCA9IHBvaW50c1tpXS55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQm91bmQoeE1pbiwgeU1pbiwgeE1heCAtIHhNaW4sIHlNYXggLSB5TWluKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX3F1YWR0cmVlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX3BvbHlnb25zID0ge307XG4gICAgfVxuXG59Il19