
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Light/LightUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0xpZ2h0L0xpZ2h0VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBK0lBLENBQUM7SUE3SUcsb0JBQW9CO0lBQ04sMkJBQWdCLEdBQTlCLFVBQStCLEtBQWMsRUFBRSxRQUFxQjtRQUNoRSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFZLEdBQUc7UUFDdkQsSUFBSSxVQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNwQyxLQUFvQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtZQUF6QixJQUFNLE1BQU0sZ0JBQUE7WUFDWixtREFBbUQ7WUFFbkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDNUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEUsSUFBRyxDQUFDLFNBQVM7b0JBQUUsU0FBUztnQkFDeEIsaUJBQWlCO2dCQUVqQixTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxD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SSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ25CLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDbkIsR0FBRyxFQUFFLEVBQUU7U0FDVixDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0EvSUEsQUErSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyc2VjdGlvbiB9IGZyb20gXCIuL0xpZ2h0U3RydWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0VXRpbHMge1xuXG4gICAgLyoqIOiOt+W+l+aJgOacieWwhOe6v+S4juWkmui+ueW9oueahOS6pOeCuSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW50ZXJzZWN0aW9ucyhsaWdodDogY2MuVmVjMiwgcG9seWdvbnM6IGNjLlZlYzJbXVtdKSB7XG4gICAgICAgIGxldCByYXlTdGFydCA9IGxpZ2h0O1xuICAgICAgICBsZXQgcmF5RW5kcyA9IHRoaXMuZ2V0UmF5RW5kcyhwb2x5Z29ucyk7ICAgICAgICAgICAgLy8gXG4gICAgICAgIGxldCBpbnRlcnNlY3RzOiBJbnRlcnNlY3Rpb25bXSA9IFtdO1xuICAgICAgICBmb3IoY29uc3QgcmF5RW5kIG9mIHJheUVuZHMpIHtcbiAgICAgICAgICAgIC8vIOi/memHjOmcgOimgeWvuXJheWVuZCDov5vooYzkuIDmrKHliIbmlaMsIOWboOS4uuWcqOS4juWkmui+ueW9ouS6pOeCueWIpOaWreaXtiwg6ZyA6KaB5Yik5pat5YWJ57q/5Zyo5Lqk54K55ZGo5Zu055qE5oOF5Ya1XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBsID0gdGhpcy5nZXROb3JtYWwocmF5RW5kLnN1YihyYXlTdGFydCkpXG4gICAgICAgICAgICBmb3IobGV0IGk9LTE7IGk8PTE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0bXBSYXlFbmQgPSByYXlFbmQuYWRkKGwubXVsKGkgKiAwLjAwMSkpO1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnNlY3QgPSB0aGlzLmdldEludGVyc2VjdGlvbihwb2x5Z29ucywgcmF5U3RhcnQsIHRtcFJheUVuZCk7XG4gICAgICAgICAgICAgICAgaWYoIWludGVyc2VjdCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgLy8g6K6h566X6KeS5bqmIOeUqOadpeWvueS6pOeCuei/m+ihjOaOkuW6j1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGludGVyc2VjdC5hbmdsZSA9IE1hdGguYXRhbjIodG1wUmF5RW5kLnkgLSByYXlTdGFydC55LCB0bXBSYXlFbmQueCAtIHJheVN0YXJ0LngpO1xuICAgICAgICAgICAgICAgIGludGVyc2VjdHMucHVzaChpbnRlcnNlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGludGVyc2VjdHMgPSBpbnRlcnNlY3RzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgIHJldHVybiBhLmFuZ2xlLWIuYW5nbGU7IC8vIOWNh+W6j1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0cztcbiAgICB9XG5cbiAgICAvKiog5rGC5Z6C55u05ZCR6YePICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0Tm9ybWFsKGxpbmU6IGNjLlZlYzIpIHtcbiAgICAgICAgbGV0IGwgPSBsaW5lLm5vcm1hbGl6ZSgpO1xuICAgICAgICBsZXQgdG1wID0gbC54OyBsLnggPSBsLnk7IGwueSA9IC10bXA7XG4gICAgICAgIHJldHVybiBsO1xuICAgIH1cblxuICAgIC8qKiDojrflvpflsITnur8gKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRSYXlFbmRzKHBvbHlnb25zOiBjYy5WZWMyW11bXSkge1xuICAgICAgICBsZXQgcmF5RW5kczogY2MuVmVjMltdID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBvbHlnb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2VnID0gcG9seWdvbnNbaV07XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajxzZWcubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByYXlFbmRzLnB1c2goc2VnW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmF5RW5kcztcbiAgICB9XG5cbiAgICAvKiog6I635b6X5bCE57q/5ZKM5aSa6L655b2i5Lus5pyA6L+R5Lqk54K5LCDmnInlvojlpKfnmoTkvJjljJbnqbrpl7QsIOavlOWmguW7uueri+S4gOS4quaMieinkuW6puWIkuWIhueahOWbm+WPieagkSwg5YeP5bCR6YGN5Y6G5qyh5pWwICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW50ZXJzZWN0aW9uKHBvbHlnb25zOiBjYy5WZWMyW11bXSwgcmF5U3RhcnQ6IGNjLlZlYzIsIHJheUVuZDogY2MuVmVjMikge1xuICAgICAgICBsZXQgY2xvc2VzdEludGVyc2VjdDogSW50ZXJzZWN0aW9uID0gbnVsbDsgIC8vIOS6pOeCuVxuICAgICAgICBmb3IobGV0IGk9MDsgaTxwb2x5Z29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNlZyA9IHBvbHlnb25zW2ldO1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8c2VnLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGludGVyc2VjdCA9IHRoaXMuX2RvR2V0SW50ZXJzZWN0aW9uKHJheVN0YXJ0LCByYXlFbmQsIHNlZ1tqXSwgaiA9PT0gc2VnLmxlbmd0aC0xID8gc2VnWzBdIDogc2VnW2orMV0pO1xuICAgICAgICAgICAgICAgIGlmKCFpbnRlcnNlY3QpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmKCFjbG9zZXN0SW50ZXJzZWN0IHx8IGludGVyc2VjdC5sZW4gPCBjbG9zZXN0SW50ZXJzZWN0Lmxlbikge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0SW50ZXJzZWN0ID0gaW50ZXJzZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvc2VzdEludGVyc2VjdDtcbiAgICB9XG5cbiAgICAvKiog6YCa6L+H6KeS5bqm5YmU6Zmk5Lqk54K5LCDop5LluqbmmK/pgIbml7bpkojmlrnlkJEgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEludGVyc2VjdGlvbkJ5QW5nbGUoc3RhcnRBbmdsZTogbnVtYmVyLCBhbmdsZVJhbmdlOiBudW1iZXIsIGxpZ2h0OiBjYy5WZWMyLCBwb2x5Z29uczogY2MuVmVjMltdW10pIHtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gc3RhcnRBbmdsZSArIGFuZ2xlUmFuZ2U7XG4gICAgICAgIHN0YXJ0QW5nbGUgKj0gMC4wMTc0NTM7XG4gICAgICAgIGVuZEFuZ2xlICo9IDAuMDE3NDUzO1xuICAgICAgICAvLyDmnKzotKjlsLHmmK/ku6VsaWdodOS4uuWOn+eCueaQreW7uuWdkOagh+ezu1xuICAgICAgICBsZXQgcmF5RW5kMSA9IGNjLnYyKE1hdGguY29zKHN0YXJ0QW5nbGUpLCBNYXRoLnNpbihzdGFydEFuZ2xlKSkuYWRkKGxpZ2h0KTtcbiAgICAgICAgbGV0IHJheUVuZDIgPSBjYy52MihNYXRoLmNvcyhlbmRBbmdsZSksIE1hdGguc2luKGVuZEFuZ2xlKSkuYWRkKGxpZ2h0KTtcblxuICAgICAgICAvLyDnrpfkuqTngrlcbiAgICAgICAgbGV0IGludGVyc2VjdDEgPSB0aGlzLmdldEludGVyc2VjdGlvbihwb2x5Z29ucywgbGlnaHQsIHJheUVuZDEpO1xuICAgICAgICBpbnRlcnNlY3QxLmFuZ2xlID0gc3RhcnRBbmdsZTtcbiAgICAgICAgbGV0IGludGVyc2VjdDIgPSB0aGlzLmdldEludGVyc2VjdGlvbihwb2x5Z29ucywgbGlnaHQsIHJheUVuZDIpO1xuICAgICAgICBpbnRlcnNlY3QyLmFuZ2xlID0gZW5kQW5nbGU7XG5cbiAgICAgICAgLy8g6I635b6X5omA5pyJ5Lqk54K5XG4gICAgICAgIGxldCBpbnRlcnNlY3RzID0gdGhpcy5nZXRJbnRlcnNlY3Rpb25zKGxpZ2h0LCBwb2x5Z29ucyk7XG4gICAgICAgIC8vIOWJlOmZpOinkuW6puWklueahOS6pOeCuSwg6L+Z6YeM5Y+v5Lul5LyY5YyWLCDlm6DkuLppbnRlcnNlY3Rz5piv5pyJ5bqP55qELCDlj6/ku6Xkvb/nlKjkuozliIbms5Xmn6Xmib5cbiAgICAgICAgLy8g5LqM5YiG5rOVLCDlt7LkvJjljJZcbiAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5iaW5hcnlTZWFyY2hJbnRlcnNlY3RzKGludGVyc2VjdHMsIHN0YXJ0QW5nbGUsIHRydWUpO1xuICAgICAgICBsZXQgZW5kID0gdGhpcy5iaW5hcnlTZWFyY2hJbnRlcnNlY3RzKGludGVyc2VjdHMsIGVuZEFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIGludGVyc2VjdHMgPSBpbnRlcnNlY3RzLnNsaWNlKHN0YXJ0LCBlbmQrMSk7XG5cbiAgICAgICAgaW50ZXJzZWN0cy51bnNoaWZ0KHt4OmxpZ2h0LngsIHk6IGxpZ2h0LnksIGxlbjogMH0sIGludGVyc2VjdDEpXG4gICAgICAgIGludGVyc2VjdHMucHVzaChpbnRlcnNlY3QyKTtcblxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0cztcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGJpbmFyeVNlYXJjaEludGVyc2VjdHMoYXJyOiBJbnRlcnNlY3Rpb25bXSwgYW5nbGU6IG51bWJlciwgZmluZEZsYWcgPSBmYWxzZSkge1xuICAgICAgICBsZXQgc3RhcnQgPSAwLCBlbmQgPSBhcnIubGVuZ3RoLTE7XG4gICAgICAgIHdoaWxlKGVuZC1zdGFydCA+IDEpe1xuICAgICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICAgICAgaWYgKGFuZ2xlIDwgYXJyW2lkeF0uYW5nbGUpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpZHg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlID4gYXJyW2lkeF0uYW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICBzdGFydCA9IGlkeFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOayoeacieaJvuWIsOWvueW6lOeahOWAvFxuICAgICAgICByZXR1cm4gZmluZEZsYWcgPyBlbmQgOiBzdGFydDtcbiAgICB9XG5cbiAgICAvKiog5a+75om+5bCE57q/5ZKM57q/5q6155qE5Lqk54K5ICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RvR2V0SW50ZXJzZWN0aW9uKHJheTE6IGNjLlZlYzIsIHJheTI6IGNjLlZlYzIsIHNlZzE6IGNjLlZlYzIsIHNlZzI6IGNjLlZlYzIpIHtcbiAgICAgICAgbGV0IHJfcHggPSByYXkxLng7XG4gICAgICAgIGxldCByX3B5ID0gcmF5MS55O1xuICAgICAgICBsZXQgcl9keCA9IHJheTIueCAtIHJheTEueDtcbiAgICAgICAgbGV0IHJfZHkgPSByYXkyLnkgLSByYXkxLnk7XG5cbiAgICAgICAgbGV0IHNfcHggPSBzZWcxLng7XG4gICAgICAgIGxldCBzX3B5ID0gc2VnMS55O1xuICAgICAgICBsZXQgc19keCA9IHNlZzIueCAtIHNlZzEueDtcbiAgICAgICAgbGV0IHNfZHkgPSBzZWcyLnkgLSBzZWcxLnk7XG5cbiAgICAgICAgLy8g5bCE57q/6ZW/5bqmXG4gICAgICAgIGxldCByX21hZyA9IHJfZHggKiByX2R4ICsgcl9keSAqIHJfZHk7XG4gICAgICAgIC8vIOe6v+autemVv+W6plxuICAgICAgICBsZXQgc19tYWcgPSBzX2R4ICogc19keCArIHNfZHkgKiBzX2R5O1xuICAgICAgICAvLyDkuKTlkJHph4/mlrnlkJHnm7jlkIwsIHJldHVyblxuICAgICAgICBpZihyX2R4IC8gcl9tYWcgPT0gc19keCAvIHNfbWFnICYmIHJfZHkgLyByX21hZyA9PSBzX2R5IC8gc19tYWcpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBUMiA9IChyX2R4ICogKHNfcHkgLSByX3B5KSArIHJfZHkgKiAocl9weCAtIHNfcHgpKSAvIChzX2R4ICogcl9keSAtIHNfZHkgKiByX2R4KTtcbiAgICAgICAgbGV0IFQxID0gKHNfcHggKyBzX2R4ICogVDIgLSByX3B4KSAvIHJfZHg7XG5cbiAgICAgICAgLy8gTXVzdCBiZSB3aXRoaW4gcGFyYW1ldGljIHdoYXRldmVycyBmb3IgUkFZL1NFR01FTlRcbiAgICAgICAgaWYoVDEgPCAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYoVDIgPCAwIHx8IFQyID4gMSkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgICAgIFxuICAgICAgICAvLyBSZXR1cm4gdGhlIFBPSU5UIE9GIElOVEVSU0VDVElPTlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcl9weCArIHJfZHggKiBUMSxcbiAgICAgICAgICAgIHk6IHJfcHkgKyByX2R5ICogVDEsXG4gICAgICAgICAgICBsZW46IFQxXG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==