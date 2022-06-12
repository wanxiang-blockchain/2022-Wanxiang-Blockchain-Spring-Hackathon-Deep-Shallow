
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Assemblers/TextureAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0Fzc2VtYmxlcnMvVGV4dHVyZUFzc2VtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBbUQ7QUFFbkQsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXRCLG9CQUFvQjtBQUNwQixJQUFJLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDM0QsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7Q0FDL0UsQ0FBQyxDQUFDO0FBQ0g7O0dBRUc7QUFDSDtJQUE4QyxvQ0FBWTtJQUN0RDtRQUFBLFlBQ0ksaUJBQU8sU0FLVjtRQUNELG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVSLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQVp0QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRTVCLEtBQUksQ0FBQyxR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QUUsQ0FBQyxTQUFTLEdBK0x6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0dXJlUGx1cyBmcm9tIFwiLi4vQ29tcG9uZW50cy9UZXh0dXJlUGx1c1wiO1xuaW1wb3J0IHsgQ29tbW9uVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHMvQ29tbW9uVXRpbHNcIjtcblxuY29uc3QgZ2Z4ID0gY2NbJ2dmeCddO1xuXG4vLyDpobbngrnmoLzlvI8gLT4g5L2N572uIFVWLCDpopzoibJcbmxldCB2Zm10UG9zVXZDb2xvciA9IG5ldyBnZnguVmVydGV4Rm9ybWF0KFtcbiAgICB7IG5hbWU6IGdmeC5BVFRSX1BPU0lUSU9OLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMiB9LFxuICAgIHsgbmFtZTogZ2Z4LkFUVFJfVVYwLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMiB9LFxuICAgIHsgbmFtZTogZ2Z4LkFUVFJfQ09MT1IsIHR5cGU6IGdmeC5BVFRSX1RZUEVfVUlOVDgsIG51bTogNCwgbm9ybWFsaXplOiB0cnVlIH0sXG5dKTtcbi8qKlxuICogYXNzZW1ibGVyIGZvciB0ZXh0dXJlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVBc3NlbWJsZXIgZXh0ZW5kcyBjYy5Bc3NlbWJsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9yZW5kZXJEYXRhID0gbmV3IGNjLlJlbmRlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyRGF0YS5pbml0KHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgICB9XG4gICAgdmVydGljZXNDb3VudCA9IDQ7XG4gICAgaW5kaWNlc0NvdW50ID0gNjtcblxuICAgIGZsb2F0c1BlclZlcnQgPSA1O1xuICAgIHV2T2Zmc2V0ID0gMjsgICAgICAgXG4gICAgY29sb3JPZmZzZXQgPSA0OyAgICBcblxuICAgIHByaXZhdGUgX3JlbmRlckRhdGE6IGNjLlJlbmRlckRhdGEgPSBudWxsO1xuXG4gICAgZ2V0IHZlcnRpY2VzRmxvYXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc0NvdW50ICogdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWZm10KCkge1xuICAgICAgICByZXR1cm4gdmZtdFBvc1V2Q29sb3I7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiBjYy5yZW5kZXJlclsnX2hhbmRsZSddLmdldEJ1ZmZlcignbWVzaCcsIHRoaXMuZ2V0VmZtdCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5fcmVuZGVyRGF0YTtcbiAgICAgICAgZGF0YS5jcmVhdGVRdWFkRGF0YSgwLCB0aGlzLnZlcnRpY2VzRmxvYXRzLCB0aGlzLmluZGljZXNDb3VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0RGF0YShjb21wOiBUZXh0dXJlUGx1cykge1xuICAgICAgICBsZXQgcG9pbnRzID0gY29tcC5wb2x5Z29uO1xuICAgICAgICBpZighcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPCAzKSByZXR1cm4gO1xuICAgICAgICB0aGlzLnZlcnRpY2VzQ291bnQgPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmluZGljZXNDb3VudCA9IHRoaXMudmVydGljZXNDb3VudCArICh0aGlzLnZlcnRpY2VzQ291bnQgLSAzKSAqIDI7XG4gICAgICAgIHRoaXMuX3JlbmRlckRhdGFbJ2NsZWFyJ10oKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0UXVhZEluZGljZXMoaW5kaWNlczogbnVtYmVyW10sIGFycjogbnVtYmVyW10pIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbmRpY2VzW2ldID0gYXJyW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWhq+WFhemhtueCueeahGNvbG9yICovXG4gICAgcHVibGljIHVwZGF0ZUNvbG9yKGNvbXA6IFRleHR1cmVQbHVzLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGxldCB1aW50VmVydHMgPSB0aGlzLl9yZW5kZXJEYXRhLnVpbnRWRGF0YXNbMF07XG4gICAgICAgIGlmKCF1aW50VmVydHMpIHJldHVybiA7XG4gICAgICAgIGNvbG9yID0gY29sb3IgIT0gbnVsbCA/IGNvbG9yIDogY29tcC5ub2RlLmNvbG9yWydfdmFsJ107XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgICBsZXQgY29sb3JPZmZzZXQgPSB0aGlzLmNvbG9yT2Zmc2V0O1xuXG4gICAgICAgIGxldCBwb2x5Z29uID0gY29tcC5wb2x5Z29uO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwb2x5Z29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1aW50VmVydHNbY29sb3JPZmZzZXQgKyBpICogZmxvYXRzUGVyVmVydF0gPSBjb2xvcjtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuICAgIC8qKiDmm7TmlrB1diAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVVVnMoY29tcDogVGV4dHVyZVBsdXMpIHtcbiAgICAgICAgbGV0IHV2T2Zmc2V0ID0gdGhpcy51dk9mZnNldDtcbiAgICAgICAgbGV0IGZsb2F0c1BlclZlcnQgPSB0aGlzLmZsb2F0c1BlclZlcnQ7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuXG4gICAgICAgIGxldCB1dnMgPSBDb21tb25VdGlscy5jb21wdXRlVXYoY29tcC5wb2x5Z29uLCBjb21wLm5vZGUud2lkdGgsIGNvbXAubm9kZS5oZWlnaHQpICAgICAgICBcbiAgICAgICAgbGV0IHBvbHlnb24gPSBjb21wLnBvbHlnb247XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBvbHlnb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkc3RPZmZzZXQgPSBmbG9hdHNQZXJWZXJ0ICogaSArIHV2T2Zmc2V0O1xuICAgICAgICAgICAgdmVydHNbZHN0T2Zmc2V0XSA9IHV2c1tpXS54O1xuICAgICAgICAgICAgdmVydHNbZHN0T2Zmc2V0ICsgMV0gPSB1dnNbaV0ueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVXb3JsZFZlcnRzV2ViR0woY29tcDogVGV4dHVyZVBsdXMpIHtcbiAgICAgICAgbGV0IHZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF07XG5cbiAgICAgICAgbGV0IG1hdHJpeDogY2MuTWF0NCA9IGNvbXAubm9kZVsnX3dvcmxkTWF0cml4J107XG4gICAgICAgIGxldCBtYXRyaXhtID0gbWF0cml4Lm0sXG4gICAgICAgIGEgPSBtYXRyaXhtWzBdLCBiID0gbWF0cml4bVsxXSwgYyA9IG1hdHJpeG1bNF0sIGQgPSBtYXRyaXhtWzVdLCBcbiAgICAgICAgdHggPSBtYXRyaXhtWzEyXSwgdHkgPSBtYXRyaXhtWzEzXTtcblxuICAgICAgICBsZXQganVzdFRyYW5zbGF0ZSA9IGEgPT09IDEgJiYgYiA9PT0gMCAmJiBjID09PSAwICYmIGQgPT09IDE7XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgICBpZiAoanVzdFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBjb21wLnBvbHlnb247XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxwb2x5Z29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVydHNbaSAqIGZsb2F0c1BlclZlcnRdID0gcG9seWdvbltpXS54ICsgdHg7XG4gICAgICAgICAgICAgICAgdmVydHNbaSAqIGZsb2F0c1BlclZlcnQrMV0gPSBwb2x5Z29uW2ldLnkgKyB0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwb2x5Z29uICA9IGNvbXAucG9seWdvbjtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHBvbHlnb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZXJ0c1tpICogZmxvYXRzUGVyVmVydF0gPSBhICogcG9seWdvbltpXS54ICsgYyAqIHBvbHlnb25baV0ueSArIHR4O1xuICAgICAgICAgICAgICAgIHZlcnRzW2kgKiBmbG9hdHNQZXJWZXJ0KzFdID0gYiAqIHBvbHlnb25baV0ueCArIGQgKiBwb2x5Z29uW2ldLnkgKyB0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVXb3JsZFZlcnRzTmF0aXZlKGNvbXA6IFRleHR1cmVQbHVzKSB7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgIFxuICAgICAgICBsZXQgcG9seWdvbiA9IGNvbXAucG9seWdvbjtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cG9seWdvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydHNbaSAqIGZsb2F0c1BlclZlcnRdID0gcG9seWdvbltpXS54O1xuICAgICAgICAgICAgdmVydHNbaSAqIGZsb2F0c1BlclZlcnQrMV0gPSBwb2x5Z29uW2ldLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlV29ybGRWZXJ0cyhjb21wOiBUZXh0dXJlUGx1cykge1xuICAgICAgICBpZiAoQ0NfTkFUSVZFUkVOREVSRVIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0c05hdGl2ZShjb21wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0c1dlYkdMKGNvbXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOabtOaWsOmhtueCueaVsOaNriAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVWZXJ0cyhjb21wOiBUZXh0dXJlUGx1cykge1xuICAgICAgICBsZXQgaW5kaWNlc0FyciA9IENvbW1vblV0aWxzLnNwbGl0ZVBvbHlnb24oY29tcC5wb2x5Z29uKTsgXG4gICAgICAgIHRoaXMuaW5pdFF1YWRJbmRpY2VzKHRoaXMuX3JlbmRlckRhdGEuaURhdGFzWzBdLCBpbmRpY2VzQXJyKTtcbiAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKGNvbXApO1xuICAgIH1cblxuICAgIC8qKiDmm7TmlrByZW5kZXJkYXRhICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVJlbmRlckRhdGEoY29tcDogVGV4dHVyZVBsdXMpIHtcbiAgICAgICAgaWYgKGNvbXAuX3ZlcnRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXREYXRhKGNvbXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVVnMoY29tcCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKGNvbXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb2xvcihjb21wLCBudWxsKTtcbiAgICAgICAgICAgIGNvbXAuX3ZlcnRzRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAvL+avj+W4p+mDveS8muiiq+iwg+eUqFxuICAgIGZpbGxCdWZmZXJzKGNvbXA6IFRleHR1cmVQbHVzLCByZW5kZXJlcikge1xuICAgICAgICBpZiAocmVuZGVyZXIud29ybGRNYXREaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKGNvbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlckRhdGEgPSB0aGlzLl9yZW5kZXJEYXRhO1xuXG4gICAgICAgIC8vIHZEYXRh6YeM5YyF5ZCrIHBvc++8jCB1du+8jCBjb2xvcuaVsOaNru+8jCBpRGF0YeS4reWMheWQq+mhtueCuee0ouW8lVxuICAgICAgICBsZXQgdkRhdGEgPSByZW5kZXJEYXRhLnZEYXRhc1swXTtcbiAgICAgICAgbGV0IGlEYXRhID0gcmVuZGVyRGF0YS5pRGF0YXNbMF07XG5cbiAgICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuZ2V0QnVmZmVyKCk7XG4gICAgICAgIGxldCBvZmZzZXRJbmZvID0gYnVmZmVyLnJlcXVlc3QodGhpcy52ZXJ0aWNlc0NvdW50LCB0aGlzLmluZGljZXNDb3VudCk7XG5cbiAgICAgICAgLy8gYnVmZmVyIGRhdGEgbWF5IGJlIHJlYWxsb2MsIG5lZWQgZ2V0IHJlZmVyZW5jZSBhZnRlciByZXF1ZXN0LlxuXG4gICAgICAgIC8vIGZpbGwgdmVydGljZXNcbiAgICAgICAgbGV0IHZlcnRleE9mZnNldCA9IG9mZnNldEluZm8uYnl0ZU9mZnNldCA+PiAyLFxuICAgICAgICAgICAgdmJ1ZiA9IGJ1ZmZlci5fdkRhdGE7XG4gICAgICAgIGlmICh2RGF0YS5sZW5ndGggKyB2ZXJ0ZXhPZmZzZXQgPiB2YnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdmJ1Zi5zZXQodkRhdGEuc3ViYXJyYXkoMCwgdmJ1Zi5sZW5ndGggLSB2ZXJ0ZXhPZmZzZXQpLCB2ZXJ0ZXhPZmZzZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmJ1Zi5zZXQodkRhdGEsIHZlcnRleE9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaWxsIGluZGljZXNcbiAgICAgICAgbGV0IGlidWYgPSBidWZmZXIuX2lEYXRhLFxuICAgICAgICAgICAgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXG4gICAgICAgICAgICB2ZXJ0ZXhJZCA9IG9mZnNldEluZm8udmVydGV4T2Zmc2V0O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGlEYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIGlEYXRhW2ldO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICBwYWNrVG9EeW5hbWljQXRsYXMoY29tcDogVGV4dHVyZVBsdXMsIGZyYW1lOiBhbnkpIHtcbiAgICAgICAgaWYgKENDX1RFU1QpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICghZnJhbWUuX29yaWdpbmFsICYmIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIgJiYgZnJhbWUuX3RleHR1cmUucGFja2FibGUpIHtcbiAgICAgICAgICAgIGxldCBwYWNrZWRGcmFtZSA9IGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuaW5zZXJ0U3ByaXRlRnJhbWUoZnJhbWUpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHBhY2tlZEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZnJhbWUuX3NldER5bmFtaWNBdGxhc0ZyYW1lKHBhY2tlZEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBjb21wWydfbWF0ZXJpYWxzJ11bMF07XG4gICAgICAgIGlmICghbWF0ZXJpYWwpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmIChtYXRlcmlhbC5nZXRQcm9wZXJ0eSgndGV4dHVyZScpICE9PSBmcmFtZS5fdGV4dHVyZSkge1xuICAgICAgICAgICAgLy8gdGV4dHVyZSB3YXMgcGFja2VkIHRvIGR5bmFtaWMgYXRsYXMsIHNob3VsZCB1cGRhdGUgdXZzXG4gICAgICAgICAgICBjb21wLl92ZXJ0c0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuX3VwZGF0ZU1hdGVyaWFsKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19