"use strict";
cc._RF.push(module, '284d8zxqTdJtYjT+CGS5XDE', 'Pool');
// Script/Common/Utils/Pool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = void 0;
var Pool = /** @class */ (function () {
    function Pool(fn, size) {
        this._fn = fn;
        this._idx = size - 1;
        this._frees = new Array(size);
        for (var i = 0; i < size; i++) {
            this._frees[i] = fn();
        }
    }
    Object.defineProperty(Pool.prototype, "freeCount", {
        get: function () {
            return this._frees.length;
        },
        enumerable: false,
        configurable: true
    });
    Pool.prototype.alloc = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (this._idx < 0) {
            this._expand(Math.round(this._frees.length * 1.2) + 1);
        }
        var obj = this._frees[this._idx];
        this._frees.splice(this._idx);
        --this._idx;
        obj.use && obj.use.apply(obj, params);
        return obj;
    };
    Pool.prototype.free = function (obj) {
        ++this._idx;
        obj.free && obj.free();
        this._frees[this._idx] = obj;
    };
    Pool.prototype.clear = function (fn) {
        for (var i = 0; i < this._idx; i++) {
            fn && fn(this._frees[i]);
        }
        this._frees.splice(0);
        this._idx = -1;
    };
    Pool.prototype._expand = function (size) {
        var old = this._frees;
        this._frees = new Array(size);
        var len = size - old.length;
        for (var i = 0; i < len; i++) {
            this._frees[i] = this._fn();
        }
        for (var i = len, j = 0; i < size; ++i, ++j) {
            this._frees[i] = old[j];
        }
        this._idx += len;
    };
    return Pool;
}());
exports.Pool = Pool;

cc._RF.pop();