"use strict";
cc._RF.push(module, '7f8ffNRvZxCz4zNi1L6dBHr', 'SysDefine');
// Script/UIFrame/config/SysDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysDefine = exports.UIState = exports.ModalOpacity = exports.FormType = void 0;
var UIConfig_1 = require("../../UIConfig");
/**窗体类型 */
var FormType;
(function (FormType) {
    /** 屏幕 */
    FormType["Screen"] = "UIScreen";
    /** 固定窗口 */
    FormType["Fixed"] = "UIFixed";
    /** 弹出窗口 */
    FormType["Window"] = "UIWindow";
    /** Toast */
    FormType["Toast"] = "Toast";
    /** 独立窗口 */
    FormType["Tips"] = "UITips";
})(FormType = exports.FormType || (exports.FormType = {}));
/**透明度类型 */
var ModalOpacity;
(function (ModalOpacity) {
    /** 没有mask, 可以穿透 */
    ModalOpacity[ModalOpacity["None"] = 0] = "None";
    /** 完全透明，不能穿透 */
    ModalOpacity[ModalOpacity["OpacityZero"] = 1] = "OpacityZero";
    /** 高透明度，不能穿透 */
    ModalOpacity[ModalOpacity["OpacityLow"] = 2] = "OpacityLow";
    /** 半透明，不能穿透 */
    ModalOpacity[ModalOpacity["OpacityHalf"] = 3] = "OpacityHalf";
    /** 低透明度, 不能穿透 */
    ModalOpacity[ModalOpacity["OpacityHigh"] = 4] = "OpacityHigh";
    /** 完全不透明 */
    ModalOpacity[ModalOpacity["OpacityFull"] = 5] = "OpacityFull";
})(ModalOpacity = exports.ModalOpacity || (exports.ModalOpacity = {}));
/** UI的状态 */
var UIState;
(function (UIState) {
    UIState[UIState["None"] = 0] = "None";
    UIState[UIState["Loading"] = 1] = "Loading";
    UIState[UIState["Showing"] = 2] = "Showing";
    UIState[UIState["Hiding"] = 3] = "Hiding";
})(UIState = exports.UIState || (exports.UIState = {}));
/** 常量 */
var SysDefine = /** @class */ (function () {
    function SysDefine() {
    }
    /* 加载窗体 */
    SysDefine.defaultLoadingForm = UIConfig_1.default.UILoading;
    /* 路径常量 */
    SysDefine.SYS_PATH_CANVAS = "Canvas";
    SysDefine.SYS_PATH_UIFORMS_CONFIG_INFO = "UIFormsConfigInfo";
    SysDefine.SYS_PATH_CONFIG_INFO = "SysConfigInfo";
    /* 标签常量 */
    SysDefine.SYS_UIROOT_NAME = "Canvas/Scene/UIROOT";
    SysDefine.SYS_UIMODAL_NAME = "Canvas/Scene/UIROOT/UIModalManager";
    SysDefine.SYS_UIAdapter_NAME = "Canvas/Scene/UIROOT/UIAdapterManager";
    /* 节点常量 */
    SysDefine.SYS_SCENE_NODE = "Scene";
    SysDefine.SYS_UIROOT_NODE = "UIROOT";
    SysDefine.SYS_SCREEN_NODE = "Screen";
    SysDefine.SYS_FIXED_NODE = "FixedUI";
    SysDefine.SYS_POPUP_NODE = "PopUp";
    SysDefine.SYS_TOPTIPS_NODE = "TopTips";
    SysDefine.SYS_MODAL_NODE = "UIModalNode";
    /** 规范符号 */
    SysDefine.SYS_STANDARD_Prefix = '_';
    SysDefine.SYS_STANDARD_Separator = '$';
    SysDefine.SYS_STANDARD_End = '#';
    SysDefine.UI_PATH_ROOT = 'UIForms/';
    SysDefine.SeparatorMap = {
        "_Node": "cc.Node",
        "_Label": "cc.Label",
        "_Button": "cc.Button",
        "_Sprite": "cc.Sprite",
        "_RichText": "cc.RichText",
        "_Mask": "cc.Mask",
        "_MotionStreak": "cc.MotionStreak",
        "_TiledMap": "cc.TiledMap",
        "_TiledTile": "cc.TiledTile",
        "_Spine": "sp.Skeleton",
        "_Graphics": "cc.Graphics",
        "_Animation": "cc.Animation",
        "_WebView": "cc.WebView",
        "_EditBox": "cc.EditBox",
        "_ScrollView": "cc.ScrollView",
        "_VideoPlayer": "cc.VideoPlayer",
        "_ProgressBar": "cc.ProgressBar",
        "_PageView": "cc.PageView",
        "_Slider": "cc.Slider",
        "_Toggle": "cc.Toggle",
        "_ButtonPlus": "ButtonPlus",
    };
    return SysDefine;
}());
exports.SysDefine = SysDefine;

cc._RF.pop();