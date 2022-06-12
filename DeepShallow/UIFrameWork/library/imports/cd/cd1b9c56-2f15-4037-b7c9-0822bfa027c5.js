"use strict";
cc._RF.push(module, 'cd1b9xWLxVAN7fJCCK/oCfF', 'LightUtils');
// Script/Common/Light/LightUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LightUtils = /** @class */ (function () {
    function LightUtils() {
    }
    /** 获得所有射线与多边形的交点 */
    LightUtils.getIntersections = function (light, polygons) {
        var rayStart = light;
        var rayEnds = this.getRayEnds(polygons); // 
        var intersects = [];
        for (var _i = 0, rayEnds_1 = rayEnds; _i < rayEnds_1.length; _i++) {
            var rayEnd = rayEnds_1[_i];
            // 这里需要对rayend 进行一次分散, 因为在与多边形交点判断时, 需要判断光线在交点周围的情况
            var l = this.getNormal(rayEnd.sub(rayStart));
            for (var i = -1; i <= 1; i++) {
                var tmpRayEnd = rayEnd.add(l.mul(i * 0.001));
                var intersect = this.getIntersection(polygons, rayStart, tmpRayEnd);
                if (!intersect)
                    continue;
                // 计算角度 用来对交点进行排序
                intersect.angle = Math.atan2(tmpRayEnd.y - rayStart.y, tmpRayEnd.x - rayStart.x);
                intersects.push(intersect);
            }
        }
        intersects = intersects.sort(function (a, b) {
            return a.angle - b.angle; // 升序
        });
        return intersects;
    };
    /** 求垂直向量 */
    LightUtils.getNormal = function (line) {
        var l = line.normalize();
        var tmp = l.x;
        l.x = l.y;
        l.y = -tmp;
        return l;
    };
    /** 获得射线 */
    LightUtils.getRayEnds = function (polygons) {
        var rayEnds = [];
        for (var i = 0; i < polygons.length; i++) {
            var seg = polygons[i];
            for (var j = 0; j < seg.length; j++) {
                rayEnds.push(seg[j]);
            }
        }
        return rayEnds;
    };
    /** 获得射线和多边形们最近交点, 有很大的优化空间, 比如建立一个按角度划分的四叉树, 减少遍历次数 */
    LightUtils.getIntersection = function (polygons, rayStart, rayEnd) {
        var closestIntersect = null; // 交点
        for (var i = 0; i < polygons.length; i++) {
            var seg = polygons[i];
            for (var j = 0; j < seg.length; j++) {
                var intersect = this._doGetIntersection(rayStart, rayEnd, seg[j], j === seg.length - 1 ? seg[0] : seg[j + 1]);
                if (!intersect)
                    continue;
                if (!closestIntersect || intersect.len < closestIntersect.len) {
                    closestIntersect = intersect;
                }
            }
        }
        return closestIntersect;
    };
    /** 通过角度剔除交点, 角度是逆时针方向 */
    LightUtils.getIntersectionByAngle = function (startAngle, angleRange, light, polygons) {
        var endAngle = startAngle + angleRange;
        startAngle *= 0.017453;
        endAngle *= 0.017453;
        // 本质就是以light为原点搭建坐标系
        var rayEnd1 = cc.v2(Math.cos(startAngle), Math.sin(startAngle)).add(light);
        var rayEnd2 = cc.v2(Math.cos(endAngle), Math.sin(endAngle)).add(light);
        // 算交点
        var intersect1 = this.getIntersection(polygons, light, rayEnd1);
        intersect1.angle = startAngle;
        var intersect2 = this.getIntersection(polygons, light, rayEnd2);
        intersect2.angle = endAngle;
        // 获得所有交点
        var intersects = this.getIntersections(light, polygons);
        // 剔除角度外的交点, 这里可以优化, 因为intersects是有序的, 可以使用二分法查找
        // 二分法, 已优化
        var start = this.binarySearchIntersects(intersects, startAngle, true);
        var end = this.binarySearchIntersects(intersects, endAngle, false);
        intersects = intersects.slice(start, end + 1);
        intersects.unshift({ x: light.x, y: light.y, len: 0 }, intersect1);
        intersects.push(intersect2);
        return intersects;
    };
    LightUtils.binarySearchIntersects = function (arr, angle, findFlag) {
        if (findFlag === void 0) { findFlag = false; }
        var start = 0, end = arr.length - 1;
        while (end - start > 1) {
            var idx = Math.floor((start + end) / 2);
            if (angle < arr[idx].angle) {
                end = idx;
            }
            else if (angle > arr[idx].angle) {
                start = idx;
            }
            else {
                return idx;
            }
        }
        // 没有找到对应的值
        return findFlag ? end : start;
    };
    /** 寻找射线和线段的交点 */
    LightUtils._doGetIntersection = function (ray1, ray2, seg1, seg2) {
        var r_px = ray1.x;
        var r_py = ray1.y;
        var r_dx = ray2.x - ray1.x;
        var r_dy = ray2.y - ray1.y;
        var s_px = seg1.x;
        var s_py = seg1.y;
        var s_dx = seg2.x - seg1.x;
        var s_dy = seg2.y - seg1.y;
        // 射线长度
        var r_mag = r_dx * r_dx + r_dy * r_dy;
        // 线段长度
        var s_mag = s_dx * s_dx + s_dy * s_dy;
        // 两向量方向相同, return
        if (r_dx / r_mag == s_dx / s_mag && r_dy / r_mag == s_dy / s_mag)
            return null;
        var T2 = (r_dx * (s_py - r_py) + r_dy * (r_px - s_px)) / (s_dx * r_dy - s_dy * r_dx);
        var T1 = (s_px + s_dx * T2 - r_px) / r_dx;
        // Must be within parametic whatevers for RAY/SEGMENT
        if (T1 < 0)
            return null;
        if (T2 < 0 || T2 > 1)
            return null;
        // Return the POINT OF INTERSECTION
        return {
            x: r_px + r_dx * T1,
            y: r_py + r_dy * T1,
            len: T1
        };
    };
    return LightUtils;
}());
exports.default = LightUtils;

cc._RF.pop();