
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/WindowMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9XaW5kb3dNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsK0RBQTBEO0FBQzFELG1DQUFnRDtBQUNoRCx5Q0FBb0M7QUFFcEM7SUFBQTtRQUNJLEtBQUs7UUFDRyxpQkFBWSxHQUEwQixJQUFJLHVCQUFhLEVBQUUsQ0FBQztRQUMxRCxpQkFBWSxHQUE4QixJQUFJLHVCQUFhLEVBQUUsQ0FBQztRQUU5RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQW9EckMsQ0FBQztJQW5ERyxzQkFBVyxpQ0FBVTthQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVNLDhCQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO0lBQ0Usd0JBQUksR0FBakIsVUFBa0IsVUFBa0IsRUFBRSxNQUFZLEVBQUUsUUFBb0I7Ozs7O3dCQUNwRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDdkMsQ0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUEsRUFBL0csd0JBQStHO3dCQUM5RyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQzlDLHFCQUFNLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUE7NEJBQTNFLHNCQUFPLFNBQW9FLEVBQUM7O3dCQUdoRixRQUFRO3dCQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO3dCQUVqRixxQkFBTSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQTs7b0JBRDNELE9BQU87b0JBQ1Asc0JBQU8sU0FBb0QsRUFBQzs7OztLQUMvRDtJQUVZLHlCQUFLLEdBQWxCLFVBQW1CLFVBQWtCOzs7Ozs7d0JBQzdCLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDbEQsSUFBRyxDQUFDLE1BQU07NEJBQUUsc0JBQU8sS0FBSyxFQUFDO3dCQUV6QixxQkFBTSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQW5ELFNBQW1ELENBQUM7d0JBRXBELElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs0QkFDdEQsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7NEJBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDNUU7d0JBQ0Qsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFRCxhQUFhO0lBQ0EsNEJBQVEsR0FBckI7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDOzhCQUVzQixFQUEvQixLQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFOzs7NkJBQS9CLENBQUEsY0FBK0IsQ0FBQTt3QkFBdEMsR0FBRzt3QkFDVCxxQkFBTSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQTVDLFNBQTRDLENBQUM7Ozt3QkFEaEMsSUFBK0IsQ0FBQTs7O3dCQUdoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUUxQixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUVPLG1DQUFlLEdBQXZCLFVBQXdCLFFBQWE7UUFDakMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsa0JBQVMsQ0FBQyxJQUFJLEVBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXpEQSxBQXlEQyxJQUFBO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxpQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQsa0JBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlvcml0eVF1ZXVlIGZyb20gXCIuLi9Db21tb24vVXRpbHMvUHJpb3JpdHlRdWV1ZVwiO1xuaW1wb3J0IFByaW9yaXR5U3RhY2sgZnJvbSBcIi4uL0NvbW1vbi9VdGlscy9Qcmlvcml0eVN0YWNrXCI7XG5pbXBvcnQgeyBFUHJpb3JpdHksIElGb3JtRGF0YSB9IGZyb20gXCIuL1N0cnVjdFwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi9VSU1hbmFnZXJcIjtcblxuY2xhc3MgV2luZG93TWdyIHtcbiAgICAvLyDnqpfkvZNcbiAgICBwcml2YXRlIF9zaG93aW5nTGlzdDogUHJpb3JpdHlTdGFjazxzdHJpbmc+ID0gbmV3IFByaW9yaXR5U3RhY2soKTtcbiAgICBwcml2YXRlIF93YWl0aW5nTGlzdDogUHJpb3JpdHlRdWV1ZTxXaW5kb3dEYXRhPiA9IG5ldyBQcmlvcml0eVF1ZXVlKCk7XG4gICAgXG4gICAgcHJpdmF0ZSBfY3VycldpbmRvdzogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZ2V0IGN1cnJXaW5kb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyV2luZG93O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRXaW5kb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hvd2luZ0xpc3QuZ2V0RWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICAvKiog5omT5byA56qX5L2TICovXG4gICAgcHVibGljIGFzeW5jIG9wZW4ocHJlZmFiUGF0aDogc3RyaW5nLCBwYXJhbXM/OiBhbnksIGZvcm1EYXRhPzogSUZvcm1EYXRhKSB7XG4gICAgICAgIGZvcm1EYXRhID0gdGhpcy5fZm9ybWF0Rm9ybURhdGEoZm9ybURhdGEpO1xuICAgICAgICBpZih0aGlzLl9zaG93aW5nTGlzdC5zaXplIDw9IDAgfHwgKCFmb3JtRGF0YS5zaG93V2FpdCAmJiBmb3JtRGF0YS5wcmlvcml0eSA+PSB0aGlzLl9zaG93aW5nTGlzdC5nZXRUb3BFUHJpb3JpdHkoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdMaXN0LnB1c2gocHJlZmFiUGF0aCwgZm9ybURhdGEucHJpb3JpdHkpO1xuICAgICAgICAgICAgdGhpcy5fY3VycldpbmRvdyA9IHRoaXMuX3Nob3dpbmdMaXN0LmdldFRvcEVsZW1lbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vcGVuRm9ybShwcmVmYWJQYXRoLCBwYXJhbXMsIGZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5YWl562J5b6F6Zif5YiXXG4gICAgICAgIHRoaXMuX3dhaXRpbmdMaXN0LmVucXVldWUoe3ByZWZhYlBhdGg6IHByZWZhYlBhdGgsIHBhcmFtczogcGFyYW1zLCBmb3JtRGF0YTogZm9ybURhdGF9KTtcbiAgICAgICAgLy8g5Yqg6L2956qX5L2TXG4gICAgICAgIHJldHVybiBhd2FpdCBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5sb2FkVUlGb3JtKHByZWZhYlBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZShwcmVmYWJQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3Nob3dpbmdMaXN0LnJlbW92ZShwcmVmYWJQYXRoKTtcbiAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGF3YWl0IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlRm9ybShwcmVmYWJQYXRoKTtcblxuICAgICAgICBpZih0aGlzLl9zaG93aW5nTGlzdC5zaXplIDw9IDAgJiYgdGhpcy5fd2FpdGluZ0xpc3Quc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGxldCB3aW5kb3dEYXRhID0gdGhpcy5fd2FpdGluZ0xpc3QuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuKHdpbmRvd0RhdGEucHJlZmFiUGF0aCwgd2luZG93RGF0YS5wYXJhbXMsIHdpbmRvd0RhdGEuZm9ybURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKiDlhbPpl63miYDmnInlvLnnqpcgKi9cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2VBbGwoKSB7XG4gICAgICAgIHRoaXMuX3dhaXRpbmdMaXN0LmNsZWFyKCk7XG5cbiAgICAgICAgZm9yKGNvbnN0IGZpZCBvZiB0aGlzLl9zaG93aW5nTGlzdC5nZXRFbGVtZW50cygpKSB7XG4gICAgICAgICAgICBhd2FpdCBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZUZvcm0oZmlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaG93aW5nTGlzdC5jbGVhcigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9ybWF0Rm9ybURhdGEoZm9ybURhdGE6IGFueSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7c2hvd1dhaXQ6IGZhbHNlLCBwcmlvcml0eTogRVByaW9yaXR5LkZJVkV9LCBmb3JtRGF0YSk7XG4gICAgfVxufVxuXG5jbGFzcyBXaW5kb3dEYXRhIHtcbiAgICBwcmVmYWJQYXRoOiBzdHJpbmc7XG4gICAgcGFyYW1zPzogYW55O1xuICAgIGZvcm1EYXRhPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2luZG93TWdyKCk7XG4iXX0=