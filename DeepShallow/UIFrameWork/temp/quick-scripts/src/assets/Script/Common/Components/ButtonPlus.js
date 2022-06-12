"use strict";
cc._RF.push(module, '3eaf8iLxgtDEKVcEmFvrbqy', 'ButtonPlus');
// Script/Common/Components/ButtonPlus.ts

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
var SoundMgr_1 = require("../../UIFrame/SoundMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help, inspector = _a.inspector;
var ButtonPlus = /** @class */ (function (_super) {
    __extends(ButtonPlus, _super);
    function ButtonPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioUrl = '';
        _this.openContinuous = true;
        _this.continuousTime = 1;
        // false表示可以点击
        _this.continuous = false;
        // 定时器
        _this._continuousTimer = null;
        // 长按触发
        _this.openLongPress = false;
        // 触发时间
        _this.longPressTime = 1;
        _this.longPressFlag = false;
        _this.longPressTimer = null;
        return _this;
    }
    ButtonPlus.prototype.onEnable = function () {
        this.continuous = false;
        _super.prototype.onEnable.call(this);
        if (!CC_EDITOR) {
        }
    };
    ButtonPlus.prototype.onDisable = function () {
        if (this._continuousTimer) {
            clearTimeout(this._continuousTimer);
            this._continuousTimer = null;
        }
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
        _super.prototype.onDisable.call(this);
    };
    /** 重写 */
    ButtonPlus.prototype._onTouchBegan = function (event) {
        if (!this.interactable || !this.enabledInHierarchy)
            return;
        if (this.openLongPress && !this.longPressFlag) { // 开启长按
            if (this.longPressTimer)
                clearTimeout(this.longPressTimer);
            this.longPressTimer = setTimeout(function () {
                // 还在触摸中 触发事件
                if (this["_pressed"]) {
                    this.node.emit('longclickStart', this);
                    this.longPressFlag = true;
                }
            }.bind(this), this.longPressTime * 1000);
        }
        this["_pressed"] = true;
        this["_updateState"]();
        event.stopPropagation();
    };
    ButtonPlus.prototype._onTouchEnded = function (event) {
        if (!this.interactable || !this.enabledInHierarchy)
            return;
        if (this["_pressed"] && this.longPressFlag) {
            this.node.emit('longclickEnd', this);
            this.longPressFlag = false;
        }
        else if (this["_pressed"] && !this.continuous) {
            this.continuous = this.openContinuous ? true : false;
            cc.Component.EventHandler.emitEvents(this.clickEvents, event);
            this.node.emit('click', event);
            SoundMgr_1.default.inst.playEffect(this.audioUrl);
            if (this.openContinuous) {
                this._continuousTimer = setTimeout(function () {
                    this.continuous = false;
                }.bind(this), this.continuousTime * 1000);
            }
        }
        this["_pressed"] = false;
        this["_updateState"]();
        event.stopPropagation();
    };
    ButtonPlus.prototype._onTouchCancel = function () {
        if (!this.interactable || !this.enabledInHierarchy)
            return;
        if (this["_pressed"] && this.longPressFlag) {
            this.node.emit('longclickEnd', this);
            this.longPressFlag = false;
        }
        this["_pressed"] = false;
        this["_updateState"]();
    };
    /** 添加点击事件 */
    ButtonPlus.prototype.addClick = function (callback, target) {
        this.node.off('click');
        this.node.on('click', callback, target);
    };
    /** 添加一个长按事件 */
    ButtonPlus.prototype.addLongClick = function (startFunc, endFunc, target) {
        this.node.off('longclickStart');
        this.node.off('longclickEnd');
        this.node.on('longclickStart', startFunc, target);
        this.node.on('longclickEnd', endFunc, target);
    };
    __decorate([
        property({ tooltip: "音效路径", type: '', multiline: true, formerlySerializedAs: '_N$string' })
    ], ButtonPlus.prototype, "audioUrl", void 0);
    __decorate([
        property({ tooltip: "屏蔽连续点击" })
    ], ButtonPlus.prototype, "openContinuous", void 0);
    __decorate([
        property({ tooltip: "屏蔽时间, 单位:秒" })
    ], ButtonPlus.prototype, "continuousTime", void 0);
    __decorate([
        property({ tooltip: "是否开启长按事件" })
    ], ButtonPlus.prototype, "openLongPress", void 0);
    __decorate([
        property({ tooltip: "长按时间" })
    ], ButtonPlus.prototype, "longPressTime", void 0);
    ButtonPlus = __decorate([
        ccclass,
        menu('i18n:MAIN_MENU.component.ui/ButtonPlus'),
        executeInEditMode,
        help('i18n:COMPONENT.help_url.button'),
        inspector('packages://buttonplus/inspector.js')
    ], ButtonPlus);
    return ButtonPlus;
}(cc.Button));
exports.default = ButtonPlus;

cc._RF.pop();