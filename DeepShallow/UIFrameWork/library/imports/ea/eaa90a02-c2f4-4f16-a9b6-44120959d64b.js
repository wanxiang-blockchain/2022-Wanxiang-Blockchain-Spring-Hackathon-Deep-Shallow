"use strict";
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