
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/CacheUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7caav8yMdOrZNrAy/SIOIW', 'CacheUtils');
// Script/Common/Components/CacheUtils.ts

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
var ResMgr_1 = require("../../UIFrame/ResMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CacheUtils = /** @class */ (function (_super) {
    __extends(CacheUtils, _super);
    function CacheUtils() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.com = null;
        _this.passTime = 0;
        return _this;
    }
    CacheUtils.prototype.onLoad = function () {
        this.com = this.getComponent(cc.Label);
    };
    CacheUtils.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            _this.node.x += e.getDeltaX();
            _this.node.y += e.getDeltaY();
        }, this);
    };
    CacheUtils.prototype.update = function (dt) {
        this.passTime += dt;
        if (this.passTime > 1) {
            this.passTime = 0;
            this.com.string = ResMgr_1.default.inst.computeTextureCache();
        }
    };
    CacheUtils = __decorate([
        ccclass
    ], CacheUtils);
    return CacheUtils;
}(cc.Component));
exports.default = CacheUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvQ2FjaGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFFSSx3QkFBd0I7UUFGNUIscUVBeUJDO1FBckJVLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFZcEIsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFTekIsQ0FBQztJQXBCRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBc0I7WUFDOUQsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBR0QsMkJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDdkQ7SUFFTCxDQUFDO0lBeEJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBeUI5QjtJQUFELGlCQUFDO0NBekJELEFBeUJDLENBekJ1QyxFQUFFLENBQUMsU0FBUyxHQXlCbkQ7a0JBekJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc01nciBmcm9tIFwiLi4vLi4vVUlGcmFtZS9SZXNNZ3JcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZVV0aWxzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgcHVibGljIGNvbTogY2MuTGFiZWwgPSBudWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuY29tID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSBlLmdldERlbHRhWCgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gZS5nZXREZWx0YVkoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYXNzVGltZSA9IDA7XG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLnBhc3NUaW1lICs9IGR0O1xuICAgICAgICBpZih0aGlzLnBhc3NUaW1lID4gMSkge1xuICAgICAgICAgICAgdGhpcy5wYXNzVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbS5zdHJpbmcgPSBSZXNNZ3IuaW5zdC5jb21wdXRlVGV4dHVyZUNhY2hlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIl19