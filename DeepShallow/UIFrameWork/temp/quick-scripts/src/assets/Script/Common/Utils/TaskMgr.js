"use strict";
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