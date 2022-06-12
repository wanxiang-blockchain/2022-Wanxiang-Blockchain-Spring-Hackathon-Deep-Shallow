"use strict";
cc._RF.push(module, 'e3feaq91SVBdIfW2t1TEvv2', 'BaseAssembler');
// Script/Common/Assemblers/BaseAssembler.ts

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
/**
 * assembler for texture
 */
var BaseAssembler = /** @class */ (function (_super) {
    __extends(BaseAssembler, _super);
    function BaseAssembler() {
        var _this = _super.call(this) || this;
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
    Object.defineProperty(BaseAssembler.prototype, "verticesFloats", {
        get: function () {
            return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
    });
    BaseAssembler.prototype.getVfmt = function () {
        return vfmtPosUvColor;
    };
    BaseAssembler.prototype.getBuffer = function () {
        return cc.renderer['_handle'].getBuffer('mesh', this.getVfmt());
    };
    BaseAssembler.prototype.initData = function () {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
    };
    BaseAssembler.prototype.initLocal = function () {
        this._local = [];
        this._local.length = 4;
    };
    /** 填充顶点的color */
    BaseAssembler.prototype.updateColor = function (comp, color) {
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
    BaseAssembler.prototype.updateUVs = function (comp) {
        // 对应的是 l, b, r, b, l, t, r, t 既左下， 右下， 左上， 右上
        var uv = [0, 1, 1, 1, 0, 0, 1, 0];
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        // 填充render data中4个顶点的uv部分
        for (var i = 0; i < this.verticesCount; i++) {
            var srcOffset = i * 2;
            var dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset]; // 设置 u
            verts[dstOffset + 1] = uv[srcOffset + 1]; // 设置 v
        }
    };
    BaseAssembler.prototype.updateWorldVertsWebGL = function (comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node['_worldMatrix'];
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
        var index = 0;
        var floatsPerVert = this.floatsPerVert;
        if (justTranslate) {
            // left bottom
            verts[index] = vl + tx; // 顶点位置 x = 世界坐标left + x的偏移量
            verts[index + 1] = vb + ty; // 顶点位置 y
            index += floatsPerVert;
            // right bottom
            verts[index] = vr + tx;
            verts[index + 1] = vb + ty;
            index += floatsPerVert;
            // right top
            verts[index] = vr + tx;
            verts[index + 1] = vt + ty;
            index += floatsPerVert;
            // left top
            verts[index] = vl + tx;
            verts[index + 1] = vt + ty;
            index += floatsPerVert;
        }
        else {
            // 4对xy分别乘以 [2,2]仿射矩阵，然后+平移量
            var al = a * vl, ar = a * vr, bl = b * vl, br = b * vr, cb = c * vb, ct = c * vt, db = d * vb, dt = d * vt;
            // left bottom
            verts[index] = al + cb + tx;
            verts[index + 1] = bl + db + ty;
            index += floatsPerVert;
            // right bottom
            verts[index] = ar + cb + tx;
            verts[index + 1] = br + db + ty;
            index += floatsPerVert;
            // left top
            verts[index] = al + ct + tx;
            verts[index + 1] = bl + dt + ty;
            index += floatsPerVert;
            // right top
            verts[index] = ar + ct + tx;
            verts[index + 1] = br + dt + ty;
        }
    };
    BaseAssembler.prototype.updateWorldVertsNative = function (comp) {
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
    BaseAssembler.prototype.updateWorldVerts = function (comp) {
        if (CC_NATIVERENDERER) {
            this.updateWorldVertsNative(comp);
        }
        else {
            this.updateWorldVertsWebGL(comp);
        }
    };
    /** 更新顶点数据 */
    BaseAssembler.prototype.updateVerts = function (comp) {
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
    BaseAssembler.prototype.updateRenderData = function (comp) {
        if (comp._vertsDirty) {
            this.updateUVs(comp);
            this.updateVerts(comp);
            comp._vertsDirty = false;
        }
    };
    BaseAssembler.prototype.fillBuffers = function (comp, renderer) {
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
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset; // vertexId是已经在buffer里的顶点数，也是当前顶点序号的基数
        var textData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7];
        for (var i = 0, l = iData.length; i < l; i++) {
            ibuf[indiceOffset++] = vertexId + textData[i];
        }
    };
    BaseAssembler.prototype.packToDynamicAtlas = function (comp, frame) {
        if (CC_TEST)
            return;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
            var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
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
    return BaseAssembler;
}(cc.Assembler));
exports.default = BaseAssembler;

cc._RF.pop();