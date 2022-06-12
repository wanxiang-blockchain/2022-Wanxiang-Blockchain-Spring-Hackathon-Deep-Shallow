"use strict";
cc._RF.push(module, '30062r80kNGeKSQLxsTnRWf', 'SpinePlus');
// Script/Common/Components/SpinePlus.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help, inspector = _a.inspector;
var SpinePlus = /** @class */ (function (_super) {
    __extends(SpinePlus, _super);
    function SpinePlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paused = false;
        return _this;
    }
    // onLoad () {}
    SpinePlus.prototype.start = function () {
    };
    SpinePlus.prototype.update = function (dt) {
        if (!CC_EDITOR) {
            _super.prototype.update.call(this, dt);
            return;
        }
        if (this.paused)
            return;
        //@ts-ignore
        cc.engine._animatingInEditMode = 1;
        //@ts-ignore
        cc.engine.animatingInEditMode = 1;
        //@ts-ignore
        dt *= this.timeScale * sp.timeScale;
        // @ts-ignore
        this._updateRealtime(dt);
    };
    __decorate([
        property({ override: true, visible: true })
    ], SpinePlus.prototype, "paused", void 0);
    SpinePlus = __decorate([
        ccclass,
        menu('i18n:MAIN_MENU.component.ui/SpinePlus'),
        executeInEditMode,
        help('app://docs/html/components/spine.html'),
        inspector('packages://custom-inspector/inspector/spine.js')
    ], SpinePlus);
    return SpinePlus;
}(sp.Skeleton));
exports.default = SpinePlus;

cc._RF.pop();