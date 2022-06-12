"use strict";
cc._RF.push(module, 'e0687tDW69CxalPcgT1Omra', 'TextureAssembler');
// Script/Common/Assemblers/TextureAssembler.ts

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
var CommonUtils_1 = require("../Utils/CommonUtils");
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
var TextureAssembler = /** @class */ (function (_super) {
    __extends(TextureAssembler, _super);
    function TextureAssembler() {
        var _this = _super.call(this) || this;
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this._renderData = null;
        _this._renderData = new cc.RenderData();
        _this._renderData.init(_this);
        _this.initData();
        return _this;
    }
    Object.defineProperty(TextureAssembler.prototype, "verticesFloats", {
        get: function () {
            return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
    });
    TextureAssembler.prototype.getVfmt = function () {
        return vfmtPosUvColor;
    };
    TextureAssembler.prototype.getBuffer = function () {
        return cc.renderer['_handle'].getBuffer('mesh', this.getVfmt());
    };
    TextureAssembler.prototype.initData = function () {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
    };
    TextureAssembler.prototype.resetData = function (comp) {
        var points = comp.polygon;
        if (!points || points.length < 3)
            return;
        this.verticesCount = points.length;
        this.indicesCount = this.verticesCount + (this.verticesCount - 3) * 2;
        this._renderData['clear']();
        this.initData();
    };
    TextureAssembler.prototype.initQuadIndices = function (indices, arr) {
        for (var i = 0; i < arr.length; i++) {
            indices[i] = arr[i];
        }
    };
    /** 填充顶点的color */
    TextureAssembler.prototype.updateColor = function (comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts)
            return;
        color = color != null ? color : comp.node.color['_val'];
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        var polygon = comp.polygon;
        for (var i = 0; i < polygon.length; i++) {
            uintVerts[colorOffset + i * floatsPerVert] = color;
        }
    };
    /** 更新uv */
    TextureAssembler.prototype.updateUVs = function (comp) {
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        var uvs = CommonUtils_1.CommonUtils.computeUv(comp.polygon, comp.node.width, comp.node.height);
        var polygon = comp.polygon;
        for (var i = 0; i < polygon.length; i++) {
            var dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uvs[i].x;
            verts[dstOffset + 1] = uvs[i].y;
        }
    };
    TextureAssembler.prototype.updateWorldVertsWebGL = function (comp) {
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node['_worldMatrix'];
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
        var floatsPerVert = this.floatsPerVert;
        if (justTranslate) {
            var polygon = comp.polygon;
            for (var i = 0; i < polygon.length; i++) {
                verts[i * floatsPerVert] = polygon[i].x + tx;
                verts[i * floatsPerVert + 1] = polygon[i].y + ty;
            }
        }
        else {
            var polygon = comp.polygon;
            for (var i = 0; i < polygon.length; i++) {
                verts[i * floatsPerVert] = a * polygon[i].x + c * polygon[i].y + tx;
                verts[i * floatsPerVert + 1] = b * polygon[i].x + d * polygon[i].y + ty;
            }
        }
    };
    TextureAssembler.prototype.updateWorldVertsNative = function (comp) {
        var verts = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        var polygon = comp.polygon;
        for (var i = 0; i < polygon.length; i++) {
            verts[i * floatsPerVert] = polygon[i].x;
            verts[i * floatsPerVert + 1] = polygon[i].y;
        }
    };
    TextureAssembler.prototype.updateWorldVerts = function (comp) {
        if (CC_NATIVERENDERER) {
            this.updateWorldVertsNative(comp);
        }
        else {
            this.updateWorldVertsWebGL(comp);
        }
    };
    /** 更新顶点数据 */
    TextureAssembler.prototype.updateVerts = function (comp) {
        var indicesArr = CommonUtils_1.CommonUtils.splitePolygon(comp.polygon);
        this.initQuadIndices(this._renderData.iDatas[0], indicesArr);
        this.updateWorldVerts(comp);
    };
    /** 更新renderdata */
    TextureAssembler.prototype.updateRenderData = function (comp) {
        if (comp._vertsDirty) {
            this.resetData(comp);
            this.updateUVs(comp);
            this.updateVerts(comp);
            this.updateColor(comp, null);
            comp._vertsDirty = false;
        }
    };
    //每帧都会被调用
    TextureAssembler.prototype.fillBuffers = function (comp, renderer) {
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
    TextureAssembler.prototype.packToDynamicAtlas = function (comp, frame) {
        if (CC_TEST)
            return;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
            var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
            if (packedFrame) {
                frame._setDynamicAtlasFrame(packedFrame);
            }
        }
        var material = comp['_materials'][0];
        if (!material)
            return;
        if (material.getProperty('texture') !== frame._texture) {
            // texture was packed to dynamic atlas, should update uvs
            comp._vertsDirty = true;
            comp._updateMaterial();
        }
    };
    return TextureAssembler;
}(cc.Assembler));
exports.default = TextureAssembler;

cc._RF.pop();