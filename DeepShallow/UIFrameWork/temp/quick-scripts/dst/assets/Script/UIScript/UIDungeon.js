
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIScript/UIDungeon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77bb60WxChA/5WbElweSd49', 'UIDungeon');
// Script/UIScript/UIDungeon.ts

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
var Dungeon_1 = require("../Common/Utils/Dungeon");
var FormMgr_1 = require("../UIFrame/FormMgr");
var UIForm_1 = require("../UIFrame/UIForm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIDungeon = /** @class */ (function (_super) {
    __extends(UIDungeon, _super);
    function UIDungeon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pfGrid = null;
        _this.dungeon = null;
        return _this;
        // update (dt) {}
    }
    UIDungeon.prototype.start = function () {
        this.view.Back.addClick(function () {
            FormMgr_1.default.backScene();
        }, this);
        this.dungeon = new Dungeon_1.Dungeon(63, 63);
        var map = this.dungeon.generate();
        var size = this.pfGrid.data.width;
        for (var j = 0; j < this.dungeon.height; j++) {
            for (var x = 0; x < this.dungeon.width; x++) {
                var node = cc.instantiate(this.pfGrid);
                node.color = this.getColor(map[j * this.dungeon.width + x]);
                this.view.Items.addChild(node);
                node.setPosition(x * size, j * size);
            }
        }
    };
    UIDungeon.prototype.getColor = function (type) {
        switch (type) {
            case Dungeon_1.GridType.Wall:
                return cc.Color.BLACK;
            case Dungeon_1.GridType.Floor:
                return cc.Color.WHITE;
            case Dungeon_1.GridType.OpenDoor:
                return cc.Color.BLUE;
            case Dungeon_1.GridType.CloseDoor:
                return cc.Color.RED;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], UIDungeon.prototype, "pfGrid", void 0);
    UIDungeon = __decorate([
        ccclass
    ], UIDungeon);
    return UIDungeon;
}(UIForm_1.UIScreen));
exports.default = UIDungeon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlTY3JpcHQvVUlEdW5nZW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUE0RDtBQUM1RCw4Q0FBeUM7QUFDekMsNENBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFRO0lBQS9DO1FBQUEscUVBd0NDO1FBckN3QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3RDLGFBQU8sR0FBWSxJQUFJLENBQUM7O1FBaUNoQyxpQkFBaUI7SUFDckIsQ0FBQztJQWhDRyx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BCLGlCQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDeEM7U0FDSjtJQUNMLENBQUM7SUFFTyw0QkFBUSxHQUFoQixVQUFpQixJQUFjO1FBQzNCLFFBQU8sSUFBSSxFQUFFO1lBQ1QsS0FBSyxrQkFBUSxDQUFDLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixLQUFLLGtCQUFRLENBQUMsS0FBSztnQkFDZixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLEtBQUssa0JBQVEsQ0FBQyxRQUFRO2dCQUNsQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUssa0JBQVEsQ0FBQyxTQUFTO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQWpDb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQTBCO0lBSDdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3QzdCO0lBQUQsZ0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3NDLGlCQUFRLEdBd0M5QztrQkF4Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlEdW5nZW9uX0F1dG8gZnJvbSBcIi4uL0F1dG9TY3JpcHRzL1VJRHVuZ2Vvbl9BdXRvXCI7XG5pbXBvcnQgeyBEdW5nZW9uLCBHcmlkVHlwZSB9IGZyb20gXCIuLi9Db21tb24vVXRpbHMvRHVuZ2VvblwiO1xuaW1wb3J0IEZvcm1NZ3IgZnJvbSBcIi4uL1VJRnJhbWUvRm9ybU1nclwiO1xuaW1wb3J0IHsgVUlTY3JlZW4gfSBmcm9tIFwiLi4vVUlGcmFtZS9VSUZvcm1cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUR1bmdlb24gZXh0ZW5kcyBVSVNjcmVlbiB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHBmR3JpZDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHZpZXc6IFVJRHVuZ2Vvbl9BdXRvO1xuICAgIHByaXZhdGUgZHVuZ2VvbjogRHVuZ2VvbiA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy52aWV3LkJhY2suYWRkQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRm9ybU1nci5iYWNrU2NlbmUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZHVuZ2VvbiA9IG5ldyBEdW5nZW9uKDYzLCA2Myk7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLmR1bmdlb24uZ2VuZXJhdGUoKTtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnBmR3JpZC5kYXRhLndpZHRoO1xuICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLmR1bmdlb24uaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgeD0wOyB4PHRoaXMuZHVuZ2Vvbi53aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmR3JpZCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IHRoaXMuZ2V0Q29sb3IobWFwW2ogKiB0aGlzLmR1bmdlb24ud2lkdGggKyB4XSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lkl0ZW1zLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oeCAqIHNpemUsIGogKiBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb2xvcih0eXBlOiBHcmlkVHlwZSkge1xuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSBHcmlkVHlwZS5XYWxsOlxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5Db2xvci5CTEFDSztcbiAgICAgICAgICAgIGNhc2UgR3JpZFR5cGUuRmxvb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgY2FzZSBHcmlkVHlwZS5PcGVuRG9vcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2MuQ29sb3IuQkxVRTtcbiAgICAgICAgICAgIGNhc2UgR3JpZFR5cGUuQ2xvc2VEb29yOlxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5Db2xvci5SRUQ7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==