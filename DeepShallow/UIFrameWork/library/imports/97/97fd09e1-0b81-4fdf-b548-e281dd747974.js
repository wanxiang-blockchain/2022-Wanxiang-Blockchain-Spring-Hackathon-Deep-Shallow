"use strict";
cc._RF.push(module, '97fd0nhC4FP37VI4oHddHl0', 'PolygonUtil');
// Script/Common/Utils/PolygonUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonUtil = void 0;
var PolygonUtil = /** @class */ (function () {
    function PolygonUtil() {
    }
    /**
     *
     * @param l0
     * @param l1
     * @param polygon 逆时针
     * @param useDichotomy
     */
    PolygonUtil.splitPolygonByLine = function (l0, l1, polygon, useDichotomy) {
        if (useDichotomy === void 0) { useDichotomy = false; }
        var result = [];
        for (var i = polygon.length - 1; i >= 0; i--) {
            var p0 = polygon[i], p1 = i == 0 ? polygon[polygon.length - 1] : polygon[i - 1];
            var _a = this.lineCrossPoint(p0, p1, l0, l1), n = _a[0], p = _a[1];
            if (n == -1)
                continue;
            polygon.splice(i, -1, p);
            result.push(i + 1);
        }
        return result;
    };
    //求两条线段的交点
    //返回值：[n,p] n:0相交，1在共有点，-1不相交  p:交点
    PolygonUtil.lineCrossPoint = function (p1, p2, q1, q2) {
        var a = p1, b = p2, c = q1, d = q2;
        var s1, s2, s3, s4;
        var d1, d2, d3, d4;
        var p = new cc.Vec2(0, 0);
        d1 = this.dblcmp(s1 = this.ab_cross_ac(a, b, c), 0);
        d2 = this.dblcmp(s2 = this.ab_cross_ac(a, b, d), 0);
        d3 = this.dblcmp(s3 = this.ab_cross_ac(c, d, a), 0);
        d4 = this.dblcmp(s4 = this.ab_cross_ac(c, d, b), 0);
        //如果规范相交则求交点
        if ((d1 ^ d2) == -2 && (d3 ^ d4) == -2) {
            p.x = (c.x * s2 - d.x * s1) / (s2 - s1);
            p.y = (c.y * s2 - d.y * s1) / (s2 - s1);
            return [0, p];
        }
        //如果不规范相交
        if (d1 == 0 && this.point_on_line(c, a, b) <= 0) {
            p = c;
            return [1, p];
        }
        if (d2 == 0 && this.point_on_line(d, a, b) <= 0) {
            p = d;
            return [1, p];
        }
        if (d3 == 0 && this.point_on_line(a, c, d) <= 0) {
            p = a;
            return [1, p];
        }
        if (d4 == 0 && this.point_on_line(b, c, d) <= 0) {
            p = b;
            return [1, p];
        }
        //如果不相交
        return [-1, null];
    };
    //两条线段是否跨立
    //即非平行
    PolygonUtil.isLineSegmentCross = function (P1, P2, Q1, Q2) {
        if (((Q1.x - P1.x) * (Q1.y - Q2.y) - (Q1.y - P1.y) * (Q1.x - Q2.x)) * ((Q1.x - P2.x) * (Q1.y - Q2.y) - (Q1.y - P2.y) * (Q1.x - Q2.x)) < 0 ||
            ((P1.x - Q1.x) * (P1.y - P2.y) - (P1.y - Q1.y) * (P1.x - P2.x)) * ((P1.x - Q2.x) * (P1.y - P2.y) - (P1.y - Q2.y) * (P1.x - P2.x)) < 0) {
            return true;
        }
        return false;
    };
    //求a点是不是在线段上，>0不在，=0与端点重合，<0在。
    PolygonUtil.point_on_line = function (a, p1, p2) {
        return this.dblcmp(this.dot(p1.x - a.x, p1.y - a.y, p2.x - a.x, p2.y - a.y), 0);
    };
    //点发出的右射线和线段的关系
    // 返回值: -1:不相交, 0:相交, 1:点在线段上
    PolygonUtil.rayPointToLine = function (point, linePA, linePB) {
        // 定义最小和最大的X Y轴值  
        var minX = Math.min(linePA.x, linePB.x);
        var maxX = Math.max(linePA.x, linePB.x);
        var minY = Math.min(linePA.y, linePB.y);
        var maxY = Math.max(linePA.y, linePB.y);
        // 射线与边无交点的其他情况  
        if (point.y < minY || point.y > maxY || point.x > maxX) {
            return -1;
        }
        // 剩下的情况, 计算射线与边所在的直线的交点的横坐标  
        var x0 = linePA.x + ((linePB.x - linePA.x) / (linePB.y - linePA.y)) * (point.y - linePA.y);
        if (x0 > point.x) {
            return 0;
        }
        if (x0 == point.x) {
            return 1;
        }
        return -1;
    };
    //点和多边形的关系
    //返回值: -1:在多边形外部, 0:在多边形内部, 1:在多边形边线内, 2:跟多边形某个顶点重合
    PolygonUtil.relationPointToPolygon = function (point, polygon) {
        var count = 0;
        for (var i = 0; i < polygon.length; ++i) {
            if (polygon[i].equals(point)) {
                return 2;
            }
            var pa = polygon[i];
            var pb = polygon[0];
            if (i < polygon.length - 1) {
                pb = polygon[i + 1];
            }
            var re = this.rayPointToLine(point, pa, pb);
            if (re == 1) {
                return 1;
            }
            if (re == 0) {
                count++;
            }
        }
        if (count % 2 == 0) {
            return -1;
        }
        return 0;
    };
    //线段对多边形进行切割
    //返回多边形数组
    //如果没有被切割，返回空数组
    PolygonUtil.lineCutPolygon = function (pa, pb, polygon) {
        var ret = [];
        var points = [];
        var pointIndex = [];
        //将所有的点以及交点组成一个点序列
        for (var i = 0; i < polygon.length; ++i) {
            points.push(polygon[i]);
            var a = polygon[i];
            var b = polygon[0];
            if (i < polygon.length - 1)
                b = polygon[i + 1];
            var c = this.lineCrossPoint(pa, pb, a, b);
            if (c[0] == 0) {
                pointIndex.push(points.length);
                points.push(c[1]);
            }
            else if (c[0] > 0) {
                if (c[1].equals(a)) {
                    pointIndex.push(points.length - 1);
                }
                else {
                    pointIndex.push(points.length);
                }
            }
        }
        if (pointIndex.length > 1) {
            //准备从第一个交点开始拆，先弄清楚第一个交点是由外穿内，还是内穿外
            var cp0 = points[pointIndex[0]];
            var cp1 = points[pointIndex[1]];
            var r = this.relationPointToPolygon(new cc.Vec2((cp0.x + cp1.x) / 2, (cp0.y + cp1.y) / 2), polygon);
            var inPolygon = r >= 0;
            // if(pointIndex.length > 2 && cc.pDistance(cp0,cp1) > cc.pDistance(cp0,points[pointIndex[pointIndex.length-1]])) {
            if (pointIndex.length > 2 && cp0.sub(cp1).mag() > cp0.sub(points[pointIndex[pointIndex.length - 1]]).mag()) {
                cp1 = points[pointIndex[pointIndex.length - 1]];
                r = this.relationPointToPolygon(new cc.Vec2((cp0.x + cp1.x) / 2, (cp0.y + cp1.y) / 2), polygon);
                inPolygon = r < 0;
            }
            var firstInPolygon = inPolygon; //起始点是从外面穿到里面
            var index = 0;
            var startIndex = pointIndex[index];
            var oldPoints = [];
            var newPoints = [];
            var count = 0;
            oldPoints.push(points[startIndex]);
            if (inPolygon) {
                newPoints.push(points[startIndex]);
            }
            index++;
            count++;
            startIndex++;
            while (count < points.length) {
                if (startIndex == points.length)
                    startIndex = 0;
                var p = points[startIndex];
                if (index >= 0 && startIndex == pointIndex[index]) {
                    //又是一个交点
                    index++;
                    if (index >= pointIndex.length)
                        index = 0;
                    if (inPolygon) {
                        //原来是在多边形内部
                        //产生了新的多边形
                        newPoints.push(p);
                        ret.push(newPoints);
                        newPoints = [];
                    }
                    else {
                        //开始新的多边形
                        newPoints = [];
                        newPoints.push(p);
                    }
                    oldPoints.push(p);
                    inPolygon = !inPolygon;
                }
                else {
                    //普通的点
                    if (inPolygon) {
                        newPoints.push(p);
                    }
                    else {
                        oldPoints.push(p);
                    }
                }
                startIndex++;
                count++;
            }
            if (inPolygon) {
                if (!firstInPolygon && newPoints.length > 1) {
                    //如果起始点是从里面穿出去，到这里跟起始点形成闭包
                    newPoints.push(points[pointIndex[0]]);
                    ret.push(newPoints);
                }
                else {
                    //结束了，但是现在的状态是穿在多边形内部
                    //把newPoints里面的回复到主多边形中
                    for (var i = 0; i < newPoints.length; ++i) {
                        oldPoints.push(newPoints[i]);
                    }
                }
            }
            ret.push(oldPoints);
        }
        return ret;
    };
    PolygonUtil.ab_cross_ac = function (a, b, c) {
        return this.cross(b.x - a.x, b.y - a.y, c.x - a.x, c.y - a.y);
    };
    PolygonUtil.dot = function (x1, y1, x2, y2) {
        return x1 * x2 + y1 * y2;
    };
    PolygonUtil.cross = function (x1, y1, x2, y2) {
        return x1 * y2 - x2 * y1;
    };
    PolygonUtil.dblcmp = function (a, b) {
        if (Math.abs(a - b) <= 0.000001)
            return 0;
        if (a > b)
            return 1;
        else
            return -1;
    };
    return PolygonUtil;
}());
exports.PolygonUtil = PolygonUtil;

cc._RF.pop();