
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/Pool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1Bvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7SUFTSSxjQUFZLEVBQVcsRUFBRSxJQUFZO1FBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUksSUFBSSxDQUFDLENBQUM7UUFFakMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQVpELHNCQUFXLDJCQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQVlNLG9CQUFLLEdBQVo7UUFBYSxnQkFBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCwyQkFBYzs7UUFDdkIsSUFBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFWixHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQVAsR0FBRyxFQUFRLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxHQUFNO1FBQ2QsRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxvQkFBSyxHQUFaLFVBQWEsRUFBb0I7UUFDN0IsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFHTyxzQkFBTyxHQUFmLFVBQWdCLElBQVk7UUFDeEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzlCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDL0I7UUFFRCxLQUFJLElBQUksQ0FBQyxHQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBQ0wsV0FBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElQb29sIHtcbiAgICB1c2U/KC4uLnBhcmFtczogYW55KTogYW55O1xuICAgIGZyZWU/KCk6IGFueTtcbn1cbmV4cG9ydCBjbGFzcyBQb29sPFQgZXh0ZW5kcyBJUG9vbD4ge1xuICAgIHByaXZhdGUgX2ZuOiAoKSA9PiBUO1xuICAgIHByaXZhdGUgX2lkeDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ZyZWVzOiBUW107XG5cbiAgICBwdWJsaWMgZ2V0IGZyZWVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyZWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihmbjogKCkgPT4gVCwgc2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICAgIHRoaXMuX2lkeCA9IHNpemUgLSAxO1xuICAgICAgICB0aGlzLl9mcmVlcyA9IG5ldyBBcnJheTxUPihzaXplKTtcblxuICAgICAgICBmb3IobGV0IGk9MDsgaTxzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyZWVzW2ldID0gZm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhbGxvYyguLi5wYXJhbXM6IGFueSk6IFQge1xuICAgICAgICBpZih0aGlzLl9pZHggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLl9leHBhbmQoTWF0aC5yb3VuZCh0aGlzLl9mcmVlcy5sZW5ndGggKiAxLjIpICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5fZnJlZXNbdGhpcy5faWR4XTtcbiAgICAgICAgdGhpcy5fZnJlZXMuc3BsaWNlKHRoaXMuX2lkeCk7XG4gICAgICAgIC0tdGhpcy5faWR4O1xuXG4gICAgICAgIG9iai51c2UgJiYgb2JqLnVzZSguLi5wYXJhbXMpO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHB1YmxpYyBmcmVlKG9iajogVCkge1xuICAgICAgICArKyB0aGlzLl9pZHg7XG4gICAgICAgIG9iai5mcmVlICYmIG9iai5mcmVlKCk7XG4gICAgICAgIHRoaXMuX2ZyZWVzW3RoaXMuX2lkeF0gPSBvYmo7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKGZuOiAob2JqOiBUKSA9PiB2b2lkKSB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuX2lkeDsgaSsrKSB7XG4gICAgICAgICAgICBmbiAmJiBmbih0aGlzLl9mcmVlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZnJlZXMuc3BsaWNlKDApO1xuICAgICAgICB0aGlzLl9pZHggPSAtMTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgX2V4cGFuZChzaXplOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5fZnJlZXM7XG4gICAgICAgIHRoaXMuX2ZyZWVzID0gbmV3IEFycmF5KHNpemUpO1xuXG4gICAgICAgIGNvbnN0IGxlbiA9IHNpemUgLSBvbGQubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fZnJlZXNbaV0gPSB0aGlzLl9mbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpPWxlbixqPTA7IGk8c2l6ZTsgKytpLCArK2opIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyZWVzW2ldID0gb2xkW2pdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faWR4ICs9IGxlbjtcbiAgICB9XG59Il19