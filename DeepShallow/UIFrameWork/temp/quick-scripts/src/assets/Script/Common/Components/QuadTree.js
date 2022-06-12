"use strict";
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