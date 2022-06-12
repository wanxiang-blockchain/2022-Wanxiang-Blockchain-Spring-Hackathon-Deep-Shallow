"use strict";
cc._RF.push(module, '294d4cuj8FOwrGZgHqxSfsR', 'Struct');
// Script/UIFrame/Struct.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECloseType = exports.EPriority = exports.ModalType = void 0;
var SysDefine_1 = require("./config/SysDefine");
var ModalType = /** @class */ (function () {
    function ModalType(opacity, ClickMaskClose, IsEasing, EasingTime) {
        if (opacity === void 0) { opacity = SysDefine_1.ModalOpacity.OpacityHalf; }
        if (ClickMaskClose === void 0) { ClickMaskClose = false; }
        if (IsEasing === void 0) { IsEasing = true; }
        if (EasingTime === void 0) { EasingTime = 0.2; }
        this.opacity = SysDefine_1.ModalOpacity.OpacityHalf;
        this.clickMaskClose = false; // 点击阴影关闭
        this.isEasing = true; // 缓动实现
        this.easingTime = 0.2; // 缓动时间
        this.dualBlur = false; // 模糊
        this.opacity = opacity;
        this.clickMaskClose = ClickMaskClose;
        this.isEasing = IsEasing;
        this.easingTime = EasingTime;
    }
    ModalType.prototype.useBlur = function () {
        this.dualBlur = true;
        return this;
    };
    return ModalType;
}());
exports.ModalType = ModalType;
var EPriority;
(function (EPriority) {
    EPriority[EPriority["ZERO"] = 0] = "ZERO";
    EPriority[EPriority["ONE"] = 1] = "ONE";
    EPriority[EPriority["TWO"] = 2] = "TWO";
    EPriority[EPriority["THREE"] = 3] = "THREE";
    EPriority[EPriority["FOUR"] = 4] = "FOUR";
    EPriority[EPriority["FIVE"] = 5] = "FIVE";
    EPriority[EPriority["SIX"] = 6] = "SIX";
    EPriority[EPriority["SEVEN"] = 7] = "SEVEN";
    EPriority[EPriority["EIGHT"] = 8] = "EIGHT";
    EPriority[EPriority["NINE"] = 9] = "NINE";
})(EPriority = exports.EPriority || (exports.EPriority = {}));
var ECloseType;
(function (ECloseType) {
    ECloseType[ECloseType["CloseAndHide"] = 0] = "CloseAndHide";
    ECloseType[ECloseType["CloseAndDestory"] = 1] = "CloseAndDestory";
    ECloseType[ECloseType["LRU"] = 2] = "LRU";
})(ECloseType = exports.ECloseType || (exports.ECloseType = {}));

cc._RF.pop();