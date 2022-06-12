
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/ToastMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94686RhMhBGzb0TUqfreBLz', 'ToastMgr');
// Script/UIFrame/ToastMgr.ts

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
var UIManager_1 = require("./UIManager");
var ToastMgr = /** @class */ (function () {
    function ToastMgr() {
        this._pools = cc.js.createMap();
    }
    ToastMgr.prototype.open = function (url, params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ToastMgr.prototype.close = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ToastMgr;
}());
exports.default = new ToastMgr();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9Ub2FzdE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlDQUFvQztBQUVwQztJQUFBO1FBQ1ksV0FBTSxHQUErQixFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBV25FLENBQUM7SUFUZ0IsdUJBQUksR0FBakIsVUFBa0IsR0FBVyxFQUFFLE1BQVksRUFBRSxRQUFvQjs7Ozs7O0tBR2hFO0lBRVksd0JBQUssR0FBbEIsVUFBbUIsR0FBRzs7Ozs0QkFDbEIscUJBQU0sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUE1QyxTQUE0QyxDQUFDOzs7OztLQUNoRDtJQUVMLGVBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQUVELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlscy9Qb29sXCI7XG5pbXBvcnQgeyBJRm9ybURhdGEgfSBmcm9tIFwiLi9TdHJ1Y3RcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XG5cbmNsYXNzIFRvYXN0TWdyIHtcbiAgICBwcml2YXRlIF9wb29sczoge1trZXk6IHN0cmluZ106IFBvb2w8YW55Pn0gPSBjYy5qcy5jcmVhdGVNYXAoKTtcblxuICAgIHB1YmxpYyBhc3luYyBvcGVuKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnksIGZvcm1EYXRhPzogSUZvcm1EYXRhKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UodXJsKSB7XG4gICAgICAgIGF3YWl0IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlRm9ybSh1cmwpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9hc3RNZ3IoKTtcblxuIl19