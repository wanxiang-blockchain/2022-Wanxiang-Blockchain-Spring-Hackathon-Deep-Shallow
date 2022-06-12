"use strict";
cc._RF.push(module, 'f7caav8yMdOrZNrAy/SIOIW', 'CacheUtils');
// Script/Common/Components/CacheUtils.ts

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
var ResMgr_1 = require("../../UIFrame/ResMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CacheUtils = /** @class */ (function (_super) {
    __extends(CacheUtils, _super);
    function CacheUtils() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.com = null;
        _this.passTime = 0;
        return _this;
    }
    CacheUtils.prototype.onLoad = function () {
        this.com = this.getComponent(cc.Label);
    };
    CacheUtils.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            _this.node.x += e.getDeltaX();
            _this.node.y += e.getDeltaY();
        }, this);
    };
    CacheUtils.prototype.update = function (dt) {
        this.passTime += dt;
        if (this.passTime > 1) {
            this.passTime = 0;
            this.com.string = ResMgr_1.default.inst.computeTextureCache();
        }
    };
    CacheUtils = __decorate([
        ccclass
    ], CacheUtils);
    return CacheUtils;
}(cc.Component));
exports.default = CacheUtils;

cc._RF.pop();