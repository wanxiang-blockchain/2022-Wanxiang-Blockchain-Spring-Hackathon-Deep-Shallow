"use strict";
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