
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFvRDtBQUNwRCx3Q0FBbUM7QUFDbkMsOENBQXlDO0FBQ3pDLDRDQUE2QztBQUV2QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBUTtJQUE1Qzs7SUEwRUEsQ0FBQztJQXRFRyxlQUFlO0lBRWYsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwQixpQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNyQixpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFHbEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxnQ0FBZ0M7WUFDaEMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFBO1lBQ25CLElBQUcsS0FBSyxHQUFDLEVBQUUsRUFBQztnQkFDUixHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxLQUFLLENBQUE7YUFDdEI7aUJBQUk7Z0JBQ0QsR0FBRyxHQUFHLEdBQUcs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QztrQkExRW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlHYW1lX0F1dG8gZnJvbSBcIi4uL0F1dG9TY3JpcHRzL1VJR2FtZV9BdXRvXCI7XG5pbXBvcnQgeyBHdWlkZUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvR3VpZGVDb25maWdcIjtcbmltcG9ydCBVSUNvbmZpZyBmcm9tIFwiLi4vVUlDb25maWdcIjtcbmltcG9ydCBGb3JtTWdyIGZyb20gXCIuLi9VSUZyYW1lL0Zvcm1NZ3JcIjtcbmltcG9ydCB7IFVJU2NyZWVuIH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlHYW1lIGV4dGVuZHMgVUlTY3JlZW4ge1xuXG5cbiAgICB2aWV3OiBVSUdhbWVfQXV0bztcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy52aWV3LkJhY2suYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5iYWNrU2NlbmUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy52aWV3LnRvTWFwLmFkZENsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSUVDU1ZpZXcpO1xuICAgICAgICB9LCB0aGlzKTtcblxuXG4gICAgICAgIHRoaXMudmlldy5HdWlkZU5vZGUuYWRkQ2xpY2sodGhpcy5vbkJ0bkd1aWRlLmJpbmQodGhpcyksdGhpcyk7XG4gICAgICAgIHRoaXMub25CdG5HdWlkZSgpOyBcblxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCAxNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBcImppYW56aHVcIlxuICAgICAgICAgICAgaWYoaW5kZXg8MTApe1xuICAgICAgICAgICAgICAgIGtleSA9IGtleStcIjBcIitpbmRleFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5K2luZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQga3NwID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgICAgIGxldCBzcCA9IHRoaXMudmlldy5pdGVtcy5nZXRDaGlsZEJ5TmFtZShrZXkpXG4gICAgICAgICAgICBpZihrc3A9PW51bGwpe1xuICAgICAgICAgICAgICAgIHNwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5HdWlkZSgpe1xuICAgICAgICBsZXQgZ3VpZGVJZHggPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkeElkeFwiKVxuICAgICAgICBpZihndWlkZUlkeD09bnVsbCl7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkeElkeFwiLDApO1xuICAgICAgICAgICAgZ3VpZGVJZHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0eHQgPSBHdWlkZUNvbmZpZ1tOdW1iZXIoZ3VpZGVJZHgpXTtcbiAgICAgICAgaWYodHh0ICE9IG51bGwpe1xuICAgICAgICAgICB0aGlzLnZpZXcuTGJsVGlwLnN0cmluZyA9IHR4dDtcbiAgICAgICAgICAgKytndWlkZUlkeDtcbiAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZHhJZHhcIixndWlkZUlkeCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy52aWV3Lmd1aWROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdWlsZEl0ZW0oZXYsIGRhdCl7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICAgICAgbGV0IGtleSA9IHRhcmdldC5uYW1lO1xuICAgICAgICBsZXQga3NwID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgaWYoa3NwPT1udWxsKXtcbiAgICAgICAgICAgIHRoaXMudmlldy5idWxkdG9vbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aWV3LmJ1bGR0b29sLnBvc2l0aW9uID0gdGFyZ2V0LnBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy52aWV3LmJ1bGR0b29sLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5idWxkdG9vbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZD10cnVlO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksMSk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==