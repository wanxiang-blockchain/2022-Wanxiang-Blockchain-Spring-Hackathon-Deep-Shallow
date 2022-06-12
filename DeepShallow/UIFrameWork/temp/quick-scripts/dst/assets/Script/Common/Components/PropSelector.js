
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/PropSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95cf9sVxtJHbIz3btfe766G', 'PropSelector');
// Script/Common/Components/PropSelector.ts

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
exports.PropEmum = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, menu = _a.menu, property = _a.property;
var PropEmum;
(function (PropEmum) {
    PropEmum[PropEmum["Active"] = 0] = "Active";
    PropEmum[PropEmum["Position"] = 1] = "Position";
    PropEmum[PropEmum["Rotation"] = 2] = "Rotation";
    PropEmum[PropEmum["Scale"] = 3] = "Scale";
    PropEmum[PropEmum["Anchor"] = 4] = "Anchor";
    PropEmum[PropEmum["Size"] = 5] = "Size";
    PropEmum[PropEmum["Color"] = 6] = "Color";
    PropEmum[PropEmum["Opacity"] = 7] = "Opacity";
    PropEmum[PropEmum["Slew"] = 8] = "Slew";
    PropEmum[PropEmum["Label_String"] = 9] = "Label_String";
    PropEmum[PropEmum["Sprite_Texture"] = 10] = "Sprite_Texture";
})(PropEmum = exports.PropEmum || (exports.PropEmum = {}));
cc['PropEmum'] = PropEmum;
var ControllerId = cc.Enum({});
var PropSelector = /** @class */ (function (_super) {
    __extends(PropSelector, _super);
    function PropSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ctrlId = 0;
        // 被控制的属性
        _this.props = [];
        return _this;
        // update (dt) {} 
    }
    __decorate([
        property({ type: ControllerId, tooltip: "控制器的名称" })
    ], PropSelector.prototype, "ctrlId", void 0);
    __decorate([
        property({ type: [cc.Enum(PropEmum)], tooltip: "被控制的属性" })
    ], PropSelector.prototype, "props", void 0);
    PropSelector = __decorate([
        ccclass,
        menu('i18n:状态控制/PropSelector'),
        executeInEditMode
    ], PropSelector);
    return PropSelector;
}(cc.Component));
exports.default = PropSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvUHJvcFNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQStDLEVBQUUsQ0FBQyxVQUFVLEVBQTNELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUVuRSxJQUFZLFFBYVg7QUFiRCxXQUFZLFFBQVE7SUFDaEIsMkNBQU0sQ0FBQTtJQUNOLCtDQUFRLENBQUE7SUFDUiwrQ0FBUSxDQUFBO0lBQ1IseUNBQUssQ0FBQTtJQUNMLDJDQUFNLENBQUE7SUFDTix1Q0FBSSxDQUFBO0lBQ0oseUNBQUssQ0FBQTtJQUNMLDZDQUFPLENBQUE7SUFDUCx1Q0FBSSxDQUFBO0lBRUosdURBQVksQ0FBQTtJQUNaLDREQUFjLENBQUE7QUFDbEIsQ0FBQyxFQWJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBYW5CO0FBRUQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUUxQixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBS2pDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBU0M7UUFORyxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsU0FBUztRQUVULFdBQUssR0FBZSxFQUFFLENBQUM7O1FBRXZCLGtCQUFrQjtJQUN0QixDQUFDO0lBTkc7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQztnREFDdkM7SUFHWDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7K0NBQ2xDO0lBTk4sWUFBWTtRQUhoQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQzlCLGlCQUFpQjtPQUNHLFlBQVksQ0FTaEM7SUFBRCxtQkFBQztDQVRELEFBU0MsQ0FUeUMsRUFBRSxDQUFDLFNBQVMsR0FTckQ7a0JBVG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgZXhlY3V0ZUluRWRpdE1vZGUsIG1lbnUsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIFByb3BFbXVtIHtcbiAgICBBY3RpdmUsXG4gICAgUG9zaXRpb24sXG4gICAgUm90YXRpb24sXG4gICAgU2NhbGUsXG4gICAgQW5jaG9yLFxuICAgIFNpemUsXG4gICAgQ29sb3IsXG4gICAgT3BhY2l0eSxcbiAgICBTbGV3LFxuXG4gICAgTGFiZWxfU3RyaW5nLFxuICAgIFNwcml0ZV9UZXh0dXJlLFxufVxuXG5jY1snUHJvcEVtdW0nXSA9IFByb3BFbXVtO1xuXG5jb25zdCBDb250cm9sbGVySWQgPSBjYy5FbnVtKHt9KTtcblxuQGNjY2xhc3NcbkBtZW51KCdpMThuOueKtuaAgeaOp+WIti9Qcm9wU2VsZWN0b3InKVxuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wU2VsZWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIFxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ29udHJvbGxlcklkLCB0b29sdGlwOiBcIuaOp+WItuWZqOeahOWQjeensFwifSlcbiAgICBjdHJsSWQgPSAwO1xuICAgIC8vIOiiq+aOp+WItueahOWxnuaAp1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLkVudW0oUHJvcEVtdW0pXSwgdG9vbHRpcDogXCLooqvmjqfliLbnmoTlsZ7mgKdcIn0pICAgICAgICAgICAgICAgXG4gICAgcHJvcHM6IFByb3BFbXVtW10gPSBbXTsgICAgXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSBcbn1cbiJdfQ==