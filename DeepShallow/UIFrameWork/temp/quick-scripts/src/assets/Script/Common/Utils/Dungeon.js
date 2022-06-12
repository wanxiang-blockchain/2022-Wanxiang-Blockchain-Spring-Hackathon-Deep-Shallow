"use strict";
cc._RF.push(module, '363928pIAdEs76ndgV1E6km', 'Dungeon');
// Script/Common/Utils/Dungeon.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dungeon = exports.GridType = void 0;
var MatchUtils_1 = require("./MatchUtils");
var GridType;
(function (GridType) {
    GridType[GridType["None"] = 0] = "None";
    GridType[GridType["Floor"] = 1] = "Floor";
    GridType[GridType["Wall"] = 2] = "Wall";
    GridType[GridType["OpenDoor"] = 3] = "OpenDoor";
    GridType[GridType["CloseDoor"] = 4] = "CloseDoor";
})(GridType = exports.GridType || (exports.GridType = {}));
var DirType;
(function (DirType) {
    DirType[DirType["None"] = 0] = "None";
    DirType[DirType["Left"] = 1] = "Left";
    DirType[DirType["Right"] = 2] = "Right";
    DirType[DirType["Up"] = 3] = "Up";
    DirType[DirType["Down"] = 4] = "Down";
    DirType[DirType["All"] = 5] = "All";
})(DirType || (DirType = {}));
var ALL_DIR_TYPES = [DirType.Left, DirType.Right, DirType.Up, DirType.Down];
var Dungeon = /** @class */ (function () {
    function Dungeon(width, height) {
        this.numRoomTries = 50; // 尝试生成房间的数量
        this.extraConnectorChance = 20; // 房间和走廊连接机会
        this.roomExtraSize = 0;
        this.windingPercent = 50;
        this.width = 51; // 地图的宽
        this.height = 51; // 地图的高
        this.rooms = []; // 房间
        this.map = []; // 原点是左下角
        this.regions = []; // 区间
        this.currentRegion = 0;
        this.width = width;
        this.height = height;
        for (var i = 0; i < width * height; i++) {
            this.map[i] = GridType.None;
            this.regions[i] = 0;
        }
    }
    Dungeon.prototype.generate = function () {
        this.initMap();
        this.addRooms();
        this.fillMaze();
        this.connectRegions();
        this.removeDeadEnds();
        return this.map;
    };
    Dungeon.prototype.initMap = function () {
        for (var i = 0; i < this.width * this.height; i++) {
            this.map[i] = GridType.Wall;
            this.regions[i] = 0;
        }
    };
    Dungeon.prototype.addRooms = function () {
        for (var i = 0; i < this.numRoomTries; i++) {
            var size = MatchUtils_1.MathUtils.limitInteger(1, 3 + this.roomExtraSize) * 2 + 1; // 是一个奇数
            var rectangularity = MatchUtils_1.MathUtils.limitInteger(0, 1 + Math.floor(size / 2)) * 2; // 控制矩形宽高比
            var w = size, h = size;
            if (0 === MatchUtils_1.MathUtils.limitInteger(0, 1))
                w += rectangularity;
            else
                h += rectangularity;
            var x = MatchUtils_1.MathUtils.limitInteger(0, Math.floor((this.width - w) / 2)) * 2 + 1;
            var y = MatchUtils_1.MathUtils.limitInteger(0, Math.floor((this.height - h) / 2)) * 2 + 1;
            var room = new cc.Rect(x, y, w, h); // 生成一个房间矩形
            // 检查矩形是否符合规则 -> 即是否有重叠
            var overlaps = false;
            for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
                var r = _a[_i];
                if (room.intersects(r)) {
                    overlaps = true;
                    break;
                }
            }
            if (overlaps) { // 有重叠, 放弃该房间
                continue;
            }
            this.currentRegion++;
            this._initRoomGrid(room);
            this.rooms.push(room);
        }
    };
    Dungeon.prototype._initRoomGrid = function (room) {
        var tmpVec2 = cc.v2(0, 0);
        for (var i = room.x; i < room.width + room.x; i++) {
            for (var j = room.y; j < room.height + room.y; j++) {
                tmpVec2.x = i;
                tmpVec2.y = j;
                this.carveGrid(tmpVec2, GridType.Floor);
            }
        }
    };
    /** 填充迷宫 */
    Dungeon.prototype.fillMaze = function () {
        for (var y = 1; y < this.height; y += 2) {
            for (var x = 1; x < this.width; x += 2) {
                var grid = cc.v2(x, y);
                if (this.getGridType(grid) !== GridType.Wall)
                    continue;
                this._growMaze(grid);
            }
        }
    };
    Dungeon.prototype._growMaze = function (start) {
        var cells = [];
        var lastDir = DirType.None;
        this.currentRegion++;
        this.carveGrid(start, GridType.Floor);
        cells.push(start);
        while (cells !== null && cells.length !== 0) {
            var cell = cells[cells.length - 1];
            var unmadeCells = [];
            for (var _i = 0, ALL_DIR_TYPES_1 = ALL_DIR_TYPES; _i < ALL_DIR_TYPES_1.length; _i++) {
                var dir_1 = ALL_DIR_TYPES_1[_i];
                if (this.canCarve(cell, dir_1))
                    unmadeCells.push(dir_1);
            }
            if (unmadeCells.length <= 0) {
                cells.pop();
                lastDir = DirType.None;
                continue;
            }
            // 当前grid有可以扩展的方向
            var dir = DirType.None;
            if (unmadeCells.indexOf(lastDir) !== -1 && MatchUtils_1.MathUtils.limitInteger(0, 100) > this.windingPercent) {
                dir = lastDir;
            }
            else {
                dir = MatchUtils_1.MathUtils.randomArray(unmadeCells);
            }
            this.carveGrid(cell.add(this.getDirGridOffset(dir)), GridType.Floor);
            this.carveGrid(cell.add(this.getDirGridOffset(dir).mul(2)), GridType.Floor);
            cells.push(cell.add(this.getDirGridOffset(dir).mul(2)));
            lastDir = dir;
        }
    };
    Dungeon.prototype.connectRegions = function () {
        var _this = this;
        var connectorRegions = {};
        var tmpVec2 = cc.v2(0, 0);
        for (var i = 1; i < this.width - 1; i++) {
            for (var j = 1; j < this.height - 1; j++) {
                tmpVec2.x = i;
                tmpVec2.y = j;
                if (this.getGridType(tmpVec2) !== GridType.Wall)
                    continue;
                var regions = [];
                for (var _i = 0, ALL_DIR_TYPES_2 = ALL_DIR_TYPES; _i < ALL_DIR_TYPES_2.length; _i++) {
                    var dir = ALL_DIR_TYPES_2[_i];
                    var grid = tmpVec2.add(this.getDirGridOffset(dir));
                    var region = this.regions[grid.y * this.width + grid.x];
                    if (region !== 0 && regions.indexOf(region) == -1)
                        regions.push(region);
                }
                if (regions.length < 2)
                    continue;
                connectorRegions[j * this.width + i] = regions;
            }
        }
        var connectors = [];
        var keys = Object.keys(connectorRegions);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            connectors.push(this.getGridByIdx(parseInt(key)));
        }
        var merged = {};
        var openRegions = new Set();
        for (var i = 0; i <= this.currentRegion; i++) {
            merged[i] = i;
            openRegions.add(i);
        }
        var count = 0;
        var _loop_1 = function () {
            count++;
            var connector = MatchUtils_1.MathUtils.randomArray(connectors);
            this_1.addJunction(connector);
            var regions = connectorRegions[connector.y * this_1.width + connector.x].map(function (v) { return merged[v]; });
            var dest = regions[0];
            regions.shift();
            var sources = regions;
            for (var i = 0; i <= this_1.currentRegion; i++) {
                if (sources.indexOf(merged[i]) !== -1) {
                    merged[i] = dest;
                }
            }
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var s = sources_1[_i];
                if (openRegions.has(s))
                    openRegions.delete(s);
            }
            connectors.filter(function (v) { return !_this.isRemove(merged, connectorRegions, connector, v); });
        };
        var this_1 = this;
        while (openRegions.size > 1 && count < 50) {
            _loop_1();
        }
    };
    Dungeon.prototype.addJunction = function (grid) {
        if (MatchUtils_1.MathUtils.limitInteger(0, 4)) {
            this.setGridType(grid, MatchUtils_1.MathUtils.limitInteger(0, 3) ? GridType.OpenDoor : GridType.Floor);
        }
        else {
            this.setGridType(grid, GridType.CloseDoor);
        }
    };
    Dungeon.prototype.isRemove = function (merged, connectRegions, connector, grid) {
        if (connector.sub(grid).len() < 2)
            return true;
        var regions = connectRegions[grid.y * this.width + grid.x].map(function (v) { return merged[v]; });
        var set = new Set(regions);
        if (set.size > 1)
            return false;
        // if(MathUtils.limitInteger(0, this.extraConnectorChance)) this.addJunction(grid);
        return true;
    };
    Dungeon.prototype.removeDeadEnds = function () {
        var done = false;
        var tmpVec2 = cc.v2(0, 0);
        var count = 0;
        while (!done && count < 500) {
            count++;
            done = true;
            for (var i = 1; i < this.width - 1; i++) {
                for (var j = 1; j < this.height - 1; j++) {
                    tmpVec2.x = i;
                    tmpVec2.y = j;
                    if (this.getGridType(tmpVec2) === GridType.Wall)
                        continue;
                    var exists = 0;
                    for (var _i = 0, ALL_DIR_TYPES_3 = ALL_DIR_TYPES; _i < ALL_DIR_TYPES_3.length; _i++) {
                        var dir = ALL_DIR_TYPES_3[_i];
                        var grid = tmpVec2.add(this.getDirGridOffset(dir));
                        if (this.map[grid.y * this.width + grid.x] !== GridType.Wall)
                            exists++;
                    }
                    if (exists !== 1)
                        continue;
                    done = false;
                    this.regions[j * this.height + i] = 0;
                    this.map[j * this.height + i] = GridType.Wall;
                }
            }
        }
    };
    Dungeon.prototype.instanceMap = function () {
    };
    Dungeon.prototype.getGridByIdx = function (idx) {
        var y = Math.floor(idx / this.width);
        var x = idx - y * this.width;
        return cc.v2(x, y);
    };
    /** 雕刻一个格子 */
    Dungeon.prototype.carveGrid = function (grid, type) {
        if (!this.checkGrid(grid))
            return;
        this.setGridType(grid, type);
        this.regions[grid.y * this.width + grid.x] = this.currentRegion;
    };
    Dungeon.prototype.setGridType = function (grid, type) {
        this.map[grid.y * this.width + grid.x] = type;
    };
    Dungeon.prototype.checkGrid = function (grid) {
        if (grid.x <= 0 || grid.x >= this.width - 1 || grid.y <= 0 || grid.y >= this.height - 1) {
            console.log(" set grid type error: ", grid);
            return false;
        }
        return true;
    };
    Dungeon.prototype.getGridType = function (grid) {
        return this.map[grid.y * this.width + grid.x];
    };
    Dungeon.prototype.canCarve = function (grid, dir) {
        var dirGrid = this.getDirGridOffset(dir);
        var nextGrid = grid.add(dirGrid.mul(3));
        if (nextGrid.x < 0 || nextGrid.x >= this.width || nextGrid.y < 0 || nextGrid.y >= this.height) {
            return false;
        }
        nextGrid = grid.add(dirGrid.mul(2));
        return this.getGridType(nextGrid) === GridType.Wall;
    };
    Dungeon.prototype.getDirGridOffset = function (dir) {
        var dirGrid = cc.v2(0, 0);
        switch (dir) {
            case DirType.Left:
                dirGrid.x = -1;
                break;
            case DirType.Right:
                dirGrid.x = 1;
                break;
            case DirType.Up:
                dirGrid.y = 1;
                break;
            case DirType.Down:
                dirGrid.y = -1;
                break;
        }
        return dirGrid;
    };
    return Dungeon;
}());
exports.Dungeon = Dungeon;

cc._RF.pop();