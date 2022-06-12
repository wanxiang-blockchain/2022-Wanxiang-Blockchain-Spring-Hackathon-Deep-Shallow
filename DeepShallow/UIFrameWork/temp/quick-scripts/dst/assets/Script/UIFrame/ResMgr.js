
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/ResMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1946LwxMZELpC3XyersJGl', 'ResMgr');
// Script/UIFrame/ResMgr.ts

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
var CocosHelper_1 = require("./CocosHelper");
/**
 * 资源加载, 针对的是Form
 * 首先将资源分为两类
 * 一种是在编辑器时将其拖上去图片, 这里将其称为静态图片,
 * 一种是在代码中使用cc.loader加载的图片, 这里将其称为动态图片
 *
 * 对于静态资源
 * 1, 加载  在加载prefab时, cocos会将其依赖的图片一并加载, 所有不需要我们担心
 * 2, 释放  这里采用的引用计数的管理方法, 只需要调用destoryForm即可
 *
 * 加载一个窗体
 * 第一步 加载prefab, 第二步 实例化prefab 获得 node
 * 所以销毁一个窗体 也需要两步, 销毁node, 销毁prefab
 */
var ResMgr = /** @class */ (function () {
    function ResMgr() {
        /**
         * 采用计数管理的办法, 管理form所依赖的资源
         */
        this._prefabDepends = cc.js.createMap();
        this._dynamicTags = cc.js.createMap();
        this._tmpAssetsDepends = []; // 临时缓存
        this._assetsReference = cc.js.createMap(); // 资源引用计数
        this._prefabs = cc.js.createMap(); // 预制体缓存
    }
    Object.defineProperty(ResMgr, "inst", {
        get: function () {
            if (this.instance === null) {
                this.instance = new ResMgr();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    /** 加载窗体 */
    ResMgr.prototype.loadFormPrefab = function (fid) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, res, deps;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._prefabs[fid])
                            return [2 /*return*/, this._prefabs[fid]];
                        return [4 /*yield*/, this._loadResWithReference(fid, cc.Prefab)];
                    case 1:
                        _a = _b.sent(), res = _a.res, deps = _a.deps;
                        this._prefabDepends[fid] = deps;
                        this._prefabs[fid] = res;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /** 销毁窗体 */
    ResMgr.prototype.destoryFormPrefab = function (fid) {
        if (this._prefabs[fid]) {
            this._prefabs[fid].destroy();
            this._prefabs[fid] = null;
            delete this._prefabs[fid];
        }
        // 销毁依赖的资源
        this._destoryResWithReference(this._prefabDepends[fid]);
        // 删除缓存
        this._prefabDepends[fid] = null;
        delete this._prefabDepends[fid];
    };
    /** 动态资源管理, 通过tag标记当前资源, 统一释放 */
    ResMgr.prototype.loadDynamicRes = function (url, type, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, res, deps;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._loadResWithReference(url, type)];
                    case 1:
                        _a = _c.sent(), res = _a.res, deps = _a.deps;
                        if (!this._dynamicTags[tag]) {
                            this._dynamicTags[tag] = [];
                        }
                        (_b = this._dynamicTags[tag]).push.apply(_b, deps);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /** 销毁动态资源  */
    ResMgr.prototype.destoryDynamicRes = function (tag) {
        if (!this._dynamicTags[tag]) { // 销毁
            return false;
        }
        this._destoryResWithReference(this._dynamicTags[tag]);
        this._dynamicTags[tag] = null;
        delete this._dynamicTags[tag];
        return true;
    };
    /** 加载资源并添加引用计数 */
    ResMgr.prototype._loadResWithReference = function (url, type) {
        return __awaiter(this, void 0, void 0, function () {
            var res, deps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CocosHelper_1.default.loadResSync(url, type, this._addTmpAssetsDepends.bind(this))];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            this._clearTmpAssetsDepends();
                            return [2 /*return*/, null];
                        }
                        this._clearTmpAssetsDepends();
                        deps = cc.assetManager.dependUtil.getDepsRecursively(res['_uuid']) || [];
                        deps.push(res['_uuid']);
                        this.addAssetsDepends(deps);
                        return [2 /*return*/, {
                                res: res,
                                deps: deps
                            }];
                }
            });
        });
    };
    /** 更加引用销毁资源 */
    ResMgr.prototype._destoryResWithReference = function (deps) {
        var _toDeletes = this.removeAssetsDepends(deps);
        this._destoryAssets(_toDeletes);
        return true;
    };
    /** 添加资源计数 */
    ResMgr.prototype.addAssetsDepends = function (deps) {
        for (var _i = 0, deps_1 = deps; _i < deps_1.length; _i++) {
            var s = deps_1[_i];
            if (this._checkIsBuiltinAssets(s))
                continue;
            if (this._assetsReference[s]) {
                this._assetsReference[s] += 1;
            }
            else {
                this._assetsReference[s] = 1;
            }
        }
    };
    /** 删除资源计数 */
    ResMgr.prototype.removeAssetsDepends = function (deps) {
        var _deletes = [];
        for (var _i = 0, deps_2 = deps; _i < deps_2.length; _i++) {
            var s = deps_2[_i];
            if (!this._assetsReference[s] || this._assetsReference[s] === 0)
                continue;
            this._assetsReference[s]--;
            if (this._assetsReference[s] === 0) {
                _deletes.push(s);
                delete this._assetsReference[s]; // 删除key;
            }
        }
        return _deletes;
    };
    ResMgr.prototype._destoryAssets = function (urls) {
        for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
            var url = urls_1[_i];
            this._destoryAsset(url);
        }
    };
    /** 销毁资源 */
    ResMgr.prototype._destoryAsset = function (url) {
        if (this._checkIsBuiltinAssets(url))
            return;
        cc.assetManager.assets.remove(url); // 从缓存中清除
        var asset = cc.assetManager.assets.get(url); // 销毁该资源
        asset && asset.destroy();
        cc.assetManager.dependUtil['remove'](url); // 从依赖中删除
    };
    /** 临时添加资源计数 */
    ResMgr.prototype._addTmpAssetsDepends = function (completedCount, totalCount, item) {
        var _a;
        var deps = (cc.assetManager.dependUtil.getDepsRecursively(item.uuid) || []);
        deps.push(item.uuid);
        this.addAssetsDepends(deps);
        (_a = this._tmpAssetsDepends).push.apply(_a, deps);
    };
    /** 删除临时添加的计数 */
    ResMgr.prototype._clearTmpAssetsDepends = function () {
        for (var _i = 0, _a = this._tmpAssetsDepends; _i < _a.length; _i++) {
            var s = _a[_i];
            if (!this._assetsReference[s] || this._assetsReference[s] === 0)
                continue;
            this._assetsReference[s]--;
            if (this._assetsReference[s] === 0) {
                delete this._assetsReference[s]; // 这里不清理缓存
            }
        }
        this._tmpAssetsDepends = [];
    };
    /** 检查是否是builtin内的资源 */
    ResMgr.prototype._checkIsBuiltinAssets = function (url) {
        var asset = cc.assetManager.assets.get(url);
        if (asset && asset['_name'].indexOf("builtin") != -1) {
            return true;
        }
        return false;
    };
    /** 计算当前纹理数量和缓存 */
    ResMgr.prototype.computeTextureCache = function () {
        var cache = cc.assetManager.assets;
        var totalTextureSize = 0;
        var count = 0;
        cache.forEach(function (item, key) {
            var type = (item && item['__classname__']) ? item['__classname__'] : '';
            if (type == 'cc.Texture2D') {
                var texture = item;
                var textureSize = texture.width * texture.height * ((texture['_native'] === '.jpg' ? 3 : 4) / 1024 / 1024);
                // debugger
                totalTextureSize += textureSize;
                count++;
            }
        });
        return "\u7F13\u5B58 [\u7EB9\u7406\u603B\u6570:" + count + "][\u7EB9\u7406\u7F13\u5B58:" + (totalTextureSize.toFixed(2) + 'M') + "]";
    };
    ResMgr.instance = null;
    return ResMgr;
}());
exports.default = ResMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9SZXNNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFJeEM7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNIO0lBQUE7UUFTSTs7V0FFRztRQUNLLG1CQUFjLEdBQW1DLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkUsaUJBQVksR0FBbUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqRSxzQkFBaUIsR0FBYSxFQUFFLENBQUMsQ0FBdUMsT0FBTztRQUMvRSxxQkFBZ0IsR0FBNEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFVLFNBQVM7UUFFakYsYUFBUSxHQUErQixFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQWUsUUFBUTtJQWlLNUYsQ0FBQztJQWpMRyxzQkFBa0IsY0FBSTthQUF0QjtZQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWNELFdBQVc7SUFDRSwrQkFBYyxHQUEzQixVQUE0QixHQUFXOzs7Ozs7d0JBQ25DLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7NEJBQUUsc0JBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQzt3QkFDL0IscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFZLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUF6RSxLQUFjLFNBQTJELEVBQXhFLEdBQUcsU0FBQSxFQUFFLElBQUksVUFBQTt3QkFDZCxJQUFJ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Q0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWMsRUFBRSxHQUFXO1lBQ3RDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4RSxJQUFHLElBQUksSUFBSSxjQUFjLEVBQUU7Z0JBQ3ZCLElBQUksT0FBTyxHQUFHLElBQW9CLENBQUM7Z0JBQ25DLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzNHLFdBQVc7Z0JBQ1gsZ0JBQWdCLElBQUksV0FBVyxDQUFDO2dCQUNoQyxLQUFLLEVBQUcsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLDRDQUFZLEtBQUssb0NBQVUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBRyxDQUFDO0lBQzNFLENBQUM7SUFoTGMsZUFBUSxHQUFXLElBQUksQ0FBQztJQWtMM0MsYUFBQztDQW5MRCxBQW1MQyxJQUFBO2tCQW5Mb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2Nvc0hlbHBlciBmcm9tIFwiLi9Db2Nvc0hlbHBlclwiO1xuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcbmltcG9ydCB7IEV2ZW50Q2VudGVyIH0gZnJvbSBcIi4vRXZlbnRDZW50ZXJcIjtcblxuLyoqXG4gKiDotYTmupDliqDovb0sIOmSiOWvueeahOaYr0Zvcm1cbiAqIOmmluWFiOWwhui1hOa6kOWIhuS4uuS4pOexu1xuICog5LiA56eN5piv5Zyo57yW6L6R5Zmo5pe25bCG5YW25ouW5LiK5Y675Zu+54mHLCDov5nph4zlsIblhbbnp7DkuLrpnZnmgIHlm77niYcsIFxuICog5LiA56eN5piv5Zyo5Luj56CB5Lit5L2/55SoY2MubG9hZGVy5Yqg6L2955qE5Zu+54mHLCDov5nph4zlsIblhbbnp7DkuLrliqjmgIHlm77niYdcbiAqIFxuICog5a+55LqO6Z2Z5oCB6LWE5rqQXG4gKiAxLCDliqDovb0gIOWcqOWKoOi9vXByZWZhYuaXtiwgY29jb3PkvJrlsIblhbbkvp3otZbnmoTlm77niYfkuIDlubbliqDovb0sIOaJgOacieS4jemcgOimgeaIkeS7rOaLheW/g1xuICogMiwg6YeK5pS+ICDov5nph4zph4fnlKjnmoTlvJXnlKjorqHmlbDnmoTnrqHnkIbmlrnms5UsIOWPqumcgOimgeiwg+eUqGRlc3RvcnlGb3Jt5Y2z5Y+vXG4gKiBcbiAqIOWKoOi9veS4gOS4queql+S9k1xuICog56ys5LiA5q2lIOWKoOi9vXByZWZhYiwg56ys5LqM5q2lIOWunuS+i+WMlnByZWZhYiDojrflvpcgbm9kZVxuICog5omA5Lul6ZSA5q+B5LiA5Liq56qX5L2TIOS5n+mcgOimgeS4pOatpSwg6ZSA5q+Bbm9kZSwg6ZSA5q+BcHJlZmFiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc01nciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJlc01nciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdCgpIHtcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSZXNNZ3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICog6YeH55So6K6h5pWw566h55CG55qE5Yqe5rOVLCDnrqHnkIZmb3Jt5omA5L6d6LWW55qE6LWE5rqQXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJlZmFiRGVwZW5kczoge1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZz59ID0gY2MuanMuY3JlYXRlTWFwKCk7XG4gICAgcHJpdmF0ZSBfZHluYW1pY1RhZ3M6IHtba2V5OiBzdHJpbmddOiBBcnJheTxzdHJpbmc+fSA9IGNjLmpzLmNyZWF0ZU1hcCgpOyAgICAgICBcblxuICAgIHByaXZhdGUgX3RtcEFzc2V0c0RlcGVuZHM6IHN0cmluZ1tdID0gW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Li05pe257yT5a2YXG4gICAgcHJpdmF0ZSBfYXNzZXRzUmVmZXJlbmNlOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IGNjLmpzLmNyZWF0ZU1hcCgpOyAgICAgICAgICAvLyDotYTmupDlvJXnlKjorqHmlbBcblxuICAgIHByaXZhdGUgX3ByZWZhYnM6IHtba2V5OiBzdHJpbmddOiBjYy5QcmVmYWJ9ID0gY2MuanMuY3JlYXRlTWFwKCk7ICAgICAgICAgICAgICAgLy8g6aKE5Yi25L2T57yT5a2YXG5cbiAgICBcbiAgICAvKiog5Yqg6L2956qX5L2TICovXG4gICAgcHVibGljIGFzeW5jIGxvYWRGb3JtUHJlZmFiKGZpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuX3ByZWZhYnNbZmlkXSkgcmV0dXJuIHRoaXMuX3ByZWZhYnNbZmlkXTtcbiAgICAgICAgbGV0IHtyZXMsIGRlcHN9ID0gYXdhaXQgdGhpcy5fbG9hZFJlc1dpdGhSZWZlcmVuY2U8Y2MuUHJlZmFiPihmaWQsIGNjLlByZWZhYik7XG4gICAgICAgIHRoaXMuX3ByZWZhYkRlcGVuZHNbZmlkXSA9IGRlcHM7XG4gICAgICAgIHRoaXMuX3ByZWZhYnNbZmlkXSA9IHJlcztcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKiog6ZSA5q+B56qX5L2TICovXG4gICAgcHVibGljIGRlc3RvcnlGb3JtUHJlZmFiKGZpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuX3ByZWZhYnNbZmlkXSkge1xuICAgICAgICAgICAgdGhpcy5fcHJlZmFic1tmaWRdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNbZmlkXSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcHJlZmFic1tmaWRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmUgOavgeS+nei1lueahOi1hOa6kFxuICAgICAgICB0aGlzLl9kZXN0b3J5UmVzV2l0aFJlZmVyZW5jZSh0aGlzLl9wcmVmYWJEZXBlbmRzW2ZpZF0pO1xuICAgICAgICAvLyDliKDpmaTnvJPlrZhcbiAgICAgICAgdGhpcy5fcHJlZmFiRGVwZW5kc1tmaWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3ByZWZhYkRlcGVuZHNbZmlkXTtcbiAgICB9XG5cblxuICAgIC8qKiDliqjmgIHotYTmupDnrqHnkIYsIOmAmui/h3RhZ+agh+iusOW9k+WJjei1hOa6kCwg57uf5LiA6YeK5pS+ICovXG4gICAgcHVibGljIGFzeW5jIGxvYWREeW5hbWljUmVzPFQ+KHVybDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIHRhZzogc3RyaW5nKSB7XG4gICAgICAgIGxldCB7cmVzLCBkZXBzfSA9IGF3YWl0IHRoaXMuX2xvYWRSZXNXaXRoUmVmZXJlbmNlPFQ+KHVybCwgdHlwZSk7XG4gICAgICAgIGlmKCF0aGlzLl9keW5hbWljVGFnc1t0YWddKSB7XG4gICAgICAgICAgICB0aGlzLl9keW5hbWljVGFnc1t0YWddID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZHluYW1pY1RhZ3NbdGFnXS5wdXNoKC4uLmRlcHMpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8qKiDplIDmr4HliqjmgIHotYTmupAgICovXG4gICAgcHVibGljIGRlc3RvcnlEeW5hbWljUmVzKHRhZzogc3RyaW5nKSB7XG4gICAgICAgIGlmKCF0aGlzLl9keW5hbWljVGFnc1t0YWddKSB7ICAgICAgIC8vIOmUgOavgVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3RvcnlSZXNXaXRoUmVmZXJlbmNlKHRoaXMuX2R5bmFtaWNUYWdzW3RhZ10pXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9keW5hbWljVGFnc1t0YWddID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2R5bmFtaWNUYWdzW3RhZ107XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICAvKiog5Yqg6L296LWE5rqQ5bm25re75Yqg5byV55So6K6h5pWwICovXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZFJlc1dpdGhSZWZlcmVuY2U8VD4odXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgQ29jb3NIZWxwZXIubG9hZFJlc1N5bmM8VD4odXJsLCB0eXBlLCB0aGlzLl9hZGRUbXBBc3NldHNEZXBlbmRzLmJpbmQodGhpcykpO1xuICAgICAgICBpZighcmVzKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclRtcEFzc2V0c0RlcGVuZHMoKTsgICAgXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbGVhclRtcEFzc2V0c0RlcGVuZHMoKTtcbiAgICAgICAgbGV0IGRlcHMgPSBjYy5hc3NldE1hbmFnZXIuZGVwZW5kVXRpbC5nZXREZXBzUmVjdXJzaXZlbHkocmVzWydfdXVpZCddKSB8fCBbXTtcbiAgICAgICAgZGVwcy5wdXNoKHJlc1snX3V1aWQnXSk7XG4gICAgICAgIHRoaXMuYWRkQXNzZXRzRGVwZW5kcyhkZXBzKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzOiByZXMsXG4gICAgICAgICAgICBkZXBzOiBkZXBzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIOabtOWKoOW8leeUqOmUgOavgei1hOa6kCAqL1xuICAgIHByaXZhdGUgX2Rlc3RvcnlSZXNXaXRoUmVmZXJlbmNlKGRlcHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGxldCBfdG9EZWxldGVzID0gdGhpcy5yZW1vdmVBc3NldHNEZXBlbmRzKGRlcHMpO1xuICAgICAgICB0aGlzLl9kZXN0b3J5QXNzZXRzKF90b0RlbGV0ZXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuXG4gICAgLyoqIOa3u+WKoOi1hOa6kOiuoeaVsCAqL1xuICAgIHByaXZhdGUgYWRkQXNzZXRzRGVwZW5kcyhkZXBzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIGZvcihsZXQgcyBvZiBkZXBzKSB7XG4gICAgICAgICAgICBpZih0aGlzLl9jaGVja0lzQnVpbHRpbkFzc2V0cyhzKSkgY29udGludWU7XG4gICAgICAgICAgICBpZih0aGlzLl9hc3NldHNSZWZlcmVuY2Vbc10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldHNSZWZlcmVuY2Vbc10gKz0gMTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldHNSZWZlcmVuY2Vbc10gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDliKDpmaTotYTmupDorqHmlbAgKi9cbiAgICBwcml2YXRlIHJlbW92ZUFzc2V0c0RlcGVuZHMoZGVwczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBsZXQgX2RlbGV0ZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvcihsZXQgcyBvZiBkZXBzKSB7XG4gICAgICAgICAgICBpZighdGhpcy5fYXNzZXRzUmVmZXJlbmNlW3NdIHx8IHRoaXMuX2Fzc2V0c1JlZmVyZW5jZVtzXSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLl9hc3NldHNSZWZlcmVuY2Vbc10gLS07XG4gICAgICAgICAgICBpZih0aGlzLl9hc3NldHNSZWZlcmVuY2Vbc10gPT09IDApIHsgICAgIFxuICAgICAgICAgICAgICAgIF9kZWxldGVzLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2Fzc2V0c1JlZmVyZW5jZVtzXTsgICAgICAgICAgICAgICAgICAvLyDliKDpmaRrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9kZWxldGVzO1xuICAgIH1cbiAgICBwcml2YXRlIF9kZXN0b3J5QXNzZXRzKHVybHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGZvcihjb25zdCB1cmwgb2YgdXJscykge1xuICAgICAgICAgICAgdGhpcy5fZGVzdG9yeUFzc2V0KHVybCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOmUgOavgei1hOa6kCAqL1xuICAgIHByaXZhdGUgX2Rlc3RvcnlBc3NldCh1cmw6IHN0cmluZykge1xuICAgICAgICBpZih0aGlzLl9jaGVja0lzQnVpbHRpbkFzc2V0cyh1cmwpKSByZXR1cm47XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5hc3NldHMucmVtb3ZlKHVybCk7ICAgICAgICAgICAgICAgLy8g5LuO57yT5a2Y5Lit5riF6ZmkXG4gICAgICAgIGxldCBhc3NldCA9IGNjLmFzc2V0TWFuYWdlci5hc3NldHMuZ2V0KHVybCk7ICAgICAgLy8g6ZSA5q+B6K+l6LWE5rqQXG4gICAgICAgIGFzc2V0ICYmIGFzc2V0LmRlc3Ryb3koKTtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmRlcGVuZFV0aWxbJ3JlbW92ZSddKHVybCk7ICAgICAgICAvLyDku47kvp3otZbkuK3liKDpmaRcbiAgICB9XG5cbiAgICAvKiog5Li05pe25re75Yqg6LWE5rqQ6K6h5pWwICovXG4gICAgcHJpdmF0ZSBfYWRkVG1wQXNzZXRzRGVwZW5kcyhjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkge1xuICAgICAgICBsZXQgZGVwcyA9IChjYy5hc3NldE1hbmFnZXIuZGVwZW5kVXRpbC5nZXREZXBzUmVjdXJzaXZlbHkoaXRlbS51dWlkKSB8fCBbXSk7XG4gICAgICAgIGRlcHMucHVzaChpdGVtLnV1aWQpO1xuICAgICAgICB0aGlzLmFkZEFzc2V0c0RlcGVuZHMoZGVwcyk7XG5cbiAgICAgICAgdGhpcy5fdG1wQXNzZXRzRGVwZW5kcy5wdXNoKC4uLmRlcHMpO1xuICAgIH1cbiAgICAvKiog5Yig6Zmk5Li05pe25re75Yqg55qE6K6h5pWwICovXG4gICAgcHJpdmF0ZSBfY2xlYXJUbXBBc3NldHNEZXBlbmRzKCkge1xuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5fdG1wQXNzZXRzRGVwZW5kcykge1xuICAgICAgICAgICAgaWYoIXRoaXMuX2Fzc2V0c1JlZmVyZW5jZVtzXSB8fCB0aGlzLl9hc3NldHNSZWZlcmVuY2Vbc10gPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpcy5fYXNzZXRzUmVmZXJlbmNlW3NdIC0tO1xuICAgICAgICAgICAgaWYodGhpcy5fYXNzZXRzUmVmZXJlbmNlW3NdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2Fzc2V0c1JlZmVyZW5jZVtzXTsgICAgICAgICAgIC8vIOi/memHjOS4jea4heeQhue8k+WtmFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RtcEFzc2V0c0RlcGVuZHMgPSBbXTtcbiAgICB9XG5cbiAgICAvKiog5qOA5p+l5piv5ZCm5pivYnVpbHRpbuWGheeahOi1hOa6kCAqL1xuICAgIHByaXZhdGUgX2NoZWNrSXNCdWlsdGluQXNzZXRzKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBhc3NldCA9IGNjLmFzc2V0TWFuYWdlci5hc3NldHMuZ2V0KHVybCk7XG4gICAgICAgIGlmKGFzc2V0ICYmIGFzc2V0WydfbmFtZSddLmluZGV4T2YoXCJidWlsdGluXCIpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIOiuoeeul+W9k+WJjee6ueeQhuaVsOmHj+WSjOe8k+WtmCAqL1xuICAgIHB1YmxpYyBjb21wdXRlVGV4dHVyZUNhY2hlKCkge1xuICAgICAgICBsZXQgY2FjaGUgPSBjYy5hc3NldE1hbmFnZXIuYXNzZXRzO1xuICAgICAgICBsZXQgdG90YWxUZXh0dXJlU2l6ZSA9IDA7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGNhY2hlLmZvckVhY2goKGl0ZW06IGNjLkFzc2V0LCBrZXk6IHN0cmluZykgPT4geyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHR5cGUgPSAoaXRlbSAmJiBpdGVtWydfX2NsYXNzbmFtZV9fJ10pID8gaXRlbVsnX19jbGFzc25hbWVfXyddIDogJyc7XG4gICAgICAgICAgICBpZih0eXBlID09ICdjYy5UZXh0dXJlMkQnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBpdGVtIGFzIGNjLlRleHR1cmUyRDtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZVNpemUgPSB0ZXh0dXJlLndpZHRoICogdGV4dHVyZS5oZWlnaHQgKiAoKHRleHR1cmVbJ19uYXRpdmUnXSA9PT0gJy5qcGcnID8gMyA6IDQpIC8gMTAyNCAvIDEwMjQpO1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdG90YWxUZXh0dXJlU2l6ZSArPSB0ZXh0dXJlU2l6ZTtcbiAgICAgICAgICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBg57yT5a2YIFvnurnnkIbmgLvmlbA6JHtjb3VudH1dW+e6ueeQhue8k+WtmDoke3RvdGFsVGV4dHVyZVNpemUudG9GaXhlZCgyKSArICdNJ31dYDtcbiAgICB9XG5cbn0iXX0=