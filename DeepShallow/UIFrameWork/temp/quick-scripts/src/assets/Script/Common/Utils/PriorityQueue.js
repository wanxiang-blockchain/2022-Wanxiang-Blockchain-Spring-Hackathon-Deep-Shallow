"use strict";
cc._RF.push(module, 'f2318nn5GJChLoRevUhhLkg', 'PriorityQueue');
// Script/Common/Utils/PriorityQueue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityElement = void 0;
/**
 * @author denglang
 * 优先队列
 */
var PriorityElement = /** @class */ (function () {
    function PriorityElement(data, priority) {
        this.data = data;
        this.priority = priority;
    }
    return PriorityElement;
}());
exports.PriorityElement = PriorityElement;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = new Array(32);
        this._size = 0;
    }
    Object.defineProperty(PriorityQueue.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    /** 是否有这个元素 */
    PriorityQueue.prototype.hasElement = function (t) {
        for (var _i = 0, _a = this.queue; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.data === t) {
                return true;
            }
        }
        return false;
    };
    /** 入队 */
    PriorityQueue.prototype.enqueue = function (e, priority) {
        if (priority === void 0) { priority = 0; }
        if (this._size > this.queue.length) {
            this._expand();
        }
        this.queue[this._size++] = new PriorityElement(e, priority);
        this.upAdjust();
    };
    /** 出队 */
    PriorityQueue.prototype.dequeue = function () {
        if (this._size <= 0)
            return null;
        var head = this.queue[0];
        this.queue[0] = this.queue[--this._size];
        this.downAdjust();
        return head.data;
    };
    PriorityQueue.prototype.clear = function () {
        this.queue = [];
        this._size = 0;
    };
    /** 上调, 入队时判断入队元素优先级 */
    PriorityQueue.prototype.upAdjust = function () {
        var childIndex = this._size - 1;
        var parentIndex = Math.floor(childIndex / 2);
        var tmp = this.queue[childIndex];
        while (childIndex > 0 && tmp.priority > this.queue[parentIndex].priority) {
            this.queue[childIndex] = this.queue[parentIndex];
            childIndex = parentIndex;
            parentIndex = Math.floor(parentIndex / 2);
        }
        this.queue[childIndex] = tmp;
    };
    /** 出队 */
    PriorityQueue.prototype.downAdjust = function () {
        var parentIndex = 0;
        var tmp = this.queue[parentIndex];
        var childIndex = 1;
        while (childIndex < this._size) {
            if (childIndex + 1 < this._size && this.queue[childIndex + 1].priority > this.queue[childIndex].priority) {
                childIndex++;
            }
            if (tmp.priority >= this.queue[childIndex].priority) {
                break;
            }
            this.queue[parentIndex] = this.queue[childIndex];
            parentIndex = childIndex;
            childIndex = 2 * childIndex + 1;
        }
        this.queue[parentIndex] = tmp;
    };
    /** 扩列 */
    PriorityQueue.prototype._expand = function () {
        var newSize = Math.round(this.queue.length * 1.2) + 1;
        var oldQueue = this.queue;
        this.queue = new Array(newSize);
        for (var i = 0; i < oldQueue.length; i++) {
            this.queue[i] = oldQueue[i];
        }
    };
    PriorityQueue.prototype.toString = function () {
        var s = '';
        for (var i = 0; i < this._size; i++) {
            var data = this.queue[i].data;
            if (data.toString) {
                s += data.toString();
            }
            else {
                s += typeof data === "object" ? JSON.stringify(data) : data;
            }
        }
        return s;
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;

cc._RF.pop();