"use strict";
cc._RF.push(module, 'f1211m5xUNKR7NsrmF2i3SV', 'UIToast');
// Script/UIFrame/UIToast.ts

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
exports.ToastMgr = exports.UIToast = exports.ToastType = void 0;
var Pool_1 = require("../Common/Utils/Pool");
var CocosHelper_1 = require("./CocosHelper");
var UIBase_1 = require("./UIBase");
var ToastType;
(function (ToastType) {
    ToastType[ToastType["Default"] = 0] = "Default";
})(ToastType = exports.ToastType || (exports.ToastType = {}));
/**
 * ????????????
 * 1. ???prefabUrl??????, ??????
 * 2. UIToast.open ????????????
 */
var UIToast = /** @class */ (function (_super) {
    __extends(UIToast, _super);
    function UIToast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIToast.prototype.use = function () {
    };
    UIToast.prototype.free = function () {
    };
    return UIToast;
}(UIBase_1.default));
exports.UIToast = UIToast;
var ToastMgr = /** @class */ (function () {
    function ToastMgr() {
        this._pools = {};
    }
    ToastMgr.prototype.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var prefab_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._pools[url]) return [3 /*break*/, 2];
                        return [4 /*yield*/, CocosHelper_1.default.loadResSync(url, cc.Prefab)];
                    case 1:
                        prefab_1 = _a.sent();
                        this._pools[url] = new Pool_1.Pool(function () {
                            var node = cc.instantiate(prefab_1);
                            return node.getComponent(UIToast);
                        }, 10);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this._pools[url].alloc()];
                }
            });
        });
    };
    ToastMgr.prototype.register = function (type, toast) {
    };
    ToastMgr.prototype.free = function (url, obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._pools[url].free(obj);
                return [2 /*return*/];
            });
        });
    };
    ToastMgr.prototype.open = function (name, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ToastMgr.prototype.close = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return ToastMgr;
}());
exports.ToastMgr = ToastMgr;

cc._RF.pop();