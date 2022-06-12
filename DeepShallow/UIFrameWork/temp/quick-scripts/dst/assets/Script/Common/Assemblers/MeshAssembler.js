
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Assemblers/MeshAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ba87xSitVM9boajZ/wQdaJ', 'MeshAssembler');
// Script/Common/Assemblers/MeshAssembler.ts

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
var gfx = cc['gfx'];
// 顶点格式 -> 位置 UV, 颜色
var vfmtPosUvColor = new gfx.VertexFormat([
    { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
]);
var MeshAssembler = /** @class */ (function (_super) {
    __extends(MeshAssembler, _super);
    function MeshAssembler() {
        var _this = _super.call(this) || this;
        _this.row = 0; // 行数
        _this.col = 0; // 列数
        _this._realRow = 0; // 实际行数
        _this._realCol = 0; // 实际列数
        _this.stepRow = 0; // 步长
        _this.StepCol = 0; // 步长
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this._renderData = null;
        _this._local = null;
        _this._renderData = new cc.RenderData();
        _this._renderData.init(_this);
        _this.initData();
        _this.initLocal();
        return _this;
    }
    Object.defineProperty(MeshAssembler.prototype, "verticesFloats", {
        get: function () {
            return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
    });
    /** 获得三角形片段的数量 */
    MeshAssembler.prototype.getTriangleCount = function () {
        return (this.row - 1) * (this.col - 1) * 2;
    };
    MeshAssembler.prototype.getTriangle = function (idx) {
        if (idx < 0 || idx >= this.getTriangleCount())
            return null;
        var verts = this._renderData.vDatas[0];
        var vertIdx = Math.floor(idx / this._realCol) * this._realCol * 2 + idx;
        var arr = [];
        if (idx % 2 == 0) {
            arr = [
                cc.v2(verts[vertIdx * this.floatsPerVert], verts[vertIdx * this.floatsPerVert + 1]),
                cc.v2(verts[(vertIdx + 1) * this.floatsPerVert], verts[(vertIdx + 1) * this.floatsPerVert + 1]),
                cc.v2(verts[(vertIdx + this._realCol) * this.floatsPerVert], verts[(vertIdx + this._realCol) * this.floatsPerVert + 1]),
            ];
        }
        else {
            arr = [
                cc.v2(verts[vertIdx * this.floatsPerVert], verts[vertIdx * this.floatsPerVert + 1]),
                cc.v2(verts[(vertIdx + this._realCol) * this.floatsPerVert], verts[(vertIdx + this._realCol) * this.floatsPerVert + 1]),
                cc.v2(verts[(vertIdx + this._realCol - 1) * this.floatsPerVert], verts[(vertIdx + this._realCol - 1) * this.floatsPerVert + 1]),
            ];
        }
        return arr;
    };
    MeshAssembler.prototype.setTriangle = function (idx, arr, comp) {
        if (idx < 0 || idx >= this.getTriangleCount())
            return;
        var verts = this._renderData.vDatas[0];
        var vertIdx = Math.floor(idx / this._realCol) * this._realCol * 2 + idx;
        if (idx % 2 == 0) {
            verts[vertIdx * this.floatsPerVert] = arr[0].x;
            verts[vertIdx * this.floatsPerVert + 1] = arr[0].y;
            verts[(vertIdx + 1) * this.floatsPerVert] = arr[1].x;
            verts[(vertIdx + 1) * this.floatsPerVert + 1] = arr[1].y;
            verts[(vertIdx + this._realCol) * this.floatsPerVert] = arr[2].x;
            verts[(vertIdx + this._realCol) * this.floatsPerVert + 1] = arr[2].y;
        }
        else {
            verts[vertIdx * this.floatsPerVert] = arr[0].x;
            verts[vertIdx * this.floatsPerVert + 1] = arr[0].y;
            verts[(vertIdx + this._realCol) * this.floatsPerVert] = arr[1].x;
            verts[(vertIdx + this._realCol) * this.floatsPerVert + 1] = arr[1].y;
            verts[(vertIdx + this._realCol - 1) * this.floatsPerVert] = arr[2].x;
            verts[(vertIdx + this._realCol - 1) * this.floatsPerVert + 1] = arr[2].y;
        }
        comp._vertsDirty = true;
    };
    MeshAssembler.prototype.getRectCount = function () {
        return (this.row - 1) * (this.col - 1);
    };
    MeshAssembler.prototype.getRect = function (idx) {
        if (idx < 0 || idx >= this.getRectCount())
            return null;
        var verts = this._renderData.vDatas[0];
        var vertIdx = Math.floor(idx * 2 / this._realCol) * this._realCol * 2 + (idx * 2 % this._realCol);
        var arr = [
            cc.v2(verts[vertIdx * this.floatsPerVert], verts[vertIdx * this.floatsPerVert + 1]),
            cc.v2(verts[(vertIdx + 1) * this.floatsPerVert], verts[(vertIdx + 1) * this.floatsPerVert + 1]),
            cc.v2(verts[(vertIdx + this._realCol) * this.floatsPerVert], verts[(vertIdx + this._realCol) * this.floatsPerVert + 1]),
            cc.v2(verts[(vertIdx + this._realCol + 1) * this.floatsPerVert], verts[(vertIdx + this._realCol + 1) * this.floatsPerVert + 1]),
        ];
        return arr;
    };
    MeshAssembler.prototype.setRect = function (idx, arr) {
        if (idx < 0 || idx >= this.getRectCount())
            return;
        var verts = this._renderData.vDatas[0];
        var vertIdx = Math.floor((idx * 2) / this._realCol) * this._realCol * 2 + (idx * 2 % this._realCol);
        verts[vertIdx * this.floatsPerVert] = arr[0].x;
        verts[vertIdx * this.floatsPerVert + 1] = arr[0].y;
        verts[(vertIdx + 1) * this.floatsPerVert] = arr[1].x;
        verts[(vertIdx + 1) * this.floatsPerVert + 1] = arr[1].y;
        verts[(vertIdx + this._realCol) * this.floatsPerVert] = arr[2].x;
        verts[(vertIdx + this._realCol) * this.floatsPerVert + 1] = arr[2].y;
        verts[(vertIdx + this._realCol + 1) * this.floatsPerVert] = arr[3].x;
        verts[(vertIdx + this._realCol + 1) * this.floatsPerVert + 1] = arr[3].y;
    };
    MeshAssembler.prototype.resetData = function (comp) {
        if (!comp.texture)
            return;
        var width = comp.texture.width;
        var height = comp.texture.height;
        var step = comp.step;
        this.row = Math.floor(height / step) + 1;
        this.col = Math.floor(width / step) + 1;
        this.stepRow = height / (this.row - 1);
        this.StepCol = width / (this.col - 1);
        this._realRow = 2 + (this.row - 2) * 2;
        this._realCol = 2 + (this.col - 2) * 2;
        cc.log(this.row, this.col);
        this.verticesCount = this._realRow * this._realCol;
        this.indicesCount = (this.row - 1) * (this.col - 1) * 6;
        this._renderData['clear']();
        this.initData();
    };
    MeshAssembler.prototype.getVfmt = function () {
        return vfmtPosUvColor;
    };
    MeshAssembler.prototype.getBuffer = function () {
        return cc.renderer['_handle'].getBuffer('mesh', this.getVfmt());
    };
    MeshAssembler.prototype.initData = function () {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
        var indices = this._renderData.iDatas[0];
        var indexOffset = 0;
        for (var r = 0; r < this.row - 1; ++r) {
            for (var c = 0; c < this.col - 1; ++c) {
                var start = r * 2 * this._realCol + c * 2;
                indices[indexOffset++] = start;
                indices[indexOffset++] = start + 1;
                indices[indexOffset++] = start + this._realCol;
                indices[indexOffset++] = start + 1;
                indices[indexOffset++] = start + this._realCol + 1;
                indices[indexOffset++] = start + this._realCol;
            }
        }
    };
    MeshAssembler.prototype.initLocal = function () {
        this._local = [];
        this._local.length = 4;
    };
    /** 填充顶点的color */
    MeshAssembler.prototype.updateColor = function (comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts)
            return;
        color = color != null ? color : comp.node.color['_val'];
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        for (var i = 0; i < this.verticesCount; i++) {
            uintVerts[colorOffset + i * floatsPerVert] = color;
        }
    };
    /** 更新uv */
    MeshAssembler.prototype.updateUVs = function (comp) {
        var _this = this;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        var vid = 0;
        var _setUv = function (uv_x, uv_y, vid) {
            var voffset = vid * floatsPerVert;
            verts[voffset + uvOffset] = uv_x;
            verts[voffset + uvOffset + 1] = uv_y;
        };
        var _fillOneRow = function (uv_y) {
            for (var col = 0; col < _this.col; col++) {
                var uv_x = col / (_this.col - 1);
                _setUv(uv_x, uv_y, vid++);
                if (col !== 0 && col !== _this.col - 1) {
                    _setUv(uv_x, uv_y, vid++);
                }
            }
        };
        for (var row = 0; row < this.row; row++) {
            var uv_y = 1 - row / (this.row - 1);
            _fillOneRow(uv_y);
            if (row !== 0 && row !== this.row - 1) {
                _fillOneRow(uv_y);
            }
        }
    };
    MeshAssembler.prototype.updateWorldVertsWebGL = function (comp) {
        var _this = this;
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node['_worldMatrix'];
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
        var floatsPerVert = this.floatsPerVert;
        var vertIdx = 0;
        var _setVert = function (localColX, localRowY, vertIdx) {
            var worldIndex = floatsPerVert * vertIdx;
            verts[worldIndex] = localColX + tx;
            verts[worldIndex + 1] = localRowY + ty;
        };
        var _setVert2 = function (localColX, localRowY, vertIdx) {
            var worldIndex = vertIdx * floatsPerVert;
            verts[worldIndex] = localColX * a + localRowY * c + tx;
            verts[worldIndex + 1] = localColX * b + localRowY * d + ty;
        };
        var _fillOneRow = function (localRowY, setVert) {
            for (var col = 0; col < _this.col; col++) {
                var localColX = (col == _this.col - 1) ? vr : (vl + col * _this.StepCol);
                setVert(localColX, localRowY, vertIdx++);
                if (col !== 0 && col !== _this.col - 1) {
                    // 插入一列
                    setVert(localColX, localRowY, vertIdx++);
                }
            }
        };
        if (justTranslate) {
            for (var row = 0; row < this.row; row++) {
                var localRowY = (row == this.row - 1) ? vt : (vb + row * this.stepRow);
                _fillOneRow(localRowY, _setVert);
                if (row !== 0 && row !== this.row - 1) {
                    // 插入一行
                    _fillOneRow(localRowY, _setVert);
                }
            }
        }
        else {
            for (var row = 0; row < this.row; row++) {
                var localRowY = (row == this.row - 1) ? vt : (vb + row * this.stepRow);
                _fillOneRow(localRowY, _setVert2);
                if (row !== 0 && row !== this.row - 1) {
                    // 插入一行
                    _fillOneRow(localRowY, _setVert2);
                }
            }
        }
    };
    MeshAssembler.prototype.updateWorldVertsNative = function (comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var index = 0;
        // left bottom
        verts[index] = vl;
        verts[index + 1] = vb;
        index += floatsPerVert;
        // right bottom
        verts[index] = vr;
        verts[index + 1] = vb;
        index += floatsPerVert;
        // left top
        verts[index] = vl;
        verts[index + 1] = vt;
        index += floatsPerVert;
        // right top
        verts[index] = vr;
        verts[index + 1] = vt;
    };
    MeshAssembler.prototype.updateWorldVerts = function (comp) {
        if (CC_NATIVERENDERER) {
            this.updateWorldVertsNative(comp);
        }
        else {
            this.updateWorldVertsWebGL(comp);
        }
    };
    /** 更新顶点数据 */
    MeshAssembler.prototype.updateVerts = function (comp) {
        var node = comp.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        l = -appx;
        b = -appy;
        r = cw - appx;
        t = ch - appy;
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(comp);
    };
    /** 更新renderdata */
    MeshAssembler.prototype.updateRenderData = function (comp) {
        if (comp._vertsDirty) {
            this.resetData(comp);
            this.updateUVs(comp);
            this.updateVerts(comp);
            comp._vertsDirty = false;
        }
    };
    MeshAssembler.prototype.fillBuffers = function (comp, renderer) {
        if (renderer.worldMatDirty) {
            this.updateWorldVerts(comp);
        }
        var renderData = this._renderData;
        // vData里包含 pos， uv， color数据， iData中包含顶点索引
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(this.verticesCount, this.indicesCount);
        // buffer data may be realloc, need get reference after request.
        // fill vertices
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        if (vData.length + vertexOffset > vbuf.length) {
            vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset);
        }
        else {
            vbuf.set(vData, vertexOffset);
        }
        // fill indices
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        for (var i = 0, l = iData.length; i < l; i++) {
            ibuf[indiceOffset++] = vertexId + iData[i];
        }
    };
    MeshAssembler.prototype.packToDynamicAtlas = function (comp, frame) {
        if (CC_TEST)
            return;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
            var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
            //@ts-ignore
            if (packedFrame) {
                frame._setDynamicAtlasFrame(packedFrame);
            }
        }
        var material = comp._materials[0];
        if (!material)
            return;
        if (material.getProperty('texture') !== frame._texture) {
            // texture was packed to dynamic atlas, should update uvs
            comp._vertsDirty = true;
            comp._updateMaterial();
        }
    };
    return MeshAssembler;
}(cc.Assembler));
exports.default = MeshAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0Fzc2VtYmxlcnMvTWVzaEFzc2VtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdEIsb0JBQW9CO0FBQ3BCLElBQUksY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtDQUMvRSxDQUFDLENBQUM7QUFFSDtJQUEyQyxpQ0FBWTtJQUVuRDtRQUFBLFlBQ0ksaUJBQU8sU0FNVjtRQUVPLFNBQUcsR0FBRyxDQUFDLENBQUMsQ0FBZ0IsS0FBSztRQUM3QixTQUFHLEdBQUcsQ0FBQyxDQUFDLENBQWdCLEtBQUs7UUFDN0IsY0FBUSxHQUFHLENBQUMsQ0FBQyxDQUFXLE9BQU87UUFDL0IsY0FBUSxHQUFHLENBQUMsQ0FBQyxDQUFXLE9BQU87UUFDL0IsYUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFZLEtBQUs7UUFDN0IsYUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFZLEtBQUs7UUFDN0IsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFHekIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsY0FBUSxH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LENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQS9ZQSxBQStZQyxDQS9ZMEMsRUFBRSxDQUFDLFNBQVMsR0ErWXREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lc2hUZXh0dXJlIGZyb20gXCIuLi9Db21wb25lbnRzL01lc2hUZXh0dXJlXCI7XG5cbmNvbnN0IGdmeCA9IGNjWydnZngnXTtcblxuLy8g6aG254K55qC85byPIC0+IOS9jee9riBVViwg6aKc6ImyXG5sZXQgdmZtdFBvc1V2Q29sb3IgPSBuZXcgZ2Z4LlZlcnRleEZvcm1hdChbXG4gICAgeyBuYW1lOiBnZnguQVRUUl9QT1NJVElPTiwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9GTE9BVDMyLCBudW06IDIgfSxcbiAgICB7IG5hbWU6IGdmeC5BVFRSX1VWMCwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9GTE9BVDMyLCBudW06IDIgfSxcbiAgICB7IG5hbWU6IGdmeC5BVFRSX0NPTE9SLCB0eXBlOiBnZnguQVRUUl9UWVBFX1VJTlQ4LCBudW06IDQsIG5vcm1hbGl6ZTogdHJ1ZSB9LFxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc2hBc3NlbWJsZXIgZXh0ZW5kcyBjYy5Bc3NlbWJsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyRGF0YSA9IG5ldyBjYy5SZW5kZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlckRhdGEuaW5pdCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgICAgIHRoaXMuaW5pdExvY2FsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3cgPSAwOyAgICAgICAgICAgICAgICAvLyDooYzmlbBcbiAgICBwcml2YXRlIGNvbCA9IDA7ICAgICAgICAgICAgICAgIC8vIOWIl+aVsFxuICAgIHByaXZhdGUgX3JlYWxSb3cgPSAwOyAgICAgICAgICAgLy8g5a6e6ZmF6KGM5pWwXG4gICAgcHJpdmF0ZSBfcmVhbENvbCA9IDA7ICAgICAgICAgICAvLyDlrp7pmYXliJfmlbBcbiAgICBwcml2YXRlIHN0ZXBSb3cgPSAwOyAgICAgICAgICAgIC8vIOatpemVv1xuICAgIHByaXZhdGUgU3RlcENvbCA9IDA7ICAgICAgICAgICAgLy8g5q2l6ZW/XG4gICAgcHJpdmF0ZSB2ZXJ0aWNlc0NvdW50ID0gNDtcbiAgICBwcml2YXRlIGluZGljZXNDb3VudCA9IDY7XG5cblxuICAgIGZsb2F0c1BlclZlcnQgPSA1O1xuICAgIHV2T2Zmc2V0ID0gMjsgICAgICAgXG4gICAgY29sb3JPZmZzZXQgPSA0O1xuXG4gICAgcHJpdmF0ZSBfcmVuZGVyRGF0YTogY2MuUmVuZGVyRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbG9jYWw6IG51bWJlcltdID0gbnVsbDtcblxuICAgIGdldCB2ZXJ0aWNlc0Zsb2F0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNDb3VudCAqIHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICB9XG5cbiAgICAvKiog6I635b6X5LiJ6KeS5b2i54mH5q6155qE5pWw6YePICovXG4gICAgcHVibGljIGdldFRyaWFuZ2xlQ291bnQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5yb3ctMSkgKiAodGhpcy5jb2wgLSAxKSAqIDI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRyaWFuZ2xlKGlkeDogbnVtYmVyKSB7XG4gICAgICAgIGlmKGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuZ2V0VHJpYW5nbGVDb3VudCgpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IHZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF0gYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgbGV0IHZlcnRJZHggPSBNYXRoLmZsb29yKGlkeCAvIHRoaXMuX3JlYWxDb2wpICogdGhpcy5fcmVhbENvbCAqIDIgKyBpZHg7XG4gICAgICAgIGxldCBhcnI6IGNjLlZlYzJbXSA9IFtdO1xuICAgICAgICBpZihpZHggJSAyID09IDApIHtcbiAgICAgICAgICAgIGFyciA9IFtcbiAgICAgICAgICAgICAgICBjYy52Mih2ZXJ0c1t2ZXJ0SWR4ICogdGhpcy5mbG9hdHNQZXJWZXJ0XSwgdmVydHNbdmVydElkeCAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSksXG4gICAgICAgICAgICAgICAgY2MudjIodmVydHNbKHZlcnRJZHggKyAxKSAqIHRoaXMuZmxvYXRzUGVyVmVydF0sIHZlcnRzWyh2ZXJ0SWR4ICsgMSkgKiB0aGlzLmZsb2F0c1BlclZlcnQrMV0pLFxuICAgICAgICAgICAgICAgIGNjLnYyKHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbCkgKiB0aGlzLmZsb2F0c1BlclZlcnRdLCB2ZXJ0c1sodmVydElkeCArIHRoaXMuX3JlYWxDb2wpICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYXJyID0gW1xuICAgICAgICAgICAgICAgIGNjLnYyKHZlcnRzW3ZlcnRJZHggKiB0aGlzLmZsb2F0c1BlclZlcnRdLCB2ZXJ0c1t2ZXJ0SWR4ICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdKSxcbiAgICAgICAgICAgICAgICBjYy52Mih2ZXJ0c1sodmVydElkeCArIHRoaXMuX3JlYWxDb2wpICogdGhpcy5mbG9hdHNQZXJWZXJ0XSwgdmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sKSAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSksXG4gICAgICAgICAgICAgICAgY2MudjIodmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sLTEpICogdGhpcy5mbG9hdHNQZXJWZXJ0XSwgdmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sLTEpICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdKSwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VHJpYW5nbGUoaWR4OiBudW1iZXIsIGFycjogY2MuVmVjMltdLCBjb21wOiBhbnkpIHtcbiAgICAgICAgaWYoaWR4IDwgMCB8fCBpZHggPj0gdGhpcy5nZXRUcmlhbmdsZUNvdW50KCkpIHJldHVybiA7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdIGFzIEFycmF5PG51bWJlcj47XG4gICAgICAgIGxldCB2ZXJ0SWR4ID0gTWF0aC5mbG9vcihpZHggLyB0aGlzLl9yZWFsQ29sKSAqIHRoaXMuX3JlYWxDb2wgKiAyICsgaWR4O1xuICAgICAgICBcbiAgICAgICAgaWYoaWR4ICUgMiA9PSAwKSB7XG4gICAgICAgICAgICB2ZXJ0c1t2ZXJ0SWR4ICogdGhpcy5mbG9hdHNQZXJWZXJ0XSA9IGFyclswXS54O1xuICAgICAgICAgICAgdmVydHNbdmVydElkeCAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSA9IGFyclswXS55O1xuXG4gICAgICAgICAgICB2ZXJ0c1sodmVydElkeCArIDEpICogdGhpcy5mbG9hdHNQZXJWZXJ0XSA9IGFyclsxXS54O1xuICAgICAgICAgICAgdmVydHNbKHZlcnRJZHggKyAxKSAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSA9IGFyclsxXS55O1xuXG4gICAgICAgICAgICB2ZXJ0c1sodmVydElkeCArIHRoaXMuX3JlYWxDb2wpICogdGhpcy5mbG9hdHNQZXJWZXJ0XSA9IGFyclsyXS54O1xuICAgICAgICAgICAgdmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sKSAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSA9IGFyclsyXS55O1xuXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHZlcnRzW3ZlcnRJZHggKiB0aGlzLmZsb2F0c1BlclZlcnRdID0gYXJyWzBdLng7XG4gICAgICAgICAgICB2ZXJ0c1t2ZXJ0SWR4ICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdID0gYXJyWzBdLnk7XG5cbiAgICAgICAgICAgIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbCkgKiB0aGlzLmZsb2F0c1BlclZlcnRdID0gYXJyWzFdLng7XG4gICAgICAgICAgICB2ZXJ0c1sodmVydElkeCArIHRoaXMuX3JlYWxDb2wpICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdID0gYXJyWzFdLnk7XG5cbiAgICAgICAgICAgIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbC0xKSAqIHRoaXMuZmxvYXRzUGVyVmVydF0gPSBhcnJbMl0ueDtcbiAgICAgICAgICAgIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbC0xKSAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSA9IGFyclsyXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcC5fdmVydHNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlY3RDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnJvdy0xKSAqICh0aGlzLmNvbCAtIDEpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UmVjdChpZHg6IG51bWJlcikge1xuICAgICAgICBpZihpZHggPCAwIHx8IGlkeCA+PSB0aGlzLmdldFJlY3RDb3VudCgpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IHZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF0gYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgbGV0IHZlcnRJZHggPSBNYXRoLmZsb29yKGlkeCoyIC8gdGhpcy5fcmVhbENvbCkgKiB0aGlzLl9yZWFsQ29sICogMiArIChpZHggKiAyICUgdGhpcy5fcmVhbENvbCk7XG5cbiAgICAgICAgbGV0IGFycjogY2MuVmVjMltdID0gW1xuICAgICAgICAgICAgY2MudjIodmVydHNbdmVydElkeCAqIHRoaXMuZmxvYXRzUGVyVmVydF0sIHZlcnRzW3ZlcnRJZHggKiB0aGlzLmZsb2F0c1BlclZlcnQrMV0pLFxuICAgICAgICAgICAgY2MudjIodmVydHNbKHZlcnRJZHggKyAxKSAqIHRoaXMuZmxvYXRzUGVyVmVydF0sIHZlcnRzWyh2ZXJ0SWR4ICsgMSkgKiB0aGlzLmZsb2F0c1BlclZlcnQrMV0pLFxuICAgICAgICAgICAgY2MudjIodmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sKSAqIHRoaXMuZmxvYXRzUGVyVmVydF0sIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbCkgKiB0aGlzLmZsb2F0c1BlclZlcnQrMV0pLFxuICAgICAgICAgICAgY2MudjIodmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sKzEpICogdGhpcy5mbG9hdHNQZXJWZXJ0XSwgdmVydHNbKHZlcnRJZHggKyB0aGlzLl9yZWFsQ29sKzEpICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdKSwgICAgICAgICAgICAgICAgXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRSZWN0KGlkeDogbnVtYmVyLCBhcnI6IGNjLlZlYzJbXSkge1xuICAgICAgICBpZihpZHggPCAwIHx8IGlkeCA+PSB0aGlzLmdldFJlY3RDb3VudCgpKSByZXR1cm4gO1xuICAgICAgICBsZXQgdmVydHMgPSB0aGlzLl9yZW5kZXJEYXRhLnZEYXRhc1swXSBhcyBBcnJheTxudW1iZXI+O1xuICAgICAgICBsZXQgdmVydElkeCA9IE1hdGguZmxvb3IoKGlkeCAqIDIpIC8gdGhpcy5fcmVhbENvbCkgKiB0aGlzLl9yZWFsQ29sICogMiArIChpZHggKiAyICUgdGhpcy5fcmVhbENvbCk7XG4gICAgICAgIFxuICAgICAgICB2ZXJ0c1t2ZXJ0SWR4ICogdGhpcy5mbG9hdHNQZXJWZXJ0XSA9IGFyclswXS54O1xuICAgICAgICB2ZXJ0c1t2ZXJ0SWR4ICogdGhpcy5mbG9hdHNQZXJWZXJ0KzFdID0gYXJyWzBdLnk7XG5cbiAgICAgICAgdmVydHNbKHZlcnRJZHggKyAxKSAqIHRoaXMuZmxvYXRzUGVyVmVydF0gPSBhcnJbMV0ueDtcbiAgICAgICAgdmVydHNbKHZlcnRJZHggKyAxKSAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSA9IGFyclsxXS55O1xuXG4gICAgICAgIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbCkgKiB0aGlzLmZsb2F0c1BlclZlcnRdID0gYXJyWzJdLng7XG4gICAgICAgIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbCkgKiB0aGlzLmZsb2F0c1BlclZlcnQrMV0gPSBhcnJbMl0ueTtcblxuICAgICAgICB2ZXJ0c1sodmVydElkeCArIHRoaXMuX3JlYWxDb2wrMSkgKiB0aGlzLmZsb2F0c1BlclZlcnRdID0gYXJyWzNdLng7XG4gICAgICAgIHZlcnRzWyh2ZXJ0SWR4ICsgdGhpcy5fcmVhbENvbCsxKSAqIHRoaXMuZmxvYXRzUGVyVmVydCsxXSA9IGFyclszXS55O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldERhdGEoY29tcDogTWVzaFRleHR1cmUpIHtcbiAgICAgICAgaWYoIWNvbXAudGV4dHVyZSkgcmV0dXJuIDtcbiAgICAgICAgbGV0IHdpZHRoID0gY29tcC50ZXh0dXJlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gY29tcC50ZXh0dXJlLmhlaWdodDtcbiAgICAgICAgbGV0IHN0ZXAgPSBjb21wLnN0ZXA7XG4gICAgICAgIHRoaXMucm93ID0gTWF0aC5mbG9vcihoZWlnaHQgLyBzdGVwKSArIDE7XG4gICAgICAgIHRoaXMuY29sID0gTWF0aC5mbG9vcih3aWR0aCAvIHN0ZXApICsgMTtcbiAgICAgICAgdGhpcy5zdGVwUm93ID0gaGVpZ2h0IC8gKHRoaXMucm93LTEpO1xuICAgICAgICB0aGlzLlN0ZXBDb2wgPSB3aWR0aCAvICh0aGlzLmNvbCAtIDEpO1xuXG4gICAgICAgIHRoaXMuX3JlYWxSb3cgPSAyICsgKHRoaXMucm93IC0gMikgKiAyO1xuICAgICAgICB0aGlzLl9yZWFsQ29sID0gMiArICh0aGlzLmNvbCAtIDIpICogMjtcblxuICAgICAgICBjYy5sb2codGhpcy5yb3csIHRoaXMuY29sKTtcblxuICAgICAgICB0aGlzLnZlcnRpY2VzQ291bnQgPSB0aGlzLl9yZWFsUm93ICogdGhpcy5fcmVhbENvbDtcbiAgICAgICAgdGhpcy5pbmRpY2VzQ291bnQgPSAodGhpcy5yb3ctMSkgKiAodGhpcy5jb2wgLSAxKSAqIDY7XG4gICAgICAgIHRoaXMuX3JlbmRlckRhdGFbJ2NsZWFyJ10oKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWZm10KCkge1xuICAgICAgICByZXR1cm4gdmZtdFBvc1V2Q29sb3I7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiBjYy5yZW5kZXJlclsnX2hhbmRsZSddLmdldEJ1ZmZlcignbWVzaCcsIHRoaXMuZ2V0VmZtdCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5fcmVuZGVyRGF0YTtcbiAgICAgICAgZGF0YS5jcmVhdGVRdWFkRGF0YSgwLCB0aGlzLnZlcnRpY2VzRmxvYXRzLCB0aGlzLmluZGljZXNDb3VudCk7XG5cbiAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLl9yZW5kZXJEYXRhLmlEYXRhc1swXTtcbiAgICAgICAgbGV0IGluZGV4T2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLnJvdy0xOyArK3IpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb2wtMTsgKytjKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gciAqIDIgKiB0aGlzLl9yZWFsQ29sICsgYyAqIDI7XG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRleE9mZnNldCsrXSA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kZXhPZmZzZXQrK10gPSBzdGFydCArIDE7XG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRleE9mZnNldCsrXSA9IHN0YXJ0ICsgdGhpcy5fcmVhbENvbDtcbiAgICAgICAgICAgICAgICBpbmRpY2VzW2luZGV4T2Zmc2V0KytdID0gc3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kZXhPZmZzZXQrK10gPSBzdGFydCArIHRoaXMuX3JlYWxDb2wrMTtcbiAgICAgICAgICAgICAgICBpbmRpY2VzW2luZGV4T2Zmc2V0KytdID0gc3RhcnQgKyB0aGlzLl9yZWFsQ29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBpbml0TG9jYWwoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsID0gW107XG4gICAgICAgIHRoaXMuX2xvY2FsLmxlbmd0aCA9IDQ7XG4gICAgfVxuXG4gICAgLyoqIOWhq+WFhemhtueCueeahGNvbG9yICovXG4gICAgcHVibGljIHVwZGF0ZUNvbG9yKGNvbXA6IGNjLlJlbmRlckNvbXBvbmVudCwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBsZXQgdWludFZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS51aW50VkRhdGFzWzBdO1xuICAgICAgICBpZighdWludFZlcnRzKSByZXR1cm4gO1xuICAgICAgICBjb2xvciA9IGNvbG9yICE9IG51bGwgPyBjb2xvciA6IGNvbXAubm9kZS5jb2xvclsnX3ZhbCddO1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgbGV0IGNvbG9yT2Zmc2V0ID0gdGhpcy5jb2xvck9mZnNldDtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy52ZXJ0aWNlc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHVpbnRWZXJ0c1tjb2xvck9mZnNldCArIGkgKiBmbG9hdHNQZXJWZXJ0XSA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmm7TmlrB1diAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVVVnMoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGxldCB1dk9mZnNldCA9IHRoaXMudXZPZmZzZXQ7XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgICBsZXQgdmVydHMgPSB0aGlzLl9yZW5kZXJEYXRhLnZEYXRhc1swXTtcbiAgICAgICAgbGV0IHZpZCA9IDA7XG5cbiAgICAgICAgbGV0IF9zZXRVdiA9ICh1dl94OiBudW1iZXIsIHV2X3k6IG51bWJlciwgdmlkOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2b2Zmc2V0ID0gdmlkICogZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgIHZlcnRzW3ZvZmZzZXQgKyB1dk9mZnNldF0gPSB1dl94O1xuICAgICAgICAgICAgdmVydHNbdm9mZnNldCArIHV2T2Zmc2V0ICsgMV0gPSB1dl95O1xuICAgICAgICB9XG4gICAgICAgIGxldCBfZmlsbE9uZVJvdyA9ICh1dl95OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgY29sPTA7IGNvbDx0aGlzLmNvbDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdXZfeCA9IGNvbC8odGhpcy5jb2wtMSk7XG4gICAgICAgICAgICAgICAgX3NldFV2KHV2X3gsIHV2X3ksIHZpZCsrKTtcbiAgICAgICAgICAgICAgICBpZihjb2wgIT09IDAgJiYgY29sICE9PSB0aGlzLmNvbC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZXRVdih1dl94LCB1dl95LCB2aWQrKyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgcm93PTA7IHJvdzx0aGlzLnJvdzsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCB1dl95ID0gMS1yb3cvKHRoaXMucm93LTEpO1xuICAgICAgICAgICAgX2ZpbGxPbmVSb3codXZfeSk7XG4gICAgICAgICAgICBpZihyb3cgIT09IDAgJiYgcm93ICE9PSB0aGlzLnJvdy0xKSB7XG4gICAgICAgICAgICAgICAgX2ZpbGxPbmVSb3codXZfeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVdvcmxkVmVydHNXZWJHTChjb21wOiBjYy5SZW5kZXJDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGxvY2FsID0gdGhpcy5fbG9jYWw7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuXG4gICAgICAgIGxldCBtYXRyaXg6IGNjLk1hdDQgPSBjb21wLm5vZGVbJ193b3JsZE1hdHJpeCddO1xuICAgICAgICBsZXQgbWF0cml4bSA9IG1hdHJpeC5tLFxuICAgICAgICBhID0gbWF0cml4bVswXSwgYiA9IG1hdHJpeG1bMV0sIGMgPSBtYXRyaXhtWzRdLCBkID0gbWF0cml4bVs1XSwgXG4gICAgICAgIHR4ID0gbWF0cml4bVsxMl0sIHR5ID0gbWF0cml4bVsxM107XG5cbiAgICAgICAgbGV0IHZsID0gbG9jYWxbMF0sIHZyID0gbG9jYWxbMl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZiID0gbG9jYWxbMV0sIHZ0ID0gbG9jYWxbM107XG5cbiAgICAgICAgbGV0IGp1c3RUcmFuc2xhdGUgPSBhID09PSAxICYmIGIgPT09IDAgJiYgYyA9PT0gMCAmJiBkID09PSAxO1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgbGV0IHZlcnRJZHggPSAwO1xuICAgICAgICBcbiAgICAgICAgbGV0IF9zZXRWZXJ0ID0gKGxvY2FsQ29sWDogbnVtYmVyLCBsb2NhbFJvd1k6IG51bWJlciwgdmVydElkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgd29ybGRJbmRleCA9IGZsb2F0c1BlclZlcnQgKiB2ZXJ0SWR4O1xuICAgICAgICAgICAgdmVydHNbd29ybGRJbmRleF0gPSBsb2NhbENvbFggKyB0eDtcbiAgICAgICAgICAgIHZlcnRzW3dvcmxkSW5kZXggKyAxXSA9IGxvY2FsUm93WSArIHR5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9zZXRWZXJ0MiA9IChsb2NhbENvbFg6IG51bWJlciwgbG9jYWxSb3dZOiBudW1iZXIsIHZlcnRJZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHdvcmxkSW5kZXggPSB2ZXJ0SWR4ICogZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgIHZlcnRzW3dvcmxkSW5kZXhdID0gbG9jYWxDb2xYICogYSArIGxvY2FsUm93WSAqIGMgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzW3dvcmxkSW5kZXggKyAxXSA9IGxvY2FsQ29sWCAqIGIgKyBsb2NhbFJvd1kgKiBkICsgdHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2ZpbGxPbmVSb3cgPSAobG9jYWxSb3dZOiBudW1iZXIsIHNldFZlcnQ6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGNvbD0wOyBjb2w8dGhpcy5jb2w7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsQ29sWCA9IChjb2wgPT0gdGhpcy5jb2wtMSkgPyB2ciA6ICh2bCArIGNvbCAqIHRoaXMuU3RlcENvbCk7XG4gICAgICAgICAgICAgICAgc2V0VmVydChsb2NhbENvbFgsIGxvY2FsUm93WSwgdmVydElkeCArKyk7XG4gICAgICAgICAgICAgICAgaWYoY29sICE9PSAwICYmIGNvbCAhPT0gdGhpcy5jb2wtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmj5LlhaXkuIDliJdcbiAgICAgICAgICAgICAgICAgICAgc2V0VmVydChsb2NhbENvbFgsIGxvY2FsUm93WSwgdmVydElkeCArKyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoanVzdFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgZm9yKGxldCByb3c9MDsgcm93PHRoaXMucm93OyByb3crKykge1xuICAgICAgICAgICAgICAgIGxldCBsb2NhbFJvd1kgPSAocm93ID09IHRoaXMucm93LTEpID8gdnQgOiAodmIgKyByb3cgKiB0aGlzLnN0ZXBSb3cpO1xuICAgICAgICAgICAgICAgIF9maWxsT25lUm93KGxvY2FsUm93WSwgX3NldFZlcnQpO1xuICAgICAgICAgICAgICAgIGlmKHJvdyAhPT0gMCAmJiByb3cgIT09IHRoaXMucm93LTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5o+S5YWl5LiA6KGMXG4gICAgICAgICAgICAgICAgICAgIF9maWxsT25lUm93KGxvY2FsUm93WSwgX3NldFZlcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCByb3c9MDsgcm93PHRoaXMucm93OyByb3crKykge1xuICAgICAgICAgICAgICAgIGxldCBsb2NhbFJvd1kgPSAocm93ID09IHRoaXMucm93LTEpID8gdnQgOiAodmIgKyByb3cgKiB0aGlzLnN0ZXBSb3cpO1xuICAgICAgICAgICAgICAgIF9maWxsT25lUm93KGxvY2FsUm93WSwgX3NldFZlcnQyKTtcbiAgICAgICAgICAgICAgICBpZihyb3cgIT09IDAgJiYgcm93ICE9PSB0aGlzLnJvdy0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOaPkuWFpeS4gOihjFxuICAgICAgICAgICAgICAgICAgICBfZmlsbE9uZVJvdyhsb2NhbFJvd1ksIF9zZXRWZXJ0Mik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVdvcmxkVmVydHNOYXRpdmUoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGxldCBsb2NhbCA9IHRoaXMuX2xvY2FsO1xuICAgICAgICBsZXQgdmVydHMgPSB0aGlzLl9yZW5kZXJEYXRhLnZEYXRhc1swXTtcbiAgICAgICAgbGV0IGZsb2F0c1BlclZlcnQgPSB0aGlzLmZsb2F0c1BlclZlcnQ7XG4gICAgICBcbiAgICAgICAgbGV0IHZsID0gbG9jYWxbMF0sXG4gICAgICAgICAgICB2ciA9IGxvY2FsWzJdLFxuICAgICAgICAgICAgdmIgPSBsb2NhbFsxXSxcbiAgICAgICAgICAgIHZ0ID0gbG9jYWxbM107XG4gICAgICBcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgICAvLyBsZWZ0IGJvdHRvbVxuICAgICAgICB2ZXJ0c1tpbmRleF0gPSB2bDtcbiAgICAgICAgdmVydHNbaW5kZXgrMV0gPSB2YjtcbiAgICAgICAgaW5kZXggKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgLy8gcmlnaHQgYm90dG9tXG4gICAgICAgIHZlcnRzW2luZGV4XSA9IHZyO1xuICAgICAgICB2ZXJ0c1tpbmRleCsxXSA9IHZiO1xuICAgICAgICBpbmRleCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAvLyBsZWZ0IHRvcFxuICAgICAgICB2ZXJ0c1tpbmRleF0gPSB2bDtcbiAgICAgICAgdmVydHNbaW5kZXgrMV0gPSB2dDtcbiAgICAgICAgaW5kZXggKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgLy8gcmlnaHQgdG9wXG4gICAgICAgIHZlcnRzW2luZGV4XSA9IHZyO1xuICAgICAgICB2ZXJ0c1tpbmRleCsxXSA9IHZ0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVXb3JsZFZlcnRzKGNvbXA6IGNjLlJlbmRlckNvbXBvbmVudCkge1xuICAgICAgICBpZiAoQ0NfTkFUSVZFUkVOREVSRVIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0c05hdGl2ZShjb21wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0c1dlYkdMKGNvbXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOabtOaWsOmhtueCueaVsOaNriAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVWZXJ0cyhjb21wOiBjYy5SZW5kZXJDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjb21wLm5vZGUsXG4gICAgICAgICAgICBjdzogbnVtYmVyID0gbm9kZS53aWR0aCxcbiAgICAgICAgICAgIGNoOiBudW1iZXIgPSBub2RlLmhlaWdodCxcbiAgICAgICAgICAgIGFwcHg6IG51bWJlciA9IG5vZGUuYW5jaG9yWCAqIGN3LFxuICAgICAgICAgICAgYXBweTogbnVtYmVyID0gbm9kZS5hbmNob3JZICogY2gsXG4gICAgICAgICAgICBsOiBudW1iZXIsXG4gICAgICAgICAgICBiOiBudW1iZXIsIFxuICAgICAgICAgICAgcjogbnVtYmVyLFxuICAgICAgICAgICAgdDogbnVtYmVyO1xuXG4gICAgICAgIGwgPSAtIGFwcHg7XG4gICAgICAgIGIgPSAtIGFwcHk7XG4gICAgICAgIHIgPSBjdyAtIGFwcHg7XG4gICAgICAgIHQgPSBjaCAtIGFwcHk7XG5cbiAgICAgICAgbGV0IGxvY2FsID0gdGhpcy5fbG9jYWw7XG4gICAgICAgIGxvY2FsWzBdID0gbDtcbiAgICAgICAgbG9jYWxbMV0gPSBiO1xuICAgICAgICBsb2NhbFsyXSA9IHI7XG4gICAgICAgIGxvY2FsWzNdID0gdDtcbiAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKGNvbXApO1xuICAgIH1cblxuICAgIC8qKiDmm7TmlrByZW5kZXJkYXRhICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVJlbmRlckRhdGEoY29tcDogTWVzaFRleHR1cmUpIHtcbiAgICAgICAgaWYgKGNvbXAuX3ZlcnRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXREYXRhKGNvbXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVVnMoY29tcCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKGNvbXApO1xuICAgICAgICAgICAgY29tcC5fdmVydHNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIGZpbGxCdWZmZXJzKGNvbXA6IGNjLlJlbmRlckNvbXBvbmVudCwgcmVuZGVyZXIpIHtcbiAgICAgICAgaWYgKHJlbmRlcmVyLndvcmxkTWF0RGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0cyhjb21wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW5kZXJEYXRhID0gdGhpcy5fcmVuZGVyRGF0YTtcblxuICAgICAgICAvLyB2RGF0YemHjOWMheWQqyBwb3PvvIwgdXbvvIwgY29sb3LmlbDmja7vvIwgaURhdGHkuK3ljIXlkKvpobbngrnntKLlvJVcbiAgICAgICAgbGV0IHZEYXRhID0gcmVuZGVyRGF0YS52RGF0YXNbMF07XG4gICAgICAgIGxldCBpRGF0YSA9IHJlbmRlckRhdGEuaURhdGFzWzBdO1xuXG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLmdldEJ1ZmZlcigpO1xuICAgICAgICBsZXQgb2Zmc2V0SW5mbyA9IGJ1ZmZlci5yZXF1ZXN0KHRoaXMudmVydGljZXNDb3VudCwgdGhpcy5pbmRpY2VzQ291bnQpO1xuXG4gICAgICAgIC8vIGJ1ZmZlciBkYXRhIG1heSBiZSByZWFsbG9jLCBuZWVkIGdldCByZWZlcmVuY2UgYWZ0ZXIgcmVxdWVzdC5cblxuICAgICAgICAvLyBmaWxsIHZlcnRpY2VzXG4gICAgICAgIGxldCB2ZXJ0ZXhPZmZzZXQgPSBvZmZzZXRJbmZvLmJ5dGVPZmZzZXQgPj4gMixcbiAgICAgICAgICAgIHZidWYgPSBidWZmZXIuX3ZEYXRhO1xuICAgICAgICBpZiAodkRhdGEubGVuZ3RoICsgdmVydGV4T2Zmc2V0ID4gdmJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZidWYuc2V0KHZEYXRhLnN1YmFycmF5KDAsIHZidWYubGVuZ3RoIC0gdmVydGV4T2Zmc2V0KSwgdmVydGV4T2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZidWYuc2V0KHZEYXRhLCB2ZXJ0ZXhPZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlsbCBpbmRpY2VzXG4gICAgICAgIGxldCBpYnVmID0gYnVmZmVyLl9pRGF0YSxcbiAgICAgICAgICAgIGluZGljZU9mZnNldCA9IG9mZnNldEluZm8uaW5kaWNlT2Zmc2V0LFxuICAgICAgICAgICAgdmVydGV4SWQgPSBvZmZzZXRJbmZvLnZlcnRleE9mZnNldDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpRGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlidWZbaW5kaWNlT2Zmc2V0KytdID0gdmVydGV4SWQgKyBpRGF0YVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhY2tUb0R5bmFtaWNBdGxhcyhjb21wLCBmcmFtZSkge1xuICAgICAgICBpZiAoQ0NfVEVTVCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFmcmFtZS5fb3JpZ2luYWwgJiYgY2MuZHluYW1pY0F0bGFzTWFuYWdlciAmJiBmcmFtZS5fdGV4dHVyZS5wYWNrYWJsZSkge1xuICAgICAgICAgICAgbGV0IHBhY2tlZEZyYW1lID0gY2MuZHluYW1pY0F0bGFzTWFuYWdlci5pbnNlcnRTcHJpdGVGcmFtZShmcmFtZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChwYWNrZWRGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lLl9zZXREeW5hbWljQXRsYXNGcmFtZShwYWNrZWRGcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1hdGVyaWFsID0gY29tcC5fbWF0ZXJpYWxzWzBdO1xuICAgICAgICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAobWF0ZXJpYWwuZ2V0UHJvcGVydHkoJ3RleHR1cmUnKSAhPT0gZnJhbWUuX3RleHR1cmUpIHtcbiAgICAgICAgICAgIC8vIHRleHR1cmUgd2FzIHBhY2tlZCB0byBkeW5hbWljIGF0bGFzLCBzaG91bGQgdXBkYXRlIHV2c1xuICAgICAgICAgICAgY29tcC5fdmVydHNEaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wLl91cGRhdGVNYXRlcmlhbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufSAgICJdfQ==