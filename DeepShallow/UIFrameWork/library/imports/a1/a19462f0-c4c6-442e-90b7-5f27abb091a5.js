"use strict";
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
 * ????????????, ????????????Form
 * ???????????????????????????
 * ?????????????????????????????????????????????, ??????????????????????????????,
 * ???????????????????????????cc.loader???????????????, ??????????????????????????????
 *
 * ??????????????????
 * 1, ??????  ?????????prefab???, cocos????????????????????????????????????, ???????????????????????????
 * 2, ??????  ??????????????????????????????????????????, ???????????????destoryForm??????
 *
 * ??????????????????
 * ????????? ??????prefab, ????????? ?????????prefab ?????? node
 * ???????????????????????? ???????????????, ??????node, ??????prefab
 */
var ResMgr = /** @class */ (function () {
    function ResMgr() {
        /**
         * ???????????????????????????, ??????form??????????????????
         */
        this._prefabDepends = cc.js.createMap();
        this._dynamicTags = cc.js.createMap();
        this._tmpAssetsDepends = []; // ????????????
        this._assetsReference = cc.js.createMap(); // ??????????????????
        this._prefabs = cc.js.createMap(); // ???????????????
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
    /** ???????????? */
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
    /** ???????????? */
    ResMgr.prototype.destoryFormPrefab = function (fid) {
        if (this._prefabs[fid]) {
            this._prefabs[fid].destroy();
            this._prefabs[fid] = null;
            delete this._prefabs[fid];
        }
        // ?????????????????????
        this._destoryResWithReference(this._prefabDepends[fid]);
        // ????????????
        this._prefabDepends[fid] = null;
        delete this._prefabDepends[fid];
    };
    /** ??????????????????, ??????tag??????????????????, ???????????? */
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
    /** ??????????????????  */
    ResMgr.prototype.destoryDynamicRes = function (tag) {
        if (!this._dynamicTags[tag]) { // ??????
            return false;
        }
        this._destoryResWithReference(this._dynamicTags[tag]);
        this._dynamicTags[tag] = null;
        delete this._dynamicTags[tag];
        return true;
    };
    /** ????????????????????????????????? */
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
    /** ???????????????????????? */
    ResMgr.prototype._destoryResWithReference = function (deps) {
        var _toDeletes = this.removeAssetsDepends(deps);
        this._destoryAssets(_toDeletes);
        return true;
    };
    /** ?????????????????? */
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
    /** ?????????????????? */
    ResMgr.prototype.removeAssetsDepends = function (deps) {
        var _deletes = [];
        for (var _i = 0, deps_2 = deps; _i < deps_2.length; _i++) {
            var s = deps_2[_i];
            if (!this._assetsReference[s] || this._assetsReference[s] === 0)
                continue;
            this._assetsReference[s]--;
            if (this._assetsReference[s] === 0) {
                _deletes.push(s);
                delete this._assetsReference[s]; // ??????key;
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
    /** ???????????? */
    ResMgr.prototype._destoryAsset = function (url) {
        if (this._checkIsBuiltinAssets(url))
            return;
        cc.assetManager.assets.remove(url); // ??????????????????
        var asset = cc.assetManager.assets.get(url); // ???????????????
        asset && asset.destroy();
        cc.assetManager.dependUtil['remove'](url); // ??????????????????
    };
    /** ???????????????????????? */
    ResMgr.prototype._addTmpAssetsDepends = function (completedCount, totalCount, item) {
        var _a;
        var deps = (cc.assetManager.dependUtil.getDepsRecursively(item.uuid) || []);
        deps.push(item.uuid);
        this.addAssetsDepends(deps);
        (_a = this._tmpAssetsDepends).push.apply(_a, deps);
    };
    /** ??????????????????????????? */
    ResMgr.prototype._clearTmpAssetsDepends = function () {
        for (var _i = 0, _a = this._tmpAssetsDepends; _i < _a.length; _i++) {
            var s = _a[_i];
            if (!this._assetsReference[s] || this._assetsReference[s] === 0)
                continue;
            this._assetsReference[s]--;
            if (this._assetsReference[s] === 0) {
                delete this._assetsReference[s]; // ?????????????????????
            }
        }
        this._tmpAssetsDepends = [];
    };
    /** ???????????????builtin???????????? */
    ResMgr.prototype._checkIsBuiltinAssets = function (url) {
        var asset = cc.assetManager.assets.get(url);
        if (asset && asset['_name'].indexOf("builtin") != -1) {
            return true;
        }
        return false;
    };
    /** ????????????????????????????????? */
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