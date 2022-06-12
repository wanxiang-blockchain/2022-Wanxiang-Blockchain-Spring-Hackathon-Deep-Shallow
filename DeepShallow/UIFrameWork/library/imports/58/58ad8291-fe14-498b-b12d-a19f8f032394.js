"use strict";
cc._RF.push(module, '58ad8KR/hRJi7EtoZ+PAyOU', 'TexturePlus');
// Script/Common/Components/TexturePlus.ts

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
var TextureAssembler_1 = require("../Assemblers/TextureAssembler");
var CommonUtils_1 = require("../Utils/CommonUtils");
var renderEngine = cc.renderer.renderEngine;
var TextureType;
(function (TextureType) {
    TextureType[TextureType["Cut"] = 0] = "Cut";
    TextureType[TextureType["Stretch"] = 1] = "Stretch"; // 拉伸, 暂未实现
})(TextureType || (TextureType = {}));
var _vec2_temp = new cc.Vec2();
var _mat4_temp = new cc.Mat4();
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, executeInEditMode = _a.executeInEditMode, mixins = _a.mixins, property = _a.property;
var TexturePlus = /** @class */ (function (_super) {
    __extends(TexturePlus, _super);
    function TexturePlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._texture = null;
        // _type: TextureType = 0;
        // @property({type: cc.Enum(TextureType), serializable: true})
        // get type() {
        //     return this._type;
        // }
        // set type(val: TextureType) {
        //     this._type = val;
        //     this.setVertsDirty();
        // }
        _this._polygon = [];
        _this.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
        _this.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA;
        _this.editing = false;
        _this._assembler = null;
        return _this;
    }
    Object.defineProperty(TexturePlus.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        set: function (val) {
            this._texture = val;
            var l = -val.width / 2, b = -val.height / 2, t = val.height / 2, r = val.width / 2;
            this.polygon = [cc.v2(l, b), cc.v2(r, b), cc.v2(r, t), cc.v2(l, t)];
            this.node.width = val.width;
            this.node.height = val.height;
            this._updateMaterial();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TexturePlus.prototype, "polygon", {
        get: function () {
            return this._polygon;
        },
        set: function (points) {
            this._polygon = points;
            this._updateVerts();
        },
        enumerable: false,
        configurable: true
    });
    TexturePlus.prototype.onLoad = function () {
        this.node['_hitTest'] = this._hitTest.bind(this);
    };
    TexturePlus.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            console.log("click texture plus");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            _this.node.x += e.getDeltaX();
            _this.node.y += e.getDeltaY();
        }, this);
    };
    TexturePlus.prototype._updateVerts = function () {
        this.setVertsDirty();
    };
    TexturePlus.prototype._updateMaterial = function () {
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
    TexturePlus.prototype._validateRender = function () {
    };
    TexturePlus.prototype._resetAssembler = function () {
        var assembler = this._assembler = new TextureAssembler_1.default();
        assembler.init(this);
        this._updateColor();
        this.setVertsDirty();
    };
    TexturePlus.prototype._hitTest = function (cameraPt) {
        var node = this.node;
        var size = node.getContentSize(), w = size.width, h = size.height, testPt = _vec2_temp;
        node['_updateWorldMatrix']();
        // If scale is 0, it can't be hit.
        if (!cc.Mat4.invert(_mat4_temp, node['_worldMatrix'])) {
            return false;
        }
        cc.Vec2.transformMat4(testPt, cameraPt, _mat4_temp);
        return CommonUtils_1.CommonUtils.isInPolygon(testPt, this.polygon);
    };
    TexturePlus.Type = TextureType;
    __decorate([
        property(cc.Texture2D)
    ], TexturePlus.prototype, "_texture", void 0);
    __decorate([
        property(cc.Texture2D)
    ], TexturePlus.prototype, "texture", null);
    __decorate([
        property({ type: [cc.Vec2], serializable: true })
    ], TexturePlus.prototype, "_polygon", void 0);
    __decorate([
        property({ type: [cc.Vec2], serializable: true })
    ], TexturePlus.prototype, "polygon", null);
    __decorate([
        property({ type: cc.Enum(cc.macro.BlendFactor), override: true })
    ], TexturePlus.prototype, "srcBlendFactor", void 0);
    __decorate([
        property({ type: cc.Enum(cc.macro.BlendFactor), override: true })
    ], TexturePlus.prototype, "dstBlendFactor", void 0);
    __decorate([
        property(cc.Boolean)
    ], TexturePlus.prototype, "editing", void 0);
    TexturePlus = __decorate([
        ccclass,
        executeInEditMode,
        menu('i18n:MAIN_MENU.component.ui/TexturePlus'),
        mixins(cc.BlendFunc)
    ], TexturePlus);
    return TexturePlus;
}(cc.RenderComponent));
exports.default = TexturePlus;

cc._RF.pop();