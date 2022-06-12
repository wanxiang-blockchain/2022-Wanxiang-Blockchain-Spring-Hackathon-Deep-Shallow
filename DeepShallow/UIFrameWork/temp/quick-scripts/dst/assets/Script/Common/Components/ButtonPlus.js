
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/ButtonPlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvQnV0dG9uUGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFFeEMsSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUE1RSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxTQUFTLGVBQWlCLENBQUM7QUFNcEY7SUFBd0MsOEJBQVM7SUFBakQ7UUFBQSxxRUF1R0M7UUFwR0csY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLGNBQWM7UUFDZCxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixNQUFNO1FBQ04sc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBR3hCLE9BQU87UUFFUCxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPO1FBRVAsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFFZCxvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUFnRmxDLENBQUM7SUE5RUcsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7U0FDZjtJQUNMLENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsWUFB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QyxDQUFDO3NEQUNkO0lBVW5CO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDO3FEQUNWO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO3FEQUNWO0lBcEJELFVBQVU7UUFMOUIsT0FBTztRQUNQLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQztRQUM5QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQztPQUMzQixVQUFVLENBdUc5QjtJQUFELGlCQUFDO0NBdkdELEFBdUdDLENBdkd1QyxFQUFFLENBQUMsTUFBTSxHQXVHaEQ7a0JBdkdvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi8uLi9VSUZyYW1lL1NvdW5kTWdyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIG1lbnUsIGhlbHAsIGluc3BlY3Rvcn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQudWkvQnV0dG9uUGx1cycpXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBoZWxwKCdpMThuOkNPTVBPTkVOVC5oZWxwX3VybC5idXR0b24nKVxuQGluc3BlY3RvcigncGFja2FnZXM6Ly9idXR0b25wbHVzL2luc3BlY3Rvci5qcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25QbHVzIGV4dGVuZHMgY2MuQnV0dG9uIHtcblxuICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDpcIumfs+aViOi3r+W+hFwiLCB0eXBlOiAnJywgbXVsdGlsaW5lOiB0cnVlLCBmb3JtZXJseVNlcmlhbGl6ZWRBczogJ19OJHN0cmluZyd9KVxuICAgIGF1ZGlvVXJsID0gJyc7XG4gICAgQHByb3BlcnR5KHt0b29sdGlwOiBcIuWxj+iUvei/nue7reeCueWHu1wifSlcbiAgICBvcGVuQ29udGludW91cyA9IHRydWU7XG4gICAgQHByb3BlcnR5KHt0b29sdGlwOlwi5bGP6JS95pe26Ze0LCDljZXkvY0656eSXCJ9KVxuICAgIGNvbnRpbnVvdXNUaW1lID0gMTtcblxuICAgIC8vIGZhbHNl6KGo56S65Y+v5Lul54K55Ye7XG4gICAgY29udGludW91czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIOWumuaXtuWZqFxuICAgIF9jb250aW51b3VzVGltZXIgPSBudWxsO1xuICAgIFxuXG4gICAgLy8g6ZW/5oyJ6Kem5Y+RXG4gICAgQHByb3BlcnR5KHt0b29sdGlwOiBcIuaYr+WQpuW8gOWQr+mVv+aMieS6i+S7tlwifSlcbiAgICBvcGVuTG9uZ1ByZXNzID0gZmFsc2U7XG4gICAgLy8g6Kem5Y+R5pe26Ze0XG4gICAgQHByb3BlcnR5KHt0b29sdGlwOiBcIumVv+aMieaXtumXtFwifSlcbiAgICBsb25nUHJlc3NUaW1lID0gMTtcbiAgICBsb25nUHJlc3NGbGFnID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGxvbmdQcmVzc1RpbWVyID0gbnVsbDtcbiAgICBcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jb250aW51b3VzID0gZmFsc2U7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5fY29udGludW91c1RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY29udGludW91c1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRpbnVvdXNUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5sb25nUHJlc3NUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5sb25nUHJlc3NUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqIOmHjeWGmSAqL1xuICAgIF9vblRvdWNoQmVnYW4gKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcmFjdGFibGUgfHwgIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XG4gXG4gICAgICAgIGlmKHRoaXMub3BlbkxvbmdQcmVzcyAmJiAhdGhpcy5sb25nUHJlc3NGbGFnKSB7ICAgIC8vIOW8gOWQr+mVv+aMiVxuICAgICAgICAgICAgaWYodGhpcy5sb25nUHJlc3NUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5sb25nUHJlc3NUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8g6L+Y5Zyo6Kem5pG45LitIOinpuWPkeS6i+S7tlxuICAgICAgICAgICAgICAgIGlmKHRoaXNbXCJfcHJlc3NlZFwiXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgnbG9uZ2NsaWNrU3RhcnQnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb25nUHJlc3NGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMubG9uZ1ByZXNzVGltZSAqIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1tcIl9wcmVzc2VkXCJdID0gdHJ1ZTtcbiAgICAgICAgdGhpc1tcIl91cGRhdGVTdGF0ZVwiXSgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgX29uVG91Y2hFbmRlZChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJhY3RhYmxlIHx8ICF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xuICAgICAgICBpZih0aGlzW1wiX3ByZXNzZWRcIl0gJiYgdGhpcy5sb25nUHJlc3NGbGFnKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgnbG9uZ2NsaWNrRW5kJywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmxvbmdQcmVzc0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW1wiX3ByZXNzZWRcIl0gJiYgIXRoaXMuY29udGludW91cykge1xuICAgICAgICAgICAgdGhpcy5jb250aW51b3VzID0gdGhpcy5vcGVuQ29udGludW91cyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLmNsaWNrRXZlbnRzLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgICAgICBTb3VuZE1nci5pbnN0LnBsYXlFZmZlY3QodGhpcy5hdWRpb1VybClcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5Db250aW51b3VzKSB7XG4gICAgICAgICAgICAgICB0aGlzLl9jb250aW51b3VzVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGludW91cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy5jb250aW51b3VzVGltZSAqIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXNbXCJfcHJlc3NlZFwiXSA9IGZhbHNlO1xuICAgICAgICB0aGlzW1wiX3VwZGF0ZVN0YXRlXCJdKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBfb25Ub3VjaENhbmNlbCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcmFjdGFibGUgfHwgIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XG4gICAgICAgIGlmKHRoaXNbXCJfcHJlc3NlZFwiXSAmJiB0aGlzLmxvbmdQcmVzc0ZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCdsb25nY2xpY2tFbmQnLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9uZ1ByZXNzRmxhZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbXCJfcHJlc3NlZFwiXSA9IGZhbHNlO1xuICAgICAgICB0aGlzW1wiX3VwZGF0ZVN0YXRlXCJdKCk7XG4gICAgfVxuICAgIC8qKiDmt7vliqDngrnlh7vkuovku7YgKi9cbiAgICBhZGRDbGljayhjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMubm9kZS5vbignY2xpY2snLCBjYWxsYmFjaywgdGFyZ2V0KTtcbiAgICB9XG4gICAgLyoqIOa3u+WKoOS4gOS4qumVv+aMieS6i+S7tiAqL1xuICAgIGFkZExvbmdDbGljayhzdGFydEZ1bmM6IEZ1bmN0aW9uLCBlbmRGdW5jOiBGdW5jdGlvbiwgdGFyZ2V0OiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZignbG9uZ2NsaWNrU3RhcnQnKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZignbG9uZ2NsaWNrRW5kJyk7XG4gICAgICAgIHRoaXMubm9kZS5vbignbG9uZ2NsaWNrU3RhcnQnLCBzdGFydEZ1bmMsIHRhcmdldCk7XG4gICAgICAgIHRoaXMubm9kZS5vbignbG9uZ2NsaWNrRW5kJywgZW5kRnVuYywgdGFyZ2V0KTtcbiAgICB9XG59Il19