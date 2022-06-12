
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIFunction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26e9dYfX+tDUpk37S1FVqfx', 'UIFunction');
// Script/UIScript/UIFunction.ts

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
var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var UIConfig_1 = require("./../UIConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIFunction = /** @class */ (function (_super) {
    __extends(UIFunction, _super);
    function UIFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    UIFunction.prototype.start = function () {
        AdapterMgr_1.default.inst.adapteByType(AdapterMgr_1.AdapterType.Bottom, this.node, 50);
        this.view.Setting.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UISetting);
        }, this);
        this.view.Skills.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UISkills);
        }, this);
        this.view.ScrollHelper.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIScrollPlus);
        }, this);
    };
    UIFunction = __decorate([
        ccclass
    ], UIFunction);
    return UIFunction;
}(UIForm_1.UIFixed));
exports.default = UIFunction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlGdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBZ0U7QUFDaEUsOENBQXlDO0FBQ3pDLDRDQUE0QztBQUU1QywwQ0FBcUM7QUFHL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQU87SUFBL0M7O0lBd0JBLENBQUM7SUFyQkcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7UUFDSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDdEIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHYixDQUFDO0lBckJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBd0I5QjtJQUFELGlCQUFDO0NBeEJELEFBd0JDLENBeEJ1QyxnQkFBTyxHQXdCOUM7a0JBeEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJRnVuY3Rpb25fQXV0byBmcm9tIFwiLi4vQXV0b1NjcmlwdHMvVUlGdW5jdGlvbl9BdXRvXCI7XG5pbXBvcnQgQWRhcHRlck1nciwgeyBBZGFwdGVyVHlwZSB9IGZyb20gXCIuLi9VSUZyYW1lL0FkYXB0ZXJNZ3JcIjtcbmltcG9ydCBGb3JtTWdyIGZyb20gXCIuLi9VSUZyYW1lL0Zvcm1NZ3JcIjtcbmltcG9ydCB7IFVJRml4ZWQgfSBmcm9tIFwiLi4vVUlGcmFtZS9VSUZvcm1cIjtcbmltcG9ydCBXaW5kb3dNZ3IgZnJvbSBcIi4uL1VJRnJhbWUvV2luZG93TWdyXCI7XG5pbXBvcnQgVUlDb25maWcgZnJvbSBcIi4vLi4vVUlDb25maWdcIjtcbmltcG9ydCBVSVNraWxscyBmcm9tIFwiLi9VSVNraWxsc1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRnVuY3Rpb24gZXh0ZW5kcyBVSUZpeGVkIHtcbiAgICBcbiAgICB2aWV3OiBVSUZ1bmN0aW9uX0F1dG87XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIEFkYXB0ZXJNZ3IuaW5zdC5hZGFwdGVCeVR5cGUoQWRhcHRlclR5cGUuQm90dG9tLCB0aGlzLm5vZGUsIDUwKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudmlldy5TZXR0aW5nLmFkZENsaWNrKCgpID0+IHsgICAgICAgICAgICBcbiAgICAgICAgICAgIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSVNldHRpbmcpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnZpZXcuU2tpbGxzLmFkZENsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSVNraWxscyk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudmlldy5TY3JvbGxIZWxwZXIuYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5vcGVuKFVJQ29uZmlnLlVJU2Nyb2xsUGx1cylcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==