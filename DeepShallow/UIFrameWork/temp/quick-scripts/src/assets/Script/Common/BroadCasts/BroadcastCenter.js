"use strict";
cc._RF.push(module, 'c1631mjt99N+bqKIUwCcgeG', 'BroadcastCenter');
// Script/Common/BroadCasts/BroadcastCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastCenter = exports.BuildingData = void 0;
var BroadCast_1 = require("../Utils/BroadCast");
var BuildingData = /** @class */ (function () {
    function BuildingData() {
    }
    return BuildingData;
}());
exports.BuildingData = BuildingData;
var BroadcastCenter = /** @class */ (function () {
    function BroadcastCenter() {
    }
    BroadcastCenter.buildingState = new BroadCast_1.Broadcast();
    return BroadcastCenter;
}());
exports.BroadcastCenter = BroadcastCenter;
BroadcastCenter.buildingState.on(function (data) {
    console.log(data.id, data.state);
}, this);
BroadcastCenter.buildingState.dispatch({ id: 1, state: "success" });

cc._RF.pop();