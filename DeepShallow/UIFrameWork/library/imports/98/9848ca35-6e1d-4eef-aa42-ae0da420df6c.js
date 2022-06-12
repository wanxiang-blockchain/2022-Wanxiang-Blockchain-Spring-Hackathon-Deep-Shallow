"use strict";
cc._RF.push(module, '9848co1bh1O76pCrg2kIN9s', 'AdapterMgr');
// Script/UIFrame/AdapterMgr.ts

"use strict";
/**
 * @Author: 邓朗
 * @Date: 2019-06-12 17:18:04
 * @Describe: 适配组件, 主要适配背景大小,窗体的位置
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterType = void 0;
var flagOffset = 0;
var _None = 1 << flagOffset++;
var _Left = 1 << flagOffset++; // 左对齐
var _Right = 1 << flagOffset++; // 右对齐
var _Top = 1 << flagOffset++; // 上对齐
var _Bottom = 1 << flagOffset++; // 下对齐
var _StretchWidth = _Left | _Right; // 拉伸宽
var _StretchHeight = _Top | _Bottom; // 拉伸高
var _FullWidth = 1 << flagOffset++; // 等比充满宽
var _FullHeight = 1 << flagOffset++; // 等比充满高
var _Final = 1 << flagOffset++;
/**  */
var AdapterType;
(function (AdapterType) {
    AdapterType[AdapterType["Top"] = _Top] = "Top";
    AdapterType[AdapterType["Bottom"] = _Bottom] = "Bottom";
    AdapterType[AdapterType["Left"] = _Left] = "Left";
    AdapterType[AdapterType["Right"] = _Right] = "Right";
    AdapterType[AdapterType["StretchWidth"] = _StretchWidth] = "StretchWidth";
    AdapterType[AdapterType["StretchHeight"] = _StretchHeight] = "StretchHeight";
    AdapterType[AdapterType["FullWidth"] = _FullWidth] = "FullWidth";
    AdapterType[AdapterType["FullHeight"] = _FullHeight] = "FullHeight";
})(AdapterType = exports.AdapterType || (exports.AdapterType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdapterMgr = /** @class */ (function () {
    function AdapterMgr() {
    }
    AdapterMgr_1 = AdapterMgr;
    Object.defineProperty(AdapterMgr, "inst", {
        get: function () {
            if (this._instance == null) {
                this._instance = new AdapterMgr_1();
                this._instance.visibleSize = cc.view.getVisibleSize();
                console.log("visiable size: " + this._instance.visibleSize);
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    AdapterMgr.prototype.adapteByType = function (flag, node, distance) {
        if (distance === void 0) { distance = 0; }
        var tFlag = _Final;
        while (tFlag > 0) {
            if (tFlag & flag)
                this._doAdapte(tFlag, node, distance);
            tFlag = tFlag >> 1;
        }
        var widget = node.getComponent(cc.Widget);
        widget.target = cc.find("Canvas");
        widget.updateAlignment();
    };
    AdapterMgr.prototype._doAdapte = function (flag, node, distance) {
        if (distance === void 0) { distance = 0; }
        var widget = node.getComponent(cc.Widget);
        if (!widget) {
            widget = node.addComponent(cc.Widget);
        }
        switch (flag) {
            case _None:
                break;
            case _Left:
                widget.isAlignLeft = true;
                widget.isAbsoluteLeft = true;
                widget.left = distance ? distance : 0;
                break;
            case _Right:
                widget.isAlignRight = true;
                widget.isAbsoluteRight = true;
                widget.right = distance ? distance : 0;
                break;
            case _Top:
                if (cc.sys.platform === cc.sys.WECHAT_GAME) { // 微信小游戏适配刘海屏
                    var menuInfo = window["wx"].getMenuButtonBoundingClientRect();
                    var systemInfo = window["wx"].getSystemInfoSync();
                    distance += cc.find("Canvas").height * (menuInfo.top / systemInfo.screenHeight);
                }
                widget.isAlignTop = true;
                widget.isAbsoluteTop = true;
                widget.top = distance ? distance : 0;
                break;
            case _Bottom:
                widget.isAlignBottom = true;
                widget.isAbsoluteBottom = true;
                widget.bottom = distance ? distance : 0;
                break;
            case _FullWidth:
                node.height /= node.width / this.visibleSize.width;
                node.width = this.visibleSize.width;
                break;
            case _FullHeight:
                node.width /= node.height / this.visibleSize.height;
                node.height = this.visibleSize.height;
                break;
        }
    };
    /** 移除 */
    AdapterMgr.prototype.removeAdaptater = function (node) {
        if (node.getComponent(cc.Widget)) {
            node.removeComponent(cc.Widget);
        }
    };
    var AdapterMgr_1;
    AdapterMgr._instance = null; // 单例
    AdapterMgr = AdapterMgr_1 = __decorate([
        ccclass
    ], AdapterMgr);
    return AdapterMgr;
}());
exports.default = AdapterMgr;

cc._RF.pop();