
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/CocosHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9Db2Nvc0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxvQ0FBWTtBQVF6QiwyQ0FBMkM7QUFDM0M7SUFBQTtJQW1RQSxDQUFDO0lBalF1QiwwQkFBYyxHQUFsQzs7O2dCQUNJLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQy9CLFVBQVUsQ0FBQzs0QkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDVixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFjRDs7Ozs7T0FLRztJQUNpQiw4QkFBa0IsR0FBdEMsVUFBdUMsTUFBVyxFQUFFLE1BQWM7UUFBRSxnQkFBcUI7YUFBckIsVUFBcUIsRUFBckIscUJBQXFCLEVBQXJCLElBQXFCO1lBQXJCLCtCQUFxQjs7OztnQkFDckYsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDL0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakMsS0FBc0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7NEJBQTFCLElBQU0sUUFBUSxlQUFBOzRCQUNkLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN4Qzt3QkFDRCxJQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQ1gsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ3JEOzZCQUFLOzRC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QztnQkFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFBO0lBaUZjLHVCQUFXLEdBQWdDLEVBQUUsQ0FBQztJQThKakUsa0JBQUM7Q0FuUUQsQUFtUUMsSUFBQTtrQkFuUW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9hZFByb2dyZXNzIHtcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbXBsZXRlZENvdW50OiBudW1iZXI7XG4gICAgcHVibGljIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaXRlbTogYW55O1xuICAgIHB1YmxpYyBjYj86IEZ1bmN0aW9uO1xufVxuXG4vKiog5LiA5LqbY29jb3MgYXBpIOeahOWwgeijhSwgcHJvbWlzZeWHveaVsOe7n+S4gOWKoOS4inN5bmPlkI7nvIAgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvY29zSGVscGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY2FsbEluTmV4dFRpY2soKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOWKoOi9vei/m+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFByb2dyZXNzID0gbmV3IExvYWRQcm9ncmVzcygpO1xuXG4gICAgLyoqIOetieW+heaXtumXtCwg56eS5Li65Y2V5L2NICovXG4gICAgcHVibGljIHN0YXRpYyBzbGVlcFN5bmMgPSBmdW5jdGlvbihkdXI6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIGR1cik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHBhcmFtIHJlcGVhdCAtMe+8jOihqOekuuawuOS5heaJp+ihjFxuICAgICAqIEBwYXJhbSB0d2VlbnMgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBydW5SZXBlYXRUd2VlblN5bmModGFyZ2V0OiBhbnksIHJlcGVhdDogbnVtYmVyLCAuLi50d2VlbnM6IGNjLlR3ZWVuW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWxmVHdlZW4gPSBjYy50d2Vlbih0YXJnZXQpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRtcFR3ZWVuIG9mIHR3ZWVucykge1xuICAgICAgICAgICAgICAgIHNlbGZUd2VlbiA9IHNlbGZUd2Vlbi50aGVuKHRtcFR3ZWVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHJlcGVhdCA8IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXQpLnJlcGVhdEZvcmV2ZXIoc2VsZlR3ZWVuKS5zdGFydCgpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldCkucmVwZWF0KHJlcGVhdCwgc2VsZlR3ZWVuKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICBcbiAgICB9XG4gICAgLyoqIOWQjOatpeeahHR3ZWVuICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBydW5Ud2VlblN5bmModGFyZ2V0OiBhbnksIC4uLnR3ZWVuczogY2MuVHdlZW5bXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGZUd2VlbiA9IGNjLnR3ZWVuKHRhcmdldCk7XG4gICAgICAgICAgICBmb3IoY29uc3QgdG1wVHdlZW4gb2YgdHdlZW5zKSB7XG4gICAgICAgICAgICAgICAgc2VsZlR3ZWVuID0gc2VsZlR3ZWVuLnRoZW4odG1wVHdlZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZlR3ZWVuLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiog5YGc5q2idHdlZW4gKi9cbiAgICBwdWJsaWMgc3RvcFR3ZWVuKHRhcmdldDogYW55KSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RvcFR3ZWVuQnlUYWcodGFnOiBudW1iZXIpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKHRhZyk7XG4gICAgfVxuICAgIC8qKiDlkIzmraXnmoTliqjkvZwsIOWcqDIuNC54IGFjdGlvbuW3sue7j+iiq+W6n+W8g+S6hiwg5LiN5bu66K6u5L2/55SoICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBydW5BY3Rpb25TeW5jKG5vZGU6IGNjLk5vZGUsIC4uLmFjdGlvbnM6IGNjLkZpbml0ZVRpbWVBY3Rpb25bXSkge1xuICAgICAgICBpZighYWN0aW9ucyB8fCBhY3Rpb25zLmxlbmd0aCA8PSAwKSByZXR1cm4gO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiog5ZCM5q2l55qE5Yqo55S7ICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBydW5BbmltU3luYyhub2RlOiBjYy5Ob2RlLCBhbmltTmFtZT86IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICBsZXQgYW5pbSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGlmKCFhbmltKSByZXR1cm4gO1xuICAgICAgICBsZXQgY2xpcDogY2MuQW5pbWF0aW9uQ2xpcCA9IG51bGw7XG4gICAgICAgIGlmKCFhbmltTmFtZSkgY2xpcCA9IGFuaW0uZGVmYXVsdENsaXA7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsaXBzID0gYW5pbS5nZXRDbGlwcygpO1xuICAgICAgICAgICAgaWYodHlwZW9mKGFuaW1OYW1lKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGNsaXAgPSBjbGlwc1thbmltTmFtZV07XG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlb2YoYW5pbU5hbWUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Y2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2xpcHNbaV0ubmFtZSA9PT0gYW5pbU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAgPSBjbGlwc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKCFjbGlwKSByZXR1cm4gO1xuICAgICAgICBhd2FpdCBDb2Nvc0hlbHBlci5zbGVlcFN5bmMoY2xpcC5kdXJhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqIOWKoOi9vei1hOa6kOW8guW4uOaXtuaKm+WHuumUmeivryAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFJlc1Rocm93RXJyb3JTeW5jPFQ+KHVybDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIG9uUHJvZ3Jlc3M/OiAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHsgICAgXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9sb2FkaW5nTWFwOiB7W2tleTogc3RyaW5nXTogRnVuY3Rpb25bXX0gPSB7fTtcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSZXM8VD4odXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgY2FsbGJhY2s6IEZ1bmN0aW9uICkge1xuICAgICAgICBpZih0aGlzLl9sb2FkaW5nTWFwW3VybF0pIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdNYXBbdXJsXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9hZGluZ01hcFt1cmxdID0gW2NhbGxiYWNrXTtcbiAgICAgICAgdGhpcy5sb2FkUmVzU3luYzxUPih1cmwsIHR5cGUpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuX2xvYWRpbmdNYXBbdXJsXTtcbiAgICAgICAgICAgIGZvcihjb25zdCBmdW5jIG9mIGFycikge1xuICAgICAgICAgICAgICAgIGZ1bmMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nTWFwW3VybF0gPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRpbmdNYXBbdXJsXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiDliqDovb3otYTmupAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSZXNTeW5jPFQ+KHVybDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIG9uUHJvZ3Jlc3M/OiAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPFQ+e1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYoIW9uUHJvZ3Jlc3MpIG9uUHJvZ3Jlc3MgPSB0aGlzLl9vblByb2dyZXNzO1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCB0eXBlLCBvblByb2dyZXNzLCAoZXJyLCBhc3NldDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgJHt1cmx9IFvotYTmupDliqDovb1dIOmUmeivryAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXQgYXMgVCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogXG4gICAgICog5Yqg6L296L+b5bqmXG4gICAgICogY2Lmlrnms5Ug5YW25a6e55uu55qE5piv5Y+v5Lul5bCGbG9hZGVy5pa55rOV55qEcHJvZ3Jlc3NcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfb25Qcm9ncmVzcyhjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkge1xuICAgICAgICBDb2Nvc0hlbHBlci5sb2FkUHJvZ3Jlc3MuY29tcGxldGVkQ291bnQgPSBjb21wbGV0ZWRDb3VudDtcbiAgICAgICAgQ29jb3NIZWxwZXIubG9hZFByb2dyZXNzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgICAgICBDb2Nvc0hlbHBlci5sb2FkUHJvZ3Jlc3MuaXRlbSA9IGl0ZW07XG4gICAgICAgIENvY29zSGVscGVyLmxvYWRQcm9ncmVzcy5jYiAmJiBDb2Nvc0hlbHBlci5sb2FkUHJvZ3Jlc3MuY2IoY29tcGxldGVkQ291bnQsIHRvdGFsQ291bnQsIGl0ZW0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlr7vmib7lrZDoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGZpbmRDaGlsZEluTm9kZShub2RlTmFtZTogc3RyaW5nLCByb290Tm9kZTogY2MuTm9kZSk6IGNjLk5vZGUge1xuICAgICAgICBpZihyb290Tm9kZS5uYW1lID09IG5vZGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cm9vdE5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZmluZENoaWxkSW5Ob2RlKG5vZGVOYW1lLCByb290Tm9kZS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZihub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l0NvbXBvbmVudOeahOexu+WQjSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29tcG9uZW50TmFtZShjb206IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcnIgPSBjb20ubmFtZS5tYXRjaCgvPC4qPiQvKTtcbiAgICAgICAgaWYoYXJyICYmIGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyWzBdLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tLm5hbWU7XG4gICAgfVxuICAgIC8qKiDliqDovb1idW5kbGUgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRCdW5kbGVTeW5jKHVybDogc3RyaW5nLCBvcHRpb25zOiBhbnkpOiBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHVybCwgb3B0aW9ucywgKGVycjogRXJyb3IsIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYOWKoOi9vWJ1bmRsZeWksei0pSwgdXJsOiAke3VybH0sIGVycjoke2Vycn1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnVuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8qKiDot6/lvoTmmK/nm7jlr7nliIbljIXmlofku7blpLnot6/lvoTnmoTnm7jlr7not6/lvoQgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldEZyb21CdW5kbGVTeW5jKGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kbGVOYW1lKTtcbiAgICAgICAgaWYoIWJ1bmRsZSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYOWKoOi9vWJ1bmRsZeS4reeahOi1hOa6kOWksei0pSwg5pyq5om+5YiwYnVuZGxlLCBidW5kbGVVcmw6JHtidW5kbGVOYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHVybCwgKGVyciwgYXNzZXQ6IGNjLkFzc2V0IHwgY2MuQXNzZXRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihg5Yqg6L29YnVuZGxl5Lit55qE6LWE5rqQ5aSx6LSlLCDmnKrmib7liLBhc3NldCwgdXJsOiR7dXJsfSwgZXJyOiR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiDpgJrov4fot6/lvoTliqDovb3otYTmupAsIOWmguaenOi/meS4qui1hOa6kOWcqGJ1bmRsZeWGhSwg5Lya5YWI5Yqg6L29YnVuZGxlLCDlnKjop6PlvIBidW5kbGXojrflvpflr7nlupTnmoTotYTmupAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldFN5bmModXJsOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCAoZXJyLCBhc3NldHM6IGNjLkFzc2V0IHwgY2MuQXNzZXRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYOWKoOi9vWFzc2V05aSx6LSlLCB1cmw6JHt1cmx9LCBlcnI6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRSZWYoYXNzZXRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqIOmHiuaUvui1hOa6kCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUFzc2V0KGFzc2V0czogY2MuQXNzZXQgfCBjYy5Bc3NldFtdKSB7XG4gICAgICAgIHRoaXMuZGVjUmVzKGFzc2V0cyk7XG4gICAgfVxuICAgIC8qKiDlop7liqDlvJXnlKjorqHmlbAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBhZGRSZWYoYXNzZXRzOiBjYy5Bc3NldCB8IGNjLkFzc2V0W10pIHtcbiAgICAgICAgaWYoYXNzZXRzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvcihjb25zdCBhIG9mIGFzc2V0cykge1xuICAgICAgICAgICAgICAgIGEuYWRkUmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGFzc2V0cy5hZGRSZWYoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5YeP5bCR5byV55So6K6h5pWwLCDlvZPlvJXnlKjorqHmlbDlh4/lsJHliLAw5pe2LOS8muiHquWKqOmUgOavgSAqL1xuICAgIHByaXZhdGUgc3RhdGljIGRlY1Jlcyhhc3NldHM6IGNjLkFzc2V0IHwgY2MuQXNzZXRbXSkge1xuICAgICAgICBpZihhc3NldHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZm9yKGNvbnN0IGEgb2YgYXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgYS5kZWNSZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYXNzZXRzLmRlY1JlZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOaIquWbviAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2FwdHVyZVNjcmVlbihjYW1lcmE6IGNjLkNhbWVyYSwgcHJvcD86IGNjLk5vZGUgfCBjYy5SZWN0KSB7XG4gICAgICAgIGxldCBuZXdUZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICAgICAgbGV0IG9sZFRleHR1cmUgPSBjYW1lcmEudGFyZ2V0VGV4dHVyZTtcbiAgICAgICAgbGV0IHJlY3Q6IGNjLlJlY3QgPSBjYy5yZWN0KDAsIDAsIGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQpO1xuICAgICAgICBpZihwcm9wKSB7XG4gICAgICAgICAgICBpZihwcm9wIGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgICAgIHJlY3QgPSBwcm9wLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY3QgPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld1RleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQsIGNjLmdhbWUuX3JlbmRlckNvbnRleHQuU1RFTkNJTF9JTkRFWDgpO1xuICAgICAgICBjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IG5ld1RleHR1cmU7XG4gICAgICAgIGNhbWVyYS5yZW5kZXIoKTtcbiAgICAgICAgY2FtZXJhLnRhcmdldFRleHR1cmUgPSBvbGRUZXh0dXJlO1xuICAgICAgICBcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihyZWN0LndpZHRoICogcmVjdC5oZWlnaHQgKiA0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBuZXdUZXh0dXJlLnJlYWRQaXhlbHMoZGF0YSwgcmVjdC54LCByZWN0LnksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuXG4iXX0=