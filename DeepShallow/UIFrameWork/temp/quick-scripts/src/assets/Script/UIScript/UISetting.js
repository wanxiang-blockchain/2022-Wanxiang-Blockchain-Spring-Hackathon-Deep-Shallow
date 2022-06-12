"use strict";
cc._RF.push(module, '8384b6jqxlDuraR/lQRKE1C', 'UISetting');
// Script/UIScript/UISetting.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
var CocosHelper_1 = require("../UIFrame/CocosHelper");
var SysDefine_1 = require("../UIFrame/config/SysDefine");
var FormMgr_1 = require("../UIFrame/FormMgr");
var Struct_1 = require("../UIFrame/Struct");
var UIForm_1 = require("../UIFrame/UIForm");
;
var UIConfig_1 = require("./../UIConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISetting = /** @class */ (function (_super) {
    __extends(UISetting, _super);
    function UISetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modalType = new Struct_1.ModalType(SysDefine_1.ModalOpacity.OpacityHalf, true);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    UISetting.prototype.start = function () {
        this.view.Pop.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIPop);
            // FormMgr.open(UIConfig.UITips, "关闭后才显示的弹窗1", {showWait: true});
            // FormMgr.open(UIConfig.UITips, "关闭后才显示的弹窗2", {showWait: true})
        }, this);
        this.view.Mobx.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIMobx);
        }, this);
        this.view.Capture.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UICapture);
        }, this);
        this.view.Light.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UILight);
        }, this);
    };
    UISetting.prototype.showEffect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        len = AdapterMgr_1.default.inst.visibleSize.height / 2 + 300;
                        this.node.y = len;
                        return [4 /*yield*/, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(0.5, { y: 0 }, cc.easeBackOut()))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UISetting.prototype.hideEffect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        len = AdapterMgr_1.default.inst.visibleSize.height / 2 + 300;
                        this.node.y = 0;
                        return [4 /*yield*/, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(0.3, { y: len }, cc.easeBackIn()))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UISetting = __decorate([
        ccclass
    ], UISetting);
    return UISetting;
}(UIForm_1.UIWindow));
exports.default = UISetting;

cc._RF.pop();