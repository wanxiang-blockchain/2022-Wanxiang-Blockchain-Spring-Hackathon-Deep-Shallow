
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/QuadTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97092zpFuhN/oWHIMkF7jei', 'QuadTree');
// Script/Common/Components/QuadTree.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bound = void 0;
var Bound = /** @class */ (function () {
    function Bound(x, y, width, height, uid) {
        if (uid === void 0) { uid = ""; }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.uid = uid;
    }
    return Bound;
}());
exports.Bound = Bound;
/**
 * 四叉树
 */
var Quadtree = /** @class */ (function () {
    function Quadtree(bound, maxObjects, maxLevels, level) {
        this._maxObject = 10;
        this._maxLevel = 4;
        this._level = 0;
        this._bound = null;
        this._objects = [];
        this._nodes = [];
        this._bound = bound;
        this._maxObject = maxObjects || this._maxObject;
        this._maxLevel = maxLevels || this._maxLevel;
        this._level = level || this._level;
    }
    /** 切 */
    Quadtree.prototype.split = function () {
        var nextLevel = this._level + 1;
        var subWidth = this._bound.width / 2;
        var subHeight = this._bound.height / 2;
        var x = this._bound.x;
        var y = this._bound.y;
        //top right node
        this._nodes[0] = new Quadtree({
            uid: nextLevel + "-top-right",
            x: x + subWidth,
            y: y,
            width: subWidth,
            height: subHeight
        }, this._maxObject, this._maxLevel, nextLevel);
        //top left node
        this._nodes[1] = new Quadtree({
            uid: nextLevel + "-top-left",
            x: x,
            y: y,
            width: subWidth,
            height: subHeight
        }, this._maxObject, this._maxLevel, nextLevel);
        //bottom left node
        this._nodes[2] = new Quadtree({
            uid: nextLevel + "-bottom-left",
            x: x,
            y: y + subHeight,
            width: subWidth,
            height: subHeight
        }, this._maxObject, this._maxLevel, nextLevel);
        //bottom right node
        this._nodes[3] = new Quadtree({
            uid: nextLevel + "-bottom-right",
            x: x + subWidth,
            y: y + subHeight,
            width: subWidth,
            height: subHeight
        }, this._maxObject, this._maxLevel, nextLevel);
    };
    /**  */
    Quadtree.prototype.getIndex = function (bound) {
        var indexes = [], verticalMidpoint = this._bound.x + (this._bound.width / 2), horizontalMidpoint = this._bound.y + (this._bound.height / 2);
        var startIsNorth = bound.y < horizontalMidpoint, startIsWest = bound.x < verticalMidpoint, endIsEast = bound.x + bound.width > verticalMidpoint, endIsSouth = bound.y + bound.height > horizontalMidpoint;
        //top-right quad
        if (startIsNorth && endIsEast) {
            indexes.push(0);
        }
        //top-left quad
        if (startIsWest && startIsNorth) {
            indexes.push(1);
        }
        //bottom-left quad
        if (startIsWest && endIsSouth) {
            indexes.push(2);
        }
        //bottom-right quad
        if (endIsEast && endIsSouth) {
            indexes.push(3);
        }
        return indexes;
    };
    /** 插入一个bound */
    Quadtree.prototype.insert = function (bound) {
        var i = 0;
        var indexes = [];
        //if we have subnodes, call insert on matching subnodes
        if (this._nodes.length) {
            indexes = this.getIndex(bound);
            for (i = 0; i < indexes.length; i++) {
                this._nodes[indexes[i]].insert(bound);
            }
            return;
        }
        //otherwise, store object here
        this._objects.push(bound);
        //max_objects reached
        if (this._objects.length > this._maxObject && this._level < this._maxLevel) {
            //split if we don't already have subnodes
            if (!this._nodes.length) {
                this.split();
            }
            //add all objects to their corresponding subnode
            for (i = 0; i < this._objects.length; i++) {
                indexes = this.getIndex(this._objects[i]);
                for (var k = 0; k < indexes.length; k++) {
                    this._nodes[indexes[k]].insert(this._objects[i]);
                }
            }
            //clean up this node
            this._objects = [];
        }
    };
    Quadtree.prototype.retrieve = function (bound) {
        var indexes = this.getIndex(bound), returnObjects = this._objects;
        //if we have subnodes, retrieve their objects
        if (this._nodes.length) {
            for (var i = 0; i < indexes.length; i++) {
                returnObjects = returnObjects.concat(this._nodes[indexes[i]].retrieve(bound));
            }
        }
        //remove duplicates
        returnObjects = returnObjects.filter(function (item, index) {
            return returnObjects.indexOf(item) >= index;
        });
        return returnObjects;
    };
    Quadtree.prototype.clear = function () {
        this._objects = [];
        for (var i = 0; i < this._nodes.length; i++) {
            if (this._nodes.length) {
                this._nodes[i].clear();
            }
        }
        this._nodes = [];
    };
    return Quadtree;
}());
exports.default = Quadtree;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvUXVhZFRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFPSSxlQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxHQUFRO1FBQVIsb0JBQUEsRUFBQSxRQUFRO1FBQ3JFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0wsWUFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksc0JBQUs7QUFlbEI7O0dBRUc7QUFDSDtJQVFJLGtCQUFZLEtBQVksRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsS0FBYztRQVB6RSxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFVLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7SUFDRCx3QkFBSyxHQUFaO1FBQ0ksSUFBSSxTQUFTLEdB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QUM7YUFDakY7U0FDSjtRQUVELG1CQUFtQjtRQUNuQixhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQUksRUFBRSxLQUFLO1lBQ3JELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRU0sd0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ047UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0wsZUFBQztBQUFELENBbEtBLEFBa0tDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm91bmQge1xuICAgIHVpZD86IHN0cmluZztcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHVpZCA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgfVxufVxuLyoqXG4gKiDlm5vlj4nmoJFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVhZHRyZWUge1xuICAgIHByaXZhdGUgX21heE9iamVjdCA9IDEwO1xuICAgIHByaXZhdGUgX21heExldmVsID0gNDtcbiAgICBwcml2YXRlIF9sZXZlbCA9IDA7XG4gICAgcHJpdmF0ZSBfYm91bmQ6IEJvdW5kID0gbnVsbDtcbiAgICBwcml2YXRlIF9vYmplY3RzOiBCb3VuZFtdID0gW107XG4gICAgcHJpdmF0ZSBfbm9kZXM6IFF1YWR0cmVlW10gPSBbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihib3VuZDogQm91bmQsIG1heE9iamVjdHM/OiBudW1iZXIsIG1heExldmVscz86IG51bWJlciwgbGV2ZWw/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmQgPSBib3VuZDtcbiAgICAgICAgdGhpcy5fbWF4T2JqZWN0ID0gbWF4T2JqZWN0cyB8fCB0aGlzLl9tYXhPYmplY3Q7XG4gICAgICAgIHRoaXMuX21heExldmVsID0gbWF4TGV2ZWxzIHx8IHRoaXMuX21heExldmVsO1xuICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsIHx8IHRoaXMuX2xldmVsO1xuICAgIH1cblxuICAgIC8qKiDliIcgKi9cbiAgICBwdWJsaWMgc3BsaXQoKSB7XG4gICAgICAgIGxldCBuZXh0TGV2ZWwgICA9IHRoaXMuX2xldmVsICsgMTtcbiAgICAgICAgbGV0IHN1YldpZHRoICAgID0gdGhpcy5fYm91bmQud2lkdGgvMjtcbiAgICAgICAgbGV0IHN1YkhlaWdodCAgID0gdGhpcy5fYm91bmQuaGVpZ2h0LzI7XG4gICAgICAgIGxldCB4ICAgICAgICAgICA9IHRoaXMuX2JvdW5kLng7XG4gICAgICAgIGxldCB5ICAgICAgICAgICA9IHRoaXMuX2JvdW5kLnk7XG4gXG4gICAgICAgIC8vdG9wIHJpZ2h0IG5vZGVcbiAgICAgICAgdGhpcy5fbm9kZXNbMF0gPSBuZXcgUXVhZHRyZWUoe1xuICAgICAgICAgICAgdWlkOiBgJHtuZXh0TGV2ZWx9LXRvcC1yaWdodGAsXG4gICAgICAgICAgICB4OiB4K3N1YldpZHRoLFxuICAgICAgICAgICAgeTogeSwgXG4gICAgICAgICAgICB3aWR0aDogc3ViV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHN1YkhlaWdodFxuICAgICAgICB9LCB0aGlzLl9tYXhPYmplY3QsIHRoaXMuX21heExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgICBcbiAgICAgICAgLy90b3AgbGVmdCBub2RlXG4gICAgICAgIHRoaXMuX25vZGVzWzFdID0gbmV3IFF1YWR0cmVlKHtcbiAgICAgICAgICAgIHVpZDogYCR7bmV4dExldmVsfS10b3AtbGVmdGAsXG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIHdpZHRoOiBzdWJXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ViSGVpZ2h0XG4gICAgICAgIH0sIHRoaXMuX21heE9iamVjdCwgdGhpcy5fbWF4TGV2ZWwsIG5leHRMZXZlbCk7XG4gICAgICAgIFxuICAgICAgICAvL2JvdHRvbSBsZWZ0IG5vZGVcbiAgICAgICAgdGhpcy5fbm9kZXNbMl0gPSBuZXcgUXVhZHRyZWUoe1xuICAgICAgICAgICAgdWlkOiBgJHtuZXh0TGV2ZWx9LWJvdHRvbS1sZWZ0YCxcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5K3N1YkhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiBzdWJXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ViSGVpZ2h0XG4gICAgICAgIH0sIHRoaXMuX21heE9iamVjdCwgdGhpcy5fbWF4TGV2ZWwsIG5leHRMZXZlbCk7XG4gICAgICAgIFxuICAgICAgICAvL2JvdHRvbSByaWdodCBub2RlXG4gICAgICAgIHRoaXMuX25vZGVzWzNdID0gbmV3IFF1YWR0cmVlKHtcbiAgICAgICAgICAgIHVpZDogYCR7bmV4dExldmVsfS1ib3R0b20tcmlnaHRgLFxuICAgICAgICAgICAgeDogeCArIHN1YldpZHRoLFxuICAgICAgICAgICAgeTogeStzdWJIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogc3ViV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHN1YkhlaWdodFxuICAgICAgICB9LCB0aGlzLl9tYXhPYmplY3QsIHRoaXMuX21heExldmVsLCBuZXh0TGV2ZWwpO1xuICAgIH1cblxuICAgIC8qKiAgKi9cbiAgICBwdWJsaWMgZ2V0SW5kZXgoYm91bmQ6IEJvdW5kKSB7XG4gICAgICAgIGxldCBpbmRleGVzOiBudW1iZXJbXSA9IFtdLFxuICAgICAgICB2ZXJ0aWNhbE1pZHBvaW50ICAgID0gdGhpcy5fYm91bmQueCArICh0aGlzLl9ib3VuZC53aWR0aC8yKSxcbiAgICAgICAgaG9yaXpvbnRhbE1pZHBvaW50ICA9IHRoaXMuX2JvdW5kLnkgKyAodGhpcy5fYm91bmQuaGVpZ2h0LzIpOyAgICBcblxuICAgICAgICBsZXQgc3RhcnRJc05vcnRoID0gYm91bmQueSA8IGhvcml6b250YWxNaWRwb2ludCxcbiAgICAgICAgICAgIHN0YXJ0SXNXZXN0ICA9IGJvdW5kLnggPCB2ZXJ0aWNhbE1pZHBvaW50LFxuICAgICAgICAgICAgZW5kSXNFYXN0ICAgID0gYm91bmQueCArIGJvdW5kLndpZHRoID4gdmVydGljYWxNaWRwb2ludCxcbiAgICAgICAgICAgIGVuZElzU291dGggICA9IGJvdW5kLnkgKyBib3VuZC5oZWlnaHQgPiBob3Jpem9udGFsTWlkcG9pbnQ7ICAgIFxuXG4gICAgICAgIC8vdG9wLXJpZ2h0IHF1YWRcbiAgICAgICAgaWYoc3RhcnRJc05vcnRoICYmIGVuZElzRWFzdCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL3RvcC1sZWZ0IHF1YWRcbiAgICAgICAgaWYoc3RhcnRJc1dlc3QgJiYgc3RhcnRJc05vcnRoKSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2JvdHRvbS1sZWZ0IHF1YWRcbiAgICAgICAgaWYoc3RhcnRJc1dlc3QgJiYgZW5kSXNTb3V0aCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ib3R0b20tcmlnaHQgcXVhZFxuICAgICAgICBpZihlbmRJc0Vhc3QgJiYgZW5kSXNTb3V0aCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKDMpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH1cblxuICAgIC8qKiDmj5LlhaXkuIDkuKpib3VuZCAqL1xuICAgIHB1YmxpYyBpbnNlcnQoYm91bmQ6IEJvdW5kKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGluZGV4ZXM6IG51bWJlcltdID0gW107XG4gICAgICAgICBcbiAgICAgICAgLy9pZiB3ZSBoYXZlIHN1Ym5vZGVzLCBjYWxsIGluc2VydCBvbiBtYXRjaGluZyBzdWJub2Rlc1xuICAgICAgICBpZih0aGlzLl9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMgPSB0aGlzLmdldEluZGV4KGJvdW5kKTtcbiAgICAgXG4gICAgICAgICAgICBmb3IoaT0wOyBpPGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1tpbmRleGVzW2ldXS5pbnNlcnQoYm91bmQpOyAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIC8vb3RoZXJ3aXNlLCBzdG9yZSBvYmplY3QgaGVyZVxuICAgICAgICB0aGlzLl9vYmplY3RzLnB1c2goYm91bmQpO1xuXG4gICAgICAgIC8vbWF4X29iamVjdHMgcmVhY2hlZFxuICAgICAgICBpZih0aGlzLl9vYmplY3RzLmxlbmd0aCA+IHRoaXMuX21heE9iamVjdCAmJiB0aGlzLl9sZXZlbCA8IHRoaXMuX21heExldmVsKSB7XG5cbiAgICAgICAgICAgIC8vc3BsaXQgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHN1Ym5vZGVzXG4gICAgICAgICAgICBpZighdGhpcy5fbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2FkZCBhbGwgb2JqZWN0cyB0byB0aGVpciBjb3JyZXNwb25kaW5nIHN1Ym5vZGVcbiAgICAgICAgICAgIGZvcihpPTA7IGk8dGhpcy5fb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGluZGV4ZXMgPSB0aGlzLmdldEluZGV4KHRoaXMuX29iamVjdHNbaV0pO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wOyBrPGluZGV4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNbaW5kZXhlc1trXV0uaW5zZXJ0KHRoaXMuX29iamVjdHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9jbGVhbiB1cCB0aGlzIG5vZGVcbiAgICAgICAgICAgIHRoaXMuX29iamVjdHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXRyaWV2ZShib3VuZDogQm91bmQpOiBCb3VuZFtdIHtcbiAgICAgICAgIFxuICAgICAgICBsZXQgaW5kZXhlcyA9IHRoaXMuZ2V0SW5kZXgoYm91bmQpLFxuICAgICAgICAgICAgcmV0dXJuT2JqZWN0cyA9IHRoaXMuX29iamVjdHM7XG4gICAgICAgICAgICBcbiAgICAgICAgLy9pZiB3ZSBoYXZlIHN1Ym5vZGVzLCByZXRyaWV2ZSB0aGVpciBvYmplY3RzXG4gICAgICAgIGlmKHRoaXMuX25vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8aW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJldHVybk9iamVjdHMgPSByZXR1cm5PYmplY3RzLmNvbmNhdCh0aGlzLl9ub2Rlc1tpbmRleGVzW2ldXS5yZXRyaWV2ZShib3VuZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9yZW1vdmUgZHVwbGljYXRlc1xuICAgICAgICByZXR1cm5PYmplY3RzID0gcmV0dXJuT2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5PYmplY3RzLmluZGV4T2YoaXRlbSkgPj0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICBcbiAgICAgICAgcmV0dXJuIHJldHVybk9iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgdGhpcy5fbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX25vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzW2ldLmNsZWFyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ub2RlcyA9IFtdO1xuICAgIH1cbn0iXX0=