
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBc0ZBLENBQUM7SUFyRlUsbUJBQVUsR0FBRztRQUNoQixTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLElBQUksRUFBRSxTQUFTO0tBQ2xCLENBQUE7SUFDTSxnQkFBTyxHQUFHO1FBQ2IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxJQUFJLEVBQUUsU0FBUztLQUNsQixDQUFBO0lBQ00sZ0JBQU8sR0FBRztRQUNiLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLGtCQUFTLEdBQUc7UUFDZixTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSxrQkFBUyxHQUFHO1FBQ2YsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxJQUFJLEVBQUUsVUFBVTtLQUNuQixDQUFBO0lBQ00sa0JBQVMsR0FBRztRQUNmLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLGVBQU0sR0FBRztRQUNaLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLGVBQU0sR0FBRztRQUNaLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLGdCQUFPLEdBQUc7UUFDYixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSxjQUFLLEdBQUc7UUFDWCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSxzQkFBYSxHQUFHO1FBQ25CLFNBQVMsRUFBRSw0QkFBNEI7UUFDdkMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLG9CQUFXLEdBQUc7UUFDakIsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxJQUFJLEVBQUUsVUFBVTtLQUNuQixDQUFBO0lBQ00sd0JBQWUsR0FBRztRQUNyQixTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSx1QkFBYyxHQUFHO1FBQ3BCLFNBQVMsRUFBRSw2QkFBNkI7UUFDeEMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLGtCQUFTLEdBQUc7UUFDZixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLElBQUksRUFBRSxRQUFRO0tBQ2pCLENBQUE7SUFDTSxlQUFNLEdBQUc7UUFDWixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSxjQUFLLEdBQUc7UUFDWCxTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSxxQkFBWSxHQUFHO1FBQ2xCLFNBQVMsRUFBRSw0QkFBNEI7UUFDdkMsSUFBSSxFQUFFLFVBQVU7S0FDbkIsQ0FBQTtJQUNNLGtCQUFTLEdBQUc7UUFDZixTQUFTLEVBQUUseUJBQXlCO1FBQ3BDLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUE7SUFDTSxpQkFBUSxHQUFHO1FBQ2QsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxJQUFJLEVBQUUsVUFBVTtLQUNuQixDQUFBO0lBQ00sZUFBTSxHQUFHO1FBQ1osU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxJQUFJLEVBQUUsVUFBVTtLQUNuQixDQUFBO0lBRUwsZUFBQztDQXRGRCxBQXNGQyxJQUFBO2tCQXRGb0IsUUFBUTtBQXVGN0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUNsQyxLQUFJLElBQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUN2QixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFHLFNBQVM7WUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZEO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29uZmlnIHtcbiAgICBzdGF0aWMgVUlGdW5jdGlvbiA9IHtcbiAgICAgICAgcHJlZmFiVXJsOiBcIkZvcm1zL0ZpeGVkL1VJRnVuY3Rpb25cIixcbiAgICAgICAgdHlwZTogXCJVSUZpeGVkXCJcbiAgICB9XG4gICAgc3RhdGljIFVJU291bmQgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9GaXhlZC9VSVNvdW5kXCIsXG4gICAgICAgIHR5cGU6IFwiVUlGaXhlZFwiXG4gICAgfVxuICAgIHN0YXRpYyBVSUFib3V0ID0ge1xuICAgICAgICBwcmVmYWJVcmw6IFwiRm9ybXMvU2NyZWVuL1VJQWJvdXRcIixcbiAgICAgICAgdHlwZTogXCJVSVNjcmVlblwiXG4gICAgfVxuICAgIHN0YXRpYyBVSUNhcHR1cmUgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9TY3JlZW4vVUlDYXB0dXJlXCIsXG4gICAgICAgIHR5cGU6IFwiVUlTY3JlZW5cIlxuICAgIH1cbiAgICBzdGF0aWMgVUlEdW5nZW9uID0ge1xuICAgICAgICBwcmVmYWJVcmw6IFwiRm9ybXMvU2NyZWVuL1VJRHVuZ2VvblwiLFxuICAgICAgICB0eXBlOiBcIlVJU2NyZWVuXCJcbiAgICB9XG4gICAgc3RhdGljIFVJRUNTVmlldyA9IHtcbiAgICAgICAgcHJlZmFiVXJsOiBcIkZvcm1zL1NjcmVlbi9VSUVDU1ZpZXdcIixcbiAgICAgICAgdHlwZTogXCJVSVNjcmVlblwiXG4gICAgfVxuICAgIHN0YXRpYyBVSUdhbWUgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9TY3JlZW4vVUlHYW1lXCIsXG4gICAgICAgIHR5cGU6IFwiVUlTY3JlZW5cIlxuICAgIH1cbiAgICBzdGF0aWMgVUlIb21lID0ge1xuICAgICAgICBwcmVmYWJVcmw6IFwiRm9ybXMvU2NyZWVuL1VJSG9tZVwiLFxuICAgICAgICB0eXBlOiBcIlVJU2NyZWVuXCJcbiAgICB9XG4gICAgc3RhdGljIFVJTGlnaHQgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9TY3JlZW4vVUlMaWdodFwiLFxuICAgICAgICB0eXBlOiBcIlVJU2NyZWVuXCJcbiAgICB9XG4gICAgc3RhdGljIFVJTWFwID0ge1xuICAgICAgICBwcmVmYWJVcmw6IFwiRm9ybXMvU2NyZWVuL1VJTWFwXCIsXG4gICAgICAgIHR5cGU6IFwiVUlTY3JlZW5cIlxuICAgIH1cbiAgICBzdGF0aWMgVUlNZXNoVGV4dHVyZSA9IHtcbiAgICAgICAgcHJlZmFiVXJsOiBcIkZvcm1zL1NjcmVlbi9VSU1lc2hUZXh0dXJlXCIsXG4gICAgICAgIHR5cGU6IFwiVUlTY3JlZW5cIlxuICAgIH1cbiAgICBzdGF0aWMgVUlOYXZpZ2F0b3IgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9TY3JlZW4vVUlOYXZpZ2F0b3JcIixcbiAgICAgICAgdHlwZTogXCJVSVNjcmVlblwiXG4gICAgfVxuICAgIHN0YXRpYyBVSVNjcm9sbFRleHR1cmUgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9TY3JlZW4vVUlTY3JvbGxUZXh0dXJlXCIsXG4gICAgICAgIHR5cGU6IFwiVUlTY3JlZW5cIlxuICAgIH1cbiAgICBzdGF0aWMgVUlTcGxpdFRleHR1cmUgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9TY3JlZW4vVUlTcGxpdFRleHR1cmVcIixcbiAgICAgICAgdHlwZTogXCJVSVNjcmVlblwiXG4gICAgfVxuICAgIHN0YXRpYyBVSUxvYWRpbmcgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9UaXBzL1VJTG9hZGluZ1wiLFxuICAgICAgICB0eXBlOiBcIlVJVGlwc1wiXG4gICAgfVxuICAgIHN0YXRpYyBVSU1vYnggPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9XaW5kb3dzL1VJTW9ieFwiLFxuICAgICAgICB0eXBlOiBcIlVJV2luZG93XCJcbiAgICB9XG4gICAgc3RhdGljIFVJUG9wID0ge1xuICAgICAgICBwcmVmYWJVcmw6IFwiRm9ybXMvV2luZG93cy9VSVBvcFwiLFxuICAgICAgICB0eXBlOiBcIlVJV2luZG93XCJcbiAgICB9XG4gICAgc3RhdGljIFVJU2Nyb2xsUGx1cyA9IHtcbiAgICAgICAgcHJlZmFiVXJsOiBcIkZvcm1zL1dpbmRvd3MvVUlTY3JvbGxQbHVzXCIsXG4gICAgICAgIHR5cGU6IFwiVUlXaW5kb3dcIlxuICAgIH1cbiAgICBzdGF0aWMgVUlTZXR0aW5nID0ge1xuICAgICAgICBwcmVmYWJVcmw6IFwiRm9ybXMvV2luZG93cy9VSVNldHRpbmdcIixcbiAgICAgICAgdHlwZTogXCJVSVdpbmRvd1wiXG4gICAgfVxuICAgIHN0YXRpYyBVSVNraWxscyA9IHtcbiAgICAgICAgcHJlZmFiVXJsOiBcIkZvcm1zL1dpbmRvd3MvVUlTa2lsbHNcIixcbiAgICAgICAgdHlwZTogXCJVSVdpbmRvd1wiXG4gICAgfVxuICAgIHN0YXRpYyBVSVRpcHMgPSB7XG4gICAgICAgIHByZWZhYlVybDogXCJGb3Jtcy9XaW5kb3dzL1VJVGlwc1wiLFxuICAgICAgICB0eXBlOiBcIlVJV2luZG93XCJcbiAgICB9XG4gICAgXG59XG5jYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfR0FNRV9JTklURUQsICgpID0+IHtcbiAgICBmb3IoY29uc3Qga2V5IGluIFVJQ29uZmlnKSB7XG4gICAgICAgIGxldCBjb25zdG91cnQgPSBjYy5qcy5nZXRDbGFzc0J5TmFtZShrZXkpO1xuICAgICAgICBpZihjb25zdG91cnQpIGNvbnN0b3VydFsnVUlDb25maWcnXSA9IFVJQ29uZmlnW2tleV07XG4gICAgfVxufSk7XG4iXX0=