
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Scene/Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b13f3yncLhOvJSRs1QLB0sR', 'Scene');
// Script/Scene/Scene.ts

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
var Game_1 = require("../Logic/Game");
var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
var EventCenter_1 = require("../UIFrame/EventCenter");
var EventType_1 = require("../UIFrame/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ndBlock = null;
        /** 设置是否阻挡游戏触摸输入 */
        _this._block = 0;
        return _this;
    }
    Scene_1 = Scene;
    Scene.prototype.onLoad = function () {
        this.initBlockNode();
    };
    Scene.prototype.initBlockNode = function () {
        this.ndBlock = new cc.Node("block");
        this.ndBlock.addComponent(cc.BlockInputEvents);
        this.node.addChild(this.ndBlock, cc.macro.MAX_ZINDEX);
    };
    Scene.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Scene_1.inst = this;
                        AdapterMgr_1.default.inst.adapteByType(AdapterMgr_1.AdapterType.StretchHeight | AdapterMgr_1.AdapterType.StretchWidth, this.node);
                        return [4 /*yield*/, this.onGameInit()];
                    case 1:
                        _a.sent();
                        this.registerEvent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 游戏初始化 */
    Scene.prototype.onGameInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // 第一步 展示loading页面，当然有些默认就是loading页面
                    // 第二步 初始化游戏（Managers，Configs，SDKs）
                    return [4 /*yield*/, Game_1.default.init(this.node)];
                    case 1:
                        // 第一步 展示loading页面，当然有些默认就是loading页面
                        // 第二步 初始化游戏（Managers，Configs，SDKs）
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 初始化事件 */
    Scene.prototype.registerEvent = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.onShow(this.onGameShow.bind(this));
            wx.onHide(this.onGameHide.bind(this));
        }
        else {
            cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
            cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
        }
    };
    Scene.prototype.onGameShow = function (param) {
        EventCenter_1.EventCenter.emit(EventType_1.EventType.GameShow, param);
        cc.director.resume();
    };
    Scene.prototype.onGameHide = function () {
        EventCenter_1.EventCenter.emit(EventType_1.EventType.GameHide);
        cc.director.pause();
    };
    Scene.prototype.update = function (dt) {
        Game_1.default.update(dt);
    };
    Scene.prototype.lateUpdate = function () {
    };
    Scene.prototype.setInputBlock = function (bool) {
        if (!this.ndBlock) {
            cc.warn("未启用 block input");
            return;
        }
        bool ? ++this._block : --this._block;
        this.ndBlock.active = this._block > 0;
    };
    var Scene_1;
    Scene.inst = null;
    Scene = Scene_1 = __decorate([
        ccclass
    ], Scene);
    return Scene;
}(cc.Component));
exports.default = Scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU2NlbmUvU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBQ2pDLG9EQUFnRTtBQUNoRSxzREFBcUQ7QUFDckQsa0RBQWlEO0FBRTNDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBcUVDO1FBbEVXLGFBQU8sR0FBWSxJQUFJLENBQUM7UUF3RGhDLG1CQUFtQjtRQUNYLFlBQU0sR0FBRyxDQUFDLENBQUM7O0lBU3ZCLENBQUM7Y0FyRW9CLEtBQUs7SUFJdEIsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sNkJBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVZLHFCQUFLLEdBQWxCOzs7Ozt3QkFDSSxPQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDbEIsb0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFXLENBQUMsYUFBYSxHQUFHLHdCQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUYscUJBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOzs7OztLQUN4QjtJQUNELFlBQVk7SUFDQywwQkFBVSxHQUF2Qjs7Ozs7b0JBQ0ksb0NBQW9DO29CQUVwQyxtQ0FBbUM7b0JBQ25DLHFCQUFNLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFIMUIsb0NBQW9DO3dCQUVwQyxtQ0FBbUM7d0JBQ25DLFNBQTBCLENBQUM7Ozs7O0tBSzlCO0lBQ0QsWUFBWTtJQUNKLDZCQUFhLEdBQXJCO1FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN2QyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO2FBQUs7WUFDRixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBRU8sMEJBQVUsR0FBbEIsVUFBbUIsS0FBVTtRQUN6Qix5QkFBVyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFDTywwQkFBVSxHQUFsQjtRQUNJLHlCQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLEVBQVU7UUFDcEIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sMEJBQVUsR0FBakI7SUFFQSxDQUFDO0lBSU0sNkJBQWEsR0FBcEIsVUFBcUIsSUFBYTtRQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzQixPQUFRO1NBQ1g7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBbEVhLFVBQUksR0FBVSxJQUFJLENBQUM7SUFGaEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXFFekI7SUFBRCxZQUFDO0NBckVELEFBcUVDLENBckVrQyxFQUFFLENBQUMsU0FBUyxHQXFFOUM7a0JBckVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4uL0xvZ2ljL0dhbWVcIjtcbmltcG9ydCBBZGFwdGVyTWdyLCB7IEFkYXB0ZXJUeXBlIH0gZnJvbSBcIi4uL1VJRnJhbWUvQWRhcHRlck1nclwiO1xuaW1wb3J0IHsgRXZlbnRDZW50ZXIgfSBmcm9tIFwiLi4vVUlGcmFtZS9FdmVudENlbnRlclwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uL1VJRnJhbWUvRXZlbnRUeXBlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0OiBTY2VuZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBuZEJsb2NrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJsb2NrTm9kZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0QmxvY2tOb2RlKCkge1xuICAgICAgICB0aGlzLm5kQmxvY2sgPSBuZXcgY2MuTm9kZShcImJsb2NrXCIpO1xuICAgICAgICB0aGlzLm5kQmxvY2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5uZEJsb2NrLCBjYy5tYWNyby5NQVhfWklOREVYKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIFNjZW5lLmluc3QgPSB0aGlzO1xuICAgICAgICBBZGFwdGVyTWdyLmluc3QuYWRhcHRlQnlUeXBlKEFkYXB0ZXJUeXBlLlN0cmV0Y2hIZWlnaHQgfCBBZGFwdGVyVHlwZS5TdHJldGNoV2lkdGgsIHRoaXMubm9kZSk7XG4gICAgICAgIGF3YWl0IHRoaXMub25HYW1lSW5pdCgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcbiAgICB9XG4gICAgLyoqIOa4uOaIj+WIneWni+WMliAqL1xuICAgIHB1YmxpYyBhc3luYyBvbkdhbWVJbml0KCkge1xuICAgICAgICAvLyDnrKzkuIDmraUg5bGV56S6bG9hZGluZ+mhtemdou+8jOW9k+eEtuacieS6m+m7mOiupOWwseaYr2xvYWRpbmfpobXpnaJcblxuICAgICAgICAvLyDnrKzkuozmraUg5Yid5aeL5YyW5ri45oiP77yITWFuYWdlcnPvvIxDb25maWdz77yMU0RLc++8iVxuICAgICAgICBhd2FpdCBHYW1lLmluaXQodGhpcy5ub2RlKTtcbiAgICAgICAgLy8g56ys5LiJ5q2lIOaehOW7uuWIneWni+WcuuaZr++8iOWKoOi9veW/heimgeeahHByZWZhYu+8jOmfs+mike+8jHRleHR1cmXvvIlcblxuICAgICAgICAvLyDnrKzlm5vmraUg5Yqg6L295Li755WM6Z2iVUks5YWz5o6JbG9hZGluZ+mhtemdoizmraPlvI/ov5vlhaXmuLjmiI9cblxuICAgIH1cbiAgICAvKiog5Yid5aeL5YyW5LqL5Lu2ICovXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCkge1xuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xuICAgICAgICAgICAgd3gub25TaG93KHRoaXMub25HYW1lU2hvdy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHd4Lm9uSGlkZSh0aGlzLm9uR2FtZUhpZGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCB0aGlzLm9uR2FtZVNob3csIHRoaXMpO1xuICAgICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2FtZVNob3cocGFyYW06IGFueSkge1xuICAgICAgICBFdmVudENlbnRlci5lbWl0KEV2ZW50VHlwZS5HYW1lU2hvdywgcGFyYW0pO1xuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKVxuICAgIH1cbiAgICBwcml2YXRlIG9uR2FtZUhpZGUoKSB7XG4gICAgICAgIEV2ZW50Q2VudGVyLmVtaXQoRXZlbnRUeXBlLkdhbWVIaWRlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgR2FtZS51cGRhdGUoZHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsYXRlVXBkYXRlKCkge1xuXG4gICAgfVxuXG4gICAgLyoqIOiuvue9ruaYr+WQpumYu+aMoea4uOaIj+inpuaRuOi+k+WFpSAqL1xuICAgIHByaXZhdGUgX2Jsb2NrID0gMDtcbiAgICBwdWJsaWMgc2V0SW5wdXRCbG9jayhib29sOiBib29sZWFuKSB7XG4gICAgICAgIGlmKCF0aGlzLm5kQmxvY2spIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLmnKrlkK/nlKggYmxvY2sgaW5wdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIGJvb2wgPyArKyB0aGlzLl9ibG9jayA6IC0tIHRoaXMuX2Jsb2NrO1xuICAgICAgICB0aGlzLm5kQmxvY2suYWN0aXZlID0gdGhpcy5fYmxvY2sgPiAwO1xuICAgIH1cbn0iXX0=