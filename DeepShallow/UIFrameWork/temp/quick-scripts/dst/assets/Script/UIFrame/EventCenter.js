
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/EventCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9FdmVudENlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQW1EO0FBRW5EO0lBQUE7SUFnQkEsQ0FBQztJQVhHLHdCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLFFBQWtCLEVBQUUsTUFBYyxFQUFFLElBQWE7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSw4QkFBUztBQWtCdEI7SUFLSSx1QkFBWSxTQUFpQixFQUFFLFFBQWtCLEVBQUUsUUFBZ0I7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBUyx3Q0FBd0M7QUFDaEU7SUFBQTtJQXNHQSxDQUFDO0lBNUZpQixjQUFFLEdBQWhCLFVBQWlCLFNBQWlCLEVBQUUsUUFBa0IsRUFBRSxNQUF1QixFQUFFLElBQVk7UUFBckMsdUJBQUEsRUFBQSxrQkFBdUI7UUFBRSxxQkFBQSxFQUFBLFlBQVk7UUFDekYsTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUM7UUFDeEIs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QUFJLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQThGWCxrQkFBQztDQXRHRCxBQXNHQyxJQUFBO0FBdEdZLGtDQUFXO0FBeUd4QixxQ0FBcUM7QUFFckMsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQixJQUFJO0FBRUosOENBQThDO0FBRTlDLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsSUFBSTtBQUVKLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFFM0Msc0NBQXNDO0FBRXRDLHFDQUFxQztBQUNyQyx3Q0FBd0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sLCBJUG9vbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbHMvUG9vbFwiO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRJbmZvIGltcGxlbWVudHMgSVBvb2wge1xuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBvbmNlOiBib29sZWFuO1xuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbmNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdChjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogT2JqZWN0LCBvbmNlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub25jZSA9IG9uY2U7XG4gICAgfVxufVxuXG5jbGFzcyBSZW1vdmVDb21tYW5kIHtcbiAgICBwdWJsaWMgZXZlbnROYW1lOnN0cmluZztcbiAgICBwdWJsaWMgdGFyZ2V0SWQ6c3RyaW5nO1xuICAgIHB1YmxpYyBjYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICB9XG59XG5cbmxldCBpZFNlZWQgPSAxOyAgICAgICAgIC8vIOi/memHjOacieS4gOS4quWwj+e8uumZt+WwseaYr2lkU2VlZOacieacgOWkp+WAvCxOdW1iZXIuTUFYX1ZBTFVFXG5leHBvcnQgY2xhc3MgRXZlbnRDZW50ZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2xpc3RlbmVyczoge1tldmVudE5hbWU6IHN0cmluZ106IHtbaWQ6IHN0cmluZ106IEFycmF5PEV2ZW50SW5mbz59fSA9IGNjLmpzLmNyZWF0ZU1hcCgpO1xuICAgIHByaXZhdGUgc3RhdGljIF9kaXNwYXRjaGluZyA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3JlbW92ZUNvbW1hbmRzIDogUmVtb3ZlQ29tbWFuZFtdID0gW107XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZXZlbnRQb29sOiBQb29sPEV2ZW50SW5mbz4gPSBuZXcgUG9vbDxFdmVudEluZm8+KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEluZm8oKTtcbiAgICB9LCAxMCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogYW55ID0gdW5kZWZpbmVkLCBvbmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XG4gICAgICAgIGxldCB0YXJnZXRJZDogc3RyaW5nID0gdGFyZ2V0Wyd1dWlkJ10gfHwgdGFyZ2V0WydpZCddO1xuICAgICAgICBpZih0YXJnZXRJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YXJnZXRbJ3V1aWQnXSA9IHRhcmdldElkID0gJycgKyBpZFNlZWQrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQnlJZChldmVudE5hbWUsIHRhcmdldElkLCB0YXJnZXQsIGNhbGxiYWNrLCBvbmNlKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBvbmNlKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogYW55ID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBjYWxsYmFjaywgdGFyZ2V0LCB0cnVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgb25CeUlkKGV2ZW50TmFtZTogc3RyaW5nLCB0YXJnZXRJZDogc3RyaW5nLCB0YXJnZXQ6IGFueSwgY2I6IEZ1bmN0aW9uLCBvbmNlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV07XG4gICAgICAgIGlmKCFjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXZlbnRzID0gY29sbGVjdGlvblt0YXJnZXRJZF07XG4gICAgICAgIGlmKCFldmVudHMpIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IGNvbGxlY3Rpb25bdGFyZ2V0SWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV2ZW50SW5mbyA9IHRoaXMuX2V2ZW50UG9vbC5hbGxvYygpO1xuICAgICAgICBldmVudEluZm8uaW5pdChjYiwgdGFyZ2V0LCBvbmNlKTtcbiAgICAgICAgZXZlbnRzLnB1c2goZXZlbnRJbmZvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcbiAgICAgICAgbGV0IHRhcmdldElkID0gdGFyZ2V0Wyd1dWlkJ10gfHwgdGFyZ2V0WydpZCddO1xuICAgICAgICBpZighdGFyZ2V0SWQpIHJldHVybiA7XG4gICAgICAgIHRoaXMub2ZmQnlJZChldmVudE5hbWUsIGNhbGxiYWNrLCB0YXJnZXRJZCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgdGFyZ2V0T2ZmKHRhcmdldDogYW55KSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCB0aGlzO1xuICAgICAgICBsZXQgdGFyZ2V0SWQgPSB0YXJnZXRbJ3V1aWQnXSB8fCB0YXJnZXRbJ2lkJ107XG4gICAgICAgIGlmKCF0YXJnZXRJZCkgcmV0dXJuIDtcbiAgICAgICAgZm9yKGxldCBldmVudCBpbiB0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICAgIGlmKGNvbGxlY3Rpb25bdGFyZ2V0SWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sbGVjdGlvblt0YXJnZXRJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgb2ZmQnlJZChldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXRJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuX2Rpc3BhdGNoaW5nID4gMCkge1xuICAgICAgICAgICAgbGV0IGNtZCA9IG5ldyBSZW1vdmVDb21tYW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHRhcmdldElkKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNvbW1hbmRzLnB1c2goY21kKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb09mZihldmVudE5hbWUsIGNhbGxiYWNrLCB0YXJnZXRJZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgZG9PZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0SWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgICAgICBpZighY29sbGVjdGlvbikgcmV0dXJuIDtcbiAgICAgICAgbGV0IGV2ZW50cyA9IGNvbGxlY3Rpb25bdGFyZ2V0SWRdO1xuICAgICAgICBpZighZXZlbnRzKSByZXR1cm4gO1xuICAgICAgICBmb3IobGV0IGk9ZXZlbnRzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICAgIGlmKGV2ZW50c1tpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBldmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bdGFyZ2V0SWRdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW3RhcmdldElkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGRvUmVtb3ZlQ29tbWFuZHMoKSB7XG4gICAgICAgIGlmKHRoaXMuX2Rpc3BhdGNoaW5nICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBjbWQgb2YgdGhpcy5fcmVtb3ZlQ29tbWFuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuZG9PZmYoY21kLmV2ZW50TmFtZSwgY21kLmNhbGxiYWNrLCBjbWQudGFyZ2V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlbW92ZUNvbW1hbmRzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgZW1pdChldmVudE5hbWU6IHN0cmluZywgLi4ucGFyYW06IGFueVtdKSB7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV07XG4gICAgICAgIGlmKCFjb2xsZWN0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoaW5nICsrO1xuICAgICAgICBmb3IobGV0IHRhcmdldElkIGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIGZvcihsZXQgZXZlbnRJbmZvIG9mIGNvbGxlY3Rpb25bdGFyZ2V0SWRdKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRJbmZvLmNhbGxiYWNrLmNhbGwoZXZlbnRJbmZvLnRhcmdldCwgLi4ucGFyYW0pO1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50SW5mby5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbWQgPSBuZXcgUmVtb3ZlQ29tbWFuZChldmVudE5hbWUsIGV2ZW50SW5mby5jYWxsYmFjaywgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDb21tYW5kcy5wdXNoKGNtZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoaW5nIC0tO1xuICAgICAgICB0aGlzLmRvUmVtb3ZlQ29tbWFuZHMoKTtcbiAgICB9XG59XG5cblxuLy8gRXZlbnRDZW50ZXIub24oXCJFdmVudDFcIiwgZXZlbnRDYik7XG5cbi8vIGZ1bmN0aW9uIGV2ZW50Q2IocGFyYW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhwYXJhbSk7XG4vLyB9XG5cbi8vIEV2ZW50Q2VudGVyLm9uY2UoJ0V2ZW50T25jZScsIGV2ZW50T25jZUNiKTtcblxuLy8gZnVuY3Rpb24gZXZlbnRPbmNlQ2IocGFyYW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhwYXJhbSk7XG4vLyB9XG5cbi8vIEV2ZW50Q2VudGVyLmVtaXQoJ0V2ZW50MScsICcxMjMnKTtcbi8vIEV2ZW50Q2VudGVyLmVtaXQoJ0V2ZW50T25jZScsICcxMjEyMzMnKTtcblxuLy8gRXZlbnRDZW50ZXIub2ZmKCdFdmVudDEnLCBldmVudENiKTtcblxuLy8gRXZlbnRDZW50ZXIuZW1pdCgnRXZlbnQxJywgJzEyMycpO1xuLy8gRXZlbnRDZW50ZXIuZW1pdCgnRXZlbnRPbmNlJywgJzEyMycpOyJdfQ==