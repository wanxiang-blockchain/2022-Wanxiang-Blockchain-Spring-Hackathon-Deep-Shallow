"use strict";
cc._RF.push(module, '2f8edzvxDRFL6ID2paZM9Ss', 'UIMobx');
// Script/UIScript/UIMobx.ts

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
var mobx_1 = require("../Common/Mobx/mobx");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIMobx = /** @class */ (function (_super) {
    __extends(UIMobx, _super);
    function UIMobx() {
        var _this = _super.call(this) || this;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.obj = { num3: 0 };
        // mobx6版本中使用注解必须调用此方法
        mobx_1.makeAutoObservable(_this);
        return _this;
    }
    Object.defineProperty(UIMobx.prototype, "total", {
        get: function () {
            return this.num1 * this.num2;
        },
        enumerable: false,
        configurable: true
    });
    UIMobx.prototype.refreshView = function () {
        this.view.Txt1.string = '' + this.num1;
        this.view.Txt2.string = '' + this.num2;
        this.view.Txt3.string = '' + this.total;
    };
    // onLoad () {}
    UIMobx.prototype.start = function () {
        var _this = this;
        this.view.Close.addClick(function () {
            _this.closeSelf();
        }, this);
        mobx_1.autorun(this.refreshView.bind(this));
        mobx_1.when(function () { return _this.total > 10; }).then(function () {
            _this.view.Txt4.node.active = _this.total > 10;
        });
        mobx_1.reaction((function () { return _this.obj && _this.obj.num3; }), function (arg, prev, r) {
            if (!cc.isValid(_this.node))
                return;
            _this.view.Txt5.string = '' + arg;
            // r.dispose();
        });
        this.view.Btn1.addClick(function () {
            _this.num1++;
        }, this);
        this.view.Btn2.addClick(function () {
            _this.num2++;
        }, this);
        this.view.Btn3.addClick(function () {
            _this.obj.num3++;
        }, this);
    };
    UIMobx.prototype.onShow = function () {
    };
    __decorate([
        mobx_1.observable
    ], UIMobx.prototype, "num1", void 0);
    __decorate([
        mobx_1.observable
    ], UIMobx.prototype, "num2", void 0);
    __decorate([
        mobx_1.computed
    ], UIMobx.prototype, "total", null);
    __decorate([
        mobx_1.observable
    ], UIMobx.prototype, "obj", void 0);
    UIMobx = __decorate([
        ccclass
    ], UIMobx);
    return UIMobx;
}(UIForm_1.UIWindow));
exports.default = UIMobx;

cc._RF.pop();