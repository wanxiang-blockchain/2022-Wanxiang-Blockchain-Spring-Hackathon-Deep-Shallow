"use strict";
cc._RF.push(module, 'b34acXq9c1L/Yaf2AaOKH2s', 'FormMgr');
// Script/UIFrame/FormMgr.ts

"use strict";
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
var SysDefine_1 = require("./config/SysDefine");
var FixedMgr_1 = require("./FixedMgr");
var SceneMgr_1 = require("./SceneMgr");
var TipsMgr_1 = require("./TipsMgr");
var WindowMgr_1 = require("./WindowMgr");
var FormMgr = /** @class */ (function () {
    function FormMgr() {
    }
    /**
     * 打开窗体
     * @param form 窗体配置信息
     * @param param 自定义参数
     * @param formData 窗体处理时的一些数据
     */
    FormMgr.prototype.open = function (form, param, formData) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = form.type;
                        switch (_a) {
                            case SysDefine_1.FormType.Screen: return [3 /*break*/, 1];
                            case SysDefine_1.FormType.Window: return [3 /*break*/, 3];
                            case SysDefine_1.FormType.Fixed: return [3 /*break*/, 5];
                            case SysDefine_1.FormType.Tips: return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 9];
                    case 1: return [4 /*yield*/, SceneMgr_1.default.open(form.prefabUrl, param, formData)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, WindowMgr_1.default.open(form.prefabUrl, param, formData)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, FixedMgr_1.default.open(form.prefabUrl, param, formData)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [4 /*yield*/, TipsMgr_1.default.open(form.prefabUrl, param, formData)];
                    case 8: return [2 /*return*/, _b.sent()];
                    case 9:
                        cc.error("\u672A\u77E5\u7C7B\u578B\u7684\u7A97\u4F53: " + form.type);
                        return [2 /*return*/, null];
                }
            });
        });
    };
    FormMgr.prototype.close = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = form.type;
                        switch (_a) {
                            case SysDefine_1.FormType.Screen: return [3 /*break*/, 1];
                            case SysDefine_1.FormType.Window: return [3 /*break*/, 3];
                            case SysDefine_1.FormType.Fixed: return [3 /*break*/, 5];
                            case SysDefine_1.FormType.Tips: return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 9];
                    case 1: return [4 /*yield*/, SceneMgr_1.default.close(form.prefabUrl)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, WindowMgr_1.default.close(form.prefabUrl)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, FixedMgr_1.default.close(form.prefabUrl)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [4 /*yield*/, TipsMgr_1.default.close(form.prefabUrl)];
                    case 8: return [2 /*return*/, _b.sent()];
                    case 9:
                        cc.error("\u672A\u77E5\u7C7B\u578B\u7684\u7A97\u4F53: " + form.type);
                        return [2 /*return*/, null];
                }
            });
        });
    };
    FormMgr.prototype.backScene = function (params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, SceneMgr_1.default.back(params, formData)];
            });
        });
    };
    FormMgr.prototype.closeAllWindows = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WindowMgr_1.default.closeAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FormMgr;
}());
exports.default = new FormMgr();

cc._RF.pop();