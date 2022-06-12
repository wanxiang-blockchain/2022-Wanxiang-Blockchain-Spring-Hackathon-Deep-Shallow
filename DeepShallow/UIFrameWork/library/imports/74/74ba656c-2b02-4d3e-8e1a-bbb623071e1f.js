"use strict";
cc._RF.push(module, '74ba6VsKwJNPo4au7YjBx4f', 'UIDungeon_Auto');
// Script/AutoScripts/UIDungeon_Auto.ts

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
var ButtonPlus_1 = require("./../Common/Components/ButtonPlus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIDungeon_Auto = /** @class */ (function (_super) {
    __extends(UIDungeon_Auto, _super);
    function UIDungeon_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Items = null;
        _this.Back = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], UIDungeon_Auto.prototype, "Items", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIDungeon_Auto.prototype, "Back", void 0);
    UIDungeon_Auto = __decorate([
        ccclass
    ], UIDungeon_Auto);
    return UIDungeon_Auto;
}(cc.Component));
exports.default = UIDungeon_Auto;

cc._RF.pop();