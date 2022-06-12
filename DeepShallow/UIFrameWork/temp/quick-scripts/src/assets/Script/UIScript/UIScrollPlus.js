"use strict";
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