
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/BroadCast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '082ecq87BtC3qGrtG+cRJqY', 'BroadCast');
// Script/Common/Utils/BroadCast.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerBinding = exports.Broadcast = void 0;
var Broadcast = /** @class */ (function () {
    function Broadcast() {
        this.bindings = [];
    }
    Broadcast.prototype.on = function (listener, target) {
        var binding = new ListenerBinding(listener, target, false, this);
        this.bindings.push(binding);
        return binding;
    };
    Broadcast.prototype.once = function (listener, target) {
        var binding = new ListenerBinding(listener, target, true, this);
        this.bindings.push(binding);
        return binding;
    };
    Broadcast.prototype.dispatch = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var flag = false;
        for (var _a = 0, _b = this.bindings; _a < _b.length; _a++) {
            var item = _b[_a];
            if (!item.hasDestroyed) {
                item.execute.apply(item, params);
            }
            else {
                flag = true;
            }
        }
        if (flag) {
            for (var i = 0; i < this.bindings.length; i++) {
                if (this.bindings[i].hasDestroyed) {
                    this.bindings.splice(i, 1);
                    i--;
                }
            }
        }
    };
    Broadcast.prototype.get = function (listener, target) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.listener == listener && item.target == target && !item.hasDestroyed)
                return item;
        }
        return null;
    };
    Broadcast.prototype.has = function (listener, target) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.listener == listener && item.target == target && !item.hasDestroyed)
                return true;
        }
        return false;
    };
    Broadcast.prototype.remove = function (listener, target) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.listener == listener && item.target == target && !item.hasDestroyed) {
                return item.destroy();
            }
        }
    };
    Broadcast.prototype.removeAll = function () {
        while (this.bindings.length) {
            this.bindings.pop().destroy();
        }
    };
    return Broadcast;
}());
exports.Broadcast = Broadcast;
var ListenerBinding = /** @class */ (function () {
    function ListenerBinding(listener, target, once, boradcast) {
        var _this = this;
        this.destroySelf = function () {
            _this.destroy();
        };
        this.listener = listener;
        this.target = target;
        this.once = once;
        this.broadcast = boradcast;
        this.hasDestroyed = false;
    }
    ListenerBinding.prototype.execute = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (!this.hasDestroyed) {
            var result = this.listener.apply(this.target, params);
            if (this.once) {
                this.destroy();
            }
            return result;
        }
        return null;
    };
    ListenerBinding.prototype.destroy = function () {
        this.listener = null;
        this.target = null;
        this.once = null;
        this.broadcast = null;
        this.hasDestroyed = true;
    };
    return ListenerBinding;
}());
exports.ListenerBinding = ListenerBinding;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0Jyb2FkQ2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBRVksYUFBUSxHQUF5QixFQUFFLENBQUM7SUE0RGhELENBQUM7SUExREcsc0JBQUUsR0FBRixVQUFHLFFBQWtDLEVBQUUsTUFBVztRQUM5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLFFBQWtDLEVBQUUsTUFBVztRQUNoRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUFTLGdCQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDJCQUFjOztRQUNuQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFDakIsS0FBaUIsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO1lBQTNCLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDSCxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELElB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LElBQUksRUFBRTtnQkFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFNRCxpQ0FBTyxHQUFQO1FBQ0ssSUFBSSxDQUFDLFFBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBb0IsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIEJyb2FkY2FzdDxUPiB7XG5cbiAgICBwcml2YXRlIGJpbmRpbmdzOiBMaXN0ZW5lckJpbmRpbmc8VD5bXSA9IFtdO1xuXG4gICAgb24obGlzdGVuZXI6ICguLi5wYXJhbXM6IFRbXSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpOiBMaXN0ZW5lckJpbmRpbmc8VD4ge1xuICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBMaXN0ZW5lckJpbmRpbmcobGlzdGVuZXIsIHRhcmdldCwgZmFsc2UsIHRoaXMpO1xuICAgICAgICB0aGlzLmJpbmRpbmdzLnB1c2goYmluZGluZyk7XG4gICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgIH1cblxuICAgIG9uY2UobGlzdGVuZXI6ICguLi5wYXJhbXM6IFRbXSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpOiBMaXN0ZW5lckJpbmRpbmc8VD4ge1xuICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBMaXN0ZW5lckJpbmRpbmcobGlzdGVuZXIsIHRhcmdldCwgdHJ1ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYmluZGluZ3MucHVzaChiaW5kaW5nKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goLi4ucGFyYW1zOiBUW10pIHtcbiAgICAgICAgdmFyIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJpbmRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaGFzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5leGVjdXRlLmFwcGx5KGl0ZW0sIHBhcmFtcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iaW5kaW5nc1tpXS5oYXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQobGlzdGVuZXI6ICguLi5wYXJhbXM6IFRbXSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpOiBMaXN0ZW5lckJpbmRpbmc8VD4ge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYmluZGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmxpc3RlbmVyID09IGxpc3RlbmVyICYmIGl0ZW0udGFyZ2V0ID09IHRhcmdldCAmJiAhaXRlbS5oYXNEZXN0cm95ZWQpIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhcyhsaXN0ZW5lcjogKC4uLnBhcmFtczogVFtdKSA9PiB2b2lkLCB0YXJnZXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYmluZGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmxpc3RlbmVyID09IGxpc3RlbmVyICYmIGl0ZW0udGFyZ2V0ID09IHRhcmdldCAmJiAhaXRlbS5oYXNEZXN0cm95ZWQpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmUobGlzdGVuZXI6ICguLi5wYXJhbXM6IFRbXSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJpbmRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5saXN0ZW5lciA9PSBsaXN0ZW5lciAmJiBpdGVtLnRhcmdldCA9PSB0YXJnZXQgJiYgIWl0ZW0uaGFzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5iaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3MucG9wKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdGVuZXJCaW5kaW5nPFQ+IHtcblxuICAgIGNvbnN0cnVjdG9yKGxpc3RlbmVyOiAoLi4ucGFyYW1zOiBUW10pID0+IHZvaWQsIHRhcmdldDogYW55LCBvbmNlOiBib29sZWFuLCBib3JhZGNhc3Q6IEJyb2FkY2FzdDxUPikge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9uY2UgPSBvbmNlO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdCA9IGJvcmFkY2FzdDtcbiAgICAgICAgdGhpcy5oYXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZWFkb25seSBsaXN0ZW5lcjogKC4uLnBhcmFtczogVFtdKSA9PiB2b2lkO1xuXG4gICAgcmVhZG9ubHkgdGFyZ2V0OiBhbnk7XG5cbiAgICByZWFkb25seSBvbmNlOiBib29sZWFuO1xuXG4gICAgcmVhZG9ubHkgYnJvYWRjYXN0OiBCcm9hZGNhc3Q8VD47XG5cbiAgICByZWFkb25seSBoYXNEZXN0cm95ZWQ6IGJvb2xlYW47XG5cbiAgICBleGVjdXRlKC4uLnBhcmFtczogVFtdKTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vbmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRlc3Ryb3lTZWxmID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAodGhpcy5saXN0ZW5lciBhcyBhbnkpID0gbnVsbDtcbiAgICAgICAgKHRoaXMudGFyZ2V0IGFzIGFueSkgPSBudWxsO1xuICAgICAgICAodGhpcy5vbmNlIGFzIGFueSkgPSBudWxsO1xuICAgICAgICAodGhpcy5icm9hZGNhc3QgYXMgYW55KSA9IG51bGw7XG4gICAgICAgICh0aGlzLmhhc0Rlc3Ryb3llZCBhcyBhbnkpID0gdHJ1ZTtcbiAgICB9XG59XG5cbiJdfQ==