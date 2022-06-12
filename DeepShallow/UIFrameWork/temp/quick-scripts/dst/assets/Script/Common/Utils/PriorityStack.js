
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/PriorityStack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1ByaW9yaXR5U3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBa0Q7QUFFbEQsYUFBYTtBQUNiO0lBQUE7UUFDWSxVQUFLLEdBQThCLElBQUksS0FBSyxFQUFzQixDQUFDO1FBQ25FLFVBQUssR0FBRyxDQUFDLENBQUM7SUE0RXRCLENBQUM7SUEzRUcsc0JBQVcsK0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEQsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDSSxJQUFJLFFBQVEsR0FBUSxFQUFFLENBQUM7UUFDdkIsS0FBZSxVQUFVLEVBQVYsS0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLGNBQVUsRUFBVixJQUFVLEVBQUU7WUFBdkIsSUFBTSxDQUFDLFNBQUE7WUFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSw0QkFBSSxHQUFYLFVBQVksQ0FBSSxFQUFFLFFBQW9CO1FBQXBCLHlCQUFBLEVBQUEsWUFBb0I7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBZSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sMkJBQUcsR0FBVjtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVPLCtCQUFPLEdBQWY7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sNkJBQUssR0FBYixVQUFjLENBQVMsRUFBRSxDQUFTO1FBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFHRCxjQUFjO0lBQ1Asa0NBQVUsR0FBakIsVUFBa0IsQ0FBSTtRQUNsQixLQUFlLFVBQVUsRUFBVixLQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTtZQUF2QixJQUFNLENBQUMsU0FBQTtZQUNQLElBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxDQUFJO1FBQ2QsS0FBSSxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxFQUFHLENBQUM7Z0JBQ2QsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0E5RUEsQUE4RUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaW9yaXR5RWxlbWVudCB9IGZyb20gXCIuL1ByaW9yaXR5UXVldWVcIjtcblxuLyoqIOW4puS8mOWFiOe6p+eahOagiCAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpb3JpdHlTdGFjazxUPiB7XG4gICAgcHJpdmF0ZSBzdGFjazogQXJyYXk8UHJpb3JpdHlFbGVtZW50PFQ+PiA9IG5ldyBBcnJheTxQcmlvcml0eUVsZW1lbnQ8VD4+KCk7XG4gICAgcHJpdmF0ZSBfc2l6ZSA9IDA7XG4gICAgcHVibGljIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc3RhY2subGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb3BFUHJpb3JpdHkoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhY2subGVuZ3RoIDw9IDApIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGgtMV0ucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRvcEVsZW1lbnQoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhY2subGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aC0xXS5kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50cygpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzOiBUW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IGUgb2YgdGhpcy5zdGFjaykge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaChlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVzaChlOiBULCBwcmlvcml0eTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2gobmV3IFByaW9yaXR5RWxlbWVudChlLCBwcmlvcml0eSkpO1xuICAgICAgICB0aGlzLl9zaXplICsrO1xuICAgICAgICB0aGlzLl9hZGp1c3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wKCkge1xuICAgICAgICBpZih0aGlzLnN0YWNrLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdGhpcy5fc2l6ZSAtLTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2sucG9wKCkuZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGp1c3QoKSB7XG4gICAgICAgIGZvcihsZXQgaT10aGlzLnN0YWNrLmxlbmd0aC0xOyBpPjA7IGktLSkge1xuICAgICAgICAgICAgaWYodGhpcy5zdGFja1tpXSA8IHRoaXMuc3RhY2tbaS0xXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N3YXAoaSwgaS0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3N3YXAoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuc3RhY2tbYV07XG4gICAgICAgIHRoaXMuc3RhY2tbYV0gPSB0aGlzLnN0YWNrW2JdO1xuICAgICAgICB0aGlzLnN0YWNrW2JdID0gdG1wO1xuICAgIH1cblxuXG4gICAgLyoqIOaYr+WQpuaciei/meS4quWFg+e0oCAqL1xuICAgIHB1YmxpYyBoYXNFbGVtZW50KHQ6IFQpIHtcbiAgICAgICAgZm9yKGNvbnN0IGUgb2YgdGhpcy5zdGFjaykge1xuICAgICAgICAgICAgaWYoZS5kYXRhID09PSB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUodDogVCkge1xuICAgICAgICBmb3IobGV0IGk9dGhpcy5zdGFjay5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YWNrW2ldLmRhdGEgPT09IHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplIC0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59Il19