
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/PropController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvUHJvcENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF3RDtBQUV4RCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDcEIsK0NBQUksQ0FBQTtJQUNKLCtEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBQ0QsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFlBQVksQ0FBQztBQUU1QixJQUFBLEtBQTBELEVBQUUsQ0FBQyxVQUFVLEVBQXRFLE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQU05RTtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdIQztRQTdHRyxrQkFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFHekMsVUFBSSxHQUFHLElBQUksQ0FBQztRQUdaLFVBQUksR0FBRyxFQUFFLENBQUM7UUFXVixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBV1gsYUFBTyxHQUFhLEVBQUUsQ0FBQztRQVd2QixrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7UUFxRWxCLGlCQUFpQjtJQUNyQixDQUFDO3VCQWhIb0IsY0FBYztJQVcvQixzQkFBSSwrQkFBRzthQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFRLEdBQVc7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFTRCxzQkFBSSxpQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFVLEdBQVc7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QU0sYUFBYSxHQUF3RCxFQUFFLENBQUM7QUFDOUUsU0FBUyxtQkFBbUIsQ0FBQyxFQUFVLEVBQUUsSUFBd0M7SUFDN0UsSUFBRyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0lBQ0QsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUM3QixDQUFDO0FBRUQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDL0MsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDL0MsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbkQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDNUQsbUJBQW1CLENBQUMsdUJBQVEsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wU2VsZWN0b3IsIHsgUHJvcEVtdW0gfSBmcm9tIFwiLi9Qcm9wU2VsZWN0b3JcIjtcblxuZXhwb3J0IGVudW0gTm9kZVBhdGhUeXBlIHtcbiAgICBOYW1lLFxuICAgIFNpYmxpbmdJbmRleCxcbn1cbmNjWydOb2RlUGF0aFR5cGUnXSA9IE5vZGVQYXRoVHlwZTtcblxuY29uc3Qge2NjY2xhc3MsIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51LCBpbnNwZWN0b3IsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBtZW51KCdpMThuOueKtuaAgeaOp+WIti9Qcm9wQ29udHJvbGxlcicpXG5AaW5zcGVjdG9yKCdwYWNrYWdlczovL3Byb3Bjb250cm9sbGVyL2Rpc3QvaW5zcGVjdG9yLmpzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRW51bShOb2RlUGF0aFR5cGUpLCB0b29sdGlwOiBcIk5hbWU6IOagueaNrm5vZGUgbmFtZeS/neWtmCwgU2libGluZ0luZGV4OiDmoLnmja5ub2RlIOWcqGNoaWxkcmVu55qEaW5kZXjkv53lrZhcIn0pXG4gICAgbm9kZVBhdGhUeXBlID0gTm9kZVBhdGhUeXBlLlNpYmxpbmdJbmRleDtcblxuICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDogXCLmmK/lkKblkK/nlKjmjqfliLblmahcIn0pXG4gICAgb3BlbiA9IHRydWU7XG4gICAgXG4gICAgQHByb3BlcnR5KHtzZXJpYWxpemFibGU6IHRydWV9KVxuICAgIF91aWQgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eVxuICAgIGdldCB1aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aWQ7XG4gICAgfVxuICAgIHNldCB1aWQodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdWlkID0gdmFsO1xuICAgICAgICB0aGlzLl9yZWZyZXNoSWRFbnVtKCk7XG4gICAgfVxuICAgIFxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRW51bSh7fSl9KVxuICAgIF9zdGF0ZSA9IDA7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKHt9KX0pXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHNldCBzdGF0ZSh2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5kb0NvbnRyb2wodmFsKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfc3RhdGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuU3RyaW5nXSlcbiAgICBnZXQgc3RhdGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVzO1xuICAgIH1cbiAgICBzZXQgc3RhdGVzKHN0YXRlczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5fc3RhdGVzID0gc3RhdGVzO1xuICAgICAgICB0aGlzLl9yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KClcbiAgICBwcm9wZXJ0eUpzb24gPSAnJztcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2goKTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaElkRW51bSgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHt9XG5cbiAgICBwdWJsaWMgZG9Db250cm9sKHR5cGU6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICBsZXQgdCA9IHR5cGU7XG4gICAgICAgIGxldCBjdHJsID0gSlNPTi5wYXJzZSh0aGlzLnByb3BlcnR5SnNvbik7XG5cbiAgICAgICAgbGV0IG1hcCA9IGN0cmxbdF07ICAgICAgXG4gICAgICAgIGZvcihjb25zdCBwYXRoIGluIG1hcCkge1xuICAgICAgICAgICAgbGV0IHBhdGhzID0gcGF0aC5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzd2l0Y2goK3BhdGhzWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlUGF0aFR5cGUuTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmZpbmQocGF0aHNbMV0sIHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhdGhUeXBlLlNpYmxpbmdJbmRleDpcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuX2dldE5vZGVCeVNpYmxpbmdJbmRleChwYXRoc1sxXSwgdGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighbm9kZSkgeyBjYy53YXJuKFwiZmluZCBub2RlIGZhaWxkLCBwYXRoOlwiLCBwYXRoKTsgY29udGludWU7fVxuICAgICAgICAgICAgbGV0IG5vZGVQcm9wcyA9IG1hcFtwYXRoXTtcbiAgICAgICAgICAgIGZvcihjb25zdCBrZXkgaW4gbm9kZVByb3BzKSB7ICBcbiAgICAgICAgICAgICAgICBsZXQgZnVuYyA9IF9sb2NhbFNldEZ1bmNba2V5XTtcbiAgICAgICAgICAgICAgICBpZighZnVuYykgY29udGludWU7XG4gICAgICAgICAgICAgICAgZnVuYyhub2RlLCBub2RlUHJvcHNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldE5vZGVCeVNpYmxpbmdJbmRleChwYXRoOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgcGF0aCA9IChwYXRoWzBdID09ICcvJykgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGg7XG4gICAgICAgIGZvcihjb25zdCBlIG9mIHBhdGguc3BsaXQoXCIvXCIpKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlblsrZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVmcmVzaCgpIHtcbiAgICAgICAgaWYoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLl9zdGF0ZXMubWFwKCh2YWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWU6IHZhbCwgdmFsdWU6IGl9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKHRoaXMsICdzdGF0ZScsICdlbnVtTGlzdCcsIGFycmF5KTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLy8gRWRpdG9yLlV0aWxzLnJlZnJlc2hTZWxlY3RlZEluc3BlY3Rvcignbm9kZScsIHRoaXMubm9kZS51dWlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlZnJlc2hJZEVudW0oKSB7XG4gICAgICAgIGlmKENDX0VESVRPUikge1xuICAgICAgICAgICAgbGV0IGNvbXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhQcm9wQ29udHJvbGxlcik7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBjb21zLm1hcCgodmFsLCBpKSA9PiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiB7bmFtZTogdmFsLnVpZCwgdmFsdWU6IGl9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKFByb3BTZWxlY3RvciwgJ2N0cmxJZCcsICdlbnVtTGlzdCcsIGFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuXG5mdW5jdGlvbiBfc2V0UG9zaXRpb24obm9kZTogY2MuTm9kZSwgcHJvcDogYW55KSB7XG4gICAgbm9kZS5zZXRQb3NpdGlvbihwcm9wKTtcbn1cbmZ1bmN0aW9uIF9zZXRDb2xvcihub2RlOiBjYy5Ob2RlLCBwcm9wOiBhbnkpIHtcbiAgICBub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKHByb3AuciwgcHJvcC5nLCBwcm9wLmIpO1xufVxuZnVuY3Rpb24gX3NldFNhY2xlKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkge1xuICAgIG5vZGUuc2NhbGVYID0gcHJvcC5zY2FsZVg7XG4gICAgbm9kZS5zY2FsZVkgPSBwcm9wLnNjYWxlWTtcbn1cbmZ1bmN0aW9uIF9zZXRSb3RhdGlvbihub2RlOiBjYy5Ob2RlLCBwcm9wOiBhbnkpIHtcbiAgICBub2RlLmFuZ2xlID0gcHJvcDtcbn1cbmZ1bmN0aW9uIF9zZXRPcGFjaXR5KG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkge1xuICAgIG5vZGUub3BhY2l0eSA9IHByb3A7XG59XG5mdW5jdGlvbiBfc2V0U2xldyhub2RlOiBjYy5Ob2RlLCBwcm9wOiBhbnkpIHtcbiAgICBub2RlLnNrZXdYID0gcHJvcC5za2V3WDtcbiAgICBub2RlLnNrZXdZID0gcHJvcC5za2V3WTtcbn1cbmZ1bmN0aW9uIF9zZXRTaXplKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkge1xuICAgIG5vZGUuc2V0Q29udGVudFNpemUocHJvcCk7XG59XG5mdW5jdGlvbiBfc2V0QW5jaG9yKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkge1xuICAgIG5vZGUuYW5jaG9yWCA9IHByb3AuYW5jaG9yWDtcbiAgICBub2RlLmFuY2hvclkgPSBwcm9wLmFuY2hvclk7XG59XG5mdW5jdGlvbiBfc2V0QWN0aXZlKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkge1xuICAgIG5vZGUuYWN0aXZlID0gcHJvcDtcbn1cbmZ1bmN0aW9uIF9zZXRMYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCBwcm9wOiBhbnkpIHtcbiAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcHJvcDtcbn1cbmZ1bmN0aW9uIF9zZXRTcHJpdGVUZXh0dXJlKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkge1xuICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQW55KHt1dWlkOiBwcm9wfSwgKGVycm9yLCBkYXRhKSA9PiB7ICAgICAgICBcbiAgICAgICAgaWYoZXJyb3IpIHtcbiAgICAgICAgICAgIEVkaXRvci53YXJuKCdQcm9wQ29udHJvbGxlciAgbG9hZCBzcHJpdGUgdGV4dHVyZSBmYWlsZCcsIHByb3AsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH07XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBkYXRhO1xuICAgIH0pO1xufVxuXG5jb25zdCBfbG9jYWxTZXRGdW5jOiB7W2tleTogbnVtYmVyXTogKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkgPT4gdm9pZH0gPSB7fTtcbmZ1bmN0aW9uIF9yZWdpZXN0U2V0RnVuY3Rpb24oaWQ6IG51bWJlciwgZnVuYzogKG5vZGU6IGNjLk5vZGUsIHByb3A6IGFueSkgPT4gdm9pZCkge1xuICAgIGlmKF9sb2NhbFNldEZ1bmNbaWRdKSB7XG4gICAgICAgIGNjLndhcm4oXCJcIik7XG4gICAgfVxuICAgIF9sb2NhbFNldEZ1bmNbaWRdID0gZnVuYztcbn1cblxuX3JlZ2llc3RTZXRGdW5jdGlvbihQcm9wRW11bS5BY3RpdmUsIF9zZXRBY3RpdmUpO1xuX3JlZ2llc3RTZXRGdW5jdGlvbihQcm9wRW11bS5Qb3NpdGlvbiwgX3NldFBvc2l0aW9uKTtcbl9yZWdpZXN0U2V0RnVuY3Rpb24oUHJvcEVtdW0uQ29sb3IsIF9zZXRDb2xvcik7XG5fcmVnaWVzdFNldEZ1bmN0aW9uKFByb3BFbXVtLlNjYWxlLCBfc2V0U2FjbGUpO1xuX3JlZ2llc3RTZXRGdW5jdGlvbihQcm9wRW11bS5Sb3RhdGlvbiwgX3NldFJvdGF0aW9uKTtcbl9yZWdpZXN0U2V0RnVuY3Rpb24oUHJvcEVtdW0uT3BhY2l0eSwgX3NldE9wYWNpdHkpO1xuX3JlZ2llc3RTZXRGdW5jdGlvbihQcm9wRW11bS5TbGV3LCBfc2V0U2xldyk7XG5fcmVnaWVzdFNldEZ1bmN0aW9uKFByb3BFbXVtLlNpemUsIF9zZXRTaXplKTtcbl9yZWdpZXN0U2V0RnVuY3Rpb24oUHJvcEVtdW0uQW5jaG9yLCBfc2V0QW5jaG9yKTtcbl9yZWdpZXN0U2V0RnVuY3Rpb24oUHJvcEVtdW0uTGFiZWxfU3RyaW5nLCBfc2V0TGFiZWxTdHJpbmcpO1xuX3JlZ2llc3RTZXRGdW5jdGlvbihQcm9wRW11bS5TcHJpdGVfVGV4dHVyZSwgX3NldFNwcml0ZVRleHR1cmUpO1xuIl19