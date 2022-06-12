"use strict";
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