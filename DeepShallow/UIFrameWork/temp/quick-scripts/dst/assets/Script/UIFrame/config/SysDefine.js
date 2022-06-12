
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/config/SysDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9jb25maWcvU3lzRGVmaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUd0QyxVQUFVO0FBQ1YsSUFBWSxRQVlYO0FBWkQsV0FBWSxRQUFRO0lBQ2hCLFNBQVM7SUFDVCwrQkFBbUIsQ0FBQTtJQUNuQixXQUFXO0lBQ1gsNkJBQWlCLENBQUE7SUFDakIsV0FBVztJQUNYLCtCQUFtQixDQUFBO0lBQ25CLFlBQVk7SUFDWiwyQkFBZSxDQUFBO0lBQ2YsV0FBVztJQUNYLDJCQUFlLENBQUE7QUFFbkIsQ0FBQyxFQVpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBWW5CO0FBQ0QsV0FBVztBQUNYLElBQVksWUFhWDtBQWJELFdBQVksWUFBWTtJQUNwQixtQkFBbUI7SUFDbkIsK0NBQUksQ0FBQTtJQUNKLGdCQUFnQjtJQUNoQiw2REFBVyxDQUFBO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJEQUFVLENBQUE7SUFDVixlQUFlO0lBQ2YsNkRBQVcsQ0FBQTtJQUNYLGlCQUFpQjtJQUNqQiw2REFBVyxDQUFBO0lBQ1gsWUFBWTtJQUNaLDZEQUFXLENBQUE7QUFDZixDQUFDLEVBYlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFhdkI7QUFDRCxZQUFZO0FBQ1osSUFBWSxPQUtYO0FBTEQsV0FBWSxPQUFPO0lBQ2YscUNBQVEsQ0FBQTtJQUNSLDJDQUFXLENBQUE7SUFDWCwyQ0FBVyxDQUFBO0lBQ1gseUNBQVUsQ0FBQTtBQUNkLENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUFDRCxTQUFTO0FBQ1Q7SUFBQTtJQWtEQSxDQUFDO0lBakRHLFVBQVU7SUFDSSw0QkFBa0IsR0FBZ0Isa0JBQVEsQ0FBQyxTQUFTLENBQUM7SUFDbkUsVUFBVTtJQUNJLHlCQUFlLEdBQUcsUUFBUSxDQUFDO0lBQzNCLHNDQUE0QixHQUFHLG1CQUFtQixDQUFDO0lBQ25ELDhCQUFvQixHQUFHLGVBQWUsQ0FBQztJQUNyRCxVQUFVO0lBQ0kseUJBQWUsR0FBRyxxQkFBcUIsQ0FBQztJQUN4QywwQkFBZ0IsR0FBRyxvQ0FBb0MsQ0FBQztJQUN4RCw0QkFBa0IsR0FBRyxzQ0FBc0MsQ0FBQztJQUMxRSxVQUFVO0lBQ0ksd0JBQWMsR0FBRyxPQUFPLENBQUE7SUFDeEIseUJBQWUsR0FBRyxRQUFRLENBQUM7SUFDM0IseUJBQWUsR0FBRyxRQUFRLENBQUM7SUFDM0Isd0JBQWMsR0FBRyxTQUFTLENBQUM7SUFDM0Isd0JBQWMsR0FBRyxPQUFPLENBQUM7SUFDekIsMEJBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQzdCLHdCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQzdDLFdBQVc7SUFDRyw2QkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDMUIsZ0NBQXNCLEdBQUcsR0FBRyxDQUFDO0lBQzdCLDBCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUV2QixzQkFBWSxHQUFHLFVBQVUsQ0FBQztJQUUxQixzQkFBWSxHQUE0QjtRQUNsRCxPQUFPLEVBQVUsU0FBUztRQUMxQixRQUFRLEVBQVMsVUFBVTtRQUMzQixTQUFTLEVBQVEsV0FBVztRQUM1QixTQUFTLEVBQVEsV0FBVztRQUM1QixXQUFXLEVBQU0sYUFBYTtRQUM5QixPQUFPLEVBQVUsU0FBUztRQUMxQixlQUFlLEVBQUUsaUJBQWlCO1FBQ2xDLFdBQVcsRUFBTSxhQUFhO1FBQzlCLFlBQVksRUFBSyxjQUFjO1FBQy9CLFFBQVEsRUFBUyxhQUFhO1FBQzlCLFdBQVcsRUFBTSxhQUFhO1FBQzlCLFlBQVksRUFBSyxjQUFjO1FBQy9CLFVBQVUsRUFBTyxZQUFZO1FBQzdCLFVBQVUsRUFBTyxZQUFZO1FBQzdCLGFBQWEsRUFBSSxlQUFlO1FBQ2hDLGNBQWMsRUFBRyxnQkFBZ0I7UUFDakMsY0FBYyxFQUFHLGdCQUFnQjtRQUNqQyxXQUFXLEVBQU0sYUFBYTtRQUM5QixTQUFTLEVBQVEsV0FBVztRQUM1QixTQUFTLEVBQVEsV0FBVztRQUM1QixhQUFhLEVBQUksWUFBWTtLQUNoQyxDQUFDO0lBRU4sZ0JBQUM7Q0FsREQsQUFrREMsSUFBQTtBQWxEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUNvbmZpZyBmcm9tIFwiLi4vLi4vVUlDb25maWdcIjtcbmltcG9ydCB7IElGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL1N0cnVjdFwiO1xuXG4vKirnqpfkvZPnsbvlnosgKi9cbmV4cG9ydCBlbnVtIEZvcm1UeXBlIHtcbiAgICAvKiog5bGP5bmVICovXG4gICAgU2NyZWVuID0gXCJVSVNjcmVlblwiLFxuICAgIC8qKiDlm7rlrprnqpflj6MgKi9cbiAgICBGaXhlZCA9IFwiVUlGaXhlZFwiLFxuICAgIC8qKiDlvLnlh7rnqpflj6MgKi9cbiAgICBXaW5kb3cgPSBcIlVJV2luZG93XCIsXG4gICAgLyoqIFRvYXN0ICovXG4gICAgVG9hc3QgPSBcIlRvYXN0XCIsXG4gICAgLyoqIOeLrOeri+eql+WPoyAqL1xuICAgIFRpcHMgPSBcIlVJVGlwc1wiLFxuXG59XG4vKirpgI/mmI7luqbnsbvlnosgKi9cbmV4cG9ydCBlbnVtIE1vZGFsT3BhY2l0eSB7XG4gICAgLyoqIOayoeaciW1hc2ssIOWPr+S7peepv+mAjyAqL1xuICAgIE5vbmUsXG4gICAgLyoqIOWujOWFqOmAj+aYju+8jOS4jeiDveepv+mAjyAqL1xuICAgIE9wYWNpdHlaZXJvLFxuICAgIC8qKiDpq5jpgI/mmI7luqbvvIzkuI3og73nqb/pgI8gKi9cbiAgICBPcGFjaXR5TG93LFxuICAgIC8qKiDljYrpgI/mmI7vvIzkuI3og73nqb/pgI8gKi9cbiAgICBPcGFjaXR5SGFsZixcbiAgICAvKiog5L2O6YCP5piO5bqmLCDkuI3og73nqb/pgI8gKi9cbiAgICBPcGFjaXR5SGlnaCxcbiAgICAvKiog5a6M5YWo5LiN6YCP5piOICovXG4gICAgT3BhY2l0eUZ1bGxcbn1cbi8qKiBVSeeahOeKtuaAgSAqL1xuZXhwb3J0IGVudW0gVUlTdGF0ZSB7XG4gICAgTm9uZSA9IDAsXG4gICAgTG9hZGluZyA9IDEsXG4gICAgU2hvd2luZyA9IDIsXG4gICAgSGlkaW5nID0gM1xufVxuLyoqIOW4uOmHjyAqL1xuZXhwb3J0IGNsYXNzIFN5c0RlZmluZSB7XG4gICAgLyog5Yqg6L2956qX5L2TICovXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0TG9hZGluZ0Zvcm06IElGb3JtQ29uZmlnID0gVUlDb25maWcuVUlMb2FkaW5nO1xuICAgIC8qIOi3r+W+hOW4uOmHjyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU1lTX1BBVEhfQ0FOVkFTID0gXCJDYW52YXNcIjtcbiAgICBwdWJsaWMgc3RhdGljIFNZU19QQVRIX1VJRk9STVNfQ09ORklHX0lORk8gPSBcIlVJRm9ybXNDb25maWdJbmZvXCI7XG4gICAgcHVibGljIHN0YXRpYyBTWVNfUEFUSF9DT05GSUdfSU5GTyA9IFwiU3lzQ29uZmlnSW5mb1wiO1xuICAgIC8qIOagh+etvuW4uOmHjyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU1lTX1VJUk9PVF9OQU1FID0gXCJDYW52YXMvU2NlbmUvVUlST09UXCI7XG4gICAgcHVibGljIHN0YXRpYyBTWVNfVUlNT0RBTF9OQU1FID0gXCJDYW52YXMvU2NlbmUvVUlST09UL1VJTW9kYWxNYW5hZ2VyXCI7XG4gICAgcHVibGljIHN0YXRpYyBTWVNfVUlBZGFwdGVyX05BTUUgPSBcIkNhbnZhcy9TY2VuZS9VSVJPT1QvVUlBZGFwdGVyTWFuYWdlclwiO1xuICAgIC8qIOiKgueCueW4uOmHjyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU1lTX1NDRU5FX05PREUgPSBcIlNjZW5lXCJcbiAgICBwdWJsaWMgc3RhdGljIFNZU19VSVJPT1RfTk9ERSA9IFwiVUlST09UXCI7XG4gICAgcHVibGljIHN0YXRpYyBTWVNfU0NSRUVOX05PREUgPSBcIlNjcmVlblwiO1xuICAgIHB1YmxpYyBzdGF0aWMgU1lTX0ZJWEVEX05PREUgPSBcIkZpeGVkVUlcIjtcbiAgICBwdWJsaWMgc3RhdGljIFNZU19QT1BVUF9OT0RFID0gXCJQb3BVcFwiOyAgXG4gICAgcHVibGljIHN0YXRpYyBTWVNfVE9QVElQU19OT0RFID0gXCJUb3BUaXBzXCI7XG4gICAgcHVibGljIHN0YXRpYyBTWVNfTU9EQUxfTk9ERSA9IFwiVUlNb2RhbE5vZGVcIjtcbiAgICAvKiog6KeE6IyD56ym5Y+3ICovXG4gICAgcHVibGljIHN0YXRpYyBTWVNfU1RBTkRBUkRfUHJlZml4ID0gJ18nO1xuICAgIHB1YmxpYyBzdGF0aWMgU1lTX1NUQU5EQVJEX1NlcGFyYXRvciA9ICckJztcbiAgICBwdWJsaWMgc3RhdGljIFNZU19TVEFOREFSRF9FbmQgPSAnIyc7XG5cbiAgICBwdWJsaWMgc3RhdGljIFVJX1BBVEhfUk9PVCA9ICdVSUZvcm1zLyc7XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyBTZXBhcmF0b3JNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgICBcIl9Ob2RlXCIgICAgICAgIDogXCJjYy5Ob2RlXCIsXG4gICAgICAgIFwiX0xhYmVsXCIgICAgICAgOiBcImNjLkxhYmVsXCIsXG4gICAgICAgIFwiX0J1dHRvblwiICAgICAgOiBcImNjLkJ1dHRvblwiLFxuICAgICAgICBcIl9TcHJpdGVcIiAgICAgIDogXCJjYy5TcHJpdGVcIixcbiAgICAgICAgXCJfUmljaFRleHRcIiAgICA6IFwiY2MuUmljaFRleHRcIixcbiAgICAgICAgXCJfTWFza1wiICAgICAgICA6IFwiY2MuTWFza1wiLFxuICAgICAgICBcIl9Nb3Rpb25TdHJlYWtcIjogXCJjYy5Nb3Rpb25TdHJlYWtcIixcbiAgICAgICAgXCJfVGlsZWRNYXBcIiAgICA6IFwiY2MuVGlsZWRNYXBcIixcbiAgICAgICAgXCJfVGlsZWRUaWxlXCIgICA6IFwiY2MuVGlsZWRUaWxlXCIsXG4gICAgICAgIFwiX1NwaW5lXCIgICAgICAgOiBcInNwLlNrZWxldG9uXCIsXG4gICAgICAgIFwiX0dyYXBoaWNzXCIgICAgOiBcImNjLkdyYXBoaWNzXCIsXG4gICAgICAgIFwiX0FuaW1hdGlvblwiICAgOiBcImNjLkFuaW1hdGlvblwiLFxuICAgICAgICBcIl9XZWJWaWV3XCIgICAgIDogXCJjYy5XZWJWaWV3XCIsXG4gICAgICAgIFwiX0VkaXRCb3hcIiAgICAgOiBcImNjLkVkaXRCb3hcIixcbiAgICAgICAgXCJfU2Nyb2xsVmlld1wiICA6IFwiY2MuU2Nyb2xsVmlld1wiLFxuICAgICAgICBcIl9WaWRlb1BsYXllclwiIDogXCJjYy5WaWRlb1BsYXllclwiLFxuICAgICAgICBcIl9Qcm9ncmVzc0JhclwiIDogXCJjYy5Qcm9ncmVzc0JhclwiLFxuICAgICAgICBcIl9QYWdlVmlld1wiICAgIDogXCJjYy5QYWdlVmlld1wiLFxuICAgICAgICBcIl9TbGlkZXJcIiAgICAgIDogXCJjYy5TbGlkZXJcIixcbiAgICAgICAgXCJfVG9nZ2xlXCIgICAgICA6IFwiY2MuVG9nZ2xlXCIsXG4gICAgICAgIFwiX0J1dHRvblBsdXNcIiAgOiBcIkJ1dHRvblBsdXNcIixcbiAgICB9O1xuXG59Il19