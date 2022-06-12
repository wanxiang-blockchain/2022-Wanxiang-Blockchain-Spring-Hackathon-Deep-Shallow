
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UIMap_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adecbZD4u1CU5tY/U48Fb7E', 'UIMap_Auto');
// Script/AutoScripts/UIMap_Auto.ts

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
var UIMap_Auto = /** @class */ (function (_super) {
    __extends(UIMap_Auto, _super);
    function UIMap_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Round = null;
        _this.Back = null;
        return _this;
    }
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMap_Auto.prototype, "Round", void 0);
    __decorate([
        property(ButtonPlus_1.default)
    ], UIMap_Auto.prototype, "Back", void 0);
    UIMap_Auto = __decorate([
        ccclass
    ], UIMap_Auto);
    return UIMap_Auto;
}(cc.Component));
exports.default = UIMap_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlNYXBfQXV0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBMEQ7QUFFcEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFNQztRQUpBLFdBQUssR0FBZSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFlLElBQUksQ0FBQzs7SUFFekIsQ0FBQztJQUpBO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7NkNBQ0k7SUFFekI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzs0Q0FDRztJQUpKLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FNOUI7SUFBRCxpQkFBQztDQU5ELEFBTUMsQ0FOdUMsRUFBRSxDQUFDLFNBQVMsR0FNbkQ7a0JBTm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCdXR0b25QbHVzIGZyb20gXCIuLy4uL0NvbW1vbi9Db21wb25lbnRzL0J1dHRvblBsdXNcIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hcF9BdXRvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdFJvdW5kOiBCdXR0b25QbHVzID0gbnVsbDtcblx0QHByb3BlcnR5KEJ1dHRvblBsdXMpXG5cdEJhY2s6IEJ1dHRvblBsdXMgPSBudWxsO1xuIFxufSJdfQ==