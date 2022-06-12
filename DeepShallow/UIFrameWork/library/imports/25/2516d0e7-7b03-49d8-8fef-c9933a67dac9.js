"use strict";
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