
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UILoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2580cHflTxBzYtR5gDT9n2h', 'UILoading');
// Script/UIScript/UILoading.ts

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
var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
var CocosHelper_1 = require("../UIFrame/CocosHelper");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILoading = /** @class */ (function (_super) {
    __extends(UILoading, _super);
    function UILoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    UILoading.prototype.start = function () {
    };
    UILoading.prototype.showEffect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        len = AdapterMgr_1.default.inst.visibleSize.width / 2 + this.view.Left.width / 2;
                        this.view.Left.x = -len;
                        this.view.Right.x = len;
                        return [4 /*yield*/, Promise.all([
                                CocosHelper_1.default.runTweenSync(this.view.Left, cc.tween().to(0.3, { x: -480 }, cc.easeIn(3.0))),
                                CocosHelper_1.default.runTweenSync(this.view.Right, cc.tween().to(0.3, { x: 480 }, cc.easeIn(3.0)))
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UILoading.prototype.hideEffect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        len = AdapterMgr_1.default.inst.visibleSize.width / 2 + this.view.Left.width / 2;
                        this.view.Left.x = -480;
                        this.view.Right.x = 480;
                        return [4 /*yield*/, CocosHelper_1.default.sleepSync(0.5)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Promise.all([
                                CocosHelper_1.default.runTweenSync(this.view.Left, cc.tween().to(0.3, { x: -len }, cc.easeIn(3.0))),
                                CocosHelper_1.default.runTweenSync(this.view.Right, cc.tween().to(0.3, { x: len }, cc.easeIn(3.0)))
                            ])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UILoading = __decorate([
        ccclass
    ], UILoading);
    return UILoading;
}(UIForm_1.UITips));
exports.default = UILoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUErQztBQUMvQyxzREFBaUQ7QUFDakQsNENBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBQTdDOztJQWtDQSxDQUFDO0lBOUJHLGVBQWU7SUFFZix5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVLLDhCQUFVLEdBQWhCOzs7Ozs7d0JBQ1EsR0FBRyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFFeEIscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztnQ0FDZCxxQkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDdkYscUJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUMxRixDQUFDLEVBQUE7O3dCQUhGLFNBR0UsQ0FBQzs7Ozs7S0FDTjtJQUVLLDhCQUFVLEdBQWhCOzs7Ozs7d0JBQ1EsR0FBRyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFFeEIscUJBQU0scUJBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDO3dCQUNqQyxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dDQUNkLHFCQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUN2RixxQkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkJBQzFGLENBQUMsRUFBQTs7d0JBSEYsU0FHRSxDQUFDOzs7OztLQUNOO0lBL0JnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBa0M3QjtJQUFELGdCQUFDO0NBbENELEFBa0NDLENBbENzQyxlQUFNLEdBa0M1QztrQkFsQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlMb2FkaW5nX0F1dG8gZnJvbSBcIi4uL0F1dG9TY3JpcHRzL1VJTG9hZGluZ19BdXRvXCI7XG5pbXBvcnQgQWRhcHRlck1nciBmcm9tIFwiLi4vVUlGcmFtZS9BZGFwdGVyTWdyXCI7XG5pbXBvcnQgQ29jb3NIZWxwZXIgZnJvbSBcIi4uL1VJRnJhbWUvQ29jb3NIZWxwZXJcIjtcbmltcG9ydCB7IFVJVGlwcyB9IGZyb20gXCIuLi9VSUZyYW1lL1VJRm9ybVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTG9hZGluZyBleHRlbmRzIFVJVGlwcyB7XG4gICAgXG4gICAgdmlldzogVUlMb2FkaW5nX0F1dG87XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIGFzeW5jIHNob3dFZmZlY3QoKSB7XG4gICAgICAgIGxldCBsZW4gPSBBZGFwdGVyTWdyLmluc3QudmlzaWJsZVNpemUud2lkdGgvMiArIHRoaXMudmlldy5MZWZ0LndpZHRoLzI7XG4gICAgICAgIHRoaXMudmlldy5MZWZ0LnggPSAtbGVuO1xuICAgICAgICB0aGlzLnZpZXcuUmlnaHQueCA9IGxlbjtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBDb2Nvc0hlbHBlci5ydW5Ud2VlblN5bmModGhpcy52aWV3LkxlZnQsIGNjLnR3ZWVuKCkudG8oMC4zLCB7eDogLTQ4MH0sIGNjLmVhc2VJbigzLjApKSksXG4gICAgICAgICAgICBDb2Nvc0hlbHBlci5ydW5Ud2VlblN5bmModGhpcy52aWV3LlJpZ2h0LCBjYy50d2VlbigpLnRvKDAuMywge3g6IDQ4MH0sIGNjLmVhc2VJbigzLjApKSlcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGlkZUVmZmVjdCgpIHtcbiAgICAgICAgbGV0IGxlbiA9IEFkYXB0ZXJNZ3IuaW5zdC52aXNpYmxlU2l6ZS53aWR0aC8yICsgdGhpcy52aWV3LkxlZnQud2lkdGgvMjtcbiAgICAgICAgdGhpcy52aWV3LkxlZnQueCA9IC00ODA7XG4gICAgICAgIHRoaXMudmlldy5SaWdodC54ID0gNDgwO1xuXG4gICAgICAgIGF3YWl0IENvY29zSGVscGVyLnNsZWVwU3luYygwLjUpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBDb2Nvc0hlbHBlci5ydW5Ud2VlblN5bmModGhpcy52aWV3LkxlZnQsIGNjLnR3ZWVuKCkudG8oMC4zLCB7eDogLWxlbn0sIGNjLmVhc2VJbigzLjApKSksXG4gICAgICAgICAgICBDb2Nvc0hlbHBlci5ydW5Ud2VlblN5bmModGhpcy52aWV3LlJpZ2h0LCBjYy50d2VlbigpLnRvKDAuMywge3g6IGxlbn0sIGNjLmVhc2VJbigzLjApKSlcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==