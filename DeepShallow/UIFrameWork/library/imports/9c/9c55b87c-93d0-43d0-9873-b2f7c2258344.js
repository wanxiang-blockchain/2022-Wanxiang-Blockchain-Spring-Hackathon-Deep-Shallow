"use strict";
cc._RF.push(module, '9c55bh8k9BD0JhzsvfCJYNE', 'PropController');
// Script/Common/Components/PropController.ts

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
exports.NodePathType = void 0;
var PropSelector_1 = require("./PropSelector");
var NodePathType;
(function (NodePathType) {
    NodePathType[NodePathType["Name"] = 0] = "Name";
    NodePathType[NodePathType["SiblingIndex"] = 1] = "SiblingIndex";
})(NodePathType = exports.NodePathType || (exports.NodePathType = {}));
cc['NodePathType'] = NodePathType;
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, menu = _a.menu, inspector = _a.inspector, property = _a.property;
var PropController = /** @class */ (function (_super) {
    __extends(PropController, _super);
    function PropController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodePathType = NodePathType.SiblingIndex;
        _this.open = true;
        _this._uid = "";
        _this._state = 0;
        _this._states = [];
        _this.propertyJson = '';
        return _this;
        // update (dt) {}
    }
    PropController_1 = PropController;
    Object.defineProperty(PropController.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        set: function (val) {
            this._uid = val;
            this._refreshIdEnum();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PropController.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (val) {
            this._state = val;
            this.doControl(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PropController.prototype, "states", {
        get: function () {
            return this._states;
        },
        set: function (states) {
            this._states = states;
            this._refresh();
        },
        enumerable: false,
        configurable: true
    });
    PropController.prototype.onLoad = function () {
        this._refresh();
        this._refreshIdEnum();
    };
    PropController.prototype.start = function () { };
    PropController.prototype.doControl = function (type) {
        var t = type;
        var ctrl = JSON.parse(this.propertyJson);
        var map = ctrl[t];
        for (var path in map) {
            var paths = path.split(":");
            var node = null;
            switch (+paths[0]) {
                case NodePathType.Name:
                    node = cc.find(paths[1], this.node);
                    break;
                case NodePathType.SiblingIndex:
                    node = this._getNodeBySiblingIndex(paths[1], this.node);
                    break;
            }
            if (!node) {
                cc.warn("find node faild, path:", path);
                continue;
            }
            var nodeProps = map[path];
            for (var key in nodeProps) {
                var func = _localSetFunc[key];
                if (!func)
                    continue;
                func(node, nodeProps[key]);
            }
        }
    };
    PropController.prototype._getNodeBySiblingIndex = function (path, node) {
        path = (path[0] == '/') ? path.substring(1) : path;
        for (var _i = 0, _a = path.split("/"); _i < _a.length; _i++) {
            var e = _a[_i];
            node = node.children[+e];
        }
        return node;
    };
    PropController.prototype._refresh = function () {
        if (CC_EDITOR) {
            var array = this._states.map(function (val, i) {
                return { name: val, value: i };
            });
            //@ts-ignore
            cc.Class.Attr.setClassAttr(this, 'state', 'enumList', array);
            //@ts-ignore
            // Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
        }
    };
    PropController.prototype._refreshIdEnum = function () {
        if (CC_EDITOR) {
            var coms = this.node.getComponents(PropController_1);
            var array = coms.map(function (val, i) {
                return { name: val.uid, value: i };
            });
            //@ts-ignore
            cc.Class.Attr.setClassAttr(PropSelector_1.default, 'ctrlId', 'enumList', array);
        }
    };
    var PropController_1;
    __decorate([
        property({ type: cc.Enum(NodePathType), tooltip: "Name: 根据node name保存, SiblingIndex: 根据node 在children的index保存" })
    ], PropController.prototype, "nodePathType", void 0);
    __decorate([
        property({ tooltip: "是否启用控制器" })
    ], PropController.prototype, "open", void 0);
    __decorate([
        property({ serializable: true })
    ], PropController.prototype, "_uid", void 0);
    __decorate([
        property
    ], PropController.prototype, "uid", null);
    __decorate([
        property({ type: cc.Enum({}) })
    ], PropController.prototype, "_state", void 0);
    __decorate([
        property({ type: cc.Enum({}) })
    ], PropController.prototype, "state", null);
    __decorate([
        property
    ], PropController.prototype, "_states", void 0);
    __decorate([
        property([cc.String])
    ], PropController.prototype, "states", null);
    __decorate([
        property()
    ], PropController.prototype, "propertyJson", void 0);
    PropController = PropController_1 = __decorate([
        ccclass,
        executeInEditMode,
        menu('i18n:状态控制/PropController'),
        inspector('packages://propcontroller/dist/inspector.js')
    ], PropController);
    return PropController;
}(cc.Component));
exports.default = PropController;
function _setPosition(node, prop) {
    node.setPosition(prop);
}
function _setColor(node, prop) {
    node.color = new cc.Color(prop.r, prop.g, prop.b);
}
function _setSacle(node, prop) {
    node.scaleX = prop.scaleX;
    node.scaleY = prop.scaleY;
}
function _setRotation(node, prop) {
    node.angle = prop;
}
function _setOpacity(node, prop) {
    node.opacity = prop;
}
function _setSlew(node, prop) {
    node.skewX = prop.skewX;
    node.skewY = prop.skewY;
}
function _setSize(node, prop) {
    node.setContentSize(prop);
}
function _setAnchor(node, prop) {
    node.anchorX = prop.anchorX;
    node.anchorY = prop.anchorY;
}
function _setActive(node, prop) {
    node.active = prop;
}
function _setLabelString(node, prop) {
    node.getComponent(cc.Label).string = prop;
}
function _setSpriteTexture(node, prop) {
    cc.assetManager.loadAny({ uuid: prop }, function (error, data) {
        if (error) {
            Editor.warn('PropController  load sprite texture faild', prop, error);
            return;
        }
        ;
        node.getComponent(cc.Sprite).spriteFrame = data;
    });
}
var _localSetFunc = {};
function _regiestSetFunction(id, func) {
    if (_localSetFunc[id]) {
        cc.warn("");
    }
    _localSetFunc[id] = func;
}
_regiestSetFunction(PropSelector_1.PropEmum.Active, _setActive);
_regiestSetFunction(PropSelector_1.PropEmum.Position, _setPosition);
_regiestSetFunction(PropSelector_1.PropEmum.Color, _setColor);
_regiestSetFunction(PropSelector_1.PropEmum.Scale, _setSacle);
_regiestSetFunction(PropSelector_1.PropEmum.Rotation, _setRotation);
_regiestSetFunction(PropSelector_1.PropEmum.Opacity, _setOpacity);
_regiestSetFunction(PropSelector_1.PropEmum.Slew, _setSlew);
_regiestSetFunction(PropSelector_1.PropEmum.Size, _setSize);
_regiestSetFunction(PropSelector_1.PropEmum.Anchor, _setAnchor);
_regiestSetFunction(PropSelector_1.PropEmum.Label_String, _setLabelString);
_regiestSetFunction(PropSelector_1.PropEmum.Sprite_Texture, _setSpriteTexture);

cc._RF.pop();