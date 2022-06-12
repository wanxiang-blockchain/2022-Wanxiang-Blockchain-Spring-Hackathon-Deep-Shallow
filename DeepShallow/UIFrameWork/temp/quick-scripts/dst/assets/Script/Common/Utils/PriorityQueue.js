
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/PriorityQueue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1ByaW9yaXR5UXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFJSSx5QkFBWSxJQUFPLEVBQUUsUUFBZ0I7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSwwQ0FBZTtBQVU1QjtJQVFJO1FBUFEsVUFBSyxHQUE4QixJQUFJLEtBQUssQ0FBcUIsRUFBRSxDQUFDLENBQUM7UUFDckUsVUFBSyxHQUFXLENBQUMsQ0FBQztJQU8xQixDQUFDO0lBTEQsc0JBQVcsK0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUtELGNBQWM7SUFDUCxrQ0FBVSxHQUFqQixVQUFrQixDQUFJO1FBQ2xCLEtBQWUsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO1lBQXZCLElBQU0sQ0FBQyxTQUFBO1lBQ1AsSUFBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsU0FBUztJQUNGLCtCQUFPLEdBQWQsVUFBZSxDQUFJLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNyQyxJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJ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LElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7aUJBQUs7Z0JBQ0YsQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQy9EO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTCxvQkFBQztBQUFELENBbEdBLEFBa0dDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgZGVuZ2xhbmdcbiAqIOS8mOWFiOmYn+WIl1xuICovXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlFbGVtZW50PFQ+IHtcbiAgICBwdWJsaWMgZGF0YTogVDtcbiAgICBwdWJsaWMgcHJpb3JpdHk6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBULCBwcmlvcml0eTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW9yaXR5UXVldWU8VD4ge1xuICAgIHByaXZhdGUgcXVldWU6IEFycmF5PFByaW9yaXR5RWxlbWVudDxUPj4gPSBuZXcgQXJyYXk8UHJpb3JpdHlFbGVtZW50PFQ+PigzMik7XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgLyoqIOaYr+WQpuaciei/meS4quWFg+e0oCAqL1xuICAgIHB1YmxpYyBoYXNFbGVtZW50KHQ6IFQpIHtcbiAgICAgICAgZm9yKGNvbnN0IGUgb2YgdGhpcy5xdWV1ZSkge1xuICAgICAgICAgICAgaWYoZS5kYXRhID09PSB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiDlhaXpmJ8gKi9cbiAgICBwdWJsaWMgZW5xdWV1ZShlOiBULCBwcmlvcml0eTogbnVtYmVyID0gMCkge1xuICAgICAgICBpZih0aGlzLl9zaXplID4gdGhpcy5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cGFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVldWVbdGhpcy5fc2l6ZSsrXSA9IG5ldyBQcmlvcml0eUVsZW1lbnQoZSwgcHJpb3JpdHkpO1xuICAgICAgICB0aGlzLnVwQWRqdXN0KCk7XG4gICAgfVxuXG4gICAgLyoqIOWHuumYnyAqL1xuICAgIHB1YmxpYyBkZXF1ZXVlKCkge1xuICAgICAgICBpZih0aGlzLl9zaXplIDw9IDApIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5xdWV1ZVswXTtcbiAgICAgICAgdGhpcy5xdWV1ZVswXSA9IHRoaXMucXVldWVbLS10aGlzLl9zaXplXTtcbiAgICAgICAgdGhpcy5kb3duQWRqdXN0KCk7XG4gICAgICAgIHJldHVybiBoZWFkLmRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIH1cbiAgICAvKiog5LiK6LCDLCDlhaXpmJ/ml7bliKTmlq3lhaXpmJ/lhYPntKDkvJjlhYjnuqcgKi9cbiAgICBwcml2YXRlIHVwQWRqdXN0KCkge1xuICAgICAgICBsZXQgY2hpbGRJbmRleCA9IHRoaXMuX3NpemUgLSAxO1xuICAgICAgICBsZXQgcGFyZW50SW5kZXggPSBNYXRoLmZsb29yKGNoaWxkSW5kZXgvMik7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLnF1ZXVlW2NoaWxkSW5kZXhdXG5cbiAgICAgICAgd2hpbGUoY2hpbGRJbmRleCA+IDAgJiYgdG1wLnByaW9yaXR5ID4gdGhpcy5xdWV1ZVtwYXJlbnRJbmRleF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWVbY2hpbGRJbmRleF0gPSB0aGlzLnF1ZXVlW3BhcmVudEluZGV4XTtcbiAgICAgICAgICAgIGNoaWxkSW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICAgICAgICAgIHBhcmVudEluZGV4ID0gTWF0aC5mbG9vcihwYXJlbnRJbmRleC8yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVldWVbY2hpbGRJbmRleF0gPSB0bXA7XG4gICAgfVxuICAgIC8qKiDlh7rpmJ8gKi9cbiAgICBwcml2YXRlIGRvd25BZGp1c3QoKSB7XG4gICAgICAgIGxldCBwYXJlbnRJbmRleCA9IDA7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLnF1ZXVlW3BhcmVudEluZGV4XTtcbiAgICAgICAgbGV0IGNoaWxkSW5kZXggPSAxO1xuICAgICAgICB3aGlsZShjaGlsZEluZGV4IDwgdGhpcy5fc2l6ZSkge1xuICAgICAgICAgICAgaWYoY2hpbGRJbmRleCArIDEgPCB0aGlzLl9zaXplICYmIHRoaXMucXVldWVbY2hpbGRJbmRleCsxXS5wcmlvcml0eSA+IHRoaXMucXVldWVbY2hpbGRJbmRleF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4ICsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodG1wLnByaW9yaXR5ID49IHRoaXMucXVldWVbY2hpbGRJbmRleF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5xdWV1ZVtwYXJlbnRJbmRleF0gPSB0aGlzLnF1ZXVlW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgcGFyZW50SW5kZXggPSBjaGlsZEluZGV4O1xuICAgICAgICAgICAgY2hpbGRJbmRleCA9IDIgKiBjaGlsZEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1ZXVlW3BhcmVudEluZGV4XSA9IHRtcDtcbiAgICB9XG4gICAgLyoqIOaJqeWIlyAqL1xuICAgIHByaXZhdGUgX2V4cGFuZCgpIHtcbiAgICAgICAgbGV0IG5ld1NpemUgPSBNYXRoLnJvdW5kKHRoaXMucXVldWUubGVuZ3RoICogMS4yKSArIDE7XG4gICAgICAgIGNvbnN0IG9sZFF1ZXVlID0gdGhpcy5xdWV1ZTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBBcnJheShuZXdTaXplKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8b2xkUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucXVldWVbaV0gPSBvbGRRdWV1ZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IHMgPSAnJztcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5fc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMucXVldWVbaV0uZGF0YTtcbiAgICAgICAgICAgIGlmKGRhdGEudG9TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBzICs9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzICs9IHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn0iXX0=