"use strict";
cc._RF.push(module, '7d011DLhkxFPakrCRw6PZqk', 'CocosHelper');
// Script/UIFrame/CocosHelper.ts

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
exports.LoadProgress = void 0;
var LoadProgress = /** @class */ (function () {
    function LoadProgress() {
    }
    return LoadProgress;
}());
exports.LoadProgress = LoadProgress;
/** 一些cocos api 的封装, promise函数统一加上sync后缀 */
var CocosHelper = /** @class */ (function () {
    function CocosHelper() {
    }
    CocosHelper.callInNextTick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(true);
                        }, 0);
                    })];
            });
        });
    };
    /**
     *
     * @param target
     * @param repeat -1，表示永久执行
     * @param tweens
     */
    CocosHelper.runRepeatTweenSync = function (target, repeat) {
        var tweens = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            tweens[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var selfTween = cc.tween(target);
                        for (var _i = 0, tweens_1 = tweens; _i < tweens_1.length; _i++) {
                            var tmpTween = tweens_1[_i];
                            selfTween = selfTween.then(tmpTween);
                        }
                        if (repeat < 0) {
                            cc.tween(target).repeatForever(selfTween).start();
                        }
                        else {
                            cc.tween(target).repeat(repeat, selfTween).call(function () {
                                resolve(true);
                            }).start();
                        }
                    })];
            });
        });
    };
    /** 同步的tween */
    CocosHelper.runTweenSync = function (target) {
        var tweens = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            tweens[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var selfTween = cc.tween(target);
                        for (var _i = 0, tweens_2 = tweens; _i < tweens_2.length; _i++) {
                            var tmpTween = tweens_2[_i];
                            selfTween = selfTween.then(tmpTween);
                        }
                        selfTween.call(function () {
                            resolve();
                        }).start();
                    })];
            });
        });
    };
    /** 停止tween */
    CocosHelper.prototype.stopTween = function (target) {
        cc.Tween.stopAllByTarget(target);
    };
    CocosHelper.prototype.stopTweenByTag = function (tag) {
        cc.Tween.stopAllByTag(tag);
    };
    /** 同步的动作, 在2.4.x action已经被废弃了, 不建议使用 */
    CocosHelper.runActionSync = function (node) {
        var actions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            actions[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!actions || actions.length <= 0)
                    return [2 /*return*/];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        actions.push(cc.callFunc(function () {
                            resolve(true);
                        }));
                        node.runAction(cc.sequence(actions));
                    })];
            });
        });
    };
    /** 同步的动画 */
    CocosHelper.runAnimSync = function (node, animName) {
        return __awaiter(this, void 0, void 0, function () {
            var anim, clip, clips, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        anim = node.getComponent(cc.Animation);
                        if (!anim)
                            return [2 /*return*/];
                        clip = null;
                        if (!animName)
                            clip = anim.defaultClip;
                        else {
                            clips = anim.getClips();
                            if (typeof (animName) === "number") {
                                clip = clips[animName];
                            }
                            else if (typeof (animName) === "string") {
                                for (i = 0; i < clips.length; i++) {
                                    if (clips[i].name === animName) {
                                        clip = clips[i];
                                        break;
                                    }
                                }
                            }
                        }
                        if (!clip)
                            return [2 /*return*/];
                        return [4 /*yield*/, CocosHelper.sleepSync(clip.duration)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 加载资源异常时抛出错误 */
    CocosHelper.loadResThrowErrorSync = function (url, type, onProgress) {
        return null;
    };
    CocosHelper.loadRes = function (url, type, callback) {
        var _this = this;
        if (this._loadingMap[url]) {
            this._loadingMap[url].push(callback);
            return;
        }
        this._loadingMap[url] = [callback];
        this.loadResSync(url, type).then(function (data) {
            var arr = _this._loadingMap[url];
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var func = arr_1[_i];
                func(data);
            }
            _this._loadingMap[url] = null;
            delete _this._loadingMap[url];
        });
    };
    /** 加载资源 */
    CocosHelper.loadResSync = function (url, type, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!onProgress)
                onProgress = _this._onProgress;
            cc.resources.load(url, type, onProgress, function (err, asset) {
                if (err) {
                    cc.error(url + " [\u8D44\u6E90\u52A0\u8F7D] \u9519\u8BEF " + err);
                    resolve(null);
                }
                else {
                    resolve(asset);
                }
            });
        });
    };
    /**
     * 加载进度
     * cb方法 其实目的是可以将loader方法的progress
     */
    CocosHelper._onProgress = function (completedCount, totalCount, item) {
        CocosHelper.loadProgress.completedCount = completedCount;
        CocosHelper.loadProgress.totalCount = totalCount;
        CocosHelper.loadProgress.item = item;
        CocosHelper.loadProgress.cb && CocosHelper.loadProgress.cb(completedCount, totalCount, item);
    };
    /**
     * 寻找子节点
     */
    CocosHelper.findChildInNode = function (nodeName, rootNode) {
        if (rootNode.name == nodeName) {
            return rootNode;
        }
        for (var i = 0; i < rootNode.childrenCount; i++) {
            var node = this.findChildInNode(nodeName, rootNode.children[i]);
            if (node) {
                return node;
            }
        }
        return null;
    };
    /** 获得Component的类名 */
    CocosHelper.getComponentName = function (com) {
        var arr = com.name.match(/<.*>$/);
        if (arr && arr.length > 0) {
            return arr[0].slice(1, -1);
        }
        return com.name;
    };
    /** 加载bundle */
    CocosHelper.loadBundleSync = function (url, options) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(url, options, function (err, bundle) {
                if (!err) {
                    cc.error("\u52A0\u8F7Dbundle\u5931\u8D25, url: " + url + ", err:" + err);
                    resolve(null);
                }
                else {
                    resolve(bundle);
                }
            });
        });
    };
    /** 路径是相对分包文件夹路径的相对路径 */
    CocosHelper.loadAssetFromBundleSync = function (bundleName, url) {
        var bundle = cc.assetManager.getBundle(bundleName);
        if (!bundle) {
            cc.error("\u52A0\u8F7Dbundle\u4E2D\u7684\u8D44\u6E90\u5931\u8D25, \u672A\u627E\u5230bundle, bundleUrl:" + bundleName);
            return null;
        }
        return new Promise(function (resolve, reject) {
            bundle.load(url, function (err, asset) {
                if (err) {
                    cc.error("\u52A0\u8F7Dbundle\u4E2D\u7684\u8D44\u6E90\u5931\u8D25, \u672A\u627E\u5230asset, url:" + url + ", err:" + err);
                    resolve(null);
                }
                else {
                    resolve(asset);
                }
            });
        });
    };
    /** 通过路径加载资源, 如果这个资源在bundle内, 会先加载bundle, 在解开bundle获得对应的资源 */
    CocosHelper.loadAssetSync = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            cc.resources.load(url, function (err, assets) {
                if (!err) {
                    cc.error("\u52A0\u8F7Dasset\u5931\u8D25, url:" + url + ", err: " + err);
                    resolve(null);
                }
                else {
                    _this.addRef(assets);
                    resolve(assets);
                }
            });
        });
    };
    /** 释放资源 */
    CocosHelper.releaseAsset = function (assets) {
        this.decRes(assets);
    };
    /** 增加引用计数 */
    CocosHelper.addRef = function (assets) {
        if (assets instanceof Array) {
            for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
                var a = assets_1[_i];
                a.addRef();
            }
        }
        else {
            assets.addRef();
        }
    };
    /** 减少引用计数, 当引用计数减少到0时,会自动销毁 */
    CocosHelper.decRes = function (assets) {
        if (assets instanceof Array) {
            for (var _i = 0, assets_2 = assets; _i < assets_2.length; _i++) {
                var a = assets_2[_i];
                a.decRef();
            }
        }
        else {
            assets.decRef();
        }
    };
    /** 截图 */
    CocosHelper.captureScreen = function (camera, prop) {
        var newTexture = new cc.RenderTexture();
        var oldTexture = camera.targetTexture;
        var rect = cc.rect(0, 0, cc.visibleRect.width, cc.visibleRect.height);
        if (prop) {
            if (prop instanceof cc.Node) {
                rect = prop.getBoundingBoxToWorld();
            }
            else {
                rect = prop;
            }
        }
        newTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.game._renderContext.STENCIL_INDEX8);
        camera.targetTexture = newTexture;
        camera.render();
        camera.targetTexture = oldTexture;
        var buffer = new ArrayBuffer(rect.width * rect.height * 4);
        var data = new Uint8Array(buffer);
        newTexture.readPixels(data, rect.x, rect.y, rect.width, rect.height);
        return data;
    };
    /** 加载进度 */
    CocosHelper.loadProgress = new LoadProgress();
    /** 等待时间, 秒为单位 */
    CocosHelper.sleepSync = function (dur) {
        return new Promise(function (resolve, reject) {
            cc.Canvas.instance.scheduleOnce(function () {
                resolve(true);
            }, dur);
        });
    };
    CocosHelper._loadingMap = {};
    return CocosHelper;
}());
exports.default = CocosHelper;

cc._RF.pop();