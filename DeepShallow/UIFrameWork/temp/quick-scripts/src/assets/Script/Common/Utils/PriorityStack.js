"use strict";
cc._RF.push(module, '9ed15uYIzxGna5Bj3+zkuo8', 'PriorityStack');
// Script/Common/Utils/PriorityStack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue_1 = require("./PriorityQueue");
/** 带优先级的栈 */
var PriorityStack = /** @class */ (function () {
    function PriorityStack() {
        this.stack = new Array();
        this._size = 0;
    }
    Object.defineProperty(PriorityStack.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    PriorityStack.prototype.clear = function () {
        this.stack.length = 0;
        this._size = 0;
        return true;
    };
    PriorityStack.prototype.getTopEPriority = function () {
        if (this.stack.length <= 0)
            return -1;
        return this.stack[this.stack.length - 1].priority;
    };
    PriorityStack.prototype.getTopElement = function () {
        if (this.stack.length <= 0)
            return null;
        return this.stack[this.stack.length - 1].data;
    };
    PriorityStack.prototype.getElements = function () {
        var elements = [];
        for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
            var e = _a[_i];
            elements.push(e.data);
        }
        return elements;
    };
    PriorityStack.prototype.push = function (e, priority) {
        if (priority === void 0) { priority = 0; }
        this.stack.push(new PriorityQueue_1.PriorityElement(e, priority));
        this._size++;
        this._adjust();
    };
    PriorityStack.prototype.pop = function () {
        if (this.stack.length <= 0)
            return null;
        this._size--;
        return this.stack.pop().data;
    };
    PriorityStack.prototype._adjust = function () {
        for (var i = this.stack.length - 1; i > 0; i--) {
            if (this.stack[i] < this.stack[i - 1]) {
                this._swap(i, i - 1);
            }
        }
    };
    PriorityStack.prototype._swap = function (a, b) {
        var tmp = this.stack[a];
        this.stack[a] = this.stack[b];
        this.stack[b] = tmp;
    };
    /** 是否有这个元素 */
    PriorityStack.prototype.hasElement = function (t) {
        for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.data === t) {
                return true;
            }
        }
        return false;
    };
    PriorityStack.prototype.remove = function (t) {
        for (var i = this.stack.length - 1; i >= 0; i--) {
            if (this.stack[i].data === t) {
                this.stack.splice(i, 1);
                this._size--;
                return true;
            }
        }
        return false;
    };
    return PriorityStack;
}());
exports.default = PriorityStack;

cc._RF.pop();