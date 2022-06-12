
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UISetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUErQztBQUMvQyxzREFBaUQ7QUFDakQseURBQTJEO0FBQzNELDhDQUF5QztBQUN6Qyw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQ0EsQ0FBQztBQUM5QywwQ0FBcUM7QUFFL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVE7SUFBL0M7UUFBQSxxRUF5Q0M7UUF0Q0csZUFBUyxHQUFHLElBQUksa0JBQVMsQ0FBQyx3QkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFxQzFELGlCQUFpQjtJQUNyQixDQUFDO0lBcENHLGVBQWU7SUFFZix5QkFBSyxHQUFMO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ25CLGlCQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsaUVBQWlFO1lBQ2pFLGdFQUFnRTtRQUNwRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDckIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUssOEJBQVUsR0FBaEI7Ozs7Ozt3QkFDUSxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ2xCLHFCQUFNLHFCQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQTs7d0JBQXZGLFNBQXVGLENBQUM7Ozs7O0tBQzNGO0lBRUssOEJBQVUsR0FBaEI7Ozs7Ozt3QkFDUSxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2hCLHFCQUFNLHFCQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBQTs7d0JBQXhGLFNBQXdGLENBQUM7Ozs7O0tBQzVGO0lBdENnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUM3QjtJQUFELGdCQUFDO0NBekNELEFBeUNDLENBekNzQyxpQkFBUSxHQXlDOUM7a0JBekNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU2V0dGluZ19BdXRvIGZyb20gXCIuLi9BdXRvU2NyaXB0cy9VSVNldHRpbmdfQXV0b1wiO1xuaW1wb3J0IEFkYXB0ZXJNZ3IgZnJvbSBcIi4uL1VJRnJhbWUvQWRhcHRlck1nclwiO1xuaW1wb3J0IENvY29zSGVscGVyIGZyb20gXCIuLi9VSUZyYW1lL0NvY29zSGVscGVyXCI7XG5pbXBvcnQgeyBNb2RhbE9wYWNpdHkgfSBmcm9tIFwiLi4vVUlGcmFtZS9jb25maWcvU3lzRGVmaW5lXCI7XG5pbXBvcnQgRm9ybU1nciBmcm9tIFwiLi4vVUlGcmFtZS9Gb3JtTWdyXCI7XG5pbXBvcnQgeyBNb2RhbFR5cGUgfSBmcm9tIFwiLi4vVUlGcmFtZS9TdHJ1Y3RcIjtcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5pbXBvcnQgV2luZG93TWdyIGZyb20gXCIuLi9VSUZyYW1lL1dpbmRvd01nclwiOztcbmltcG9ydCBVSUNvbmZpZyBmcm9tIFwiLi8uLi9VSUNvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU2V0dGluZyBleHRlbmRzIFVJV2luZG93IHtcbiAgICB2aWV3OiBVSVNldHRpbmdfQXV0bztcblxuICAgIG1vZGFsVHlwZSA9IG5ldyBNb2RhbFR5cGUoTW9kYWxPcGFjaXR5Lk9wYWNpdHlIYWxmLCB0cnVlKTtcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgICAgIHRoaXMudmlldy5Qb3AuYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJUG9wKTtcbiAgICAgICAgICAgIC8vIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSVRpcHMsIFwi5YWz6Zet5ZCO5omN5pi+56S655qE5by556qXMVwiLCB7c2hvd1dhaXQ6IHRydWV9KTtcbiAgICAgICAgICAgIC8vIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSVRpcHMsIFwi5YWz6Zet5ZCO5omN5pi+56S655qE5by556qXMlwiLCB7c2hvd1dhaXQ6IHRydWV9KVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnZpZXcuTW9ieC5hZGRDbGljaygoKSA9PiB7XG4gICAgICAgICAgICBGb3JtTWdyLm9wZW4oVUlDb25maWcuVUlNb2J4KTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy52aWV3LkNhcHR1cmUuYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJQ2FwdHVyZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudmlldy5MaWdodC5hZGRDbGljaygoKSA9PiB7XG4gICAgICAgICAgICBGb3JtTWdyLm9wZW4oVUlDb25maWcuVUlMaWdodCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHNob3dFZmZlY3QoKSB7XG4gICAgICAgIGxldCBsZW4gPSBBZGFwdGVyTWdyLmluc3QudmlzaWJsZVNpemUuaGVpZ2h0LzIgKyAzMDA7XG4gICAgICAgIHRoaXMubm9kZS55ID0gbGVuO1xuICAgICAgICBhd2FpdCBDb2Nvc0hlbHBlci5ydW5Ud2VlblN5bmModGhpcy5ub2RlLCBjYy50d2VlbigpLnRvKDAuNSwge3k6IDB9LCBjYy5lYXNlQmFja091dCgpKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGlkZUVmZmVjdCgpIHtcbiAgICAgICAgbGV0IGxlbiA9IEFkYXB0ZXJNZ3IuaW5zdC52aXNpYmxlU2l6ZS5oZWlnaHQvMiArIDMwMDtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgICAgICBhd2FpdCBDb2Nvc0hlbHBlci5ydW5Ud2VlblN5bmModGhpcy5ub2RlLCBjYy50d2VlbigpLnRvKDAuMywge3k6IGxlbn0sIGNjLmVhc2VCYWNrSW4oKSkpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=