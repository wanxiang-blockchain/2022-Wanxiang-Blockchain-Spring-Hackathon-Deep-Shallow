"use strict";
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