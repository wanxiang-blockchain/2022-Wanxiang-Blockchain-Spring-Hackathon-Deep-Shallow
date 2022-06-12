
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/MeshTexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1acd7QWgaNGAIz6Mkh6ICTD', 'MeshTexture');
// Script/Common/Components/MeshTexture.ts

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
var MeshAssembler_1 = require("../Assemblers/MeshAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, executeInEditMode = _a.executeInEditMode, mixins = _a.mixins, property = _a.property;
var MeshTexture = /** @class */ (function (_super) {
    __extends(MeshTexture, _super);
    function MeshTexture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._texture = null;
        _this.step = 10;
        _this.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
        _this.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA;
        _this._assembler = null;
        return _this;
    }
    Object.defineProperty(MeshTexture.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        set: function (val) {
            this._texture = val;
            this.node.width = val.width;
            this.node.height = val.height;
            this._updateMaterial();
        },
        enumerable: false,
        configurable: true
    });
    MeshTexture.prototype._updateVerts = function () {
        this.setVertsDirty();
    };
    MeshTexture.prototype._updateMaterial = function () {
        var texture = this._texture;
        var material = this.getMaterial(0);
        if (material) {
            if (material.getDefine("USE_TEXTURE") !== undefined) {
                material.define("USE_TEXTURE", true);
            }
            material.setProperty("texture", texture);
        }
        this['__proto__']._updateBlendFunc.call(this);
        this.setVertsDirty();
    };
    MeshTexture.prototype._validateRender = function () {
    };
    MeshTexture.prototype._resetAssembler = function () {
        var assembler = this._assembler = window["textureAssember"] = new MeshAssembler_1.default();
        assembler.init(this);
        this._updateColor();
        this.setVertsDirty();
    };
    MeshTexture.prototype.getPolygonCenter = function (polygon) {
        var x = 0, y = 0;
        for (var i = 0; i < polygon.length; i++) {
            x += polygon[i].x;
            y += polygon[i].y;
        }
        x = x / polygon.length;
        y = y / polygon.length;
        return cc.v2(x, y);
    };
    MeshTexture.prototype.tweenVec2 = function (from, to, duration, onUpdate, onComplete, delay) {
        if (delay === void 0) { delay = 0; }
        var o = { _value: from };
        Object.defineProperty(o, 'position', {
            get: function () { return o._value; },
            set: function (v) { o._value = v; onUpdate && onUpdate(o._value); },
        });
        var tween = cc.tween(o).delay(delay).to(duration, { position: to }).call(onComplete);
        tween.start();
        return tween;
    };
    MeshTexture.prototype.tweenVec2Bezier = function (from, to, duration, onUpdate, onComplete, delay) {
        if (delay === void 0) { delay = 0; }
        var o = { _value: from };
        Object.defineProperty(o, 'position', {
            get: function () { return o._value; },
            set: function (v) { o._value = v; onUpdate && onUpdate(o._value); },
        });
        // let tween = cc.tween(o).delay(delay).to(duration, { position: to }).call(onComplete);
        var tween = cc.tween(o).delay(delay).bezierTo(duration, cc.v2(from.x, from.y + 100), cc.v2(to.x, to.y + 100), to).call(onComplete);
        tween.start();
        return tween;
    };
    MeshTexture.prototype.doScaleEffect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var rectCount = _this._assembler.getRectCount();
            var pos = _this.node.convertToWorldSpaceAR(cc.v2(0, 0));
            var _loop_1 = function (i) {
                var arr = _this._assembler.getRect(i);
                var center = _this.getPolygonCenter(arr);
                var dir = center.sub(pos).normalize();
                _this.tweenVec2(cc.v2(0, 0), dir.mul(1.5), 0.3, function (dt) {
                    _this._assembler.setRect(i, [
                        arr[0].addSelf(dt),
                        arr[1].addSelf(dt),
                        arr[2].addSelf(dt),
                        arr[3].addSelf(dt)
                    ]);
                }, function () {
                    if (i == rectCount - 1)
                        resolve(true);
                });
            };
            for (var i = 0; i < rectCount; i++) {
                _loop_1(i);
            }
        });
    };
    MeshTexture.prototype.doTextureMove = function (e, data) {
        return __awaiter(this, void 0, void 0, function () {
            var dir, rectCount, pos, _loop_2, this_1, i;
            var _this = this;
            return __generator(this, function (_a) {
                dir = cc.v2(-1, 0);
                if (data == 'right') {
                    dir = cc.v2(1, 0);
                }
                rectCount = this._assembler.getRectCount();
                pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                _loop_2 = function (i) {
                    var idx = rectCount - i - 1;
                    var arr = this_1._assembler.getRect(idx);
                    var targetPos = dir.mul(400);
                    this_1.tweenVec2Bezier(cc.v2(0, 0), targetPos, 1, function (dt) {
                        _this._assembler.setRect(idx, [
                            arr[0].add(dt),
                            arr[1].add(dt),
                            arr[2].add(dt),
                            arr[3].add(dt),
                        ]);
                    }, function () {
                        _this._assembler.setRect(idx, [
                            arr[0].add(targetPos),
                            arr[1].add(targetPos),
                            arr[2].add(targetPos),
                            arr[3].add(targetPos),
                        ]);
                    }, Math.floor(i / 40) * 0.1);
                };
                this_1 = this;
                for (i = 0; i < rectCount; i++) {
                    _loop_2(i);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Texture2D)
    ], MeshTexture.prototype, "_texture", void 0);
    __decorate([
        property(cc.Texture2D)
    ], MeshTexture.prototype, "texture", null);
    __decorate([
        property({ displayName: "步长" })
    ], MeshTexture.prototype, "step", void 0);
    __decorate([
        property({ type: cc.Enum(cc.macro.BlendFactor), override: true })
    ], MeshTexture.prototype, "srcBlendFactor", void 0);
    __decorate([
        property({ type: cc.Enum(cc.macro.BlendFactor), override: true })
    ], MeshTexture.prototype, "dstBlendFactor", void 0);
    MeshTexture = __decorate([
        ccclass,
        executeInEditMode,
        menu('i18n:MAIN_MENU.component.ui/MeshTexture'),
        mixins(cc.BlendFunc)
    ], MeshTexture);
    return MeshTexture;
}(cc.RenderComponent));
exports.default = MeshTexture;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvTWVzaFRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTBEO0FBRXBELElBQUEsS0FBdUQsRUFBRSxDQUFDLFVBQVUsRUFBbkUsT0FBTyxhQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBTTNFO0lBQXlDLCtCQUFrQjtJQUEzRDtRQUFBLHFFQWlKQztRQTlJRyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQVk5QixVQUFJLEdBQUcsRUFBRSxDQUFDO1FBR1Ysb0JBQWMsR0FBeUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBR3RFLG9CQUFjLEdBQXlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO1FBdUJ6RSxnQkFBVSxHQUFvQixJQUFJLENBQUM7O0lBcUc5QyxDQUFDO0lBNUlHLHNCQUFJLGdDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksR0FBaUI7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUxBO0lBZ0JPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxxQ0FBZSxHQUF0QjtR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d0MsRUFBRSxDQUFDLGVBQWUsR0FpSjFEO2tCQWpKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JvbGxBc3NlbWJsZXIgZnJvbSBcIi4uL0Fzc2VtYmxlcnMvTWVzaEFzc2VtYmxlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgbWVudSwgZXhlY3V0ZUluRWRpdE1vZGUsIG1peGlucywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQG1lbnUoJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC51aS9NZXNoVGV4dHVyZScpXG5AbWl4aW5zKGNjLkJsZW5kRnVuYylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc2hUZXh0dXJlIGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5UZXh0dXJlMkQpXG4gICAgX3RleHR1cmU6IGNjLlRleHR1cmUyRCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcbiAgICBnZXQgdGV4dHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gICAgfVxuICAgIHNldCB0ZXh0dXJlKHZhbDogY2MuVGV4dHVyZTJEKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSB2YWw7XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHZhbC53aWR0aDsgdGhpcy5ub2RlLmhlaWdodCA9IHZhbC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1hdGVyaWFsKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHtkaXNwbGF5TmFtZTogXCLmraXplb9cIn0pXG4gICAgc3RlcCA9IDEwO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKGNjLm1hY3JvLkJsZW5kRmFjdG9yKSwgb3ZlcnJpZGU6IHRydWV9KVxuICAgIHNyY0JsZW5kRmFjdG9yOiBjYy5tYWNyby5CbGVuZEZhY3RvciA9IGNjLm1hY3JvLkJsZW5kRmFjdG9yLlNSQ19BTFBIQTtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRW51bShjYy5tYWNyby5CbGVuZEZhY3RvciksIG92ZXJyaWRlOiB0cnVlfSlcbiAgICBkc3RCbGVuZEZhY3RvcjogY2MubWFjcm8uQmxlbmRGYWN0b3IgPSBjYy5tYWNyby5CbGVuZEZhY3Rvci5PTkVfTUlOVVNfU1JDX0FMUEhBO1xuXG4gICAgcHJpdmF0ZSBfdXBkYXRlVmVydHMoKSB7XG4gICAgICAgIHRoaXMuc2V0VmVydHNEaXJ0eSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfdXBkYXRlTWF0ZXJpYWwoKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5fdGV4dHVyZTtcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gdGhpcy5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgaWYobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIGlmKG1hdGVyaWFsLmdldERlZmluZShcIlVTRV9URVhUVVJFXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kZWZpbmUoXCJVU0VfVEVYVFVSRVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwidGV4dHVyZVwiLCB0ZXh0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzWydfX3Byb3RvX18nXS5fdXBkYXRlQmxlbmRGdW5jLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0VmVydHNEaXJ0eSgpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIF92YWxpZGF0ZVJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIF9hc3NlbWJsZXI6IFNjcm9sbEFzc2VtYmxlciA9IG51bGw7XG4gICAgcHVibGljIF9yZXNldEFzc2VtYmxlcigpIHtcbiAgICAgICAgbGV0IGFzc2VtYmxlciA9IHRoaXMuX2Fzc2VtYmxlciA9IHdpbmRvd1tcInRleHR1cmVBc3NlbWJlclwiXSA9IG5ldyBTY3JvbGxBc3NlbWJsZXIoKTtcbiAgICAgICAgYXNzZW1ibGVyLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XG4gICAgICAgIHRoaXMuc2V0VmVydHNEaXJ0eSgpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXRQb2x5Z29uQ2VudGVyKHBvbHlnb246IGNjLlZlYzJbXSkge1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwb2x5Z29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4ICs9IHBvbHlnb25baV0ueDtcbiAgICAgICAgICAgIHkgKz0gcG9seWdvbltpXS55O1xuICAgICAgICB9XG4gICAgICAgIHggPSB4L3BvbHlnb24ubGVuZ3RoO1xuICAgICAgICB5ID0geS9wb2x5Z29uLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpXG4gICAgfVxuXG4gICAgcHVibGljIHR3ZWVuVmVjMihmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMiwgZHVyYXRpb246IG51bWJlciwgb25VcGRhdGU6ICh0OiBjYy5WZWMyKSA9PiB2b2lkLCBvbkNvbXBsZXRlPzogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCBvOiBSZWNvcmQ8c3RyaW5nLCBjYy5WZWMyPiA9IHtfdmFsdWU6IGZyb219O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ3Bvc2l0aW9uJywge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBvLl92YWx1ZSxcbiAgICAgICAgICAgIHNldDogKHY6IGNjLlZlYzIpID0+IHsgby5fdmFsdWUgPSB2OyBvblVwZGF0ZSAmJiBvblVwZGF0ZShvLl92YWx1ZSk7IH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdHdlZW4gPSBjYy50d2VlbihvKS5kZWxheShkZWxheSkudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IHRvIH0pLmNhbGwob25Db21wbGV0ZSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0d2VlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHdlZW5WZWMyQmV6aWVyKGZyb206IGNjLlZlYzIsIHRvOiBjYy5WZWMyLCBkdXJhdGlvbjogbnVtYmVyLCBvblVwZGF0ZTogKHQ6IGNjLlZlYzIpID0+IHZvaWQsIG9uQ29tcGxldGU/OiBGdW5jdGlvbiwgZGVsYXk6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IG86IFJlY29yZDxzdHJpbmcsIGNjLlZlYzI+ID0ge192YWx1ZTogZnJvbX07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCAncG9zaXRpb24nLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IG8uX3ZhbHVlLFxuICAgICAgICAgICAgc2V0OiAodjogY2MuVmVjMikgPT4geyBvLl92YWx1ZSA9IHY7IG9uVXBkYXRlICYmIG9uVXBkYXRlKG8uX3ZhbHVlKTsgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGxldCB0d2VlbiA9IGNjLnR3ZWVuKG8pLmRlbGF5KGRlbGF5KS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogdG8gfSkuY2FsbChvbkNvbXBsZXRlKTtcbiAgICAgICAgbGV0IHR3ZWVuID0gY2MudHdlZW4obykuZGVsYXkoZGVsYXkpLmJlemllclRvKGR1cmF0aW9uLCBjYy52Mihmcm9tLngsIGZyb20ueSsxMDApLCBjYy52Mih0by54LCB0by55ICsgMTAwKSwgdG8pLmNhbGwob25Db21wbGV0ZSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0d2VlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZG9TY2FsZUVmZmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCByZWN0Q291bnQgPSB0aGlzLl9hc3NlbWJsZXIuZ2V0UmVjdENvdW50KCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxyZWN0Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLl9hc3NlbWJsZXIuZ2V0UmVjdChpKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5nZXRQb2x5Z29uQ2VudGVyKGFycik7XG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IGNlbnRlci5zdWIocG9zKS5ub3JtYWxpemUoKTtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuVmVjMihjYy52MigwLCAwKSwgZGlyLm11bCgxLjUpLCAwLjMsIChkdDogY2MuVmVjMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NlbWJsZXIuc2V0UmVjdChpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbMF0uYWRkU2VsZihkdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbMV0uYWRkU2VsZihkdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbMl0uYWRkU2VsZihkdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbM10uYWRkU2VsZihkdClcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpID09IHJlY3RDb3VudC0xKSByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZG9UZXh0dXJlTW92ZShlLCBkYXRhKSB7XG4gICAgICAgIGxldCBkaXIgPSBjYy52MigtMSwgMCk7XG4gICAgICAgIGlmKGRhdGEgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgZGlyID0gY2MudjIoMSwgMClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHJlY3RDb3VudCA9IHRoaXMuX2Fzc2VtYmxlci5nZXRSZWN0Q291bnQoKTtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHJlY3RDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gcmVjdENvdW50IC0gaSAtMTtcbiAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLl9hc3NlbWJsZXIuZ2V0UmVjdChpZHgpO1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gZGlyLm11bCg0MDApO1xuICAgICAgICAgICAgdGhpcy50d2VlblZlYzJCZXppZXIoY2MudjIoMCwgMCksIHRhcmdldFBvcywgMSwgKGR0OiBjYy5WZWMyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZW1ibGVyLnNldFJlY3QoaWR4LCBbXG4gICAgICAgICAgICAgICAgICAgIGFyclswXS5hZGQoZHQpLFxuICAgICAgICAgICAgICAgICAgICBhcnJbMV0uYWRkKGR0KSxcbiAgICAgICAgICAgICAgICAgICAgYXJyWzJdLmFkZChkdCksXG4gICAgICAgICAgICAgICAgICAgIGFyclszXS5hZGQoZHQpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2VtYmxlci5zZXRSZWN0KGlkeCwgW1xuICAgICAgICAgICAgICAgICAgICBhcnJbMF0uYWRkKHRhcmdldFBvcyksXG4gICAgICAgICAgICAgICAgICAgIGFyclsxXS5hZGQodGFyZ2V0UG9zKSxcbiAgICAgICAgICAgICAgICAgICAgYXJyWzJdLmFkZCh0YXJnZXRQb3MpLFxuICAgICAgICAgICAgICAgICAgICBhcnJbM10uYWRkKHRhcmdldFBvcyksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9LCBNYXRoLmZsb29yKGkvNDApICogMC4xKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iXX0=