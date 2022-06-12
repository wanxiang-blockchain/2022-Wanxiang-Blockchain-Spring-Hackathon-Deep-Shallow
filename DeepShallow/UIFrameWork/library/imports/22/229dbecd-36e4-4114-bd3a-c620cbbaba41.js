"use strict";
cc._RF.push(module, '229db7NNuRBFL06xiDLurpB', 'UIGame');
// Script/UIScript/UIGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GuideConfig_1 = require("../config/GuideConfig");
var UIConfig_1 = require("../UIConfig");
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGame = /** @class */ (function (_super) {
    __extends(UIGame, _super);
    function UIGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    UIGame.prototype.start = function () {
        this.view.Back.addClick(function () {
            FormMgr_1.default.backScene();
        }, this);
        this.view.toMap.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIECSView);
        }, this);
        this.view.GuideNode.addClick(this.onBtnGuide.bind(this), this);
        this.onBtnGuide();
        for (var index = 1; index < 14; index++) {
            // const element = array[index];
            var key = "jianzhu";
            if (index < 10) {
                key = key + "0" + index;
            }
            else {
                key = key + index;
            }
            var ksp = cc.sys.localStorage.getItem(key);
            var sp = this.view.items.getChildByName(key);
            if (ksp == null) {
                sp.getComponent(cc.Sprite).enabled = false;
            }
            else {
                sp.getComponent(cc.Sprite).enabled = true;
            }
        }
    };
    UIGame.prototype.onBtnGuide = function () {
        var guideIdx = cc.sys.localStorage.getItem("guidxIdx");
        if (guideIdx == null) {
            cc.sys.localStorage.setItem("guidxIdx", 0);
            guideIdx = 0;
        }
        var txt = GuideConfig_1.GuideConfig[Number(guideIdx)];
        if (txt != null) {
            this.view.LblTip.string = txt;
            ++guideIdx;
            cc.sys.localStorage.setItem("guidxIdx", guideIdx);
        }
        else {
            this.view.guidNode.active = false;
        }
    };
    UIGame.prototype.onBuildItem = function (ev, dat) {
        var _this = this;
        var target = ev.target;
        // console.log(target)
        var key = target.name;
        var ksp = cc.sys.localStorage.getItem(key);
        if (ksp == null) {
            this.view.buldtool.active = true;
            this.view.buldtool.position = target.position;
            this.view.buldtool.getComponent(cc.Animation).play();
            cc.tween(this.node)
                .delay(1.5)
                .call(function () {
                _this.view.buldtool.active = false;
                target.getComponent(cc.Sprite).enabled = true;
                cc.sys.localStorage.setItem(key, 1);
            }).start();
        }
    };
    UIGame = __decorate([
        ccclass
    ], UIGame);
    return UIGame;
}(UIForm_1.UIScreen));
exports.default = UIGame;

cc._RF.pop();