
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UIHome_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '234c2u0kZdBeKPEjpbkt22t', 'UIHome_Auto');
// Script/AutoScripts/UIHome_Auto.ts

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
var UIHome_Auto = /** @class */ (function (_super) {
    __extends(UIHome_Auto, _super);
    function UIHome_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Logo = null;
        _this.Start = null;
        _this.About = null;
        _this.Back = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], UIHome_Auto.prototype, "Logo", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIHome_Auto.prototype, "Start", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIHome_Auto.prototype, "About", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIHome_Auto.prototype, "Back", void 0);
    UIHome_Auto = __decorate([
        ccclass
    ], UIHome_Auto);
    return UIHome_Auto;
}(cc.Component));
exports.default = UIHome_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlIb21lX0F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBVUM7UUFSQSxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBZSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFlLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWUsSUFBSSxDQUFDOztJQUV6QixDQUFDO0lBUkE7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzhDQUNJO0lBRXpCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7OENBQ0k7SUFFekI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzs2Q0FDRztJQVJKLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FVL0I7SUFBRCxrQkFBQztDQVZELEFBVUMsQ0FWd0MsRUFBRSxDQUFDLFNBQVMsR0FVcEQ7a0JBVm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCdXR0b25QbHVzIGZyb20gXCIuLy4uL0NvbW1vbi9Db21wb25lbnRzL0J1dHRvblBsdXNcIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUhvbWVfQXV0byBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxuXHRMb2dvOiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdFN0YXJ0OiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdEFib3V0OiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdEJhY2s6IEJ1dHRvblBsdXMgPSBudWxsO1xuIFxufSJdfQ==