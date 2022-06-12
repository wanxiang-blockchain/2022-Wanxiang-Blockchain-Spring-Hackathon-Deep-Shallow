"use strict";
cc._RF.push(module, 'd393a5ZdPJN0q6Ay73BaSB9', 'BatchComponent');
// Script/Common/Components/BatchComponent.ts

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
var BatchAssembler_1 = require("../Assemblers/BatchAssembler");
var TraversalMode;
(function (TraversalMode) {
    TraversalMode[TraversalMode["Default"] = 0] = "Default";
    TraversalMode[TraversalMode["SameName"] = 1] = "SameName";
})(TraversalMode || (TraversalMode = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BantchComponent = /** @class */ (function (_super) {
    __extends(BantchComponent, _super);
    function BantchComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = 0;
        return _this;
    }
    BantchComponent.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        if (!CC_NATIVERENDERER)
            this.node._renderFlag |= cc.RenderFlow.FLAG_POST_RENDER;
    };
    BantchComponent.prototype._resetAssembler = function () {
        this.setVertsDirty();
        var assembler = this._assembler = new BatchAssembler_1.default();
        assembler.init(this);
    };
    __decorate([
        property({ type: cc.Enum(TraversalMode), tooltip: "遍历模式: Default 默认的广度遍历, SameName 同名结点同批次" })
    ], BantchComponent.prototype, "mode", void 0);
    BantchComponent = __decorate([
        ccclass
    ], BantchComponent);
    return BantchComponent;
}(cc.RenderComponent));
exports.default = BantchComponent;

cc._RF.pop();