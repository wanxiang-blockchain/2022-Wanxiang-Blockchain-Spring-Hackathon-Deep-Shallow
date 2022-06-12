
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '712729Tx0JBoI/gunNGv3kP', 'SoundMgr');
// Script/UIFrame/SoundMgr.ts

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
var CocosHelper_1 = require("./CocosHelper");
var SysDefine_1 = require("./config/SysDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioCache = cc.js.createMap();
        _this.currEffectId = -1;
        _this.currMusicId = -1;
        /** volume */
        _this.volume = new Volume();
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(SoundMgr, "inst", {
        get: function () {
            if (this._inst == null) {
                this._inst = cc.find(SysDefine_1.SysDefine.SYS_UIROOT_NAME).addComponent(this);
            }
            return this._inst;
        },
        enumerable: false,
        configurable: true
    });
    SoundMgr.prototype.onLoad = function () {
        var volume = this.getVolumeToLocal();
        if (volume) {
            this.volume = volume;
        }
        else {
            this.volume.musicVolume = 1;
            this.volume.effectVolume = 1;
        }
        this.setVolumeToLocal();
        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.audioEngine.pauseAll();
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.audioEngine.resumeAll();
        }, this);
    };
    SoundMgr.prototype.getVolume = function () {
        return this.volume;
    };
    SoundMgr.prototype.start = function () {
    };
    /**  */
    SoundMgr.prototype.setMusicVolume = function (musicVolume) {
        this.volume.musicVolume = musicVolume;
        this.setVolumeToLocal();
    };
    SoundMgr.prototype.setEffectVolume = function (effectVolume) {
        this.volume.effectVolume = effectVolume;
        this.setVolumeToLocal();
    };
    /** 播放背景音乐 */
    SoundMgr.prototype.playMusic = function (url, loop) {
        if (loop === void 0) { loop = true; }
        return __awaiter(this, void 0, void 0, function () {
            var sound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url || url === '')
                            return [2 /*return*/];
                        if (this.audioCache[url]) {
                            cc.audioEngine.playMusic(this.audioCache[url], loop);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, CocosHelper_1.default.loadResSync(url, cc.AudioClip)];
                    case 1:
                        sound = _a.sent();
                        this.audioCache[url] = sound;
                        this.currMusicId = cc.audioEngine.playMusic(sound, loop);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 播放音效 */
    SoundMgr.prototype.playEffect = function (url, loop) {
        if (loop === void 0) { loop = false; }
        return __awaiter(this, void 0, void 0, function () {
            var sound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url || url === '')
                            return [2 /*return*/];
                        if (this.audioCache[url]) {
                            cc.audioEngine.playEffect(this.audioCache[url], loop);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, CocosHelper_1.default.loadResSync(url, cc.AudioClip)];
                    case 1:
                        sound = _a.sent();
                        this.audioCache[url] = sound;
                        this.currEffectId = cc.audioEngine.playEffect(sound, loop);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 从本地读取 */
    SoundMgr.prototype.getVolumeToLocal = function () {
        var objStr = cc.sys.localStorage.getItem("Volume_For_Creator");
        if (!objStr) {
            return null;
        }
        return JSON.parse(objStr);
    };
    /** 设置音量 */
    SoundMgr.prototype.setVolumeToLocal = function () {
        cc.audioEngine.setMusicVolume(this.volume.musicVolume);
        cc.audioEngine.setEffectsVolume(this.volume.effectVolume);
        cc.sys.localStorage.setItem("Volume_For_Creator", JSON.stringify(this.volume));
    };
    SoundMgr.prototype.setEffectActive = function (active, id) {
        if (id === void 0) { id = -1; }
        if (active) {
            cc.audioEngine.stop(id < 0 ? this.currEffectId : id);
        }
        else {
            cc.audioEngine.resume(id < 0 ? this.currEffectId : id);
        }
    };
    SoundMgr._inst = null; // 单例
    SoundMgr = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(cc.Component));
exports.default = SoundMgr;
var Volume = /** @class */ (function () {
    function Volume() {
    }
    return Volume;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9Tb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0dDO1FBbEdXLGdCQUFVLEdBQWtDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFVOUQsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBbUJqQyxhQUFhO1FBQ0wsWUFBTSxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7O1FBa0V0QyxpQkFBaUI7SUFDckIsQ0FBQztJQS9GRyxzQkFBa0IsZ0JBQUk7YUFBdEI7WUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFLRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckMsSUFBRyxNQUFNLEVBQUU7WUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN4QjthQUFLO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxH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QUQsYUFBQztBQUFELENBSEEsQUFHQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvY29zSGVscGVyIGZyb20gXCIuL0NvY29zSGVscGVyXCI7XG5pbXBvcnQgeyBTeXNEZWZpbmUgfSBmcm9tIFwiLi9jb25maWcvU3lzRGVmaW5lXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBhdWRpb0NhY2hlOiB7W2tleTogc3RyaW5nXTogY2MuQXVkaW9DbGlwfSA9IGNjLmpzLmNyZWF0ZU1hcCgpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFNvdW5kTWdyID0gbnVsbDsgICAgICAgICAgICAgICAgICAgICAvLyDljZXkvotcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IFNvdW5kTWdyIHtcbiAgICAgICAgaWYodGhpcy5faW5zdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gY2MuZmluZChTeXNEZWZpbmUuU1lTX1VJUk9PVF9OQU1FKS5hZGRDb21wb25lbnQ8U291bmRNZ3I+KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3VyckVmZmVjdElkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGN1cnJNdXNpY0lkOiBudW1iZXIgPSAtMTtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLmdldFZvbHVtZVRvTG9jYWwoKTtcbiAgICAgICAgaWYodm9sdW1lKSB7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy52b2x1bWUubXVzaWNWb2x1bWUgPSAxO1xuICAgICAgICAgICAgdGhpcy52b2x1bWUuZWZmZWN0Vm9sdW1lID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZvbHVtZVRvTG9jYWwoKTtcblxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgKCkgPT4ge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIC8qKiB2b2x1bWUgKi9cbiAgICBwcml2YXRlIHZvbHVtZTogVm9sdW1lID0gbmV3IFZvbHVtZSgpO1xuICAgIGdldFZvbHVtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm9sdW1lO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICAvKiogICovXG4gICAgcHVibGljIHNldE11c2ljVm9sdW1lKG11c2ljVm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy52b2x1bWUubXVzaWNWb2x1bWUgPSBtdXNpY1ZvbHVtZTtcbiAgICAgICAgdGhpcy5zZXRWb2x1bWVUb0xvY2FsKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRFZmZlY3RWb2x1bWUoZWZmZWN0Vm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy52b2x1bWUuZWZmZWN0Vm9sdW1lID0gZWZmZWN0Vm9sdW1lO1xuICAgICAgICB0aGlzLnNldFZvbHVtZVRvTG9jYWwoKTtcbiAgICB9XG4gICAgLyoqIOaSreaUvuiDjOaZr+mfs+S5kCAqL1xuICAgIHB1YmxpYyBhc3luYyBwbGF5TXVzaWModXJsOiBzdHJpbmcsIGxvb3AgPSB0cnVlKSB7XG4gICAgICAgIGlmKCF1cmwgfHwgdXJsID09PSAnJykgcmV0dXJuIDtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuYXVkaW9DYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5hdWRpb0NhY2hlW3VybF0sIGxvb3ApO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc291bmQgPSBhd2FpdCBDb2Nvc0hlbHBlci5sb2FkUmVzU3luYzxjYy5BdWRpb0NsaXA+KHVybCwgY2MuQXVkaW9DbGlwKTtcbiAgICAgICAgdGhpcy5hdWRpb0NhY2hlW3VybF0gPSBzb3VuZDtcbiAgICAgICAgdGhpcy5jdXJyTXVzaWNJZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzb3VuZCwgbG9vcCk7XG4gICAgfVxuICAgIC8qKiDmkq3mlL7pn7PmlYggKi9cbiAgICBwdWJsaWMgYXN5bmMgcGxheUVmZmVjdCh1cmw6IHN0cmluZywgbG9vcCA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF1cmwgfHwgdXJsID09PSAnJykgcmV0dXJuIDtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuYXVkaW9DYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DYWNoZVt1cmxdLCBsb29wKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvdW5kID0gYXdhaXQgQ29jb3NIZWxwZXIubG9hZFJlc1N5bmM8Y2MuQXVkaW9DbGlwPih1cmwsIGNjLkF1ZGlvQ2xpcCk7XG4gICAgICAgIHRoaXMuYXVkaW9DYWNoZVt1cmxdID0gc291bmQ7XG4gICAgICAgIHRoaXMuY3VyckVmZmVjdElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzb3VuZCwgbG9vcCk7XG4gICAgfVxuXG4gICAgLyoqIOS7juacrOWcsOivu+WPliAqL1xuICAgIHByaXZhdGUgZ2V0Vm9sdW1lVG9Mb2NhbCgpIHtcbiAgICAgICAgbGV0IG9ialN0ciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtZV9Gb3JfQ3JlYXRvclwiKTtcbiAgICAgICAgaWYoIW9ialN0cikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uob2JqU3RyKTtcbiAgICB9XG4gICAgLyoqIOiuvue9rumfs+mHjyAqL1xuICAgIHByaXZhdGUgc2V0Vm9sdW1lVG9Mb2NhbCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy52b2x1bWUubXVzaWNWb2x1bWUpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMudm9sdW1lLmVmZmVjdFZvbHVtZSk7XG5cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVm9sdW1lX0Zvcl9DcmVhdG9yXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudm9sdW1lKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEVmZmVjdEFjdGl2ZShhY3RpdmU6IGJvb2xlYW4sIGlkOiBudW1iZXIgPSAtMSkge1xuICAgICAgICBpZihhY3RpdmUpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoaWQgPCAwID8gdGhpcy5jdXJyRWZmZWN0SWQgOiBpZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShpZCA8IDAgPyB0aGlzLmN1cnJFZmZlY3RJZCA6IGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG5cbmNsYXNzIFZvbHVtZSB7XG4gICAgbXVzaWNWb2x1bWU6IG51bWJlcjtcbiAgICBlZmZlY3RWb2x1bWU6IG51bWJlcjtcbn0iXX0=