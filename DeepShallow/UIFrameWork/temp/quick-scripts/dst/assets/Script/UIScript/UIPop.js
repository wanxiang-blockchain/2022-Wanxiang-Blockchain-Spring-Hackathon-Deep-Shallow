
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fc71BDtH9K7Js1AoFqRdoT', 'UIPop');
// Script/UIScript/UIPop.ts

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
var SysDefine_1 = require("../UIFrame/config/SysDefine");
var Struct_1 = require("../UIFrame/Struct");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPop = /** @class */ (function (_super) {
    __extends(UIPop, _super);
    function UIPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modalType = new Struct_1.ModalType(SysDefine_1.ModalOpacity.OpacityHalf);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    UIPop.prototype.start = function () {
        var _this = this;
        this.view.Close.addClick(function () {
            _this.closeSelf();
        }, this);
    };
    UIPop = __decorate([
        ccclass
    ], UIPop);
    return UIPop;
}(UIForm_1.UIWindow));
exports.default = UIPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlQb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseURBQTJEO0FBQzNELDRDQUE4QztBQUM5Qyw0Q0FBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVE7SUFBM0M7UUFBQSxxRUFnQkM7UUFkRyxlQUFTLEdBQWMsSUFBSSxrQkFBUyxDQUFDLHdCQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7O1FBYS9ELGlCQUFpQjtJQUNyQixDQUFDO0lBVkcsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNyQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQVpnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ0J6QjtJQUFELFlBQUM7Q0FoQkQsQUFnQkMsQ0FoQmtDLGlCQUFRLEdBZ0IxQztrQkFoQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQb3BfQXV0byBmcm9tIFwiLi4vQXV0b1NjcmlwdHMvVUlQb3BfQXV0b1wiO1xuaW1wb3J0IENvY29zSGVscGVyIGZyb20gXCIuLi9VSUZyYW1lL0NvY29zSGVscGVyXCI7XG5pbXBvcnQgeyBNb2RhbE9wYWNpdHkgfSBmcm9tIFwiLi4vVUlGcmFtZS9jb25maWcvU3lzRGVmaW5lXCI7XG5pbXBvcnQgeyBNb2RhbFR5cGUgfSBmcm9tIFwiLi4vVUlGcmFtZS9TdHJ1Y3RcIjtcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQb3AgZXh0ZW5kcyBVSVdpbmRvdyB7XG5cbiAgICBtb2RhbFR5cGU6IE1vZGFsVHlwZSA9IG5ldyBNb2RhbFR5cGUoTW9kYWxPcGFjaXR5Lk9wYWNpdHlIYWxmKTtcblxuICAgIHZpZXc6IFVJUG9wX0F1dG87XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy52aWV3LkNsb3NlLmFkZENsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VTZWxmKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==