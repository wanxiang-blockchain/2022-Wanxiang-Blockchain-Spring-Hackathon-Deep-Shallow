
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIFrame/UIModalScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlGcmFtZS9VSU1vZGFsU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyxnREFBNkQ7QUFDN0QsNkNBQXdDO0FBRXhDLHlDQUFvQztBQUVwQyxJQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU5RTs7Ozs7R0FLRztBQUNHLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBb01DO1FBak1XLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQXVFakMsc0JBQXNCO1FBQ2QsY0FBUSxHQUFpQixJQUFJLENBQUM7UUE2QjlCLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQUN4QyxxQkFBZSxHQUF1QixFQUFFLENBQUM7O0lBMEZyRCxDQUFDO0lBL0xHOztPQUVHO0lBQ0ksNEJBQUksR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVB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ImltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBNb2RhbE9wYWNpdHksIFN5c0RlZmluZSB9IGZyb20gXCIuL2NvbmZpZy9TeXNEZWZpbmVcIjtcbmltcG9ydCBDb2Nvc0hlbHBlciBmcm9tIFwiLi9Db2Nvc0hlbHBlclwiO1xuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tIFwiLi9VSUZvcm1cIjtcbmltcG9ydCBXaW5kb3dNZ3IgZnJvbSBcIi4vV2luZG93TWdyXCI7XG5cbmNvbnN0IEJBTl9GQUxHID0gKGNjLlJlbmRlckZsb3cuRkxBR19SRU5ERVIgfCBjYy5SZW5kZXJGbG93LkZMQUdfUE9TVF9SRU5ERVIpO1xuXG4vKipcbiAqIEBBdXRob3I6IOmCk+aclyBcbiAqIEBEZXNjcmliZTogXG4gKiBARGF0ZTogMjAxOS0wNS0zMCAyMzozNToyNiAgXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTA1LTMwIDIzOjM1OjI2IFxuICovXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTW9kYWxTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIGZpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIOWIneWni+WMllxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBzaXplLndpZHRoO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjbGljaycsIHRoaXMuY2xpY2tNYXNrV2luZG93LCB0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpXG4gICAgICAgIHRoaXMudXNlTm9ybWFsU3ByaXRlKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoXCJCbHVyQ2FtZXJhXCIpO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmFkZENoaWxkKG5vZGUpOyAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvLyBcbiAgICBwdWJsaWMgYXN5bmMgc2hvd01vZGFsKGx1Y2VueVR5cGU6IG51bWJlciwgdGltZTogbnVtYmVyID0gMC42LCBpc0Vhc2luZzogYm9vbGVhbiA9IHRydWUsIGR1YWxCbHVyID0gZmFsc2UpIHtcbiAgICAgICAgaWYoZHVhbEJsdXIpIHtcbiAgICAgICAgICAgIHRoaXMudXNlRHVhbEJsdXJTcHJpdGUodGhpcy5jYW1lcmEpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZU5vcm1hbFNwcml0ZSh0aGlzLnNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvID0gMDtcbiAgICAgICAgc3dpdGNoIChsdWNlbnlUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIE1vZGFsT3BhY2l0eS5Ob25lOiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhazsgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBNb2RhbE9wYWNpdHkuT3BhY2l0eVplcm86ICAgXG4gICAgICAgICAgICAgICAgbyA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW9kYWxPcGFjaXR5Lk9wYWNpdHlMb3c6ICAgIFxuICAgICAgICAgICAgICAgIG8gPSA2MztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb2RhbE9wYWNpdHkuT3BhY2l0eUhhbGY6ICAgXG4gICAgICAgICAgICAgICAgbyA9IDEyNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb2RhbE9wYWNpdHkuT3BhY2l0eUhpZ2g6XG4gICAgICAgICAgICAgICAgbyA9IDE4OTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb2RhbE9wYWNpdHkuT3BhY2l0eUZ1bGw6XG4gICAgICAgICAgICAgICAgbyA9IDI1NTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm4gO1xuICAgICAgICBpZihpc0Vhc2luZykge1xuICAgICAgICAgICAgYXdhaXQgQ29jb3NIZWxwZXIucnVuVHdlZW5TeW5jKHRoaXMubm9kZSwgY2MudHdlZW4oKS50byh0aW1lLCB7b3BhY2l0eTogb30pKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNsaWNrTWFza1dpbmRvdygpIHtcbiAgICAgICAgbGV0IGNvbSA9IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEZvcm0odGhpcy5maWQpIGFzIFVJV2luZG93O1xuICAgICAgICBpZihjb20gJiYgY29tLm1vZGFsVHlwZS5jbGlja01hc2tDbG9zZSkge1xuICAgICAgICAgICAgYXdhaXQgV2luZG93TWdyLmNsb3NlKHRoaXMuZmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDku6PnoIHliJvlu7rkuIDkuKrljZXoibJ0ZXh0dXJlICovXG4gICAgcHJpdmF0ZSBfdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcbiAgICBwcml2YXRlIGdldFNpbmdsZVRleHR1cmUoKSB7XG4gICAgICAgIGlmKHRoaXMuX3RleHR1cmUpIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICAgICAgICBsZXQgZGF0YTogYW55ID0gbmV3IFVpbnQ4QXJyYXkoMiAqIDIgKiA0KTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajwyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2kqMio0ICsgaio0KzBdID0gMjU1O1xuICAgICAgICAgICAgICAgIGRhdGFbaSoyKjQgKyBqKjQrMV0gPSAyNTU7XG4gICAgICAgICAgICAgICAgZGF0YVtpKjIqNCArIGoqNCsyXSA9IDI1NTtcbiAgICAgICAgICAgICAgICBkYXRhW2kqMio0ICsgaio0KzNdID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICB0ZXh0dXJlLm5hbWUgPSAnc2luZ2xlIGNvbG9yJ1xuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRGF0YShkYXRhLCBjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsIDIsIDIpO1xuICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICAgIHRleHR1cmUuYWRkUmVmKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1c2VOb3JtYWxTcHJpdGUoc3ByaXRlOiBjYy5TcHJpdGUpIHtcbiAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgc3ByaXRlLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TSU1QTEU7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLmdldFNpbmdsZVRleHR1cmUoKSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIF9yZW5kZXJUZXh0dXJlOiBjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcbiAgICBwcml2YXRlIF9yZW5kZXJUZXh0dXJlczogY2MuUmVuZGVyVGV4dHVyZVtdID0gW107XG4gICAgcHJpdmF0ZSB1c2VEdWFsQmx1clNwcml0ZShjYW1lcmE6IGNjLkNhbWVyYSkge1xuICAgICAgICBsZXQgZGlydHlOb2RlczogY2MuTm9kZVtdID0gW107XG4gICAgICAgIGxldCBkaXNSZW5kZXJDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIOS4jea4suafk3RpcHNcbiAgICAgICAgICAgIGxldCB0aXBzID0gVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0VUlST09UKCkuZ2V0Q2hpbGRCeU5hbWUoU3lzRGVmaW5lLlNZU19UT1BUSVBTX05PREUpLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2YgdGlwcykge1xuICAgICAgICAgICAgICAgIGlmKCFub2RlLl9hY3RpdmVJbkhpZXJhcmNoeSB8fCBub2RlLm9wYWNpdHkgPT0gMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgbm9kZVsnX2RpcnR5UmVuZGVyRmxhZyddID0gbm9kZS5fcmVuZGVyRmxhZztcbiAgICAgICAgICAgICAgICBub2RlLl9yZW5kZXJGbGFnICY9IH4oY2MuUmVuZGVyRmxvdy5GTEFHX0NISUxEUkVOIHwgY2MuUmVuZGVyRmxvdy5GTEFHX1JFTkRFUik7XG4gICAgICAgICAgICAgICAgZGlydHlOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5LiN5riy5p+T6Ieq5bex5ZKM5pyA5LiK5bGC55qEd2luZG93XG4gICAgICAgICAgICB0aGlzLm5vZGUuX3JlbmRlckZsYWcgJj0gfmNjLlJlbmRlckZsb3cuRkxBR19SRU5ERVI7XG4gICAgICAgICAgICBsZXQgd2luZG93cyA9IFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFVJUk9PVCgpLmdldENoaWxkQnlOYW1lKFN5c0RlZmluZS5TWVNfUE9QVVBfTk9ERSkuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IobGV0IGk9d2luZG93cy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93c1tpXS56SW5kZXggPiB0aGlzLm5vZGUuekluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gd2luZG93c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGUuX2FjdGl2ZUluSGllcmFyY2h5IHx8IG5vZGUub3BhY2l0eSA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVsnX2RpcnR5UmVuZGVyRmxhZyddID0gbm9kZS5fcmVuZGVyRmxhZztcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5fcmVuZGVyRmxhZyAmPSB+KGNjLlJlbmRlckZsb3cuRkxBR19DSElMRFJFTiB8IGNjLlJlbmRlckZsb3cuRkxBR19SRU5ERVIpO1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eU5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXJlbmRlckNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGNvbnN0IG5vZGUgb2YgZGlydHlOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5vZGUuX3JlbmRlckZsYWcgPSBub2RlWydfZGlydHlSZW5kZXJGbGFnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMuX3JlbmRlclRleHR1cmUpIHtcbiAgICAgICAgICAgIGxldCByZW5kZXJUZXh0dXJlID0gdGhpcy5fcmVuZGVyVGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgICAgICByZW5kZXJUZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0LCBjYy5nYW1lLl9yZW5kZXJDb250ZXh0LlNURU5DSUxfSU5ERVg4KTtcbiAgICAgICAgfVxuICAgICAgICBjYW1lcmEuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGhpcy5fcmVuZGVyVGV4dHVyZTtcbiAgICAgICAgZGlzUmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgY2FtZXJhLnJlbmRlcigpO1xuICAgICAgICByZXJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUoY2FtZXJhLnRhcmdldFRleHR1cmUpO1xuICAgICAgICB0aGlzLnNwcml0ZS5tYXJrRm9yUmVuZGVyKHRydWUpXG4gICAgICAgIHRoaXMucmVuZGVyRHVhbEJsdXIoY2FtZXJhLCAzKTtcbiAgICAgICAgY2FtZXJhLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckR1YWxCbHVyKGNhbWVyYTogY2MuQ2FtZXJhLCBpdGVyYXRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgIGlmKHRoaXMuX3JlbmRlclRleHR1cmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5wb3coMiwgaSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlclRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRleHR1cmUuaW5pdFdpdGhTaXplKChjYy52aXNpYmxlUmVjdC53aWR0aCAvIHIpIHwgMCwgKGNjLnZpc2libGVSZWN0LmhlaWdodCAvIHIpIHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyVGV4dHVyZXMucHVzaChyZW5kZXJUZXh0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighTWF0ZXJpYWxEb3duKSB7XG4gICAgICAgICAgICBNYXRlcmlhbERvd24gPSB0aGlzLmdlbk1hdGVyaWFsKEVGRkVDVF9ET1dOKTtcbiAgICAgICAgICAgIE1hdGVyaWFsRG93bi5zZXRQcm9wZXJ0eSgndl9oYWxmcGl4ZWwnLCBbMC41IC8gc2l6ZS53aWR0aCwgMC41IC8gc2l6ZS5oZWlnaHRdKTtcbiAgICAgICAgICAgIE1hdGVyaWFsRG93bi5zZXRQcm9wZXJ0eSgndl9vZmZzZXQnLCBbNCwgNF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldE1hdGVyaWFsKDAsIE1hdGVyaWFsRG93bik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMuX3JlbmRlclRleHR1cmVzW2ldO1xuICAgICAgICAgICAgY2FtZXJhLnJlbmRlcih0aGlzLnNwcml0ZS5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUoY2FtZXJhLnRhcmdldFRleHR1cmUpO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUubWFya0ZvclJlbmRlcih0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmKCFNYXRlcmlhbFVwKSB7XG4gICAgICAgICAgICBNYXRlcmlhbFVwID0gdGhpcy5nZW5NYXRlcmlhbChFRkZFQ1RfVVApO1xuICAgICAgICAgICAgTWF0ZXJpYWxVcC5zZXRQcm9wZXJ0eSgndl9oYWxmcGl4ZWwnLCBbMC41IC8gc2l6ZS53aWR0aCwgMC41IC8gc2l6ZS5oZWlnaHRdKTtcbiAgICAgICAgICAgIE1hdGVyaWFsVXAuc2V0UHJvcGVydHkoJ3Zfb2Zmc2V0JywgWzQsIDRdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRNYXRlcmlhbCgwLCBNYXRlcmlhbFVwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGl0ZXJhdGlvbnMgLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMuX3JlbmRlclRleHR1cmVzW2kgLSAxXTtcbiAgICAgICAgICAgIGNhbWVyYS5yZW5kZXIodGhpcy5zcHJpdGUubm9kZSk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKGNhbWVyYS50YXJnZXRUZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLm1hcmtGb3JSZW5kZXIodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbC5nZXRCdWlsdGluTWF0ZXJpYWwoJzJkLXNwcml0ZScpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuTWF0ZXJpYWwoZWZmZWN0OiBhbnkpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGxldCBhc3NldCA9IGNjLmRlc2VyaWFsaXplKGVmZmVjdCwge3ByaW9yaXR5OiAwLCByZXNwb25zZVR5cGU6IFwianNvblwifSk7XG4gICAgICAgIGFzc2V0Lm9uTG9hZCAmJiBhc3NldC5vbkxvYWQoKTtcbiAgICAgICAgYXNzZXQuX19vbkxvYWRJbnZva2VkX18gPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBjYy5NYXRlcmlhbC5jcmVhdGUoYXNzZXQsIDApO1xuICAgIH1cbn1cbmxldCBNYXRlcmlhbERvd246IGNjLk1hdGVyaWFsID0gbnVsbDtcbmxldCBNYXRlcmlhbFVwOiBjYy5NYXRlcmlhbCA9IG51bGw7XG5jb25zdCBFRkZFQ1RfVVAgPSB7XG4gIFwiX190eXBlX19cIjogXCJjYy5FZmZlY3RBc3NldFwiLFxuICBcIl9uYW1lXCI6IFwiQmx1clVwXCIsXG4gIFwiX29iakZsYWdzXCI6IDAsXG4gIFwiX25hdGl2ZVwiOiBcIlwiLFxuICBcInByb3BlcnRpZXNcIjogbnVsbCxcbiAgXCJ0ZWNobmlxdWVzXCI6IFtcbiAgICB7XG4gICAgICBcInBhc3Nlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImJsZW5kU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ0YXJnZXRzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiYmxlbmRcIjogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJhc3Rlcml6ZXJTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcImN1bGxNb2RlXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInRleHR1cmVcIjoge1xuICAgICAgICAgICAgICBcInZhbHVlXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IDI5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbHBoYVRocmVzaG9sZFwiOiB7XG4gICAgICAgICAgICAgIFwidmFsdWVcIjogW1xuICAgICAgICAgICAgICAgIDAuNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInR5cGVcIjogMTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicHJvZ3JhbVwiOiBcIkJsdXJVcHx2c3xmc1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwic2hhZGVyc1wiOiBbXG4gICAge1xuICAgICAgXCJoYXNoXCI6IDMwMDUzMTM3NDIsXG4gICAgICBcImdsc2wzXCI6IHtcbiAgICAgICAgXCJ2ZXJ0XCI6IFwiXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbnVuaWZvcm0gQ0NHbG9iYWwge1xcbiAgbWF0NCBjY19tYXRWaWV3O1xcbiAgbWF0NCBjY19tYXRWaWV3SW52O1xcbiAgbWF0NCBjY19tYXRQcm9qO1xcbiAgbWF0NCBjY19tYXRQcm9qSW52O1xcbiAgbWF0NCBjY19tYXRWaWV3UHJvajtcXG4gIG1hdDQgY2NfbWF0Vmlld1Byb2pJbnY7XFxuICB2ZWM0IGNjX2NhbWVyYVBvcztcXG4gIHZlYzQgY2NfdGltZTtcXG4gIG1lZGl1bXAgdmVjNCBjY19zY3JlZW5TaXplO1xcbiAgbWVkaXVtcCB2ZWM0IGNjX3NjcmVlblNjYWxlO1xcbn07XFxudW5pZm9ybSBDQ0xvY2FsIHtcXG4gIG1hdDQgY2NfbWF0V29ybGQ7XFxuICBtYXQ0IGNjX21hdFdvcmxkSVQ7XFxufTtcXG5pbiB2ZWMzIGFfcG9zaXRpb247XFxuaW4gdmVjNCBhX2NvbG9yO1xcbm91dCB2ZWM0IHZfY29sb3I7XFxuI2lmIFVTRV9URVhUVVJFXFxuaW4gdmVjMiBhX3V2MDtcXG5vdXQgdmVjMiB2X3V2MDtcXG4jZW5kaWZcXG52b2lkIG1haW4gKCkge1xcbiAgdmVjNCBwb3MgPSB2ZWM0KGFfcG9zaXRpb24sIDEpO1xcbiAgI2lmIENDX1VTRV9NT0RFTFxcbiAgcG9zID0gY2NfbWF0Vmlld1Byb2ogKiBjY19tYXRXb3JsZCAqIHBvcztcXG4gICNlbHNlXFxuICBwb3MgPSBjY19tYXRWaWV3UHJvaiAqIHBvcztcXG4gICNlbmRpZlxcbiAgI2lmIFVTRV9URVhUVVJFXFxuICB2X3V2MCA9IGFfdXYwO1xcbiAgI2VuZGlmXFxuICB2X2NvbG9yID0gYV9jb2xvcjtcXG4gIGdsX1Bvc2l0aW9uID0gcG9zO1xcbn1cIixcbiAgICAgICAgXCJmcmFnXCI6IFwiXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNpZiBVU0VfQUxQSEFfVEVTVFxcbiAgdW5pZm9ybSBBTFBIQV9URVNUIHtcXG4gICAgZmxvYXQgYWxwaGFUaHJlc2hvbGQ7XFxuICB9O1xcbiNlbmRpZlxcbnZvaWQgQUxQSEFfVEVTVCAoaW4gdmVjNCBjb2xvcikge1xcbiAgI2lmIFVTRV9BTFBIQV9URVNUXFxuICAgICAgaWYgKGNvbG9yLmEgPCBhbHBoYVRocmVzaG9sZCkgZGlzY2FyZDtcXG4gICNlbmRpZlxcbn1cXG52b2lkIEFMUEhBX1RFU1QgKGluIGZsb2F0IGFscGhhKSB7XFxuICAjaWYgVVNFX0FMUEhBX1RFU1RcXG4gICAgICBpZiAoYWxwaGEgPCBhbHBoYVRocmVzaG9sZCkgZGlzY2FyZDtcXG4gICNlbmRpZlxcbn1cXG5pbiB2ZWM0IHZfY29sb3I7XFxuI2lmIFVTRV9URVhUVVJFXFxuaW4gdmVjMiB2X3V2MDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcbiNlbmRpZlxcbnVuaWZvcm0gQ3VzdG9tVW5pZm9ybSB7XFxuICB2ZWMyIHZfaGFsZnBpeGVsO1xcbiAgdmVjMiB2X29mZnNldDtcXG59O1xcbnZvaWQgbWFpbiAoKSB7XFxuICB2ZWM0IG8gPSB2ZWM0KDEsIDEsIDEsIDEpO1xcbiAgdmVjNCBzdW0gPSB0ZXh0dXJlMkQodGV4dHVyZSwgdl91djApICogNC4wO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCAtIHZfaGFsZnBpeGVsLnh5ICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZfaGFsZnBpeGVsLnh5ICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIodl9oYWxmcGl4ZWwueCwgLXZfaGFsZnBpeGVsLnkpICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCAtIHZlYzIodl9oYWxmcGl4ZWwueCwgLXZfaGFsZnBpeGVsLnkpICogdl9vZmZzZXQpO1xcbiAgbyA9IHN1bSAvIDguMDtcXG4gIG8gKj0gdl9jb2xvcjtcXG4gIEFMUEhBX1RFU1Qobyk7XFxuICAjaWYgVVNFX0JHUkFcXG4gICAgZ2xfRnJhZ0NvbG9yID0gby5iZ3JhO1xcbiAgI2Vsc2VcXG4gICAgZ2xfRnJhZ0NvbG9yID0gby5yZ2JhO1xcbiAgI2VuZGlmXFxufVwiXG4gICAgICB9LFxuICAgICAgXCJnbHNsMVwiOiB7XG4gICAgICAgIFwidmVydFwiOiBcIlxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG51bmlmb3JtIG1hdDQgY2NfbWF0Vmlld1Byb2o7XFxudW5pZm9ybSBtYXQ0IGNjX21hdFdvcmxkO1xcbmF0dHJpYnV0ZSB2ZWMzIGFfcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXG4jaWYgVVNFX1RFWFRVUkVcXG5hdHRyaWJ1dGUgdmVjMiBhX3V2MDtcXG52YXJ5aW5nIHZlYzIgdl91djA7XFxuI2VuZGlmXFxudm9pZCBtYWluICgpIHtcXG4gIHZlYzQgcG9zID0gdmVjNChhX3Bvc2l0aW9uLCAxKTtcXG4gICNpZiBDQ19VU0VfTU9ERUxcXG4gIHBvcyA9IGNjX21hdFZpZXdQcm9qICogY2NfbWF0V29ybGQgKiBwb3M7XFxuICAjZWxzZVxcbiAgcG9zID0gY2NfbWF0Vmlld1Byb2ogKiBwb3M7XFxuICAjZW5kaWZcXG4gICNpZiBVU0VfVEVYVFVSRVxcbiAgdl91djAgPSBhX3V2MDtcXG4gICNlbmRpZlxcbiAgdl9jb2xvciA9IGFfY29sb3I7XFxuICBnbF9Qb3NpdGlvbiA9IHBvcztcXG59XCIsXG4gICAgICAgIFwiZnJhZ1wiOiBcIlxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jaWYgVVNFX0FMUEhBX1RFU1RcXG4gIHVuaWZvcm0gZmxvYXQgYWxwaGFUaHJlc2hvbGQ7XFxuI2VuZGlmXFxudm9pZCBBTFBIQV9URVNUIChpbiB2ZWM0IGNvbG9yKSB7XFxuICAjaWYgVVNFX0FMUEhBX1RFU1RcXG4gICAgICBpZiAoY29sb3IuYSA8IGFscGhhVGhyZXNob2xkKSBkaXNjYXJkO1xcbiAgI2VuZGlmXFxufVxcbnZvaWQgQUxQSEFfVEVTVCAoaW4gZmxvYXQgYWxwaGEpIHtcXG4gICNpZiBVU0VfQUxQSEFfVEVTVFxcbiAgICAgIGlmIChhbHBoYSA8IGFscGhhVGhyZXNob2xkKSBkaXNjYXJkO1xcbiAgI2VuZGlmXFxufVxcbnZhcnlpbmcgdmVjNCB2X2NvbG9yO1xcbiNpZiBVU0VfVEVYVFVSRVxcbnZhcnlpbmcgdmVjMiB2X3V2MDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcbiNlbmRpZlxcbnVuaWZvcm0gdmVjMiB2X2hhbGZwaXhlbDtcXG51bmlmb3JtIHZlYzIgdl9vZmZzZXQ7XFxudm9pZCBtYWluICgpIHtcXG4gIHZlYzQgbyA9IHZlYzQoMSwgMSwgMSwgMSk7XFxuICB2ZWM0IHN1bSA9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCkgKiA0LjA7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwIC0gdl9oYWxmcGl4ZWwueHkgKiB2X29mZnNldCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwICsgdl9oYWxmcGl4ZWwueHkgKiB2X29mZnNldCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwICsgdmVjMih2X2hhbGZwaXhlbC54LCAtdl9oYWxmcGl4ZWwueSkgKiB2X29mZnNldCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwIC0gdmVjMih2X2hhbGZwaXhlbC54LCAtdl9oYWxmcGl4ZWwueSkgKiB2X29mZnNldCk7XFxuICBvID0gc3VtIC8gOC4wO1xcbiAgbyAqPSB2X2NvbG9yO1xcbiAgQUxQSEFfVEVTVChvKTtcXG4gICNpZiBVU0VfQkdSQVxcbiAgICBnbF9GcmFnQ29sb3IgPSBvLmJncmE7XFxuICAjZWxzZVxcbiAgICBnbF9GcmFnQ29sb3IgPSBvLnJnYmE7XFxuICAjZW5kaWZcXG59XCJcbiAgICAgIH0sXG4gICAgICBcImJ1aWx0aW5zXCI6IHtcbiAgICAgICAgXCJnbG9iYWxzXCI6IHtcbiAgICAgICAgICBcImJsb2Nrc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNDR2xvYmFsXCIsXG4gICAgICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzYW1wbGVyc1wiOiBbXVxuICAgICAgICB9LFxuICAgICAgICBcImxvY2Fsc1wiOiB7XG4gICAgICAgICAgXCJibG9ja3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDQ0xvY2FsXCIsXG4gICAgICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzYW1wbGVyc1wiOiBbXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZWZpbmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlVTRV9URVhUVVJFXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ0NfVVNFX01PREVMXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiVVNFX0FMUEhBX1RFU1RcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZpbmVzXCI6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJVU0VfQkdSQVwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlZmluZXNcIjogW11cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiYmxvY2tzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFMUEhBX1RFU1RcIixcbiAgICAgICAgICBcIm1lbWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbHBoYVRocmVzaG9sZFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogMTMsXG4gICAgICAgICAgICAgIFwiY291bnRcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJkZWZpbmVzXCI6IFtcbiAgICAgICAgICAgIFwiVVNFX0FMUEhBX1RFU1RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJiaW5kaW5nXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkN1c3RvbVVuaWZvcm1cIixcbiAgICAgICAgICBcIm1lbWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2X2hhbGZwaXhlbFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogMTQsXG4gICAgICAgICAgICAgIFwiY291bnRcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidl9vZmZzZXRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IDE0LFxuICAgICAgICAgICAgICBcImNvdW50XCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXSxcbiAgICAgICAgICBcImJpbmRpbmdcIjogMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzYW1wbGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXh0dXJlXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IDI5LFxuICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICBcImRlZmluZXNcIjogW1xuICAgICAgICAgICAgXCJVU0VfVEVYVFVSRVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJpbmRpbmdcIjogMzBcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwicmVjb3JkXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJCbHVyVXB8dnN8ZnNcIlxuICAgIH1cbiAgXVxufTtcbmNvbnN0IEVGRkVDVF9ET1dOID0ge1xuICBcIl9fdHlwZV9fXCI6IFwiY2MuRWZmZWN0QXNzZXRcIixcbiAgXCJfbmFtZVwiOiBcIkJsdXJEb3duXCIsXG4gIFwiX29iakZsYWdzXCI6IDAsXG4gIFwiX25hdGl2ZVwiOiBcIlwiLFxuICBcInByb3BlcnRpZXNcIjogbnVsbCxcbiAgXCJ0ZWNobmlxdWVzXCI6IFtcbiAgICB7XG4gICAgICBcInBhc3Nlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImJsZW5kU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ0YXJnZXRzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiYmxlbmRcIjogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJhc3Rlcml6ZXJTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcImN1bGxNb2RlXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInRleHR1cmVcIjoge1xuICAgICAgICAgICAgICBcInZhbHVlXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IDI5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbHBoYVRocmVzaG9sZFwiOiB7XG4gICAgICAgICAgICAgIFwidmFsdWVcIjogW1xuICAgICAgICAgICAgICAgIDAuNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInR5cGVcIjogMTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicHJvZ3JhbVwiOiBcIkJsdXJEb3dufHZzfGZzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCJzaGFkZXJzXCI6IFtcbiAgICB7XG4gICAgICBcImhhc2hcIjogNDIwNjYzMzg1NixcbiAgICAgIFwiZ2xzbDNcIjoge1xuICAgICAgICBcInZlcnRcIjogXCJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxudW5pZm9ybSBDQ0dsb2JhbCB7XFxuICBtYXQ0IGNjX21hdFZpZXc7XFxuICBtYXQ0IGNjX21hdFZpZXdJbnY7XFxuICBtYXQ0IGNjX21hdFByb2o7XFxuICBtYXQ0IGNjX21hdFByb2pJbnY7XFxuICBtYXQ0IGNjX21hdFZpZXdQcm9qO1xcbiAgbWF0NCBjY19tYXRWaWV3UHJvakludjtcXG4gIHZlYzQgY2NfY2FtZXJhUG9zO1xcbiAgdmVjNCBjY190aW1lO1xcbiAgbWVkaXVtcCB2ZWM0IGNjX3NjcmVlblNpemU7XFxuICBtZWRpdW1wIHZlYzQgY2Nfc2NyZWVuU2NhbGU7XFxufTtcXG51bmlmb3JtIENDTG9jYWwge1xcbiAgbWF0NCBjY19tYXRXb3JsZDtcXG4gIG1hdDQgY2NfbWF0V29ybGRJVDtcXG59O1xcbmluIHZlYzMgYV9wb3NpdGlvbjtcXG5pbiB2ZWM0IGFfY29sb3I7XFxub3V0IHZlYzQgdl9jb2xvcjtcXG4jaWYgVVNFX1RFWFRVUkVcXG5pbiB2ZWMyIGFfdXYwO1xcbm91dCB2ZWMyIHZfdXYwO1xcbiNlbmRpZlxcbnZvaWQgbWFpbiAoKSB7XFxuICB2ZWM0IHBvcyA9IHZlYzQoYV9wb3NpdGlvbiwgMSk7XFxuICAjaWYgQ0NfVVNFX01PREVMXFxuICBwb3MgPSBjY19tYXRWaWV3UHJvaiAqIGNjX21hdFdvcmxkICogcG9zO1xcbiAgI2Vsc2VcXG4gIHBvcyA9IGNjX21hdFZpZXdQcm9qICogcG9zO1xcbiAgI2VuZGlmXFxuICAjaWYgVVNFX1RFWFRVUkVcXG4gIHZfdXYwID0gYV91djA7XFxuICAjZW5kaWZcXG4gIHZfY29sb3IgPSBhX2NvbG9yO1xcbiAgZ2xfUG9zaXRpb24gPSBwb3M7XFxufVwiLFxuICAgICAgICBcImZyYWdcIjogXCJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2lmIFVTRV9BTFBIQV9URVNUXFxuICB1bmlmb3JtIEFMUEhBX1RFU1Qge1xcbiAgICBmbG9hdCBhbHBoYVRocmVzaG9sZDtcXG4gIH07XFxuI2VuZGlmXFxudm9pZCBBTFBIQV9URVNUIChpbiB2ZWM0IGNvbG9yKSB7XFxuICAjaWYgVVNFX0FMUEhBX1RFU1RcXG4gICAgICBpZiAoY29sb3IuYSA8IGFscGhhVGhyZXNob2xkKSBkaXNjYXJkO1xcbiAgI2VuZGlmXFxufVxcbnZvaWQgQUxQSEFfVEVTVCAoaW4gZmxvYXQgYWxwaGEpIHtcXG4gICNpZiBVU0VfQUxQSEFfVEVTVFxcbiAgICAgIGlmIChhbHBoYSA8IGFscGhhVGhyZXNob2xkKSBkaXNjYXJkO1xcbiAgI2VuZGlmXFxufVxcbmluIHZlYzQgdl9jb2xvcjtcXG4jaWYgVVNFX1RFWFRVUkVcXG5pbiB2ZWMyIHZfdXYwO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuI2VuZGlmXFxudW5pZm9ybSBDdXN0b21Vbmlmb3JtIHtcXG4gIHZlYzIgdl9oYWxmcGl4ZWw7XFxuICB2ZWMyIHZfb2Zmc2V0O1xcbn07XFxudm9pZCBtYWluICgpIHtcXG4gIHZlYzQgbyA9IHZlYzQoMSwgMSwgMSwgMSk7XFxuICB2ZWM0IHN1bSA9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIoLXZfaGFsZnBpeGVsLnggKiAyLjAsIDAuMCkgKiB2X29mZnNldCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwICsgdmVjMigtdl9oYWxmcGl4ZWwueCwgdl9oYWxmcGl4ZWwueSkgKiB2X29mZnNldCkgKiAyLjA7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwICsgdmVjMigwLjAsIHZfaGFsZnBpeGVsLnkgKiAyLjApICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIodl9oYWxmcGl4ZWwueCwgdl9oYWxmcGl4ZWwueSkgKiB2X29mZnNldCkgKiAyLjA7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwICsgdmVjMih2X2hhbGZwaXhlbC54ICogMi4wLCAwLjApICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIodl9oYWxmcGl4ZWwueCwgLXZfaGFsZnBpeGVsLnkpICogdl9vZmZzZXQpICogMi4wO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIoMC4wLCAtdl9oYWxmcGl4ZWwueSAqIDIuMCkgKiB2X29mZnNldCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYwICsgdmVjMigtdl9oYWxmcGl4ZWwueCwgLXZfaGFsZnBpeGVsLnkpICogdl9vZmZzZXQpICogMi4wO1xcbiAgbyA9IHN1bSAvIDEyLjA7XFxuICBvICo9IHZfY29sb3I7XFxuICBBTFBIQV9URVNUKG8pO1xcbiAgI2lmIFVTRV9CR1JBXFxuICAgIGdsX0ZyYWdDb2xvciA9IG8uYmdyYTtcXG4gICNlbHNlXFxuICAgIGdsX0ZyYWdDb2xvciA9IG8ucmdiYTtcXG4gICNlbmRpZlxcbn1cIlxuICAgICAgfSxcbiAgICAgIFwiZ2xzbDFcIjoge1xuICAgICAgICBcInZlcnRcIjogXCJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxudW5pZm9ybSBtYXQ0IGNjX21hdFZpZXdQcm9qO1xcbnVuaWZvcm0gbWF0NCBjY19tYXRXb3JsZDtcXG5hdHRyaWJ1dGUgdmVjMyBhX3Bvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XFxudmFyeWluZyB2ZWM0IHZfY29sb3I7XFxuI2lmIFVTRV9URVhUVVJFXFxuYXR0cmlidXRlIHZlYzIgYV91djA7XFxudmFyeWluZyB2ZWMyIHZfdXYwO1xcbiNlbmRpZlxcbnZvaWQgbWFpbiAoKSB7XFxuICB2ZWM0IHBvcyA9IHZlYzQoYV9wb3NpdGlvbiwgMSk7XFxuICAjaWYgQ0NfVVNFX01PREVMXFxuICBwb3MgPSBjY19tYXRWaWV3UHJvaiAqIGNjX21hdFdvcmxkICogcG9zO1xcbiAgI2Vsc2VcXG4gIHBvcyA9IGNjX21hdFZpZXdQcm9qICogcG9zO1xcbiAgI2VuZGlmXFxuICAjaWYgVVNFX1RFWFRVUkVcXG4gIHZfdXYwID0gYV91djA7XFxuICAjZW5kaWZcXG4gIHZfY29sb3IgPSBhX2NvbG9yO1xcbiAgZ2xfUG9zaXRpb24gPSBwb3M7XFxufVwiLFxuICAgICAgICBcImZyYWdcIjogXCJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2lmIFVTRV9BTFBIQV9URVNUXFxuICB1bmlmb3JtIGZsb2F0IGFscGhhVGhyZXNob2xkO1xcbiNlbmRpZlxcbnZvaWQgQUxQSEFfVEVTVCAoaW4gdmVjNCBjb2xvcikge1xcbiAgI2lmIFVTRV9BTFBIQV9URVNUXFxuICAgICAgaWYgKGNvbG9yLmEgPCBhbHBoYVRocmVzaG9sZCkgZGlzY2FyZDtcXG4gICNlbmRpZlxcbn1cXG52b2lkIEFMUEhBX1RFU1QgKGluIGZsb2F0IGFscGhhKSB7XFxuICAjaWYgVVNFX0FMUEhBX1RFU1RcXG4gICAgICBpZiAoYWxwaGEgPCBhbHBoYVRocmVzaG9sZCkgZGlzY2FyZDtcXG4gICNlbmRpZlxcbn1cXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXG4jaWYgVVNFX1RFWFRVUkVcXG52YXJ5aW5nIHZlYzIgdl91djA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcXG4jZW5kaWZcXG51bmlmb3JtIHZlYzIgdl9oYWxmcGl4ZWw7XFxudW5pZm9ybSB2ZWMyIHZfb2Zmc2V0O1xcbnZvaWQgbWFpbiAoKSB7XFxuICB2ZWM0IG8gPSB2ZWM0KDEsIDEsIDEsIDEpO1xcbiAgdmVjNCBzdW0gPSB0ZXh0dXJlMkQodGV4dHVyZSwgdl91djAgKyB2ZWMyKC12X2hhbGZwaXhlbC54ICogMi4wLCAwLjApICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIoLXZfaGFsZnBpeGVsLngsIHZfaGFsZnBpeGVsLnkpICogdl9vZmZzZXQpICogMi4wO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIoMC4wLCB2X2hhbGZwaXhlbC55ICogMi4wKSAqIHZfb2Zmc2V0KTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4dHVyZSwgdl91djAgKyB2ZWMyKHZfaGFsZnBpeGVsLngsIHZfaGFsZnBpeGVsLnkpICogdl9vZmZzZXQpICogMi4wO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIodl9oYWxmcGl4ZWwueCAqIDIuMCwgMC4wKSAqIHZfb2Zmc2V0KTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4dHVyZSwgdl91djAgKyB2ZWMyKHZfaGFsZnBpeGVsLngsIC12X2hhbGZwaXhlbC55KSAqIHZfb2Zmc2V0KSAqIDIuMDtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4dHVyZSwgdl91djAgKyB2ZWMyKDAuMCwgLXZfaGFsZnBpeGVsLnkgKiAyLjApICogdl9vZmZzZXQpO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2MCArIHZlYzIoLXZfaGFsZnBpeGVsLngsIC12X2hhbGZwaXhlbC55KSAqIHZfb2Zmc2V0KSAqIDIuMDtcXG4gIG8gPSBzdW0gLyAxMi4wO1xcbiAgbyAqPSB2X2NvbG9yO1xcbiAgQUxQSEFfVEVTVChvKTtcXG4gICNpZiBVU0VfQkdSQVxcbiAgICBnbF9GcmFnQ29sb3IgPSBvLmJncmE7XFxuICAjZWxzZVxcbiAgICBnbF9GcmFnQ29sb3IgPSBvLnJnYmE7XFxuICAjZW5kaWZcXG59XCJcbiAgICAgIH0sXG4gICAgICBcImJ1aWx0aW5zXCI6IHtcbiAgICAgICAgXCJnbG9iYWxzXCI6IHtcbiAgICAgICAgICBcImJsb2Nrc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNDR2xvYmFsXCIsXG4gICAgICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzYW1wbGVyc1wiOiBbXVxuICAgICAgICB9LFxuICAgICAgICBcImxvY2Fsc1wiOiB7XG4gICAgICAgICAgXCJibG9ja3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDQ0xvY2FsXCIsXG4gICAgICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzYW1wbGVyc1wiOiBbXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZWZpbmVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlVTRV9URVhUVVJFXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ0NfVVNFX01PREVMXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiVVNFX0FMUEhBX1RFU1RcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZpbmVzXCI6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJVU0VfQkdSQVwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlZmluZXNcIjogW11cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiYmxvY2tzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkFMUEhBX1RFU1RcIixcbiAgICAgICAgICBcIm1lbWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbHBoYVRocmVzaG9sZFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogMTMsXG4gICAgICAgICAgICAgIFwiY291bnRcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJkZWZpbmVzXCI6IFtcbiAgICAgICAgICAgIFwiVVNFX0FMUEhBX1RFU1RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJiaW5kaW5nXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIkN1c3RvbVVuaWZvcm1cIixcbiAgICAgICAgICBcIm1lbWJlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2X2hhbGZwaXhlbFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogMTQsXG4gICAgICAgICAgICAgIFwiY291bnRcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidl9vZmZzZXRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IDE0LFxuICAgICAgICAgICAgICBcImNvdW50XCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGVmaW5lc1wiOiBbXSxcbiAgICAgICAgICBcImJpbmRpbmdcIjogMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzYW1wbGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXh0dXJlXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IDI5LFxuICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICBcImRlZmluZXNcIjogW1xuICAgICAgICAgICAgXCJVU0VfVEVYVFVSRVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJpbmRpbmdcIjogMzBcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwicmVjb3JkXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJCbHVyRG93bnx2c3xmc1wiXG4gICAgfVxuICBdXG59OyJdfQ==