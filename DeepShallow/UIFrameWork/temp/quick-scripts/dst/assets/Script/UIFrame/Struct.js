
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/Struct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9TdHJ1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQWtEO0FBRWxEO0lBUUksbUJBQVksT0FBa0MsRUFBRSxjQUFvQixFQUFFLFFBQWEsRUFBRSxVQUFjO1FBQXZGLHdCQUFBLEVBQUEsVUFBVSx3QkFBWSxDQUFDLFdBQVc7UUFBRSwrQkFBQSxFQUFBLHNCQUFvQjtRQUFFLHlCQUFBLEVBQUEsZUFBYTtRQUFFLDJCQUFBLEVBQUEsZ0JBQWM7UUFQNUYsWUFBTyxHQUFpQix3QkFBWSxDQUFDLFdBQVcsQ0FBQztRQUNqRCxtQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFNLFNBQVM7UUFDdEMsYUFBUSxHQUFHLElBQUksQ0FBQyxDQUFhLE9BQU87UUFDcEMsZUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFZLE9BQU87UUFDcEMsYUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFZLEtBQUs7UUFJckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLDhCQUFTO0FBbUN0QixJQUFZLFNBV1g7QUFYRCxXQUFZLFNBQVM7SUFDakIseUNBQUksQ0FBQTtJQUNKLHVDQUFHLENBQUE7SUFDSCx1Q0FBRyxDQUFBO0lBQ0gsMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0lBQ0osdUNBQUcsQ0FBQTtJQUNILDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wseUNBQUksQ0FBQTtBQUNSLENBQUMsRUFYVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVdwQjtBQUVELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQiwyREFBWSxDQUFBO0lBQ1osaUVBQWUsQ0FBQTtJQUNmLHlDQUFHLENBQUE7QUFDUCxDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbE9wYWNpdHkgfSBmcm9tIFwiLi9jb25maWcvU3lzRGVmaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbFR5cGUge1xuICAgIHB1YmxpYyBvcGFjaXR5OiBNb2RhbE9wYWNpdHkgPSBNb2RhbE9wYWNpdHkuT3BhY2l0eUhhbGY7XG4gICAgcHVibGljIGNsaWNrTWFza0Nsb3NlID0gZmFsc2U7ICAgICAgLy8g54K55Ye76Zi05b2x5YWz6ZetXG4gICAgcHVibGljIGlzRWFzaW5nID0gdHJ1ZTsgICAgICAgICAgICAgLy8g57yT5Yqo5a6e546wXG4gICAgcHVibGljIGVhc2luZ1RpbWUgPSAwLjI7ICAgICAgICAgICAgLy8g57yT5Yqo5pe26Ze0XG4gICAgcHVibGljIGR1YWxCbHVyID0gZmFsc2U7ICAgICAgICAgICAgLy8g5qih57OKXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihvcGFjaXR5ID0gTW9kYWxPcGFjaXR5Lk9wYWNpdHlIYWxmLCBDbGlja01hc2tDbG9zZT1mYWxzZSwgSXNFYXNpbmc9dHJ1ZSwgRWFzaW5nVGltZT0wLjIpIHtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jbGlja01hc2tDbG9zZSA9IENsaWNrTWFza0Nsb3NlO1xuICAgICAgICB0aGlzLmlzRWFzaW5nID0gSXNFYXNpbmc7XG4gICAgICAgIHRoaXMuZWFzaW5nVGltZSA9IEVhc2luZ1RpbWU7XG4gICAgfVxuXG4gICAgdXNlQmx1cigpIHtcbiAgICAgICAgdGhpcy5kdWFsQmx1ciA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUNvbmZpZyB7XG4gICAgcHJlZmFiVXJsOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtRGF0YSB7XG4gICAgbG9hZGluZ0Zvcm0/OiBJRm9ybUNvbmZpZztcbiAgICBvbkNsb3NlPzogRnVuY3Rpb247XG4gICAgLy8gd2luZG9357G75Z6L55qEZm9ybeaJjeaciVxuICAgIHByaW9yaXR5PzogRVByaW9yaXR5OyAgICAgICAvLyDlvZPliY3mnInlt7Lnu4/mmL7npLrnmoR3aW5kb3fml7YsIOS8muaUvuetieW+heWIl+ihqOmHjCwg55+l6YGTIOW9k+WJjeayoeacieato+WcqOaYvuekuueahHdpbmRvd+aXtuaJjeiiq+aYvuekulxuICAgIHNob3dXYWl0PzogYm9vbGVhbjsgICAgICAgICAvLyDkvJjlhYjnuqco5Lya5b2x5ZON5by556qX55qE5bGC57qnLCDlhYjliKTmlq3kvJjlhYjnuqcsIOWcqOWIpOaWrea3u+WKoOmhuuW6jylcbiAgICB1bmlxdWVJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gRVByaW9yaXR5IHtcbiAgICBaRVJPLFxuICAgIE9ORSxcbiAgICBUV08sXG4gICAgVEhSRUUsXG4gICAgRk9VUixcbiAgICBGSVZFLFxuICAgIFNJWCxcbiAgICBTRVZFTixcbiAgICBFSUdIVCxcbiAgICBOSU5FLFxufVxuXG5leHBvcnQgZW51bSBFQ2xvc2VUeXBlIHtcbiAgICBDbG9zZUFuZEhpZGUsICAgICAgICAgICAvLyDlhbPpl63lkI7pmpDol49cbiAgICBDbG9zZUFuZERlc3RvcnksICAgICAgICAvLyDlhbPpl63lkI7plIDmr4FcbiAgICBMUlUsICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKhMUlXmjqfliLblhbbplIDmr4Hml7bmnLpcbn0iXX0=