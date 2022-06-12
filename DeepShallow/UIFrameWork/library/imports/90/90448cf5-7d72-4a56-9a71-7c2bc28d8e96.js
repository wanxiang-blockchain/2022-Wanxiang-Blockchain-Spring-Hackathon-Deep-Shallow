"use strict";
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