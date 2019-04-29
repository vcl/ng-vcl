(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-layer-demo-module"],{

/***/ "./demo/app/demos/layer/bar.component.html":
/*!*************************************************!*\
  !*** ./demo/app/demos/layer/bar.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclPanel vclPanelDialog vclNoMargin\">\n  <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <h3 class=\"vclPanelTitle\">{{title}}</h3>\n    <button vcl-square-button class=\"vclTransparent\" (click)=\"close()\">\n      <vcl-icon icon=\"fas:times\"></vcl-icon>\n    </button>\n  </div>\n  <div class=\"vclPanelBody\">\n    <p class=\"vclPanelContent\">\n      bar layer content\n    </p>\n  </div>\n  <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <div></div>\n    <div class=\"vclLooseButtonGroup\">\n      <button vcl-button class=\"vclTransparent vclOutline\" (click)=\"close()\">Close Layer</button>\n      <button vcl-button class=\"vclEmphasized\" (click)=\"close('data')\">Close Layer with result</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/layer/bar.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/layer/bar.component.ts ***!
  \***********************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");



var BarComponent = /** @class */ (function () {
    function BarComponent(layer) {
        this.layer = layer;
    }
    Object.defineProperty(BarComponent.prototype, "title", {
        get: function () {
            return this.layer.data.title;
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.close = function (value) {
        this.layer.close({
            value: value
        });
    };
    BarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./bar.component.html */ "./demo/app/demos/layer/bar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LAYER_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "./demo/app/demos/layer/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/layer/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button vcl-button (click)=\"layer.open()\">Open template layer</button>\n<br><br>\n<button vcl-button (click)=\"openFooLayer()\">Open foo component</button>\n<br><br>\n<button vcl-button (click)=\"openBarLayer()\">Open bar component layer</button>\n\n<vcl-layer #layer=\"vclLayer\">\n  <div class=\"vclPanel vclPanelDialog vclNoMargin\">\n    <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <h3 class=\"vclPanelTitle\">\n        Layer\n      </h3>\n      <button vcl-square-button class=\"vclTransparent\" (click)=\"layer.close()\">\n        <vcl-icon icon=\"fas:times\"></vcl-icon>\n      </button>\n    </div>\n    <div class=\"vclPanelBody\">\n      <p class=\"vclPanelContent\">\n        Press escape or click outside of layer to close<br><br>\n      </p>\n    </div>\n    <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <div></div>\n      <div class=\"vclLooseButtonGroup\">\n        <button vcl-button icon=\"fas:times\" class=\"vclTransparent vclOutline\" (click)=\"layer.close()\">Close layer</button>\n        <button vcl-button icon=\"fas:times\" class=\"vclEmphasized\" (click)=\"openFooLayer()\">Open foo layer</button>\n      </div>\n    </div>\n  </div>\n</vcl-layer>\n\n"

/***/ }),

/***/ "./demo/app/demos/layer/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/layer/demo.component.ts ***!
  \************************************************/
/*! exports provided: LayerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerDemoComponent", function() { return LayerDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _foo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foo.component */ "./demo/app/demos/layer/foo.component.ts");
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar.component */ "./demo/app/demos/layer/bar.component.ts");





var LayerDemoComponent = /** @class */ (function () {
    function LayerDemoComponent(fooLayer, layerService) {
        this.fooLayer = fooLayer;
        this.layerService = layerService;
        fooLayer.afterClose.subscribe(function (result) {
            console.log(result);
        });
    }
    LayerDemoComponent.prototype.openBarLayer = function () {
        var layer = this.layerService.open(_bar_component__WEBPACK_IMPORTED_MODULE_4__["BarComponent"], {
            title: 'bar component layer title'
        }, {
            modal: true
        });
        layer.afterClose.subscribe(function (result) {
            layer.destroy(); // Layer is not needed anymore
            console.log(result.value);
        });
    };
    LayerDemoComponent.prototype.openFooLayer = function () {
        this.fooLayer.open({
            title: 'foo component layer title'
        });
    };
    LayerDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/layer/demo.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_foo_component__WEBPACK_IMPORTED_MODULE_3__["FooLayer"],
            _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LayerService"]])
    ], LayerDemoComponent);
    return LayerDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/layer/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/layer/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, LayerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerDemoModule", function() { return LayerDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/layer/demo.component.ts");
/* harmony import */ var _foo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foo.component */ "./demo/app/demos/layer/foo.component.ts");
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar.component */ "./demo/app/demos/layer/bar.component.ts");









function demo() {
    return {
        label: 'Layer',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/layer/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/layer/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts")
            },
            'foo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./foo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/foo.component.html")
            },
            'foo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./foo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/foo.component.ts")
            },
            'bar.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./bar.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/bar.component.html")
            },
            'bar.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./bar.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/bar.component.ts")
            }
        },
    };
}
var LayerDemoModule = /** @class */ (function () {
    function LayerDemoModule() {
    }
    LayerDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLLayerModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo },
                    }]),
            ],
            providers: [
                _foo_component__WEBPACK_IMPORTED_MODULE_7__["FooLayer"]
            ],
            entryComponents: [
                _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
                _bar_component__WEBPACK_IMPORTED_MODULE_8__["BarComponent"],
                _foo_component__WEBPACK_IMPORTED_MODULE_7__["FooComponent"]
            ],
            declarations: [
                _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
                _bar_component__WEBPACK_IMPORTED_MODULE_8__["BarComponent"],
                _foo_component__WEBPACK_IMPORTED_MODULE_7__["FooComponent"]
            ]
        })
    ], LayerDemoModule);
    return LayerDemoModule;
}());



/***/ }),

/***/ "./demo/app/demos/layer/foo.component.html":
/*!*************************************************!*\
  !*** ./demo/app/demos/layer/foo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclPanel vclPanelDialog vclNoMargin\">\n  <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <h3 class=\"vclPanelTitle\">{{title}}</h3>\n    <button vcl-square-button class=\"vclTransparent\" (click)=\"close()\">\n      <vcl-icon icon=\"fas:times\"></vcl-icon>\n    </button>\n  </div>\n  <div class=\"vclPanelBody\">\n    <p class=\"vclPanelContent\">\n      foo layer content\n    </p>\n  </div>\n  <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <div></div>\n    <div class=\"vclLooseButtonGroup\">\n      <button vcl-button class=\"vclTransparent vclOutline\" (click)=\"close()\">Close Layer</button>\n      <button vcl-button class=\"vclEmphasized\" (click)=\"close('data')\">Close Layer with result</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/layer/foo.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/layer/foo.component.ts ***!
  \***********************************************/
/*! exports provided: FooLayer, FooComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooLayer", function() { return FooLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooComponent", function() { return FooComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");



var FooLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FooLayer, _super);
    function FooLayer(injector) {
        return _super.call(this, injector) || this;
    }
    FooLayer.prototype.getComponent = function () {
        return FooComponent;
    };
    FooLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], FooLayer);
    return FooLayer;
}(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LayerBase"]));

var FooComponent = /** @class */ (function () {
    function FooComponent(layer) {
        this.layer = layer;
    }
    Object.defineProperty(FooComponent.prototype, "title", {
        get: function () {
            return this.layer.data.title;
        },
        enumerable: true,
        configurable: true
    });
    FooComponent.prototype.close = function (value) {
        this.layer.close({
            value: value
        });
    };
    FooComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./foo.component.html */ "./demo/app/demos/layer/foo.component.html"),
            providers: [{
                    provide: FooLayer,
                    useExisting: _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LAYER_TOKEN"],
                }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FooLayer])
    ], FooComponent);
    return FooComponent;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"vclArticleHeader\"> {{title}}</h2>\n<div *ngIf=\"tabs.length>0\">\n  <vcl-tab-nav borders=true>\n    <vcl-tab *ngFor=\"let tab of tabs\">\n      <ng-template vcl-tab-label>{{tab.name}}</ng-template>\n      <wormhole *ngIf=\"tab.type==='component'\" [connect]=\"tab.content\"></wormhole>\n      <div *ngIf=\"tab.type==='text'\"><pre>{{tab.content}}</pre></div>\n      <div *ngIf=\"tab.type==='html'\" [innerHtml]=\"tab.content\"></div>\n      <div *ngIf=\"tab.type==='md'\"   class=\"markdown-body\"  [innerHtml]=\"tab.content\"></div>\n      <pre *ngIf=\"tab.type==='pre'\"  [innerHtml]=\"tab.content\"></pre>\n    </vcl-tab>\n  </vcl-tab-nav>\n</div>\n"

/***/ }),

/***/ "./demo/app/modules/demo/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.ts ***!
  \*************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var DemoComponent = /** @class */ (function () {
    function DemoComponent(activatedRoute, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.tabs = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.activatedRoute.snapshot.data['demo']();
        if (data) {
            this.title = data.label;
            if (data.tabs) {
                this.tabs = Object.keys(data.tabs).map(function (key) {
                    var type;
                    var content;
                    if (typeof data.tabs[key] === 'object' && data.tabs[key]) {
                        type = data.tabs[key].type;
                        if (type === 'pre' || type === 'html' || type === 'md') {
                            content = _this.sanitizer.bypassSecurityTrustHtml(data.tabs[key].content);
                        }
                        else {
                            content = data.tabs[key].content;
                        }
                    }
                    else if (typeof data.tabs[key] === 'function') {
                        type = 'component';
                        content = data.tabs[key];
                    }
                    return {
                        name: key,
                        content: content,
                        type: type
                    };
                });
            }
            else {
                this.tabs = [];
            }
        }
        else {
            this.title = 'ng-vcl';
            this.tabs = [];
        }
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/modules/demo/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/modules/demo/demo.module.ts ***!
  \**********************************************/
/*! exports provided: DemoComponent, DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.component */ "./demo/app/modules/demo/demo.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return _demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]; });







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLTabNavModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLWormholeModule"]
            ],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/layer/bar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>{{title}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close()\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n      bar layer content\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close()\"</span>&gt;</span>Close Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close('data')\"</span>&gt;</span>Close Layer with result<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/layer/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer.open()\"</span>&gt;</span>Open template layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"openFooLayer()\"</span>&gt;</span>Open foo component<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"openBarLayer()\"</span>&gt;</span>Open bar component layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-layer</span> #<span class=\"hljs-attr\">layer</span>=<span class=\"hljs-string\">\"vclLayer\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>\n        Layer\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer.close()\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n        Press escape or click outside of layer to close<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer.close()\"</span>&gt;</span>Close layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"openFooLayer()\"</span>&gt;</span>Open foo layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span>\n\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/foo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/layer/foo.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>{{title}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close()\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n      foo layer content\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close()\"</span>&gt;</span>Close Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close('data')\"</span>&gt;</span>Close Layer with result<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/bar.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/bar.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, Provider, Injectable, Injector, Inject } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { Layer, LAYER_TOKEN } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'bar.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> BarComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-meta\">@Inject</span>(LAYER_TOKEN) <span class=\"hljs-keyword\">private</span> layer: Layer</span>) { }\n\n  <span class=\"hljs-keyword\">get</span> title() {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.layer.data.title;\n  }\n\n  close(value?: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-keyword\">this</span>.layer.close({\n      value\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ViewContainerRef } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { LayerService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { FooLayer } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./foo.component'</span>;\n<span class=\"hljs-keyword\">import</span> { BarComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./bar.component'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> LayerDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\">\n    <span class=\"hljs-keyword\">private</span> fooLayer: FooLayer,\n    <span class=\"hljs-keyword\">private</span> layerService: LayerService,\n  </span>) {\n    fooLayer.afterClose.subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-built_in\">console</span>.log(result);\n    });\n  }\n\n  openBarLayer() {\n    <span class=\"hljs-keyword\">const</span> layer = <span class=\"hljs-keyword\">this</span>.layerService.open(BarComponent, {\n      title: <span class=\"hljs-string\">'bar component layer title'</span>\n    }, {\n      modal: <span class=\"hljs-literal\">true</span>\n    });\n    layer.afterClose.subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      layer.destroy(); <span class=\"hljs-comment\">// Layer is not needed anymore</span>\n      <span class=\"hljs-built_in\">console</span>.log(result.value);\n    });\n  }\n\n  openFooLayer() {\n    <span class=\"hljs-keyword\">this</span>.fooLayer.open({\n      title: <span class=\"hljs-string\">'foo component layer title'</span>\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/foo.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/foo.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, Injectable, Injector } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { LayerBase, LAYER_TOKEN } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> FooLayerData {\n  title: <span class=\"hljs-built_in\">string</span>;\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> FooLayerResult {\n  value: <span class=\"hljs-built_in\">string</span>;\n}\n\n<span class=\"hljs-meta\">@Injectable</span>({\n  providedIn: <span class=\"hljs-string\">'root'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FooLayer <span class=\"hljs-keyword\">extends</span> LayerBase&lt;FooLayerData, FooLayerResult, FooComponent&gt; {\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\">injector: Injector</span>) {\n    <span class=\"hljs-keyword\">super</span>(injector);\n  }\n  <span class=\"hljs-keyword\">protected</span> getComponent() {\n    <span class=\"hljs-keyword\">return</span> FooComponent;\n  }\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'foo.component.html'</span>,\n  providers: [{\n    provide: FooLayer,\n    useExisting: LAYER_TOKEN,\n  }]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FooComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> layer: FooLayer</span>) { }\n\n  <span class=\"hljs-keyword\">get</span> title() {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.layer.data.title;\n  }\n\n  close(value?: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-keyword\">this</span>.layer.close({\n      value\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/layer/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/layer/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-layer\">vcl-layer</h1>\n<p>An overlay placed in the center of the screen.</p>\n<h2 id=\"usage\">Usage</h2>\n<h3 id=\"the-layer-reference-object\">The layer reference object</h3>\n<p>A layer implements the <code>Layer</code> interface which allows to listen for events and open/close the layer.<br>It can be created via the <code>vcl-layer</code> component or with the <code>LayerService</code> from a component class:</p>\n<h4 id=\"vcl-layer-1\">vcl-layer</h4>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;myTemplateLayer.open()&quot;</span>&gt;</span>Open Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-layer</span> #<span class=\"hljs-attr\">myTemplateLayer</span>=<span class=\"hljs-string\">&quot;vclLayer&quot;</span> [<span class=\"hljs-attr\">modal</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;vclPanel vclNoMargin&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;vclPanelBody&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;vclPanelContent&quot;</span>&gt;</span>\n        Content\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;myTemplateLayer.close()&quot;</span>&gt;</span>Close Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span></pre>\n<h4 id=\"component-layer\">Component Layer</h4>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { Layer } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n<span class=\"hljs-comment\">// This is just a common component</span>\n@Component({ ... })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyLayerComponent</span> </span>{\n\n  <span class=\"hljs-comment\">// layer is a reference to the current layer.</span>\n  <span class=\"hljs-comment\">// Its value is null when the component is not used as a layer</span>\n  <span class=\"hljs-keyword\">constructor</span>(@Optional() @Inject(LAYER_TOKEN) private layer: Layer) { }\n\n  close() {\n    <span class=\"hljs-comment\">// Close the layer</span>\n    <span class=\"hljs-keyword\">this</span>.layer.close(<span class=\"hljs-string\">&apos;result&apos;</span>);\n  }\n}</pre>\n<h4 id=\"using-the-layers\">Using the Layers</h4>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { LayerService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n<span class=\"hljs-keyword\">import</span> { MyLayerComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;./my-layer.component&apos;</span>;\n\n@Component({ ... })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">DemoComponent</span> </span>{\n  <span class=\"hljs-keyword\">constructor</span>(\n    private layerService: LayerService // This is the reference to the component layer\n  ) {}\n\n  openComponentLayer() {\n    <span class=\"hljs-keyword\">const</span> layer = <span class=\"hljs-keyword\">this</span>.layerService.open(MyLayerComponent).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-built_in\">console</span>.log(result);\n    });\n  }\n}</pre>\n<h3 id=\"api\">API</h3>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">export</span> interface Layer {\n  readonly visible: boolean;\n  afterClose: Observable&lt;any | <span class=\"hljs-literal\">undefined</span>&gt;;\n  open(data?: any, opts?: LayerOptions): Observable&lt;any&gt;;\n  close(result?: any): <span class=\"hljs-keyword\">void</span>;\n  destroy(): <span class=\"hljs-keyword\">void</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">LayerService</span> </span>{\n  create(component: any, opts?: LayerOptions): Layer;\n  open(component: ComponentType&lt;TComponent&gt;, <span class=\"hljs-attr\">data</span>: any, opts?: LayerOptions): Layer;\n}\n\n<span class=\"hljs-keyword\">export</span> interface LayerOptions {\n  position?: PositionStrategy;\n  modal?: boolean;\n}\n</pre>\n<h4 id=\"vcl-layer-attributes\">vcl-layer attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>modal</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Wether a non-modal layer should close when clicked outside</td>\n</tr>\n<tr>\n<td><code>position</code></td>\n<td>PositionStrategy</td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-layer-demo-module.js.map