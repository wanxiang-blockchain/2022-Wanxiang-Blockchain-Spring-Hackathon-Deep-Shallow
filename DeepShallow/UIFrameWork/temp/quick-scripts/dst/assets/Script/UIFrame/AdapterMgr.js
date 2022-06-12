
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/AdapterMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9BZGFwdGVyTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7QUFFSCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDbkIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUcsQ0FBQyxDQUFZLE1BQU07QUFDbkQsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRyxDQUFDLENBQVcsTUFBTTtBQUNuRCxJQUFNLElBQUksR0FBRyxDQUFDLElBQUksVUFBVSxFQUFHLENBQUMsQ0FBYSxNQUFNO0FBQ25ELElBQU0sT0FBTyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUcsQ0FBQyxDQUFVLE1BQU07QUFDbkQsSUFBTSxhQUFhLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFVLE1BQU07QUFDckQsSUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFTLE1BQU07QUFFckQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRyxDQUFDLENBQU8sUUFBUTtBQUNyRCxJQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksVUFBVSxFQUFHLENBQUMsQ0FBTSxRQUFRO0FBQ3JELElBQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUVqQyxPQUFPO0FBQ1AsSUFBWSxXQVdYO0FBWEQsV0FBWSxXQUFXO0lBQ25CLGlDQUFNLElBQUksU0FBQSxDQUFBO0lBQ1Ysb0NBQVMsT0FBTyxZQUFBLENBQUE7SUFDaEIsa0NBQU8sS0FBSyxVQUFBLENBQUE7SUFDWixtQ0FBUSxNQUFNLFdBQUEsQ0FBQTtJQUVkLDBDQUFlLGFBQWEsa0JBQUEsQ0FBQTtJQUM1QiwyQ0FBZ0IsY0FBYyxtQkFBQSxDQUFBO0lBRTlCLHVDQUFZLFVB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Q0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7O0lBM0VjLG9CQUFTLEdBQWUsSUFBSSxDQUFDLENBQXFCLEtBQUs7SUFGckQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThFOUI7SUFBRCxpQkFBQztDQTlFRCxBQThFQyxJQUFBO2tCQTlFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQEF1dGhvcjog6YKT5pyXIFxuICogQERhdGU6IDIwMTktMDYtMTIgMTc6MTg6MDQgIFxuICogQERlc2NyaWJlOiDpgILphY3nu4Tku7YsIOS4u+imgemAgumFjeiDjOaZr+Wkp+WwjyznqpfkvZPnmoTkvY3nva5cbiAqL1xuXG5sZXQgZmxhZ09mZnNldCA9IDA7XG5jb25zdCBfTm9uZSA9IDEgPDwgZmxhZ09mZnNldCArKztcbmNvbnN0IF9MZWZ0ID0gMSA8PCBmbGFnT2Zmc2V0ICsrOyAgICAgICAgICAgIC8vIOW3puWvuem9kFxuY29uc3QgX1JpZ2h0ID0gMSA8PCBmbGFnT2Zmc2V0ICsrOyAgICAgICAgICAgLy8g5Y+z5a+56b2QXG5jb25zdCBfVG9wID0gMSA8PCBmbGFnT2Zmc2V0ICsrOyAgICAgICAgICAgICAvLyDkuIrlr7npvZBcbmNvbnN0IF9Cb3R0b20gPSAxIDw8IGZsYWdPZmZzZXQgKys7ICAgICAgICAgIC8vIOS4i+Wvuem9kFxuY29uc3QgX1N0cmV0Y2hXaWR0aCA9IF9MZWZ0IHwgX1JpZ2h0OyAgICAgICAgICAvLyDmi4nkvLjlrr1cbmNvbnN0IF9TdHJldGNoSGVpZ2h0ID0gX1RvcCB8IF9Cb3R0b207ICAgICAgICAgLy8g5ouJ5Ly46auYXG5cbmNvbnN0IF9GdWxsV2lkdGggPSAxIDw8IGZsYWdPZmZzZXQgKys7ICAgICAgIC8vIOetieavlOWFhea7oeWuvVxuY29uc3QgX0Z1bGxIZWlnaHQgPSAxIDw8IGZsYWdPZmZzZXQgKys7ICAgICAgLy8g562J5q+U5YWF5ruh6auYXG5jb25zdCBfRmluYWwgPSAxIDw8IGZsYWdPZmZzZXQrKztcblxuLyoqICAqL1xuZXhwb3J0IGVudW0gQWRhcHRlclR5cGUge1xuICAgIFRvcCA9IF9Ub3AsXG4gICAgQm90dG9tID0gX0JvdHRvbSxcbiAgICBMZWZ0ID0gX0xlZnQsXG4gICAgUmlnaHQgPSBfUmlnaHQsXG5cbiAgICBTdHJldGNoV2lkdGggPSBfU3RyZXRjaFdpZHRoLFxuICAgIFN0cmV0Y2hIZWlnaHQgPSBfU3RyZXRjaEhlaWdodCxcblxuICAgIEZ1bGxXaWR0aCA9IF9GdWxsV2lkdGgsXG4gICAgRnVsbEhlaWdodCA9IF9GdWxsSGVpZ2h0LFxufVxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0ZXJNZ3Ige1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBZGFwdGVyTWdyID0gbnVsbDsgICAgICAgICAgICAgICAgICAgICAvLyDljZXkvotcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCkge1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBBZGFwdGVyTWdyKCk7ICAgICAgIFxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UudmlzaWJsZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdmlzaWFibGUgc2l6ZTogJHt0aGlzLl9pbnN0YW5jZS52aXNpYmxlU2l6ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICAgIFxuICAgIC8qKiDlsY/luZXlsLrlr7ggKi9cbiAgICBwdWJsaWMgdmlzaWJsZVNpemU6IGNjLlNpemU7XG5cbiAgICBwdWJsaWMgYWRhcHRlQnlUeXBlKGZsYWc6IG51bWJlciwgbm9kZTogY2MuTm9kZSwgZGlzdGFuY2UgPSAwKSB7XG4gICAgICAgIGxldCB0RmxhZyA9IF9GaW5hbDtcbiAgICAgICAgd2hpbGUgKHRGbGFnID4gMCkge1xuICAgICAgICAgICAgaWYgKHRGbGFnICYgZmxhZylcbiAgICAgICAgICAgICAgICB0aGlzLl9kb0FkYXB0ZSh0RmxhZywgbm9kZSwgZGlzdGFuY2UpO1xuICAgICAgICAgICAgdEZsYWcgPSB0RmxhZyA+PiAxO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3aWRnZXQgPSBub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICB3aWRnZXQudGFyZ2V0ID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RvQWRhcHRlKGZsYWc6IG51bWJlciwgbm9kZTogY2MuTm9kZSwgZGlzdGFuY2U6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IHdpZGdldCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIGlmKCF3aWRnZXQpIHtcbiAgICAgICAgICAgIHdpZGdldCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGZsYWcpIHtcbiAgICAgICAgICAgIGNhc2UgX05vbmU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIF9MZWZ0OlxuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWJzb2x1dGVMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IGRpc3RhbmNlID8gZGlzdGFuY2UgOiAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBfUmlnaHQ6XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWJzb2x1dGVSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gZGlzdGFuY2UgPyBkaXN0YW5jZSA6IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIF9Ub3A6XG4gICAgICAgICAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHsgICAgIC8vIOW+ruS/oeWwj+a4uOaIj+mAgumFjeWImOa1t+Wxj1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVudUluZm8gPSB3aW5kb3dbXCJ3eFwiXS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzeXN0ZW1JbmZvID0gd2luZG93W1wid3hcIl0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgKz0gY2MuZmluZChcIkNhbnZhc1wiKS5oZWlnaHQgKiAobWVudUluZm8udG9wIC8gc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWJzb2x1dGVUb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdpZGdldC50b3AgPSBkaXN0YW5jZSA/IGRpc3RhbmNlIDogMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgX0JvdHRvbTpcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWJzb2x1dGVCb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSBkaXN0YW5jZSA/IGRpc3RhbmNlIDogMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgX0Z1bGxXaWR0aDpcbiAgICAgICAgICAgICAgICBub2RlLmhlaWdodCAvPSBub2RlLndpZHRoIC8gdGhpcy52aXNpYmxlU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy52aXNpYmxlU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgX0Z1bGxIZWlnaHQ6XG4gICAgICAgICAgICAgICAgbm9kZS53aWR0aCAvPSBub2RlLmhlaWdodCAvIHRoaXMudmlzaWJsZVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy52aXNpYmxlU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKiDnp7vpmaQgKi9cbiAgICByZW1vdmVBZGFwdGF0ZXIobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZihub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19