
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UICapture_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07ab8hfkXlPXJHF8cmBfVtX', 'UICapture_Auto');
// Script/AutoScripts/UICapture_Auto.ts

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
var UICapture_Auto = /** @class */ (function (_super) {
    __extends(UICapture_Auto, _super);
    function UICapture_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Back = null;
        _this.Capture = null;
        _this.Pen = null;
        _this.Reaser = null;
        return _this;
    }
    __decorate([
        property(ButtonPlus_1.default)
    ], UICapture_Auto.prototype, "Back", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UICapture_Auto.prototype, "Capture", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UICapture_Auto.prototype, "Pen", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UICapture_Auto.prototype, "Reaser", void 0);
    UICapture_Auto = __decorate([
        ccclass
    ], UICapture_Auto);
    return UICapture_Auto;
}(cc.Component));
exports.default = UICapture_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlDYXB0dXJlX0F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBVUM7UUFSQSxVQUFJLEdBQWUsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFFM0IsU0FBRyxHQUFlLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQWUsSUFBSSxDQUFDOztJQUUzQixDQUFDO0lBUkE7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztnREFDRztJQUV4QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7K0NBQ0U7SUFFdkI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztrREFDSztJQVJOLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FVbEM7SUFBRCxxQkFBQztDQVZELEFBVUMsQ0FWMkMsRUFBRSxDQUFDLFNBQVMsR0FVdkQ7a0JBVm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCdXR0b25QbHVzIGZyb20gXCIuLy4uL0NvbW1vbi9Db21wb25lbnRzL0J1dHRvblBsdXNcIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNhcHR1cmVfQXV0byBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdEBwcm9wZXJ0eShCdXR0b25QbHVzKVxuXHRCYWNrOiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdENhcHR1cmU6IEJ1dHRvblBsdXMgPSBudWxsO1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0UGVuOiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdFJlYXNlcjogQnV0dG9uUGx1cyA9IG51bGw7XG4gXG59Il19