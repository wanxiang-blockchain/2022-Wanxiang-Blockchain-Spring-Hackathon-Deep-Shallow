"use strict";
cc._RF.push(module, '14f25mz3sdN6Yu+aE4UQvmc', 'WindowMgr');
// Script/UIFrame/WindowMgr.ts

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
var PriorityQueue_1 = require("../Common/Utils/PriorityQueue");
var PriorityStack_1 = require("../Common/Utils/PriorityStack");
var Struct_1 = require("./Struct");
var UIManager_1 = require("./UIManager");
var WindowMgr = /** @class */ (function () {
    function WindowMgr() {
        // 窗体
        this._showingList = new PriorityStack_1.default();
        this._waitingList = new PriorityQueue_1.default();
        this._currWindow = "";
    }
    Object.defineProperty(WindowMgr.prototype, "currWindow", {
        get: function () {
            return this._currWindow;
        },
        enumerable: false,
        configurable: true
    });
    WindowMgr.prototype.getWindows = function () {
        return this._showingList.getElements();
    };
    /** 打开窗体 */
    WindowMgr.prototype.open = function (prefabPath, params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = this._formatFormData(formData);
                        if (!(this._showingList.size <= 0 || (!formData.showWait && formData.priority >= this._showingList.getTopEPriority()))) return [3 /*break*/, 2];
                        this._showingList.push(prefabPath, formData.priority);
                        this._currWindow = this._showingList.getTopElement();
                        return [4 /*yield*/, UIManager_1.default.getInstance().openForm(prefabPath, params, formData)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        // 入等待队列
                        this._waitingList.enqueue({ prefabPath: prefabPath, params: params, formData: formData });
                        return [4 /*yield*/, UIManager_1.default.getInstance().loadUIForm(prefabPath)];
                    case 3: 
                    // 加载窗体
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WindowMgr.prototype.close = function (prefabPath) {
        return __awaiter(this, void 0, void 0, function () {
            var result, windowData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = this._showingList.remove(prefabPath);
                        if (!result)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(prefabPath)];
                    case 1:
                        _a.sent();
                        if (this._showingList.size <= 0 && this._waitingList.size > 0) {
                            windowData = this._waitingList.dequeue();
                            this.open(windowData.prefabPath, windowData.params, windowData.formData);
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /** 关闭所有弹窗 */
    WindowMgr.prototype.closeAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, fid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._waitingList.clear();
                        _i = 0, _a = this._showingList.getElements();
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        fid = _a[_i];
                        return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(fid)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this._showingList.clear();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    WindowMgr.prototype._formatFormData = function (formData) {
        return Object.assign({ showWait: false, priority: Struct_1.EPriority.FIVE }, formData);
    };
    return WindowMgr;
}());
var WindowData = /** @class */ (function () {
    function WindowData() {
    }
    return WindowData;
}());
exports.default = new WindowMgr();

cc._RF.pop();