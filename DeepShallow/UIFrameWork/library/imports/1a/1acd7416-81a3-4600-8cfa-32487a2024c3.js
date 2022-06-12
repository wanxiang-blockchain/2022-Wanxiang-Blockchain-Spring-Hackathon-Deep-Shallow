"use strict";
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