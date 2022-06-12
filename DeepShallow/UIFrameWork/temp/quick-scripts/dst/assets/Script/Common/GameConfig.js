
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f46b13WB51JHaffBN5ie56i', 'GameConfig');
// Script/Common/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    Object.defineProperty(GameConfig, "debugUserId", {
        get: function () {
            return this._debugUserId;
        },
        enumerable: false,
        configurable: true
    });
    GameConfig.gameId = '';
    //游戏版本
    GameConfig.version = '0.0.1';
    GameConfig._debugUserId = '';
    return GameConfig;
}());
exports.default = GameConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0dhbWVDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBVUEsQ0FBQztJQUhHLHNCQUFrQix5QkFBVzthQUE3QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQVBhLGlCQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE1BQU07SUFDaUIsa0JBQU8sR0FBRyxPQUFPLENBQUM7SUFFM0IsdUJBQVksR0FBRyxFQUFFLENBQUM7SUFJcEMsaUJBQUM7Q0FWRCxBQVVDLElBQUE7a0JBVm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZUlkID0gJyc7XG4gICAgLy/muLjmiI/niYjmnKxcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHZlcnNpb24gPSAnMC4wLjEnO1xuXG4gICAgcHVibGljIHN0YXRpYyBfZGVidWdVc2VySWQgPSAnJztcbiAgICBwdWJsaWMgc3RhdGljIGdldCBkZWJ1Z1VzZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlYnVnVXNlcklkO1xuICAgIH1cbn0iXX0=