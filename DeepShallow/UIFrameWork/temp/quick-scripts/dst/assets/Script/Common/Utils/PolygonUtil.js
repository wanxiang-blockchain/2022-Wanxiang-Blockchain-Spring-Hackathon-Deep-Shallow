
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/PolygonUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1BvbHlnb25VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF5U0EsQ0FBQztJQXhTRzs7Ozs7O09BTUc7SUFDVyw4QkFBa0IsR0FBaEMsVUFBaUMsRUFBVyxFQUFFLEVBQVcsRUFBRSxPQUFrQixFQUFFLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9CO1FBQy9GLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztRQUMxQixLQUFJLElBQUksQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNuQixFQUFFLEdBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBQSxLQUFTLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQTNDLENBQUMsUUFBQSxFQUFFLENBQUMsUUFBdUMsQ0FBQztZQUNqRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ3JCLDBCQUFjLEdBQTVCLFVBQTZCLEVBQVUsRUFBQyxFQUFVLEVBQUMsRUFBVSxFQUFDLEVBQVU7UUFDcEUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFXLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUU3QyxZQUFZO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsSUFBRSxDQUFDLENBQUMsRUFDOUI7WUFDSSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBRUQsU0FBUztRQUNULElBQUksRUFBRSxJQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxFQUN6QztZQUNJLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFLElBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQ3pDO1lBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxJQUFJLEVBQUUsSUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsRUFDekM7WUFDSSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtRQUNELElBQUksRUFBRSxJQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxFQUN6QztZQUNJLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0wsT0FBTztRQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsVUFBVTtJQUNWLE1BQU07SUFDUSw4QkFBa0IsR0FBaEMsVUFBaUMsRUFBVSxFQUFDLEVBQVUsRUFBQyxFQUFVLEVBQUMsRUFBVTtRQUV4RSxJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBRSxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDMUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUU5RztZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsOEJBQThCO0lBQ2hCLHlCQUFhLEdBQTNCLFVBQTRCLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRTtRQUUvQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsZUFBZTtJQUNmLDZCQUE2QjtJQUNmLDBCQUFjLEdBQTVCLFVBQTZCLEtBQWEsRUFBQyxNQUFjLEVBQUMsTUFBYztRQUNwRSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2QyxpQkFBaUI7UUFDakIsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtZQUNwRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFDZjtZQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxJQUFHLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUNoQjtZQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVU7SUFDVixtREFBbUQ7SUFDckMsa0NBQXNCLEdBQXBDLFVBQXFDLEtBQWEsRUFBQyxPQUFpQjtRQUVoRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsRUFDbEM7WUFDSSxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQzNCO2dCQUNJLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFFRCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUUsQ0FBQyxFQUN4QjtnQkFDSSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtZQUVELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFHLEVBQUUsSUFBSSxDQUFDLEVBQ1Y7Z0JBQ0ksT0FBTyxDQUFDLENBQUM7YUFDWjtZQUNELElBQUcsRUFBRSxJQUFJLENBQUMsRUFDVjtnQkFDSSxLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0o7UUFDRCxJQUFHLEtBQUssR0FBRSxDQUFDLElBQUksQ0FBQyxFQUNoQjtZQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNELDBCQUFjLEdBQTVCLFVBQTZCLEVBQVUsRUFBQyxFQUFVLEVBQUMsT0FBaUI7UUFDaEUsSUFBSSxHQUFHLEdBQW9CLEVBQUUsQ0FBQztRQUU5QixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDMUIsSUFBSSxVQUFVLEdBQVksRUFBRSxDQUFDO1FBRTdCLGtCQUFrQjtRQUNsQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsRUFDbEM7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRSxDQUFDO2dCQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUNULFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVksQ0FBQyxDQUFDO2FBQ2hDO2lCQUNJLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDaEI7Z0JBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUM5QjtvQkFDSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO3FCQUVEO29CQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNsQzthQUNKO1NBQ0o7UUFDRCxJQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN4QjtZQUNJLGtDQUFrQztZQUNsQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQztZQUM1RixJQUFJLFNBQVMsR0FBVyxDQUFDLElBQUcsQ0FBQyxDQUFDO1lBRTlCLG1IQUFtSDtZQUNuSCxJQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNyRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hGLFNBQVMsR0FBRyxDQUFDLEdBQUUsQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLENBQUEsYUFBYTtZQUU1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUcsU0FBUyxFQUNaO2dCQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDdEM7WUFFRCxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLENBQUM7WUFFYixPQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUMzQjtnQkFDSSxJQUFHLFVBQVUsSUFBSSxNQUFNLENBQUMsTUFBTTtvQkFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNCLElBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUNoRDtvQkFDSSxRQUFRO29CQUNSLEtBQUssRUFBRSxDQUFDO29CQUNSLElBQUcsS0FBSyxJQUFJLFVBQVUsQ0FBQyxNQUFNO3dCQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3pDLElBQUcsU0FBUyxFQUFDO3dCQUNULFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNwQixTQUFTLEdBQUcsRUFBRSxDQUFDO3FCQUNsQjt5QkFFRDt3QkFDSSxTQUFTO3dCQUNULFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckI7b0JBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDO2lCQUMxQjtxQkFFRDtvQkFDSSxNQUFNO29CQUNOLElBQUcsU0FBUyxFQUNaO3dCQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JCO3lCQUVEO3dCQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JCO2lCQUNKO2dCQUNELFVBQVUsRUFBRSxDQUFDO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRCxJQUFHLFNBQVMsRUFDWjtnQkFDSSxJQUFHLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUMxQztvQkFDSSwwQkFBMEI7b0JBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3ZCO3FCQUVEO29CQUNJLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsRUFDcEM7d0JBQ0ksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDaEM7aUJBQ0o7YUFFSjtZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFHYyx1QkFBVyxHQUExQixVQUEyQixDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDYyxlQUFHLEdBQWxCLFVBQW1CLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUU7UUFDMUIsT0FBTyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNjLGlCQUFLLEdBQXBCLFVBQXFCLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUU7UUFDNUIsT0FBTyxFQUFFLEdBQUMsRUFBRSxHQUFHLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNjLGtCQUFNLEdBQXJCLFVBQXNCLENBQVEsRUFBQyxDQUFRO1FBRW5DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsUUFBUTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQzs7WUFDYixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTCxrQkFBQztBQUFELENBelNBLEFBeVNDLElBQUE7QUF6U1ksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9seWdvblV0aWwge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBsMCBcbiAgICAgKiBAcGFyYW0gbDEgXG4gICAgICogQHBhcmFtIHBvbHlnb24g6YCG5pe26ZKIXG4gICAgICogQHBhcmFtIHVzZURpY2hvdG9teSBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNwbGl0UG9seWdvbkJ5TGluZShsMDogY2MuVmVjMiwgbDE6IGNjLlZlYzIsIHBvbHlnb246IGNjLlZlYzJbXSwgdXNlRGljaG90b215ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPXBvbHlnb24ubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHAwID0gcG9seWdvbltpXSwgXG4gICAgICAgICAgICBwMSA9IGk9PTAgPyBwb2x5Z29uW3BvbHlnb24ubGVuZ3RoLTFdIDogcG9seWdvbltpLTFdO1xuICAgICAgICAgICAgbGV0IFtuLCBwXSA9IHRoaXMubGluZUNyb3NzUG9pbnQocDAsIHAxLCBsMCwgbDEpO1xuICAgICAgICAgICAgaWYobiA9PSAtMSkgY29udGludWU7XG4gICAgICAgICAgICBwb2x5Z29uLnNwbGljZShpLCAtMSwgcCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpKzEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8v5rGC5Lik5p2h57q/5q6155qE5Lqk54K5XG4gICAgLy/ov5Tlm57lgLzvvJpbbixwXSBuOjDnm7jkuqTvvIwx5Zyo5YWx5pyJ54K577yMLTHkuI3nm7jkuqQgIHA65Lqk54K5XG4gICAgcHVibGljIHN0YXRpYyBsaW5lQ3Jvc3NQb2ludChwMTpjYy5WZWMyLHAyOmNjLlZlYzIscTE6Y2MuVmVjMixxMjpjYy5WZWMyKTogW251bWJlciwgY2MuVmVjMl17XG4gICAgICAgIGxldCBhID0gcDEsYiA9IHAyLGMgPSBxMSxkID0gcTI7XG4gICAgICAgIGxldCBzMSxzMixzMyxzNDtcbiAgICAgICAgbGV0IGQxLGQyLGQzLGQ0O1xuICAgICAgICBsZXQgcDpjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwwKTtcbiAgICAgICAgZDE9dGhpcy5kYmxjbXAoczE9dGhpcy5hYl9jcm9zc19hYyhhLGIsYyksMCk7XG4gICAgICAgIGQyPXRoaXMuZGJsY21wKHMyPXRoaXMuYWJfY3Jvc3NfYWMoYSxiLGQpLDApO1xuICAgICAgICBkMz10aGlzLmRibGNtcChzMz10aGlzLmFiX2Nyb3NzX2FjKGMsZCxhKSwwKTtcbiAgICAgICAgZDQ9dGhpcy5kYmxjbXAoczQ9dGhpcy5hYl9jcm9zc19hYyhjLGQsYiksMCk7XG4gICAgXG4gICAgICAgIC8v5aaC5p6c6KeE6IyD55u45Lqk5YiZ5rGC5Lqk54K5XG4gICAgICAgIGlmICgoZDFeZDIpPT0tMiAmJiAoZDNeZDQpPT0tMilcbiAgICAgICAge1xuICAgICAgICAgICAgcC54PShjLngqczItZC54KnMxKS8oczItczEpO1xuICAgICAgICAgICAgcC55PShjLnkqczItZC55KnMxKS8oczItczEpO1xuICAgICAgICAgICAgcmV0dXJuIFswLHBdO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8v5aaC5p6c5LiN6KeE6IyD55u45LqkXG4gICAgICAgIGlmIChkMT09MCAmJiB0aGlzLnBvaW50X29uX2xpbmUoYyxhLGIpPD0wKVxuICAgICAgICB7XG4gICAgICAgICAgICBwPWM7XG4gICAgICAgICAgICByZXR1cm4gWzEscF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGQyPT0wICYmIHRoaXMucG9pbnRfb25fbGluZShkLGEsYik8PTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHA9ZDtcbiAgICAgICAgICAgIHJldHVybiBbMSxwXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZDM9PTAgJiYgdGhpcy5wb2ludF9vbl9saW5lKGEsYyxkKTw9MClcbiAgICAgICAge1xuICAgICAgICAgICAgcD1hO1xuICAgICAgICAgICAgcmV0dXJuIFsxLHBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkND09MCAmJiB0aGlzLnBvaW50X29uX2xpbmUoYixjLGQpPD0wKVxuICAgICAgICB7XG4gICAgICAgICAgICBwPWI7XG4gICAgICAgICAgICByZXR1cm4gWzEscF07XG4gICAgICAgIH1cbiAgICAvL+WmguaenOS4jeebuOS6pFxuICAgICAgICByZXR1cm4gWy0xLG51bGxdO1xuICAgIH1cbiAgICAvL+S4pOadoee6v+auteaYr+WQpui3qOeri1xuICAgIC8v5Y2z6Z2e5bmz6KGMXG4gICAgcHVibGljIHN0YXRpYyBpc0xpbmVTZWdtZW50Q3Jvc3MoUDE6Y2MuVmVjMixQMjpjYy5WZWMyLFExOmNjLlZlYzIsUTI6Y2MuVmVjMilcbiAgICB7XG4gICAgICAgIGlmKFxuICAgICAgICAgICAgKChRMS54LVAxLngpKihRMS55LVEyLnkpLShRMS55LVAxLnkpKiggUTEueC1RMi54KSkgKiAoKFExLngtUDIueCkqKFExLnktUTIueSktKFExLnktUDIueSkqKFExLngtUTIueCkpIDwgMCB8fFxuICAgICAgICAgICAgKChQMS54LVExLngpKihQMS55LVAyLnkpLShQMS55LVExLnkpKihQMS54LVAyLngpKSAqICgoUDEueC1RMi54KSooUDEueS1QMi55KS0oUDEueS1RMi55KSooIFAxLngtUDIueCkpIDwgMFxuICAgICAgICApIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuIFxuICAgIC8v5rGCYeeCueaYr+S4jeaYr+WcqOe6v+auteS4iu+8jD4w5LiN5Zyo77yMPTDkuI7nq6/ngrnph43lkIjvvIw8MOWcqOOAglxuICAgIHB1YmxpYyBzdGF0aWMgcG9pbnRfb25fbGluZShhLHAxLHAyKSBcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRibGNtcCh0aGlzLmRvdChwMS54LWEueCxwMS55LWEueSxwMi54LWEueCxwMi55LWEueSksMCk7XG4gICAgfVxuICAgIC8v54K55Y+R5Ye655qE5Y+z5bCE57q/5ZKM57q/5q6155qE5YWz57O7XG4gICAgLy8g6L+U5Zue5YC8OiAtMTrkuI3nm7jkuqQsIDA655u45LqkLCAxOueCueWcqOe6v+auteS4ilxuICAgIHB1YmxpYyBzdGF0aWMgcmF5UG9pbnRUb0xpbmUocG9pbnQ6Y2MuVmVjMixsaW5lUEE6Y2MuVmVjMixsaW5lUEI6Y2MuVmVjMil7XG4gICAgICAgIC8vIOWumuS5ieacgOWwj+WSjOacgOWkp+eahFggWei9tOWAvCAgXG4gICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4obGluZVBBLngsbGluZVBCLngpO1xuICAgICAgICBsZXQgbWF4WCA9IE1hdGgubWF4KGxpbmVQQS54LGxpbmVQQi54KTtcbiAgICAgICAgbGV0IG1pblkgPSBNYXRoLm1pbihsaW5lUEEueSxsaW5lUEIueSk7XG4gICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgobGluZVBBLnksbGluZVBCLnkpOyAgXG4gXG4gICAgICAgIC8vIOWwhOe6v+S4jui+ueaXoOS6pOeCueeahOWFtuS7luaDheWGtSAgXG4gICAgICAgIGlmIChwb2ludC55IDwgbWluWSB8fCBwb2ludC55ID4gbWF4WSB8fCBwb2ludC54ID4gbWF4WCkgeyAgXG4gICAgICAgICAgICByZXR1cm4gLTE7ICBcbiAgICAgICAgfSAgXG4gXG4gICAgICAgIC8vIOWJqeS4i+eahOaDheWGtSwg6K6h566X5bCE57q/5LiO6L655omA5Zyo55qE55u057q/55qE5Lqk54K555qE5qiq5Z2Q5qCHICBcbiAgICAgICAgbGV0IHgwID0gbGluZVBBLnggKyAoKGxpbmVQQi54IC0gbGluZVBBLngpIC8gKGxpbmVQQi55IC0gbGluZVBBLnkpKSAqIChwb2ludC55IC0gbGluZVBBLnkpOyAgXG4gICAgICAgIGlmKHgwID4gcG9pbnQueClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYoeDAgPT0gcG9pbnQueClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiBcbiAgICAvL+eCueWSjOWkmui+ueW9oueahOWFs+ezu1xuICAgIC8v6L+U5Zue5YC8OiAtMTrlnKjlpJrovrnlvaLlpJbpg6gsIDA65Zyo5aSa6L655b2i5YaF6YOoLCAxOuWcqOWkmui+ueW9oui+uee6v+WGhSwgMjrot5/lpJrovrnlvaLmn5DkuKrpobbngrnph43lkIhcbiAgICBwdWJsaWMgc3RhdGljIHJlbGF0aW9uUG9pbnRUb1BvbHlnb24ocG9pbnQ6Y2MuVmVjMixwb2x5Z29uOmNjLlZlYzJbXSlcbiAgICB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxwb2x5Z29uLmxlbmd0aDsrK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHBvbHlnb25baV0uZXF1YWxzKHBvaW50KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIGxldCBwYSA9IHBvbHlnb25baV07XG4gICAgICAgICAgICBsZXQgcGIgPSBwb2x5Z29uWzBdO1xuICAgICAgICAgICAgaWYoaSA8IHBvbHlnb24ubGVuZ3RoIC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBiID0gcG9seWdvbltpKzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcmUgPSB0aGlzLnJheVBvaW50VG9MaW5lKHBvaW50LHBhLHBiKTtcbiAgICAgICAgICAgIGlmKHJlID09IDEpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocmUgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGNvdW50ICUyID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuIFxuICAgIC8v57q/5q615a+55aSa6L655b2i6L+b6KGM5YiH5YmyXG4gICAgLy/ov5Tlm57lpJrovrnlvaLmlbDnu4RcbiAgICAvL+WmguaenOayoeacieiiq+WIh+WJsu+8jOi/lOWbnuepuuaVsOe7hFxuICAgIHB1YmxpYyBzdGF0aWMgbGluZUN1dFBvbHlnb24ocGE6Y2MuVmVjMixwYjpjYy5WZWMyLHBvbHlnb246Y2MuVmVjMltdKXtcbiAgICAgICAgbGV0IHJldDpBcnJheTxjYy5WZWMyW10+ID0gW107XG4gXG4gICAgICAgIGxldCBwb2ludHM6Y2MuVmVjMltdID0gW107XG4gICAgICAgIGxldCBwb2ludEluZGV4Om51bWJlcltdID0gW107XG4gXG4gICAgICAgIC8v5bCG5omA5pyJ55qE54K55Lul5Y+K5Lqk54K557uE5oiQ5LiA5Liq54K55bqP5YiXXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxwb2x5Z29uLmxlbmd0aDsrK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvbHlnb25baV0pO1xuIFxuICAgICAgICAgICAgbGV0IGEgPSBwb2x5Z29uW2ldO1xuICAgICAgICAgICAgbGV0IGIgPSBwb2x5Z29uWzBdO1xuICAgICAgICAgICAgaWYoaSA8IHBvbHlnb24ubGVuZ3RoIC0xKSBiID0gcG9seWdvbltpKzFdO1xuIFxuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmxpbmVDcm9zc1BvaW50KHBhLHBiLGEsYik7XG4gICAgICAgICAgICBpZihjWzBdID09IDApe1xuICAgICAgICAgICAgICAgIHBvaW50SW5kZXgucHVzaChwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChjWzFdIGFzIGNjLlZlYzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjWzBdID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZigoY1sxXSBhcyBjYy5WZWMyKS5lcXVhbHMoYSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb2ludEluZGV4LnB1c2gocG9pbnRzLmxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRJbmRleC5wdXNoKHBvaW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwb2ludEluZGV4Lmxlbmd0aCA+IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5YeG5aSH5LuO56ys5LiA5Liq5Lqk54K55byA5aeL5ouG77yM5YWI5byE5riF5qWa56ys5LiA5Liq5Lqk54K55piv55Sx5aSW56m/5YaF77yM6L+Y5piv5YaF56m/5aSWXG4gICAgICAgICAgICBsZXQgY3AwID0gcG9pbnRzW3BvaW50SW5kZXhbMF1dO1xuICAgICAgICAgICAgbGV0IGNwMSA9IHBvaW50c1twb2ludEluZGV4WzFdXTtcbiBcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5yZWxhdGlvblBvaW50VG9Qb2x5Z29uKG5ldyBjYy5WZWMyKChjcDAueCArIGNwMS54KS8yLChjcDAueStjcDEueSkvMikscG9seWdvbik7XG4gICAgICAgICAgICBsZXQgaW5Qb2x5Z29uOmJvb2xlYW4gPSByID49MDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYocG9pbnRJbmRleC5sZW5ndGggPiAyICYmIGNjLnBEaXN0YW5jZShjcDAsY3AxKSA+IGNjLnBEaXN0YW5jZShjcDAscG9pbnRzW3BvaW50SW5kZXhbcG9pbnRJbmRleC5sZW5ndGgtMV1dKSkge1xuICAgICAgICAgICAgaWYocG9pbnRJbmRleC5sZW5ndGggPiAyICYmIGNwMC5zdWIoY3AxKS5tYWcoKSA+IGNwMC5zdWIocG9pbnRzW3BvaW50SW5kZXhbcG9pbnRJbmRleC5sZW5ndGgtMV1dKS5tYWcoKSkge1xuICAgICAgICAgICAgICAgIGNwMSA9IHBvaW50c1twb2ludEluZGV4W3BvaW50SW5kZXgubGVuZ3RoLTFdXTtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5yZWxhdGlvblBvaW50VG9Qb2x5Z29uKG5ldyBjYy5WZWMyKChjcDAueCArIGNwMS54KS8yLChjcDAueStjcDEueSkvMikscG9seWdvbik7XG4gICAgICAgICAgICAgICAgaW5Qb2x5Z29uID0gciA8MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGZpcnN0SW5Qb2x5Z29uID0gaW5Qb2x5Z29uOy8v6LW35aeL54K55piv5LuO5aSW6Z2i56m/5Yiw6YeM6Z2iXG4gXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBwb2ludEluZGV4W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBvbGRQb2ludHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBuZXdQb2ludHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gXG4gICAgICAgICAgICBvbGRQb2ludHMucHVzaChwb2ludHNbc3RhcnRJbmRleF0pO1xuICAgICAgICAgICAgaWYoaW5Qb2x5Z29uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5ld1BvaW50cy5wdXNoKHBvaW50c1tzdGFydEluZGV4XSk7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcbiBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50IDwgcG9pbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihzdGFydEluZGV4ID09IHBvaW50cy5sZW5ndGgpIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGxldCBwID0gcG9pbnRzW3N0YXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDAgJiYgc3RhcnRJbmRleCA9PSBwb2ludEluZGV4W2luZGV4XSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8v5Y+I5piv5LiA5Liq5Lqk54K5XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IHBvaW50SW5kZXgubGVuZ3RoKSBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmKGluUG9seWdvbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+adpeaYr+WcqOWkmui+ueW9ouWGhemDqFxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kuqfnlJ/kuobmlrDnmoTlpJrovrnlvaJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvaW50cy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2gobmV3UG9pbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/lvIDlp4vmlrDnmoTlpJrovrnlvaJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2xkUG9pbnRzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIGluUG9seWdvbiA9ICFpblBvbHlnb247XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL+aZrumAmueahOeCuVxuICAgICAgICAgICAgICAgICAgICBpZihpblBvbHlnb24pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvaW50cy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUG9pbnRzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpblBvbHlnb24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIWZpcnN0SW5Qb2x5Z29uICYmIG5ld1BvaW50cy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzotbflp4vngrnmmK/ku47ph4zpnaLnqb/lh7rljrvvvIzliLDov5nph4zot5/otbflp4vngrnlvaLmiJDpl63ljIVcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW3BvaW50SW5kZXhbMF1dKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2gobmV3UG9pbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy/nu5PmnZ/kuobvvIzkvYbmmK/njrDlnKjnmoTnirbmgIHmmK/nqb/lnKjlpJrovrnlvaLlhoXpg6hcbiAgICAgICAgICAgICAgICAgICAgLy/miopuZXdQb2ludHPph4zpnaLnmoTlm57lpI3liLDkuLvlpJrovrnlvaLkuK1cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpPG5ld1BvaW50cy5sZW5ndGg7KytpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQb2ludHMucHVzaChuZXdQb2ludHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgcmV0LnB1c2gob2xkUG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiBcbiAgICBcbiAgICBwcml2YXRlIHN0YXRpYyBhYl9jcm9zc19hYyhhLGIsYykgLy9hYuS4jmFj55qE5Y+J56evXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5jcm9zcyhiLngtYS54LGIueS1hLnksYy54LWEueCxjLnktYS55KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgZG90KHgxLHkxLHgyLHkyKXtcbiAgICAgICAgcmV0dXJuIHgxKngyK3kxKnkyO1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBjcm9zcyh4MSx5MSx4Mix5Mil7XG4gICAgICAgIHJldHVybiB4MSp5MiAtIHgyKnkxO1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBkYmxjbXAoYTpudW1iZXIsYjpudW1iZXIpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnMoYS1iKTw9MC4wMDAwMDEpIHJldHVybiAwO1xuICAgICAgICBpZiAoYT5iKSByZXR1cm4gMTtcbiAgICAgICAgZWxzZSByZXR1cm4gLTE7XG4gICAgfVxufSJdfQ==