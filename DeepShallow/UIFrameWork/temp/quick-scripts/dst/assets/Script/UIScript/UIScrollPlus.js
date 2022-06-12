
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIScrollPlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '560e1xSQSJMfZRGHo2ilXIy', 'UIScrollPlus');
// Script/UIScript/UIScrollPlus.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPlusProxy = void 0;
var ScrollViewHelper_1 = require("../Common/Components/ScrollViewHelper");
var SysDefine_1 = require("../UIFrame/config/SysDefine");
var Struct_1 = require("../UIFrame/Struct");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollPlusProxy = /** @class */ (function (_super) {
    __extends(ScrollPlusProxy, _super);
    function ScrollPlusProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScrollPlusProxy;
}(ScrollViewHelper_1.ScrollViewElementProxy));
exports.ScrollPlusProxy = ScrollPlusProxy;
var UIScrollPlus = /** @class */ (function (_super) {
    __extends(UIScrollPlus, _super);
    function UIScrollPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollHelper = null;
        _this.pfItem = null;
        _this.modalType = new Struct_1.ModalType(SysDefine_1.ModalOpacity.OpacityHalf, true);
        _this._nodePool = new cc.NodePool();
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    UIScrollPlus.prototype.start = function () {
        var _this = this;
        this.layoutItems();
        this.scrollHelper.onAllocUI = function (proxy) {
            var ui = _this._nodePool.get() || cc.instantiate(_this.pfItem);
            proxy.ui = ui;
            ui.parent = _this.scrollHelper.scrollView.content;
            ui.setPosition(proxy.region.x, proxy.region.y);
            proxy.ui.getChildByName('lab').getComponent(cc.Label).string = '' + proxy.lab;
        };
        this.scrollHelper.onFreeUI = function (proxy) {
            _this._nodePool.put(proxy.ui);
            proxy.ui = null;
        };
        this.scrollHelper.isUIPooled = function () {
            return _this._nodePool.size() > 0;
        };
        this.scrollHelper.checkUI();
    };
    UIScrollPlus.prototype.layoutItems = function () {
        var d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.scrollHelper.clearData();
        var ypos = 0;
        for (var i = 0; i < d.length; i++) {
            var proxy = new ScrollPlusProxy();
            proxy.lab = d[i];
            proxy.region = cc.rect(-this.pfItem.data.width / 2, ypos - this.pfItem.data.height, this.pfItem.data.width, this.pfItem.data.height);
            this.scrollHelper.addData(proxy);
            ypos -= this.pfItem.data.height + 10;
        }
        this.scrollHelper.scrollView.content.height = (this.pfItem.data.height + 10) * d.length;
    };
    __decorate([
        property(ScrollViewHelper_1.ScrollViewHelper)
    ], UIScrollPlus.prototype, "scrollHelper", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIScrollPlus.prototype, "pfItem", void 0);
    UIScrollPlus = __decorate([
        ccclass
    ], UIScrollPlus);
    return UIScrollPlus;
}(UIForm_1.UIWindow));
exports.default = UIScrollPlus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlTY3JvbGxQbHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBaUc7QUFDakcseURBQTJEO0FBQzNELDRDQUE4QztBQUM5Qyw0Q0FBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBcUMsbUNBQXNCO0lBQTNEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyx5Q0FBc0IsR0FFMUQ7QUFGWSwwQ0FBZTtBQUs1QjtJQUEwQyxnQ0FBUTtJQUFsRDtRQUFBLHFFQWdEQztRQTlDK0Isa0JBQVksR0FBcUIsSUFBSSxDQUFDO1FBRTdDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFOUMsZUFBUyxHQUFHLElBQUksa0JBQVMsQ0FBQyx3QkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVqRCxlQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBdUN0QyxpQkFBaUI7SUFDckIsQ0FBQztJQXZDRyxlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFzQjtZQUNqRCxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzVELEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xGLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLFVBQUMsS0FBNkI7WUFDdkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHO1lBQzNCLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBSU8sa0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUYsQ0FBQztJQTNDMkI7UUFBM0IsUUFBUSxDQUFDLG1DQUFnQixDQUFDO3NEQUF1QztJQUU3QztRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFBMEI7SUFKN0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdEaEM7SUFBRCxtQkFBQztDQWhERCxBQWdEQyxDQWhEeUMsaUJBQVEsR0FnRGpEO2tCQWhEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjcm9sbFZpZXdFbGVtZW50UHJveHksIFNjcm9sbFZpZXdIZWxwZXIgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbXBvbmVudHMvU2Nyb2xsVmlld0hlbHBlclwiO1xuaW1wb3J0IHsgTW9kYWxPcGFjaXR5IH0gZnJvbSBcIi4uL1VJRnJhbWUvY29uZmlnL1N5c0RlZmluZVwiO1xuaW1wb3J0IHsgTW9kYWxUeXBlIH0gZnJvbSBcIi4uL1VJRnJhbWUvU3RydWN0XCI7XG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gXCIuLi9VSUZyYW1lL1VJRm9ybVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIFNjcm9sbFBsdXNQcm94eSBleHRlbmRzIFNjcm9sbFZpZXdFbGVtZW50UHJveHkge1xuICAgIGxhYjogbnVtYmVyO1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTY3JvbGxQbHVzIGV4dGVuZHMgVUlXaW5kb3cge1xuXG4gICAgQHByb3BlcnR5KFNjcm9sbFZpZXdIZWxwZXIpIHNjcm9sbEhlbHBlcjogU2Nyb2xsVmlld0hlbHBlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwZkl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBtb2RhbFR5cGUgPSBuZXcgTW9kYWxUeXBlKE1vZGFsT3BhY2l0eS5PcGFjaXR5SGFsZiwgdHJ1ZSlcbiAgICBcbiAgICBwcml2YXRlIF9ub2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmxheW91dEl0ZW1zKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxIZWxwZXIub25BbGxvY1VJID0gKHByb3h5OiBTY3JvbGxQbHVzUHJveHkpID0+IHtcbiAgICAgICAgICAgIGxldCB1aSA9IHRoaXMuX25vZGVQb29sLmdldCgpIHx8IGNjLmluc3RhbnRpYXRlKHRoaXMucGZJdGVtKVxuICAgICAgICAgICAgcHJveHkudWkgPSB1aTtcbiAgICAgICAgICAgIHVpLnBhcmVudCA9IHRoaXMuc2Nyb2xsSGVscGVyLnNjcm9sbFZpZXcuY29udGVudDtcbiAgICAgICAgICAgIHVpLnNldFBvc2l0aW9uKHByb3h5LnJlZ2lvbi54LCBwcm94eS5yZWdpb24ueSk7XG4gICAgICAgICAgICBwcm94eS51aS5nZXRDaGlsZEJ5TmFtZSgnbGFiJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIHByb3h5LmxhYjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbEhlbHBlci5vbkZyZWVVSSA9IChwcm94eTogU2Nyb2xsVmlld0VsZW1lbnRQcm94eSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbm9kZVBvb2wucHV0KHByb3h5LnVpKTtcbiAgICAgICAgICAgIHByb3h5LnVpID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbEhlbHBlci5pc1VJUG9vbGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVQb29sLnNpemUoKSA+IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxIZWxwZXIuY2hlY2tVSSgpO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGxheW91dEl0ZW1zKCkge1xuICAgICAgICBsZXQgZCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1XTtcbiAgICAgICAgdGhpcy5zY3JvbGxIZWxwZXIuY2xlYXJEYXRhKCk7XG4gICAgICAgIGxldCB5cG9zID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb3h5ID0gbmV3IFNjcm9sbFBsdXNQcm94eSgpO1xuICAgICAgICAgICAgcHJveHkubGFiID0gZFtpXTtcbiAgICAgICAgICAgIHByb3h5LnJlZ2lvbiA9IGNjLnJlY3QoLXRoaXMucGZJdGVtLmRhdGEud2lkdGgvMiwgeXBvcy10aGlzLnBmSXRlbS5kYXRhLmhlaWdodCwgdGhpcy5wZkl0ZW0uZGF0YS53aWR0aCwgdGhpcy5wZkl0ZW0uZGF0YS5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIZWxwZXIuYWRkRGF0YShwcm94eSk7XG4gICAgICAgICAgICB5cG9zIC09IHRoaXMucGZJdGVtLmRhdGEuaGVpZ2h0ICsgMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxIZWxwZXIuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCA9ICh0aGlzLnBmSXRlbS5kYXRhLmhlaWdodCArIDEwKSAqIGQubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=