"use strict";
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