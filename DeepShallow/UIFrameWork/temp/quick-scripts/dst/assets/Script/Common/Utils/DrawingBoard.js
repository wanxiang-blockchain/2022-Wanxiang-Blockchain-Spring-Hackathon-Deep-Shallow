
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/DrawingBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54b2dNYr/FCsJ51TWLTWJoT', 'DrawingBoard');
// Script/Common/Utils/DrawingBoard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 画板：
 * 可使用任意颜色绘制矩形，三角形，圆，直线，并统计每种颜色的像素个数;
 * 擦除图案时，设置画板的颜色为透明色再进行绘制即可;
 * 使用的坐标系为原点在左上角，X轴向右为正，Y轴向下为正。
 */
var DrawingBoard = /** @class */ (function () {
    /**
     * 可对每个像素点绘制的画板，画板使用的坐标系原点为左下角，X轴向右为正，Y轴向上为正
     * @param width     画板宽度
     * @param height    画板高度
     * @param data      指定画板初始内容，参数为记录颜色分量的一维数组，不传入参数时，画板中全部像素为透明
     */
    function DrawingBoard(width, height, data) {
        this.init(width, height, data);
    }
    Object.defineProperty(DrawingBoard.prototype, "width", {
        /**画板宽度 */
        get: function () { return this._witdh; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawingBoard.prototype, "height", {
        /**画板高度 */
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    /**
     * 对画板进行初始化，会清空已绘制的所有内容
     * @param width     画板宽度
     * @param height    画板高度
     * @param data      指定画板初始内容，参数为记录颜色分量的一维数组，不传入参数时，画板内容为全部透明的矩形
     */
    DrawingBoard.prototype.init = function (width, height, data) {
        this.tempColor = this.tempR = this.tempG = this.tempB = this.tempA = 0;
        this.curColor = 0;
        this._witdh = Math.round(width);
        this._height = Math.round(height);
        this.initPointColor();
        this.initPixelColor();
        this.initLineData();
        if (!!data) {
            this.setData(data);
        }
    };
    DrawingBoard.prototype.initPointColor = function () {
        if (!this.pointColor) {
            this.pointColor = [];
        }
        for (var x = 0; x < this.width; ++x) {
            if (!this.pointColor[x]) {
                this.pointColor[x] = [];
            }
            for (var y = 0; y < this.height; ++y) {
                this.pointColor[x][y] = 0;
            }
        }
        this.colorCount = {};
        this.colorCount[0] = this.width * this.height;
    };
    DrawingBoard.prototype.initPixelColor = function () {
        this.buffer = new ArrayBuffer(this.width * this.height * 4);
        this.pixelColor = new Uint8Array(this.buffer);
        this.pixelColor.fill(0);
    };
    /**重置画板，画板的宽高不变，但会清空已绘制的所有内容，恢复至透明状态 */
    DrawingBoard.prototype.reset = function () {
        this.resetPointColor();
        this.resetPixelColor();
    };
    DrawingBoard.prototype.resetPointColor = function () {
        for (var x = this.width - 1; x >= 0; --x) {
            for (var y = this.height - 1; y >= 0; --y) {
                this.pointColor[x][y] = 0;
            }
        }
        for (var key in this.colorCount) {
            this.colorCount[key] = 0;
        }
    };
    DrawingBoard.prototype.resetPixelColor = function () {
        this.pixelColor.fill(0);
    };
    /**
     * 传入图像的像素数据，直接设置画板的内容，图像尺寸必须与画板一致，若需要重新设置画板大小，请使用 init() 函数
     * @param data 记录各像素颜色分量的一维数组
     */
    DrawingBoard.prototype.setData = function (data) {
        var pixelData = new Uint8Array(data);
        if (pixelData.length != this.width * this.height * 4) {
            console.warn("画板设置数据失败，数据长度与画板大小不一致。");
            // return;
            pixelData = pixelData.subarray(0, this.width * this.height * 4);
        }
        this.setPixelColorByRGBA(pixelData);
        this.setPointColorByRGBA(pixelData);
    };
    /**
     * 记录各像素颜色分量
     * @param data 颜色分量一维数组
     */
    DrawingBoard.prototype.setPixelColorByRGBA = function (data) {
        this.pixelColor.set(data);
    };
    /**
     * 按像素点的坐标记录像素点的颜色值
     * @param data 颜色分量一维数组
     */
    DrawingBoard.prototype.setPointColorByRGBA = function (data) {
        this.colorCount = {};
        for (var y = 0; y < this.height; ++y) {
            var i = y * this.width * 4;
            for (var x = 0; x < this.width; ++x) {
                var color = this.convertToNumber(data[i++], data[i++], data[i++], data[i++]);
                this.pointColor[x][y] = color;
                if (!this.colorCount[color]) {
                    this.colorCount[color] = 1;
                }
                else {
                    this.colorCount[color] += 1;
                }
            }
        }
    };
    /**
     * 获取画板中的数据
     * @param data 用于接收数据的数组
     * @returns {number[]} 返回存储各像素点颜色分量的一维数组
     */
    DrawingBoard.prototype.copyData = function (data) {
        if (undefined === data) {
            data = [];
        }
        for (var i = 0, count = this.pixelColor.length; i < count; ++i) {
            data[i] = this.pixelColor[i];
        }
        return data;
    };
    /**
     * 获取画板中记录每个像素的颜色分量的数据
     * @returns 将直接返回画板内部的数组；注：若使用者需要对该数据进行修改，请使用 copyData 方法获取，以免影响画板的像素个数计数功能
     */
    DrawingBoard.prototype.getData = function () {
        return this.pixelColor;
    };
    /**获取画板内部使用的内存块，若仅需要获取像素数据，不进一步处理，使用 getData 即可 */
    DrawingBoard.prototype.getBuffer = function () {
        return this.buffer;
    };
    /**
     * 获取指定颜色的像素的个数
     * @param r 颜色的r分量
     * @param g 颜色的g分量
     * @param b 颜色的b分量
     * @param a 颜色透明度，默认为255
     */
    DrawingBoard.prototype.getColorCount = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        var c = this.convertToNumber(r, g, b, a);
        return this.colorCount[c];
    };
    /**
     * 设置画板绘制图案使使用的颜色
     * @param r 包含RGBA分量的颜色对象，或者颜色的r分量
     * @param g 颜色的g分量
     * @param b 颜色的b分量
     * @param a 颜色透明度，默认为255
     */
    DrawingBoard.prototype.setColor = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        this.curColor = this.convertToNumber(r, g, b, a);
        if (!this.colorCount[this.curColor]) {
            this.colorCount[this.curColor] = 0;
        }
        this.tempColor = this.curColor;
        this.tempR = r;
        this.tempG = g;
        this.tempB = b;
        this.tempA = a;
    };
    /**清空所有已绘制的内容 */
    DrawingBoard.prototype.clear = function () {
        this.reset();
    };
    DrawingBoard.prototype.initLineData = function () {
        this.previousLineEndPos = new Vec2();
        this.previousLineEndPosT = new Vec2();
        this.previousLineEndPosB = new Vec2();
        this.previousLineCircleEnd = true;
        this.previousLineWidth = 1;
    };
    /**
     * 移动画笔到指定的位置，调用 lineTo 函数时将使用该点作为直线的起点
     * @param x     坐标X
     * @param y     坐标Y
     */
    DrawingBoard.prototype.moveTo = function (x, y) {
        x = Math.round(x);
        y = Math.round(y);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x, y);
        this.previousLineEndPosB.set(x, y);
    };
    /**
     * 设置线宽
     */
    DrawingBoard.prototype.setLineWidth = function (w) {
        this.previousLineWidth = w;
    };
    /**
     * 设置线段端点样式
     * @param b 线段端点是否为圆形
     */
    DrawingBoard.prototype.setLineCircleEnd = function (b) {
        this.previousLineCircleEnd = b;
    };
    /**
     * 绘制直线，使用默认的颜色、线宽和线段端点样式
     * @param x1        起点坐标X
     * @param y1        起点坐标Y
     * @param x2        终点坐标X
     * @param y2        终点坐标Y
     */
    DrawingBoard.prototype.line = function (x1, y1, x2, y2) {
        x1 = Math.round(x1);
        x2 = Math.round(x2);
        y1 = Math.round(y1);
        y2 = Math.round(y2);
        if (x1 == x2 && y1 == y2)
            return;
        var width = this.previousLineWidth;
        var circleEnd = this.previousLineCircleEnd;
        this.previousLineEndPos.set(x2, y2);
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (x1 == x2) {
            offsetX = Math.round(width * 0.5);
        }
        else if (y1 == y2) {
            offsetY = Math.round(width * 0.5);
        }
        else {
            var k = (y2 - y1) / (x2 - x1);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        this.previousLineEndPosT.set(x2 - offsetX, y2 + offsetY);
        this.previousLineEndPosB.set(x2 + offsetX, y2 - offsetY);
        var p1 = new Vec2(x1, y1);
        var p2 = new Vec2(x2, y2);
        if (x1 > x2) {
            p1.x = x2;
            p1.y = y2;
            p2.x = x1;
            p2.y = y1;
        }
        this._drawLine(p1, p2, width, offsetX, offsetY, rateK);
        if (circleEnd) {
            this._drawCircle(x1, y1, width * 0.5);
            this._drawCircle(x2, y2, width * 0.5);
        }
    };
    /**
     * 绘制到指定坐标的直线，起点为上一次绘制的直线的终点，使用默认的颜色、宽度和线段端点样式
     * @param x     终点坐标X
     * @param y     终点坐标Y
     */
    DrawingBoard.prototype.lineTo = function (x, y) {
        x = Math.round(x);
        y = Math.round(y);
        if (this.previousLineEndPos.x == x && this.previousLineEndPos.y == y)
            return;
        var width = this.previousLineWidth;
        var circleEnd = this.previousLineCircleEnd;
        var x1 = this.previousLineEndPos.x;
        var y1 = this.previousLineEndPos.y;
        var x2 = x;
        var y2 = y;
        if (x1 > x2) {
            x1 = x2;
            y1 = y2;
            x2 = this.previousLineEndPos.x;
            y2 = this.previousLineEndPos.y;
        }
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (x1 == x2) {
            offsetX = Math.round(width * 0.5);
        }
        else if (y1 == y2) {
            offsetY = Math.round(width * 0.5);
        }
        else {
            var k = (y2 - y1) / (x2 - x1);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        if (!circleEnd) {
            if (this.previousLineEndPos.x != this.previousLineEndPosT.x
                || this.previousLineEndPos.y != this.previousLineEndPosT.y) {
                var p1 = new Vec2(this.previousLineEndPos.x - offsetX, this.previousLineEndPos.y + offsetY);
                var p2 = new Vec2(this.previousLineEndPos.x + offsetX, this.previousLineEndPos.y - offsetY);
                this._drawTriangle([p1, p2, this.previousLineEndPosT]);
                this._drawTriangle([p1, p2, this.previousLineEndPosB]);
            }
        }
        else {
            this._drawCircle(x1, y1, width * 0.5);
            this._drawCircle(x2, y2, width * 0.5);
        }
        this._drawLine(new Vec2(x1, y1), new Vec2(x2, y2), width, offsetX, offsetY, rateK);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x - offsetX, y + offsetY);
        this.previousLineEndPosB.set(x + offsetX, y - offsetY);
    };
    /**
     * 绘制直线，不包含线段端点样式
     * @param p1        线段起点坐标
     * @param p2        线段终点坐标
     * @param width     线段宽度
     * @param color     线段颜色
     */
    DrawingBoard.prototype._drawLine = function (p1, p2, width, offsetX, offsetY, slopeRate) {
        if (p1.y == p2.y) {
            //水平直线
            var x = p1.x < p2.x ? p1.x : p2.x;
            this._drawRect(new Vec2(x, Math.round(p1.y - width * 0.5)), Math.abs(p1.x - p2.x), width);
        }
        else if (p1.x == p2.x) {
            //垂直直线
            var y = p1.y < p2.y ? p1.y : p2.y;
            this._drawRect(new Vec2(Math.round(p1.x - width * 0.5), y), width, Math.abs(p1.y - p2.y));
        }
        else {
            //倾斜直线
            var inverseK = (p1.x - p2.x) / (p1.y - p2.y);
            var p1t = new Vec2(p1.x - offsetX, p1.y + offsetY);
            var p1b = new Vec2(p1.x + offsetX, p1.y - offsetY);
            var p2t = new Vec2(p2.x - offsetX, p2.y + offsetY);
            var p2b = new Vec2(p2.x + offsetX, p2.y - offsetY);
            var p1c = new Vec2();
            var p2c = new Vec2();
            var height = Math.round(width * slopeRate);
            if (p2.y > p1.y) {
                if (p1b.x < p2t.x) {
                    p1c.x = p1b.x;
                    p1c.y = p1b.y + height;
                    p2c.x = p2t.x;
                    p2c.y = p2t.y - height;
                    this._drawVerticalTriangle(p1c, p1b, p1t);
                    this._drawParallelogram(p1b, p2c, height);
                    this._drawVerticalTriangle(p2t, p2c, p2b);
                }
                else {
                    p1c.x = p1b.x;
                    p1c.y = Math.round(p2t.y - (p1c.x - p2t.x) * inverseK);
                    p2c.x = p2t.x;
                    p2c.y = Math.round(p1b.y + (p1b.x - p2c.x) * inverseK);
                    this._drawVerticalTriangle(p2t, p2c, p1t);
                    this._drawParallelogram(p2c, p1b, p2t.y - p2c.y);
                    this._drawVerticalTriangle(p1c, p1b, p2b);
                }
            }
            else {
                if (p1t.x < p2b.x) {
                    p1c.x = p1t.x;
                    p1c.y = p1t.y - height;
                    p2c.x = p2b.x;
                    p2c.y = p2b.y + height;
                    this._drawVerticalTriangle(p1t, p1c, p1b);
                    this._drawParallelogram(p1c, p2b, height);
                    this._drawVerticalTriangle(p2c, p2b, p2t);
                }
                else {
                    p1c.x = p1t.x;
                    p1c.y = Math.round(p2b.y - (p1c.x - p2b.x) * inverseK);
                    p2c.x = p2b.x;
                    p2c.y = Math.round(p1t.y + (p1t.x - p2c.x) * inverseK);
                    this._drawVerticalTriangle(p2c, p2b, p1b);
                    this._drawParallelogram(p2b, p1c, p1t.y - p1c.y);
                    this._drawVerticalTriangle(p1t, p1c, p2t);
                }
            }
        }
    };
    /**
     * 绘制矩形
     * @param x     矩形左下角的坐标X
     * @param y     矩形左下角的坐标Y
     * @param w     矩形宽度
     * @param h     矩形高度
     */
    DrawingBoard.prototype.rect = function (x, y, w, h) {
        this._drawRect(new Vec2(x, y), w, h);
    };
    /**
     * 绘制矩形
     * @param p         矩形左下顶点的坐标
     * @param w         矩形宽度
     * @param h         矩形高度
     * @param color     矩形填充的颜色
     */
    DrawingBoard.prototype._drawRect = function (p, w, h) {
        var minX = this.clampX(p.x);
        var maxX = this.clampX(p.x + w);
        var minY = this.clampY(p.y);
        var maxY = this.clampY(p.y + h);
        // for (let x = minX; x <= maxX; ++x) {
        //     for (let y = minY; y <= maxY; ++y) {
        //         this._drawPixel(x, y);
        //     }
        // }
        for (var y = minY; y <= maxY; ++y) {
            this._drawRowPixel(minX, maxX, y);
        }
    };
    /**
     * 绘制平行四边形，平行四边形的左右两边与Y轴平行
     * @param p1        左下顶点坐标
     * @param p2        右下顶点坐标
     * @param height    垂直边高度
     * @param color     颜色
     */
    DrawingBoard.prototype._drawParallelogram = function (p1, p2, height) {
        if (p1.x == p2.x)
            return;
        var k = (p2.y - p1.y) / (p2.x - p1.x);
        var minX = this._minX(p1.x);
        var maxX = this._maxX(p2.x);
        for (var x = minX; x <= maxX; ++x) {
            var minY = p1.y + Math.round((x - p1.x) * k);
            var maxY = minY + height;
            minY = this._minY(minY);
            maxY = this._maxY(maxY);
            this._drawColPixel(minY, maxY, x);
            // for (let y = minY; y <= maxY; ++y) {
            //     this._drawPixel(x, y);
            // }
        }
    };
    /**
     * 绘制三角形
     * @param x1    顶点1坐标X
     * @param y1    顶点1坐标Y
     * @param x2    顶点2坐标X
     * @param y2    顶点2坐标Y
     * @param x3    顶点3坐标X
     * @param y3    顶点3坐标Y
     */
    DrawingBoard.prototype.triangle = function (x1, y1, x2, y2, x3, y3) {
        var pList = [];
        pList.push(new Vec2(x1, y1));
        pList.push(new Vec2(x2, y2));
        pList.push(new Vec2(x3, y3));
        this._drawTriangle(pList);
    };
    /**
     * 绘制任意三角形
     * @param p1    顶点坐标
     * @param p2
     * @param p3
     * @param color 填充颜色
     */
    DrawingBoard.prototype._drawTriangle = function (pList) {
        pList.sort(function (a, b) {
            return a.x - b.x;
        });
        var p1 = pList[0];
        var p2 = pList[1];
        var p3 = pList[2];
        if (p1.x == p2.x) {
            if (p1.x == p3.x)
                return;
            if (p1.y < p2.y) {
                p1 = pList[1];
                p2 = pList[0];
            }
            this._drawVerticalTriangle(p1, p2, p3);
            return;
        }
        var k = (p3.y - p1.y) / (p3.x - p1.x);
        var p4 = new Vec2(p2.x, Math.round(p1.y + (p2.x - p1.x) * k));
        if (p4.y == p2.y)
            return;
        if (p4.y < p2.y) {
            this._drawVerticalTriangle(p2, p4, p1);
            this._drawVerticalTriangle(p2, p4, p3);
        }
        else {
            this._drawVerticalTriangle(p4, p2, p1);
            this._drawVerticalTriangle(p4, p2, p3);
        }
    };
    /**
     * 绘制一条边与Y轴平行的三角形
     * @param p1    三角形垂直边的 上 顶点坐标
     * @param p2    三角形垂直边的 下 顶点坐标
     * @param p3    三角形 左侧或右侧 顶点坐标
     * @param color 要绘制的颜色
     */
    DrawingBoard.prototype._drawVerticalTriangle = function (p1, p2, p3) {
        if (p3.x == p1.x)
            return;
        var k1 = (p3.y - p1.y) / (p3.x - p1.x);
        var k2 = (p3.y - p2.y) / (p3.x - p2.x);
        var maxX = p3.x, minX = p1.x;
        if (maxX < minX) {
            maxX = p1.x;
            minX = p3.x;
        }
        minX = this._minX(minX);
        maxX = this._maxX(maxX);
        for (var x = minX; x <= maxX; ++x) {
            var maxY = this.clampY(Math.round(p1.y + (x - p1.x) * k1));
            var minY = this.clampY(Math.round(p2.y + (x - p2.x) * k2));
            this._drawColPixel(minY, maxY, x);
            // for (let y = minY; y <= maxY; ++y) {
            //     this._drawPixel(x, y);
            // }
        }
    };
    /**
    * 绘制一个圆
    * @param x         圆心坐标x
    * @param y         圆心坐标y
    * @param radius    圆的半径
    */
    DrawingBoard.prototype.circle = function (x, y, radius) {
        x = Math.round(x);
        y = Math.round(y);
        this._drawCircle(x, y, radius);
    };
    DrawingBoard.prototype._drawCircle = function (x, y, radius) {
        radius = Math.round(radius);
        if (radius == 0)
            return;
        //三角形的斜边的平方
        var dis = radius * radius;
        // let minX = this._minX(x - radius);
        // let maxX = this._maxX(x + radius);
        // for (let i = minX; i <= maxX; ++i) {
        //     let r = x - i;
        //     r = Math.round(Math.sqrt(dis - r * r));
        //     let minY = this._minY(y - r);
        //     let maxY = this._maxY(y + r);
        //     for (let j = minY; j <= maxY; ++j) {
        //         this._drawPixel(i, j);
        //     }
        // }
        var minY = this.clampY(y - radius);
        var maxY = this.clampY(y + radius);
        for (var j = minY; j <= maxY; ++j) {
            var r = j - y;
            r = Math.round(Math.sqrt(dis - r * r));
            var minX = this.clampX(x - r);
            var maxX = this.clampX(x + r);
            this._drawRowPixel(minX, maxX, j);
        }
    };
    DrawingBoard.prototype._minX = function (x) {
        return x >= 0 ? x : 0;
    };
    DrawingBoard.prototype._maxX = function (x) {
        return x < this.width ? x : this.width - 1;
    };
    DrawingBoard.prototype._minY = function (y) {
        return y >= 0 ? y : 0;
    };
    DrawingBoard.prototype._maxY = function (y) {
        return y < this.height ? y : this.height - 1;
    };
    DrawingBoard.prototype.clampX = function (x) {
        if (x < 0)
            return 0;
        if (x >= this.width)
            return this.width - 1;
        return x;
    };
    DrawingBoard.prototype.clampY = function (y) {
        if (y < 0)
            return 0;
        if (y >= this.height)
            return this.height - 1;
        return y;
    };
    /**绘制一个像素点的颜色 */
    DrawingBoard.prototype._drawPixel = function (x, y) {
        if (this.pointColor[x][y] == this.tempColor)
            return;
        var index = (y * this.width + x) * 4;
        this.pixelColor[index] = this.tempR;
        this.pixelColor[index + 1] = this.tempG;
        this.pixelColor[index + 2] = this.tempB;
        this.pixelColor[index + 3] = this.tempA;
        var c = this.pointColor[x][y];
        this.colorCount[c]--;
        this.colorCount[this.tempColor]++;
        this.pointColor[x][y] = this.tempColor;
    };
    /**
     * 连续绘制一行中的像素点
     * @param startX    起点X坐标
     * @param endX      终点X坐标
     * @param y         Y坐标
     */
    DrawingBoard.prototype._drawRowPixel = function (startX, endX, y) {
        var index = (y * this.width + startX) * 4;
        for (var x = startX; x <= endX; ++x) {
            if (this.pointColor[x][y] != this.tempColor) {
                this.pixelColor[index] = this.tempR;
                this.pixelColor[index + 1] = this.tempG;
                this.pixelColor[index + 2] = this.tempB;
                this.pixelColor[index + 3] = this.tempA;
                var c = this.pointColor[x][y];
                this.colorCount[c]--;
                this.colorCount[this.tempColor]++;
                this.pointColor[x][y] = this.tempColor;
            }
            index += 4;
        }
    };
    /**
     * 连续绘制一列中的像素点
     * @param startY    起点Y坐标
     * @param endY      终点Y坐标
     * @param x         X坐标
     */
    DrawingBoard.prototype._drawColPixel = function (startY, endY, x) {
        var index = (startY * this.width + x) * 4;
        for (var y = startY; y <= endY; ++y) {
            if (this.pointColor[x][y] != this.tempColor) {
                this.pixelColor[index] = this.tempR;
                this.pixelColor[index + 1] = this.tempG;
                this.pixelColor[index + 2] = this.tempB;
                this.pixelColor[index + 3] = this.tempA;
                var c = this.pointColor[x][y];
                this.colorCount[c]--;
                this.colorCount[this.tempColor]++;
                this.pointColor[x][y] = this.tempColor;
            }
            index += this.width * 4;
        }
    };
    /**
     * 将RGBA颜色分量转换为一个数值表示的颜色，颜色分量为0~255之间的值
     * @param r
     * @param g
     * @param b
     * @param a
     */
    DrawingBoard.prototype.convertToNumber = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        return ((r & 0xfe) << 23) | (g << 16) | (b << 8) | a;
    };
    /**将十六进制的颜色转换为RGBA分量表示的颜色 */
    DrawingBoard.prototype.convertToRGBA = function (color) {
        return {
            r: (color & 0xef000000) >> 23,
            g: (color & 0x00ff0000) >> 16,
            b: (color & 0x0000ff00) >> 8,
            a: (color & 0x000000ff),
        };
    };
    return DrawingBoard;
}());
exports.default = DrawingBoard;
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.set = function (p, y) {
        if (typeof p === "number") {
            this.x = p;
            this.y = y;
        }
        else {
            this.x = p.x;
            this.y = p.y;
        }
    };
    return Vec2;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL0RyYXdpbmdCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUEyQkk7Ozs7O09BS0c7SUFDSCxzQkFBbUIsS0FBYSxFQUFFLE1BQWMsRUFBRSxJQUFrQjtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhDRCxzQkFBVywrQkFBSztRQURoQixVQUFVO2FBQ1YsY0FBNkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHbEQsc0JBQVcsZ0NBQU07UUFEakIsVUFBVTthQUNWLGNBQThCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBOEJwRDs7Ozs7T0FLRztJQUNJLDJCQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLElBQWtCO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxD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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOeUu+adv++8mlxuICog5Y+v5L2/55So5Lu75oSP6aKc6Imy57uY5Yi255+p5b2i77yM5LiJ6KeS5b2i77yM5ZyG77yM55u057q/77yM5bm257uf6K6h5q+P56eN6aKc6Imy55qE5YOP57Sg5Liq5pWwO1xuICog5pOm6Zmk5Zu+5qGI5pe277yM6K6+572u55S75p2/55qE6aKc6Imy5Li66YCP5piO6Imy5YaN6L+b6KGM57uY5Yi25Y2z5Y+vO1xuICog5L2/55So55qE5Z2Q5qCH57O75Li65Y6f54K55Zyo5bem5LiK6KeS77yMWOi9tOWQkeWPs+S4uuato++8jFnovbTlkJHkuIvkuLrmraPjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZ0JvYXJkIHtcbiAgICBwcml2YXRlIF93aXRkaDogbnVtYmVyO1xuICAgIC8qKueUu+adv+WuveW6piAqL1xuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpdGRoOyB9XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgLyoq55S75p2/6auY5bqmICovXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2hlaWdodDsgfVxuXG4gICAgLyoq6K6w5b2V5q+P5Liq5YOP57Sg54K555qE6aKc6Imy5YC855qE5pWw57uE77yM6aKc6Imy5YC855So5Y2B5YWt6L+b5Yi26KGo56S677yMUkdCQeagvOW8jyAqL1xuICAgIHByaXZhdGUgcG9pbnRDb2xvcjogbnVtYmVyW11bXTtcbiAgICAvKirlrZjlgqjlg4/ntKDmlbDmja7nmoTlhoXlrZjlnZcgKi9cbiAgICBwcml2YXRlIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgLyoq6aKc6Imy5YiG6YeP5LiA57u05pWw57uE77yM5L6b5riy5p+T5L2/55SoICovXG4gICAgcHJpdmF0ZSBwaXhlbENvbG9yOiBVaW50OEFycmF5O1xuICAgIC8qKuiusOW9leWQhOenjeminOiJsueahOWDj+e0oOeahOaVsOmHjyAqL1xuICAgIHByaXZhdGUgY29sb3JDb3VudDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfTtcblxuICAgIC8qKuiusOW9leacgOi/keS4gOasoee7mOWItuWDj+e0oOeahOminOiJsijljYHlha3ov5vliLbpopzoibLlgLwp77yM6LCD55So57uY5Yi25Ye95pWw5LiU5pyq5oyH5a6a6aKc6Imy5YC85pe277yM5bCG5L2/55So6K+l5YC8ICovXG4gICAgcHJpdmF0ZSBjdXJDb2xvcjogbnVtYmVyO1xuXG4gICAgLyoq5Li05pe25a2Y5YKo55qE6aKc6Imy5YC8ICovXG4gICAgcHJpdmF0ZSB0ZW1wQ29sb3I6IG51bWJlcjtcbiAgICBwcml2YXRlIHRlbXBSOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0ZW1wRzogbnVtYmVyO1xuICAgIHByaXZhdGUgdGVtcEI6IG51bWJlcjtcbiAgICBwcml2YXRlIHRlbXBBOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiDlj6/lr7nmr4/kuKrlg4/ntKDngrnnu5jliLbnmoTnlLvmnb/vvIznlLvmnb/kvb/nlKjnmoTlnZDmoIfns7vljp/ngrnkuLrlt6bkuIvop5LvvIxY6L205ZCR5Y+z5Li65q2j77yMWei9tOWQkeS4iuS4uuato1xuICAgICAqIEBwYXJhbSB3aWR0aCAgICAg55S75p2/5a695bqmXG4gICAgICogQHBhcmFtIGhlaWdodCAgICDnlLvmnb/pq5jluqZcbiAgICAgKiBAcGFyYW0gZGF0YSAgICAgIOaMh+WumueUu+adv+WIneWni+WGheWuue+8jOWPguaVsOS4uuiusOW9leminOiJsuWIhumHj+eahOS4gOe7tOaVsOe7hO+8jOS4jeS8oOWFpeWPguaVsOaXtu+8jOeUu+adv+S4reWFqOmDqOWDj+e0oOS4uumAj+aYjlxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGF0YT86IEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuaW5pdCh3aWR0aCwgaGVpZ2h0LCBkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5a+555S75p2/6L+b6KGM5Yid5aeL5YyW77yM5Lya5riF56m65bey57uY5Yi255qE5omA5pyJ5YaF5a65XG4gICAgICogQHBhcmFtIHdpZHRoICAgICDnlLvmnb/lrr3luqZcbiAgICAgKiBAcGFyYW0gaGVpZ2h0ICAgIOeUu+adv+mrmOW6plxuICAgICAqIEBwYXJhbSBkYXRhICAgICAg5oyH5a6a55S75p2/5Yid5aeL5YaF5a6577yM5Y+C5pWw5Li66K6w5b2V6aKc6Imy5YiG6YeP55qE5LiA57u05pWw57uE77yM5LiN5Lyg5YWl5Y+C5pWw5pe277yM55S75p2/5YaF5a655Li65YWo6YOo6YCP5piO55qE55+p5b2iXG4gICAgICovXG4gICAgcHVibGljIGluaXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGRhdGE/OiBBcnJheUJ1ZmZlcikge1xuICAgICAgICB0aGlzLnRlbXBDb2xvciA9IHRoaXMudGVtcFIgPSB0aGlzLnRlbXBHID0gdGhpcy50ZW1wQiA9IHRoaXMudGVtcEEgPSAwO1xuICAgICAgICB0aGlzLmN1ckNvbG9yID0gMDtcbiAgICAgICAgdGhpcy5fd2l0ZGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgICAgICB0aGlzLmluaXRQb2ludENvbG9yKCk7XG4gICAgICAgIHRoaXMuaW5pdFBpeGVsQ29sb3IoKTtcbiAgICAgICAgdGhpcy5pbml0TGluZURhdGEoKTtcbiAgICAgICAgaWYgKCEhZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdFBvaW50Q29sb3IoKSB7XG4gICAgICAgIGlmICghdGhpcy5wb2ludENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50Q29sb3IgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7ICsreCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvaW50Q29sb3JbeF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q29sb3JbeF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvdW50ID0ge307XG4gICAgICAgIHRoaXMuY29sb3JDb3VudFswXSA9IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0UGl4ZWxDb2xvcigpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0ICogNCk7XG4gICAgICAgIHRoaXMucGl4ZWxDb2xvciA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5waXhlbENvbG9yLmZpbGwoMCk7XG4gICAgfVxuXG4gICAgLyoq6YeN572u55S75p2/77yM55S75p2/55qE5a696auY5LiN5Y+Y77yM5L2G5Lya5riF56m65bey57uY5Yi255qE5omA5pyJ5YaF5a6577yM5oGi5aSN6Iez6YCP5piO54q25oCBICovXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnJlc2V0UG9pbnRDb2xvcigpO1xuICAgICAgICB0aGlzLnJlc2V0UGl4ZWxDb2xvcigpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlc2V0UG9pbnRDb2xvcigpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMud2lkdGggLSAxOyB4ID49IDA7IC0teCkge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMuaGVpZ2h0IC0gMTsgeSA+PSAwOyAtLXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q29sb3JbeF1beV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmNvbG9yQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtrZXldID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlc2V0UGl4ZWxDb2xvcigpIHtcbiAgICAgICAgdGhpcy5waXhlbENvbG9yLmZpbGwoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Lyg5YWl5Zu+5YOP55qE5YOP57Sg5pWw5o2u77yM55u05o6l6K6+572u55S75p2/55qE5YaF5a6577yM5Zu+5YOP5bC65a+45b+F6aG75LiO55S75p2/5LiA6Ie077yM6Iul6ZyA6KaB6YeN5paw6K6+572u55S75p2/5aSn5bCP77yM6K+35L2/55SoIGluaXQoKSDlh73mlbBcbiAgICAgKiBAcGFyYW0gZGF0YSDorrDlvZXlkITlg4/ntKDpopzoibLliIbph4/nmoTkuIDnu7TmlbDnu4RcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBsZXQgcGl4ZWxEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIGlmIChwaXhlbERhdGEubGVuZ3RoICE9IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCAqIDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIueUu+adv+iuvue9ruaVsOaNruWksei0pe+8jOaVsOaNrumVv+W6puS4jueUu+adv+Wkp+Wwj+S4jeS4gOiHtOOAglwiKTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIHBpeGVsRGF0YSA9IHBpeGVsRGF0YS5zdWJhcnJheSgwLCB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQgKiA0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFBpeGVsQ29sb3JCeVJHQkEocGl4ZWxEYXRhKTtcbiAgICAgICAgdGhpcy5zZXRQb2ludENvbG9yQnlSR0JBKHBpeGVsRGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiusOW9leWQhOWDj+e0oOminOiJsuWIhumHj1xuICAgICAqIEBwYXJhbSBkYXRhIOminOiJsuWIhumHj+S4gOe7tOaVsOe7hFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0UGl4ZWxDb2xvckJ5UkdCQShkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMucGl4ZWxDb2xvci5zZXQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaMieWDj+e0oOeCueeahOWdkOagh+iusOW9leWDj+e0oOeCueeahOminOiJsuWAvFxuICAgICAqIEBwYXJhbSBkYXRhIOminOiJsuWIhumHj+S4gOe7tOaVsOe7hFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0UG9pbnRDb2xvckJ5UkdCQShkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuY29sb3JDb3VudCA9IHt9O1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIGxldCBpPXkgKiB0aGlzLndpZHRoICogNFxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmNvbnZlcnRUb051bWJlcihkYXRhW2krK10sIGRhdGFbaSsrXSwgZGF0YVtpKytdLCBkYXRhW2krK10pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xvckNvdW50W2NvbG9yXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbY29sb3JdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbY29sb3JdICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W55S75p2/5Lit55qE5pWw5o2uXG4gICAgICogQHBhcmFtIGRhdGEg55So5LqO5o6l5pS25pWw5o2u55qE5pWw57uEXG4gICAgICogQHJldHVybnMge251bWJlcltdfSDov5Tlm57lrZjlgqjlkITlg4/ntKDngrnpopzoibLliIbph4/nmoTkuIDnu7TmlbDnu4RcbiAgICAgKi9cbiAgICBwdWJsaWMgY29weURhdGEoZGF0YT86IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gdGhpcy5waXhlbENvbG9yLmxlbmd0aDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSB0aGlzLnBpeGVsQ29sb3JbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlueUu+adv+S4reiusOW9leavj+S4quWDj+e0oOeahOminOiJsuWIhumHj+eahOaVsOaNrlxuICAgICAqIEByZXR1cm5zIOWwhuebtOaOpei/lOWbnueUu+adv+WGhemDqOeahOaVsOe7hO+8m+azqO+8muiLpeS9v+eUqOiAhemcgOimgeWvueivpeaVsOaNrui/m+ihjOS/ruaUue+8jOivt+S9v+eUqCBjb3B5RGF0YSDmlrnms5Xojrflj5bvvIzku6XlhY3lvbHlk43nlLvmnb/nmoTlg4/ntKDkuKrmlbDorqHmlbDlip/og71cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxDb2xvcjtcbiAgICB9XG4gICAgLyoq6I635Y+W55S75p2/5YaF6YOo5L2/55So55qE5YaF5a2Y5Z2X77yM6Iul5LuF6ZyA6KaB6I635Y+W5YOP57Sg5pWw5o2u77yM5LiN6L+b5LiA5q2l5aSE55CG77yM5L2/55SoIGdldERhdGEg5Y2z5Y+vICovXG4gICAgcHVibGljIGdldEJ1ZmZlcigpOiBBcnJheUJ1ZmZlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5oyH5a6a6aKc6Imy55qE5YOP57Sg55qE5Liq5pWwXG4gICAgICogQHBhcmFtIHIg6aKc6Imy55qEcuWIhumHj1xuICAgICAqIEBwYXJhbSBnIOminOiJsueahGfliIbph49cbiAgICAgKiBAcGFyYW0gYiDpopzoibLnmoRi5YiG6YePXG4gICAgICogQHBhcmFtIGEg6aKc6Imy6YCP5piO5bqm77yM6buY6K6k5Li6MjU1XG4gICAgICovXG4gICAgcHVibGljIGdldENvbG9yQ291bnQocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMjU1KSB7XG4gICAgICAgIGxldCBjID0gdGhpcy5jb252ZXJ0VG9OdW1iZXIociwgZywgYiwgYSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yQ291bnRbY107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rueUu+adv+e7mOWItuWbvuahiOS9v+S9v+eUqOeahOminOiJslxuICAgICAqIEBwYXJhbSByIOWMheWQq1JHQkHliIbph4/nmoTpopzoibLlr7nosaHvvIzmiJbogIXpopzoibLnmoRy5YiG6YePXG4gICAgICogQHBhcmFtIGcg6aKc6Imy55qEZ+WIhumHj1xuICAgICAqIEBwYXJhbSBiIOminOiJsueahGLliIbph49cbiAgICAgKiBAcGFyYW0gYSDpopzoibLpgI/mmI7luqbvvIzpu5jorqTkuLoyNTVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0Q29sb3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMjU1KSB7XG4gICAgICAgIHRoaXMuY3VyQ29sb3IgPSB0aGlzLmNvbnZlcnRUb051bWJlcihyLCBnLCBiLCBhKTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbG9yQ291bnRbdGhpcy5jdXJDb2xvcl0pIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFt0aGlzLmN1ckNvbG9yXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wQ29sb3IgPSB0aGlzLmN1ckNvbG9yO1xuICAgICAgICB0aGlzLnRlbXBSID0gcjtcbiAgICAgICAgdGhpcy50ZW1wRyA9IGc7XG4gICAgICAgIHRoaXMudGVtcEIgPSBiO1xuICAgICAgICB0aGlzLnRlbXBBID0gYTtcbiAgICB9XG4gICAgLyoq5riF56m65omA5pyJ5bey57uY5Yi255qE5YaF5a65ICovXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy/nm7Tnur9cbiAgICAvKirkuIrkuIDmrKHnu5jliLbnmoTnm7Tnur/nmoTnu4jngrkgKi9cbiAgICBwcml2YXRlIHByZXZpb3VzTGluZUVuZFBvczogVmVjMjtcbiAgICBwcml2YXRlIHByZXZpb3VzTGluZUVuZFBvc1Q6IFZlYzI7XG4gICAgcHJpdmF0ZSBwcmV2aW91c0xpbmVFbmRQb3NCOiBWZWMyO1xuICAgIC8qKuS4iuS4gOasoee7mOWItueahOebtOe6v+eahOerr+eCueagt+W8jyAqL1xuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lQ2lyY2xlRW5kOiBib29sZWFuO1xuICAgIC8qKuS4iuS4gOasoee7mOWItueahOebtOe6v+eahOWuveW6piAqL1xuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGluaXRMaW5lRGF0YSgpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MgPSBuZXcgVmVjMigpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1QgPSBuZXcgVmVjMigpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc0IgPSBuZXcgVmVjMigpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUNpcmNsZUVuZCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lV2lkdGggPSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnp7vliqjnlLvnrJTliLDmjIflrprnmoTkvY3nva7vvIzosIPnlKggbGluZVRvIOWHveaVsOaXtuWwhuS9v+eUqOivpeeCueS9nOS4uuebtOe6v+eahOi1t+eCuVxuICAgICAqIEBwYXJhbSB4ICAgICDlnZDmoIdYXG4gICAgICogQHBhcmFtIHkgICAgIOWdkOagh1lcbiAgICAgKi9cbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHggPSBNYXRoLnJvdW5kKHgpO1xuICAgICAgICB5ID0gTWF0aC5yb3VuZCh5KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3Muc2V0KHgsIHkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1Quc2V0KHgsIHkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc0Iuc2V0KHgsIHkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7nur/lrr1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TGluZVdpZHRoKHc6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZVdpZHRoID0gdztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u57q/5q6156uv54K55qC35byPXG4gICAgICogQHBhcmFtIGIg57q/5q6156uv54K55piv5ZCm5Li65ZyG5b2iXG4gICAgICovXG4gICAgcHVibGljIHNldExpbmVDaXJjbGVFbmQoYjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUNpcmNsZUVuZCA9IGI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uY5Yi255u057q/77yM5L2/55So6buY6K6k55qE6aKc6Imy44CB57q/5a695ZKM57q/5q6156uv54K55qC35byPXG4gICAgICogQHBhcmFtIHgxICAgICAgICDotbfngrnlnZDmoIdYXG4gICAgICogQHBhcmFtIHkxICAgICAgICDotbfngrnlnZDmoIdZXG4gICAgICogQHBhcmFtIHgyICAgICAgICDnu4jngrnlnZDmoIdYXG4gICAgICogQHBhcmFtIHkyICAgICAgICDnu4jngrnlnZDmoIdZXG4gICAgICovXG4gICAgcHVibGljIGxpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcikge1xuICAgICAgICB4MSA9IE1hdGgucm91bmQoeDEpO1xuICAgICAgICB4MiA9IE1hdGgucm91bmQoeDIpO1xuICAgICAgICB5MSA9IE1hdGgucm91bmQoeTEpO1xuICAgICAgICB5MiA9IE1hdGgucm91bmQoeTIpO1xuICAgICAgICBpZiAoeDEgPT0geDIgJiYgeTEgPT0geTIpIHJldHVybjtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5wcmV2aW91c0xpbmVXaWR0aDtcbiAgICAgICAgbGV0IGNpcmNsZUVuZCA9IHRoaXMucHJldmlvdXNMaW5lQ2lyY2xlRW5kO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy5zZXQoeDIsIHkyKTtcbiAgICAgICAgbGV0IG9mZnNldFggPSAwO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XG4gICAgICAgIGxldCByYXRlSyA9IDE7XG4gICAgICAgIGlmICh4MSA9PSB4Mikge1xuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQod2lkdGggKiAwLjUpO1xuICAgICAgICB9IGVsc2UgaWYgKHkxID09IHkyKSB7XG4gICAgICAgICAgICBvZmZzZXRZID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgayA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcbiAgICAgICAgICAgIHJhdGVLID0gTWF0aC5zcXJ0KGsgKiBrICsgMSk7XG4gICAgICAgICAgICBvZmZzZXRZID0gd2lkdGggKiAwLjUgLyByYXRlSztcbiAgICAgICAgICAgIG9mZnNldFggPSBNYXRoLnJvdW5kKG9mZnNldFkgKiBrKTtcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKG9mZnNldFkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC5zZXQoeDIgLSBvZmZzZXRYLCB5MiArIG9mZnNldFkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc0Iuc2V0KHgyICsgb2Zmc2V0WCwgeTIgLSBvZmZzZXRZKTtcblxuICAgICAgICBsZXQgcDEgPSBuZXcgVmVjMih4MSwgeTEpO1xuICAgICAgICBsZXQgcDIgPSBuZXcgVmVjMih4MiwgeTIpO1xuICAgICAgICBpZiAoeDEgPiB4Mikge1xuICAgICAgICAgICAgcDEueCA9IHgyO1xuICAgICAgICAgICAgcDEueSA9IHkyO1xuICAgICAgICAgICAgcDIueCA9IHgxO1xuICAgICAgICAgICAgcDIueSA9IHkxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RyYXdMaW5lKHAxLCBwMiwgd2lkdGgsIG9mZnNldFgsIG9mZnNldFksIHJhdGVLKTtcbiAgICAgICAgaWYgKGNpcmNsZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZSh4MSwgeTEsIHdpZHRoICogMC41KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeDIsIHkyLCB3aWR0aCAqIDAuNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog57uY5Yi25Yiw5oyH5a6a5Z2Q5qCH55qE55u057q/77yM6LW354K55Li65LiK5LiA5qyh57uY5Yi255qE55u057q/55qE57uI54K577yM5L2/55So6buY6K6k55qE6aKc6Imy44CB5a695bqm5ZKM57q/5q6156uv54K55qC35byPXG4gICAgICogQHBhcmFtIHggICAgIOe7iOeCueWdkOagh1hcbiAgICAgKiBAcGFyYW0geSAgICAg57uI54K55Z2Q5qCHWVxuICAgICAqL1xuICAgIHB1YmxpYyBsaW5lVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XG4gICAgICAgIHkgPSBNYXRoLnJvdW5kKHkpO1xuICAgICAgICBpZiAodGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueCA9PSB4ICYmIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnkgPT0geSkgcmV0dXJuO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnByZXZpb3VzTGluZVdpZHRoO1xuICAgICAgICBsZXQgY2lyY2xlRW5kID0gdGhpcy5wcmV2aW91c0xpbmVDaXJjbGVFbmQ7XG4gICAgICAgIGxldCB4MSA9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLng7XG4gICAgICAgIGxldCB5MSA9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnk7XG4gICAgICAgIGxldCB4MiA9IHg7XG4gICAgICAgIGxldCB5MiA9IHk7XG4gICAgICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICAgICAgICB4MSA9IHgyO1xuICAgICAgICAgICAgeTEgPSB5MjtcbiAgICAgICAgICAgIHgyID0gdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueDtcbiAgICAgICAgICAgIHkyID0gdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXRZID0gMDtcbiAgICAgICAgbGV0IHJhdGVLID0gMTtcbiAgICAgICAgaWYgKHgxID09IHgyKSB7XG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeTEgPT0geTIpIHtcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKHdpZHRoICogMC41KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xuICAgICAgICAgICAgcmF0ZUsgPSBNYXRoLnNxcnQoayAqIGsgKyAxKTtcbiAgICAgICAgICAgIG9mZnNldFkgPSB3aWR0aCAqIDAuNSAvIHJhdGVLO1xuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQob2Zmc2V0WSAqIGspO1xuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQob2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaXJjbGVFbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54ICE9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC54XG4gICAgICAgICAgICAgICAgfHwgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueSAhPSB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1QueSkge1xuICAgICAgICAgICAgICAgIGxldCBwMSA9IG5ldyBWZWMyKHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnggLSBvZmZzZXRYLCB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy55ICsgb2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgbGV0IHAyID0gbmV3IFZlYzIodGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueCArIG9mZnNldFgsIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnkgLSBvZmZzZXRZKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VHJpYW5nbGUoW3AxLCBwMiwgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NUXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd1RyaWFuZ2xlKFtwMSwgcDIsIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zQl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZSh4MSwgeTEsIHdpZHRoICogMC41KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeDIsIHkyLCB3aWR0aCAqIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZHJhd0xpbmUobmV3IFZlYzIoeDEsIHkxKSwgbmV3IFZlYzIoeDIsIHkyKSwgd2lkdGgsIG9mZnNldFgsIG9mZnNldFksIHJhdGVLKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy5zZXQoeCwgeSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC5zZXQoeCAtIG9mZnNldFgsIHkgKyBvZmZzZXRZKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NCLnNldCh4ICsgb2Zmc2V0WCwgeSAtIG9mZnNldFkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5jliLbnm7Tnur/vvIzkuI3ljIXlkKvnur/mrrXnq6/ngrnmoLflvI9cbiAgICAgKiBAcGFyYW0gcDEgICAgICAgIOe6v+autei1t+eCueWdkOagh1xuICAgICAqIEBwYXJhbSBwMiAgICAgICAg57q/5q6157uI54K55Z2Q5qCHXG4gICAgICogQHBhcmFtIHdpZHRoICAgICDnur/mrrXlrr3luqZcbiAgICAgKiBAcGFyYW0gY29sb3IgICAgIOe6v+auteminOiJslxuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXdMaW5lKHAxOiBWZWMyLCBwMjogVmVjMiwgd2lkdGg6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIsIHNsb3BlUmF0ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwMS55ID09IHAyLnkpIHtcbiAgICAgICAgICAgIC8v5rC05bmz55u057q/XG4gICAgICAgICAgICBsZXQgeCA9IHAxLnggPCBwMi54ID8gcDEueCA6IHAyLng7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChuZXcgVmVjMih4LCBNYXRoLnJvdW5kKHAxLnkgLSB3aWR0aCAqIDAuNSkpLCBNYXRoLmFicyhwMS54IC0gcDIueCksIHdpZHRoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwMS54ID09IHAyLngpIHtcbiAgICAgICAgICAgIC8v5Z6C55u055u057q/XG4gICAgICAgICAgICBsZXQgeSA9IHAxLnkgPCBwMi55ID8gcDEueSA6IHAyLnk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChuZXcgVmVjMihNYXRoLnJvdW5kKHAxLnggLSB3aWR0aCAqIDAuNSksIHkpLCB3aWR0aCwgTWF0aC5hYnMocDEueSAtIHAyLnkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5YC+5pac55u057q/XG4gICAgICAgICAgICBsZXQgaW52ZXJzZUsgPSAocDEueCAtIHAyLngpIC8gKHAxLnkgLSBwMi55KTtcbiAgICAgICAgICAgIGxldCBwMXQgPSBuZXcgVmVjMihwMS54IC0gb2Zmc2V0WCwgcDEueSArIG9mZnNldFkpO1xuICAgICAgICAgICAgbGV0IHAxYiA9IG5ldyBWZWMyKHAxLnggKyBvZmZzZXRYLCBwMS55IC0gb2Zmc2V0WSk7XG4gICAgICAgICAgICBsZXQgcDJ0ID0gbmV3IFZlYzIocDIueCAtIG9mZnNldFgsIHAyLnkgKyBvZmZzZXRZKTtcbiAgICAgICAgICAgIGxldCBwMmIgPSBuZXcgVmVjMihwMi54ICsgb2Zmc2V0WCwgcDIueSAtIG9mZnNldFkpO1xuICAgICAgICAgICAgbGV0IHAxYyA9IG5ldyBWZWMyKCk7XG4gICAgICAgICAgICBsZXQgcDJjID0gbmV3IFZlYzIoKTtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLnJvdW5kKHdpZHRoICogc2xvcGVSYXRlKTtcbiAgICAgICAgICAgIGlmIChwMi55ID4gcDEueSkge1xuICAgICAgICAgICAgICAgIGlmIChwMWIueCA8IHAydC54KSB7XG4gICAgICAgICAgICAgICAgICAgIHAxYy54ID0gcDFiLng7XG4gICAgICAgICAgICAgICAgICAgIHAxYy55ID0gcDFiLnkgKyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJ0Lng7XG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gcDJ0LnkgLSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxYywgcDFiLCBwMXQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UGFyYWxsZWxvZ3JhbShwMWIsIHAyYywgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJ0LCBwMmMsIHAyYik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMWIueDtcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBNYXRoLnJvdW5kKHAydC55IC0gKHAxYy54IC0gcDJ0LngpICogaW52ZXJzZUspO1xuICAgICAgICAgICAgICAgICAgICBwMmMueCA9IHAydC54O1xuICAgICAgICAgICAgICAgICAgICBwMmMueSA9IE1hdGgucm91bmQocDFiLnkgKyAocDFiLnggLSBwMmMueCkgKiBpbnZlcnNlSyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAydCwgcDJjLCBwMXQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UGFyYWxsZWxvZ3JhbShwMmMsIHAxYiwgcDJ0LnkgLSBwMmMueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxYywgcDFiLCBwMmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHAxdC54IDwgcDJiLngpIHtcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMXQueDtcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBwMXQueSAtIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMmIueDtcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBwMmIueSArIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDF0LCBwMWMsIHAxYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXJhbGxlbG9ncmFtKHAxYywgcDJiLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMmMsIHAyYiwgcDJ0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxdC54O1xuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IE1hdGgucm91bmQocDJiLnkgLSAocDFjLnggLSBwMmIueCkgKiBpbnZlcnNlSyk7XG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJiLng7XG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gTWF0aC5yb3VuZChwMXQueSArIChwMXQueCAtIHAyYy54KSAqIGludmVyc2VLKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJjLCBwMmIsIHAxYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXJhbGxlbG9ncmFtKHAyYiwgcDFjLCBwMXQueSAtIHAxYy55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDF0LCBwMWMsIHAydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5jliLbnn6nlvaJcbiAgICAgKiBAcGFyYW0geCAgICAg55+p5b2i5bem5LiL6KeS55qE5Z2Q5qCHWFxuICAgICAqIEBwYXJhbSB5ICAgICDnn6nlvaLlt6bkuIvop5LnmoTlnZDmoIdZXG4gICAgICogQHBhcmFtIHcgICAgIOefqeW9ouWuveW6plxuICAgICAqIEBwYXJhbSBoICAgICDnn6nlvaLpq5jluqZcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZHJhd1JlY3QobmV3IFZlYzIoeCwgeSksIHcsIGgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5jliLbnn6nlvaJcbiAgICAgKiBAcGFyYW0gcCAgICAgICAgIOefqeW9ouW3puS4i+mhtueCueeahOWdkOagh1xuICAgICAqIEBwYXJhbSB3ICAgICAgICAg55+p5b2i5a695bqmXG4gICAgICogQHBhcmFtIGggICAgICAgICDnn6nlvaLpq5jluqZcbiAgICAgKiBAcGFyYW0gY29sb3IgICAgIOefqeW9ouWhq+WFheeahOminOiJslxuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXdSZWN0KHA6IFZlYzIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBtaW5YID0gdGhpcy5jbGFtcFgocC54KTtcbiAgICAgICAgbGV0IG1heFggPSB0aGlzLmNsYW1wWChwLnggKyB3KTtcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLmNsYW1wWShwLnkpO1xuICAgICAgICBsZXQgbWF4WSA9IHRoaXMuY2xhbXBZKHAueSArIGgpO1xuICAgICAgICAvLyBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyArK3gpIHtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7ICsreSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2RyYXdQaXhlbCh4LCB5KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyArK3kpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdSb3dQaXhlbChtaW5YLCBtYXhYLCB5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5jliLblubPooYzlm5vovrnlvaLvvIzlubPooYzlm5vovrnlvaLnmoTlt6blj7PkuKTovrnkuI5Z6L205bmz6KGMXG4gICAgICogQHBhcmFtIHAxICAgICAgICDlt6bkuIvpobbngrnlnZDmoIdcbiAgICAgKiBAcGFyYW0gcDIgICAgICAgIOWPs+S4i+mhtueCueWdkOagh1xuICAgICAqIEBwYXJhbSBoZWlnaHQgICAg5Z6C55u06L656auY5bqmXG4gICAgICogQHBhcmFtIGNvbG9yICAgICDpopzoibJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9kcmF3UGFyYWxsZWxvZ3JhbShwMTogVmVjMiwgcDI6IFZlYzIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwMS54ID09IHAyLngpIHJldHVybjtcbiAgICAgICAgbGV0IGsgPSAocDIueSAtIHAxLnkpIC8gKHAyLnggLSBwMS54KTtcbiAgICAgICAgbGV0IG1pblggPSB0aGlzLl9taW5YKHAxLngpO1xuICAgICAgICBsZXQgbWF4WCA9IHRoaXMuX21heFgocDIueCk7XG4gICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7ICsreCkge1xuICAgICAgICAgICAgbGV0IG1pblkgPSBwMS55ICsgTWF0aC5yb3VuZCgoeCAtIHAxLngpICogayk7XG4gICAgICAgICAgICBsZXQgbWF4WSA9IG1pblkgKyBoZWlnaHQ7XG4gICAgICAgICAgICBtaW5ZID0gdGhpcy5fbWluWShtaW5ZKTtcbiAgICAgICAgICAgIG1heFkgPSB0aGlzLl9tYXhZKG1heFkpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NvbFBpeGVsKG1pblksIG1heFksIHgpO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgKyt5KSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fZHJhd1BpeGVsKHgsIHkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uY5Yi25LiJ6KeS5b2iXG4gICAgICogQHBhcmFtIHgxICAgIOmhtueCuTHlnZDmoIdYXG4gICAgICogQHBhcmFtIHkxICAgIOmhtueCuTHlnZDmoIdZXG4gICAgICogQHBhcmFtIHgyICAgIOmhtueCuTLlnZDmoIdYXG4gICAgICogQHBhcmFtIHkyICAgIOmhtueCuTLlnZDmoIdZXG4gICAgICogQHBhcmFtIHgzICAgIOmhtueCuTPlnZDmoIdYXG4gICAgICogQHBhcmFtIHkzICAgIOmhtueCuTPlnZDmoIdZXG4gICAgICovXG4gICAgcHVibGljIHRyaWFuZ2xlKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHgzOiBudW1iZXIsIHkzOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBMaXN0OiBWZWMyW10gPSBbXTtcbiAgICAgICAgcExpc3QucHVzaChuZXcgVmVjMih4MSwgeTEpKTtcbiAgICAgICAgcExpc3QucHVzaChuZXcgVmVjMih4MiwgeTIpKTtcbiAgICAgICAgcExpc3QucHVzaChuZXcgVmVjMih4MywgeTMpKTtcbiAgICAgICAgdGhpcy5fZHJhd1RyaWFuZ2xlKHBMaXN0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog57uY5Yi25Lu75oSP5LiJ6KeS5b2iXG4gICAgICogQHBhcmFtIHAxICAgIOmhtueCueWdkOagh1xuICAgICAqIEBwYXJhbSBwMiBcbiAgICAgKiBAcGFyYW0gcDMgXG4gICAgICogQHBhcmFtIGNvbG9yIOWhq+WFheminOiJslxuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXdUcmlhbmdsZShwTGlzdDogVmVjMltdKSB7XG4gICAgICAgIHBMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcDEgPSBwTGlzdFswXTtcbiAgICAgICAgbGV0IHAyID0gcExpc3RbMV07XG4gICAgICAgIGxldCBwMyA9IHBMaXN0WzJdO1xuICAgICAgICBpZiAocDEueCA9PSBwMi54KSB7XG4gICAgICAgICAgICBpZiAocDEueCA9PSBwMy54KSByZXR1cm47XG4gICAgICAgICAgICBpZiAocDEueSA8IHAyLnkpIHtcbiAgICAgICAgICAgICAgICBwMSA9IHBMaXN0WzFdO1xuICAgICAgICAgICAgICAgIHAyID0gcExpc3RbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMSwgcDIsIHAzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgayA9IChwMy55IC0gcDEueSkgLyAocDMueCAtIHAxLngpO1xuICAgICAgICBsZXQgcDQgPSBuZXcgVmVjMihwMi54LCBNYXRoLnJvdW5kKHAxLnkgKyAocDIueCAtIHAxLngpICogaykpO1xuICAgICAgICBpZiAocDQueSA9PSBwMi55KSByZXR1cm47XG4gICAgICAgIGlmIChwNC55IDwgcDIueSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDIsIHA0LCBwMSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMiwgcDQsIHAzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHA0LCBwMiwgcDEpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDQsIHAyLCBwMyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog57uY5Yi25LiA5p2h6L655LiOWei9tOW5s+ihjOeahOS4ieinkuW9olxuICAgICAqIEBwYXJhbSBwMSAgICDkuInop5LlvaLlnoLnm7TovrnnmoQg5LiKIOmhtueCueWdkOagh1xuICAgICAqIEBwYXJhbSBwMiAgICDkuInop5LlvaLlnoLnm7TovrnnmoQg5LiLIOmhtueCueWdkOagh1xuICAgICAqIEBwYXJhbSBwMyAgICDkuInop5LlvaIg5bem5L6n5oiW5Y+z5L6nIOmhtueCueWdkOagh1xuICAgICAqIEBwYXJhbSBjb2xvciDopoHnu5jliLbnmoTpopzoibJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9kcmF3VmVydGljYWxUcmlhbmdsZShwMTogVmVjMiwgcDI6IFZlYzIsIHAzOiBWZWMyKSB7XG4gICAgICAgIGlmIChwMy54ID09IHAxLngpIHJldHVybjtcbiAgICAgICAgbGV0IGsxID0gKHAzLnkgLSBwMS55KSAvIChwMy54IC0gcDEueCk7XG4gICAgICAgIGxldCBrMiA9IChwMy55IC0gcDIueSkgLyAocDMueCAtIHAyLngpO1xuICAgICAgICBsZXQgbWF4WCA9IHAzLngsIG1pblggPSBwMS54O1xuICAgICAgICBpZiAobWF4WCA8IG1pblgpIHtcbiAgICAgICAgICAgIG1heFggPSBwMS54O1xuICAgICAgICAgICAgbWluWCA9IHAzLng7XG4gICAgICAgIH1cbiAgICAgICAgbWluWCA9IHRoaXMuX21pblgobWluWCk7XG4gICAgICAgIG1heFggPSB0aGlzLl9tYXhYKG1heFgpO1xuICAgICAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyArK3gpIHtcbiAgICAgICAgICAgIGxldCBtYXhZID0gdGhpcy5jbGFtcFkoTWF0aC5yb3VuZChwMS55ICsgKHggLSBwMS54KSAqIGsxKSk7XG4gICAgICAgICAgICBsZXQgbWluWSA9IHRoaXMuY2xhbXBZKE1hdGgucm91bmQocDIueSArICh4IC0gcDIueCkgKiBrMikpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NvbFBpeGVsKG1pblksIG1heFksIHgpO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgKyt5KSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fZHJhd1BpeGVsKHgsIHkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDnu5jliLbkuIDkuKrlnIZcbiAgICAqIEBwYXJhbSB4ICAgICAgICAg5ZyG5b+D5Z2Q5qCHeFxuICAgICogQHBhcmFtIHkgICAgICAgICDlnIblv4PlnZDmoId5XG4gICAgKiBAcGFyYW0gcmFkaXVzICAgIOWchueahOWNiuW+hFxuICAgICovXG4gICAgcHVibGljIGNpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XG4gICAgICAgIHkgPSBNYXRoLnJvdW5kKHkpO1xuICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKHgsIHksIHJhZGl1cyk7XG4gICAgfVxuICAgIHByaXZhdGUgX2RyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgucm91bmQocmFkaXVzKTtcbiAgICAgICAgaWYgKHJhZGl1cyA9PSAwKSByZXR1cm47XG4gICAgICAgIC8v5LiJ6KeS5b2i55qE5pac6L6555qE5bmz5pa5XG4gICAgICAgIGxldCBkaXMgPSByYWRpdXMgKiByYWRpdXM7XG4gICAgICAgIC8vIGxldCBtaW5YID0gdGhpcy5fbWluWCh4IC0gcmFkaXVzKTtcbiAgICAgICAgLy8gbGV0IG1heFggPSB0aGlzLl9tYXhYKHggKyByYWRpdXMpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gbWluWDsgaSA8PSBtYXhYOyArK2kpIHtcbiAgICAgICAgLy8gICAgIGxldCByID0geCAtIGk7XG4gICAgICAgIC8vICAgICByID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoZGlzIC0gciAqIHIpKTtcbiAgICAgICAgLy8gICAgIGxldCBtaW5ZID0gdGhpcy5fbWluWSh5IC0gcik7XG4gICAgICAgIC8vICAgICBsZXQgbWF4WSA9IHRoaXMuX21heFkoeSArIHIpO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IG1pblk7IGogPD0gbWF4WTsgKytqKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZHJhd1BpeGVsKGksIGopO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGxldCBtaW5ZID0gdGhpcy5jbGFtcFkoeSAtIHJhZGl1cyk7XG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5jbGFtcFkoeSArIHJhZGl1cyk7XG4gICAgICAgIGZvciAobGV0IGogPSBtaW5ZOyBqIDw9IG1heFk7ICsraikge1xuICAgICAgICAgICAgbGV0IHIgPSBqIC0geTtcbiAgICAgICAgICAgIHIgPSBNYXRoLnJvdW5kKE1hdGguc3FydChkaXMgLSByICogcikpO1xuICAgICAgICAgICAgbGV0IG1pblggPSB0aGlzLmNsYW1wWCh4IC0gcik7XG4gICAgICAgICAgICBsZXQgbWF4WCA9IHRoaXMuY2xhbXBYKHggKyByKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdSb3dQaXhlbChtaW5YLCBtYXhYLCBqKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX21pblgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHggPj0gMCA/IHggOiAwO1xuICAgIH1cbiAgICBwcml2YXRlIF9tYXhYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4IDwgdGhpcy53aWR0aCA/IHggOiB0aGlzLndpZHRoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfbWluWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geSA+PSAwID8geSA6IDA7XG4gICAgfVxuICAgIHByaXZhdGUgX21heFkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHkgPCB0aGlzLmhlaWdodCA/IHkgOiB0aGlzLmhlaWdodCAtIDE7XG4gICAgfVxuICAgIHByaXZhdGUgY2xhbXBYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh4IDwgMCkgcmV0dXJuIDA7XG4gICAgICAgIGlmICh4ID49IHRoaXMud2lkdGgpIHJldHVybiB0aGlzLndpZHRoIC0gMTtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHByaXZhdGUgY2xhbXBZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh5IDwgMCkgcmV0dXJuIDA7XG4gICAgICAgIGlmICh5ID49IHRoaXMuaGVpZ2h0KSByZXR1cm4gdGhpcy5oZWlnaHQgLSAxO1xuICAgICAgICByZXR1cm4geTtcbiAgICB9XG4gICAgLyoq57uY5Yi25LiA5Liq5YOP57Sg54K555qE6aKc6ImyICovXG4gICAgcHJpdmF0ZSBfZHJhd1BpeGVsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50Q29sb3JbeF1beV0gPT0gdGhpcy50ZW1wQ29sb3IpIHJldHVybjtcbiAgICAgICAgbGV0IGluZGV4ID0gKHkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xuICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXhdID0gdGhpcy50ZW1wUjtcbiAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMV0gPSB0aGlzLnRlbXBHO1xuICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAyXSA9IHRoaXMudGVtcEI7XG4gICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDNdID0gdGhpcy50ZW1wQTtcbiAgICAgICAgbGV0IGMgPSB0aGlzLnBvaW50Q29sb3JbeF1beV07XG4gICAgICAgIHRoaXMuY29sb3JDb3VudFtjXS0tO1xuICAgICAgICB0aGlzLmNvbG9yQ291bnRbdGhpcy50ZW1wQ29sb3JdKys7XG4gICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IHRoaXMudGVtcENvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDov57nu63nu5jliLbkuIDooYzkuK3nmoTlg4/ntKDngrlcbiAgICAgKiBAcGFyYW0gc3RhcnRYICAgIOi1t+eCuVjlnZDmoIdcbiAgICAgKiBAcGFyYW0gZW5kWCAgICAgIOe7iOeCuVjlnZDmoIdcbiAgICAgKiBAcGFyYW0geSAgICAgICAgIFnlnZDmoIdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9kcmF3Um93UGl4ZWwoc3RhcnRYOiBudW1iZXIsIGVuZFg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9ICh5ICogdGhpcy53aWR0aCArIHN0YXJ0WCkgKiA0O1xuICAgICAgICBmb3IgKGxldCB4ID0gc3RhcnRYOyB4IDw9IGVuZFg7ICsreCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRDb2xvclt4XVt5XSAhPSB0aGlzLnRlbXBDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleF0gPSB0aGlzLnRlbXBSO1xuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDFdID0gdGhpcy50ZW1wRztcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAyXSA9IHRoaXMudGVtcEI7XG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgM10gPSB0aGlzLnRlbXBBO1xuICAgICAgICAgICAgICAgIGxldCBjID0gdGhpcy5wb2ludENvbG9yW3hdW3ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtjXS0tO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFt0aGlzLnRlbXBDb2xvcl0rKztcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q29sb3JbeF1beV0gPSB0aGlzLnRlbXBDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+e57ut57uY5Yi25LiA5YiX5Lit55qE5YOP57Sg54K5XG4gICAgICogQHBhcmFtIHN0YXJ0WSAgICDotbfngrlZ5Z2Q5qCHXG4gICAgICogQHBhcmFtIGVuZFkgICAgICDnu4jngrlZ5Z2Q5qCHXG4gICAgICogQHBhcmFtIHggICAgICAgICBY5Z2Q5qCHXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZHJhd0NvbFBpeGVsKHN0YXJ0WTogbnVtYmVyLCBlbmRZOiBudW1iZXIsIHg6IG51bWJlcikge1xuICAgICAgICBsZXQgaW5kZXggPSAoc3RhcnRZICogdGhpcy53aWR0aCArIHgpICogNDtcbiAgICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8PSBlbmRZOyArK3kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50Q29sb3JbeF1beV0gIT0gdGhpcy50ZW1wQ29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXhdID0gdGhpcy50ZW1wUjtcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAxXSA9IHRoaXMudGVtcEc7XG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMl0gPSB0aGlzLnRlbXBCO1xuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDNdID0gdGhpcy50ZW1wQTtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IHRoaXMucG9pbnRDb2xvclt4XVt5XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbY10tLTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbdGhpcy50ZW1wQ29sb3JdKys7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gdGhpcy50ZW1wQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCArPSB0aGlzLndpZHRoICogNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsIZSR0JB6aKc6Imy5YiG6YeP6L2s5o2i5Li65LiA5Liq5pWw5YC86KGo56S655qE6aKc6Imy77yM6aKc6Imy5YiG6YeP5Li6MH4yNTXkuYvpl7TnmoTlgLxcbiAgICAgKiBAcGFyYW0gciBcbiAgICAgKiBAcGFyYW0gZyBcbiAgICAgKiBAcGFyYW0gYiBcbiAgICAgKiBAcGFyYW0gYSBcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRUb051bWJlcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgPSAyNTUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKChyICYgMHhmZSkgPDwgMjMpIHwgKGcgPDwgMTYpIHwgKGIgPDwgOCkgfCBhO1xuICAgIH1cbiAgICAvKirlsIbljYHlha3ov5vliLbnmoTpopzoibLovazmjaLkuLpSR0JB5YiG6YeP6KGo56S655qE6aKc6ImyICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9SR0JBKGNvbG9yOiBudW1iZXIpOiB7IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciB9IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IChjb2xvciAmIDB4ZWYwMDAwMDApID4+IDIzLFxuICAgICAgICAgICAgZzogKGNvbG9yICYgMHgwMGZmMDAwMCkgPj4gMTYsXG4gICAgICAgICAgICBiOiAoY29sb3IgJiAweDAwMDBmZjAwKSA+PiA4LFxuICAgICAgICAgICAgYTogKGNvbG9yICYgMHgwMDAwMDBmZiksXG4gICAgICAgIH07XG4gICAgfVxufVxuY2xhc3MgVmVjMiB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcHVibGljIHNldChwOiBudW1iZXIgfCBWZWMyLCB5PzogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy54ID0gcDtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSBwLng7XG4gICAgICAgICAgICB0aGlzLnkgPSBwLnk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=