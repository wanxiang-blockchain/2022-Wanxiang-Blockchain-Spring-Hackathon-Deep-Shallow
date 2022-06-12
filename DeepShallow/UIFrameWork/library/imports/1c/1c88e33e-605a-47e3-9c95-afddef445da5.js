"use strict";
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