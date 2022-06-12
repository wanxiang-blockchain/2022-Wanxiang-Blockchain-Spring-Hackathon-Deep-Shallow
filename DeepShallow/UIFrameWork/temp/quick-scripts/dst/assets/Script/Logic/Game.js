
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Logic/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30ba5eNytVM3pckqs/AGbqm', 'Game');
// Script/Logic/Game.ts

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
exports.Game = void 0;
var ConfigMgr_1 = require("./Manager/ConfigMgr");
var PlayerMgr_1 = require("./Manager/PlayerMgr");
/**
 * 掌管逻辑层
 */
var Game = /** @class */ (function () {
    function Game() {
        this.inited = false;
        this.configMgr = null;
        this.playerMgr = null;
    }
    Game.prototype.init = function (uiRoot) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 初始化Manager, 例如new ConfigMgr();
                        this.configMgr = new ConfigMgr_1.default(this);
                        this.playerMgr = new PlayerMgr_1.default(this);
                        // 初始化平台sdk
                        // todo...
                        // 加载配置
                        return [4 /*yield*/, this.configMgr.loadConfigs()];
                    case 1:
                        // 初始化平台sdk
                        // todo...
                        // 加载配置
                        _a.sent();
                        // 
                        this.inited = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.onGameShow = function () {
    };
    Game.prototype.onGameHide = function () {
    };
    /**
     * 逻辑层的时间更新控制
     * @param dt
     */
    Game.prototype.update = function (dt) {
        if (!this.inited)
            return;
        // 例如Task.update(dt); 更新任务进度
    };
    return Game;
}());
exports.Game = Game;
var GameMgr = new Game();
exports.default = GameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9naWMvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsaURBQTRDO0FBRTVDOztHQUVHO0FBQ0g7SUFBQTtRQUVXLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVMsR0FBYyxJQUFJLENBQUM7SUE2QnZDLENBQUM7SUE1QmdCLG1CQUFJLEdBQWpCLFVBQWtCLE1BQWU7Ozs7O3dCQUM3QixpQ0FBaUM7d0JBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDckMsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLE9BQU87d0JBQ1AscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBSGxDLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixPQUFPO3dCQUNQLFNBQWtDLENBQUM7d0JBRW5DLEdBQUc7d0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Ozs7O0tBQ3RCO0lBRUQseUJBQVUsR0FBVjtJQUVBLENBQUM7SUFDRCx5QkFBVSxHQUFWO0lBRUEsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHFCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQVE7UUFDekIsNEJBQTRCO0lBQ2hDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxvQkFBSTtBQWtDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN6QixrQkFBZSxPQUFPLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlnTWdyIGZyb20gXCIuL01hbmFnZXIvQ29uZmlnTWdyXCI7XG5pbXBvcnQgUGxheWVyTWdyIGZyb20gXCIuL01hbmFnZXIvUGxheWVyTWdyXCI7XG5cbi8qKlxuICog5o6M566h6YC76L6R5bGCXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICAgIHB1YmxpYyBpbml0ZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgY29uZmlnTWdyOiBDb25maWdNZ3IgPSBudWxsO1xuICAgIHB1YmxpYyBwbGF5ZXJNZ3I6IFBsYXllck1nciA9IG51bGw7XG4gICAgcHVibGljIGFzeW5jIGluaXQodWlSb290OiBjYy5Ob2RlKSB7XG4gICAgICAgIC8vIOWIneWni+WMlk1hbmFnZXIsIOS+i+Wmgm5ldyBDb25maWdNZ3IoKTtcbiAgICAgICAgdGhpcy5jb25maWdNZ3IgPSBuZXcgQ29uZmlnTWdyKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXllck1nciA9IG5ldyBQbGF5ZXJNZ3IodGhpcyk7XG4gICAgICAgIC8vIOWIneWni+WMluW5s+WPsHNka1xuICAgICAgICAvLyB0b2RvLi4uXG4gICAgICAgIC8vIOWKoOi9vemFjee9rlxuICAgICAgICBhd2FpdCB0aGlzLmNvbmZpZ01nci5sb2FkQ29uZmlncygpO1xuXG4gICAgICAgIC8vIFxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25HYW1lU2hvdygpIHtcblxuICAgIH1cbiAgICBvbkdhbWVIaWRlKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgLvovpHlsYLnmoTml7bpl7Tmm7TmlrDmjqfliLZcbiAgICAgKiBAcGFyYW0gZHQgXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmKCF0aGlzLmluaXRlZCkgcmV0dXJuIDtcbiAgICAgICAgLy8g5L6L5aaCVGFzay51cGRhdGUoZHQpOyDmm7TmlrDku7vliqHov5vluqZcbiAgICB9XG59XG5sZXQgR2FtZU1nciA9IG5ldyBHYW1lKCk7XG5leHBvcnQgZGVmYXVsdCBHYW1lTWdyOyJdfQ==