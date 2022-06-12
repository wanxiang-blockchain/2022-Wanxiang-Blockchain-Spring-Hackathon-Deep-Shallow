
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/TouchPlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c88eM+YFpH45yVr93vRF2l', 'TouchPlus');
// Script/Common/Components/TouchPlus.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchPlus = /** @class */ (function (_super) {
    __extends(TouchPlus, _super);
    function TouchPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = 15; // 误差值
        _this.isTouch = false;
        _this.isClick = true;
        return _this;
        // update (dt) {}
    }
    /** 添加点击事件和滑动事件 */
    TouchPlus.prototype.addEvent = function (click, slide) {
        this.clickEvent = click;
        this.slideEvent = slide;
    };
    // onLoad () {}
    TouchPlus.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
    };
    TouchPlus.prototype.touchStart = function (e) {
        this.isTouch = true;
        this.startPosition = e.getLocation();
    };
    TouchPlus.prototype.touchMove = function (e) {
        if (!this.isTouch)
            return;
        var pos = e.getLocation();
        var len = pos.sub(this.startPosition).mag();
        if (len > this.offset) {
            this.isClick = false;
            // 触发滑动
            this.slideEvent && this.slideEvent(e);
        }
    };
    TouchPlus.prototype.touchEnd = function (e) {
        if (!this.isTouch)
            return;
        this.isTouch = false;
        this.isClick && this.clickEvent && this.clickEvent(e);
        this.isClick = true;
    };
    TouchPlus.prototype.touchCancel = function (e) {
        if (!this.isTouch)
            return;
        this.isTouch = false;
        this.isClick = true;
    };
    TouchPlus.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
    };
    TouchPlus = __decorate([
        ccclass
    ], TouchPlus);
    return TouchPlus;
}(cc.Component));
exports.default = TouchPlus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvVG91Y2hQbHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZ0VDO1FBOURXLFlBQU0sR0FBSSxFQUFFLENBQUMsQ0FBTyxNQUFNO1FBRTFCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBTyxHQUFHLElBQUksQ0FBQzs7UUF5RHZCLGlCQUFpQjtJQUNyQixDQUFDO0lBckRHLGtCQUFrQjtJQUNYLDRCQUFRLEdBQWYsVUFBZ0IsS0FBZSxFQUFFLEtBQXNDO1FBQ25FLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO0lBRWYseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFHTyw4QkFBVSxHQUFsQixVQUFtQixDQUFzQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ08sNkJBQVMsR0FBakIsVUFBa0IsQ0FBc0I7UUFDcEMsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBUTtRQUMxQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUMsSUFBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixPQUFPO1lBQ1AsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUNPLDRCQUFRLEdBQWhCLFVBQWlCLENBQXNCO1FBQ25DLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQVE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNPLCtCQUFXLEdBQW5CLFVBQW9CLENBQXNCO1FBQ3RDLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQVE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBN0RnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0U3QjtJQUFELGdCQUFDO0NBaEVELEFBZ0VDLENBaEVzQyxFQUFFLENBQUMsU0FBUyxHQWdFbEQ7a0JBaEVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaFBsdXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBvZmZzZXQgID0gMTU7ICAgICAgIC8vIOivr+W3ruWAvFxuICAgIHByaXZhdGUgc3RhcnRQb3NpdGlvbjogY2MuVmVjMjtcbiAgICBwcml2YXRlIGlzVG91Y2ggPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaXNDbGljayA9IHRydWU7XG5cbiAgICBwcml2YXRlIGNsaWNrRXZlbnQ6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgc2xpZGVFdmVudDogKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IGFueTtcblxuICAgIC8qKiDmt7vliqDngrnlh7vkuovku7blkozmu5Hliqjkuovku7YgKi9cbiAgICBwdWJsaWMgYWRkRXZlbnQoY2xpY2s6IEZ1bmN0aW9uLCBzbGlkZTogKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IGFueSkge1xuICAgICAgICB0aGlzLmNsaWNrRXZlbnQgPSBjbGljaztcbiAgICAgICAgdGhpcy5zbGlkZUV2ZW50ID0gc2xpZGU7XG4gICAgfVxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hDYW5jZWwsIHRoaXMpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZS5nZXRMb2NhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIHRvdWNoTW92ZShlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmKCF0aGlzLmlzVG91Y2gpIHJldHVybiA7XG4gICAgICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBsZW4gPSBwb3Muc3ViKHRoaXMuc3RhcnRQb3NpdGlvbikubWFnKCk7XG4gICAgICAgIGlmKGxlbiA+IHRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIOinpuWPkea7keWKqFxuICAgICAgICAgICAgdGhpcy5zbGlkZUV2ZW50ICYmIHRoaXMuc2xpZGVFdmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNUb3VjaCkgcmV0dXJuIDtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzQ2xpY2sgJiYgdGhpcy5jbGlja0V2ZW50ICYmIHRoaXMuY2xpY2tFdmVudChlKTtcblxuICAgICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIHRvdWNoQ2FuY2VsKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNUb3VjaCkgcmV0dXJuIDtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19