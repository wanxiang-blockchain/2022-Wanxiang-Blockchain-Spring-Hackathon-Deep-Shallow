
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/SpinePlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvU3BpbmVQbHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBZ0UsRUFBRSxDQUFDLFVBQVUsRUFBNUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsU0FBUyxlQUFpQixDQUFDO0FBTXBGO0lBQXVDLDZCQUFXO0lBQWxEO1FBQUEscUVBMkJDO1FBeEJHLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBd0JuQixDQUFDO0lBckJHLGVBQWU7SUFFZix5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFVO1FBQ2QsSUFBRyxDQUFDLFNBQVMsRUFBRTtZQUNYLGlCQUFNLE1BQU0sWUFBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixPQUFRO1NBQ1g7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixZQUFZO1FBQ1osRUFBRSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDbkMsWUFBWTtRQUNaLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLFlBQVk7UUFDWixFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3BDLGFBQWE7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQzs2Q0FDM0I7SUFIRSxTQUFTO1FBTDdCLE9BQU87UUFDUCxJQUFJLENBQUMsdUNBQXVDLENBQUM7UUFDN0MsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsZ0RBQWdELENBQUM7T0FDdkMsU0FBUyxDQTJCN0I7SUFBRCxnQkFBQztDQTNCRCxBQTJCQyxDQTNCc0MsRUFBRSxDQUFDLFFBQVEsR0EyQmpEO2tCQTNCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSwgbWVudSwgaGVscCwgaW5zcGVjdG9yfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQG1lbnUoJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC51aS9TcGluZVBsdXMnKVxuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AaGVscCgnYXBwOi8vZG9jcy9odG1sL2NvbXBvbmVudHMvc3BpbmUuaHRtbCcpXG5AaW5zcGVjdG9yKCdwYWNrYWdlczovL2N1c3RvbS1pbnNwZWN0b3IvaW5zcGVjdG9yL3NwaW5lLmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5lUGx1cyBleHRlbmRzIHNwLlNrZWxldG9uIHtcblxuICAgIEBwcm9wZXJ0eSh7b3ZlcnJpZGU6IHRydWUsIHZpc2libGU6IHRydWV9KVxuICAgIHBhdXNlZCA9IGZhbHNlO1xuXG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkgcmV0dXJuO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY2MuZW5naW5lLl9hbmltYXRpbmdJbkVkaXRNb2RlID0gMTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNjLmVuZ2luZS5hbmltYXRpbmdJbkVkaXRNb2RlID0gMTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGR0ICo9IHRoaXMudGltZVNjYWxlICogc3AudGltZVNjYWxlO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlYWx0aW1lKGR0KTtcbiAgICB9XG59Il19