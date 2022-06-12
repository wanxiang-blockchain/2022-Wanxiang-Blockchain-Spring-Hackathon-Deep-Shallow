"use strict";
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