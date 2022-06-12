"use strict";
cc._RF.push(module, 'fecebM0tgRBP4NNiSEz6NLd', 'UIForm');
// Script/UIFrame/UIForm.ts

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
exports.UITips = exports.UIFixed = exports.UIWindow = exports.UIScreen = void 0;
var CocosHelper_1 = require("./CocosHelper");
var SysDefine_1 = require("./config/SysDefine");
var FormMgr_1 = require("./FormMgr");
var Struct_1 = require("./Struct");
var UIBase_1 = require("./UIBase");
var UIScreen = /** @class */ (function (_super) {
    __extends(UIScreen, _super);
    function UIScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.Screen;
        _this.closeType = Struct_1.ECloseType.CloseAndDestory;
        return _this;
    }
    UIScreen.prototype.closeSelf = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FormMgr_1.default.close({ prefabUrl: this.fid, type: this.formType })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UIScreen;
}(UIBase_1.default));
exports.UIScreen = UIScreen;
var UIWindow = /** @class */ (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.Window;
        _this.modalType = new Struct_1.ModalType(SysDefine_1.ModalOpacity.OpacityFull); // 阴影类型
        _this.closeType = Struct_1.ECloseType.LRU;
        return _this;
    }
    /** 显示效果 */
    UIWindow.prototype.showEffect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.node.scale = 0;
                        return [4 /*yield*/, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(0.3, { scale: 1 }, cc.easeBackOut()))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIWindow.prototype.closeSelf = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FormMgr_1.default.close({ prefabUrl: this.fid, type: this.formType })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UIWindow;
}(UIBase_1.default));
exports.UIWindow = UIWindow;
var UIFixed = /** @class */ (function (_super) {
    __extends(UIFixed, _super);
    function UIFixed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.Fixed;
        _this.closeType = Struct_1.ECloseType.LRU;
        return _this;
    }
    UIFixed.prototype.closeSelf = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FormMgr_1.default.close({ prefabUrl: this.fid, type: this.formType })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UIFixed;
}(UIBase_1.default));
exports.UIFixed = UIFixed;
var UITips = /** @class */ (function (_super) {
    __extends(UITips, _super);
    function UITips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.Tips;
        _this.closeType = Struct_1.ECloseType.CloseAndHide;
        return _this;
    }
    UITips.prototype.closeSelf = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FormMgr_1.default.close({ prefabUrl: this.fid, type: this.formType })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UITips;
}(UIBase_1.default));
exports.UITips = UITips;
// @ts-ignore
cc.UIScreen = UIScreen;
// @ts-ignore
cc.UIWindow = UIWindow;
// @ts-ignore
cc.UIFixed = UIFixed;
// @ts-ignore
cc.UITips = UITips;

cc._RF.pop();