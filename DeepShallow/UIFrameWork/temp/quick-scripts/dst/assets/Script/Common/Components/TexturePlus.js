
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/TexturePlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvVGV4dHVyZVBsdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELG9EQUFtRDtBQUVuRCxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztBQUU5QyxJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDWiwyQ0FBRyxDQUFBO0lBQ0gsbURBQU8sQ0FBQSxDQUFTLFdBQVc7QUFDL0IsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixJQUFJLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV6QixJQUFBLEtBQXVELEVBQUUsQ0FBQyxVQUFVLEVBQW5FLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQU0zRTtJQUF5QywrQkFBa0I7SUFBM0Q7UUFBQSxxRUEwR0M7UUF0R0csY0FBUSxHQUFpQixJQUFJLENBQUM7UUFhOUIsMEJBQTBCO1FBQzFCLDhEQUE4RDtRQUM5RCxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLElBQUk7UUFDSiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixJQUFJO1FBR0osY0FBUSxHQUFjLEVBQUUsQ0FBQztRQVd6QixvQkFBYyxHQUF5QixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFHdEUsb0JBQWMsR0FBeUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFHaEYsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixnQkFBVSxHQUFpQixJQUFJ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QUFTLENBQUM7OENBR3RCO0lBb0JEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztpREFDdkI7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDOzhDQUcvQztJQU9EO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7dURBQ007SUFHdEU7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzt1REFDZ0I7SUFHaEY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDSTtJQTdDUixXQUFXO1FBSi9CLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLHlDQUF5QyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO09BQ0EsV0FBVyxDQTBHL0I7SUFBRCxrQkFBQztDQTFHRCxBQTBHQyxDQTFHd0MsRUFBRSxDQUFDLGVBQWUsR0EwRzFEO2tCQTFHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0dXJlQXNzZW1ibGVyIGZyb20gXCIuLi9Bc3NlbWJsZXJzL1RleHR1cmVBc3NlbWJsZXJcIjtcbmltcG9ydCB7IENvbW1vblV0aWxzIH0gZnJvbSBcIi4uL1V0aWxzL0NvbW1vblV0aWxzXCI7XG5cbmNvbnN0IHJlbmRlckVuZ2luZSA9IGNjLnJlbmRlcmVyLnJlbmRlckVuZ2luZTtcblxuZW51bSBUZXh0dXJlVHlwZSB7XG4gICAgQ3V0LCAgICAgICAgICAgIC8vIOijgeWJqlxuICAgIFN0cmV0Y2ggICAgICAgICAvLyDmi4nkvLgsIOaaguacquWunueOsFxufVxuXG5sZXQgX3ZlYzJfdGVtcCA9IG5ldyBjYy5WZWMyKCk7XG5sZXQgX21hdDRfdGVtcCA9IG5ldyBjYy5NYXQ0KCk7XG5cbmNvbnN0IHtjY2NsYXNzLCBtZW51LCBleGVjdXRlSW5FZGl0TW9kZSwgbWl4aW5zLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AbWVudSgnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnVpL1RleHR1cmVQbHVzJylcbkBtaXhpbnMoY2MuQmxlbmRGdW5jKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVBsdXMgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQge1xuICAgIHN0YXRpYyBUeXBlID0gVGV4dHVyZVR5cGU7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcbiAgICBfdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVGV4dHVyZTJEKVxuICAgIGdldCB0ZXh0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcbiAgICB9XG4gICAgc2V0IHRleHR1cmUodmFsOiBjYy5UZXh0dXJlMkQpIHtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHZhbDtcbiAgICAgICAgbGV0IGwgPSAtdmFsLndpZHRoLzIsIGIgPSAtdmFsLmhlaWdodC8yLCB0ID0gdmFsLmhlaWdodC8yLCByID0gdmFsLndpZHRoLzI7XG4gICAgICAgIHRoaXMucG9seWdvbiA9IFtjYy52MihsLCBiKSwgY2MudjIociwgYiksIGNjLnYyKHIsIHQpLCBjYy52MihsLCB0KV07XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHZhbC53aWR0aDsgdGhpcy5ub2RlLmhlaWdodCA9IHZhbC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1hdGVyaWFsKCk7XG4gICAgfVxuXG4gICAgLy8gX3R5cGU6IFRleHR1cmVUeXBlID0gMDtcbiAgICAvLyBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oVGV4dHVyZVR5cGUpLCBzZXJpYWxpemFibGU6IHRydWV9KVxuICAgIC8vIGdldCB0eXBlKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICAvLyB9XG4gICAgLy8gc2V0IHR5cGUodmFsOiBUZXh0dXJlVHlwZSkge1xuICAgIC8vICAgICB0aGlzLl90eXBlID0gdmFsO1xuICAgIC8vICAgICB0aGlzLnNldFZlcnRzRGlydHkoKTtcbiAgICAvLyB9XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFtjYy5WZWMyXSwgc2VyaWFsaXphYmxlOiB0cnVlfSlcbiAgICBfcG9seWdvbjogY2MuVmVjMltdID0gW107XG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuVmVjMl0sIHNlcmlhbGl6YWJsZTogdHJ1ZX0pXG4gICAgcHVibGljIGdldCBwb2x5Z29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9seWdvbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBwb2x5Z29uKHBvaW50czogY2MuVmVjMltdKSB7XG4gICAgICAgIHRoaXMuX3BvbHlnb24gPSBwb2ludHM7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVZlcnRzKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5FbnVtKGNjLm1hY3JvLkJsZW5kRmFjdG9yKSwgb3ZlcnJpZGU6IHRydWV9KVxuICAgIHNyY0JsZW5kRmFjdG9yOiBjYy5tYWNyby5CbGVuZEZhY3RvciA9IGNjLm1hY3JvLkJsZW5kRmFjdG9yLlNSQ19BTFBIQTtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRW51bShjYy5tYWNyby5CbGVuZEZhY3RvciksIG92ZXJyaWRlOiB0cnVlfSlcbiAgICBkc3RCbGVuZEZhY3RvcjogY2MubWFjcm8uQmxlbmRGYWN0b3IgPSBjYy5tYWNyby5CbGVuZEZhY3Rvci5PTkVfTUlOVVNfU1JDX0FMUEhBO1xuXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgZWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIF9hc3NlbWJsZXI6IGNjLkFzc2VtYmxlciA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZVsnX2hpdFRlc3QnXSA9IHRoaXMuX2hpdFRlc3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIHRleHR1cmUgcGx1c1wiKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZS5nZXREZWx0YVgoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IGUuZ2V0RGVsdGFZKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVZlcnRzKCkge1xuICAgICAgICB0aGlzLnNldFZlcnRzRGlydHkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX3VwZGF0ZU1hdGVyaWFsKCkge1xuICAgICAgICBsZXQgdGV4dHVyZSA9IHRoaXMuX3RleHR1cmU7XG4gICAgICAgIGxldCBtYXRlcmlhbCA9IHRoaXMuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgIGlmKG1hdGVyaWFsKSB7XG4gICAgICAgICAgICBpZihtYXRlcmlhbC5nZXREZWZpbmUoXCJVU0VfVEVYVFVSRVwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuZGVmaW5lKFwiVVNFX1RFWFRVUkVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInRleHR1cmVcIiwgdGV4dHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1snX19wcm90b19fJ10uX3VwZGF0ZUJsZW5kRnVuYy5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFZlcnRzRGlydHkoKTsgICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBfdmFsaWRhdGVSZW5kZXIoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBfcmVzZXRBc3NlbWJsZXIoKSB7XG4gICAgICAgIGxldCBhc3NlbWJsZXIgPSB0aGlzLl9hc3NlbWJsZXIgPSBuZXcgVGV4dHVyZUFzc2VtYmxlcigpO1xuICAgICAgICBhc3NlbWJsZXIuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IoKTtcbiAgICAgICAgdGhpcy5zZXRWZXJ0c0RpcnR5KCk7XG4gICAgfVxuXG4gICAgX2hpdFRlc3QgKGNhbWVyYVB0OiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICBsZXQgc2l6ZSA9IG5vZGUuZ2V0Q29udGVudFNpemUoKSxcbiAgICAgICAgICAgIHcgPSBzaXplLndpZHRoLFxuICAgICAgICAgICAgaCA9IHNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgdGVzdFB0ID0gX3ZlYzJfdGVtcDtcbiAgICAgICAgXG4gICAgICAgIG5vZGVbJ191cGRhdGVXb3JsZE1hdHJpeCddKCk7XG4gICAgICAgIC8vIElmIHNjYWxlIGlzIDAsIGl0IGNhbid0IGJlIGhpdC5cbiAgICAgICAgaWYgKCFjYy5NYXQ0LmludmVydChfbWF0NF90ZW1wLCBub2RlWydfd29ybGRNYXRyaXgnXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjYy5WZWMyLnRyYW5zZm9ybU1hdDQodGVzdFB0LCBjYW1lcmFQdCwgX21hdDRfdGVtcCk7XG4gICAgICAgIHJldHVybiBDb21tb25VdGlscy5pc0luUG9seWdvbih0ZXN0UHQsIHRoaXMucG9seWdvbik7XG4gICAgfVxufSJdfQ==