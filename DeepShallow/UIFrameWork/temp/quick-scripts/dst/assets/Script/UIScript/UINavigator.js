
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UINavigator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64d76l/v4JPK6JM5Y8OH42G', 'UINavigator');
// Script/UIScript/UINavigator.ts

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
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var UIConfig_1 = require("./../UIConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UINavigator = /** @class */ (function (_super) {
    __extends(UINavigator, _super);
    function UINavigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UINavigator.prototype.start = function () {
        var content = this.view.Scroll.content;
        for (var _i = 0, _a = content.children; _i < _a.length; _i++) {
            var e = _a[_i];
            e.on(cc.Node.EventType.TOUCH_END, this.onClickButton, this);
        }
    };
    UINavigator.prototype.onClickButton = function (e) {
        var node = e.getCurrentTarget();
        switch (node.name) {
            case "project":
                FormMgr_1.default.open(UIConfig_1.default.UIHome);
                break;
            case "light":
                FormMgr_1.default.open(UIConfig_1.default.UILight);
                break;
            case "capture":
                FormMgr_1.default.open(UIConfig_1.default.UICapture);
                break;
            case "mobx":
                FormMgr_1.default.open(UIConfig_1.default.UIMobx);
                break;
            case "dungeon":
                FormMgr_1.default.open(UIConfig_1.default.UIDungeon);
                break;
            case "splitTexture":
                FormMgr_1.default.open(UIConfig_1.default.UISplitTexture);
                break;
            case "scrollTexture":
                FormMgr_1.default.open(UIConfig_1.default.UIScrollTexture);
                break;
            case "meshTexture":
                FormMgr_1.default.open(UIConfig_1.default.UIMeshTexture);
                break;
        }
    };
    UINavigator = __decorate([
        ccclass
    ], UINavigator);
    return UINavigator;
}(UIForm_1.UIScreen));
exports.default = UINavigator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlOYXZpZ2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOENBQXlDO0FBQ3pDLDRDQUE2QztBQUM3QywwQ0FBcUM7QUFHL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVE7SUFBakQ7O0lBMENBLENBQUM7SUF0Q0csMkJBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN2QyxLQUFlLFVBQWdCLEVBQWhCLEtBQUEsT0FBTyxDQUFDLFFBQVEsRUFBaEIsY0FBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtZQUE3QixJQUFNLENBQUMsU0FBQTtZQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLENBQXNCO1FBQ2hDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLFFBQU8sSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLEtBQUssU0FBUztnQkFDVixpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLGlCQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLGlCQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDVixLQUFLLGNBQWM7Z0JBQ2YsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDdEMsTUFBTTtZQUNWLEtBQUssZUFBZTtnQkFDaEIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBdkNnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEMvQjtJQUFELGtCQUFDO0NBMUNELEFBMENDLENBMUN3QyxpQkFBUSxHQTBDaEQ7a0JBMUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJTmF2aWdhdG9yX0F1dG8gZnJvbSBcIi4uL0F1dG9TY3JpcHRzL1VJTmF2aWdhdG9yX0F1dG9cIjtcbmltcG9ydCBGb3JtTWdyIGZyb20gXCIuLi9VSUZyYW1lL0Zvcm1NZ3JcIjtcbmltcG9ydCB7IFVJU2NyZWVuIH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5pbXBvcnQgVUlDb25maWcgZnJvbSBcIi4vLi4vVUlDb25maWdcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTmF2aWdhdG9yIGV4dGVuZHMgVUlTY3JlZW4ge1xuXG4gICAgdmlldzogVUlOYXZpZ2F0b3JfQXV0bztcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnZpZXcuU2Nyb2xsLmNvbnRlbnQ7XG4gICAgICAgIGZvcihjb25zdCBlIG9mIGNvbnRlbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tCdXR0b24sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja0J1dHRvbihlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBub2RlID0gZS5nZXRDdXJyZW50VGFyZ2V0KCk7XG4gICAgICAgIHN3aXRjaChub2RlLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJSG9tZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgICAgICAgICAgICBGb3JtTWdyLm9wZW4oVUlDb25maWcuVUlMaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2FwdHVyZVwiOlxuICAgICAgICAgICAgICAgIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSUNhcHR1cmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1vYnhcIjpcbiAgICAgICAgICAgICAgICBGb3JtTWdyLm9wZW4oVUlDb25maWcuVUlNb2J4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkdW5nZW9uXCI6XG4gICAgICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJRHVuZ2Vvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3BsaXRUZXh0dXJlXCI6XG4gICAgICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJU3BsaXRUZXh0dXJlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzY3JvbGxUZXh0dXJlXCI6XG4gICAgICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJU2Nyb2xsVGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVzaFRleHR1cmVcIjpcbiAgICAgICAgICAgICAgICBGb3JtTWdyLm9wZW4oVUlDb25maWcuVUlNZXNoVGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19