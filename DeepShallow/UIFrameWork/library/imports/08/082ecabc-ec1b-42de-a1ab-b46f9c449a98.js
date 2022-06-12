"use strict";
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