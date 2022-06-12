
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/FormMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9Gb3JtTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQThDO0FBQzlDLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFFbEMscUNBQWdDO0FBQ2hDLHlDQUFvQztBQUVwQztJQUFBO0lBK0NBLENBQUM7SUE5Q0c7Ozs7O09BS0c7SUFDRyxzQkFBSSxHQUFWLFVBQVcsSUFBaUIsRUFBRSxLQUFXLEVBQUUsUUFBb0I7Ozs7Ozt3QkFDcEQsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBOztpQ0FDUCxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFoQix3QkFBZTtpQ0FFZixvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFoQix3QkFBZTtpQ0FFZixvQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFmLHdCQUFjO2lDQUVkLG9CQUFRLENBQUMsSUFBSSxDQUFDLENBQWQsd0JBQWE7Ozs0QkFMUCxxQkFBTSxrQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQTs0QkFBM0Qsc0JBQU8sU0FBb0QsRUFBQzs0QkFFckQscUJBQU0sbUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUE7NEJBQTVELHNCQUFPLFNBQXFELEVBQUM7NEJBRXRELHFCQUFNLGtCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFBOzRCQUEzRCxzQkFBTyxTQUFvRCxFQUFDOzRCQUVyRCxxQkFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQTs0QkFBMUQsc0JBQU8sU0FBbUQsRUFBQzs7d0JBRTNELEVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQVksSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO3dCQUNsQyxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FFdkI7SUFFSyx1QkFBSyxHQUFYLFVBQVksSUFBaUI7Ozs7Ozt3QkFDbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBOztpQ0FDUCxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFoQix3QkFBZTtpQ0FFZixvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFoQix3QkFBZTtpQ0FFZixvQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFmLHdCQUFjO2lDQUVkLG9CQUFRLENBQUMsSUFBSSxDQUFDLENBQWQsd0JBQWE7Ozs0QkFMUCxxQkFBTSxrQkFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUE7NEJBQTNDLHNCQUFPLFNBQW9DLEVBQUM7NEJBRXJDLHFCQUFNLG1CQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQTs0QkFBNUMsc0JBQU8sU0FBcUMsRUFBQzs0QkFFdEMscUJBQU0sa0JBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzRCQUEzQyxzQkFBTyxTQUFvQyxFQUFDOzRCQUVyQyxxQkFBTSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUE7NEJBQTFDLHNCQUFPLFNBQW1DLEVBQUM7O3dCQUUzQyxFQUFFLENBQUMsS0FBSyxDQUFDLGlEQUFZLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQzt3QkFDbEMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBRXZCO0lBRUssMkJBQVMsR0FBZixVQUFnQixNQUFZLEVBQUUsUUFBb0I7OztnQkFDOUMsc0JBQU8sa0JBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFDOzs7S0FDMUM7SUFFSyxpQ0FBZSxHQUFyQjs7Ozs0QkFDSSxxQkFBTSxtQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBMUIsU0FBMEIsQ0FBQzs7Ozs7S0FDOUI7SUFFTCxjQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQUVELGtCQUFlLElBQUksT0FBTyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtVHlwZSB9IGZyb20gXCIuL2NvbmZpZy9TeXNEZWZpbmVcIjtcbmltcG9ydCBGaXhlZE1nciBmcm9tIFwiLi9GaXhlZE1nclwiO1xuaW1wb3J0IFNjZW5lTWdyIGZyb20gXCIuL1NjZW5lTWdyXCI7XG5pbXBvcnQgeyBJRm9ybUNvbmZpZywgSUZvcm1EYXRhIH0gZnJvbSBcIi4vU3RydWN0XCI7XG5pbXBvcnQgVGlwc01nciBmcm9tIFwiLi9UaXBzTWdyXCI7XG5pbXBvcnQgV2luZG93TWdyIGZyb20gXCIuL1dpbmRvd01nclwiO1xuXG5jbGFzcyBGb3JtTWdyIHtcbiAgICAvKipcbiAgICAgKiDmiZPlvIDnqpfkvZNcbiAgICAgKiBAcGFyYW0gZm9ybSDnqpfkvZPphY3nva7kv6Hmga9cbiAgICAgKiBAcGFyYW0gcGFyYW0g6Ieq5a6a5LmJ5Y+C5pWwXG4gICAgICogQHBhcmFtIGZvcm1EYXRhIOeql+S9k+WkhOeQhuaXtueahOS4gOS6m+aVsOaNrlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW4oZm9ybTogSUZvcm1Db25maWcsIHBhcmFtPzogYW55LCBmb3JtRGF0YT86IElGb3JtRGF0YSkge1xuICAgICAgICBzd2l0Y2goZm9ybS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLlNjcmVlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgU2NlbmVNZ3Iub3Blbihmb3JtLnByZWZhYlVybCwgcGFyYW0sIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuV2luZG93OlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBXaW5kb3dNZ3Iub3Blbihmb3JtLnByZWZhYlVybCwgcGFyYW0sIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuRml4ZWQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEZpeGVkTWdyLm9wZW4oZm9ybS5wcmVmYWJVcmwsIHBhcmFtLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLlRpcHM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFRpcHNNZ3Iub3Blbihmb3JtLnByZWZhYlVybCwgcGFyYW0sIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYOacquefpeexu+Wei+eahOeql+S9kzogJHtmb3JtLnR5cGV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZShmb3JtOiBJRm9ybUNvbmZpZykge1xuICAgICAgICBzd2l0Y2goZm9ybS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLlNjcmVlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgU2NlbmVNZ3IuY2xvc2UoZm9ybS5wcmVmYWJVcmwpO1xuICAgICAgICAgICAgY2FzZSBGb3JtVHlwZS5XaW5kb3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFdpbmRvd01nci5jbG9zZShmb3JtLnByZWZhYlVybCk7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLkZpeGVkOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBGaXhlZE1nci5jbG9zZShmb3JtLnByZWZhYlVybCk7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLlRpcHM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFRpcHNNZ3IuY2xvc2UoZm9ybS5wcmVmYWJVcmwpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihg5pyq55+l57G75Z6L55qE56qX5L2TOiAke2Zvcm0udHlwZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGJhY2tTY2VuZShwYXJhbXM/OiBhbnksIGZvcm1EYXRhPzogSUZvcm1EYXRhKSB7XG4gICAgICAgIHJldHVybiBTY2VuZU1nci5iYWNrKHBhcmFtcywgZm9ybURhdGEpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlQWxsV2luZG93cygpIHtcbiAgICAgICAgYXdhaXQgV2luZG93TWdyLmNsb3NlQWxsKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3JtTWdyKCk7Il19