"use strict";
cc._RF.push(module, 'da248zQUHNGAYyaJMo+rhIL', 'UIConfig');
// Script/UIConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIConfig = /** @class */ (function () {
    function UIConfig() {
    }
    UIConfig.UIFunction = {
        prefabUrl: "Forms/Fixed/UIFunction",
        type: "UIFixed"
    };
    UIConfig.UISound = {
        prefabUrl: "Forms/Fixed/UISound",
        type: "UIFixed"
    };
    UIConfig.UIAbout = {
        prefabUrl: "Forms/Screen/UIAbout",
        type: "UIScreen"
    };
    UIConfig.UICapture = {
        prefabUrl: "Forms/Screen/UICapture",
        type: "UIScreen"
    };
    UIConfig.UIDungeon = {
        prefabUrl: "Forms/Screen/UIDungeon",
        type: "UIScreen"
    };
    UIConfig.UIECSView = {
        prefabUrl: "Forms/Screen/UIECSView",
        type: "UIScreen"
    };
    UIConfig.UIGame = {
        prefabUrl: "Forms/Screen/UIGame",
        type: "UIScreen"
    };
    UIConfig.UIHome = {
        prefabUrl: "Forms/Screen/UIHome",
        type: "UIScreen"
    };
    UIConfig.UILight = {
        prefabUrl: "Forms/Screen/UILight",
        type: "UIScreen"
    };
    UIConfig.UIMap = {
        prefabUrl: "Forms/Screen/UIMap",
        type: "UIScreen"
    };
    UIConfig.UIMeshTexture = {
        prefabUrl: "Forms/Screen/UIMeshTexture",
        type: "UIScreen"
    };
    UIConfig.UINavigator = {
        prefabUrl: "Forms/Screen/UINavigator",
        type: "UIScreen"
    };
    UIConfig.UIScrollTexture = {
        prefabUrl: "Forms/Screen/UIScrollTexture",
        type: "UIScreen"
    };
    UIConfig.UISplitTexture = {
        prefabUrl: "Forms/Screen/UISplitTexture",
        type: "UIScreen"
    };
    UIConfig.UILoading = {
        prefabUrl: "Forms/Tips/UILoading",
        type: "UITips"
    };
    UIConfig.UIMobx = {
        prefabUrl: "Forms/Windows/UIMobx",
        type: "UIWindow"
    };
    UIConfig.UIPop = {
        prefabUrl: "Forms/Windows/UIPop",
        type: "UIWindow"
    };
    UIConfig.UIScrollPlus = {
        prefabUrl: "Forms/Windows/UIScrollPlus",
        type: "UIWindow"
    };
    UIConfig.UISetting = {
        prefabUrl: "Forms/Windows/UISetting",
        type: "UIWindow"
    };
    UIConfig.UISkills = {
        prefabUrl: "Forms/Windows/UISkills",
        type: "UIWindow"
    };
    UIConfig.UITips = {
        prefabUrl: "Forms/Windows/UITips",
        type: "UIWindow"
    };
    return UIConfig;
}());
exports.default = UIConfig;
cc.game.on(cc.game.EVENT_GAME_INITED, function () {
    for (var key in UIConfig) {
        var constourt = cc.js.getClassByName(key);
        if (constourt)
            constourt['UIConfig'] = UIConfig[key];
    }
});

cc._RF.pop();