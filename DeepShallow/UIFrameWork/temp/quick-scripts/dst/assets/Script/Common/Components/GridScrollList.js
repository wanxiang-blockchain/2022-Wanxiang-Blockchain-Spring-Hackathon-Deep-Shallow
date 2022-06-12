
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/GridScrollList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvR3JpZFNjcm9sbExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUFvRztBQUU5RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYiw2REFBVyxDQUFBO0lBQ1gsNkRBQVcsQ0FBQTtBQUNmLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUdEO0lBQW9DLGtDQUFZO0lBQWhEO1FBQUEscUVBb0VDO1FBbkVVLGNBQVEsR0FBOEIsRUFBRSxDQUFDO1FBRXpDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFnQixZQUFZLENBQUMsV0FBVyxDQUFDO1FBRXJELGNBQVEsR0FBWSxFQUFFLENBQUM7UUFFdkIsY0FBUSxHQUFZLEVBQUUsQ0FBQztRQUV2QixjQUFRLEdBQVksQ0FBQyxDQUFDO1FBRXRCLFlBQU0sR0FBWSxFQUFFLENBQUM7O0lBdURqQyxDQUFDO0lBckRVLGlDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLHFDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMs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YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0RztJQUNMLENBQUM7SUFoRUQ7UUFEQyxRQUFRLENBQUMsbUNBQWdCLENBQUM7d0RBQ2lCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQzt3REFDc0I7SUFFN0Q7UUFEQyxRQUFRLEVBQUU7b0RBQ29CO0lBRS9CO1FBREMsUUFBUSxFQUFFO29EQUNvQjtJQUUvQjtRQURDLFFBQVEsRUFBRTtvREFDbUI7SUFFOUI7UUFEQyxRQUFRLEVBQUU7a0RBQ2tCO0lBYnBCLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FvRTFCO0lBQUQscUJBQUM7Q0FwRUQsQUFvRUMsQ0FwRW1DLEVBQUUsQ0FBQyxTQUFTLEdBb0UvQztBQXBFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjcm9sbFZpZXdIZWxwZXIsIFNjcm9sbFZpZXdFbGVtZW50UHJveHkgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL0NvbXBvbmVudHMvU2Nyb2xsVmlld0hlbHBlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBSb3dEaXJlY3Rpb24ge1xuICAgIExlZnRUb1JpZ2h0LFxuICAgIFRvcFRvQm90dG9tXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR3JpZFNjcm9sbExpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBhbGxQcm94eSA6IFNjcm9sbFZpZXdFbGVtZW50UHJveHlbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShTY3JvbGxWaWV3SGVscGVyKVxuICAgIHB1YmxpYyBzY3JvbGxIZWxwZXI6U2Nyb2xsVmlld0hlbHBlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkVudW0oUm93RGlyZWN0aW9uKX0pXG4gICAgcHJpdmF0ZSByb3dEaXJlY3Rpb246Um93RGlyZWN0aW9uID0gUm93RGlyZWN0aW9uLkxlZnRUb1JpZ2h0O1xuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHJpdmF0ZSBjb2xTcGFjZSA6IG51bWJlciA9IDEwO1xuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHJpdmF0ZSByb3dTcGFjZSA6IG51bWJlciA9IDEwO1xuICAgIEBwcm9wZXJ0eSgpXG4gICAgcHJpdmF0ZSBjb2xDb3VudCA6IG51bWJlciA9IDM7XG4gICAgQHByb3BlcnR5KClcbiAgICBwcml2YXRlIG1hcmdpbiA6IG51bWJlciA9IDEwO1xuXG4gICAgcHVibGljIGRvTGF5b3V0KCkge1xuICAgICAgICB0aGlzLl9sYXlvdXRJdGVtcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xheW91dEl0ZW1zKCkge1xuICAgICAgICB0aGlzLnNjcm9sbEhlbHBlci5jbGVhckRhdGEoKTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmFsbFByb3h5O1xuICAgICAgICBsZXQgZWxlbVNpemUgPSBkYXRhLmxlbmd0aD9kYXRhWzBdLnJlZ2lvbi5zaXplOmNjLnNpemUoMCwgMCk7XG4gICAgICAgIGxldCB4U3BhY2UgPSB0aGlzLmNvbFNwYWNlO1xuICAgICAgICBsZXQgeVNwYWNlID0gdGhpcy5yb3dTcGFjZTtcbiAgICAgICAgbGV0IGNvbENvdW50ID0gdGhpcy5jb2xDb3VudDtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy5zY3JvbGxIZWxwZXIuc2Nyb2xsVmlldy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGlmKHRoaXMucm93RGlyZWN0aW9uID09IFJvd0RpcmVjdGlvbi5Ub3BUb0JvdHRvbSkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSB2aWV3U2l6ZS53aWR0aDtcbiAgICAgICAgICAgIHZpZXdTaXplLndpZHRoID0gdmlld1NpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdmlld1NpemUuaGVpZ2h0ID0gdGVtcDtcbiAgICAgICAgICAgIHRlbXAgPSBlbGVtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGVsZW1TaXplLndpZHRoID0gZWxlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgZWxlbVNpemUuaGVpZ2h0ID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeU1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICAgICAgICBsZXQgeE1hcmdpbiA9ICh2aWV3U2l6ZS53aWR0aCAtIChjb2xDb3VudCAqIGVsZW1TaXplLndpZHRoICsgKGNvbENvdW50IC0gMSkgKiB4U3BhY2UpKSAvIDI7XG4gICAgICAgIFxuXG4gICAgICAgIGxldCB4ID0geE1hcmdpbjtcbiAgICAgICAgbGV0IHkgPSAtIHlNYXJnaW4gKyB5U3BhY2UgKyBlbGVtU2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCBkeSA9IC15U3BhY2UgLSBlbGVtU2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCBkeCA9IHhTcGFjZSArIGVsZW1TaXplLndpZHRoO1xuICAgICAgICBpZih0aGlzLnJvd0RpcmVjdGlvbiA9PSBSb3dEaXJlY3Rpb24uVG9wVG9Cb3R0b20pIHtcbiAgICAgICAgICAgIGR5ID0geVNwYWNlICsgZWxlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgZHggPSAteFNwYWNlIC0gZWxlbVNpemUud2lkdGg7XG4gICAgICAgICAgICB5ID0geU1hcmdpbiAtIGR5O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4ICs9IGR4O1xuICAgICAgICAgICAgaWYoaSAlIGNvbENvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICB5ICs9IGR5O1xuICAgICAgICAgICAgICAgIHggPSB4TWFyZ2luO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb3h5ID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGlmKHRoaXMucm93RGlyZWN0aW9uID09IFJvd0RpcmVjdGlvbi5MZWZ0VG9SaWdodCkge1xuICAgICAgICAgICAgICAgIHByb3h5LnJlZ2lvbi5vcmlnaW4gPSBjYy52Mih4LCB5IC0gZWxlbVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJveHkucmVnaW9uLm9yaWdpbiA9IGNjLnYyKHksIHggLSBlbGVtU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxIZWxwZXIuYWRkRGF0YShwcm94eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yb3dEaXJlY3Rpb24gPT0gUm93RGlyZWN0aW9uLkxlZnRUb1JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhlbHBlci5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUodmlld1NpemUud2lkdGgsIC15ICsgZWxlbVNpemUuaGVpZ2h0ICsgeU1hcmdpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhlbHBlci5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUoeSArIGVsZW1TaXplLmhlaWdodCArIHlNYXJnaW4sIHZpZXdTaXplLndpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=