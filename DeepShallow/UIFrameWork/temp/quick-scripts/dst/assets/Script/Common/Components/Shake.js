
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/Shake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50dd1CK5CZDxKf4hgecFu92', 'Shake');
// Script/Common/Components/Shake.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initial_x = 0;
        _this._initial_y = 0;
        _this._strength_x = 0;
        _this._strength_y = 0;
        return _this;
    }
    Shake_1 = Shake;
    /**
     *  创建抖动动画
     * @param {number} duration     动画持续时长
     * @param {number} strength_x   抖动幅度： x方向
     * @param {number} strength_y   抖动幅度： y方向
     * @returns {Shake}
     */
    Shake.create = function (duration, strength_x, strength_y) {
        var act = new Shake_1();
        act.initWithDuration(duration, strength_x, strength_y);
        return act;
    };
    Shake.prototype.initWithDuration = function (duration, strength_x, strength_y) {
        cc.ActionInterval.prototype['initWithDuration'].apply(this, arguments);
        this._strength_x = strength_x;
        this._strength_y = strength_y;
        return true;
    };
    Shake.prototype.fgRangeRand = function (min, max) {
        var rnd = Math.random();
        return rnd * (max - min) + min;
    };
    Shake.prototype.update = function (time) {
        var randx = this.fgRangeRand(-this._strength_x, this._strength_x);
        var randy = this.fgRangeRand(-this._strength_y, this._strength_y);
        this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
    };
    Shake.prototype.startWithTarget = function (target) {
        cc.ActionInterval.prototype['startWithTarget'].apply(this, arguments);
        this._initial_x = target.x;
        this._initial_y = target.y;
    };
    Shake.prototype.stop = function () {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
        cc.ActionInterval.prototype['stop'].apply(this);
    };
    var Shake_1;
    Shake = Shake_1 = __decorate([
        ccclass
    ], Shake);
    return Shake;
}(cc.ActionInterval));
exports.default = Shake;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvU2hha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQWlCO0lBQXBEO1FBQUEscUVBaURDO1FBOUNXLGdCQUFVLEdBQVksQ0FBQyxDQUFDO1FBQ3hCLGdCQUFVLEdBQVksQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQTJDcEMsQ0FBQztjQWpEb0IsS0FBSztJQVF0Qjs7Ozs7O09BTUc7SUFDVyxZQUFNLEdBQXBCLFVBQXFCLFFBQWUsRUFBQyxVQUFpQixFQUFDLFVBQWlCO1FBQ3BFLElBQUksR0FBRyxHQUFTLElBQUksT0FBSyxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sZ0NBQWdCLEdBQXZCLFVBQXdCLFFBQWUsRUFBQyxVQUFpQixFQUFDLFVBQWlCO1FBQ3ZFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsR0FBVSxFQUFDLEdBQVU7UUFDcEMsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLElBQVc7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVNLCtCQUFlLEdBQXRCLFVBQXVCLE1BQWM7UUFDakMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOztJQWhEZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlEekI7SUFBRCxZQUFDO0NBakRELEFBaURDLENBakRrQyxFQUFFLENBQUMsY0FBYyxHQWlEbkQ7a0JBakRvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG4gXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hha2UgZXh0ZW5kcyBjYy5BY3Rpb25JbnRlcnZhbFxue1xuIFxuICAgIHByaXZhdGUgX2luaXRpYWxfeCA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbF95IDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zdHJlbmd0aF94OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3N0cmVuZ3RoX3k6IG51bWJlciA9IDA7XG4gXG4gICAgLyoqXG4gICAgICogIOWIm+W7uuaKluWKqOWKqOeUu1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAgICAg5Yqo55S75oyB57ut5pe26ZW/XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVuZ3RoX3ggICDmipbliqjluYXluqbvvJogeOaWueWQkVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aF95ICAg5oqW5Yqo5bmF5bqm77yaIHnmlrnlkJFcbiAgICAgKiBAcmV0dXJucyB7U2hha2V9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKTogU2hha2Uge1xuICAgICAgICBsZXQgYWN0OlNoYWtlID0gbmV3IFNoYWtlKCk7XG4gICAgICAgIGFjdC5pbml0V2l0aER1cmF0aW9uKGR1cmF0aW9uLCBzdHJlbmd0aF94LCBzdHJlbmd0aF95KTtcbiAgICAgICAgcmV0dXJuIGFjdDtcbiAgICB9XG4gXG4gICAgcHVibGljIGluaXRXaXRoRHVyYXRpb24oZHVyYXRpb246bnVtYmVyLHN0cmVuZ3RoX3g6bnVtYmVyLHN0cmVuZ3RoX3k6bnVtYmVyKSB7XG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnaW5pdFdpdGhEdXJhdGlvbiddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fc3RyZW5ndGhfeCA9IHN0cmVuZ3RoX3g7XG4gICAgICAgIHRoaXMuX3N0cmVuZ3RoX3kgPSBzdHJlbmd0aF95O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gXG4gICAgcHVibGljIGZnUmFuZ2VSYW5kKG1pbjpudW1iZXIsbWF4Om51bWJlcikge1xuICAgICAgICBsZXQgcm5kOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiBybmQgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICB9XG4gXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lOm51bWJlcikge1xuICAgICAgICBsZXQgcmFuZHggPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF94LHRoaXMuX3N0cmVuZ3RoX3gpO1xuICAgICAgICBsZXQgcmFuZHkgPSB0aGlzLmZnUmFuZ2VSYW5kKC10aGlzLl9zdHJlbmd0aF95LHRoaXMuX3N0cmVuZ3RoX3kpO1xuICAgICAgICB0aGlzLmdldFRhcmdldCgpLnNldFBvc2l0aW9uKHJhbmR4ICsgdGhpcy5faW5pdGlhbF94LHJhbmR5ICsgdGhpcy5faW5pdGlhbF95KTtcbiAgICB9XG4gXG4gICAgcHVibGljIHN0YXJ0V2l0aFRhcmdldCh0YXJnZXQ6Y2MuTm9kZSkge1xuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGVbJ3N0YXJ0V2l0aFRhcmdldCddLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbF94ID0gdGFyZ2V0Lng7XG4gICAgICAgIHRoaXMuX2luaXRpYWxfeSA9IHRhcmdldC55O1xuICAgIH1cbiBcbiAgICBwdWJsaWMgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5nZXRUYXJnZXQoKS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLl9pbml0aWFsX3gsdGhpcy5faW5pdGlhbF95KSk7XG4gICAgICAgIGNjLkFjdGlvbkludGVydmFsLnByb3RvdHlwZVsnc3RvcCddLmFwcGx5KHRoaXMpO1xuICAgIH1cbn0iXX0=