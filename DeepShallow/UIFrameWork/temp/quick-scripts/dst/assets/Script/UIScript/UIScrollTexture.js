
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIScrollTexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f727ajIaBJPYHecdX0LjtZ', 'UIScrollTexture');
// Script/UIScript/UIScrollTexture.ts

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
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIScrollTexture = /** @class */ (function (_super) {
    __extends(UIScrollTexture, _super);
    function UIScrollTexture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spTexture = null;
        _this.turn = 1;
        _this.progress = 0;
        return _this;
    }
    // onLoad () {}
    UIScrollTexture.prototype.start = function () {
    };
    UIScrollTexture.prototype.update = function (dt) {
        this.progress += dt * this.turn * 0.2;
        this.spTexture.getMaterial(0).setProperty('progress', this.progress);
        if (this.progress >= 1) {
            this.turn = -1;
        }
        if (this.progress <= 0) {
            this.turn = 1;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], UIScrollTexture.prototype, "spTexture", void 0);
    UIScrollTexture = __decorate([
        ccclass
    ], UIScrollTexture);
    return UIScrollTexture;
}(UIForm_1.UIScreen));
exports.default = UIScrollTexture;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlTY3JvbGxUZXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE2QztBQUV2QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBUTtJQUFyRDtRQUFBLHFFQXVCQztRQXJCd0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQVN6QyxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFXekIsQ0FBQztJQWxCRyxlQUFlO0lBRWYsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFJRCxnQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBcEJvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFBNkI7SUFGaEMsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXVCbkM7SUFBRCxzQkFBQztDQXZCRCxBQXVCQyxDQXZCNEMsaUJBQVEsR0F1QnBEO2tCQXZCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJU2NyZWVuIH0gZnJvbSBcIi4uL1VJRnJhbWUvVUlGb3JtXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTY3JvbGxUZXh0dXJlIGV4dGVuZHMgVUlTY3JlZW4ge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgc3BUZXh0dXJlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdHVybiA9IDE7XG4gICAgcHJpdmF0ZSBwcm9ncmVzcyA9IDA7XG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzICs9IGR0ICogdGhpcy50dXJuICogMC4yO1xuICAgICAgICB0aGlzLnNwVGV4dHVyZS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eSgncHJvZ3Jlc3MnLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgICAgaWYodGhpcy5wcm9ncmVzcyA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm4gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb2dyZXNzIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=