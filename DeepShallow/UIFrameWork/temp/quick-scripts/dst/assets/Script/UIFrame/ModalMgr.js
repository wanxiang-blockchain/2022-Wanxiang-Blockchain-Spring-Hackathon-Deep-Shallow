
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/ModalMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6cfbGOowFD6rGCFIN9QFMs', 'ModalMgr');
// Script/UIFrame/ModalMgr.ts

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
var SysDefine_1 = require("./config/SysDefine");
var UIModalScript_1 = require("./UIModalScript");
/**
 * 遮罩管理
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ModalMgr = /** @class */ (function (_super) {
    __extends(ModalMgr, _super);
    function ModalMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiModal = null;
        return _this;
    }
    ModalMgr_1 = ModalMgr;
    Object.defineProperty(ModalMgr, "inst", {
        get: function () {
            if (this._inst == null) {
                this._inst = new ModalMgr_1();
                var node = new cc.Node("UIModalNode");
                ModalMgr_1.popUpRoot = SysDefine_1.SysDefine.SYS_UIROOT_NAME + '/' + SysDefine_1.SysDefine.SYS_POPUP_NODE;
                var rootNode = cc.find(ModalMgr_1.popUpRoot);
                rootNode.addChild(node);
                this._inst.uiModal = node.addComponent(UIModalScript_1.default);
                this._inst.uiModal.init();
            }
            return this._inst;
        },
        enumerable: false,
        configurable: true
    });
    /** 为mask添加颜色 */
    ModalMgr.prototype.showModal = function (maskType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uiModal.showModal(maskType.opacity, maskType.easingTime, maskType.isEasing, maskType.dualBlur)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalMgr.prototype.checkModalWindow = function (coms) {
        if (coms.length <= 0) {
            this.uiModal.node.active = false;
            return;
        }
        this.uiModal.node.active = true;
        if (this.uiModal.node.parent) {
            this.uiModal.node.removeFromParent();
        }
        for (var i = coms.length - 1; i >= 0; i--) {
            if (coms[i].modalType.opacity > 0) {
                cc.find(ModalMgr_1.popUpRoot).addChild(this.uiModal.node, Math.max(coms[i].node.zIndex - 1, 0));
                this.uiModal.fid = coms[i].fid;
                this.showModal(coms[i].modalType);
                break;
            }
        }
    };
    var ModalMgr_1;
    ModalMgr.popUpRoot = '';
    ModalMgr._inst = null;
    ModalMgr = ModalMgr_1 = __decorate([
        ccclass
    ], ModalMgr);
    return ModalMgr;
}(cc.Component));
exports.default = ModalMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9Nb2RhbE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBK0M7QUFDL0MsaURBQTRDO0FBSTVDOztHQUVHO0FBQ0csSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQ0M7UUF6QlcsYUFBTyxHQUFpQixJQUFJLENBQUM7O0lBeUJ6QyxDQUFDO2lCQTNDb0IsUUFBUTtJQUd6QixzQkFBa0IsZ0JBQUk7YUFBdEI7WUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksVUFBUSxFQUFFLENBQUM7Z0JBRTVCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEMsVUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsR0FBRyxHQUFHLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUE7Z0JBRS9FLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0I7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFJRCxnQkFBZ0I7SUFDRiw0QkFBUyxHQUF2QixVQUF3QixRQUFtQjs7Ozs0QkFDdkMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBekcsU0FBeUcsQ0FBQzs7Ozs7S0FDN0c7SUFFTSxtQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBZ0I7UUFDcEMsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLE9BQVE7U0FDWDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN4QztRQUNELEtBQUksSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7O0lBekNhLGtCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsY0FBSyxHQUFhLElBQUksQ0FBQztJQUZwQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkM1QjtJQUFELGVBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMkNqRDtrQkEzQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFN5c0RlZmluZSB9IGZyb20gXCIuL2NvbmZpZy9TeXNEZWZpbmVcIjtcbmltcG9ydCBVSU1vZGFsU2NyaXB0IGZyb20gXCIuL1VJTW9kYWxTY3JpcHRcIjtcbmltcG9ydCB7IE1vZGFsVHlwZSB9IGZyb20gXCIuL1N0cnVjdFwiO1xuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tIFwiLi9VSUZvcm1cIjtcblxuLyoqXG4gKiDpga7nvannrqHnkIZcbiAqL1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBwb3BVcFJvb3QgPSAnJztcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0OiBNb2RhbE1nciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdCgpIHtcbiAgICAgICAgaWYodGhpcy5faW5zdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IE1vZGFsTWdyKCk7XG5cbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoXCJVSU1vZGFsTm9kZVwiKTtcbiAgICAgICAgICAgIE1vZGFsTWdyLnBvcFVwUm9vdCA9IFN5c0RlZmluZS5TWVNfVUlST09UX05BTUUgKyAnLycgKyBTeXNEZWZpbmUuU1lTX1BPUFVQX05PREVcblxuICAgICAgICAgICAgbGV0IHJvb3ROb2RlID0gY2MuZmluZChNb2RhbE1nci5wb3BVcFJvb3QpO1xuICAgICAgICAgICAgcm9vdE5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0LnVpTW9kYWwgPSBub2RlLmFkZENvbXBvbmVudChVSU1vZGFsU2NyaXB0KTtcbiAgICAgICAgICAgIHRoaXMuX2luc3QudWlNb2RhbC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1aU1vZGFsOlVJTW9kYWxTY3JpcHQgPSBudWxsO1xuXG4gICAgLyoqIOS4um1hc2vmt7vliqDpopzoibIgKi9cbiAgICBwcml2YXRlIGFzeW5jIHNob3dNb2RhbChtYXNrVHlwZTogTW9kYWxUeXBlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMudWlNb2RhbC5zaG93TW9kYWwobWFza1R5cGUub3BhY2l0eSwgbWFza1R5cGUuZWFzaW5nVGltZSwgbWFza1R5cGUuaXNFYXNpbmcsIG1hc2tUeXBlLmR1YWxCbHVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tNb2RhbFdpbmRvdyhjb21zOiBVSVdpbmRvd1tdKSB7XG4gICAgICAgIGlmKGNvbXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudWlNb2RhbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpTW9kYWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLnVpTW9kYWwubm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudWlNb2RhbC5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGk9Y29tcy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICBpZihjb21zW2ldLm1vZGFsVHlwZS5vcGFjaXR5ID4gMCkge1xuICAgICAgICAgICAgICAgIGNjLmZpbmQoTW9kYWxNZ3IucG9wVXBSb290KS5hZGRDaGlsZCh0aGlzLnVpTW9kYWwubm9kZSwgTWF0aC5tYXgoY29tc1tpXS5ub2RlLnpJbmRleC0xLCAwKSk7XG4gICAgICAgICAgICAgICAgdGhpcy51aU1vZGFsLmZpZCA9IGNvbXNbaV0uZmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsKGNvbXNbaV0ubW9kYWxUeXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuICAgIH1cbn1cblxuIl19