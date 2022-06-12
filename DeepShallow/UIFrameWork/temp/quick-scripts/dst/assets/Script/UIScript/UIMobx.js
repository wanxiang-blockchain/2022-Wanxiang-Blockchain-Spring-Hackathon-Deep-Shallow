
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIMobx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f8edzvxDRFL6ID2paZM9Ss', 'UIMobx');
// Script/UIScript/UIMobx.ts

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
var mobx_1 = require("../Common/Mobx/mobx");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIMobx = /** @class */ (function (_super) {
    __extends(UIMobx, _super);
    function UIMobx() {
        var _this = _super.call(this) || this;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.obj = { num3: 0 };
        // mobx6版本中使用注解必须调用此方法
        mobx_1.makeAutoObservable(_this);
        return _this;
    }
    Object.defineProperty(UIMobx.prototype, "total", {
        get: function () {
            return this.num1 * this.num2;
        },
        enumerable: false,
        configurable: true
    });
    UIMobx.prototype.refreshView = function () {
        this.view.Txt1.string = '' + this.num1;
        this.view.Txt2.string = '' + this.num2;
        this.view.Txt3.string = '' + this.total;
    };
    // onLoad () {}
    UIMobx.prototype.start = function () {
        var _this = this;
        this.view.Close.addClick(function () {
            _this.closeSelf();
        }, this);
        mobx_1.autorun(this.refreshView.bind(this));
        mobx_1.when(function () { return _this.total > 10; }).then(function () {
            _this.view.Txt4.node.active = _this.total > 10;
        });
        mobx_1.reaction((function () { return _this.obj && _this.obj.num3; }), function (arg, prev, r) {
            if (!cc.isValid(_this.node))
                return;
            _this.view.Txt5.string = '' + arg;
            // r.dispose();
        });
        this.view.Btn1.addClick(function () {
            _this.num1++;
        }, this);
        this.view.Btn2.addClick(function () {
            _this.num2++;
        }, this);
        this.view.Btn3.addClick(function () {
            _this.obj.num3++;
        }, this);
    };
    UIMobx.prototype.onShow = function () {
    };
    __decorate([
        mobx_1.observable
    ], UIMobx.prototype, "num1", void 0);
    __decorate([
        mobx_1.observable
    ], UIMobx.prototype, "num2", void 0);
    __decorate([
        mobx_1.computed
    ], UIMobx.prototype, "total", null);
    __decorate([
        mobx_1.observable
    ], UIMobx.prototype, "obj", void 0);
    UIMobx = __decorate([
        ccclass
    ], UIMobx);
    return UIMobx;
}(UIForm_1.UIWindow));
exports.default = UIMobx;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlNb2J4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUF5SDtBQUN6SCw0Q0FBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVE7SUFLeEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFFVyxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUlULFNBQUcsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQVR4QixzQkFBc0I7UUFDdEIseUJBQWtCLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQzdCLENBQUM7SUFJUyxzQkFBSSx5QkFBSzthQUFUO1lBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFHRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUVELGVBQWU7SUFFZixzQkFBSyxHQUFMO1FBQUEsaUJBMkJDO1FBMUJHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNyQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsY0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFckMsV0FBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILGVBQVEsQ0FBQyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUF6QixDQUF5QixDQUFDLEVBQUUsVUFBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLENBQWtCO1lBQ25GLElBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBUTtZQUNuQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUNqQyxlQUFlO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEIsS0FBSSxDQUFDLElBQUksRUFBRyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwQixLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUViLENBQUM7SUFPRCx1QkFBTSxHQUFOO0lBRUEsQ0FBQztJQW5EVztRQUFYLGlCQUFVO3dDQUFVO0lBQ1Q7UUFBWCxpQkFBVTt3Q0FBVTtJQUNYO1FBQVQsZUFBUTt1Q0FFUjtJQUNXO1FBQVgsaUJBQVU7dUNBQWlCO0lBaEJYLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpRTFCO0lBQUQsYUFBQztDQWpFRCxBQWlFQyxDQWpFbUMsaUJBQVEsR0FpRTNDO2tCQWpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSU1vYnhfQXV0byBmcm9tIFwiLi4vQXV0b1NjcmlwdHMvVUlNb2J4X0F1dG9cIjtcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCByZWFjdGlvbiwgYXV0b3J1biwgd2hlbiwgSVJlYWN0aW9uUHVibGljLCBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tIFwiLi4vQ29tbW9uL01vYngvbW9ieFwiO1xuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tIFwiLi4vVUlGcmFtZS9VSUZvcm1cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1vYnggZXh0ZW5kcyBVSVdpbmRvdyB7XG5cblxuICAgIHZpZXc6IFVJTW9ieF9BdXRvO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIG1vYng254mI5pys5Lit5L2/55So5rOo6Kej5b+F6aG76LCD55So5q2k5pa55rOVXG4gICAgICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgQG9ic2VydmFibGUgbnVtMSA9IDA7XG4gICAgQG9ic2VydmFibGUgbnVtMiA9IDA7XG4gICAgQGNvbXB1dGVkIGdldCB0b3RhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtMSAqIHRoaXMubnVtMjtcbiAgICB9XG4gICAgQG9ic2VydmFibGUgb2JqID0ge251bTM6IDB9O1xuXG4gICAgcmVmcmVzaFZpZXcoKSB7XG4gICAgICAgIHRoaXMudmlldy5UeHQxLnN0cmluZyA9ICcnICsgdGhpcy5udW0xO1xuICAgICAgICB0aGlzLnZpZXcuVHh0Mi5zdHJpbmcgPSAnJyArIHRoaXMubnVtMjtcbiAgICAgICAgdGhpcy52aWV3LlR4dDMuc3RyaW5nID0gJycgKyB0aGlzLnRvdGFsO1xuICAgIH1cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnZpZXcuQ2xvc2UuYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGYoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGF1dG9ydW4odGhpcy5yZWZyZXNoVmlldy5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHdoZW4oKCkgPT4gdGhpcy50b3RhbCA+IDEwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5UeHQ0Lm5vZGUuYWN0aXZlID0gdGhpcy50b3RhbCA+IDEwO1xuICAgICAgICB9KTtcblxuICAgICAgICByZWFjdGlvbigoKCkgPT4gdGhpcy5vYmogJiYgdGhpcy5vYmoubnVtMyksIChhcmc6IGFueSwgcHJldjogbnVtYmVyLCByOiBJUmVhY3Rpb25QdWJsaWMpID0+IHtcbiAgICAgICAgICAgIGlmKCFjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHJldHVybiA7XG4gICAgICAgICAgICB0aGlzLnZpZXcuVHh0NS5zdHJpbmcgPSAnJyArIGFyZztcbiAgICAgICAgICAgIC8vIHIuZGlzcG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZpZXcuQnRuMS5hZGRDbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm51bTEgKys7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLnZpZXcuQnRuMi5hZGRDbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm51bTIgKys7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudmlldy5CdG4zLmFkZENsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JqLm51bTMgKys7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBcblxuICAgIFxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBcbiAgICB9XG5cblxufVxuIl19