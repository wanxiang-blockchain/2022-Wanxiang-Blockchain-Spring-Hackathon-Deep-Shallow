"use strict";
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