"use strict";
cc._RF.push(module, 'ce2a5iLaMdGPJK3POfEqDgZ', 'MatchUtils');
// Script/Common/Utils/MatchUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
/**
 * 数学计算工具类
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.clamp = function (a, b, x) {
        if (a > b) {
            var t = a;
            a = b;
            b = t;
        }
        if (x < a)
            return a;
        if (x > b)
            return b;
        return x;
    };
    /**
     * 弧度制转换为角度值
     * @param radian 弧度制
     * @returns {number}
     */
    MathUtils.getAngle = function (radian) {
        return 180 * radian / Math.PI;
    };
    /**
     * 角度值转换为弧度制
     * @param angle
     */
    MathUtils.getRadian = function (angle) {
        return angle / 180 * Math.PI;
    };
    /**
     * 获取两点间弧度
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathUtils.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathUtils.getDistance = function (p1X, p1Y, p2X, p2Y) {
        var disX = p2X - p1X;
        var disY = p2Y - p1Y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    MathUtils.toFixedStr = function (value, fixCount) {
        return value.toFixed(fixCount).replace(/\.?0*$/, '');
    };
    MathUtils.toPercentStr = function (value, fixCount) {
        return this.toFixedStr(value * 100, fixCount) + "%";
    };
    MathUtils.toFixedWan = function (value) {
        var wanFix = 100000;
        var wanFloat = wanFix / 10;
        var v = Math.floor(value / wanFloat) * wanFloat;
        return value > wanFix ? MathUtils.toFixedStr(v / wanFix * 10, 1) + "\u4E07" : value.toString();
    };
    //value = ceil(e*(a*(level^d) + b*(level) + c))
    MathUtils.getFinalValueBasedOnParams = function (level, paramList, needCeil) {
        if (paramList.length < 5) {
            return 0;
        }
        var ret = paramList[4] * (paramList[0] * Math.pow(level, paramList[3]) + paramList[1] * level + paramList[2]);
        if (needCeil) {
            ret = Math.ceil(ret);
        }
        return ret;
    };
    /**
    * 获取一个区间的随机数
    * @param $from 最小值
    * @param $end 最大值
    * @returns {number}
    */
    MathUtils.limit = function ($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    };
    /**
     * 获取一个区间的随机数(帧数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    MathUtils.limitInteger = function ($from, $end) {
        return Math.round(MathUtils.limit($from, $end));
    };
    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    MathUtils.randomArray = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;

cc._RF.pop();