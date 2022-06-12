"use strict";
cc._RF.push(module, '15cf5C/OS9IyY5TeN5ujTW/', 'EventCenter');
// Script/UIFrame/EventCenter.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCenter = exports.EventInfo = void 0;
var Pool_1 = require("../Common/Utils/Pool");
var EventInfo = /** @class */ (function () {
    function EventInfo() {
    }
    EventInfo.prototype.free = function () {
        this.callback = null;
        this.target = null;
        this.once = false;
    };
    EventInfo.prototype.init = function (callback, target, once) {
        this.callback = callback;
        this.target = target;
        this.once = once;
    };
    return EventInfo;
}());
exports.EventInfo = EventInfo;
var RemoveCommand = /** @class */ (function () {
    function RemoveCommand(eventName, callback, targetId) {
        this.eventName = eventName;
        this.callback = callback;
        this.targetId = targetId;
    }
    return RemoveCommand;
}());
var idSeed = 1; // 这里有一个小缺陷就是idSeed有最大值,Number.MAX_VALUE
var EventCenter = /** @class */ (function () {
    function EventCenter() {
    }
    EventCenter.on = function (eventName, callback, target, once) {
        if (target === void 0) { target = undefined; }
        if (once === void 0) { once = false; }
        target = target || this;
        var targetId = target['uuid'] || target['id'];
        if (targetId === undefined) {
            target['uuid'] = targetId = '' + idSeed++;
        }
        this.onById(eventName, targetId, target, callback, once);
    };
    EventCenter.once = function (eventName, callback, target) {
        if (target === void 0) { target = undefined; }
        this.on(eventName, callback, target, true);
    };
    EventCenter.onById = function (eventName, targetId, target, cb, once) {
        var collection = this._listeners[eventName];
        if (!collection) {
            collection = this._listeners[eventName] = {};
        }
        var events = collection[targetId];
        if (!events) {
            events = collection[targetId] = [];
        }
        var eventInfo = this._eventPool.alloc();
        eventInfo.init(cb, target, once);
        events.push(eventInfo);
    };
    EventCenter.off = function (eventName, callback, target) {
        if (target === void 0) { target = undefined; }
        target = target || this;
        var targetId = target['uuid'] || target['id'];
        if (!targetId)
            return;
        this.offById(eventName, callback, targetId);
    };
    EventCenter.targetOff = function (target) {
        target = target || this;
        var targetId = target['uuid'] || target['id'];
        if (!targetId)
            return;
        for (var event in this._listeners) {
            var collection = this._listeners[event];
            if (collection[targetId] !== undefined) {
                delete collection[targetId];
            }
        }
    };
    EventCenter.offById = function (eventName, callback, targetId) {
        if (this._dispatching > 0) {
            var cmd = new RemoveCommand(eventName, callback, targetId);
            this._removeCommands.push(cmd);
        }
        else {
            this.doOff(eventName, callback, targetId);
        }
    };
    EventCenter.doOff = function (eventName, callback, targetId) {
        var collection = this._listeners[eventName];
        if (!collection)
            return;
        var events = collection[targetId];
        if (!events)
            return;
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i].callback === callback) {
                events.splice(i, 1);
            }
        }
        if (events.length === 0) {
            collection[targetId] = null;
            delete collection[targetId];
        }
    };
    EventCenter.doRemoveCommands = function () {
        if (this._dispatching !== 0) {
            return;
        }
        for (var _i = 0, _a = this._removeCommands; _i < _a.length; _i++) {
            var cmd = _a[_i];
            this.doOff(cmd.eventName, cmd.callback, cmd.targetId);
        }
        this._removeCommands.length = 0;
    };
    EventCenter.emit = function (eventName) {
        var _a;
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var collection = this._listeners[eventName];
        if (!collection)
            return false;
        this._dispatching++;
        for (var targetId in collection) {
            for (var _b = 0, _c = collection[targetId]; _b < _c.length; _b++) {
                var eventInfo = _c[_b];
                (_a = eventInfo.callback).call.apply(_a, __spreadArrays([eventInfo.target], param));
                if (eventInfo.once) {
                    var cmd = new RemoveCommand(eventName, eventInfo.callback, targetId);
                    this._removeCommands.push(cmd);
                }
            }
        }
        this._dispatching--;
        this.doRemoveCommands();
    };
    EventCenter._listeners = cc.js.createMap();
    EventCenter._dispatching = 0;
    EventCenter._removeCommands = [];
    EventCenter._eventPool = new Pool_1.Pool(function () {
        return new EventInfo();
    }, 10);
    return EventCenter;
}());
exports.EventCenter = EventCenter;
// EventCenter.on("Event1", eventCb);
// function eventCb(param) {
//     console.log(param);
// }
// EventCenter.once('EventOnce', eventOnceCb);
// function eventOnceCb(param) {
//     console.log(param);
// }
// EventCenter.emit('Event1', '123');
// EventCenter.emit('EventOnce', '121233');
// EventCenter.off('Event1', eventCb);
// EventCenter.emit('Event1', '123');
// EventCenter.emit('EventOnce', '123');

cc._RF.pop();