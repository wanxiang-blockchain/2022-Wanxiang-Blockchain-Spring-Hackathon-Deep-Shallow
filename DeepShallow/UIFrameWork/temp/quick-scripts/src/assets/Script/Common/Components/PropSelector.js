"use strict";
cc._RF.push(module, '95cf9sVxtJHbIz3btfe766G', 'PropSelector');
// Script/Common/Components/PropSelector.ts

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
exports.PropEmum = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, menu = _a.menu, property = _a.property;
var PropEmum;
(function (PropEmum) {
    PropEmum[PropEmum["Active"] = 0] = "Active";
    PropEmum[PropEmum["Position"] = 1] = "Position";
    PropEmum[PropEmum["Rotation"] = 2] = "Rotation";
    PropEmum[PropEmum["Scale"] = 3] = "Scale";
    PropEmum[PropEmum["Anchor"] = 4] = "Anchor";
    PropEmum[PropEmum["Size"] = 5] = "Size";
    PropEmum[PropEmum["Color"] = 6] = "Color";
    PropEmum[PropEmum["Opacity"] = 7] = "Opacity";
    PropEmum[PropEmum["Slew"] = 8] = "Slew";
    PropEmum[PropEmum["Label_String"] = 9] = "Label_String";
    PropEmum[PropEmum["Sprite_Texture"] = 10] = "Sprite_Texture";
})(PropEmum = exports.PropEmum || (exports.PropEmum = {}));
cc['PropEmum'] = PropEmum;
var ControllerId = cc.Enum({});
var PropSelector = /** @class */ (function (_super) {
    __extends(PropSelector, _super);
    function PropSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ctrlId = 0;
        // 被控制的属性
        _this.props = [];
        return _this;
        // update (dt) {} 
    }
    __decorate([
        property({ type: ControllerId, tooltip: "控制器的名称" })
    ], PropSelector.prototype, "ctrlId", void 0);
    __decorate([
        property({ type: [cc.Enum(PropEmum)], tooltip: "被控制的属性" })
    ], PropSelector.prototype, "props", void 0);
    PropSelector = __decorate([
        ccclass,
        menu('i18n:状态控制/PropSelector'),
        executeInEditMode
    ], PropSelector);
    return PropSelector;
}(cc.Component));
exports.default = PropSelector;

cc._RF.pop();