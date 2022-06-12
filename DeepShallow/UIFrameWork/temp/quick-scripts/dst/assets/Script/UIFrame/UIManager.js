
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f18581vC/JBkoXNDtnFIDo4', 'UIManager');
// Script/UIFrame/UIManager.ts

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
var UIBase_1 = require("./UIBase");
var SysDefine_1 = require("./config/SysDefine");
var ResMgr_1 = require("./ResMgr");
var ModalMgr_1 = require("./ModalMgr");
var AdapterMgr_1 = require("./AdapterMgr");
var Scene_1 = require("../Scene/Scene");
var Struct_1 = require("./Struct");
var EventCenter_1 = require("./EventCenter");
var EventType_1 = require("./EventType");
var LRUCache_1 = require("../Common/Utils/LRUCache");
/**
 * @author honmono
 */
var UIManager = /** @class */ (function () {
    function UIManager() {
        this._UIROOT = null; // UIROOT
        this._ndScreen = null; // 全屏显示的UI 挂载结点
        this._ndFixed = null; // 固定显示的UI
        this._ndPopUp = null; // 弹出窗口
        this._ndTips = null; // 独立窗体
        this._windows = []; // 存储弹出的窗体
        this._allForms = cc.js.createMap(); // 所有已经挂载的窗体, 可能没有显示
        this._showingForms = cc.js.createMap(); // 正在显示的窗体
        this._tipsForms = cc.js.createMap(); // 独立窗体 独立于其他窗体, 不受其他窗体的影响
        this._loadingForm = cc.js.createMap(); // 正在加载的form
        this._LRUCache = new LRUCache_1.LRUCache(3); // LRU cache
    }
    UIManager.getInstance = function () {
        var _this = this;
        if (this.instance == null) {
            this.instance = new UIManager();
            var canvas = cc.director.getScene().getChildByName("Canvas");
            var scene = canvas.getChildByName(SysDefine_1.SysDefine.SYS_SCENE_NODE);
            if (!scene) {
                scene = new cc.Node(SysDefine_1.SysDefine.SYS_SCENE_NODE);
                scene.addComponent(Scene_1.default);
                scene.parent = canvas;
            }
            var UIROOT = this.instance._UIROOT = new cc.Node(SysDefine_1.SysDefine.SYS_UIROOT_NODE);
            scene.addChild(UIROOT);
            UIROOT.addChild(this.instance._ndScreen = new cc.Node(SysDefine_1.SysDefine.SYS_SCREEN_NODE));
            UIROOT.addChild(this.instance._ndFixed = new cc.Node(SysDefine_1.SysDefine.SYS_FIXED_NODE));
            UIROOT.addChild(this.instance._ndPopUp = new cc.Node(SysDefine_1.SysDefine.SYS_POPUP_NODE));
            UIROOT.addChild(this.instance._ndTips = new cc.Node(SysDefine_1.SysDefine.SYS_TOPTIPS_NODE));
            cc.director.once(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, function () {
                _this.instance = null;
            });
        }
        return this.instance;
    };
    /** 预加载UIForm */
    UIManager.prototype.loadUIForm = function (prefabPath) {
        return __awaiter(this, void 0, void 0, function () {
            var uiBase;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._loadForm(prefabPath)];
                    case 1:
                        uiBase = _a.sent();
                        if (!uiBase) {
                            console.warn(uiBase + "\u6CA1\u6709\u88AB\u6210\u529F\u52A0\u8F7D");
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, uiBase];
                }
            });
        });
    };
    /**
     * 加载显示一个UIForm
     * @param prefabPath
     * @param params
     * @param formData
     * @returns
     */
    UIManager.prototype.openForm = function (prefabPath, params, formData) {
        return __awaiter(this, void 0, void 0, function () {
            var com, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!prefabPath || prefabPath.length <= 0) {
                            cc.warn(prefabPath + ", \u53C2\u6570\u9519\u8BEF");
                            return [2 /*return*/];
                        }
                        if (this.checkFormShowing(prefabPath)) {
                            cc.warn(prefabPath + ", \u7A97\u4F53\u6B63\u5728\u663E\u793A\u4E2D");
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this._loadForm(prefabPath)];
                    case 1:
                        com = _b.sent();
                        if (!com) {
                            cc.warn(prefabPath + " \u52A0\u8F7D\u5931\u8D25\u4E86!");
                            return [2 /*return*/, null];
                        }
                        // 初始化窗体名称
                        com.fid = prefabPath;
                        com.formData = formData;
                        _a = com.formType;
                        switch (_a) {
                            case SysDefine_1.FormType.Screen: return [3 /*break*/, 2];
                            case SysDefine_1.FormType.Fixed: return [3 /*break*/, 4];
                            case SysDefine_1.FormType.Window: return [3 /*break*/, 6];
                            case SysDefine_1.FormType.Tips: return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 10];
                    case 2: return [4 /*yield*/, this.enterToScreen(com.fid, params)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 4: return [4 /*yield*/, this.enterToFixed(com.fid, params)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 6: return [4 /*yield*/, this.enterToPopup(com.fid, params)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 8: // 独立显示
                    return [4 /*yield*/, this.enterToTips(com.fid, params)];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        // 如果这个窗体在lru中存在, 那么立即删除它
                        if (com.closeType === Struct_1.ECloseType.LRU) {
                            this._LRUCache.remove(com.fid);
                        }
                        return [2 /*return*/, com];
                }
            });
        });
    };
    /**
     * 重要方法 关闭一个UIForm
     * @param prefabPath
     */
    UIManager.prototype.closeForm = function (prefabPath) {
        return __awaiter(this, void 0, void 0, function () {
            var com, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!prefabPath || prefabPath.length <= 0) {
                            cc.warn(prefabPath + ", \u53C2\u6570\u9519\u8BEF");
                            return [2 /*return*/];
                        }
                        ;
                        com = this._allForms[prefabPath];
                        if (!com)
                            return [2 /*return*/, false];
                        _a = com.formType;
                        switch (_a) {
                            case SysDefine_1.FormType.Screen: return [3 /*break*/, 1];
                            case SysDefine_1.FormType.Fixed: return [3 /*break*/, 3];
                            case SysDefine_1.FormType.Window: return [3 /*break*/, 5];
                            case SysDefine_1.FormType.Tips: return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 9];
                    case 1: return [4 /*yield*/, this.exitToScreen(prefabPath)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 3: // 普通模式显示
                    return [4 /*yield*/, this.exitToFixed(prefabPath)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this.exitToPopup(prefabPath)];
                    case 6:
                        _b.sent();
                        EventCenter_1.EventCenter.emit(EventType_1.EventType.WindowClosed, prefabPath);
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.exitToTips(prefabPath)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        EventCenter_1.EventCenter.emit(EventType_1.EventType.FormClosed, prefabPath);
                        if (com.formData) {
                            com.formData.onClose && com.formData.onClose();
                        }
                        // 根据closeType 处理
                        switch (com.closeType) {
                            case Struct_1.ECloseType.CloseAndDestory:
                                this.destoryForm(com);
                                break;
                            case Struct_1.ECloseType.LRU:
                                this.putLRUCache(com);
                                break;
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * 从窗口缓存中加载(如果没有就会在load加载), 并挂载到结点上
     */
    UIManager.prototype._loadForm = function (prefabPath) {
        return __awaiter(this, void 0, Promise, function () {
            var com;
            var _this = this;
            return __generator(this, function (_a) {
                com = this._allForms[prefabPath];
                if (com)
                    return [2 /*return*/, com];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._loadingForm[prefabPath]) {
                            _this._loadingForm[prefabPath].push(resolve);
                            return;
                        }
                        _this._loadingForm[prefabPath] = [resolve];
                        _this._doLoadUIForm(prefabPath).then(function (com) {
                            for (var _i = 0, _a = _this._loadingForm[prefabPath]; _i < _a.length; _i++) {
                                var func = _a[_i];
                                func(com);
                            }
                            _this._loadingForm[prefabPath] = null;
                            delete _this._loadingForm[prefabPath];
                        });
                    })];
            });
        });
    };
    /**
     * @param prefabPath
     */
    UIManager.prototype._doLoadUIForm = function (prefabPath) {
        return __awaiter(this, void 0, void 0, function () {
            var prefab, node, com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ResMgr_1.default.inst.loadFormPrefab(prefabPath)];
                    case 1:
                        prefab = _a.sent();
                        node = cc.instantiate(prefab);
                        com = node.getComponent(UIBase_1.default);
                        if (!com) {
                            cc.warn(prefabPath + " \u7ED3\u70B9\u6CA1\u6709\u7ED1\u5B9AUIBase");
                            return [2 /*return*/, null];
                        }
                        node.active = false; // 避免baseCom调用了onload方法
                        switch (com.formType) {
                            case SysDefine_1.FormType.Screen:
                                this._ndScreen.addChild(node);
                                break;
                            case SysDefine_1.FormType.Fixed:
                                this._ndFixed.addChild(node);
                                break;
                            case SysDefine_1.FormType.Window:
                                this._ndPopUp.addChild(node);
                                break;
                            case SysDefine_1.FormType.Tips:
                                this._ndTips.addChild(node);
                                break;
                        }
                        this._allForms[prefabPath] = com;
                        return [2 /*return*/, com];
                }
            });
        });
    };
    /** 添加到screen中 */
    UIManager.prototype.enterToScreen = function (fid, params) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, key, com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        for (key in this._showingForms) {
                            arr.push(this._showingForms[key].closeSelf());
                        }
                        return [4 /*yield*/, Promise.all(arr)];
                    case 1:
                        _a.sent();
                        com = this._allForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        this._showingForms[fid] = com;
                        AdapterMgr_1.default.inst.adapteByType(AdapterMgr_1.AdapterType.StretchHeight | AdapterMgr_1.AdapterType.StretchWidth, com.node);
                        return [4 /*yield*/, com._preInit(params)];
                    case 2:
                        _a.sent();
                        com.onShow(params);
                        return [4 /*yield*/, this.showEffect(com)];
                    case 3:
                        _a.sent();
                        com.onAfterShow(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 添加到Fixed中 */
    UIManager.prototype.enterToFixed = function (fid, params) {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = this._allForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        return [4 /*yield*/, com._preInit(params)];
                    case 1:
                        _a.sent();
                        com.onShow(params);
                        this._showingForms[fid] = com;
                        return [4 /*yield*/, this.showEffect(com)];
                    case 2:
                        _a.sent();
                        com.onAfterShow(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 添加到popup中 */
    UIManager.prototype.enterToPopup = function (fid, params) {
        return __awaiter(this, void 0, void 0, function () {
            var com, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = this._allForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        return [4 /*yield*/, com._preInit(params)];
                    case 1:
                        _a.sent();
                        this._windows.push(com);
                        for (i = 0; i < this._windows.length; i++) {
                            this._windows[i].node.zIndex = i + 1;
                        }
                        com.onShow(params);
                        this._showingForms[fid] = com;
                        ModalMgr_1.default.inst.checkModalWindow(this._windows);
                        return [4 /*yield*/, this.showEffect(com)];
                    case 2:
                        _a.sent();
                        com.onAfterShow(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 加载到tips中 */
    UIManager.prototype.enterToTips = function (fid, params) {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = this._allForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        return [4 /*yield*/, com._preInit(params)];
                    case 1:
                        _a.sent();
                        this._tipsForms[fid] = com;
                        com.onShow(params);
                        return [4 /*yield*/, this.showEffect(com)];
                    case 2:
                        _a.sent();
                        com.onAfterShow(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.exitToScreen = function (fid) {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = this._showingForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        com.onHide();
                        return [4 /*yield*/, this.hideEffect(com)];
                    case 1:
                        _a.sent();
                        com.onAfterHide();
                        this._showingForms[fid] = null;
                        delete this._showingForms[fid];
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.exitToFixed = function (fid) {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = this._allForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        com.onHide();
                        return [4 /*yield*/, this.hideEffect(com)];
                    case 1:
                        _a.sent();
                        com.onAfterHide();
                        this._showingForms[fid] = null;
                        delete this._showingForms[fid];
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.exitToPopup = function (fid) {
        return __awaiter(this, void 0, void 0, function () {
            var com, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._windows.length <= 0)
                            return [2 /*return*/];
                        com = null;
                        for (i = this._windows.length - 1; i >= 0; i--) {
                            if (this._windows[i].fid === fid) {
                                com = this._windows[i];
                                this._windows.splice(i, 1);
                            }
                        }
                        if (!com)
                            return [2 /*return*/];
                        com.onHide();
                        ModalMgr_1.default.inst.checkModalWindow(this._windows);
                        return [4 /*yield*/, this.hideEffect(com)];
                    case 1:
                        _a.sent();
                        com.onAfterHide();
                        this._showingForms[fid] = null;
                        delete this._showingForms[fid];
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.exitToTips = function (fid) {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = this._allForms[fid];
                        if (!com)
                            return [2 /*return*/];
                        com.onHide();
                        return [4 /*yield*/, this.hideEffect(com)];
                    case 1:
                        _a.sent();
                        com.onAfterHide();
                        this._tipsForms[fid] = null;
                        delete this._tipsForms[fid];
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.showEffect = function (baseUI) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUI.node.active = true;
                        return [4 /*yield*/, baseUI.showEffect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.hideEffect = function (baseUI) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, baseUI.hideEffect()];
                    case 1:
                        _a.sent();
                        baseUI.node.active = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 销毁 */
    UIManager.prototype.destoryForm = function (com) {
        // 销毁动态加载的资源
        ResMgr_1.default.inst.destoryDynamicRes(com.fid);
        // 销毁prefab以及依赖的资源
        ResMgr_1.default.inst.destoryFormPrefab(com.fid);
        // 销毁node
        com.node.destroy();
        // 从allmap中删除
        this._allForms[com.fid] = null;
        delete this._allForms[com.fid];
    };
    /** LRU缓存控制 */
    UIManager.prototype.putLRUCache = function (com) {
        this._LRUCache.put(com.fid);
        if (!this._LRUCache.needDelete())
            return;
        var deleteFid = this._LRUCache.deleteLastNode();
        if (deleteFid) {
            CC_DEBUG && console.log('close form id:', deleteFid, this._LRUCache.toString());
            var com_1 = this.getForm(deleteFid);
            if (!com_1 || !com_1.node)
                return;
            com_1 && this.destoryForm(com_1);
        }
    };
    /** 窗体是否正在显示 */
    UIManager.prototype.checkFormShowing = function (fid) {
        var com = this._allForms[fid];
        if (!com)
            return false;
        return com.node.active;
    };
    /** 窗体是否正在加载 */
    UIManager.prototype.checkFormLoading = function (prefabPath) {
        var com = this._loadingForm[prefabPath];
        return !!com;
    };
    /** 获得Component */
    UIManager.prototype.getForm = function (fId) {
        return this._allForms[fId];
    };
    UIManager.prototype.getUIROOT = function () {
        return this._UIROOT;
    };
    UIManager.instance = null; // 单例
    return UIManager;
}());
exports.default = UIManager;
if (CC_DEBUG) {
    window['UIManager'] = UIManager;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9VSU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsZ0RBQXlEO0FBQ3pELG1DQUE4QjtBQUM5Qix1Q0FBa0M7QUFDbEMsMkNBQXVEO0FBQ3ZELHdDQUFtQztBQUVuQyxtQ0FBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUN4QyxxREFBb0Q7QUFFcEQ7O0dBRUc7QUFDSDtJQUFBO1FBQ1ksWUFBTyxHQUFZLElBQUksQ0FBQyxDQUFJLFNBQVM7UUFDckMsY0FBUyxHQUFZLElBQUksQ0FBQyxDQUFFLGVBQWU7UUFDM0MsYUFBUSxHQUFhLElBQUksQ0FBQyxDQUFFLFVBQVU7UUFDdEMsYUFBUSxHQUFhLElBQUksQ0FBQyxDQUFFLE9BQU87UUFDbkMsWUFBTyxHQUFjLElBQUksQ0FBQyxDQUFFLE9BQU87UUFFbkMsYUFBUSxHQUFxRCxFQUFFLENBQUMsQ0FBbUIsVUFBVTtRQUM3RixjQUFTLEdBQW9ELEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBSSxvQkFBb0I7UUFDdkcsa0JBQWEsR0FBZ0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFJLFVBQVU7UUFDN0YsZUFBVSxHQUFtRCxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUksMEJBQTBCO1FBQzdHLGlCQUFZLEdBQWlELEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBSSxZQUFZO1FBQy9GLGNBQVMsR0FBYSxJQUFJLG1CQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBNkMsWUFBWTtJQTBXM0csQ0FBQztJQXZXaUIscUJBQVcsR0FBekI7UUFBQSxpQkFzQkM7UUFyQkcsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFB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SUFBRyxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUcsQ0FBQyxJQUFJO2dCQUFFLE9BQVE7WUFDOUIsS0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBRyxDQUFDLENBQUM7U0FDaEM7SUFFTCxDQUFDO0lBRUQsZUFBZTtJQUNSLG9DQUFnQixHQUF2QixVQUF3QixHQUFXO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO0lBQ1Isb0NBQWdCLEdBQXZCLFVBQXdCLFVBQWtCO1FBQ3RDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQkFBa0I7SUFDWCwyQkFBTyxHQUFkLFVBQWUsR0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUF2V2Msa0JBQVEsR0FBYyxJQUFJLENBQUMsQ0FBaUQsS0FBSztJQXdXcEcsZ0JBQUM7Q0F0WEQsQUFzWEMsSUFBQTtrQkF0WG9CLFNBQVM7QUF3WDlCLElBQUcsUUFBUSxFQUFFO0lBQ1QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztDQUNuQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUJhc2UgZnJvbSBcIi4vVUlCYXNlXCI7XG5pbXBvcnQgeyBTeXNEZWZpbmUsIEZvcm1UeXBlIH0gZnJvbSBcIi4vY29uZmlnL1N5c0RlZmluZVwiO1xuaW1wb3J0IFJlc01nciBmcm9tIFwiLi9SZXNNZ3JcIjtcbmltcG9ydCBNb2RhbE1nciBmcm9tIFwiLi9Nb2RhbE1nclwiO1xuaW1wb3J0IEFkYXB0ZXJNZ3IsIHsgQWRhcHRlclR5cGUgfSBmcm9tIFwiLi9BZGFwdGVyTWdyXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4uL1NjZW5lL1NjZW5lXCI7XG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gXCIuL1VJRm9ybVwiO1xuaW1wb3J0IHsgRUNsb3NlVHlwZSwgSUZvcm1EYXRhIH0gZnJvbSBcIi4vU3RydWN0XCI7XG5pbXBvcnQgeyBFdmVudENlbnRlciB9IGZyb20gXCIuL0V2ZW50Q2VudGVyXCI7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi9FdmVudFR5cGVcIjtcbmltcG9ydCB7IExSVUNhY2hlIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlscy9MUlVDYWNoZVwiO1xuXG4vKipcbiAqIEBhdXRob3IgaG9ubW9ub1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgeyAgICBcbiAgICBwcml2YXRlIF9VSVJPT1Q6IGNjLk5vZGUgPSBudWxsOyAgICAvLyBVSVJPT1RcbiAgICBwcml2YXRlIF9uZFNjcmVlbjogY2MuTm9kZSA9IG51bGw7ICAvLyDlhajlsY/mmL7npLrnmoRVSSDmjILovb3nu5PngrlcbiAgICBwcml2YXRlIF9uZEZpeGVkOiBjYy5Ob2RlICA9IG51bGw7ICAvLyDlm7rlrprmmL7npLrnmoRVSVxuICAgIHByaXZhdGUgX25kUG9wVXA6IGNjLk5vZGUgID0gbnVsbDsgIC8vIOW8ueWHuueql+WPo1xuICAgIHByaXZhdGUgX25kVGlwczogY2MuTm9kZSAgID0gbnVsbDsgIC8vIOeLrOeri+eql+S9k1xuXG4gICAgcHJpdmF0ZSBfd2luZG93czogVUlXaW5kb3dbXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gW107ICAgICAgICAgICAgICAgICAgIC8vIOWtmOWCqOW8ueWHuueahOeql+S9k1xuICAgIHByaXZhdGUgX2FsbEZvcm1zOiB7W2tleTogc3RyaW5nXTogVUlCYXNlfSAgICAgICAgICAgICAgICAgICAgICAgICA9IGNjLmpzLmNyZWF0ZU1hcCgpOyAgICAvLyDmiYDmnInlt7Lnu4/mjILovb3nmoTnqpfkvZMsIOWPr+iDveayoeacieaYvuekulxuICAgIHByaXZhdGUgX3Nob3dpbmdGb3Jtczoge1trZXk6IHN0cmluZ106IFVJQmFzZX0gICAgICAgICAgICAgICAgICAgICA9IGNjLmpzLmNyZWF0ZU1hcCgpOyAgICAvLyDmraPlnKjmmL7npLrnmoTnqpfkvZNcbiAgICBwcml2YXRlIF90aXBzRm9ybXM6IHtba2V5OiBzdHJpbmddOiBVSUJhc2V9ICAgICAgICAgICAgICAgICAgICAgICAgPSBjYy5qcy5jcmVhdGVNYXAoKTsgICAgLy8g54us56uL56qX5L2TIOeLrOeri+S6juWFtuS7lueql+S9kywg5LiN5Y+X5YW25LuW56qX5L2T55qE5b2x5ZONXG4gICAgcHJpdmF0ZSBfbG9hZGluZ0Zvcm06IHtba2V5OiBzdHJpbmddOiAoKHZhbHVlOiBVSUJhc2UpID0+IHZvaWQpW119ID0gY2MuanMuY3JlYXRlTWFwKCk7ICAgIC8vIOato+WcqOWKoOi9veeahGZvcm1cbiAgICBwcml2YXRlIF9MUlVDYWNoZTogTFJVQ2FjaGUgPSBuZXcgTFJVQ2FjaGUoMyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTFJVIGNhY2hlXG4gICAgXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlciA9IG51bGw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWNleS+i1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVUlNYW5hZ2VyIHtcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVJTWFuYWdlcigpO1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgICBsZXQgc2NlbmUgPSBjYW52YXMuZ2V0Q2hpbGRCeU5hbWUoU3lzRGVmaW5lLlNZU19TQ0VORV9OT0RFKTtcbiAgICAgICAgICAgIGlmKCFzY2VuZSkge1xuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IGNjLk5vZGUoU3lzRGVmaW5lLlNZU19TQ0VORV9OT0RFKTtcbiAgICAgICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoU2NlbmUpO1xuICAgICAgICAgICAgICAgIHNjZW5lLnBhcmVudCA9IGNhbnZhcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBVSVJPT1QgPSB0aGlzLmluc3RhbmNlLl9VSVJPT1QgPSBuZXcgY2MuTm9kZShTeXNEZWZpbmUuU1lTX1VJUk9PVF9OT0RFKTtcbiAgICAgICAgICAgIHNjZW5lLmFkZENoaWxkKFVJUk9PVCk7XG5cbiAgICAgICAgICAgIFVJUk9PVC5hZGRDaGlsZCh0aGlzLmluc3RhbmNlLl9uZFNjcmVlbiA9IG5ldyBjYy5Ob2RlKFN5c0RlZmluZS5TWVNfU0NSRUVOX05PREUpKTtcbiAgICAgICAgICAgIFVJUk9PVC5hZGRDaGlsZCh0aGlzLmluc3RhbmNlLl9uZEZpeGVkID0gbmV3IGNjLk5vZGUoU3lzRGVmaW5lLlNZU19GSVhFRF9OT0RFKSk7XG4gICAgICAgICAgICBVSVJPT1QuYWRkQ2hpbGQodGhpcy5pbnN0YW5jZS5fbmRQb3BVcCA9IG5ldyBjYy5Ob2RlKFN5c0RlZmluZS5TWVNfUE9QVVBfTk9ERSkpO1xuICAgICAgICAgICAgVUlST09ULmFkZENoaWxkKHRoaXMuaW5zdGFuY2UuX25kVGlwcyA9IG5ldyBjYy5Ob2RlKFN5c0RlZmluZS5TWVNfVE9QVElQU19OT0RFKSk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9TQ0VORV9MQVVOQ0gsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKiDpooTliqDovb1VSUZvcm0gKi9cbiAgICBwdWJsaWMgYXN5bmMgbG9hZFVJRm9ybShwcmVmYWJQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHVpQmFzZSA9IGF3YWl0IHRoaXMuX2xvYWRGb3JtKHByZWZhYlBhdGgpO1xuICAgICAgICBpZighdWlCYXNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dWlCYXNlfeayoeacieiiq+aIkOWKn+WKoOi9vWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVpQmFzZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICog5Yqg6L295pi+56S65LiA5LiqVUlGb3JtXG4gICAgICogQHBhcmFtIHByZWZhYlBhdGggXG4gICAgICogQHBhcmFtIHBhcmFtcyBcbiAgICAgKiBAcGFyYW0gZm9ybURhdGEgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIG9wZW5Gb3JtKHByZWZhYlBhdGg6IHN0cmluZywgcGFyYW1zPzogYW55LCBmb3JtRGF0YT86IElGb3JtRGF0YSkge1xuICAgICAgICBpZighcHJlZmFiUGF0aCB8fCBwcmVmYWJQYXRoLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjYy53YXJuKGAke3ByZWZhYlBhdGh9LCDlj4LmlbDplJnor69gKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5jaGVja0Zvcm1TaG93aW5nKHByZWZhYlBhdGgpKSB7XG4gICAgICAgICAgICBjYy53YXJuKGAke3ByZWZhYlBhdGh9LCDnqpfkvZPmraPlnKjmmL7npLrkuK1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb20gPSBhd2FpdCB0aGlzLl9sb2FkRm9ybShwcmVmYWJQYXRoKTtcbiAgICAgICAgaWYoIWNvbSkge1xuICAgICAgICAgICAgY2Mud2FybihgJHtwcmVmYWJQYXRofSDliqDovb3lpLHotKXkuoYhYCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDliJ3lp4vljJbnqpfkvZPlkI3np7BcbiAgICAgICAgY29tLmZpZCA9IHByZWZhYlBhdGg7XG4gICAgICAgIGNvbS5mb3JtRGF0YSA9IGZvcm1EYXRhO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGNvbS5mb3JtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGb3JtVHlwZS5TY3JlZW46XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnRlclRvU2NyZWVuKGNvbS5maWQsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuRml4ZWQ6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnRlclRvRml4ZWQoY29tLmZpZCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGb3JtVHlwZS5XaW5kb3c6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnRlclRvUG9wdXAoY29tLmZpZCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGb3JtVHlwZS5UaXBzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDni6znq4vmmL7npLpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVudGVyVG9UaXBzKGNvbS5maWQsIHBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5aaC5p6c6L+Z5Liq56qX5L2T5ZyobHJ15Lit5a2Y5ZyoLCDpgqPkuYjnq4vljbPliKDpmaTlroNcbiAgICAgICAgaWYoY29tLmNsb3NlVHlwZSA9PT0gRUNsb3NlVHlwZS5MUlUpIHtcbiAgICAgICAgICAgIHRoaXMuX0xSVUNhY2hlLnJlbW92ZShjb20uZmlkKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gY29tO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog6YeN6KaB5pa55rOVIOWFs+mXreS4gOS4qlVJRm9ybVxuICAgICAqIEBwYXJhbSBwcmVmYWJQYXRoIFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjbG9zZUZvcm0ocHJlZmFiUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGlmKCFwcmVmYWJQYXRoIHx8IHByZWZhYlBhdGgubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGNjLndhcm4oYCR7cHJlZmFiUGF0aH0sIOWPguaVsOmUmeivr2ApO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNvbSA9IHRoaXMuX2FsbEZvcm1zW3ByZWZhYlBhdGhdO1xuICAgICAgICBpZighY29tKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goY29tLmZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLlNjcmVlbjpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4aXRUb1NjcmVlbihwcmVmYWJQYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGb3JtVHlwZS5GaXhlZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaZrumAmuaooeW8j+aYvuekulxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXhpdFRvRml4ZWQocHJlZmFiUGF0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuV2luZG93OlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXhpdFRvUG9wdXAocHJlZmFiUGF0aCk7XG4gICAgICAgICAgICAgICAgRXZlbnRDZW50ZXIuZW1pdChFdmVudFR5cGUuV2luZG93Q2xvc2VkLCBwcmVmYWJQYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGb3JtVHlwZS5UaXBzOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXhpdFRvVGlwcyhwcmVmYWJQYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRDZW50ZXIuZW1pdChFdmVudFR5cGUuRm9ybUNsb3NlZCwgcHJlZmFiUGF0aCk7XG5cbiAgICAgICAgaWYoY29tLmZvcm1EYXRhKSB7XG4gICAgICAgICAgICBjb20uZm9ybURhdGEub25DbG9zZSAmJiBjb20uZm9ybURhdGEub25DbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2uY2xvc2VUeXBlIOWkhOeQhlxuICAgICAgICBzd2l0Y2goY29tLmNsb3NlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBFQ2xvc2VUeXBlLkNsb3NlQW5kRGVzdG9yeTpcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlGb3JtKGNvbSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRUNsb3NlVHlwZS5MUlU6XG4gICAgICAgICAgICAgICAgdGhpcy5wdXRMUlVDYWNoZShjb20pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO56qX5Y+j57yT5a2Y5Lit5Yqg6L29KOWmguaenOayoeacieWwseS8muWcqGxvYWTliqDovb0pLCDlubbmjILovb3liLDnu5PngrnkuIpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkRm9ybShwcmVmYWJQYXRoOiBzdHJpbmcpOiBQcm9taXNlPFVJQmFzZT4ge1xuICAgICAgICBsZXQgY29tID0gdGhpcy5fYWxsRm9ybXNbcHJlZmFiUGF0aF07XG4gICAgICAgIGlmKGNvbSkgcmV0dXJuIGNvbTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2xvYWRpbmdGb3JtW3ByZWZhYlBhdGhdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGluZ0Zvcm1bcHJlZmFiUGF0aF0ucHVzaChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ0Zvcm1bcHJlZmFiUGF0aF0gPSBbcmVzb2x2ZV07XG4gICAgICAgICAgICB0aGlzLl9kb0xvYWRVSUZvcm0ocHJlZmFiUGF0aCkudGhlbigoY29tOiBVSUJhc2UpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgZnVuYyBvZiB0aGlzLl9sb2FkaW5nRm9ybVtwcmVmYWJQYXRoXSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jKGNvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdGb3JtW3ByZWZhYlBhdGhdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbG9hZGluZ0Zvcm1bcHJlZmFiUGF0aF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcHJlZmFiUGF0aCBcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIF9kb0xvYWRVSUZvcm0ocHJlZmFiUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwcmVmYWIgPSBhd2FpdCBSZXNNZ3IuaW5zdC5sb2FkRm9ybVByZWZhYihwcmVmYWJQYXRoKTtcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBsZXQgY29tID0gbm9kZS5nZXRDb21wb25lbnQoVUlCYXNlKTtcbiAgICAgICAgaWYoIWNvbSkge1xuICAgICAgICAgICAgY2Mud2FybihgJHtwcmVmYWJQYXRofSDnu5PngrnmsqHmnInnu5HlrppVSUJhc2VgKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAvLyDpgb/lhY1iYXNlQ29t6LCD55So5LqGb25sb2Fk5pa55rOVXG4gICAgICAgIHN3aXRjaChjb20uZm9ybVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuU2NyZWVuOlxuICAgICAgICAgICAgICAgIHRoaXMuX25kU2NyZWVuLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZvcm1UeXBlLkZpeGVkOlxuICAgICAgICAgICAgICAgIHRoaXMuX25kRml4ZWQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuV2luZG93OlxuICAgICAgICAgICAgICAgIHRoaXMuX25kUG9wVXAuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRm9ybVR5cGUuVGlwczpcbiAgICAgICAgICAgICAgICB0aGlzLl9uZFRpcHMuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hbGxGb3Jtc1twcmVmYWJQYXRoXSA9IGNvbTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb207XG4gICAgfVxuXG4gICAgLyoqIOa3u+WKoOWIsHNjcmVlbuS4rSAqL1xuICAgIHByaXZhdGUgYXN5bmMgZW50ZXJUb1NjcmVlbihmaWQ6IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcbiAgICAgICAgLy8g5YWz6Zet5YW25LuW5pi+56S655qE56qX5Y+jIFxuICAgICAgICBsZXQgYXJyOiBBcnJheTxQcm9taXNlPGJvb2xlYW4+PiA9IFtdO1xuICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9zaG93aW5nRm9ybXMpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuX3Nob3dpbmdGb3Jtc1trZXldLmNsb3NlU2VsZigpKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChhcnIpO1xuXG4gICAgICAgIGxldCBjb20gPSB0aGlzLl9hbGxGb3Jtc1tmaWRdO1xuICAgICAgICBpZighY29tKSByZXR1cm4gO1xuICAgICAgICB0aGlzLl9zaG93aW5nRm9ybXNbZmlkXSA9IGNvbTtcblxuICAgICAgICBBZGFwdGVyTWdyLmluc3QuYWRhcHRlQnlUeXBlKEFkYXB0ZXJUeXBlLlN0cmV0Y2hIZWlnaHQgfCBBZGFwdGVyVHlwZS5TdHJldGNoV2lkdGgsIGNvbS5ub2RlKTtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGNvbS5fcHJlSW5pdChwYXJhbXMpO1xuICAgICAgICBjb20ub25TaG93KHBhcmFtcyk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5zaG93RWZmZWN0KGNvbSk7XG4gICAgICAgIGNvbS5vbkFmdGVyU2hvdyhwYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKiDmt7vliqDliLBGaXhlZOS4rSAqL1xuICAgIHByaXZhdGUgYXN5bmMgZW50ZXJUb0ZpeGVkKGZpZDogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xuICAgICAgICBsZXQgY29tID0gdGhpcy5fYWxsRm9ybXNbZmlkXTtcbiAgICAgICAgaWYoIWNvbSkgcmV0dXJuIDtcbiAgICAgICAgYXdhaXQgY29tLl9wcmVJbml0KHBhcmFtcyk7XG4gICAgICAgIFxuICAgICAgICBjb20ub25TaG93KHBhcmFtcyk7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdGb3Jtc1tmaWRdID0gY29tO1xuICAgICAgICBhd2FpdCB0aGlzLnNob3dFZmZlY3QoY29tKTtcbiAgICAgICAgY29tLm9uQWZ0ZXJTaG93KHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqIOa3u+WKoOWIsHBvcHVw5LitICovXG4gICAgcHJpdmF0ZSBhc3luYyBlbnRlclRvUG9wdXAoZmlkOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG4gICAgICAgIGxldCBjb20gPSB0aGlzLl9hbGxGb3Jtc1tmaWRdIGFzIFVJV2luZG93O1xuICAgICAgICBpZighY29tKSByZXR1cm4gO1xuICAgICAgICBhd2FpdCBjb20uX3ByZUluaXQocGFyYW1zKTtcblxuICAgICAgICB0aGlzLl93aW5kb3dzLnB1c2goY29tKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuX3dpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3NbaV0ubm9kZS56SW5kZXggPSBpKzE7XG4gICAgICAgIH1cblxuICAgICAgICBjb20ub25TaG93KHBhcmFtcyk7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdGb3Jtc1tmaWRdID0gY29tO1xuXG4gICAgICAgIE1vZGFsTWdyLmluc3QuY2hlY2tNb2RhbFdpbmRvdyh0aGlzLl93aW5kb3dzKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93RWZmZWN0KGNvbSk7XG4gICAgICAgIGNvbS5vbkFmdGVyU2hvdyhwYXJhbXMpO1xuICAgIH1cbiAgICBcbiAgICAvKiog5Yqg6L295YiwdGlwc+S4rSAqL1xuICAgIHByaXZhdGUgYXN5bmMgZW50ZXJUb1RpcHMoZmlkOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG4gICAgICAgIGxldCBjb20gPSB0aGlzLl9hbGxGb3Jtc1tmaWRdO1xuICAgICAgICBpZighY29tKSByZXR1cm4gO1xuICAgICAgICBhd2FpdCBjb20uX3ByZUluaXQocGFyYW1zKTtcbiAgICAgICAgdGhpcy5fdGlwc0Zvcm1zW2ZpZF0gPSBjb207XG4gICAgICAgIFxuICAgICAgICBjb20ub25TaG93KHBhcmFtcyk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0VmZmVjdChjb20pO1xuICAgICAgICBjb20ub25BZnRlclNob3cocGFyYW1zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGV4aXRUb1NjcmVlbihmaWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgY29tID0gdGhpcy5fc2hvd2luZ0Zvcm1zW2ZpZF07XG4gICAgICAgIGlmKCFjb20pIHJldHVybiA7XG4gICAgICAgIGNvbS5vbkhpZGUoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5oaWRlRWZmZWN0KGNvbSk7XG4gICAgICAgIGNvbS5vbkFmdGVySGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX3Nob3dpbmdGb3Jtc1tmaWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Nob3dpbmdGb3Jtc1tmaWRdO1xuICAgIH1cbiAgIFxuICAgIHByaXZhdGUgYXN5bmMgZXhpdFRvRml4ZWQoZmlkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbSA9IHRoaXMuX2FsbEZvcm1zW2ZpZF07XG4gICAgICAgIGlmKCFjb20pIHJldHVybiA7XG4gICAgICAgIGNvbS5vbkhpZGUoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5oaWRlRWZmZWN0KGNvbSk7XG4gICAgICAgIGNvbS5vbkFmdGVySGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX3Nob3dpbmdGb3Jtc1tmaWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Nob3dpbmdGb3Jtc1tmaWRdO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGFzeW5jIGV4aXRUb1BvcHVwKGZpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuX3dpbmRvd3MubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICAgICAgbGV0IGNvbTogVUlXaW5kb3cgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGk9dGhpcy5fd2luZG93cy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICBpZih0aGlzLl93aW5kb3dzW2ldLmZpZCA9PT0gZmlkKSB7XG4gICAgICAgICAgICAgICAgY29tID0gdGhpcy5fd2luZG93c1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighY29tKSByZXR1cm4gO1xuICAgICAgICBcbiAgICAgICAgY29tLm9uSGlkZSgpO1xuICAgICAgICBNb2RhbE1nci5pbnN0LmNoZWNrTW9kYWxXaW5kb3codGhpcy5fd2luZG93cyk7XG4gICAgICAgIGF3YWl0IHRoaXMuaGlkZUVmZmVjdChjb20pO1xuICAgICAgICBjb20ub25BZnRlckhpZGUoKTtcblxuICAgICAgICB0aGlzLl9zaG93aW5nRm9ybXNbZmlkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zaG93aW5nRm9ybXNbZmlkXTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhc3luYyBleGl0VG9UaXBzKGZpZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjb20gPSB0aGlzLl9hbGxGb3Jtc1tmaWRdO1xuICAgICAgICBpZighY29tKSByZXR1cm4gO1xuICAgICAgICBjb20ub25IaWRlKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuaGlkZUVmZmVjdChjb20pO1xuICAgICAgICBjb20ub25BZnRlckhpZGUoKTtcblxuICAgICAgICB0aGlzLl90aXBzRm9ybXNbZmlkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl90aXBzRm9ybXNbZmlkXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNob3dFZmZlY3QoYmFzZVVJOiBVSUJhc2UpIHtcbiAgICAgICAgYmFzZVVJLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgYmFzZVVJLnNob3dFZmZlY3QoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyBoaWRlRWZmZWN0KGJhc2VVSTogVUlCYXNlKSB7XG4gICAgICAgIGF3YWl0IGJhc2VVSS5oaWRlRWZmZWN0KCk7XG4gICAgICAgIGJhc2VVSS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiDplIDmr4EgKi9cbiAgICBwcml2YXRlIGRlc3RvcnlGb3JtKGNvbTogVUlCYXNlKSB7XG4gICAgICAgIC8vIOmUgOavgeWKqOaAgeWKoOi9veeahOi1hOa6kFxuICAgICAgICBSZXNNZ3IuaW5zdC5kZXN0b3J5RHluYW1pY1Jlcyhjb20uZmlkKTtcbiAgICAgICAgLy8g6ZSA5q+BcHJlZmFi5Lul5Y+K5L6d6LWW55qE6LWE5rqQXG4gICAgICAgIFJlc01nci5pbnN0LmRlc3RvcnlGb3JtUHJlZmFiKGNvbS5maWQpO1xuICAgICAgICAvLyDplIDmr4Fub2RlXG4gICAgICAgIGNvbS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8g5LuOYWxsbWFw5Lit5Yig6ZmkXG4gICAgICAgIHRoaXMuX2FsbEZvcm1zW2NvbS5maWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FsbEZvcm1zW2NvbS5maWRdO1xuICAgIH1cblxuICAgIC8qKiBMUlXnvJPlrZjmjqfliLYgKi9cbiAgICBwcml2YXRlIHB1dExSVUNhY2hlKGNvbTogVUlCYXNlKSB7XG4gICAgICAgIHRoaXMuX0xSVUNhY2hlLnB1dChjb20uZmlkKTtcbiAgICAgICAgaWYoIXRoaXMuX0xSVUNhY2hlLm5lZWREZWxldGUoKSkgcmV0dXJuIDtcbiAgICAgICAgbGV0IGRlbGV0ZUZpZCA9IHRoaXMuX0xSVUNhY2hlLmRlbGV0ZUxhc3ROb2RlKCk7XG4gICAgICAgIGlmKGRlbGV0ZUZpZCkge1xuICAgICAgICAgICAgQ0NfREVCVUcgJiYgY29uc29sZS5sb2coJ2Nsb3NlIGZvcm0gaWQ6JywgZGVsZXRlRmlkLCB0aGlzLl9MUlVDYWNoZS50b1N0cmluZygpKVxuICAgICAgICAgICAgbGV0IGNvbSA9IHRoaXMuZ2V0Rm9ybShkZWxldGVGaWQpO1xuICAgICAgICAgICAgaWYoIWNvbSB8fCAhY29tLm5vZGUpIHJldHVybiA7XG4gICAgICAgICAgICBjb20gJiYgdGhpcy5kZXN0b3J5Rm9ybShjb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKiDnqpfkvZPmmK/lkKbmraPlnKjmmL7npLogKi9cbiAgICBwdWJsaWMgY2hlY2tGb3JtU2hvd2luZyhmaWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgY29tID0gdGhpcy5fYWxsRm9ybXNbZmlkXTtcbiAgICAgICAgaWYgKCFjb20pIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGNvbS5ub2RlLmFjdGl2ZTtcbiAgICB9XG5cbiAgICAvKiog56qX5L2T5piv5ZCm5q2j5Zyo5Yqg6L29ICovXG4gICAgcHVibGljIGNoZWNrRm9ybUxvYWRpbmcocHJlZmFiUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjb20gPSB0aGlzLl9sb2FkaW5nRm9ybVtwcmVmYWJQYXRoXTtcbiAgICAgICAgcmV0dXJuICEhY29tO1xuICAgIH1cblxuICAgIC8qKiDojrflvpdDb21wb25lbnQgKi9cbiAgICBwdWJsaWMgZ2V0Rm9ybShmSWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsRm9ybXNbZklkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VUlST09UKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fVUlST09UO1xuICAgIH1cbn1cblxuaWYoQ0NfREVCVUcpIHtcbiAgICB3aW5kb3dbJ1VJTWFuYWdlciddID0gVUlNYW5hZ2VyO1xufSJdfQ==