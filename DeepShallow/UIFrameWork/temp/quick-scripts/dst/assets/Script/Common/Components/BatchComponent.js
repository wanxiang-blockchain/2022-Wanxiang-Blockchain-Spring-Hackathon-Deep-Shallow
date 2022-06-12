
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/BatchComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd393a5ZdPJN0q6Ay73BaSB9', 'BatchComponent');
// Script/Common/Components/BatchComponent.ts

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
var BatchAssembler_1 = require("../Assemblers/BatchAssembler");
var TraversalMode;
(function (TraversalMode) {
    TraversalMode[TraversalMode["Default"] = 0] = "Default";
    TraversalMode[TraversalMode["SameName"] = 1] = "SameName";
})(TraversalMode || (TraversalMode = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BantchComponent = /** @class */ (function (_super) {
    __extends(BantchComponent, _super);
    function BantchComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = 0;
        return _this;
    }
    BantchComponent.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        if (!CC_NATIVERENDERER)
            this.node._renderFlag |= cc.RenderFlow.FLAG_POST_RENDER;
    };
    BantchComponent.prototype._resetAssembler = function () {
        this.setVertsDirty();
        var assembler = this._assembler = new BatchAssembler_1.default();
        assembler.init(this);
    };
    __decorate([
        property({ type: cc.Enum(TraversalMode), tooltip: "遍历模式: Default 默认的广度遍历, SameName 同名结点同批次" })
    ], BantchComponent.prototype, "mode", void 0);
    BantchComponent = __decorate([
        ccclass
    ], BantchComponent);
    return BantchComponent;
}(cc.RenderComponent));
exports.default = BantchComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvQmF0Y2hDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFELElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNkLHVEQUFPLENBQUE7SUFDUCx5REFBUSxDQUFBO0FBRVosQ0FBQyxFQUpJLGFBQWEsS0FBYixhQUFhLFFBSWpCO0FBRUssSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQWtCO0lBQS9EO1FBQUEscUVBZUM7UUFaRyxVQUFJLEdBQWtCLENBQUMsQ0FBQzs7SUFZNUIsQ0FBQztJQVZHLGtDQUFRLEdBQVI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNwRixDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlDQUF5QyxFQUFDLENBQUM7aURBQ3JFO0lBSFAsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWVuQztJQUFELHNCQUFDO0NBZkQsQUFlQyxDQWY0QyxFQUFFLENBQUMsZUFBZSxHQWU5RDtrQkFmb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXRjaEFzc2VtYmxlciBmcm9tIFwiLi4vQXNzZW1ibGVycy9CYXRjaEFzc2VtYmxlclwiO1xuXG5lbnVtIFRyYXZlcnNhbE1vZGUge1xuICAgIERlZmF1bHQsXG4gICAgU2FtZU5hbWUsXG5cbn1cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW50Y2hDb21wb25lbnQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKFRyYXZlcnNhbE1vZGUpLCB0b29sdGlwOiBcIumBjeWOhuaooeW8jzogRGVmYXVsdCDpu5jorqTnmoTlub/luqbpgY3ljoYsIFNhbWVOYW1lIOWQjOWQjee7k+eCueWQjOaJueasoVwifSlcbiAgICBtb2RlOiBUcmF2ZXJzYWxNb2RlID0gMDtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICBpZiAoIUNDX05BVElWRVJFTkRFUkVSKSB0aGlzLm5vZGUuX3JlbmRlckZsYWcgfD0gY2MuUmVuZGVyRmxvdy5GTEFHX1BPU1RfUkVOREVSOyAgICBcbiAgICB9XG5cbiAgICBfcmVzZXRBc3NlbWJsZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0VmVydHNEaXJ0eSgpO1xuICAgICAgICBsZXQgYXNzZW1ibGVyID0gdGhpcy5fYXNzZW1ibGVyID0gbmV3IEJhdGNoQXNzZW1ibGVyKCk7XG4gICAgICAgIGFzc2VtYmxlci5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==