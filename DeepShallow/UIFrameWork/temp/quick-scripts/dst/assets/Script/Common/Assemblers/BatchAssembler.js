
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Assemblers/BatchAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0Fzc2VtYmxlcnMvQmF0Y2hBc3NlbWJsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRTVDLG1CQUFtQjtBQUNuQixJQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5RSxtQkFBbUI7QUFDbkIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztBQUNuRixTQUFTO0FBQ1QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBRXhCO0lBQTRDLGtDQUFhO0lBRXJEO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBRUQsV0FBVztRQUNILGFBQU8sR0FBcUIsRUFBRSxDQUFDOztJQUh2QyxDQUFDO0lBSUQ7Ozs7T0FJRztJQUNJLG9DQUFXLEdBQWxCLFVBQW1CLElBQXdCLEVBQUUsUUFBYTtRQUN0RCxJQUFHLGlCQUFpQixFQUFFO1lBQ2xCLE9BQVE7U0FDWDtRQUNELElBQUcsQ0FBQyxZQUFZO1lBQUUsT0FBUTtRQUUxQixxQkFBcUI7UUFDckIsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHdDQUFlLEdBQXRCLFVBQXVCLElBQXdCLEVBQUUsUUFBYTtRQUMxRCxJQUFJLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBRyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQVE7UUFDdkUsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixLQUFpQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZLEVBQUU7WUFBM0IsSUFBSSxLQUFLLFNBQUE7WUFDVCxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFBRSxTQUFTO1lBQy9CLEtBQWdCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7Z0JBQW5CLElBQUksSUFBSSxjQUFBO2dCQUNSLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3RDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDO2dCQUUvQixJQUFHLFVBQVUsRUFBRTtvQkFDWCxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9DO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsUUFBUSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxxQ0FBWSxHQUFwQixVQUFxQixLQUFnQjtRQUNqQyxJQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQVE7UUFFeEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO1FBQzdCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQWtCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBckIsSUFBTSxJQUFJLGNBQUE7WUFDVixJQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztnQkFBRSxTQUFTO1lBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ3ZDLElBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUEyQixlQUFlO2dCQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBVSxZQUFZO2dCQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZGLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7UUFDRCxJQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsS0FBbUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBdkIsSUFBTSxPQUFLLGVBQUE7WUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssb0NBQVcsR0FBbkIsVUFBb0IsS0FBZ0I7UUFDaEMsSUFBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFRO1FBRXhDLElBQUksTUFBTSxHQUErQixFQUFFLENBQUM7UUFDNUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLEtBQWtCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBckIsSUFBTSxJQUFJLGNBQUE7WUFDVixJQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztnQkFBRSxTQUFTO1lBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ3ZDLElBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUEyQixlQUFlO2dCQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBVSxZQUFZO2dCQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRXZGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUFlLFVBQWEsRUFBYixLQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWEsRUFBRTtnQkFBMUIsSUFBTSxDQUFDLFNBQUE7Z0JBQ1AsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFcEIsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUN4QixJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQVksZUFBZTt3QkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckI7eUJBQUs7d0JBQ0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Z0JBQ0QsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUNqQjtTQUNKO1FBQ0QsSUFBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELEtBQWlCLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7WUFBbkIsSUFBTSxHQUFHLGFBQUE7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUdMLHFCQUFDO0FBQUQsQ0F6SUEsQUF5SUMsQ0F6STJDLHVCQUFhLEdBeUl4RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQXNzZW1ibGVyIGZyb20gXCIuL0Jhc2VBc3NlbWJsZXJcIjtcblxuLyoqIOemgeatouWtkOiKgueCueaJp+ihjOeahEZMQUcgKi9cbmNvbnN0IEJBTl9GQUxHID0gKGNjLlJlbmRlckZsb3cuRkxBR19SRU5ERVIgfCBjYy5SZW5kZXJGbG93LkZMQUdfUE9TVF9SRU5ERVIpO1xuLyoqIOWvueWtkOiKgueCueacieW9seWTjeeahEZMQUcgKi9cbmNvbnN0IERJUlRZX1BST1AgPSBjYy5SZW5kZXJGbG93LkZMQUdfT1BBQ0lUWSB8IGNjLlJlbmRlckZsb3cuRkxBR19XT1JMRF9UUkFOU0ZPUk07XG4vKiog5byA5YWzICovXG5sZXQgQkFUQ0hfU1dJVENIID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0Y2hBc3NlbWJsZXIgZXh0ZW5kcyBCYXNlQXNzZW1ibGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKiDliIblsYLmuLLmn5MgKi9cbiAgICBwcml2YXRlIF9ncm91cHM6IEFycmF5PGNjLk5vZGVbXT4gPSBbXTtcbiAgICAvKiogXG4gICAgICog6YeN5YaZIFxuICAgICAqIOesrOS4gOatpSwg6K6paXRlbeeahHJlbmRlcuaWueazlemDveS4jeaJp+ihjCwg5Y+q5omn6KGM5aSE55CG5pWw5o2u55qE5pa55rOVIOS9huaYr+S4jeaJp+ihjGZpbGxidWZmZXJz5pa55rOVXG4gICAgICog56ys5LqM5q2lLCDlnKhwb3N0RmlsbEJ1ZmZlcnPkuK3mjInnhafpobrluo8sIOiHquW3seiwg+eUqHJlbmRlcuaWueazlSwg5aGr5YWF5pWw5o2uLCDku6Xovr7liLDlkIjmibnnmoTnm67nmoRcbiAgICAqKi9cbiAgICBwdWJsaWMgZmlsbEJ1ZmZlcnMoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50LCByZW5kZXJlcjogYW55KSB7XG4gICAgICAgIGlmKENDX05BVElWRVJFTkRFUkVSKSB7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFCQVRDSF9TV0lUQ0gpIHJldHVybiA7XG4gICAgICAgIFxuICAgICAgICAvLyDorrDlvZXlvZPliY3nu5PngrnmmK/lkKbkvJrnu5nlranlrZDnu5PngrnpgKDmiJDlvbHlk41cbiAgICAgICAgbGV0IHdvcmxkVHJhbnNmb3JtRmxhZyA9IHJlbmRlcmVyLndvcmxkTWF0RGlydHkgPyBjYy5SZW5kZXJGbG93LkZMQUdfV09STERfVFJBTlNGT1JNIDogMDtcbiAgICAgICAgbGV0IHdvcmxkT3BhY2l0eUZsYWcgPSByZW5kZXJlci5wYXJlbnRPcGFjaXR5RGlydHkgPyBjYy5SZW5kZXJGbG93LkZMQUdfT1BBQ0lUWV9DT0xPUiA6IDA7XG4gICAgICAgIGxldCBkaXJ0eUZsYWcgPSB3b3JsZFRyYW5zZm9ybUZsYWcgfCB3b3JsZE9wYWNpdHlGbGFnO1xuICAgICAgICBjb21wLm5vZGVbJ19fRGlydHlGbGFnX18nXSA9IGRpcnR5RmxhZztcbiAgICAgICAgdGhpcy5fZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMuX3dhbGtCeU5hbWUoY29tcC5ub2RlLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdEZpbGxCdWZmZXJzKGNvbXA6IGNjLlJlbmRlckNvbXBvbmVudCwgcmVuZGVyZXI6IGFueSkge1xuICAgICAgICBsZXQgb3JpZ2luV29ybGRNYXREaXJ0eSA9IHJlbmRlcmVyLndvcmxkTWF0RGlydHk7XG4gICAgICAgIGlmKCFCQVRDSF9TV0lUQ0ggfHwgIXRoaXMuX2dyb3VwcyB8fCB0aGlzLl9ncm91cHMubGVuZ3RoIDw9IDApIHJldHVybiA7XG4gICAgICAgIEJBVENIX1NXSVRDSCA9IGZhbHNlO1xuXG4gICAgICAgIGZvcihsZXQgZ3JvdXAgb2YgdGhpcy5fZ3JvdXBzKSB7XG4gICAgICAgICAgICBpZihncm91cC5sZW5ndGggPD0gMCkgY29udGludWU7XG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2YgZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyRmxhZyA9IG5vZGVbJ19fUmVuZGVyRmxhZ19fJ107XG4gICAgICAgICAgICAgICAgbGV0IGRpcnR5RmxhZyA9IG5vZGVbJ19fRGlydHlGbGFnX18nXTtcbiAgICAgICAgICAgICAgICByZW5kZXJlci53b3JsZE1hdERpcnR5ID0gZGlydHlGbGFnID4gMCA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIG5vZGUuX3JlbmRlckZsYWcgfD0gcmVuZGVyRmxhZztcblxuICAgICAgICAgICAgICAgIGlmKHJlbmRlckZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuUmVuZGVyRmxvdy5mbG93c1tyZW5kZXJGbGFnXS5fZnVuYyhub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ3JvdXBzID0gbnVsbDtcbiAgICAgICAgQkFUQ0hfU1dJVENIID0gdHJ1ZTtcbiAgICAgICAgcmVuZGVyZXIud29ybGRNYXREaXJ0eSA9IG9yaWdpbldvcmxkTWF0RGlydHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pa55qGI5LiAXG4gICAgICog6buY6K6k55qE5bm/5bqm6YGN5Y6G5pa55byPXG4gICAgICog5LyY54K5OiDpgJ/luqbovoPlv6tcbiAgICAgKiDnvLrngrk6IOaWsOWinuaIluWIoOmZpOiKgueCueWPr+iDveS8muWvvOiHtOWQiOaJueWksei0pVxuICAgICAqL1xuICAgIHByaXZhdGUgX3dhbGtEZWZhdWx0KG5vZGVzOiBjYy5Ob2RlW10pOiB2b2lkIHtcbiAgICAgICAgaWYoIW5vZGVzIHx8IG5vZGVzLmxlbmd0aCA8PSAwKSByZXR1cm4gO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvdW50ID0gbm9kZXNbMF0uY2hpbGRyZW5Db3VudDtcbiAgICAgICAgbGV0IGdyb3VwczogY2MuTm9kZVtdW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8Y291bnQ7IGkrKykge1xuICAgICAgICAgICAgZ3JvdXBzW2ldID0gW107XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBsZXQgZ3JvdXAgPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIGlmKCFub2RlLl9hY3RpdmVJbkhpZXJhcmNoeSB8fCBub2RlLm9wYWNpdHkgPT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IG5vZGUuX3JlbmRlckZsYWcgJiBCQU5fRkFMRztcbiAgICAgICAgICAgIGlmKGZsYWcgPiAwKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDooajnpLrov5nkuKpub2Rl6ZyA6KaB5riy5p+TXG4gICAgICAgICAgICAgICAgbm9kZVsnX19SZW5kZXJGbGFnX18nXSA9IGZsYWc7XG4gICAgICAgICAgICAgICAgbm9kZS5fcmVuZGVyRmxhZyAmPSB+ZmxhZzsgICAgICAgICAgLy8g5Y675o6J5a+55bqU55qEZmxhZ1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBub2RlWydfX0RpcnR5RmxhZ19fJ10gPSBub2RlLnBhcmVudFsnX19EaXJ0eUZsYWdfXyddIHwgKG5vZGUuX3JlbmRlckZsYWcgJiBESVJUWV9QUk9QKTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBncm91cHNbaV0ucHVzaChub2RlLmNoaWxkcmVuW2ldKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JvdXAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzLnB1c2goZ3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIGZvcihjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3dhbGtEZWZhdWx0KGdyb3VwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaWueahiOS6jFxuICAgICAqIOWQjOWQjee7k+eCueWQjOaJueasoea4suafk1xuICAgICAqIOS8mOeCuTog5paw5aKe5oiW5Yig6Zmk6IqC54K55LiN5Lya5a+86Ie05ZCI5om55aSx6LSlXG4gICAgICog57y654K5OiDlhYTlvJ/nu5PngrnkuI3og73lkIzlkI0s6YCf5bqm5rKh5pa55qGI5LiA5b+rLOWGheWtmOa2iOiAl+S5n+Wkp1xuICAgICAqL1xuICAgIHByaXZhdGUgX3dhbGtCeU5hbWUobm9kZXM6IGNjLk5vZGVbXSkge1xuICAgICAgICBpZighbm9kZXMgfHwgbm9kZXMubGVuZ3RoIDw9IDApIHJldHVybiA7XG4gICAgICAgIFxuICAgICAgICBsZXQgZ3JvdXBzOiB7W2tleTogc3RyaW5nXTogY2MuTm9kZVtdfSA9IHt9O1xuICAgICAgICBsZXQgZ3JvdXAgPSBbXTtcbiAgICAgICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvcihjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBpZighbm9kZS5fYWN0aXZlSW5IaWVyYXJjaHkgfHwgbm9kZS5vcGFjaXR5ID09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGZsYWcgPSBub2RlLl9yZW5kZXJGbGFnICYgQkFOX0ZBTEc7XG4gICAgICAgICAgICBpZihmbGFnID4gMCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6KGo56S66L+Z5Liqbm9kZemcgOimgea4suafk1xuICAgICAgICAgICAgICAgIG5vZGVbJ19fUmVuZGVyRmxhZ19fJ10gPSBmbGFnO1xuICAgICAgICAgICAgICAgIG5vZGUuX3JlbmRlckZsYWcgJj0gfmZsYWc7ICAgICAgICAgIC8vIOWOu+aOieWvueW6lOeahGZsYWdcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICBcblxuICAgICAgICAgICAgbm9kZVsnX19EaXJ0eUZsYWdfXyddID0gbm9kZS5wYXJlbnRbJ19fRGlydHlGbGFnX18nXSB8IChub2RlLl9yZW5kZXJGbGFnICYgRElSVFlfUFJPUCk7XG5cbiAgICAgICAgICAgIGxldCBsYXN0S2V5ID0gXCJcIjtcbiAgICAgICAgICAgIGZvcihjb25zdCBuIG9mIG5vZGUuY2hpbGRyZW4pIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IG4ubmFtZTtcbiAgICAgICAgICAgICAgICBpZighZ3JvdXBzW2tleV0pIGdyb3Vwc1trZXldID0gW107XG4gICAgICAgICAgICAgICAgZ3JvdXBzW2tleV0ucHVzaChuKTtcblxuICAgICAgICAgICAgICAgIGlmKGtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGxhc3RLZXkubGVuZ3RoID09IDApIHsgICAgICAgICAgIC8vIOW9k+WJjWtleeiCr+WumuimgeWtmDDlj7fkvY1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMudW5zaGlmdChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0ga2V5cy5pbmRleE9mKGxhc3RLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5zcGxpY2UoaWR4KzEsIDAsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdEtleSA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihncm91cC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9ncm91cHMucHVzaChncm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB0aGlzLl93YWxrQnlOYW1lKGdyb3Vwc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59Il19