"use strict";
cc._RF.push(module, '8337d/EvnBHjrW/BJTtgaeW', 'SceneMgr');
// Script/UIFrame/SceneMgr.ts

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
var TipsMgr_1 = require("./TipsMgr");
var UIManager_1 = require("./UIManager");
var TAG = "SceneMgr";
var SceneMgr = /** @class */ (function () {
    function SceneMgr() {
        this._scenes = [];
        this._currScene = "";
    }
    SceneMgr.prototype.getCurrScene = function () {
        return UIManager_1.default.getInstance().getForm(this._currScene);
    };
    /** 打开一个场景 */
    SceneMgr.prototype.open = function (scenePath, params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            var currScene, idx, com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._currScene == scenePath) {
                            cc.warn(TAG, "当前场景和需要open的场景是同一个");
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.openLoading(formData === null || formData === void 0 ? void 0 : formData.loadingForm, params, formData)];
                    case 1:
                        _a.sent();
                        if (!(this._scenes.length > 0)) return [3 /*break*/, 3];
                        currScene = this._scenes[this._scenes.length - 1];
                        return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(currScene)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        idx = this._scenes.indexOf(scenePath);
                        if (idx == -1) {
                            this._scenes.push(scenePath);
                        }
                        else {
                            this._scenes.length = idx + 1;
                        }
                        this._currScene = scenePath;
                        return [4 /*yield*/, UIManager_1.default.getInstance().openForm(scenePath, params, formData)];
                    case 4:
                        com = _a.sent();
                        return [4 /*yield*/, this.closeLoading(formData === null || formData === void 0 ? void 0 : formData.loadingForm)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, com];
                }
            });
        });
    };
    /** 回退一个场景 */
    SceneMgr.prototype.back = function (params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            var currScene;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._scenes.length <= 1) {
                            cc.warn(TAG, "已经是最后一个场景了, 无处可退");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.openLoading(formData === null || formData === void 0 ? void 0 : formData.loadingForm, params, formData)];
                    case 1:
                        _a.sent();
                        currScene = this._scenes.pop();
                        return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(currScene)];
                    case 2:
                        _a.sent();
                        this._currScene = this._scenes[this._scenes.length - 1];
                        return [4 /*yield*/, UIManager_1.default.getInstance().openForm(this._currScene, params, formData)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.closeLoading(formData === null || formData === void 0 ? void 0 : formData.loadingForm)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneMgr.prototype.close = function (scenePath) {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                com = UIManager_1.default.getInstance().getForm(scenePath);
                if (com) {
                    return [2 /*return*/, UIManager_1.default.getInstance().closeForm(scenePath)];
                }
                return [2 /*return*/];
            });
        });
    };
    SceneMgr.prototype.openLoading = function (formConfig, params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = formConfig || SysDefine_1.SysDefine.defaultLoadingForm;
                        if (!form)
                            return [2 /*return*/];
                        return [4 /*yield*/, TipsMgr_1.default.open(form.prefabUrl, params, formData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneMgr.prototype.closeLoading = function (formConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = formConfig || SysDefine_1.SysDefine.defaultLoadingForm;
                        if (!form)
                            return [2 /*return*/];
                        return [4 /*yield*/, TipsMgr_1.default.close(form.prefabUrl)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SceneMgr;
}());
exports.default = new SceneMgr();

cc._RF.pop();