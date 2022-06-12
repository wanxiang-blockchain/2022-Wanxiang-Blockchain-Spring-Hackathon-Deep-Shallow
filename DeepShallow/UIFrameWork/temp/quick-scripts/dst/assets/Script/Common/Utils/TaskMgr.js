
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/TaskMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a001c6UsFtNA5aXLrNhEDJy', 'TaskMgr');
// Script/Common/Utils/TaskMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandType = void 0;
var PriorityQueue_1 = require("./PriorityQueue");
/**
 * author: denglang
 * desc: 一个命令队列，
 */
var CommandType;
(function (CommandType) {
    // 自定义命令类型
})(CommandType = exports.CommandType || (exports.CommandType = {}));
var Command = /** @class */ (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
/** 命令队列 */
var TaskMgr = /** @class */ (function () {
    function TaskMgr() {
        this._cmdMap = cc.js.createMap();
        this._debugHistory = [];
        this._debug = false;
    }
    Object.defineProperty(TaskMgr, "inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new TaskMgr();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    TaskMgr.prototype.setDebug = function (debug) {
        if (debug === void 0) { debug = true; }
        this._debug = debug;
    };
    /**
     * @param command 命令
     * @param pIdx 优先级 数值越大优先级越高  默认是0
     */
    TaskMgr.prototype.pushCommand = function (key, command, pIdx) {
        if (pIdx === void 0) { pIdx = 0; }
        if (this._debug) {
            this._debugHistory.push(command);
        }
        var cmdQueue = this._cmdMap[key];
        if (!cmdQueue) {
            cmdQueue = this._cmdMap[key] = new PriorityQueue_1.default();
        }
        cmdQueue.enqueue(command, pIdx);
    };
    /** 获得一个命令 */
    TaskMgr.prototype.popCommand = function (key) {
        var cmdQueue = this._cmdMap[key];
        if (!cmdQueue)
            return null;
        return cmdQueue.dequeue();
    };
    /** 是否有这个命令 */
    TaskMgr.prototype.hasCommand = function (ele, key) {
        if (key) {
            var cmdQueue = this._cmdMap[key];
            return cmdQueue.hasElement(ele);
        }
        for (var key_1 in this._cmdMap) {
            if (this._cmdMap[key_1].hasElement(ele))
                return true;
        }
        return false;
    };
    TaskMgr._instance = null;
    return TaskMgr;
}());
exports.default = TaskMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1Rhc2tNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRTVDOzs7R0FHRztBQUNILElBQVksV0FFWDtBQUZELFdBQVksV0FBVztJQUNuQixVQUFVO0FBQ2QsQ0FBQyxFQUZXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBRXRCO0FBQ0Q7SUFBQTtJQUdBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSwwQkFBTztBQUtwQixXQUFXO0FBQ1g7SUFBQTtRQVVZLFlBQU8sR0FBMkMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRSxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFbkMsV0FBTSxHQUFHLEtBQUssQ0FBQztJQXNDM0IsQ0FBQztJQWhERyxzQkFBa0IsZUFBSTthQUF0QjtZQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7YUFDbEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFNTSwwQkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFBWixzQkFBQSxFQUFBLFlBQVk7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxPQUFnQixFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsUUFBZ0I7UUFDOUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDVixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLHVCQUFhLEVBQVcsQ0FBQztTQUMvRDtRQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhO0lBQ04sNEJBQVUsR0FBakIsVUFBa0IsR0FBVztRQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUcsQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDMUIsT0FBTyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWM7SUFDUCw0QkFBVSxHQUFqQixVQUFrQixHQUFZLEVBQUUsR0FBWTtRQUN4QyxJQUFHLEdBQUcsRUFBRTtZQUNKLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsS0FBSSxJQUFJLEtBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWhEYyxpQkFBUyxHQUFZLElBQUksQ0FBQztJQWlEN0MsY0FBQztDQW5ERCxBQW1EQyxJQUFBO2tCQW5Eb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlvcml0eVF1ZXVlIGZyb20gXCIuL1ByaW9yaXR5UXVldWVcIjtcblxuLyoqXG4gKiBhdXRob3I6IGRlbmdsYW5nXG4gKiBkZXNjOiDkuIDkuKrlkb3ku6TpmJ/liJfvvIwgXG4gKi9cbmV4cG9ydCBlbnVtIENvbW1hbmRUeXBlIHtcbiAgICAvLyDoh6rlrprkuYnlkb3ku6Tnsbvlnotcbn1cbmV4cG9ydCBjbGFzcyBDb21tYW5kIHtcbiAgICB0eXBlOiBDb21tYW5kVHlwZTtcbiAgICBkYXRhOiBhbnk7XG59XG5cbi8qKiDlkb3ku6TpmJ/liJcgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tNZ3Ige1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUYXNrTWdyID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCkge1xuICAgICAgICBpZighdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFRhc2tNZ3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY21kTWFwOiB7W2tleTpzdHJpbmddOiBQcmlvcml0eVF1ZXVlPENvbW1hbmQ+fSA9IGNjLmpzLmNyZWF0ZU1hcCgpOyBcbiAgICBwcml2YXRlIF9kZWJ1Z0hpc3Rvcnk6IEFycmF5PENvbW1hbmQ+ID0gW107XG5cbiAgICBwcml2YXRlIF9kZWJ1ZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBzZXREZWJ1ZyhkZWJ1ZyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZGVidWcgPSBkZWJ1ZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29tbWFuZCDlkb3ku6RcbiAgICAgKiBAcGFyYW0gcElkeCDkvJjlhYjnuqcg5pWw5YC86LaK5aSn5LyY5YWI57qn6LaK6auYICDpu5jorqTmmK8wXG4gICAgICovXG4gICAgcHVibGljIHB1c2hDb21tYW5kKGtleTogc3RyaW5nLCBjb21tYW5kOiBDb21tYW5kLCBwSWR4OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmKHRoaXMuX2RlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWJ1Z0hpc3RvcnkucHVzaChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY21kUXVldWUgPSB0aGlzLl9jbWRNYXBba2V5XTtcbiAgICAgICAgaWYoIWNtZFF1ZXVlKSB7XG4gICAgICAgICAgICBjbWRRdWV1ZSA9IHRoaXMuX2NtZE1hcFtrZXldID0gbmV3IFByaW9yaXR5UXVldWU8Q29tbWFuZD4oKTtcbiAgICAgICAgfVxuICAgICAgICBjbWRRdWV1ZS5lbnF1ZXVlKGNvbW1hbmQsIHBJZHgpO1xuICAgIH1cblxuICAgIC8qKiDojrflvpfkuIDkuKrlkb3ku6QgKi9cbiAgICBwdWJsaWMgcG9wQ29tbWFuZChrZXk6IHN0cmluZykge1xuICAgICAgICBsZXQgY21kUXVldWUgPSB0aGlzLl9jbWRNYXBba2V5XTtcbiAgICAgICAgaWYoIWNtZFF1ZXVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNtZFF1ZXVlLmRlcXVldWUoKTtcbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5pyJ6L+Z5Liq5ZG95LukICovXG4gICAgcHVibGljIGhhc0NvbW1hbmQoZWxlOiBDb21tYW5kLCBrZXk/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoa2V5KSB7XG4gICAgICAgICAgICBsZXQgY21kUXVldWUgPSB0aGlzLl9jbWRNYXBba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBjbWRRdWV1ZS5oYXNFbGVtZW50KGVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5fY21kTWFwKSB7XG4gICAgICAgICAgICBpZih0aGlzLl9jbWRNYXBba2V5XS5oYXNFbGVtZW50KGVsZSkpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=