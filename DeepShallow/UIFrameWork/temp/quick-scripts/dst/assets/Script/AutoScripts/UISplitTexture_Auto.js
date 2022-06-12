
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AutoScripts/UISplitTexture_Auto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e756flXrulLpp2O1qP7l/Ru', 'UISplitTexture_Auto');
// Script/AutoScripts/UISplitTexture_Auto.ts

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
var UISplitTexture_Auto = /** @class */ (function (_super) {
    __extends(UISplitTexture_Auto, _super);
    function UISplitTexture_Auto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Close = null;
        return _this;
    }
    __decorate([
        property(ButtonPlus_1.default)
    ], UISplitTexture_Auto.prototype, "Close", void 0);
    UISplitTexture_Auto = __decorate([
        ccclass
    ], UISplitTexture_Auto);
    return UISplitTexture_Auto;
}(cc.Component));
exports.default = UISplitTexture_Auto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQXV0b1NjcmlwdHMvVUlTcGxpdFRleHR1cmVfQXV0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBMEQ7QUFFcEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFJQztRQUZBLFdBQUssR0FBZSxJQUFJLENBQUM7O0lBRTFCLENBQUM7SUFGQTtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3NEQUNJO0lBRkwsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0FJdkM7SUFBRCwwQkFBQztDQUpELEFBSUMsQ0FKZ0QsRUFBRSxDQUFDLFNBQVMsR0FJNUQ7a0JBSm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEJ1dHRvblBsdXMgZnJvbSBcIi4vLi4vQ29tbW9uL0NvbXBvbmVudHMvQnV0dG9uUGx1c1wiXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3BsaXRUZXh0dXJlX0F1dG8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoQnV0dG9uUGx1cylcblx0Q2xvc2U6IEJ1dHRvblBsdXMgPSBudWxsO1xuIFxufSJdfQ==