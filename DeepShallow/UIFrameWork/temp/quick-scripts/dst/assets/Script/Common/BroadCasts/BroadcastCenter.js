
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/BroadCasts/BroadcastCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0Jyb2FkQ2FzdHMvQnJvYWRjYXN0Q2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUErQztBQUUvQztJQUFBO0lBR0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxvQ0FBWTtBQUt6QjtJQUFBO0lBRUEsQ0FBQztJQURVLDZCQUFhLEdBQUcsSUFBSSxxQkFBUyxFQUFnQixDQUFDO0lBQ3pELHNCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksMENBQWU7QUFLNUIsZUFBZSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBQyxJQUFJO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBR1QsZUFBZSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvYWRjYXN0IH0gZnJvbSBcIi4uL1V0aWxzL0Jyb2FkQ2FzdFwiO1xuXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN0YXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBCcm9hZGNhc3RDZW50ZXIge1xuICAgIHN0YXRpYyBidWlsZGluZ1N0YXRlID0gbmV3IEJyb2FkY2FzdDxCdWlsZGluZ0RhdGE+KCk7ICAgIFxufVxuXG5cbkJyb2FkY2FzdENlbnRlci5idWlsZGluZ1N0YXRlLm9uKChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS5pZCwgZGF0YS5zdGF0ZSk7XG59LCB0aGlzKTtcblxuXG5Ccm9hZGNhc3RDZW50ZXIuYnVpbGRpbmdTdGF0ZS5kaXNwYXRjaCh7aWQ6IDEsIHN0YXRlOiBcInN1Y2Nlc3NcIn0pO1xuXG4iXX0=