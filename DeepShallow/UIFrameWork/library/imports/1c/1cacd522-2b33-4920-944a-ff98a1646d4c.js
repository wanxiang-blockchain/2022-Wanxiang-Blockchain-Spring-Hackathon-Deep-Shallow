"use strict";
cc._RF.push(module, '1cacdUiKzNJIJRK/5ihZG1M', 'GridScrollList');
// Script/Common/Components/GridScrollList.ts

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
exports.GridScrollList = void 0;
var ScrollViewHelper_1 = require("../../Common/Components/ScrollViewHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RowDirection;
(function (RowDirection) {
    RowDirection[RowDirection["LeftToRight"] = 0] = "LeftToRight";
    RowDirection[RowDirection["TopToBottom"] = 1] = "TopToBottom";
})(RowDirection || (RowDirection = {}));
var GridScrollList = /** @class */ (function (_super) {
    __extends(GridScrollList, _super);
    function GridScrollList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProxy = [];
        _this.scrollHelper = null;
        _this.rowDirection = RowDirection.LeftToRight;
        _this.colSpace = 10;
        _this.rowSpace = 10;
        _this.colCount = 3;
        _this.margin = 10;
        return _this;
    }
    GridScrollList.prototype.doLayout = function () {
        this._layoutItems();
    };
    GridScrollList.prototype._layoutItems = function () {
        this.scrollHelper.clearData();
        var data = this.allProxy;
        var elemSize = data.length ? data[0].region.size : cc.size(0, 0);
        var xSpace = this.colSpace;
        var ySpace = this.rowSpace;
        var colCount = this.colCount;
        var viewSize = this.scrollHelper.scrollView.node.getContentSize();
        if (this.rowDirection == RowDirection.TopToBottom) {
            var temp = viewSize.width;
            viewSize.width = viewSize.height;
            viewSize.height = temp;
            temp = elemSize.width;
            elemSize.width = elemSize.height;
            elemSize.height = temp;
        }
        var yMargin = this.margin;
        var xMargin = (viewSize.width - (colCount * elemSize.width + (colCount - 1) * xSpace)) / 2;
        var x = xMargin;
        var y = -yMargin + ySpace + elemSize.height;
        var dy = -ySpace - elemSize.height;
        var dx = xSpace + elemSize.width;
        if (this.rowDirection == RowDirection.TopToBottom) {
            dy = ySpace + elemSize.height;
            dx = -xSpace - elemSize.width;
            y = yMargin - dy;
        }
        for (var i = 0; i < data.length; i++) {
            x += dx;
            if (i % colCount == 0) {
                y += dy;
                x = xMargin;
            }
            var proxy = data[i];
            if (this.rowDirection == RowDirection.LeftToRight) {
                proxy.region.origin = cc.v2(x, y - elemSize.height);
            }
            else {
                proxy.region.origin = cc.v2(y, x - elemSize.height);
            }
            this.scrollHelper.addData(proxy);
        }
        if (this.rowDirection == RowDirection.LeftToRight) {
            this.scrollHelper.scrollView.content.setContentSize(viewSize.width, -y + elemSize.height + yMargin);
        }
        else {
            this.scrollHelper.scrollView.content.setContentSize(y + elemSize.height + yMargin, viewSize.width);
        }
    };
    __decorate([
        property(ScrollViewHelper_1.ScrollViewHelper)
    ], GridScrollList.prototype, "scrollHelper", void 0);
    __decorate([
        property({ type: cc.Enum(RowDirection) })
    ], GridScrollList.prototype, "rowDirection", void 0);
    __decorate([
        property()
    ], GridScrollList.prototype, "colSpace", void 0);
    __decorate([
        property()
    ], GridScrollList.prototype, "rowSpace", void 0);
    __decorate([
        property()
    ], GridScrollList.prototype, "colCount", void 0);
    __decorate([
        property()
    ], GridScrollList.prototype, "margin", void 0);
    GridScrollList = __decorate([
        ccclass
    ], GridScrollList);
    return GridScrollList;
}(cc.Component));
exports.GridScrollList = GridScrollList;

cc._RF.pop();