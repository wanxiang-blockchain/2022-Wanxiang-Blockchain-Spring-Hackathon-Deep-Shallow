"use strict";
cc._RF.push(module, '26e9dYfX+tDUpk37S1FVqfx', 'UIFunction');
// Script/UIScript/UIFunction.ts

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
var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var UIConfig_1 = require("./../UIConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIFunction = /** @class */ (function (_super) {
    __extends(UIFunction, _super);
    function UIFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    UIFunction.prototype.start = function () {
        AdapterMgr_1.default.inst.adapteByType(AdapterMgr_1.AdapterType.Bottom, this.node, 50);
        this.view.Setting.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UISetting);
        }, this);
        this.view.Skills.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UISkills);
        }, this);
        this.view.ScrollHelper.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIScrollPlus);
        }, this);
    };
    UIFunction = __decorate([
        ccclass
    ], UIFunction);
    return UIFunction;
}(UIForm_1.UIFixed));
exports.default = UIFunction;

cc._RF.pop();