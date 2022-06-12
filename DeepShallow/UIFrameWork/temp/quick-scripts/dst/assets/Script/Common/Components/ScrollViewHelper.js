
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Components/ScrollViewHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90448z1fXJKVppxfCvCjY6W', 'ScrollViewHelper');
// Script/Common/Components/ScrollViewHelper.ts

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
exports.ScrollViewHelper = exports.ScrollViewElementProxy = exports.ScrollViewElementProxyState = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//help:
//add this to the ScrollView node
//add all data by addData function, that includes the layout of the data, we call it a "Proxy"
//set onFreeUI to your free handler, put the node in pool
//set onAllocUI to your alloc handler, instansiate the node, and refresh it.
//enjoy, all ui will have a lazy create 
//if you call scrollTo() function with no duration, you should call checkUI(), because scrollTo with no duration will not trigger "scrollEvents"
var ScrollViewElementProxyState;
(function (ScrollViewElementProxyState) {
    ScrollViewElementProxyState[ScrollViewElementProxyState["NoUI"] = 0] = "NoUI";
    ScrollViewElementProxyState[ScrollViewElementProxyState["HaveUI"] = 1] = "HaveUI";
})(ScrollViewElementProxyState = exports.ScrollViewElementProxyState || (exports.ScrollViewElementProxyState = {}));
var ScrollViewElementProxy = /** @class */ (function () {
    function ScrollViewElementProxy() {
        this.state = ScrollViewElementProxyState.NoUI;
    }
    return ScrollViewElementProxy;
}());
exports.ScrollViewElementProxy = ScrollViewElementProxy;
var ScrollViewHelper = /** @class */ (function (_super) {
    __extends(ScrollViewHelper, _super);
    function ScrollViewHelper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.syncInterval = 0.05;
        _this._proxys = [];
        _this._syncCounter = 0;
        _this._lastCheckX = 0;
        return _this;
    }
    Object.defineProperty(ScrollViewHelper.prototype, "scrollView", {
        get: function () {
            return this._svCachedScrollView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScrollViewHelper.prototype, "datas", {
        get: function () {
            return this._proxys;
        },
        enumerable: false,
        configurable: true
    });
    ScrollViewHelper.prototype.clearData = function () {
        for (var _i = 0, _a = this._proxys; _i < _a.length; _i++) {
            var proxy = _a[_i];
            if (proxy.ui) {
                if (this.onFreeUI) {
                    this.onFreeUI(proxy);
                }
            }
        }
        this._proxys.length = 0;
    };
    ScrollViewHelper.prototype.addData = function (data) {
        this._initializeProxy(data);
        this._proxys.push(data);
    };
    ScrollViewHelper.prototype.setDebug = function (debug) {
        if (debug && !this._debugNode) {
            this._debugNode = (new cc.Node()).addComponent(cc.Graphics);
            this.scrollView.content.addChild(this._debugNode.node);
            this._debugNode.node.setPosition(cc.v2(0, 0));
        }
        else if (!debug && this._debugNode) {
            this._debugNode.node.removeFromParent();
            this._debugNode.node.destroy();
        }
        this._refreshDebug();
    };
    ScrollViewHelper.prototype.checkUI = function () {
        this._checkUIState();
        this._syncingUI = true;
    };
    ScrollViewHelper.prototype.setLoopHorizontal = function (loop) {
        if (loop != this._horizontalLoop) {
            if (loop) {
                for (var i = this._proxys.length - 1; i >= 0; i--) {
                    var target = this._proxys[i];
                    if (!target.horizontalLoop) {
                        //this is a original
                        var copyed = new ScrollViewElementProxy();
                        this._initializeProxy(copyed);
                        copyed.src = target.src;
                        copyed.region = new cc.Rect(target.region.x, target.region.y, target.region.width, target.region.height);
                        copyed.horizontalLoop = true;
                        copyed.verticalLoop = target.verticalLoop;
                        copyed.region.x += this.scrollView.content.width;
                        this._proxys.push(copyed);
                    }
                }
                this.scrollView.content.setContentSize(this.scrollView.content.width * 2, this.scrollView.content.height);
            }
            else {
                for (var i = this._proxys.length - 1; i >= 0; i--) {
                    var target = this._proxys[i];
                    if (target.horizontalLoop) {
                        if (target.ui) {
                            this.onFreeUI(target);
                            target.ui = null;
                            this._proxys.splice(i, 1);
                        }
                    }
                }
                this.scrollView.content.setContentSize(this.scrollView.content.width / 2, this.scrollView.content.height);
            }
            this._horizontalLoop = loop;
        }
    };
    ScrollViewHelper.prototype.onLoad = function () {
        this._bindScrollView(this.getComponent(cc.ScrollView));
    };
    ScrollViewHelper.prototype.update = function (dt) {
        if (this._syncingUI) {
            this._syncCounter += dt;
            if (this._syncCounter >= this.syncInterval) {
                this._syncCounter = 0;
                this._syncUIState(1);
            }
        }
    };
    ScrollViewHelper.prototype._initializeProxy = function (proxy) {
        proxy.horizontalLoop = false;
        proxy.src = proxy;
        proxy.state = ScrollViewElementProxyState.NoUI;
        proxy.ui = null;
        proxy.verticalLoop = false;
    };
    ScrollViewHelper.prototype._checkLoopHorizontal = function () {
        var offset = this.scrollView.getScrollOffset();
        var delta = offset.x - this._lastCheckX;
        if (Math.abs(delta) > 2) {
            this._lastCheckX = offset.x;
            var originalWidth = this.scrollView.content.width / 2;
            //check move whole content
            if (delta < 0 && offset.x < -originalWidth) {
                offset.x += originalWidth;
                this._lastCheckX = offset.x;
                offset.x = -offset.x;
                this.scrollView.scrollToOffset(offset);
            }
            else if (delta > 0 && offset.x > 0) {
                offset.x -= originalWidth;
                this._lastCheckX = offset.x;
                offset.x = -offset.x;
                this.scrollView.scrollToOffset(offset);
            }
        }
    };
    ScrollViewHelper.prototype._bindScrollView = function (view) {
        this._svCachedScrollView = this.getComponent(cc.ScrollView);
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = "ScrollViewHelper";
        eventHandler.handler = "_onScroll";
        this._svCachedScrollView.scrollEvents.push(eventHandler);
        this._svCachedScrollView.node.on(cc.Node.EventType.SIZE_CHANGED, this._refreshViewportRect, this);
        this._svCachedScrollView.content.on(cc.Node.EventType.ANCHOR_CHANGED, this._refreshViewportRect, this);
        this._svCachedScrollView.content.on(cc.Node.EventType.SIZE_CHANGED, this._refreshViewportRect, this);
        this._refreshViewportRect();
    };
    ScrollViewHelper.prototype._refreshViewportRect = function () {
        this._rectCachedViewport = cc.rect();
        this._rectCachedViewport.size = this._svCachedScrollView.node.getContentSize();
        this._rectCachedViewport.origin = cc.v2(-this._svCachedScrollView.content.anchorX * this._svCachedScrollView.content.width, (1 - this._svCachedScrollView.content.anchorY) * this._svCachedScrollView.content.height - this._rectCachedViewport.size.height);
        this._checkUIState();
        this._syncingUI = true;
    };
    ScrollViewHelper.prototype._checkUIState = function () {
        var delta = this._svCachedScrollView.getScrollOffset();
        var viewWidth = this._rectCachedViewport.width;
        var viewHeight = this._rectCachedViewport.height;
        var viewX = -delta.x + this._rectCachedViewport.x;
        var viewY = -delta.y + this._rectCachedViewport.y;
        for (var _i = 0, _a = this._proxys; _i < _a.length; _i++) {
            var proxy = _a[_i];
            var rect = proxy.region;
            var x = rect.x;
            var y = rect.y;
            if (x > viewX - rect.width && x < viewX + viewWidth &&
                y > viewY - rect.height && y < viewY + viewHeight) {
                proxy.state = ScrollViewElementProxyState.HaveUI;
            }
            else {
                proxy.state = ScrollViewElementProxyState.NoUI;
            }
        }
    };
    ScrollViewHelper.prototype._syncUIState = function (maxAllocCount) {
        var changeCount = 0;
        for (var _i = 0, _a = this._proxys; _i < _a.length; _i++) {
            var proxy = _a[_i];
            if (proxy.state == ScrollViewElementProxyState.NoUI && proxy.ui) {
                this.onFreeUI(proxy);
                changeCount++;
                if (this._debugNode) {
                    cc.log("ScrollViewHelper._syncUIState ----> free ui");
                }
            }
        }
        for (var _b = 0, _c = this._proxys; _b < _c.length; _b++) {
            var proxy = _c[_b];
            if (proxy.state == ScrollViewElementProxyState.HaveUI && !proxy.ui) {
                var pooled = this.isUIPooled && this.isUIPooled(proxy);
                this.onAllocUI(proxy);
                changeCount++;
                if (!pooled) { //real alloc should be limited
                    maxAllocCount--;
                }
                if (this._debugNode) {
                    cc.log("ScrollViewHelper._syncUIState ----> alloc ui");
                }
            }
            if (maxAllocCount <= 0) {
                break;
            }
        }
        if (changeCount <= 0) {
            //everything is changed
            this._syncingUI = false;
        }
    };
    ScrollViewHelper.prototype._onScroll = function () {
        if (this._horizontalLoop) {
            this._checkLoopHorizontal();
        }
        this._checkUIState();
        this._syncingUI = true;
    };
    ScrollViewHelper.prototype._refreshDebug = function () {
        if (this._debugNode) {
            this._debugNode.clear();
            this._debugNode.fillColor = cc.color(255, 0, 0, 255);
            for (var i = 0; i < this._proxys.length; i++) {
                this._debugNode.fillRect(this._proxys[i].region.x, this._proxys[i].region.y, this._proxys[i].region.width, this._proxys[i].region.height);
            }
        }
    };
    __decorate([
        property()
    ], ScrollViewHelper.prototype, "syncInterval", void 0);
    ScrollViewHelper = __decorate([
        ccclass
    ], ScrollViewHelper);
    return ScrollViewHelper;
}(cc.Component));
exports.ScrollViewHelper = ScrollViewHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbXBvbmVudHMvU2Nyb2xsVmlld0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsT0FBTztBQUNQLGlDQUFpQztBQUNqQyw4RkFBOEY7QUFDOUYseURBQXlEO0FBQ3pELDRFQUE0RTtBQUM1RSx3Q0FBd0M7QUFDeEMsZ0pBQWdKO0FBRWhKLElBQVksMkJBR1g7QUFIRCxXQUFZLDJCQUEyQjtJQUNuQyw2RUFBSSxDQUFBO0lBQ0osaUZBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVywyQkFBMkIsR0FBM0IsbUNBQTJCLEtBQTNCLG1DQUEyQixRQUd0QztBQUVEO0lBQUE7UUFNVyxVQUFLLEdBQStCLDJCQUEyQixDQUFDLElBQUksQ0FBQztJQUNoRixDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHdEQUFzQjtBQVVuQztJQUFzQyxvQ0FBWTtJQUFsRDtRQUFBLHFFQWlPQztRQS9OVSxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQThCLEVBQUUsQ0FBQztRQTBGeEMsa0JBQVksR0FBWSxDQUFDLENBQUM7UUFtQjFCLGlCQUFXLEdBQVUsQ0FBQyxDQUFDOztJQWlIbkMsQ0FBQztJQXBORyxzQkFBVyx3Q0FBVTthQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsbUNBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBUyxHQUFoQjtRQUNJLEtBQWlCLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVks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UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVPLHdDQUFhLEdBQXJCO1FBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdJO1NBQ0o7SUFDTCxDQUFDO0lBOU5EO1FBREMsUUFBUSxFQUFFOzBEQUN5QjtJQUYzQixnQkFBZ0I7UUFENUIsT0FBTztPQUNLLGdCQUFnQixDQWlPNUI7SUFBRCx1QkFBQztDQWpPRCxBQWlPQyxDQWpPcUMsRUFBRSxDQUFDLFNBQVMsR0FpT2pEO0FBak9ZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vL2hlbHA6XG4vL2FkZCB0aGlzIHRvIHRoZSBTY3JvbGxWaWV3IG5vZGVcbi8vYWRkIGFsbCBkYXRhIGJ5IGFkZERhdGEgZnVuY3Rpb24sIHRoYXQgaW5jbHVkZXMgdGhlIGxheW91dCBvZiB0aGUgZGF0YSwgd2UgY2FsbCBpdCBhIFwiUHJveHlcIlxuLy9zZXQgb25GcmVlVUkgdG8geW91ciBmcmVlIGhhbmRsZXIsIHB1dCB0aGUgbm9kZSBpbiBwb29sXG4vL3NldCBvbkFsbG9jVUkgdG8geW91ciBhbGxvYyBoYW5kbGVyLCBpbnN0YW5zaWF0ZSB0aGUgbm9kZSwgYW5kIHJlZnJlc2ggaXQuXG4vL2Vuam95LCBhbGwgdWkgd2lsbCBoYXZlIGEgbGF6eSBjcmVhdGUgXG4vL2lmIHlvdSBjYWxsIHNjcm9sbFRvKCkgZnVuY3Rpb24gd2l0aCBubyBkdXJhdGlvbiwgeW91IHNob3VsZCBjYWxsIGNoZWNrVUkoKSwgYmVjYXVzZSBzY3JvbGxUbyB3aXRoIG5vIGR1cmF0aW9uIHdpbGwgbm90IHRyaWdnZXIgXCJzY3JvbGxFdmVudHNcIlxuXG5leHBvcnQgZW51bSBTY3JvbGxWaWV3RWxlbWVudFByb3h5U3RhdGUge1xuICAgIE5vVUksXG4gICAgSGF2ZVVJXG59XG5cbmV4cG9ydCBjbGFzcyBTY3JvbGxWaWV3RWxlbWVudFByb3h5IHtcbiAgICBwdWJsaWMgcmVnaW9uOmNjLlJlY3Q7XG4gICAgcHVibGljIHVpOmNjLk5vZGU7XG4gICAgcHVibGljIHNyYzpTY3JvbGxWaWV3RWxlbWVudFByb3h5O1xuICAgIHB1YmxpYyBob3Jpem9udGFsTG9vcDpib29sZWFuO1xuICAgIHB1YmxpYyB2ZXJ0aWNhbExvb3A6Ym9vbGVhbjtcbiAgICBwdWJsaWMgc3RhdGU6U2Nyb2xsVmlld0VsZW1lbnRQcm94eVN0YXRlID0gU2Nyb2xsVmlld0VsZW1lbnRQcm94eVN0YXRlLk5vVUk7XG59XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgU2Nyb2xsVmlld0hlbHBlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KClcbiAgICBwdWJsaWMgc3luY0ludGVydmFsIDogbnVtYmVyID0gMC4wNTtcbiAgICBwcml2YXRlIF9wcm94eXMgOiBTY3JvbGxWaWV3RWxlbWVudFByb3h5W10gPSBbXTtcbiAgICBwcml2YXRlIF9zdkNhY2hlZFNjcm9sbFZpZXcgOiBjYy5TY3JvbGxWaWV3O1xuICAgIHByaXZhdGUgX3JlY3RDYWNoZWRWaWV3cG9ydCA6IGNjLlJlY3Q7XG4gICAgcHJpdmF0ZSBfZGVidWdOb2RlIDogY2MuR3JhcGhpY3M7XG4gICAgcHJpdmF0ZSBfaG9yaXpvbnRhbExvb3AgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3N5bmNpbmdVSSA6IGJvb2xlYW47XG4gICAgcHVibGljIG9uRnJlZVVJOihwcm94eTpTY3JvbGxWaWV3RWxlbWVudFByb3h5KSA9PiB2b2lkO1xuICAgIHB1YmxpYyBvbkFsbG9jVUk6KHByb3h5OlNjcm9sbFZpZXdFbGVtZW50UHJveHkpID0+IHZvaWQ7XG4gICAgcHVibGljIGlzVUlQb29sZWQ6KHByb3h5OlNjcm9sbFZpZXdFbGVtZW50UHJveHkpID0+IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKSA6IGNjLlNjcm9sbFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ZDYWNoZWRTY3JvbGxWaWV3O1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGRhdGFzKCkgOiBTY3JvbGxWaWV3RWxlbWVudFByb3h5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJveHlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckRhdGEoKSB7XG4gICAgICAgIGZvcihsZXQgcHJveHkgb2YgdGhpcy5fcHJveHlzKSB7XG4gICAgICAgICAgICBpZihwcm94eS51aSkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMub25GcmVlVUkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZyZWVVSShwcm94eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Byb3h5cy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGREYXRhKGRhdGE6U2Nyb2xsVmlld0VsZW1lbnRQcm94eSkge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplUHJveHkoZGF0YSk7XG4gICAgICAgIHRoaXMuX3Byb3h5cy5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWJ1ZyhkZWJ1ZzpCb29sZWFuKSB7XG4gICAgICAgIGlmKGRlYnVnICYmICF0aGlzLl9kZWJ1Z05vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnTm9kZSA9IChuZXcgY2MuTm9kZSgpKS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ2hpbGQodGhpcy5fZGVidWdOb2RlLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fZGVidWdOb2RlLm5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xuICAgICAgICB9IGVsc2UgaWYoIWRlYnVnICYmIHRoaXMuX2RlYnVnTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVidWdOb2RlLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgdGhpcy5fZGVidWdOb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlZnJlc2hEZWJ1ZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1VJKCkge1xuICAgICAgICB0aGlzLl9jaGVja1VJU3RhdGUoKTtcbiAgICAgICAgdGhpcy5fc3luY2luZ1VJID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9vcEhvcml6b250YWwobG9vcDpib29sZWFuKSB7XG4gICAgICAgIGlmKGxvb3AgIT0gdGhpcy5faG9yaXpvbnRhbExvb3ApIHtcbiAgICAgICAgICAgIGlmKGxvb3ApIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB0aGlzLl9wcm94eXMubGVuZ3RoIC0gMTsgaSA+PSAwIDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLl9wcm94eXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQuaG9yaXpvbnRhbExvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBpcyBhIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weWVkID0gbmV3IFNjcm9sbFZpZXdFbGVtZW50UHJveHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVQcm94eShjb3B5ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29weWVkLnNyYyA9IHRhcmdldC5zcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5ZWQucmVnaW9uID0gbmV3IGNjLlJlY3QodGFyZ2V0LnJlZ2lvbi54LCB0YXJnZXQucmVnaW9uLnksIHRhcmdldC5yZWdpb24ud2lkdGgsIHRhcmdldC5yZWdpb24uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHllZC5ob3Jpem9udGFsTG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5ZWQudmVydGljYWxMb29wID0gdGFyZ2V0LnZlcnRpY2FsTG9vcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHllZC5yZWdpb24ueCArPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3h5cy5wdXNoKGNvcHllZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGggKiAyLCB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB0aGlzLl9wcm94eXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuX3Byb3h5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGFyZ2V0Lmhvcml6b250YWxMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0YXJnZXQudWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRnJlZVVJKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnVpID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm94eXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldENvbnRlbnRTaXplKHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoIC8gMiwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2hvcml6b250YWxMb29wID0gbG9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fYmluZFNjcm9sbFZpZXcodGhpcy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N5bmNDb3VudGVyIDogbnVtYmVyID0gMDtcbiAgICB1cGRhdGUoZHQ6bnVtYmVyKSB7XG4gICAgICAgIGlmKHRoaXMuX3N5bmNpbmdVSSkge1xuICAgICAgICAgICAgdGhpcy5fc3luY0NvdW50ZXIrPWR0O1xuICAgICAgICAgICAgaWYodGhpcy5fc3luY0NvdW50ZXIgPj0gdGhpcy5zeW5jSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zeW5jQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3luY1VJU3RhdGUoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplUHJveHkocHJveHk6U2Nyb2xsVmlld0VsZW1lbnRQcm94eSkge1xuICAgICAgICBwcm94eS5ob3Jpem9udGFsTG9vcCA9IGZhbHNlO1xuICAgICAgICBwcm94eS5zcmMgPSBwcm94eTtcbiAgICAgICAgcHJveHkuc3RhdGUgPSBTY3JvbGxWaWV3RWxlbWVudFByb3h5U3RhdGUuTm9VSTtcbiAgICAgICAgcHJveHkudWkgPSBudWxsO1xuICAgICAgICBwcm94eS52ZXJ0aWNhbExvb3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sYXN0Q2hlY2tYOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2hlY2tMb29wSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc2Nyb2xsVmlldy5nZXRTY3JvbGxPZmZzZXQoKTtcbiAgICAgICAgbGV0IGRlbHRhID0gb2Zmc2V0LnggLSB0aGlzLl9sYXN0Q2hlY2tYO1xuICAgICAgICBpZihNYXRoLmFicyhkZWx0YSkgPiAyKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0Q2hlY2tYID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxXaWR0aCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoIC8gMjtcbiAgICAgICAgICAgIC8vY2hlY2sgbW92ZSB3aG9sZSBjb250ZW50XG4gICAgICAgICAgICBpZihkZWx0YSA8IDAgJiYgb2Zmc2V0LnggPCAtb3JpZ2luYWxXaWR0aCkge1xuICAgICAgICAgICAgICAgIG9mZnNldC54ICs9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdENoZWNrWCA9IG9mZnNldC54O1xuICAgICAgICAgICAgICAgIG9mZnNldC54ID0gLW9mZnNldC54O1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChvZmZzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGRlbHRhID4gMCAmJiBvZmZzZXQueCA+IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQueCAtPSBvcmlnaW5hbFdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RDaGVja1ggPSBvZmZzZXQueDtcbiAgICAgICAgICAgICAgICBvZmZzZXQueCA9IC1vZmZzZXQueDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2JpbmRTY3JvbGxWaWV3KHZpZXc6Y2MuU2Nyb2xsVmlldykge1xuICAgICAgICB0aGlzLl9zdkNhY2hlZFNjcm9sbFZpZXcgPSB0aGlzLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgICAgbGV0IGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNjcm9sbFZpZXdIZWxwZXJcIjtcbiAgICAgICAgZXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIl9vblNjcm9sbFwiO1xuICAgICAgICB0aGlzLl9zdkNhY2hlZFNjcm9sbFZpZXcuc2Nyb2xsRXZlbnRzLnB1c2goZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5fc3ZDYWNoZWRTY3JvbGxWaWV3Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLl9yZWZyZXNoVmlld3BvcnRSZWN0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5fc3ZDYWNoZWRTY3JvbGxWaWV3LmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQU5DSE9SX0NIQU5HRUQsIHRoaXMuX3JlZnJlc2hWaWV3cG9ydFJlY3QsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zdkNhY2hlZFNjcm9sbFZpZXcuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuX3JlZnJlc2hWaWV3cG9ydFJlY3QsIHRoaXMpO1xuICAgICAgICB0aGlzLl9yZWZyZXNoVmlld3BvcnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVmcmVzaFZpZXdwb3J0UmVjdCgpIHtcbiAgICAgICAgdGhpcy5fcmVjdENhY2hlZFZpZXdwb3J0ID0gY2MucmVjdCgpO1xuICAgICAgICB0aGlzLl9yZWN0Q2FjaGVkVmlld3BvcnQuc2l6ZSA9IHRoaXMuX3N2Q2FjaGVkU2Nyb2xsVmlldy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIHRoaXMuX3JlY3RDYWNoZWRWaWV3cG9ydC5vcmlnaW4gPSBjYy52MigtdGhpcy5fc3ZDYWNoZWRTY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuX3N2Q2FjaGVkU2Nyb2xsVmlldy5jb250ZW50LndpZHRoLCBcbiAgICAgICAgICAgICgxIC0gdGhpcy5fc3ZDYWNoZWRTY3JvbGxWaWV3LmNvbnRlbnQuYW5jaG9yWSkgKiB0aGlzLl9zdkNhY2hlZFNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQgLSB0aGlzLl9yZWN0Q2FjaGVkVmlld3BvcnQuc2l6ZS5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9jaGVja1VJU3RhdGUoKTtcbiAgICAgICAgdGhpcy5fc3luY2luZ1VJID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBfY2hlY2tVSVN0YXRlKCkge1xuICAgICAgICBsZXQgZGVsdGEgPSB0aGlzLl9zdkNhY2hlZFNjcm9sbFZpZXcuZ2V0U2Nyb2xsT2Zmc2V0KCk7XG4gICAgICAgIGxldCB2aWV3V2lkdGggPSB0aGlzLl9yZWN0Q2FjaGVkVmlld3BvcnQud2lkdGg7XG4gICAgICAgIGxldCB2aWV3SGVpZ2h0ID0gdGhpcy5fcmVjdENhY2hlZFZpZXdwb3J0LmhlaWdodDtcbiAgICAgICAgbGV0IHZpZXdYID0gLWRlbHRhLnggKyB0aGlzLl9yZWN0Q2FjaGVkVmlld3BvcnQueDtcbiAgICAgICAgbGV0IHZpZXdZID0gLWRlbHRhLnkgKyB0aGlzLl9yZWN0Q2FjaGVkVmlld3BvcnQueTtcbiAgICAgICAgZm9yKGxldCBwcm94eSBvZiB0aGlzLl9wcm94eXMpIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0gcHJveHkucmVnaW9uO1xuICAgICAgICAgICAgbGV0IHggPSByZWN0Lng7XG4gICAgICAgICAgICBsZXQgeSA9IHJlY3QueTtcbiAgICAgICAgICAgIGlmKHggPiB2aWV3WCAtIHJlY3Qud2lkdGggJiYgeCA8IHZpZXdYICsgdmlld1dpZHRoICYmXG4gICAgICAgICAgICAgICAgeSA+IHZpZXdZIC0gcmVjdC5oZWlnaHQgJiYgeSA8IHZpZXdZICsgdmlld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHByb3h5LnN0YXRlID0gU2Nyb2xsVmlld0VsZW1lbnRQcm94eVN0YXRlLkhhdmVVSTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJveHkuc3RhdGUgPSBTY3JvbGxWaWV3RWxlbWVudFByb3h5U3RhdGUuTm9VSTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3N5bmNVSVN0YXRlKG1heEFsbG9jQ291bnQ6bnVtYmVyKSB7XG4gICAgICAgIGxldCBjaGFuZ2VDb3VudCA6IG51bWJlciA9IDA7XG4gICAgICAgIGZvcihsZXQgcHJveHkgb2YgdGhpcy5fcHJveHlzKSB7XG4gICAgICAgICAgICBpZihwcm94eS5zdGF0ZSA9PSBTY3JvbGxWaWV3RWxlbWVudFByb3h5U3RhdGUuTm9VSSAmJiBwcm94eS51aSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25GcmVlVUkocHJveHkpO1xuICAgICAgICAgICAgICAgIGNoYW5nZUNvdW50ICsrO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2RlYnVnTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJTY3JvbGxWaWV3SGVscGVyLl9zeW5jVUlTdGF0ZSAtLS0tPiBmcmVlIHVpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHByb3h5IG9mIHRoaXMuX3Byb3h5cykge1xuICAgICAgICAgICAgaWYocHJveHkuc3RhdGUgPT0gU2Nyb2xsVmlld0VsZW1lbnRQcm94eVN0YXRlLkhhdmVVSSAmJiAhcHJveHkudWkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9vbGVkID0gdGhpcy5pc1VJUG9vbGVkICYmIHRoaXMuaXNVSVBvb2xlZChwcm94eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFsbG9jVUkocHJveHkpO1xuICAgICAgICAgICAgICAgIGNoYW5nZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYoIXBvb2xlZCkgeyAgICAgICAgICAgICAgIC8vcmVhbCBhbGxvYyBzaG91bGQgYmUgbGltaXRlZFxuICAgICAgICAgICAgICAgICAgICBtYXhBbGxvY0NvdW50LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2RlYnVnTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJTY3JvbGxWaWV3SGVscGVyLl9zeW5jVUlTdGF0ZSAtLS0tPiBhbGxvYyB1aVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtYXhBbGxvY0NvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihjaGFuZ2VDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAvL2V2ZXJ5dGhpbmcgaXMgY2hhbmdlZFxuICAgICAgICAgICAgdGhpcy5fc3luY2luZ1VJID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNjcm9sbCgpIHtcbiAgICAgICAgaWYodGhpcy5faG9yaXpvbnRhbExvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTG9vcEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGVja1VJU3RhdGUoKTtcbiAgICAgICAgdGhpcy5fc3luY2luZ1VJID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZWZyZXNoRGVidWcoKSB7XG4gICAgICAgIGlmKHRoaXMuX2RlYnVnTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVidWdOb2RlLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9kZWJ1Z05vZGUuZmlsbENvbG9yID0gY2MuY29sb3IoMjU1LCAwLCAwLCAyNTUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX3Byb3h5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlYnVnTm9kZS5maWxsUmVjdCh0aGlzLl9wcm94eXNbaV0ucmVnaW9uLngsIHRoaXMuX3Byb3h5c1tpXS5yZWdpb24ueSwgdGhpcy5fcHJveHlzW2ldLnJlZ2lvbi53aWR0aCwgdGhpcy5fcHJveHlzW2ldLnJlZ2lvbi5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==