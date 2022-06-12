
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/SceneMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9TY2VuZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUErQztBQUUvQyxxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBRXBDLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQztBQUN2QjtJQUFBO1FBQ1ksWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQW1FcEMsQ0FBQztJQWpFVSwrQkFBWSxHQUFuQjtRQUNJLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxhQUFhO0lBQ0EsdUJBQUksR0FBakIsVUFBa0IsU0FBaUIsRUFBRSxNQUFZLEVBQUUsUUFBb0I7Ozs7Ozt3QkFDbkUsSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTs0QkFDN0IsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzs0QkFDbkMsc0JBQU8sSUFBSSxFQUFDO3lCQUNmO3dCQUVELHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUE7O3dCQUEvRCxTQUErRCxDQUFDOzZCQUU3RCxDQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUF2Qix3QkFBdUI7d0JBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxxQkFBTSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQTs7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LElBQUcsQ0FBQyxJQUFJOzRCQUFFLHNCQUFRO3dCQUNsQixxQkFBTSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFDOzs7OztLQUN2QztJQUVMLGVBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN5c0RlZmluZSB9IGZyb20gXCIuL2NvbmZpZy9TeXNEZWZpbmVcIjtcbmltcG9ydCB7IElGb3JtQ29uZmlnLCBJRm9ybURhdGEgfSBmcm9tIFwiLi9TdHJ1Y3RcIjtcbmltcG9ydCBUaXBzTWdyIGZyb20gXCIuL1RpcHNNZ3JcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IFRBRyA9IFwiU2NlbmVNZ3JcIjtcbmNsYXNzIFNjZW5lTWdyIHtcbiAgICBwcml2YXRlIF9zY2VuZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIF9jdXJyU2NlbmU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgZ2V0Q3VyclNjZW5lKCkge1xuICAgICAgICByZXR1cm4gVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Rm9ybSh0aGlzLl9jdXJyU2NlbmUpO1xuICAgIH1cblxuICAgIC8qKiDmiZPlvIDkuIDkuKrlnLrmma8gKi9cbiAgICBwdWJsaWMgYXN5bmMgb3BlbihzY2VuZVBhdGg6IHN0cmluZywgcGFyYW1zPzogYW55LCBmb3JtRGF0YT86IElGb3JtRGF0YSkge1xuICAgICAgICBpZih0aGlzLl9jdXJyU2NlbmUgPT0gc2NlbmVQYXRoKSB7XG4gICAgICAgICAgICBjYy53YXJuKFRBRywgXCLlvZPliY3lnLrmma/lkozpnIDopoFvcGVu55qE5Zy65pmv5piv5ZCM5LiA5LiqXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLm9wZW5Mb2FkaW5nKGZvcm1EYXRhPy5sb2FkaW5nRm9ybSwgcGFyYW1zLCBmb3JtRGF0YSk7XG5cbiAgICAgICAgaWYodGhpcy5fc2NlbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjdXJyU2NlbmUgPSB0aGlzLl9zY2VuZXNbdGhpcy5fc2NlbmVzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIGF3YWl0IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlRm9ybShjdXJyU2NlbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX3NjZW5lcy5pbmRleE9mKHNjZW5lUGF0aCk7XG4gICAgICAgIGlmKGlkeCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2NlbmVzLnB1c2goc2NlbmVQYXRoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NlbmVzLmxlbmd0aCA9IGlkeCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyU2NlbmUgPSBzY2VuZVBhdGg7XG5cbiAgICAgICAgbGV0IGNvbSA9IGF3YWl0IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLm9wZW5Gb3JtKHNjZW5lUGF0aCwgcGFyYW1zLCBmb3JtRGF0YSk7XG4gICAgICAgIGF3YWl0IHRoaXMuY2xvc2VMb2FkaW5nKGZvcm1EYXRhPy5sb2FkaW5nRm9ybSk7XG4gICAgICAgIHJldHVybiBjb207XG4gICAgfVxuXG4gICAgLyoqIOWbnumAgOS4gOS4quWcuuaZryAqL1xuICAgIHB1YmxpYyBhc3luYyBiYWNrKHBhcmFtcz86IGFueSwgZm9ybURhdGE/OiBJRm9ybURhdGEpIHtcbiAgICAgICAgaWYodGhpcy5fc2NlbmVzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBjYy53YXJuKFRBRywgXCLlt7Lnu4/mmK/mnIDlkI7kuIDkuKrlnLrmma/kuoYsIOaXoOWkhOWPr+mAgFwiKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5vcGVuTG9hZGluZyhmb3JtRGF0YT8ubG9hZGluZ0Zvcm0sIHBhcmFtcywgZm9ybURhdGEpO1xuICAgICAgICBsZXQgY3VyclNjZW5lID0gdGhpcy5fc2NlbmVzLnBvcCgpO1xuICAgICAgICBhd2FpdCBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZUZvcm0oY3VyclNjZW5lKTtcblxuICAgICAgICB0aGlzLl9jdXJyU2NlbmUgPSB0aGlzLl9zY2VuZXNbdGhpcy5fc2NlbmVzLmxlbmd0aC0xXTtcbiAgICAgICAgYXdhaXQgVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkub3BlbkZvcm0odGhpcy5fY3VyclNjZW5lLCBwYXJhbXMsIGZvcm1EYXRhKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jbG9zZUxvYWRpbmcoZm9ybURhdGE/LmxvYWRpbmdGb3JtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2Uoc2NlbmVQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbSA9IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEZvcm0oc2NlbmVQYXRoKTtcbiAgICAgICAgaWYoY29tKSB7XG4gICAgICAgICAgICByZXR1cm4gVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2xvc2VGb3JtKHNjZW5lUGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9wZW5Mb2FkaW5nKGZvcm1Db25maWc6IElGb3JtQ29uZmlnLCBwYXJhbXM6IGFueSwgZm9ybURhdGE6IElGb3JtRGF0YSkge1xuICAgICAgICBsZXQgZm9ybSA9IGZvcm1Db25maWcgfHwgU3lzRGVmaW5lLmRlZmF1bHRMb2FkaW5nRm9ybTtcbiAgICAgICAgaWYoIWZvcm0pIHJldHVybiA7XG4gICAgICAgIGF3YWl0IFRpcHNNZ3Iub3Blbihmb3JtLnByZWZhYlVybCwgcGFyYW1zLCBmb3JtRGF0YSk7XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgY2xvc2VMb2FkaW5nKGZvcm1Db25maWc6IElGb3JtQ29uZmlnKSB7XG4gICAgICAgIGxldCBmb3JtID0gZm9ybUNvbmZpZyB8fCBTeXNEZWZpbmUuZGVmYXVsdExvYWRpbmdGb3JtO1xuICAgICAgICBpZighZm9ybSkgcmV0dXJuIDtcbiAgICAgICAgYXdhaXQgVGlwc01nci5jbG9zZShmb3JtLnByZWZhYlVybCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTY2VuZU1ncigpOyJdfQ==