
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/LRUCache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2516dDnewNJ2I/vyZM6Z9rJ', 'LRUCache');
// Script/Common/Utils/LRUCache.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
var Pool_1 = require("./Pool");
var LRUNode = /** @class */ (function () {
    function LRUNode(value, next) {
        this.value = value;
        this.next = next;
    }
    LRUNode.prototype.use = function (value, next) {
        this.value = value;
        this.next = next;
    };
    LRUNode.prototype.free = function () {
        this.value = '';
        this.next = null;
    };
    return LRUNode;
}());
/**
 * @author honmono
 * @description 为UIManager写的 lru cache控制.
 */
var LRUCache = /** @class */ (function () {
    function LRUCache(maxSize) {
        this.nodePool = new Pool_1.Pool(function () {
            return new LRUNode('', null);
        }, 3);
        this.maxSize = maxSize;
        this.head = new LRUNode('head', null);
        this.size = 0;
    }
    LRUCache.prototype.remove = function (value) {
        var node = this.has(value);
        node && this.removeNode(node);
    };
    LRUCache.prototype.put = function (value) {
        if (this.size <= 0) {
            this.last = this.nodePool.alloc(value, null);
            this.last.prev = this.head;
            this.head.next = this.last;
            this.size = 1;
            return;
        }
        var node = this.has(value);
        if (!node) { // 不存在, 直接加到最前面
            node = this.nodePool.alloc(value, null);
            this.addHead(node);
            return;
        }
        // 存在, 把这个node放在最前面
        if (this.last == node) { // 如果当前node就是last, 那么更换last
            this.last = node.prev;
        }
        this.removeNode(node);
        this.addHead(node);
    };
    LRUCache.prototype.needDelete = function () {
        return this.size > this.maxSize;
    };
    LRUCache.prototype.deleteLastNode = function () {
        var value = this.last.value;
        this.removeNode(this.last);
        this.nodePool.free(this.last);
        this.last = this.last.prev;
        return value;
    };
    LRUCache.prototype.removeNode = function (node) {
        node.prev.next = node.next;
        if (node.next) {
            node.next.prev = node.prev;
        }
        this.size--;
    };
    /** 向头部插入一个node */
    LRUCache.prototype.addHead = function (node) {
        node.next = this.head.next;
        if (node.next) {
            node.next.prev = node;
        }
        this.head.next = node;
        node.prev = this.head;
        this.size++;
    };
    LRUCache.prototype.has = function (value) {
        var next = this.head.next;
        while (next) {
            if (next.value == value) {
                return next;
            }
            next = next.next;
        }
        return null;
    };
    LRUCache.prototype.toString = function () {
        var str = '';
        var next = this.head.next;
        while (next) {
            str += next.value + " ";
            next = next.next;
        }
        return str;
    };
    return LRUCache;
}());
exports.LRUCache = LRUCache;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0xSVUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxQztBQUVyQztJQUlJLGlCQUFZLEtBQWEsRUFBRSxJQUFhO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksS0FBYSxFQUFFLElBQWE7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wsY0FBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFHRDs7O0dBR0c7QUFDSDtJQVVJLGtCQUFZLE9BQWU7UUFIbkIsYUFBUSxHQUFrQixJQUFJLFdBQUksQ0FBVTtZQUNoRCxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0seUJBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLE9BQVE7U0FDWDtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBRyxDQUFDLElBQUksRUFBRSxFQUFNLGVBQWU7WUFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLE9BQVE7U0FDWDtRQUNELG1CQUFtQjtRQUNuQixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsMkJBQTJCO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sNkJBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBRU0saUNBQWMsR0FBckI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sNkJBQVUsR0FBbEIsVUFBbUIsSUFBYTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGtCQUFrQjtJQUNWLDBCQUFPLEdBQWYsVUFBZ0IsSUFBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxzQkFBRyxHQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixPQUFNLElBQUksRUFBRTtZQUNSLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsT0FBTSxJQUFJLEVBQUU7WUFDUixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQb29sLCBQb29sIH0gZnJvbSBcIi4vUG9vbFwiO1xuXG5jbGFzcyBMUlVOb2RlIGltcGxlbWVudHMgSVBvb2wge1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgcHJldjogTFJVTm9kZTsgICAgICAgICAgLy8g5YmN6Z2i55qEXG4gICAgbmV4dDogTFJVTm9kZTsgICAgICAgICAgLy8g5ZCO6Z2i55qEXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbmV4dDogTFJVTm9kZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdXNlKHZhbHVlOiBzdHJpbmcsIG5leHQ6IExSVU5vZGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBAYXV0aG9yIGhvbm1vbm9cbiAqIEBkZXNjcmlwdGlvbiDkuLpVSU1hbmFnZXLlhpnnmoQgbHJ1IGNhY2hl5o6n5Yi2LlxuICovXG5leHBvcnQgY2xhc3MgTFJVQ2FjaGUge1xuICAgIHB1YmxpYyBtYXhTaXplOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGhlYWQ6IExSVU5vZGU7XG4gICAgcHJpdmF0ZSBsYXN0OiBMUlVOb2RlO1xuICAgIHByaXZhdGUgc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBub2RlUG9vbDogUG9vbDxMUlVOb2RlPiA9IG5ldyBQb29sPExSVU5vZGU+KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBMUlVOb2RlKCcnLCBudWxsKTtcbiAgICB9LCAzKTtcbiAgICBjb25zdHJ1Y3RvcihtYXhTaXplOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3IExSVU5vZGUoJ2hlYWQnLCBudWxsKTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmhhcyh2YWx1ZSk7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5yZW1vdmVOb2RlKG5vZGUpO1xuICAgIH1cbiAgICAgICAgXG4gICAgcHVibGljIHB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuc2l6ZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLm5vZGVQb29sLmFsbG9jKHZhbHVlLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMubGFzdC5wcmV2ID0gdGhpcy5oZWFkO1xuICAgICAgICAgICAgdGhpcy5oZWFkLm5leHQgPSB0aGlzLmxhc3Q7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSAxO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaGFzKHZhbHVlKTtcbiAgICAgICAgaWYoIW5vZGUpIHsgICAgIC8vIOS4jeWtmOWcqCwg55u05o6l5Yqg5Yiw5pyA5YmN6Z2iXG4gICAgICAgICAgICBub2RlID0gdGhpcy5ub2RlUG9vbC5hbGxvYyh2YWx1ZSwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZEhlYWQobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWtmOWcqCwg5oqK6L+Z5Liqbm9kZeaUvuWcqOacgOWJjemdolxuICAgICAgICBpZih0aGlzLmxhc3QgPT0gbm9kZSkgeyAvLyDlpoLmnpzlvZPliY1ub2Rl5bCx5pivbGFzdCwg6YKj5LmI5pu05o2ibGFzdFxuICAgICAgICAgICAgdGhpcy5sYXN0ID0gbm9kZS5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5hZGRIZWFkKG5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZWVkRGVsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplID4gdGhpcy5tYXhTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVMYXN0Tm9kZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5sYXN0LnZhbHVlO1xuICAgICAgICB0aGlzLnJlbW92ZU5vZGUodGhpcy5sYXN0KTtcbiAgICAgICAgdGhpcy5ub2RlUG9vbC5mcmVlKHRoaXMubGFzdCk7XG4gICAgICAgIHRoaXMubGFzdCA9IHRoaXMubGFzdC5wcmV2O1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVOb2RlKG5vZGU6IExSVU5vZGUpIHtcbiAgICAgICAgbm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgIGlmKG5vZGUubmV4dCkge1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBub2RlLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaXplIC0tO1xuICAgIH1cblxuICAgIC8qKiDlkJHlpLTpg6jmj5LlhaXkuIDkuKpub2RlICovXG4gICAgcHJpdmF0ZSBhZGRIZWFkKG5vZGU6IExSVU5vZGUpIHtcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIGlmKG5vZGUubmV4dCkge1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGVhZC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLnNpemUgKys7XG4gICAgfVxuXG4gICAgcHVibGljIGhhcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIHdoaWxlKG5leHQpIHtcbiAgICAgICAgICAgIGlmKG5leHQudmFsdWUgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIHdoaWxlKG5leHQpIHtcbiAgICAgICAgICAgIHN0ciArPSBuZXh0LnZhbHVlICsgXCIgXCI7XG4gICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufSJdfQ==