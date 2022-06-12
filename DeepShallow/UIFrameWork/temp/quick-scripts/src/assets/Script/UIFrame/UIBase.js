"use strict";
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