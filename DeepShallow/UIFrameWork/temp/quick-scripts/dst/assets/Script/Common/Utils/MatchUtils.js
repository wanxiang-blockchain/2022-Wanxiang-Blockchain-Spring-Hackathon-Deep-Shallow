
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/MatchUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL01hdGNoVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSDtJQUFBO0lBcUhBLENBQUM7SUFuSGlCLGVBQUssR0FBbkIsVUFBb0IsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQy9DLElBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7UUFDRCxJQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkIsSUFBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNEOzs7O09BSUc7SUFDVyxrQkFBUSxHQUF0QixVQUF1QixNQUFjO1FBQ2pDLE9BQU8sR0FBRyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDVyxtQkFBUyxHQUF2QixVQUF3QixLQUFhO1FBQ2pDLE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ1csb0JBQVUsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUN2RSxJQUFJLElBQUksR0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksSUFBSSxHQUFXLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNXLHFCQUFXLEdBQXpCLFVBQTBCLEdBQVcs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TUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FySEEsQUFxSEMsSUFBQTtBQXJIWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5pWw5a2m6K6h566X5bel5YW357G7XG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRoVXRpbHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjbGFtcChhOiBudW1iZXIsIGI6IG51bWJlciwgeDogbnVtYmVyKSB7ICAgICAgICBcbiAgICAgICAgaWYoYSA+IGIpIHtcbiAgICAgICAgICAgIGxldCB0ID0gYTtcbiAgICAgICAgICAgIGEgPSBiO1xuICAgICAgICAgICAgYiA9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoeCA8IGEpIHJldHVybiBhO1xuICAgICAgICBpZih4ID4gYikgcmV0dXJuIGI7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlvKfluqbliLbovazmjaLkuLrop5LluqblgLxcbiAgICAgKiBAcGFyYW0gcmFkaWFuIOW8p+W6puWItlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRBbmdsZShyYWRpYW46IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxODAgKiByYWRpYW4gLyBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOinkuW6puWAvOi9rOaNouS4uuW8p+W6puWItlxuICAgICAqIEBwYXJhbSBhbmdsZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFkaWFuKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYW5nbGUgLyAxODAgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4pOeCuemXtOW8p+W6plxuICAgICAqIEBwYXJhbSBwMVhcbiAgICAgKiBAcGFyYW0gcDFZXG4gICAgICogQHBhcmFtIHAyWFxuICAgICAqIEBwYXJhbSBwMllcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFkaWFuMihwMVg6IG51bWJlciwgcDFZOiBudW1iZXIsIHAyWDogbnVtYmVyLCBwMlk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHZhciB4ZGlzOiBudW1iZXIgPSBwMlggLSBwMVg7XG4gICAgICAgIHZhciB5ZGlzOiBudW1iZXIgPSBwMlkgLSBwMVk7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHlkaXMsIHhkaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4pOeCuemXtOi3neemu1xuICAgICAqIEBwYXJhbSBwMVhcbiAgICAgKiBAcGFyYW0gcDFZXG4gICAgICogQHBhcmFtIHAyWFxuICAgICAqIEBwYXJhbSBwMllcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGlzdGFuY2UocDFYOiBudW1iZXIsIHAxWTogbnVtYmVyLCBwMlg6IG51bWJlciwgcDJZOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICB2YXIgZGlzWDogbnVtYmVyID0gcDJYIC0gcDFYO1xuICAgICAgICB2YXIgZGlzWTogbnVtYmVyID0gcDJZIC0gcDFZO1xuICAgICAgICB2YXIgZGlzUTogbnVtYmVyID0gZGlzWCAqIGRpc1ggKyBkaXNZICogZGlzWTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkaXNRKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvRml4ZWRTdHIodmFsdWU6IG51bWJlciwgZml4Q291bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKGZpeENvdW50KS5yZXBsYWNlKC9cXC4/MCokLywgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50U3RyKHZhbHVlOiBudW1iZXIsIGZpeENvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50b0ZpeGVkU3RyKHZhbHVlICogMTAwLCBmaXhDb3VudCkgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvRml4ZWRXYW4odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHdhbkZpeCA9IDEwMDAwMDtcbiAgICAgICAgbGV0IHdhbkZsb2F0ID0gd2FuRml4IC8gMTA7XG4gICAgICAgIHZhciB2ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHdhbkZsb2F0KSAqIHdhbkZsb2F0O1xuICAgICAgICByZXR1cm4gdmFsdWUgPiB3YW5GaXggPyBgJHtNYXRoVXRpbHMudG9GaXhlZFN0cih2IC8gd2FuRml4ICogMTAsIDEpfeS4h2AgOiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8vdmFsdWUgPSBjZWlsKGUqKGEqKGxldmVsXmQpICsgYioobGV2ZWwpICsgYykpXG4gICAgcHVibGljIHN0YXRpYyBnZXRGaW5hbFZhbHVlQmFzZWRPblBhcmFtcyhsZXZlbDogbnVtYmVyLCBwYXJhbUxpc3Q6IEFycmF5PG51bWJlcj4sIG5lZWRDZWlsPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgICAgIGlmIChwYXJhbUxpc3QubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJldCA9IHBhcmFtTGlzdFs0XSAqIChwYXJhbUxpc3RbMF0gKiBNYXRoLnBvdyhsZXZlbCwgcGFyYW1MaXN0WzNdKSArIHBhcmFtTGlzdFsxXSAqIGxldmVsICsgcGFyYW1MaXN0WzJdKTtcbiAgICAgICAgaWYgKG5lZWRDZWlsKSB7XG4gICAgICAgICAgICByZXQgPSBNYXRoLmNlaWwocmV0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICog6I635Y+W5LiA5Liq5Yy66Ze055qE6ZqP5py65pWwXG4gICAgKiBAcGFyYW0gJGZyb20g5pyA5bCP5YC8XG4gICAgKiBAcGFyYW0gJGVuZCDmnIDlpKflgLxcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxpbWl0KCRmcm9tOiBudW1iZXIsICRlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICRmcm9tID0gTWF0aC5taW4oJGZyb20sICRlbmQpO1xuICAgICAgICAkZW5kID0gTWF0aC5tYXgoJGZyb20sICRlbmQpO1xuICAgICAgICB2YXIgcmFuZ2U6IG51bWJlciA9ICRlbmQgLSAkZnJvbTtcbiAgICAgICAgcmV0dXJuICRmcm9tICsgTWF0aC5yYW5kb20oKSAqIHJhbmdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4gOS4quWMuumXtOeahOmaj+acuuaVsCjluKfmlbApXG4gICAgICogQHBhcmFtICRmcm9tIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSAkZW5kIOacgOWkp+WAvFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsaW1pdEludGVnZXIoJGZyb206IG51bWJlciwgJGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aFV0aWxzLmxpbWl0KCRmcm9tLCAkZW5kKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zyo5LiA5Liq5pWw57uE5Lit6ZqP5py66I635Y+W5LiA5Liq5YWD57SgXG4gICAgICogQHBhcmFtIGFyciDmlbDnu4RcbiAgICAgKiBAcmV0dXJucyB7YW55fSDpmo/mnLrlh7rmnaXnmoTnu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUFycmF5PFQ+KGFycjogQXJyYXk8VD4pOiBUIHtcbiAgICAgICAgdmFyIGluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycltpbmRleF07XG4gICAgfVxufSJdfQ==