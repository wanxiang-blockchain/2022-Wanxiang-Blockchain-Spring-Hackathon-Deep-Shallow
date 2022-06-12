
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/FixedMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d5adVytGZORIxY7M3VpixZ', 'FixedMgr');
// Script/UIFrame/FixedMgr.ts

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
var FixedMgr = /** @class */ (function () {
    function FixedMgr() {
    }
    FixedMgr.prototype.open = function (url, params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.default.getInstance().openForm(url, params, formData)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FixedMgr.prototype.close = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.default.getInstance().closeForm(url)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FixedMgr;
}());
exports.default = new FixedMgr();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9GaXhlZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUFvQztBQUVwQztJQUFBO0lBT0EsQ0FBQztJQU5nQix1QkFBSSxHQUFqQixVQUFrQixHQUFXLEVBQUUsTUFBWSxFQUFFLFFBQW9COzs7OzRCQUN0RCxxQkFBTSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzRCQUFwRSxzQkFBTyxTQUE2RCxFQUFDOzs7O0tBQ3hFO0lBQ1ksd0JBQUssR0FBbEIsVUFBbUIsR0FBVzs7Ozs0QkFDbkIscUJBQU0sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUE7NEJBQW5ELHNCQUFPLFNBQTRDLEVBQUM7Ozs7S0FDdkQ7SUFDTCxlQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZvcm1EYXRhIH0gZnJvbSBcIi4vU3RydWN0XCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuL1VJTWFuYWdlclwiO1xuXG5jbGFzcyBGaXhlZE1nciB7XG4gICAgcHVibGljIGFzeW5jIG9wZW4odXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSwgZm9ybURhdGE/OiBJRm9ybURhdGEpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLm9wZW5Gb3JtKHVybCwgcGFyYW1zLCBmb3JtRGF0YSk7XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSh1cmw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2xvc2VGb3JtKHVybCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRml4ZWRNZ3IoKTsiXX0=