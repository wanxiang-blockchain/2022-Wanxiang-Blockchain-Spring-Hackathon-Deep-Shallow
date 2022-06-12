
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/Queue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '146d9Q6AJVLm5Z5V9zs9sHL', 'Queue');
// Script/Common/Utils/Queue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    Queue.prototype.enqueue = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    Queue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Queue.prototype.clear = function () {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Queue;
}());
exports.default = Queue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFLSTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxPQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2xCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxTQUFTLEdBQUcsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUcsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELFNBQVMsR0FBTSxTQUFTLFNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUcsQ0FBQztTQUM3QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0F6REYsQUF5REcsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlPFQ+IHtcbiAgICBwcml2YXRlIGNvdW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBsb3dlc3RDb3VudDogbnVtYmVyO1xuICAgIHByaXZhdGUgaXRlbXM6IGFueTtcbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgIHRoaXMubG93ZXN0Q291bnQgPSAwO1xuICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIH1cbiAgXG4gICAgZW5xdWV1ZShlbGVtZW50OiBUKSB7XG4gICAgICB0aGlzLml0ZW1zW3RoaXMuY291bnRdID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG4gIFxuICAgIGRlcXVldWUoKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXRlbXNbdGhpcy5sb3dlc3RDb3VudF07XG4gICAgICBkZWxldGUgdGhpcy5pdGVtc1t0aGlzLmxvd2VzdENvdW50XTtcbiAgICAgIHRoaXMubG93ZXN0Q291bnQrKztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICBcbiAgICBwZWVrKCkge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmxvd2VzdENvdW50XTtcbiAgICB9XG4gIFxuICAgIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XG4gICAgfVxuICBcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgdGhpcy5sb3dlc3RDb3VudCA9IDA7XG4gICAgfVxuICBcbiAgICBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY291bnQgLSB0aGlzLmxvd2VzdENvdW50O1xuICAgIH1cbiAgXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgbGV0IG9ialN0cmluZyA9IGAke3RoaXMuaXRlbXNbdGhpcy5sb3dlc3RDb3VudF19YDtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxvd2VzdENvdW50ICsgMTsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xuICAgICAgICBvYmpTdHJpbmcgPSBgJHtvYmpTdHJpbmd9LCR7dGhpcy5pdGVtc1tpXX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialN0cmluZztcbiAgICB9XG4gIH0iXX0=