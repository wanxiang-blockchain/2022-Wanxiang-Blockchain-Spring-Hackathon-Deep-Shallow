
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce700EVbt5MTrg0Llyxj9zb', 'UIHome');
// Script/UIScript/UIHome.ts

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
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var UIManager_1 = require("../UIFrame/UIManager");
var UIConfig_1 = require("./../UIConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIHome = /** @class */ (function (_super) {
    __extends(UIHome, _super);
    function UIHome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 5;
        return _this;
        // update (dt) {}
    }
    UIHome.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.default.getInstance().openForm(UIConfig_1.default.UISound.prefabUrl)];
                    case 1:
                        _a.sent();
                        ;
                        return [2 /*return*/, null];
                }
            });
        });
    };
    UIHome.prototype.refreshView = function () {
        console.log(this.model);
    };
    UIHome.prototype.start = function () {
        this.view.Start.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIMap);
        }, this);
        this.view.About.addClick(function () {
            FormMgr_1.default.open(UIConfig_1.default.UIAbout);
        }, this);
        this.view.Back.addClick(function () {
            FormMgr_1.default.backScene();
        }, this);
    };
    UIHome = __decorate([
        ccclass
    ], UIHome);
    return UIHome;
}(UIForm_1.UIScreen));
exports.default = UIHome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUF5QztBQUN6Qyw0Q0FBc0Q7QUFDdEQsa0RBQTZDO0FBQzdDLDBDQUFxQztBQUcvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBUTtJQUE1QztRQUFBLHFFQTRCQztRQXBCRyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztRQW1CVixpQkFBaUI7SUFDckIsQ0FBQztJQXpCUyxxQkFBSSxHQUFWOzs7OzRCQUNJLHFCQUFNLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBbEUsU0FBa0UsQ0FBQzt3QkFBQSxDQUFDO3dCQUNwRSxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUdELDRCQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNyQixpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNyQixpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwQixpQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUF6QmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0QjFCO0lBQUQsYUFBQztDQTVCRCxBQTRCQyxDQTVCbUMsaUJBQVEsR0E0QjNDO2tCQTVCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUhvbWVfQXV0byBmcm9tIFwiLi4vQXV0b1NjcmlwdHMvVUlIb21lX0F1dG9cIjtcbmltcG9ydCBGb3JtTWdyIGZyb20gXCIuLi9VSUZyYW1lL0Zvcm1NZ3JcIjtcbmltcG9ydCB7IFVJRml4ZWQsIFVJU2NyZWVuIH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9VSUZyYW1lL1VJTWFuYWdlclwiO1xuaW1wb3J0IFVJQ29uZmlnIGZyb20gXCIuLy4uL1VJQ29uZmlnXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUhvbWUgZXh0ZW5kcyBVSVNjcmVlbiB7XG5cbiAgICBwdWJsaWMgdmlldzogVUlIb21lX0F1dG87XG4gICAgYXN5bmMgbG9hZCgpIHtcbiAgICAgICAgYXdhaXQgVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkub3BlbkZvcm0oVUlDb25maWcuVUlTb3VuZC5wcmVmYWJVcmwpOztcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbW9kZWwgPSA1O1xuICAgIHJlZnJlc2hWaWV3KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGVsKVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy52aWV3LlN0YXJ0LmFkZENsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEZvcm1NZ3Iub3BlbihVSUNvbmZpZy5VSU1hcCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudmlldy5BYm91dC5hZGRDbGljaygoKSA9PiB7XG4gICAgICAgICAgICBGb3JtTWdyLm9wZW4oVUlDb25maWcuVUlBYm91dCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudmlldy5CYWNrLmFkZENsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEZvcm1NZ3IuYmFja1NjZW5lKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=