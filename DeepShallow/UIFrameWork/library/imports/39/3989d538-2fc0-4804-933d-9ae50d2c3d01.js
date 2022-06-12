"use strict";
cc._RF.push(module, '3989dU4L8BIBJM9muUNLD0B', 'BatchAssembler');
// Script/Common/Assemblers/BatchAssembler.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAssembler_1 = require("./BaseAssembler");
/** 禁止子节点执行的FLAG */
var BAN_FALG = (cc.RenderFlow.FLAG_RENDER | cc.RenderFlow.FLAG_POST_RENDER);
/** 对子节点有影响的FLAG */
var DIRTY_PROP = cc.RenderFlow.FLAG_OPACITY | cc.RenderFlow.FLAG_WORLD_TRANSFORM;
/** 开关 */
var BATCH_SWITCH = true;
var BatchAssembler = /** @class */ (function (_super) {
    __extends(BatchAssembler, _super);
    function BatchAssembler() {
        var _this = _super.call(this) || this;
        /** 分层渲染 */
        _this._groups = [];
        return _this;
    }
    /**
     * 重写
     * 第一步, 让item的render方法都不执行, 只执行处理数据的方法 但是不执行fillbuffers方法
     * 第二步, 在postFillBuffers中按照顺序, 自己调用render方法, 填充数据, 以达到合批的目的
    **/
    BatchAssembler.prototype.fillBuffers = function (comp, renderer) {
        if (CC_NATIVERENDERER) {
            return;
        }
        if (!BATCH_SWITCH)
            return;
        // 记录当前结点是否会给孩子结点造成影响
        var worldTransformFlag = renderer.worldMatDirty ? cc.RenderFlow.FLAG_WORLD_TRANSFORM : 0;
        var worldOpacityFlag = renderer.parentOpacityDirty ? cc.RenderFlow.FLAG_OPACITY_COLOR : 0;
        var dirtyFlag = worldTransformFlag | worldOpacityFlag;
        comp.node['__DirtyFlag__'] = dirtyFlag;
        this._groups = [];
        this._walkByName(comp.node.children);
    };
    BatchAssembler.prototype.postFillBuffers = function (comp, renderer) {
        var originWorldMatDirty = renderer.worldMatDirty;
        if (!BATCH_SWITCH || !this._groups || this._groups.length <= 0)
            return;
        BATCH_SWITCH = false;
        for (var _i = 0, _a = this._groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.length <= 0)
                continue;
            for (var _b = 0, group_1 = group; _b < group_1.length; _b++) {
                var node = group_1[_b];
                var renderFlag = node['__RenderFlag__'];
                var dirtyFlag = node['__DirtyFlag__'];
                renderer.worldMatDirty = dirtyFlag > 0 ? 1 : 0;
                node._renderFlag |= renderFlag;
                if (renderFlag) {
                    cc.RenderFlow.flows[renderFlag]._func(node);
                }
            }
        }
        this._groups = null;
        BATCH_SWITCH = true;
        renderer.worldMatDirty = originWorldMatDirty;
    };
    /**
     * 方案一
     * 默认的广度遍历方式
     * 优点: 速度较快
     * 缺点: 新增或删除节点可能会导致合批失败
     */
    BatchAssembler.prototype._walkDefault = function (nodes) {
        if (!nodes || nodes.length <= 0)
            return;
        var count = nodes[0].childrenCount;
        var groups = [];
        for (var i = 0; i < count; i++) {
            groups[i] = [];
        }
        var group = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (!node._activeInHierarchy || node.opacity == 0)
                continue;
            var flag = node._renderFlag & BAN_FALG;
            if (flag > 0) { // 表示这个node需要渲染
                node['__RenderFlag__'] = flag;
                node._renderFlag &= ~flag; // 去掉对应的flag
                group.push(node);
            }
            node['__DirtyFlag__'] = node.parent['__DirtyFlag__'] | (node._renderFlag & DIRTY_PROP);
            for (var i = 0; i < count; i++) {
                groups[i].push(node.children[i]);
            }
        }
        if (group.length > 0) {
            this._groups.push(group);
        }
        for (var _a = 0, groups_1 = groups; _a < groups_1.length; _a++) {
            var group_2 = groups_1[_a];
            this._walkDefault(group_2);
        }
    };
    /**
     * 方案二
     * 同名结点同批次渲染
     * 优点: 新增或删除节点不会导致合批失败
     * 缺点: 兄弟结点不能同名,速度没方案一快,内存消耗也大
     */
    BatchAssembler.prototype._walkByName = function (nodes) {
        if (!nodes || nodes.length <= 0)
            return;
        var groups = {};
        var group = [];
        var keys = [];
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            if (!node._activeInHierarchy || node.opacity == 0)
                continue;
            var flag = node._renderFlag & BAN_FALG;
            if (flag > 0) { // 表示这个node需要渲染
                node['__RenderFlag__'] = flag;
                node._renderFlag &= ~flag; // 去掉对应的flag
                group.push(node);
            }
            node['__DirtyFlag__'] = node.parent['__DirtyFlag__'] | (node._renderFlag & DIRTY_PROP);
            var lastKey = "";
            for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
                var n = _b[_a];
                var key = n.name;
                if (!groups[key])
                    groups[key] = [];
                groups[key].push(n);
                if (keys.indexOf(key) == -1) {
                    if (lastKey.length == 0) { // 当前key肯定要存0号位
                        keys.unshift(key);
                    }
                    else {
                        var idx = keys.indexOf(lastKey);
                        keys.splice(idx + 1, 0, key);
                    }
                }
                lastKey = key;
            }
        }
        if (group.length > 0) {
            this._groups.push(group);
        }
        for (var _c = 0, keys_1 = keys; _c < keys_1.length; _c++) {
            var key = keys_1[_c];
            this._walkByName(groups[key]);
        }
    };
    return BatchAssembler;
}(BaseAssembler_1.default));
exports.default = BatchAssembler;

cc._RF.pop();