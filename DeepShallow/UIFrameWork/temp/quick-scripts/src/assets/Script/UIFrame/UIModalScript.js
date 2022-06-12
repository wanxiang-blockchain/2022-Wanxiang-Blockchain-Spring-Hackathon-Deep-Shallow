"use strict";
cc._RF.push(module, 'a6a5a+wskdJZJdS5tPl1qBP', 'UIModalScript');
// Script/UIFrame/UIModalScript.ts

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
var UIManager_1 = require("./UIManager");
var SysDefine_1 = require("./config/SysDefine");
var CocosHelper_1 = require("./CocosHelper");
var WindowMgr_1 = require("./WindowMgr");
var BAN_FALG = (cc.RenderFlow.FLAG_RENDER | cc.RenderFlow.FLAG_POST_RENDER);
/**
 * @Author: 邓朗
 * @Describe:
 * @Date: 2019-05-30 23:35:26
 * @Last Modified time: 2019-05-30 23:35:26
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIModalScript = /** @class */ (function (_super) {
    __extends(UIModalScript, _super);
    function UIModalScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.camera = null;
        /** 代码创建一个单色texture */
        _this._texture = null;
        _this._renderTexture = null;
        _this._renderTextures = [];
        return _this;
    }
    /**
     * 初始化
     */
    UIModalScript.prototype.init = function () {
        var size = cc.view.getVisibleSize();
        this.node.height = size.height;
        this.node.width = size.width;
        this.node.addComponent(cc.Button);
        this.node.on('click', this.clickMaskWindow, this);
        this.sprite = this.node.addComponent(cc.Sprite);
        this.useNormalSprite(this.sprite);
        this.node.color = new cc.Color(255, 255, 255);
        this.node.opacity = 0;
        this.node.active = false;
        var node = new cc.Node("BlurCamera");
        this.camera = node.addComponent(cc.Camera);
        cc.find('Canvas').addChild(node);
    };
    // 
    UIModalScript.prototype.showModal = function (lucenyType, time, isEasing, dualBlur) {
        if (time === void 0) { time = 0.6; }
        if (isEasing === void 0) { isEasing = true; }
        if (dualBlur === void 0) { dualBlur = false; }
        return __awaiter(this, void 0, void 0, function () {
            var o;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (dualBlur) {
                            this.useDualBlurSprite(this.camera);
                            this.node.color = cc.Color.WHITE;
                        }
                        else {
                            this.useNormalSprite(this.sprite);
                            this.node.color = cc.Color.BLACK;
                        }
                        o = 0;
                        switch (lucenyType) {
                            case SysDefine_1.ModalOpacity.None:
                                this.node.active = false;
                                break;
                            case SysDefine_1.ModalOpacity.OpacityZero:
                                o = 0;
                                break;
                            case SysDefine_1.ModalOpacity.OpacityLow:
                                o = 63;
                                break;
                            case SysDefine_1.ModalOpacity.OpacityHalf:
                                o = 126;
                                break;
                            case SysDefine_1.ModalOpacity.OpacityHigh:
                                o = 189;
                                break;
                            case SysDefine_1.ModalOpacity.OpacityFull:
                                o = 255;
                                break;
                        }
                        if (!this.node.active)
                            return [2 /*return*/];
                        if (!isEasing) return [3 /*break*/, 2];
                        return [4 /*yield*/, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(time, { opacity: o }))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.node.opacity = o;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UIModalScript.prototype.clickMaskWindow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var com;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        com = UIManager_1.default.getInstance().getForm(this.fid);
                        if (!(com && com.modalType.clickMaskClose)) return [3 /*break*/, 2];
                        return [4 /*yield*/, WindowMgr_1.default.close(this.fid)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UIModalScript.prototype.getSingleTexture = function () {
        if (this._texture)
            return this._texture;
        var data = new Uint8Array(2 * 2 * 4);
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                data[i * 2 * 4 + j * 4 + 0] = 255;
                data[i * 2 * 4 + j * 4 + 1] = 255;
                data[i * 2 * 4 + j * 4 + 2] = 255;
                data[i * 2 * 4 + j * 4 + 3] = 255;
            }
        }
        var texture = new cc.Texture2D();
        texture.name = 'single color';
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, 2, 2);
        texture.handleLoadedTexture();
        this._texture = texture;
        texture.addRef();
        return this._texture;
    };
    UIModalScript.prototype.useNormalSprite = function (sprite) {
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.type = cc.Sprite.Type.SIMPLE;
        sprite.spriteFrame = new cc.SpriteFrame(this.getSingleTexture());
    };
    UIModalScript.prototype.useDualBlurSprite = function (camera) {
        var _this = this;
        var dirtyNodes = [];
        var disRenderChildren = function () {
            // 不渲染tips
            var tips = UIManager_1.default.getInstance().getUIROOT().getChildByName(SysDefine_1.SysDefine.SYS_TOPTIPS_NODE).children;
            for (var _i = 0, tips_1 = tips; _i < tips_1.length; _i++) {
                var node = tips_1[_i];
                if (!node._activeInHierarchy || node.opacity == 0)
                    continue;
                node['_dirtyRenderFlag'] = node._renderFlag;
                node._renderFlag &= ~(cc.RenderFlow.FLAG_CHILDREN | cc.RenderFlow.FLAG_RENDER);
                dirtyNodes.push(node);
            }
            // 不渲染自己和最上层的window
            _this.node._renderFlag &= ~cc.RenderFlow.FLAG_RENDER;
            var windows = UIManager_1.default.getInstance().getUIROOT().getChildByName(SysDefine_1.SysDefine.SYS_POPUP_NODE).children;
            for (var i = windows.length - 1; i >= 0; i--) {
                if (windows[i].zIndex > _this.node.zIndex) {
                    var node = windows[i];
                    if (!node._activeInHierarchy || node.opacity == 0)
                        continue;
                    node['_dirtyRenderFlag'] = node._renderFlag;
                    node._renderFlag &= ~(cc.RenderFlow.FLAG_CHILDREN | cc.RenderFlow.FLAG_RENDER);
                    dirtyNodes.push(node);
                }
            }
        };
        var rerenderChildren = function () {
            for (var _i = 0, dirtyNodes_1 = dirtyNodes; _i < dirtyNodes_1.length; _i++) {
                var node = dirtyNodes_1[_i];
                node._renderFlag = node['_dirtyRenderFlag'];
            }
        };
        if (!this._renderTexture) {
            var renderTexture = this._renderTexture = new cc.RenderTexture();
            renderTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.game._renderContext.STENCIL_INDEX8);
        }
        camera.enabled = true;
        camera.targetTexture = this._renderTexture;
        disRenderChildren();
        camera.render();
        rerenderChildren();
        this.sprite.spriteFrame.setTexture(camera.targetTexture);
        this.sprite.markForRender(true);
        this.renderDualBlur(camera, 3);
        camera.enabled = false;
    };
    UIModalScript.prototype.renderDualBlur = function (camera, iterations) {
        var size = cc.view.getVisibleSize();
        if (this._renderTextures.length <= 0) {
            for (var i = 0; i < iterations; i++) {
                var r = Math.pow(2, i);
                var renderTexture = new cc.RenderTexture();
                renderTexture.initWithSize((cc.visibleRect.width / r) | 0, (cc.visibleRect.height / r) | 0);
                this._renderTextures.push(renderTexture);
            }
        }
        if (!MaterialDown) {
            MaterialDown = this.genMaterial(EFFECT_DOWN);
            MaterialDown.setProperty('v_halfpixel', [0.5 / size.width, 0.5 / size.height]);
            MaterialDown.setProperty('v_offset', [4, 4]);
        }
        this.sprite.setMaterial(0, MaterialDown);
        for (var i = 0; i < iterations; i++) {
            camera.targetTexture = this._renderTextures[i];
            camera.render(this.sprite.node);
            this.sprite.spriteFrame.setTexture(camera.targetTexture);
            this.sprite.markForRender(true);
        }
        if (!MaterialUp) {
            MaterialUp = this.genMaterial(EFFECT_UP);
            MaterialUp.setProperty('v_halfpixel', [0.5 / size.width, 0.5 / size.height]);
            MaterialUp.setProperty('v_offset', [4, 4]);
        }
        this.sprite.setMaterial(0, MaterialUp);
        for (var i = iterations - 1; i > 0; i--) {
            camera.targetTexture = this._renderTextures[i - 1];
            camera.render(this.sprite.node);
            this.sprite.spriteFrame.setTexture(camera.targetTexture);
            this.sprite.markForRender(true);
        }
        this.sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-sprite'));
    };
    UIModalScript.prototype.genMaterial = function (effect) {
        //@ts-ignore
        var asset = cc.deserialize(effect, { priority: 0, responseType: "json" });
        asset.onLoad && asset.onLoad();
        asset.__onLoadInvoked__ = true;
        return cc.Material.create(asset, 0);
    };
    UIModalScript = __decorate([
        ccclass
    ], UIModalScript);
    return UIModalScript;
}(cc.Component));
exports.default = UIModalScript;
var MaterialDown = null;
var MaterialUp = null;
var EFFECT_UP = {
    "__type__": "cc.EffectAsset",
    "_name": "BlurUp",
    "_objFlags": 0,
    "_native": "",
    "properties": null,
    "techniques": [
        {
            "passes": [
                {
                    "blendState": {
                        "targets": [
                            {
                                "blend": true
                            }
                        ]
                    },
                    "rasterizerState": {
                        "cullMode": 0
                    },
                    "properties": {
                        "texture": {
                            "value": "white",
                            "type": 29
                        },
                        "alphaThreshold": {
                            "value": [
                                0.5
                            ],
                            "type": 13
                        }
                    },
                    "program": "BlurUp|vs|fs"
                }
            ]
        }
    ],
    "shaders": [
        {
            "hash": 3005313742,
            "glsl3": {
                "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\n#if USE_TEXTURE\nin vec2 a_uv0;\nout vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
                "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nin vec4 v_color;\n#if USE_TEXTURE\nin vec2 v_uv0;\nuniform sampler2D texture;\n#endif\nuniform CustomUniform {\n  vec2 v_halfpixel;\n  vec2 v_offset;\n};\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n  vec4 sum = texture2D(texture, v_uv0) * 4.0;\n  sum += texture2D(texture, v_uv0 - v_halfpixel.xy * v_offset);\n  sum += texture2D(texture, v_uv0 + v_halfpixel.xy * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x, -v_halfpixel.y) * v_offset);\n  sum += texture2D(texture, v_uv0 - vec2(v_halfpixel.x, -v_halfpixel.y) * v_offset);\n  o = sum / 8.0;\n  o *= v_color;\n  ALPHA_TEST(o);\n  #if USE_BGRA\n    gl_FragColor = o.bgra;\n  #else\n    gl_FragColor = o.rgba;\n  #endif\n}"
            },
            "glsl1": {
                "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\n#if USE_TEXTURE\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
                "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvarying vec4 v_color;\n#if USE_TEXTURE\nvarying vec2 v_uv0;\nuniform sampler2D texture;\n#endif\nuniform vec2 v_halfpixel;\nuniform vec2 v_offset;\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n  vec4 sum = texture2D(texture, v_uv0) * 4.0;\n  sum += texture2D(texture, v_uv0 - v_halfpixel.xy * v_offset);\n  sum += texture2D(texture, v_uv0 + v_halfpixel.xy * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x, -v_halfpixel.y) * v_offset);\n  sum += texture2D(texture, v_uv0 - vec2(v_halfpixel.x, -v_halfpixel.y) * v_offset);\n  o = sum / 8.0;\n  o *= v_color;\n  ALPHA_TEST(o);\n  #if USE_BGRA\n    gl_FragColor = o.bgra;\n  #else\n    gl_FragColor = o.rgba;\n  #endif\n}"
            },
            "builtins": {
                "globals": {
                    "blocks": [
                        {
                            "name": "CCGlobal",
                            "defines": []
                        }
                    ],
                    "samplers": []
                },
                "locals": {
                    "blocks": [
                        {
                            "name": "CCLocal",
                            "defines": []
                        }
                    ],
                    "samplers": []
                }
            },
            "defines": [
                {
                    "name": "USE_TEXTURE",
                    "type": "boolean",
                    "defines": []
                },
                {
                    "name": "CC_USE_MODEL",
                    "type": "boolean",
                    "defines": []
                },
                {
                    "name": "USE_ALPHA_TEST",
                    "type": "boolean",
                    "defines": []
                },
                {
                    "name": "USE_BGRA",
                    "type": "boolean",
                    "defines": []
                }
            ],
            "blocks": [
                {
                    "name": "ALPHA_TEST",
                    "members": [
                        {
                            "name": "alphaThreshold",
                            "type": 13,
                            "count": 1
                        }
                    ],
                    "defines": [
                        "USE_ALPHA_TEST"
                    ],
                    "binding": 0
                },
                {
                    "name": "CustomUniform",
                    "members": [
                        {
                            "name": "v_halfpixel",
                            "type": 14,
                            "count": 1
                        },
                        {
                            "name": "v_offset",
                            "type": 14,
                            "count": 1
                        }
                    ],
                    "defines": [],
                    "binding": 1
                }
            ],
            "samplers": [
                {
                    "name": "texture",
                    "type": 29,
                    "count": 1,
                    "defines": [
                        "USE_TEXTURE"
                    ],
                    "binding": 30
                }
            ],
            "record": null,
            "name": "BlurUp|vs|fs"
        }
    ]
};
var EFFECT_DOWN = {
    "__type__": "cc.EffectAsset",
    "_name": "BlurDown",
    "_objFlags": 0,
    "_native": "",
    "properties": null,
    "techniques": [
        {
            "passes": [
                {
                    "blendState": {
                        "targets": [
                            {
                                "blend": true
                            }
                        ]
                    },
                    "rasterizerState": {
                        "cullMode": 0
                    },
                    "properties": {
                        "texture": {
                            "value": "white",
                            "type": 29
                        },
                        "alphaThreshold": {
                            "value": [
                                0.5
                            ],
                            "type": 13
                        }
                    },
                    "program": "BlurDown|vs|fs"
                }
            ]
        }
    ],
    "shaders": [
        {
            "hash": 4206633856,
            "glsl3": {
                "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\n#if USE_TEXTURE\nin vec2 a_uv0;\nout vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
                "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nin vec4 v_color;\n#if USE_TEXTURE\nin vec2 v_uv0;\nuniform sampler2D texture;\n#endif\nuniform CustomUniform {\n  vec2 v_halfpixel;\n  vec2 v_offset;\n};\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n  vec4 sum = texture2D(texture, v_uv0 + vec2(-v_halfpixel.x * 2.0, 0.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(-v_halfpixel.x, v_halfpixel.y) * v_offset) * 2.0;\n  sum += texture2D(texture, v_uv0 + vec2(0.0, v_halfpixel.y * 2.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x, v_halfpixel.y) * v_offset) * 2.0;\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x * 2.0, 0.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x, -v_halfpixel.y) * v_offset) * 2.0;\n  sum += texture2D(texture, v_uv0 + vec2(0.0, -v_halfpixel.y * 2.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(-v_halfpixel.x, -v_halfpixel.y) * v_offset) * 2.0;\n  o = sum / 12.0;\n  o *= v_color;\n  ALPHA_TEST(o);\n  #if USE_BGRA\n    gl_FragColor = o.bgra;\n  #else\n    gl_FragColor = o.rgba;\n  #endif\n}"
            },
            "glsl1": {
                "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\n#if USE_TEXTURE\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
                "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvarying vec4 v_color;\n#if USE_TEXTURE\nvarying vec2 v_uv0;\nuniform sampler2D texture;\n#endif\nuniform vec2 v_halfpixel;\nuniform vec2 v_offset;\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n  vec4 sum = texture2D(texture, v_uv0 + vec2(-v_halfpixel.x * 2.0, 0.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(-v_halfpixel.x, v_halfpixel.y) * v_offset) * 2.0;\n  sum += texture2D(texture, v_uv0 + vec2(0.0, v_halfpixel.y * 2.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x, v_halfpixel.y) * v_offset) * 2.0;\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x * 2.0, 0.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(v_halfpixel.x, -v_halfpixel.y) * v_offset) * 2.0;\n  sum += texture2D(texture, v_uv0 + vec2(0.0, -v_halfpixel.y * 2.0) * v_offset);\n  sum += texture2D(texture, v_uv0 + vec2(-v_halfpixel.x, -v_halfpixel.y) * v_offset) * 2.0;\n  o = sum / 12.0;\n  o *= v_color;\n  ALPHA_TEST(o);\n  #if USE_BGRA\n    gl_FragColor = o.bgra;\n  #else\n    gl_FragColor = o.rgba;\n  #endif\n}"
            },
            "builtins": {
                "globals": {
                    "blocks": [
                        {
                            "name": "CCGlobal",
                            "defines": []
                        }
                    ],
                    "samplers": []
                },
                "locals": {
                    "blocks": [
                        {
                            "name": "CCLocal",
                            "defines": []
                        }
                    ],
                    "samplers": []
                }
            },
            "defines": [
                {
                    "name": "USE_TEXTURE",
                    "type": "boolean",
                    "defines": []
                },
                {
                    "name": "CC_USE_MODEL",
                    "type": "boolean",
                    "defines": []
                },
                {
                    "name": "USE_ALPHA_TEST",
                    "type": "boolean",
                    "defines": []
                },
                {
                    "name": "USE_BGRA",
                    "type": "boolean",
                    "defines": []
                }
            ],
            "blocks": [
                {
                    "name": "ALPHA_TEST",
                    "members": [
                        {
                            "name": "alphaThreshold",
                            "type": 13,
                            "count": 1
                        }
                    ],
                    "defines": [
                        "USE_ALPHA_TEST"
                    ],
                    "binding": 0
                },
                {
                    "name": "CustomUniform",
                    "members": [
                        {
                            "name": "v_halfpixel",
                            "type": 14,
                            "count": 1
                        },
                        {
                            "name": "v_offset",
                            "type": 14,
                            "count": 1
                        }
                    ],
                    "defines": [],
                    "binding": 1
                }
            ],
            "samplers": [
                {
                    "name": "texture",
                    "type": 29,
                    "count": 1,
                    "defines": [
                        "USE_TEXTURE"
                    ],
                    "binding": 30
                }
            ],
            "record": null,
            "name": "BlurDown|vs|fs"
        }
    ]
};

cc._RF.pop();