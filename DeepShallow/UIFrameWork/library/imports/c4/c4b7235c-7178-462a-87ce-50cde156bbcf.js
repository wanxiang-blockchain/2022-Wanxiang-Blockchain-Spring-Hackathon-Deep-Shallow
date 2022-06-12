"use strict";
cc._RF.push(module, 'c4b72NccXhGKofOUM3hVrvP', 'BigNumUtils');
// Script/Common/Utils/BigNumUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RountType = void 0;
var RountType;
(function (RountType) {
    RountType[RountType["Round"] = 0] = "Round";
    RountType[RountType["Floor"] = 1] = "Floor";
    RountType[RountType["Ceil"] = 2] = "Ceil";
})(RountType = exports.RountType || (exports.RountType = {}));
var BigNumUtils = /** @class */ (function () {
    function BigNumUtils() {
    }
    BigNumUtils.BNPlus = function () {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) {
            args[_a] = arguments[_a];
        }
        var value = [0, 0];
        for (var _i = 0; _i < args.length; _i++) {
            var arg = args[_i];
            var base, zeroes;
            var num = +arg;
            if (num === 0 || (num && num !== Infinity)) {
                zeroes = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
                base = arg < 10 ? arg : arg / Math.pow(10, zeroes);
            }
            else {
                if (arg) {
                    arg = arg.split("e");
                    base = +arg[0] || 0;
                    zeroes = +arg[1] || 0;
                }
                else {
                    base = 0;
                    zeroes = 0;
                }
            }
            if (zeroes > value[1]) {
                value[0] /= Math.pow(10, zeroes - value[1]);
                value[0] += base;
                value[1] = zeroes;
            }
            else {
                value[0] += base / Math.pow(10, value[1] - zeroes);
            }
        }
        var sign = value[0] >= 0 ? 1 : -1;
        var rbase = Math.abs(value[0]);
        while (rbase < 1 && value[1] > 0) {
            rbase *= 10;
            value[1] -= 1;
        }
        while (rbase > 10) {
            rbase /= 10;
            value[1] += 1;
        }
        rbase *= sign;
        return rbase + "e" + value[1];
    };
    BigNumUtils.BNMinus = function () {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) {
            args[_a] = arguments[_a];
        }
        var value = [0, 0];
        for (var _i = 0; _i < args.length; _i++) {
            var arg = args[_i];
            var idx = _i;
            var base, zeroes;
            var num = +arg;
            if (num === 0 || (num && num !== Infinity)) {
                zeroes = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
                base = arg < 10 ? arg : arg / Math.pow(10, zeroes);
            }
            else {
                arg = arg.split("e");
                base = +arg[0];
                zeroes = +arg[1];
            }
            if (!idx) {
                value[0] = base;
                value[1] = zeroes;
            }
            else {
                if (value[1] < zeroes) {
                    value[0] = value[0] / Math.pow(10, zeroes - value[1]) - base;
                    value[1] = zeroes;
                }
                else {
                    value[0] -= base / Math.pow(10, value[1] - zeroes);
                }
            }
        }
        // if(value[0] <= 1e-10){
        //   return 0;
        // }
        var sign = value[0] >= 0 ? 1 : -1;
        var rbase = Math.abs(value[0]);
        while (rbase < 1 && value[1] > 0) {
            rbase *= 10;
            value[1] -= 1;
        }
        while (rbase > 10) {
            rbase /= 10;
            value[1] += 1;
        }
        rbase *= sign;
        return rbase + "e" + value[1];
    };
    BigNumUtils.BNTimes = function () {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) {
            args[_a] = arguments[_a];
        }
        var value = [0, 0];
        args.forEach(function (arg, idx) {
            var base, zeroes;
            var num = +arg;
            if (num === 0 || (num && num !== Infinity)) {
                zeroes = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
                base = arg < 10 ? arg : arg / Math.pow(10, zeroes);
            }
            else {
                if (arg) {
                    arg = arg.split("e");
                    base = +arg[0] || 0;
                    zeroes = +arg[1] || 0;
                }
                else {
                    base = 1;
                    zeroes = 0;
                }
            }
            if (!idx) {
                value[0] = base;
                value[1] = zeroes;
            }
            else {
                value[0] *= base;
                value[1] += zeroes;
                if (value[0] > 1e300) {
                    value[0] /= 1e300;
                    value[1] += 300;
                }
            }
        });
        var sign = value[0] >= 0 ? 1 : -1;
        var base = Math.abs(value[0]);
        while (base < 1 && value[1] > 0) {
            base *= 10;
            value[1] -= 1;
        }
        while (base > 10) {
            base /= 10;
            value[1] += 1;
        }
        return base * sign + "e" + value[1];
    };
    BigNumUtils.BNDevide = function (value0, value1) {
        if (+value1 === 0) {
            return 0;
        }
        var value = [0, 0];
        var sign = 1;
        [value0, value1].forEach(function (arg, idx) {
            var base, zeroes;
            var realNum = +arg;
            var num = Math.abs(realNum);
            if (num === 0 || (num && num !== Infinity)) {
                zeroes = num < 10 ? 0 : Math.floor(Math.log10(num) + 1e-6);
                base = num < 10 ? num : num / Math.pow(10, zeroes);
            }
            else {
                arg = arg.split("e");
                realNum = +arg[0];
                base = Math.abs(realNum);
                zeroes = +arg[1];
            }
            sign *= realNum >= 0 ? 1 : -1;
            if (idx === 0) {
                value[0] = base;
                value[1] = zeroes;
            }
            else {
                value[0] /= base;
                value[1] -= zeroes;
            }
        });
        var base = Math.abs(value[0]);
        while (base < 1 && value[1] > 0) {
            base *= 10;
            value[1] -= 1;
        }
        while (base > 10) {
            base /= 10;
            value[1] += 1;
        }
        base *= sign;
        if (value[1] < 100) {
            return base * Math.pow(10, value[1]);
        }
        return this.BNTimes(base, this.BNPow(10, value[1]));
    };
    BigNumUtils.BNCompare = function (value0, value1) {
        var bases = [0, 0];
        var zeroes = [0, 0];
        [value0, value1].forEach(function (arg, idx) {
            var num = +arg;
            if (num === 0 || (num && num !== Infinity)) {
                zeroes[idx] = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
                bases[idx] = arg < 10 ? arg : arg / Math.pow(10, zeroes[idx]);
            }
            else {
                arg = arg.split("e");
                bases[idx] = +arg[0];
                zeroes[idx] = +arg[1];
            }
        });
        return bases[0] * bases[1] < 0 ? (bases[0] > 0 ? 1 : -1) : zeroes[1] > zeroes[0] ? -1 : zeroes[1] < zeroes[0] ? 1 : bases[1] > bases[0] ? -1 : bases[1] < bases[0] ? 1 : 0;
    };
    BigNumUtils.BNPow = function (di, zhi) {
        if (!di) {
            return "0";
        }
        if (!zhi) {
            return "1";
        }
        var max = Math.floor(Math.log(1e300) / Math.log(di));
        max = Math.max(max, 1);
        var val = 1;
        if (max >= zhi) {
            val = Math.pow(di, zhi);
        }
        else {
            var times = Math.floor(zhi / max);
            var arr = [];
            var mid = Math.pow(di, max);
            for (var i = 0; i < times; i++) {
                arr.push(mid);
            }
            arr.push(Math.pow(di, zhi - max * times));
            val = this.BNTimes.apply(this, arr);
        }
        return val;
    };
    BigNumUtils.BNMax = function (value0, value1) {
        return this.BNCompare(value0, value1) > 0 ? value0 : value1;
    };
    BigNumUtils.BNMin = function (value0, value1) {
        return this.BNCompare(value0, value1) > 0 ? value1 : value0;
    };
    BigNumUtils.BNLog = function (value) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            var sign = num >= 0 ? 1 : -1;
            num = Math.abs(num);
            return sign * Math.log10(num);
        }
        else {
            return +value.split("e")[1];
        }
    };
    BigNumUtils.BNSqrt = function (value) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            return Math.sqrt(num);
        }
        var arr = value.split("e");
        var a = +arr[0];
        var b = +arr[1];
        return Math.sqrt(a) + "e" + b / 2;
    };
    BigNumUtils.BNSqrtEx = function (value, zhi) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            return Math.pow(num, 1 / zhi);
        }
        var arr = value.split("e");
        var a = +arr[0];
        var b = +arr[1];
        return Math.pow(a, 1 / zhi) + "e" + b / zhi;
    };
    BigNumUtils.BNFloor = function (value) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            return Math.floor(num);
        }
        return value;
    };
    BigNumUtils.BNCeil = function (value) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            return Math.ceil(num);
        }
        return value;
    };
    BigNumUtils.BNRound = function (value) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            return Math.round(num);
        }
        return value;
    };
    BigNumUtils.BN2Number = function (value) {
        var num = +value;
        if (num === 0 || (num && num !== Infinity)) {
            return num;
        }
        else {
            var arr = value.split("e");
            return +arr[0] * Math.pow(10, arr[1]);
        }
    };
    BigNumUtils.getOwnString = function (n) {
        return this.getNumberString(n, undefined, undefined, RountType.Floor);
    };
    BigNumUtils.getCostString = function (n) {
        return this.getNumberString(n, undefined, undefined, RountType.Ceil);
    };
    BigNumUtils.getNumberString = function (n, fixed, bigFixed, roundType) {
        if (fixed === void 0) { fixed = 0; }
        if (roundType === void 0) { roundType = RountType.Round; }
        var _base;
        var tailIdx;
        var num = +n;
        if (num === 0 || (num && num !== Infinity)) {
            if (n < 1000) {
                return this.roundNum(n, roundType, fixed);
            }
            var base = "" + Math.round(n);
            var digit = 0;
            if (~base.indexOf("e")) {
                //fix bug Math.log10(9.999999999999996e+38)=39
                var dishu = +base.split("e")[0];
                var zhishu = +base.split("e")[1];
                zhishu += Math.floor(Math.log10(dishu));
                digit = zhishu;
            }
            else {
                digit = Math.floor(Math.log10(n));
            }
            if (~base.indexOf("e")) {
                _base = +base.split("e")[0] * Math.pow(10, digit % 3);
            }
            else {
                _base = +base.slice(0, digit % 3 + 4) / 1000;
            }
            tailIdx = digit / 3 >> 0;
        }
        else {
            n = n.split("e");
            if (+n[1] < 3) {
                var v = n[0] * Math.pow(10, n[1]);
                return this.roundNum(v, roundType, fixed);
            }
            _base = n[0] * Math.pow(10, n[1] % 3);
            while (_base > 1000) {
                _base /= 1000;
                n[1] = +n[1] + 3;
            }
            tailIdx = n[1] / 3 >> 0;
        }
        var tail;
        if (tailIdx < 4) {
            tail = ["", "K", "M", "B"][tailIdx];
        }
        else {
            var first = (tailIdx - 4) / 26 >> 0;
            var grade = first / 26 >> 0;
            var second = (tailIdx - 4) % 26;
            var a = "abcdefghijklmnopqrstuvwxyz";
            var b = a.toUpperCase();
            tail = (grade < 2 ? a : b)[first % 26] + (grade % 2 ? b : a)[second];
        }
        if (bigFixed === undefined) {
            bigFixed = _base < 10 ? 2 : _base < 100 ? 1 : 0;
        }
        var baseStr = this.roundNum(_base, roundType, bigFixed);
        return baseStr + tail;
    };
    BigNumUtils.roundNum = function (n, type, fixed) {
        var func;
        if (type === RountType.Round) {
            func = Math.round;
        }
        else if (type === RountType.Ceil) {
            func = Math.ceil;
        }
        else {
            func = Math.floor;
        }
        var val;
        if (fixed === 0) {
            val = func(n);
        }
        else {
            var b = Math.pow(10, fixed);
            val = func(b * n) / b;
        }
        return val.toFixed(fixed);
    };
    BigNumUtils.getFixNumber = function (num, fixed) {
        if (fixed === void 0) { fixed = 1; }
        var b = Math.pow(10, fixed);
        return Math.floor(num * b) / b;
    };
    BigNumUtils.getPercentString = function (num, fixed) {
        if (fixed === void 0) { fixed = 1; }
        if (typeof num === 'string') {
            return this.getNumberString(this.BNTimes(num, 100), fixed) + '%';
        }
        else {
            return this.getNumberString(num * 100, fixed) + '%';
        }
    };
    return BigNumUtils;
}());
exports.default = BigNumUtils;

cc._RF.pop();