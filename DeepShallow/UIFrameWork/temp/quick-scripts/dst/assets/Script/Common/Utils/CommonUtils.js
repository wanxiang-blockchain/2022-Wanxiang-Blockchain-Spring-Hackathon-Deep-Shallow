
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/CommonUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9814d/85SFDfo1f4MmYfH4s', 'CommonUtils');
// Script/Common/Utils/CommonUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtils = void 0;
var CocosHelper_1 = require("../../UIFrame/CocosHelper");
var MatchUtils_1 = require("./MatchUtils");
var kDefaultRandomGenerator = {
    nextInt: function (start, endAndNotIncluded) {
        return Math.floor(Math.random() * (endAndNotIncluded - start)) + start;
    },
    next01: function () {
        return Math.random();
    }
};
var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    CommonUtils.isArray = function (target) {
        if (typeof Array.isArray === "function") {
            return Array.isArray(target);
        }
        else {
            return Object.prototype.toString.call(target) === "[object Array]";
        }
    };
    CommonUtils.foramtDate = function (dateObj, format) {
        var date = {
            "M+": dateObj.getMonth() + 1,
            "d+": dateObj.getDate(),
            "h+": dateObj.getHours(),
            "m+": dateObj.getMinutes(),
            "s+": dateObj.getSeconds(),
            "q+": Math.floor((dateObj.getMonth() + 3) / 3),
            "S+": dateObj.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };
    CommonUtils.getElemClamped = function (arr, index) {
        return arr[Math.max(0, Math.min(arr.length - 1, index))];
    };
    CommonUtils.randomIntClosedRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.9999) + min);
    };
    CommonUtils.indexOf = function (val, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    };
    CommonUtils.indexOfArr = function (arr) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var paramCount = values.length;
        var found = false;
        for (var i = 0; i <= arr.length - paramCount; i += paramCount) {
            found = true;
            for (var j = 0; j < paramCount; j++) {
                if (arr[i + j] !== values[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
        return -1;
    };
    CommonUtils.floatEqual = function (left, right, epsilon) {
        if (epsilon === void 0) { epsilon = 0.000001; }
        return Math.abs(left - right) < epsilon;
    };
    CommonUtils.formatTimeInterval = function (seconds, alwaysShowMinutes, alwaysShowHours) {
        if (alwaysShowMinutes === void 0) { alwaysShowMinutes = false; }
        if (alwaysShowHours === void 0) { alwaysShowHours = false; }
        alwaysShowMinutes = alwaysShowHours || alwaysShowMinutes;
        var ret = "";
        var hour = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
        var minute = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        if (alwaysShowHours || hour > 0) {
            if (hour < 10) {
                ret += "0";
            }
            ret += hour + ":";
        }
        if (alwaysShowMinutes || minute > 0 || hour > 0) {
            if (minute < 10) {
                ret += "0";
            }
            ret += minute + ":";
        }
        if (seconds < 10) {
            ret += "0";
        }
        ret += seconds;
        return ret;
    };
    CommonUtils.alignNumber = function (input, divider) {
        input = input - Math.floor(input / divider) * divider;
        return input;
    };
    CommonUtils.formatNumber = function (num) {
        var str = "" + Math.floor(num);
        var newStr = "";
        var count = 0;
        // 当数字是整数
        if (str.indexOf(".") == -1) {
            for (var i = str.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                }
                else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            str = newStr;
            return str;
        }
        // 当数字带有小数
        else {
            for (var i = str.indexOf(".") - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                }
                else {
                    newStr = str.charAt(i) + newStr; //逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
            return str;
        }
    };
    CommonUtils.updateLabelSize = function (label) {
        label["_updateRenderData"](true);
    };
    CommonUtils.lerp = function (begin, end, factor) {
        return begin + (end - begin) * factor;
    };
    CommonUtils.shuffle = function (container, randGenerator, start, count) {
        if (randGenerator === void 0) { randGenerator = kDefaultRandomGenerator; }
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = -1; }
        randGenerator = randGenerator || kDefaultRandomGenerator;
        if (count < 0) {
            count = container.length - start;
        }
        for (var i = 0; i < count; i++) {
            var idx = randGenerator.nextInt(start, start + count - i);
            var temp = container[idx];
            container[idx] = container[count - i - 1 + start];
            container[count - i - 1 + start] = temp;
        }
    };
    CommonUtils.setItemSpriteFrame = function (sprite, url, successCB) {
        if (successCB === void 0) { successCB = null; }
        sprite["spriteFrameName"] = url;
        CocosHelper_1.default.loadResSync(url, cc.SpriteFrame).then(function (spriteFrame) {
            if (sprite.isValid && sprite["spriteFrameName"] == url) {
                sprite.spriteFrame = spriteFrame;
                if (successCB) {
                    successCB(sprite);
                }
            }
        });
    };
    CommonUtils.addSimpleClick = function (target, cb) {
        var targetNode = target;
        var lastTouchPos = null;
        targetNode.on(cc.Node.EventType.TOUCH_START, function (e) {
            lastTouchPos = e.getLocation();
        }, this);
        targetNode.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (lastTouchPos) {
                var delta = lastTouchPos.subSelf(e.getLocation()).mag();
                if (delta < 3) {
                    cb();
                }
            }
        }, this);
    };
    CommonUtils.isGoodNumber = function (num) {
        return (typeof num) === "number" && !Number.isNaN(num);
    };
    CommonUtils.getVisibleRect = function () {
        var visibleRect = cc.view.getViewportRect();
        visibleRect = cc.rect(visibleRect.origin.x / -cc.view.getScaleX(), visibleRect.origin.y / -cc.view.getScaleY(), (visibleRect.size.width + visibleRect.origin.x * 2) / cc.view.getScaleX(), (visibleRect.size.height + visibleRect.origin.y * 2) / cc.view.getScaleY());
        return visibleRect;
    };
    CommonUtils.httpGet = function (url, cb) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                var rsp = JSON.parse(respone);
                cb(rsp);
            }
            else if (xhr.readyState === 4 && xhr.status == 401) {
                cb({ "ret": 1 });
            }
            else {
                //callback(-1);
            }
        };
        xhr.withCredentials = true;
        xhr.open('GET', url, true);
        xhr.withCredentials = false;
        // if (cc.sys.isNative) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.setRequestHeader('Authorization', 'Bearer ' + cc.myGame.gameManager.getToken());
        // xhr.setRequestHeader('Authorization', 'Bearer ' + "");
        // }
        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 8000; // 8 seconds for timeout
        xhr.send();
    };
    /**
     * Box-Muller algorithm
     * @param avg
     */
    CommonUtils.randomGaussian = function (avg, variant, randGenerator) {
        if (randGenerator === void 0) { randGenerator = kDefaultRandomGenerator; }
        randGenerator = randGenerator || kDefaultRandomGenerator;
        var x1 = randGenerator.next01();
        var x2 = randGenerator.next01();
        var standard = Math.sqrt(-2 * Math.log(x1)) * Math.cos(2 * Math.PI * x2);
        return standard * variant + avg;
    };
    CommonUtils.deepCopy = function (dst, src) {
        for (var field in src) {
            this._deepCopyFields(dst, src, field);
        }
    };
    CommonUtils.constructObjectMap = function (obj) {
        var map = new Map();
        for (var key in obj) {
            var val = obj[key];
            if (typeof val === "object") {
                map.set(key, this.constructObjectMap(val));
            }
            else {
                map.set(key, val);
            }
        }
        return map;
    };
    CommonUtils._deepCopyFields = function (dst, src, field) {
        var value = src[field];
        if (typeof value == "number" || typeof value == "string") {
            dst[field] = value;
        }
        else if (this.isArray[value]) {
            var dstArr = dst[field] = [];
            for (var i = 0; i < value.length; i++) {
                this._deepCopyFields(dstArr, value, i);
            }
        }
        else if (value == null) {
            dst[field] = null;
        }
        else if (typeof value == "object") {
            var dstObj = new value.constructor();
            for (var field_1 in src) {
                this._deepCopyFields(dstObj, value, field_1);
            }
        }
    };
    /**
     * 格式化数字变成K,M,B
     * @param value
     */
    CommonUtils.formatNumberToEng = function (value) {
        if (value < 1 && value > 0) {
            return 1 + "";
        }
        value = Math.floor(value);
        var exp = Math.floor(CommonUtils.getExponent(value));
        if (exp < 13) {
            if (exp < 4) {
                return value + "";
            }
            var unitIt = Math.floor(exp / CommonUtils.constNum);
            var rem = exp % CommonUtils.constNum;
            var numStr = String(value / Math.pow(10, unitIt * CommonUtils.constNum)).substr(0, CommonUtils.constNum + rem);
            return numStr + CommonUtils.getUnit(exp);
        }
        else {
            var _num = value / Math.pow(10, exp);
            return _num.toFixed(3) + "e" + exp;
        }
    };
    CommonUtils.getExponent = function (value) {
        var exp = 0;
        while (value >= 10) {
            exp++;
            value /= 10;
        }
        return exp;
    };
    CommonUtils.getUnit = function (exp) {
        var unitIt = Math.floor(exp / CommonUtils.constNum);
        if (exp < 13) {
            return CommonUtils.unitArr[unitIt];
        }
        else {
            var unitIt = Math.floor(exp / CommonUtils.constNum);
            return "e" + unitIt * CommonUtils.constNum;
        }
    };
    /**
     * 转化成带有小数点的K,M,B
     * @param number
     * @param decimals
     */
    CommonUtils.formatEngNumber = function (number, decimals) {
        if (decimals === void 0) { decimals = 2; }
        var str;
        var num;
        number = number;
        if (number >= 1000000) {
            num = number / 1000000;
            str = (Math.floor(num / 0.001) * 0.001).toFixed(decimals);
            return this.formatEndingZero(str) + "M";
        }
        else if (number >= 1000) {
            num = number / 1000;
            str = (Math.floor(num / 0.001) * 0.001).toFixed(decimals);
            return this.formatEndingZero(str) + "K";
        }
        else {
            return number + "";
        }
    };
    CommonUtils.formatEndingZero = function (c) {
        if (c.indexOf(".") != -1) {
            if (this.endWith(c, "00")) {
                return c.substring(0, c.length - 3);
            }
            else if (this.endWith(c, "0")) {
                return c.substring(0, c.length - 1);
            }
        }
        return c;
    };
    CommonUtils.endWith = function (c, suffix) {
        return (suffix == c.substring(c.length - suffix.length));
    };
    CommonUtils.makeMaxWidthLabel = function (label, width) {
        var obj = {};
        obj["__proto__"] = label;
        Object.defineProperty(obj, "string", {
            configurable: true,
            enumerable: true,
            get: function () {
                return label.string;
            },
            set: function (str) {
                label.overflow = cc.Label.Overflow.NONE;
                label.string = str;
                label["_updateRenderData"](true);
                if (label.node.width > width) {
                    label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
                    label.node.setContentSize(width, 1);
                    label.string = str;
                }
            }
        });
        return obj;
    };
    CommonUtils.climeUserName = function (name, showLen) {
        if (showLen === void 0) { showLen = 14; }
        var len = name.length;
        while (this.strlen(name) > showLen) {
            name = name.substring(0, name.length - 1);
        }
        if (name.length != len) {
            name = name + "...";
        }
        return name;
    };
    CommonUtils.strlen = function (str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            //单字节加1 
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                len++;
            }
            else {
                len += 2;
            }
        }
        return len;
    };
    /** 打乱数组 */
    CommonUtils.shuffleArr = function (arr) {
        var _swap = function (a, b) {
            var tmp = arr[a];
            arr[a] = arr[b];
            arr[b] = tmp;
        };
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            var idx = Math.floor(Math.random() * (len - i));
            _swap(idx, len - i - 1);
        }
        return arr;
    };
    /** 二分查找, findFlag 为false表示没找到的时候返回一个较小的, 为true返回一个较大的 */
    CommonUtils.binarySearch = function (arr, target, findFlag) {
        if (findFlag === void 0) { findFlag = false; }
        var start = 0, end = arr.length - 1;
        while (end - start > 1) {
            var idx = Math.floor((start + end) / 2);
            if (target < arr[idx]) {
                end = idx;
            }
            else if (target > arr[idx]) {
                start = idx;
            }
            else {
                return idx;
            }
        }
        // 没有找到对应的值
        if (!findFlag) {
            if (end == 0)
                return -1;
            return start;
        }
        else {
            if (start == arr.length - 1)
                return arr.length;
            return end;
        }
    };
    // 判断一个点是否在三角形内
    CommonUtils.isInTriangle = function (point, triA, triB, triC) {
        var AB = triB.sub(triA), AC = triC.sub(triA), BC = triC.sub(triB), AD = point.sub(triA), BD = point.sub(triB);
        //@ts-ignore
        return (AB.cross(AC) >= 0 ^ AB.cross(AD) < 0) && (AB.cross(AC) >= 0 ^ AC.cross(AD) >= 0) && (BC.cross(AB) > 0 ^ BC.cross(BD) >= 0);
    };
    CommonUtils.isInPolygon = function (checkPoint, polygonPoints) {
        var counter = 0, i, xinters;
        var p1, p2;
        var pointCount = polygonPoints.length;
        p1 = polygonPoints[0];
        for (i = 1; i <= pointCount; i++) {
            p2 = polygonPoints[i % pointCount];
            if (checkPoint.x > Math.min(p1.x, p2.x) &&
                checkPoint.x <= Math.max(p1.x, p2.x)) {
                if (checkPoint.y <= Math.max(p1.y, p2.y)) {
                    if (p1.x != p2.x) {
                        xinters = (checkPoint.x - p1.x) * (p2.y - p1.y) / (p2.x - p1.x) + p1.y;
                        if (p1.y == p2.y || checkPoint.y <= xinters) {
                            counter++;
                        }
                    }
                }
            }
            p1 = p2;
        }
        return (counter & 1) !== 0;
    };
    // 多边形 三角切割
    CommonUtils.splitePolygon = function (points) {
        if (points.length <= 3)
            return [0, 1, 2];
        var pointMap = {}; // point与idx的映射
        for (var i = 0; i < points.length; i++) {
            var p = points[i];
            pointMap[p.x + "-" + p.y] = i;
        }
        var getIdx = function (p) {
            return pointMap[p.x + "-" + p.y];
        };
        points = points.concat([]);
        var idxs = [];
        var index = 0;
        while (points.length > 3) {
            var p1 = points[(index) % points.length], p2 = points[(index + 1) % points.length], p3 = points[(index + 2) % points.length];
            var splitPoint = (index + 1) % points.length;
            var v1 = p2.sub(p1);
            var v2 = p3.sub(p2);
            if (v1.cross(v2) < 0) { // 是一个凹角, 寻找下一个
                index = (index + 1) % points.length;
                continue;
            }
            var hasPoint = false;
            for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                var p = points_1[_i];
                if (p != p1 && p != p2 && p != p3 && this.isInTriangle(p, p1, p2, p3)) {
                    hasPoint = true;
                    break;
                }
            }
            if (hasPoint) { // 当前三角形包含其他点, 寻找下一个
                index = (index + 1) % points.length;
                continue;
            }
            // 找到了耳朵, 切掉
            idxs.push(getIdx(p1), getIdx(p2), getIdx(p3));
            points.splice(splitPoint, 1);
        }
        for (var _a = 0, points_2 = points; _a < points_2.length; _a++) {
            var p = points_2[_a];
            idxs.push(getIdx(p));
        }
        return idxs;
    };
    /** 计算uv, 锚点都是中心 */
    CommonUtils.computeUv = function (points, width, height) {
        var uvs = [];
        for (var _i = 0, points_3 = points; _i < points_3.length; _i++) {
            var p = points_3[_i];
            // uv原点是左上角
            var x = MatchUtils_1.MathUtils.clamp(0, 1, (p.x + width / 2) / width);
            var y = MatchUtils_1.MathUtils.clamp(0, 1, 1. - (p.y + height / 2) / height);
            uvs.push(cc.v2(x, y));
        }
        return uvs;
    };
    CommonUtils.tweenFloat = function (from, to, duration, onUpdate, onComplete, autoStart) {
        if (autoStart === void 0) { autoStart = true; }
        var o = { _value: from };
        Object.defineProperty(o, 'value', {
            get: function () { return o._value; },
            set: function (v) { o._value = v; onUpdate && onUpdate(o._value); },
        });
        var tween = cc.tween(o).to(duration, { value: to }).call(onComplete);
        if (autoStart) {
            tween.start();
        }
        return tween;
    };
    CommonUtils.tweenVec2 = function (from, to, duration, onUpdate, onComplete, autoStart) {
        if (autoStart === void 0) { autoStart = true; }
        var o = { _value: from };
        Object.defineProperty(o, 'value', {
            get: function () { return o._value; },
            set: function (v) { o._value = v; onUpdate && onUpdate(o._value); },
        });
        var tween = cc.tween(o).to(duration, { value: to }).call(onComplete);
        if (autoStart) {
            tween.start();
        }
        return tween;
    };
    CommonUtils.unitArr = ["", "K", "M", "B"];
    CommonUtils.constNum = 3;
    return CommonUtils;
}());
exports.CommonUtils = CommonUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0NvbW1vblV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCwyQ0FBeUM7QUFXekMsSUFBSSx1QkFBdUIsR0FBRztJQUMxQixPQUFPLEVBQVAsVUFBUSxLQUFZLEVBQUUsaUJBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzRSxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNKLENBQUM7QUFFRjtJQUFBO0lBd2pCQSxDQUFDO0lBdmpCaUIsbUJBQU8sR0FBckIsVUFBc0IsTUFBVTtRQUM1QixJQUFJLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO2FBQUk7WUFDRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFYSxzQkFBVSxHQUF4QixVQUF5QixPQUFZLEVBQUUsTUFBYTtRQUNoRCxJQUFJLElBQUksR0FBUztZQUNiLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztZQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMxQixJQUFJLEVBQUUsSUFBSSxD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RUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksU0FBUyxFQUFFO1lBQ1gsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWpTTSxtQkFBTyxHQUFrQixDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLG9CQUFRLEdBQVcsQ0FBQyxDQUFDO0lBb1NoQyxrQkFBQztDQXhqQkQsQUF3akJDLElBQUE7QUF4akJZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvY29zSGVscGVyIGZyb20gXCIuLi8uLi9VSUZyYW1lL0NvY29zSGVscGVyXCI7XG5pbXBvcnQgeyBNYXRoVXRpbHMgfSBmcm9tIFwiLi9NYXRjaFV0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZUNvbnN0cnVjdG9yPFQ+IHtcbiAgICBuZXcoKTpUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYW5kb21HZW5lcmF0b3Ige1xuICAgIG5leHRJbnQoc3RhcnQ6bnVtYmVyLCBlbmRBbmROb3RJbmNsdWRlZDpudW1iZXIpIDogbnVtYmVyO1xuICAgIG5leHQwMSgpOm51bWJlcjtcbn1cblxubGV0IGtEZWZhdWx0UmFuZG9tR2VuZXJhdG9yID0ge1xuICAgIG5leHRJbnQoc3RhcnQ6bnVtYmVyLCBlbmRBbmROb3RJbmNsdWRlZDpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRBbmROb3RJbmNsdWRlZCAtIHN0YXJ0KSkgKyBzdGFydDtcbiAgICB9LFxuICAgIG5leHQwMSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNsYXNzIENvbW1vblV0aWxzIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXJyYXkodGFyZ2V0OmFueSkgOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YXJnZXQpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZvcmFtdERhdGUoZGF0ZU9iajpEYXRlLCBmb3JtYXQ6c3RyaW5nKSB7XG4gICAgICAgIHZhciBkYXRlIDogYW55ID0ge1xuICAgICAgICAgICAgXCJNK1wiOiBkYXRlT2JqLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgXCJkK1wiOiBkYXRlT2JqLmdldERhdGUoKSxcbiAgICAgICAgICAgIFwiaCtcIjogZGF0ZU9iai5nZXRIb3VycygpLFxuICAgICAgICAgICAgXCJtK1wiOiBkYXRlT2JqLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIFwicytcIjogZGF0ZU9iai5nZXRTZWNvbmRzKCksXG4gICAgICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKGRhdGVPYmouZ2V0TW9udGgoKSArIDMpIC8gMyksXG4gICAgICAgICAgICBcIlMrXCI6IGRhdGVPYmouZ2V0TWlsbGlzZWNvbmRzKClcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKC8oeSspL2kudGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShSZWdFeHAuJDEsIChkYXRlT2JqLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgayBpbiBkYXRlKSB7XG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKFwiMDBcIiArIGRhdGVba10pLnN1YnN0cigoXCJcIiArIGRhdGVba10pLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRFbGVtQ2xhbXBlZDxUPihhcnI6VFtdLCBpbmRleDpudW1iZXIpIDogVCB7XG4gICAgICAgIHJldHVybiBhcnJbTWF0aC5tYXgoMCwgTWF0aC5taW4oYXJyLmxlbmd0aCAtIDEsIGluZGV4KSldO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tSW50Q2xvc2VkUmFuZ2UobWluOm51bWJlciwgbWF4Om51bWJlcikgOiBudW1iZXIgeyAgICAgICAgICAgIC8vcmFuZG9tIGludGVnZXIgaW4gW21pbixtYXhdXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMC45OTk5KSArIG1pbik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbmRleE9mPFQ+KHZhbDpULCBhcnI6VFtdKSA6IG51bWJlciB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGFycltpXSA9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbmRleE9mQXJyPFQ+KGFycjpUW10sIC4uLnZhbHVlczpUW10pIDogbnVtYmVyIHtcbiAgICAgICAgbGV0IHBhcmFtQ291bnQgPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBhcnIubGVuZ3RoIC0gcGFyYW1Db3VudDsgaSs9cGFyYW1Db3VudCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHBhcmFtQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKGFycltpICsgal0gIT09IHZhbHVlc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihmb3VuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZsb2F0RXF1YWwobGVmdDpudW1iZXIsIHJpZ2h0Om51bWJlciwgZXBzaWxvbjpudW1iZXIgPSAwLjAwMDAwMSkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGxlZnQgLSByaWdodCkgPCBlcHNpbG9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0VGltZUludGVydmFsKHNlY29uZHM6bnVtYmVyLCBhbHdheXNTaG93TWludXRlczpib29sZWFuID0gZmFsc2UsIGFsd2F5c1Nob3dIb3Vyczpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgYWx3YXlzU2hvd01pbnV0ZXMgPSBhbHdheXNTaG93SG91cnMgfHwgYWx3YXlzU2hvd01pbnV0ZXM7XG4gICAgICAgIGxldCByZXQgPSBcIlwiO1xuICAgICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAlIDM2MDA7XG4gICAgICAgIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XG4gICAgICAgIGlmKGFsd2F5c1Nob3dIb3VycyB8fCBob3VyID4gMCkge1xuICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFwiMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0ICs9IGhvdXIgKyBcIjpcIjtcbiAgICAgICAgfVxuICAgICAgICBpZihhbHdheXNTaG93TWludXRlcyB8fCBtaW51dGUgPiAwIHx8IGhvdXIgPiAwKSB7XG4gICAgICAgICAgICBpZihtaW51dGUgPCAxMCkge1xuICAgICAgICAgICAgICAgIHJldCArPSBcIjBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldCArPSBtaW51dGUgKyBcIjpcIjtcbiAgICAgICAgfVxuICAgICAgICBpZihzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgICAgIHJldCArPSBcIjBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXQgKz0gc2Vjb25kcztcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFsaWduTnVtYmVyKGlucHV0Om51bWJlciwgZGl2aWRlcjpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCAtIE1hdGguZmxvb3IoaW5wdXQgLyBkaXZpZGVyKSAqIGRpdmlkZXI7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdE51bWJlcihudW06bnVtYmVyKSB7XG4gICAgICAgIHZhciBzdHIgPSBcIlwiICsgTWF0aC5mbG9vcihudW0pO1xuICAgICAgICB2YXIgbmV3U3RyID0gXCJcIjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgLy8g5b2T5pWw5a2X5piv5pW05pWwXG4gICAgICAgIGlmIChzdHIuaW5kZXhPZihcIi5cIikgPT0gLTEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSAzID09IDAgJiYgY291bnQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTdHIgPSBzdHIuY2hhckF0KGkpICsgXCIsXCIgKyBuZXdTdHI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RyID0gc3RyLmNoYXJBdChpKSArIG5ld1N0cjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciA9IG5ld1N0cjtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2T5pWw5a2X5bim5pyJ5bCP5pWwXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0ci5pbmRleE9mKFwiLlwiKSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgMyA9PSAwICYmIGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RyID0gc3RyLmNoYXJBdChpKSArIFwiLFwiICsgbmV3U3RyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0ciA9IHN0ci5jaGFyQXQoaSkgKyBuZXdTdHI7IC8v6YCQ5Liq5a2X56ym55u45o6l6LW35p2lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHIgPSBuZXdTdHIgKyAoc3RyICsgXCIwMFwiKS5zdWJzdHIoKHN0ciArIFwiMDBcIikuaW5kZXhPZihcIi5cIiksIDMpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlTGFiZWxTaXplKGxhYmVsOmNjLkxhYmVsKSB7XG4gICAgICAgIGxhYmVsW1wiX3VwZGF0ZVJlbmRlckRhdGFcIl0odHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsZXJwKGJlZ2luOm51bWJlciwgZW5kOm51bWJlciwgZmFjdG9yOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogZmFjdG9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2h1ZmZsZShjb250YWluZXI6YW55W10sIHJhbmRHZW5lcmF0b3I6SVJhbmRvbUdlbmVyYXRvciA9IGtEZWZhdWx0UmFuZG9tR2VuZXJhdG9yLCBzdGFydDpudW1iZXIgPSAwLCBjb3VudDpudW1iZXIgPSAtMSk6dm9pZCB7XG4gICAgICAgIHJhbmRHZW5lcmF0b3IgPSByYW5kR2VuZXJhdG9yIHx8IGtEZWZhdWx0UmFuZG9tR2VuZXJhdG9yO1xuICAgICAgICBpZihjb3VudCA8IDApIHtcbiAgICAgICAgICAgIGNvdW50ID0gY29udGFpbmVyLmxlbmd0aCAtIHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gcmFuZEdlbmVyYXRvci5uZXh0SW50KHN0YXJ0LCBzdGFydCArIGNvdW50IC0gaSk7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IGNvbnRhaW5lcltpZHhdO1xuICAgICAgICAgICAgY29udGFpbmVyW2lkeF0gPSBjb250YWluZXJbY291bnQgLSBpIC0gMSArIHN0YXJ0XTtcbiAgICAgICAgICAgIGNvbnRhaW5lcltjb3VudCAtIGkgLSAxICsgc3RhcnRdID0gdGVtcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SXRlbVNwcml0ZUZyYW1lKHNwcml0ZTpjYy5TcHJpdGUsIHVybDpzdHJpbmcsIHN1Y2Nlc3NDQjooc3ByaXRlOmNjLlNwcml0ZSk9PnZvaWQgPSBudWxsKSB7XG4gICAgICAgIHNwcml0ZVtcInNwcml0ZUZyYW1lTmFtZVwiXSA9IHVybDtcbiAgICAgICAgQ29jb3NIZWxwZXIubG9hZFJlc1N5bmModXJsLCBjYy5TcHJpdGVGcmFtZSkudGhlbigoc3ByaXRlRnJhbWU6Y2MuU3ByaXRlRnJhbWUpPT57XG4gICAgICAgICAgICBpZihzcHJpdGUuaXNWYWxpZCAmJiBzcHJpdGVbXCJzcHJpdGVGcmFtZU5hbWVcIl0gPT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgaWYoc3VjY2Vzc0NCKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDQihzcHJpdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhZGRTaW1wbGVDbGljayh0YXJnZXQ6Y2MuTm9kZSwgY2I6KCk9PnZvaWQpIHtcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSB0YXJnZXQ7XG4gICAgICAgIGxldCBsYXN0VG91Y2hQb3MgOiBjYy5WZWMyID0gbnVsbDtcbiAgICAgICAgdGFyZ2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGU6Y2MuRXZlbnQuRXZlbnRUb3VjaCk9PntcbiAgICAgICAgICAgIGxhc3RUb3VjaFBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRhcmdldE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZTpjYy5FdmVudC5FdmVudFRvdWNoKT0+e1xuICAgICAgICAgICAgaWYobGFzdFRvdWNoUG9zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gbGFzdFRvdWNoUG9zLnN1YlNlbGYoZS5nZXRMb2NhdGlvbigpKS5tYWcoKTtcbiAgICAgICAgICAgICAgICBpZihkZWx0YSA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNHb29kTnVtYmVyKG51bTphbnkpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbnVtKSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKG51bSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRWaXNpYmxlUmVjdCgpIHtcbiAgICAgICAgbGV0IHZpc2libGVSZWN0ID0gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKTtcbiAgICAgICAgdmlzaWJsZVJlY3QgPSBjYy5yZWN0KHZpc2libGVSZWN0Lm9yaWdpbi54IC8gLWNjLnZpZXcuZ2V0U2NhbGVYKCksIHZpc2libGVSZWN0Lm9yaWdpbi55IC8gLWNjLnZpZXcuZ2V0U2NhbGVZKCksIFxuICAgICAgICAodmlzaWJsZVJlY3Quc2l6ZS53aWR0aCArIHZpc2libGVSZWN0Lm9yaWdpbi54ICogMikgLyBjYy52aWV3LmdldFNjYWxlWCgpLCAodmlzaWJsZVJlY3Quc2l6ZS5oZWlnaHQgKyB2aXNpYmxlUmVjdC5vcmlnaW4ueSAqIDIpIC8gY2Mudmlldy5nZXRTY2FsZVkoKSk7XG4gICAgICAgIHJldHVybiB2aXNpYmxlUmVjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGh0dHBHZXQodXJsOnN0cmluZywgY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIkdldDogcmVhZHlTdGF0ZTpcIiArIHhoci5yZWFkeVN0YXRlICsgXCIgc3RhdHVzOlwiICsgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgbGV0IHJzcCA9IEpTT04ucGFyc2UocmVzcG9uZSk7XG4gICAgICAgICAgICAgICAgY2IocnNwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBjYih7XCJyZXRcIjoxfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2soLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NUJyk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ3gtcmVxdWVzdGVkLXdpdGgsY29udGVudC10eXBlLGF1dGhvcml6YXRpb24nKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICAvL3hoci5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgY2MubXlHYW1lLmdhbWVNYW5hZ2VyLmdldFRva2VuKCkpO1xuICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIFwiXCIpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcbiAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cbiAgICAgICAgeGhyLnRpbWVvdXQgPSA4MDAwOy8vIDggc2Vjb25kcyBmb3IgdGltZW91dFxuXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQm94LU11bGxlciBhbGdvcml0aG1cbiAgICAgKiBAcGFyYW0gYXZnIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tR2F1c3NpYW4oYXZnOm51bWJlciwgdmFyaWFudDpudW1iZXIsIHJhbmRHZW5lcmF0b3I6SVJhbmRvbUdlbmVyYXRvciA9IGtEZWZhdWx0UmFuZG9tR2VuZXJhdG9yKSA6IG51bWJlciB7XG4gICAgICAgIHJhbmRHZW5lcmF0b3IgPSByYW5kR2VuZXJhdG9yIHx8IGtEZWZhdWx0UmFuZG9tR2VuZXJhdG9yO1xuICAgICAgICBsZXQgeDEgPSByYW5kR2VuZXJhdG9yLm5leHQwMSgpO1xuICAgICAgICBsZXQgeDIgPSByYW5kR2VuZXJhdG9yLm5leHQwMSgpO1xuICAgICAgICBsZXQgc3RhbmRhcmQgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyh4MSkpICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB4Mik7XG4gICAgICAgIHJldHVybiBzdGFuZGFyZCAqIHZhcmlhbnQgKyBhdmc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWVwQ29weShkc3Q6T2JqZWN0LCBzcmM6T2JqZWN0KSB7XG4gICAgICAgIGZvcihsZXQgZmllbGQgaW4gc3JjKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWVwQ29weUZpZWxkcyhkc3QsIHNyYywgZmllbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb25zdHJ1Y3RPYmplY3RNYXAob2JqOiBhbnkpOiBNYXA8c3RyaW5nLCBhbnk+IHtcbiAgICAgICAgbGV0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gb2JqW2tleV1cbiAgICAgICAgICAgIGlmKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgdGhpcy5jb25zdHJ1Y3RPYmplY3RNYXAodmFsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZGVlcENvcHlGaWVsZHMoZHN0Ok9iamVjdCwgc3JjOk9iamVjdCwgZmllbGQ6YW55KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHNyY1tmaWVsZF07XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkc3RbZmllbGRdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmlzQXJyYXlbdmFsdWVdKSB7XG4gICAgICAgICAgICBsZXQgZHN0QXJyID0gZHN0W2ZpZWxkXSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVlcENvcHlGaWVsZHMoZHN0QXJyLCB2YWx1ZSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkc3RbZmllbGRdID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBsZXQgZHN0T2JqID0gbmV3IHZhbHVlLmNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBmb3IobGV0IGZpZWxkIGluIHNyYykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZXBDb3B5RmllbGRzKGRzdE9iaiwgdmFsdWUsIGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1bml0QXJyOiBBcnJheTxzdHJpbmc+ID0gW1wiXCIsIFwiS1wiLCBcIk1cIiwgXCJCXCJdO1xuICAgIHN0YXRpYyBjb25zdE51bTogbnVtYmVyID0gMztcblxuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluaVsOWtl+WPmOaIkEssTSxCXG4gICAgICogQHBhcmFtIHZhbHVlIFxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXROdW1iZXJUb0VuZyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAmJiB2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAxICsgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xuICAgICAgICB2YXIgZXhwID0gTWF0aC5mbG9vcihDb21tb25VdGlscy5nZXRFeHBvbmVudCh2YWx1ZSkpO1xuICAgICAgICBpZiAoZXhwIDwgMTMpIHtcbiAgICAgICAgICAgIGlmIChleHAgPCA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHVuaXRJdCA9IE1hdGguZmxvb3IoZXhwIC8gQ29tbW9uVXRpbHMuY29uc3ROdW0pO1xuICAgICAgICAgICAgdmFyIHJlbSA9IGV4cCAlIENvbW1vblV0aWxzLmNvbnN0TnVtO1xuICAgICAgICAgICAgdmFyIG51bVN0ciA9IFN0cmluZyh2YWx1ZSAvIE1hdGgucG93KDEwLCB1bml0SXQgKiBDb21tb25VdGlscy5jb25zdE51bSkpLnN1YnN0cigwLCBDb21tb25VdGlscy5jb25zdE51bSArIHJlbSk7XG4gICAgICAgICAgICByZXR1cm4gbnVtU3RyICsgQ29tbW9uVXRpbHMuZ2V0VW5pdChleHApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9udW0gPSB2YWx1ZSAvIE1hdGgucG93KDEwLCBleHApO1xuICAgICAgICAgICAgcmV0dXJuIF9udW0udG9GaXhlZCgzKSArIFwiZVwiICsgZXhwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RXhwb25lbnQodmFsdWUpIHtcbiAgICAgICAgdmFyIGV4cCA9IDA7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSAxMCkge1xuICAgICAgICAgICAgZXhwKys7XG4gICAgICAgICAgICB2YWx1ZSAvPSAxMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldFVuaXQoZXhwOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICB2YXIgdW5pdEl0ID0gTWF0aC5mbG9vcihleHAgLyBDb21tb25VdGlscy5jb25zdE51bSk7XG4gICAgICAgIGlmIChleHAgPCAxMykge1xuICAgICAgICAgICAgcmV0dXJuIENvbW1vblV0aWxzLnVuaXRBcnJbdW5pdEl0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB1bml0SXQgPSBNYXRoLmZsb29yKGV4cCAvIENvbW1vblV0aWxzLmNvbnN0TnVtKTtcbiAgICAgICAgICAgIHJldHVybiBcImVcIiArIHVuaXRJdCAqIENvbW1vblV0aWxzLmNvbnN0TnVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L2s5YyW5oiQ5bim5pyJ5bCP5pWw54K555qESyxNLEJcbiAgICAgKiBAcGFyYW0gbnVtYmVyIFxuICAgICAqIEBwYXJhbSBkZWNpbWFscyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0RW5nTnVtYmVyKG51bWJlcjogYW55LCBkZWNpbWFsczogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIHZhciBzdHI6IHN0cmluZztcbiAgICAgICAgdmFyIG51bTogbnVtYmVyO1xuICAgICAgICBudW1iZXIgPSA8bnVtYmVyPjxhbnk+bnVtYmVyO1xuXG4gICAgICAgIGlmIChudW1iZXIgPj0gMTAwMDAwMCkge1xuICAgICAgICAgICAgbnVtID0gbnVtYmVyIC8gMTAwMDAwMDtcbiAgICAgICAgICAgIHN0ciA9IChNYXRoLmZsb29yKG51bSAvIDAuMDAxKSAqIDAuMDAxKS50b0ZpeGVkKGRlY2ltYWxzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdEVuZGluZ1plcm8oc3RyKSArIFwiTVwiO1xuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA+PSAxMDAwKSB7XG4gICAgICAgICAgICBudW0gPSBudW1iZXIgLyAxMDAwO1xuICAgICAgICAgICAgc3RyID0gKE1hdGguZmxvb3IobnVtIC8gMC4wMDEpICogMC4wMDEpLnRvRml4ZWQoZGVjaW1hbHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RW5kaW5nWmVybyhzdHIpICsgXCJLXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRFbmRpbmdaZXJvKGM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChjLmluZGV4T2YoXCIuXCIpICE9IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmRXaXRoKGMsIFwiMDBcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoMCwgYy5sZW5ndGggLSAzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmRXaXRoKGMsIFwiMFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZygwLCBjLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgc3RhdGljIGVuZFdpdGgoYzogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHN1ZmZpeCA9PSBjLnN1YnN0cmluZyhjLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZU1heFdpZHRoTGFiZWwobGFiZWw6IGNjLkxhYmVsLHdpZHRoOm51bWJlcikgOiBjYy5MYWJlbCB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgb2JqW1wiX19wcm90b19fXCJdID0gbGFiZWw7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwic3RyaW5nXCIsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTp0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTp0cnVlLFxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbC5zdHJpbmc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHN0cikge1xuICAgICAgICAgICAgICAgIGxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBzdHI7XG4gICAgICAgICAgICAgICAgbGFiZWxbXCJfdXBkYXRlUmVuZGVyRGF0YVwiXSh0cnVlKTtcbiAgICAgICAgICAgICAgICBpZihsYWJlbC5ub2RlLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLnNldENvbnRlbnRTaXplKHdpZHRoLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiA8Y2MuTGFiZWw+b2JqO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2xpbWVVc2VyTmFtZShuYW1lOiBzdHJpbmcsIHNob3dMZW4gPSAxNCkge1xuICAgICAgICBsZXQgbGVuID0gbmFtZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLnN0cmxlbihuYW1lKSA+IHNob3dMZW4pIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCAhPSBsZW4pIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lICsgXCIuLi5cIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHN0cmxlbihzdHIpIHtcbiAgICAgICAgbGV0IGxlbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAvL+WNleWtl+iKguWKoDEgXG4gICAgICAgICAgaWYgKChjID49IDB4MDAwMSAmJiBjIDw9IDB4MDA3ZSkgfHwgKDB4ZmY2MCA8PSBjICYmIGMgPD0gMHhmZjlmKSkge1xuICAgICAgICAgICAgbGVuKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlbiArPSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuO1xuICAgIH1cblxuICAgIC8qKiDmiZPkubHmlbDnu4QgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNodWZmbGVBcnIoYXJyOiBhbnlbXSkge1xuICAgICAgICBsZXQgX3N3YXAgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB0bXAgPSBhcnJbYV07XG4gICAgICAgICAgICBhcnJbYV0gPSBhcnJbYl07XG4gICAgICAgICAgICBhcnJbYl0gPSB0bXA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxlbiA9IGFyci5sZW5ndGg7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbiAtIGkpKTtcbiAgICAgICAgICAgIF9zd2FwKGlkeCwgbGVuLWktMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgXG4gICAgLyoqIOS6jOWIhuafpeaJviwgZmluZEZsYWcg5Li6ZmFsc2XooajnpLrmsqHmib7liLDnmoTml7blgJnov5Tlm57kuIDkuKrovoPlsI/nmoQsIOS4unRydWXov5Tlm57kuIDkuKrovoPlpKfnmoQgKi9cbiAgICBwdWJsaWMgc3RhdGljIGJpbmFyeVNlYXJjaChhcnI6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlciwgZmluZEZsYWcgPSBmYWxzZSkge1xuICAgICAgICBsZXQgc3RhcnQgPSAwLCBlbmQgPSBhcnIubGVuZ3RoLTE7XG4gICAgICAgIHdoaWxlKGVuZC1zdGFydCA+IDEpe1xuICAgICAgICAgICAgdmFyIGlkeCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCA8IGFycltpZHhdKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaWR4O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPiBhcnJbaWR4XSkge1xuICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaWR4XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rKh5pyJ5om+5Yiw5a+55bqU55qE5YC8XG4gICAgICAgIGlmKCFmaW5kRmxhZykge1xuICAgICAgICAgICAgaWYoZW5kID09IDApIHJldHVybiAtMTtcbiAgICAgICAgICAgIHJldHVybiBzdGFydDtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaWYoc3RhcnQgPT0gYXJyLmxlbmd0aC0xKSByZXR1cm4gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBlbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKTmlq3kuIDkuKrngrnmmK/lkKblnKjkuInop5LlvaLlhoVcbiAgICBwdWJsaWMgc3RhdGljIGlzSW5UcmlhbmdsZShwb2ludDogY2MuVmVjMiwgdHJpQTogY2MuVmVjMiwgdHJpQjogY2MuVmVjMiwgdHJpQzogY2MuVmVjMikge1xuICAgICAgICBsZXQgQUIgPSB0cmlCLnN1Yih0cmlBKSwgQUMgPSB0cmlDLnN1Yih0cmlBKSwgQkMgPSB0cmlDLnN1Yih0cmlCKSwgQUQgPSBwb2ludC5zdWIodHJpQSksIEJEID0gcG9pbnQuc3ViKHRyaUIpO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIChBQi5jcm9zcyhBQykgPj0gMCBeIEFCLmNyb3NzKEFEKSA8IDApICAmJiAoQUIuY3Jvc3MoQUMpID49IDAgXiBBQy5jcm9zcyhBRCkgPj0gMCkgJiYgKEJDLmNyb3NzKEFCKSA+IDAgXiBCQy5jcm9zcyhCRCkgPj0gMCk7IFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNJblBvbHlnb24oY2hlY2tQb2ludDogY2MuVmVjMiwgcG9seWdvblBvaW50czogY2MuVmVjMltdKSB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMCwgaTogbnVtYmVyLCB4aW50ZXJzOiBudW1iZXI7XG4gICAgICAgIGxldCBwMTogY2MuVmVjMiwgcDI6IGNjLlZlYzI7XG4gICAgICAgIGxldCBwb2ludENvdW50ID0gcG9seWdvblBvaW50cy5sZW5ndGg7XG4gICAgICAgIHAxID0gcG9seWdvblBvaW50c1swXTtcbiAgICAgXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcG9pbnRDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwMiA9IHBvbHlnb25Qb2ludHNbaSAlIHBvaW50Q291bnRdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNoZWNrUG9pbnQueCA+IE1hdGgubWluKHAxLngsIHAyLngpICYmXG4gICAgICAgICAgICAgICAgY2hlY2tQb2ludC54IDw9IE1hdGgubWF4KHAxLngsIHAyLngpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tQb2ludC55IDw9IE1hdGgubWF4KHAxLnksIHAyLnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwMS54ICE9IHAyLngpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhpbnRlcnMgPSAoY2hlY2tQb2ludC54IC0gcDEueCkgKiAocDIueSAtIHAxLnkpIC8gKHAyLnggLSBwMS54KSArIHAxLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocDEueSA9PSBwMi55IHx8IGNoZWNrUG9pbnQueSA8PSB4aW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcDEgPSBwMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGNvdW50ZXIgJiAxKSAhPT0gMDtcbiAgICB9XG5cbiAgICAvLyDlpJrovrnlvaIg5LiJ6KeS5YiH5YmyXG4gICAgcHVibGljIHN0YXRpYyBzcGxpdGVQb2x5Z29uKHBvaW50czogY2MuVmVjMltdKTogbnVtYmVyW10ge1xuICAgICAgICBpZihwb2ludHMubGVuZ3RoIDw9IDMpIHJldHVybiBbMCwgMSwgMl07XG4gICAgICAgIGxldCBwb2ludE1hcDoge1trZXk6IHN0cmluZ106IG51bWJlcn0gPSB7fTsgICAgIC8vIHBvaW505LiOaWR455qE5pig5bCEXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludE1hcFtgJHtwLnh9LSR7cC55fWBdID0gaTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXRJZHggPSAocDogY2MuVmVjMikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50TWFwW2Ake3AueH0tJHtwLnl9YF1cbiAgICAgICAgfVxuICAgICAgICBwb2ludHMgPSBwb2ludHMuY29uY2F0KFtdKTtcbiAgICAgICAgbGV0IGlkeHM6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUocG9pbnRzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxldCBwMSA9IHBvaW50c1soaW5kZXgpICUgcG9pbnRzLmxlbmd0aF1cbiAgICAgICAgICAgICwgcDIgPSBwb2ludHNbKGluZGV4KzEpICUgcG9pbnRzLmxlbmd0aF1cbiAgICAgICAgICAgICwgcDMgPSBwb2ludHNbKGluZGV4KzIpICUgcG9pbnRzLmxlbmd0aF07XG4gICAgICAgICAgICBsZXQgc3BsaXRQb2ludCA9IChpbmRleCsxKSAlIHBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGxldCB2MSA9IHAyLnN1YihwMSk7XG4gICAgICAgICAgICBsZXQgdjIgPSBwMy5zdWIocDIpO1xuICAgICAgICAgICAgaWYodjEuY3Jvc3ModjIpIDwgMCkgeyAgICAgIC8vIOaYr+S4gOS4quWHueinkiwg5a+75om+5LiL5LiA5LiqXG4gICAgICAgICAgICAgICAgaW5kZXggPSAoaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaGFzUG9pbnQgPSBmYWxzZTsgICAgICAgXG4gICAgICAgICAgICBmb3IoY29uc3QgcCBvZiBwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZihwICE9IHAxICYmIHAgIT0gcDIgJiYgcCAhPSBwMyAmJiB0aGlzLmlzSW5UcmlhbmdsZShwLCBwMSwgcDIgLHAzKSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNQb2ludCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGhhc1BvaW50KSB7ICAgICAgLy8g5b2T5YmN5LiJ6KeS5b2i5YyF5ZCr5YW25LuW54K5LCDlr7vmib7kuIvkuIDkuKpcbiAgICAgICAgICAgICAgICBpbmRleCA9IChpbmRleCArIDEpICUgcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaJvuWIsOS6huiAs+actSwg5YiH5o6JXG4gICAgICAgICAgICBpZHhzLnB1c2goZ2V0SWR4KHAxKSwgZ2V0SWR4KHAyKSwgZ2V0SWR4KHAzKSk7XG4gICAgICAgICAgICBwb2ludHMuc3BsaWNlKHNwbGl0UG9pbnQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihjb25zdCBwIG9mIHBvaW50cykge1xuICAgICAgICAgICAgaWR4cy5wdXNoKGdldElkeChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkeHM7XG4gICAgfVxuXG4gICAgLyoqIOiuoeeul3V2LCDplJrngrnpg73mmK/kuK3lv4MgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVVdihwb2ludHM6IGNjLlZlYzJbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHV2czogY2MuVmVjMltdID0gW107XG4gICAgICAgIGZvcihjb25zdCBwIG9mIHBvaW50cykge1xuICAgICAgICAgICAgLy8gdXbljp/ngrnmmK/lt6bkuIrop5JcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aFV0aWxzLmNsYW1wKDAsIDEsIChwLnggKyB3aWR0aC8yKSAvIHdpZHRoKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aFV0aWxzLmNsYW1wKDAsIDEsIDEuIC0gKHAueSArIGhlaWdodC8yKSAvIGhlaWdodCk7XG4gICAgICAgICAgICB1dnMucHVzaChjYy52Mih4LCB5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHV2cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHR3ZWVuRmxvYXQoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBvblVwZGF0ZTogKHQ6IG51bWJlcikgPT4gdm9pZCwgb25Db21wbGV0ZT86IEZ1bmN0aW9uLCBhdXRvU3RhcnQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBvOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBfdmFsdWU6IGZyb20gfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sICd2YWx1ZScsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gby5fdmFsdWUsXG4gICAgICAgICAgICBzZXQ6ICh2OiBudW1iZXIpID0+IHsgby5fdmFsdWUgPSB2OyBvblVwZGF0ZSAmJiBvblVwZGF0ZShvLl92YWx1ZSk7IH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdHdlZW4gPSBjYy50d2VlbihvKS50byhkdXJhdGlvbiwgeyB2YWx1ZTogdG8gfSkuY2FsbChvbkNvbXBsZXRlKTtcbiAgICAgICAgaWYgKGF1dG9TdGFydCkge1xuICAgICAgICAgICAgdHdlZW4uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0d2VlblZlYzIoZnJvbTogY2MuVmVjMiwgdG86IGNjLlZlYzIsIGR1cmF0aW9uOiBudW1iZXIsIG9uVXBkYXRlOiAodDogY2MuVmVjMikgPT4gdm9pZCwgb25Db21wbGV0ZT86IEZ1bmN0aW9uLCBhdXRvU3RhcnQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBvOiBSZWNvcmQ8c3RyaW5nLCBjYy5WZWMyPiA9IHtfdmFsdWU6IGZyb219O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ3ZhbHVlJywge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBvLl92YWx1ZSxcbiAgICAgICAgICAgIHNldDogKHY6IGNjLlZlYzIpID0+IHsgby5fdmFsdWUgPSB2OyBvblVwZGF0ZSAmJiBvblVwZGF0ZShvLl92YWx1ZSk7IH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdHdlZW4gPSBjYy50d2VlbihvKS50byhkdXJhdGlvbiwgeyB2YWx1ZTogdG8gfSkuY2FsbChvbkNvbXBsZXRlKTtcbiAgICAgICAgaWYgKGF1dG9TdGFydCkge1xuICAgICAgICAgICAgdHdlZW4uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgfVxuXG4gICAgXG4gICAgXG59Il19