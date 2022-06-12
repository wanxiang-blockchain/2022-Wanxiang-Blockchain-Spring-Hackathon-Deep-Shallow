
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/CameraCapture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29803DQKJdC2KvHyjig9y8N', 'CameraCapture');
// Script/Common/Components/CameraCapture.ts

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
var CocosHelper_1 = require("../../UIFrame/CocosHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CameraCapture = /** @class */ (function (_super) {
    __extends(CameraCapture, _super);
    function CameraCapture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.captureNode = null;
        _this.camera = null;
        return _this;
    }
    CameraCapture_1 = CameraCapture;
    CameraCapture.prototype.onLoad = function () {
        CameraCapture_1.inst = this;
        this.camera = this.getComponent(cc.Camera);
        if (!this.camera) {
            this.camera = this.addComponent(cc.Camera);
        }
        this.node.active = false;
    };
    CameraCapture.prototype.start = function () { };
    CameraCapture.prototype.captureTexture = function () {
        this.node.active = true;
        this.captureNode.active = false;
        var data = CocosHelper_1.default.captureScreen(this.camera, this.captureNode);
        this.captureNode.active = true;
        this.node.active = false;
        return data;
    };
    var CameraCapture_1;
    CameraCapture.inst = null;
    __decorate([
        property(cc.Node)
    ], CameraCapture.prototype, "captureNode", void 0);
    CameraCapture = CameraCapture_1 = __decorate([
        ccclass
    ], CameraCapture);
    return CameraCapture;
}(cc.Component));
exports.default = CameraCapture;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvQ2FtZXJhQ2FwdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFHOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUErQkM7UUExQkcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFcEIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUF3QnJDLENBQUM7c0JBL0JvQixhQUFhO0lBUTlCLDhCQUFNLEdBQU47UUFDSSxlQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUU3QixDQUFDO0lBRUQsNkJBQUssR0FBTCxjQUFVLENBQUM7SUFFWCxzQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxxQkFBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O0lBMUJNLGtCQUFJLEdBQWtCLElBQUksQ0FBQztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBTFgsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQStCakM7SUFBRCxvQkFBQztDQS9CRCxBQStCQyxDQS9CMEMsRUFBRSxDQUFDLFNBQVMsR0ErQnREO2tCQS9Cb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2Nvc0hlbHBlciBmcm9tIFwiLi4vLi4vVUlGcmFtZS9Db2Nvc0hlbHBlclwiO1xuaW1wb3J0IHsgQ29tbW9uVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHMvQ29tbW9uVXRpbHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFDYXB0dXJlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBpbnN0OiBDYW1lcmFDYXB0dXJlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcHR1cmVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIENhbWVyYUNhcHR1cmUuaW5zdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgaWYoIXRoaXMuY2FtZXJhKSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge31cblxuICAgIGNhcHR1cmVUZXh0dXJlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXB0dXJlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRhdGEgPSBDb2Nvc0hlbHBlci5jYXB0dXJlU2NyZWVuKHRoaXMuY2FtZXJhLCB0aGlzLmNhcHR1cmVOb2RlKTtcbiAgICAgICAgdGhpcy5jYXB0dXJlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cblxufVxuIl19