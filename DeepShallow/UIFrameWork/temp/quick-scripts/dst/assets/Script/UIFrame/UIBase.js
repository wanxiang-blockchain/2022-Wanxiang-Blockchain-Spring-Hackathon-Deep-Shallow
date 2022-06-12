
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ba19xmlHJNg4x0oLeSB7Ay', 'UIBase');
// Script/UIFrame/UIBase.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("./UIManager");
var AdapterMgr_1 = require("./AdapterMgr");
var ResMgr_1 = require("./ResMgr");
var FormMgr_1 = require("./FormMgr");
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 窗体id,该窗体的唯一标示(请不要对这个值进行赋值操作, 内部已经实现了对应的赋值) */
        _this.fid = '';
        /** 窗体数据 */
        _this.formData = null;
        /** 窗体类型 */
        _this.formType = null;
        /** 关闭类型, 关闭窗口后销毁, 会将其依赖的资源一并销毁, 采用了引用计数的管理, 不用担心会影响其他窗体 */
        _this.closeType = null;
        /** 是否已经调用过preinit方法 */
        _this._inited = false;
        _this.view = null;
        _this.model = null;
        /** 设置是否挡住触摸事件 */
        _this._blocker = null;
        return _this;
    }
    ;
    UIBase.open = function (param, formData) {
        var uiconfig = this['UIConfig'];
        if (!uiconfig) {
            cc.warn("sorry UIConfig is null, please check UIConfig");
            return;
        }
        FormMgr_1.default.open(uiconfig, param, formData);
    };
    UIBase.close = function () {
        FormMgr_1.default.close(this['UIConfig']);
    };
    /** 预先初始化 */
    UIBase.prototype._preInit = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var errorMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._inited)
                            return [2 /*return*/];
                        this._inited = true;
                        this.view = this.getComponent(this.node.name + "_Auto");
                        return [4 /*yield*/, this.load(params)];
                    case 1:
                        errorMsg = _a.sent();
                        if (errorMsg) {
                            cc.error(errorMsg);
                            this.closeSelf();
                            return [2 /*return*/];
                        }
                        this.onInit(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 可以在这里进行一些资源的加载, 具体实现可以看test下的代码 */
    UIBase.prototype.load = function (params) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    /** 初始化, 只调用一次 */
    UIBase.prototype.onInit = function (params) { };
    // 显示回调
    UIBase.prototype.onShow = function (params) { };
    // 在显示动画结束后回调
    UIBase.prototype.onAfterShow = function (params) { };
    // 隐藏回调
    UIBase.prototype.onHide = function () { };
    // 在隐藏动画结束后回调
    UIBase.prototype.onAfterHide = function () { };
    // 关闭自己
    UIBase.prototype.closeSelf = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(this.fid)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 弹窗动画
     */
    UIBase.prototype.showEffect = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    UIBase.prototype.hideEffect = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    UIBase.prototype.setBlockInput = function (block) {
        if (!this._blocker) {
            var node = new cc.Node('block_input_events');
            this._blocker = node.addComponent(cc.BlockInputEvents);
            this._blocker.node.setContentSize(AdapterMgr_1.default.inst.visibleSize);
            this.node.addChild(this._blocker.node, cc.macro.MAX_ZINDEX);
        }
        this._blocker.node.active = block;
    };
    UIBase.prototype.loadRes = function (url, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ResMgr_1.default.inst.loadDynamicRes(url, type, this.fid)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UIBase;
}(cc.Component));
exports.default = UIBase;
//@ts-ignore
cc.UIBase = UIBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9VSUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBR3BDLDJDQUFzQztBQUN0QyxtQ0FBOEI7QUFDOUIscUNBQWdDO0FBRWhDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBcUZDO1FBcEZHLGlEQUFpRDtRQUMxQyxTQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFdBQVc7UUFDSixjQUFRLEdBQXFCLElBQUksQ0FBQztRQUN6QyxXQUFXO1FBQ0osY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDeEMsMkRBQTJEO1FBQ3BELGVBQVMsR0FBc0IsSUFBSSxDQUFDO1FBQzNDLHVCQUF1QjtRQUNmLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFFakIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUE2QmpDLFdBQUssR0FBUSxJQUFJLENBQUM7UUE2QmxCLGlCQUFpQjtRQUNULGNBQVEsR0FBd0IsSUFBSSxDQUFDOztJQWNqRCxDQUFDO0lBN0U4QyxDQUFDO0lBTTlCLFdBQUksR0FBbEIsVUFBbUIsS0FBVyxFQUFFLFFBQW9CO1FBQ2hELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFHLENBQUMsUUFBUSxFQUFFO1lBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3pELE9BQVE7U0FDWDtRQUNELGlCQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNhLFlBQUssR0FBbkI7UUFDSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtJQUNDLHlCQUFRLEdBQXJCLFVBQXNCLE1BQVc7Ozs7Ozt3QkFDN0IsSUFBRyxJQUFJLENBQUMsT0FBTzs0QkFBRSxzQkFBUTt3QkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUM7d0JBRXpDLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUFsQyxRQUFRLEdBQUcsU0FBdUI7d0JBQ3RDLElBQUcsUUFBUSxFQUFFOzRCQUNULEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0QkFDakIsc0JBQVE7eUJBQ1g7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDdkI7SUFJRCxzQ0FBc0M7SUFDekIscUJBQUksR0FBakIsVUFBa0IsTUFBVzt1Q0FBRyxPQUFPOztnQkFDbkMsc0JBQU8sSUFBSSxFQUFDOzs7S0FDZjtJQUVELGlCQUFpQjtJQUNWLHVCQUFNLEdBQWIsVUFBYyxNQUFXLElBQUcsQ0FBQztJQUM3QixPQUFPO0lBQ0EsdUJBQU0sR0FBYixVQUFjLE1BQVcsSUFBRyxDQUFDO0lBQzdCLGFBQWE7SUFDTiw0QkFBVyxHQUFsQixVQUFtQixNQUFXLElBQUcsQ0FBQztJQUNsQyxPQUFPO0lBQ0EsdUJBQU0sR0FBYixjQUFpQixDQUFDO0lBQ2xCLGFBQWE7SUFDTiw0QkFBVyxHQUFsQixjQUFzQixDQUFDO0lBRXZCLE9BQU87SUFDTSwwQkFBUyxHQUF0Qjt1Q0FBMEIsT0FBTzs7OzRCQUN2QixxQkFBTSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUE7NEJBQXhELHNCQUFPLFNBQWlELEVBQUM7Ozs7S0FDM0Q7SUFFRDs7T0FFRztJQUNVLDJCQUFVLEdBQXZCOzs7O0tBQTRCO0lBQ2YsMkJBQVUsR0FBdkI7Ozs7S0FBNEI7SUFJckIsOEJBQWEsR0FBcEIsVUFBcUIsS0FBYztRQUMvQixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRztZQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFWSx3QkFBTyxHQUFwQixVQUFxQixHQUFXLEVBQUUsSUFBc0I7Ozs7NEJBQzdDLHFCQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQTs0QkFBNUQsc0JBQU8sU0FBcUQsRUFBQzs7OztLQUNoRTtJQUNMLGFBQUM7QUFBRCxDQXJGQSxBQXFGQyxDQXJGbUMsRUFBRSxDQUFDLFNBQVMsR0FxRi9DOztBQUVELFlBQVk7QUFDWixFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBGb3JtVHlwZSB9IGZyb20gXCIuL2NvbmZpZy9TeXNEZWZpbmVcIjtcbmltcG9ydCB7IEVDbG9zZVR5cGUsIElGb3JtRGF0YSB9IGZyb20gXCIuL1N0cnVjdFwiO1xuaW1wb3J0IEFkYXB0ZXJNZ3IgZnJvbSBcIi4vQWRhcHRlck1nclwiO1xuaW1wb3J0IFJlc01nciBmcm9tIFwiLi9SZXNNZ3JcIjtcbmltcG9ydCBGb3JtTWdyIGZyb20gXCIuL0Zvcm1NZ3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKiog56qX5L2TaWQs6K+l56qX5L2T55qE5ZSv5LiA5qCH56S6KOivt+S4jeimgeWvuei/meS4quWAvOi/m+ihjOi1i+WAvOaTjeS9nCwg5YaF6YOo5bey57uP5a6e546w5LqG5a+55bqU55qE6LWL5YC8KSAqL1xuICAgIHB1YmxpYyBmaWQ6IHN0cmluZyA9ICcnO1xuICAgIC8qKiDnqpfkvZPmlbDmja4gKi9cbiAgICBwdWJsaWMgZm9ybURhdGE6IElGb3JtRGF0YSB8IG51bGwgPSBudWxsO1xuICAgIC8qKiDnqpfkvZPnsbvlnosgKi9cbiAgICBwdWJsaWMgZm9ybVR5cGU6IEZvcm1UeXBlIHwgbnVsbCA9IG51bGw7XG4gICAgLyoqIOWFs+mXreexu+Weiywg5YWz6Zet56qX5Y+j5ZCO6ZSA5q+BLCDkvJrlsIblhbbkvp3otZbnmoTotYTmupDkuIDlubbplIDmr4EsIOmHh+eUqOS6huW8leeUqOiuoeaVsOeahOeuoeeQhiwg5LiN55So5ouF5b+D5Lya5b2x5ZON5YW25LuW56qX5L2TICovXG4gICAgcHVibGljIGNsb3NlVHlwZTogRUNsb3NlVHlwZSB8IG51bGwgPSBudWxsOztcbiAgICAvKiog5piv5ZCm5bey57uP6LCD55So6L+HcHJlaW5pdOaWueazlSAqL1xuICAgIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIHZpZXc6IGNjLkNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIG9wZW4ocGFyYW0/OiBhbnksIGZvcm1EYXRhPzogSUZvcm1EYXRhKSB7XG4gICAgICAgIGxldCB1aWNvbmZpZyA9IHRoaXNbJ1VJQ29uZmlnJ107XG4gICAgICAgIGlmKCF1aWNvbmZpZykge1xuICAgICAgICAgICAgY2Mud2Fybihgc29ycnkgVUlDb25maWcgaXMgbnVsbCwgcGxlYXNlIGNoZWNrIFVJQ29uZmlnYCk7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIEZvcm1NZ3Iub3Blbih1aWNvbmZpZywgcGFyYW0sIGZvcm1EYXRhKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBjbG9zZSgpIHtcbiAgICAgICAgRm9ybU1nci5jbG9zZSh0aGlzWydVSUNvbmZpZyddKTtcbiAgICB9XG5cbiAgICAvKiog6aKE5YWI5Yid5aeL5YyWICovXG4gICAgcHVibGljIGFzeW5jIF9wcmVJbml0KHBhcmFtczogYW55KSB7XG4gICAgICAgIGlmKHRoaXMuX2luaXRlZCkgcmV0dXJuIDtcbiAgICAgICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5nZXRDb21wb25lbnQoYCR7dGhpcy5ub2RlLm5hbWV9X0F1dG9gKTtcbiAgICAgICAgLy8g5Yqg6L296L+Z5LiqVUnkvp3otZbnmoTlhbbku5botYTmupBcbiAgICAgICAgbGV0IGVycm9yTXNnID0gYXdhaXQgdGhpcy5sb2FkKHBhcmFtcyk7XG4gICAgICAgIGlmKGVycm9yTXNnKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihlcnJvck1zZyk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlU2VsZigpO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uSW5pdChwYXJhbXMpO1xuICAgIH1cblxuICAgIG1vZGVsOiBhbnkgPSBudWxsOyBcblxuICAgIC8qKiDlj6/ku6XlnKjov5nph4zov5vooYzkuIDkupvotYTmupDnmoTliqDovb0sIOWFt+S9k+WunueOsOWPr+S7peeci3Rlc3TkuIvnmoTku6PnoIEgKi9cbiAgICBwdWJsaWMgYXN5bmMgbG9hZChwYXJhbXM6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJYsIOWPquiwg+eUqOS4gOasoSAqL1xuICAgIHB1YmxpYyBvbkluaXQocGFyYW1zOiBhbnkpIHt9XG4gICAgLy8g5pi+56S65Zue6LCDXG4gICAgcHVibGljIG9uU2hvdyhwYXJhbXM6IGFueSkge31cbiAgICAvLyDlnKjmmL7npLrliqjnlLvnu5PmnZ/lkI7lm57osINcbiAgICBwdWJsaWMgb25BZnRlclNob3cocGFyYW1zOiBhbnkpIHt9XG4gICAgLy8g6ZqQ6JeP5Zue6LCDXG4gICAgcHVibGljIG9uSGlkZSgpIHt9ICAgIFxuICAgIC8vIOWcqOmakOiXj+WKqOeUu+e7k+adn+WQjuWbnuiwg1xuICAgIHB1YmxpYyBvbkFmdGVySGlkZSgpIHt9XG5cbiAgICAvLyDlhbPpl63oh6rlt7FcbiAgICBwdWJsaWMgYXN5bmMgY2xvc2VTZWxmKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgIHJldHVybiBhd2FpdCBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZUZvcm0odGhpcy5maWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8ueeql+WKqOeUu1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzaG93RWZmZWN0KCkge31cbiAgICBwdWJsaWMgYXN5bmMgaGlkZUVmZmVjdCgpIHt9XG5cbiAgICAvKiog6K6+572u5piv5ZCm5oyh5L2P6Kem5pG45LqL5Lu2ICovXG4gICAgcHJpdmF0ZSBfYmxvY2tlcjogY2MuQmxvY2tJbnB1dEV2ZW50cyA9IG51bGw7XG4gICAgcHVibGljIHNldEJsb2NrSW5wdXQoYmxvY2s6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoIXRoaXMuX2Jsb2NrZXIpICB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCdibG9ja19pbnB1dF9ldmVudHMnKTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrZXIubm9kZS5zZXRDb250ZW50U2l6ZShBZGFwdGVyTWdyLmluc3QudmlzaWJsZVNpemUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuX2Jsb2NrZXIubm9kZSwgY2MubWFjcm8uTUFYX1pJTkRFWCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmxvY2tlci5ub2RlLmFjdGl2ZSA9IGJsb2NrO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkUmVzKHVybDogc3RyaW5nLCB0eXBlPzogdHlwZW9mIGNjLkFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBSZXNNZ3IuaW5zdC5sb2FkRHluYW1pY1Jlcyh1cmwsIHR5cGUsIHRoaXMuZmlkKTtcbiAgICB9XG59XG5cbi8vQHRzLWlnbm9yZVxuY2MuVUlCYXNlID0gVUlCYXNlOyJdfQ==