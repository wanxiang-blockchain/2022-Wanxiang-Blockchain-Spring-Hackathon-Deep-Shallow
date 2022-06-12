"use strict";
cc._RF.push(module, 'bea7406655LzLidqx+dJrtq', 'PlayerMgr');
// Script/Logic/Manager/PlayerMgr.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseMgr_1 = require("./BaseMgr");
var PlayerMgr = /** @class */ (function (_super) {
    __extends(PlayerMgr, _super);
    function PlayerMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerMgr.prototype.onConfigChange = function () {
    };
    return PlayerMgr;
}(BaseMgr_1.BaseMgr));
exports.default = PlayerMgr;

cc._RF.pop();