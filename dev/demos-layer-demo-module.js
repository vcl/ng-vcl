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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LayerRef"]])
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

module.exports = "<button vcl-button (click)=\"layer.open()\">Open inline layer</button>\n<br><br>\n<button vcl-button (click)=\"openBarComponent()\">Open bar component as layer</button>\n<br><br>\n<button vcl-button (click)=\"openNagLayer()\">Open nag layer</button>\n\n<vcl-layer #layer=\"vclLayer\">\n  <div class=\"vclPanel vclPanelDialog vclNoMargin\">\n    <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <h3 class=\"vclPanelTitle\">\n        Layer\n      </h3>\n      <button vcl-square-button class=\"vclTransparent\" (click)=\"layer.close()\">\n        <vcl-icon icon=\"fas:times\"></vcl-icon>\n      </button>\n    </div>\n    <div class=\"vclPanelBody\">\n      <p class=\"vclPanelContent\">\n        Press escape or click outside of layer to close<br><br>\n      </p>\n    </div>\n    <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <div></div>\n      <div class=\"vclLooseButtonGroup\">\n        <button vcl-button icon=\"fas:times\" class=\"vclTransparent vclOutline\" (click)=\"layer.close()\">Close layer</button>\n      </div>\n    </div>\n  </div>\n</vcl-layer>\n"

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
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar.component */ "./demo/app/demos/layer/bar.component.ts");
/* harmony import */ var _nag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nag.component */ "./demo/app/demos/layer/nag.component.ts");





var LayerDemoComponent = /** @class */ (function () {
    function LayerDemoComponent(nagLayer, layerService) {
        this.nagLayer = nagLayer;
        this.layerService = layerService;
    }
    LayerDemoComponent.prototype.openBarComponent = function () {
        var layer = this.layerService.open(_bar_component__WEBPACK_IMPORTED_MODULE_3__["BarComponent"], {
            data: {
                title: 'bar component layer title'
            },
            closeOnBackdropClick: false,
            closeOnEscape: false
        });
        layer.afterClose.subscribe(function (result) {
            layer.destroy(); // Layer is not needed anymore
            console.log('Bar component result:' + result.value);
        });
    };
    LayerDemoComponent.prototype.openNagLayer = function () {
        this.nagLayer.open({
            data: {
                allowDecline: true
            }
        }).subscribe(function (result) {
            if (result.accept) {
                console.log('Accepted');
            }
            else {
                console.log('Declined');
            }
        });
    };
    LayerDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/layer/demo.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nag_component__WEBPACK_IMPORTED_MODULE_4__["NagLayer"],
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
/* harmony import */ var _nag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nag.component */ "./demo/app/demos/layer/nag.component.ts");
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
            'nag.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./nag.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/nag.component.html")
            },
            'nag.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./nag.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/nag.component.ts")
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
            entryComponents: [
                _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
                _bar_component__WEBPACK_IMPORTED_MODULE_8__["BarComponent"],
                _nag_component__WEBPACK_IMPORTED_MODULE_7__["NagComponent"]
            ],
            declarations: [
                _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
                _bar_component__WEBPACK_IMPORTED_MODULE_8__["BarComponent"],
                _nag_component__WEBPACK_IMPORTED_MODULE_7__["NagComponent"]
            ],
            providers: [
                _nag_component__WEBPACK_IMPORTED_MODULE_7__["NagLayer"]
            ]
        })
    ], LayerDemoModule);
    return LayerDemoModule;
}());



/***/ }),

/***/ "./demo/app/demos/layer/nag.component.html":
/*!*************************************************!*\
  !*** ./demo/app/demos/layer/nag.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclLayoutWidth vclLayoutHorizontal vclLayoutCenter\">\n  <div class=\"vclLayoutFlex vclLayoutThree\">\n    Cookies and similar technologies help us deliver our services. By using our services,\n    you agree to our use of cookies. You can find further information about the\n    use of Cookies on this website in our <a href=\"#\">privacy policy</a>.\n  </div>\n  <div class=\"vclLayoutHorizontal vclLayoutCenterJustified vclLayoutCenter vclGutterMarginLR\">\n    <div class=\"vclLooseButtonGroup\">\n      <button *ngIf=\"layer.data.allowDecline\" vcl-button type=\"button\" (click)=\"decline()\">Decline</button>\n      <button vcl-button type=\"button\" class=\"vclEmphasized\" (click)=\"accept()\">Accept</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/layer/nag.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/layer/nag.component.ts ***!
  \***********************************************/
/*! exports provided: NagComponent, NagLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NagComponent", function() { return NagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NagLayer", function() { return NagLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");




var NagComponent = /** @class */ (function () {
    // Utilize forwardRef to avoid using NagLayer before it was declared
    function NagComponent(layer) {
        this.layer = layer;
        this._hostClasses = true;
    }
    NagComponent.prototype.accept = function () {
        this.layer.close({
            accept: true
        });
    };
    NagComponent.prototype.decline = function () {
        this.layer.close({
            accept: false
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclNag'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclContainer'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclLayoutHorizontal'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclLayoutCenterJustified'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NagComponent.prototype, "_hostClasses", void 0);
    NagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./nag.component.html */ "./demo/app/demos/layer/nag.component.html"),
            styles: [":host { width: 100%; }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NagLayer; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [NagLayer])
    ], NagComponent);
    return NagComponent;
}());

var NagLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NagLayer, _super);
    function NagLayer(injector, overlay) {
        var _this = _super.call(this, injector) || this;
        _this.overlay = overlay;
        _this.templateOrComponent = NagComponent;
        return _this;
    }
    NagLayer.prototype.getLayerConfig = function () {
        return new _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LayerConfig"]({
            closeOnEscape: false,
            hasBackdrop: false,
            width: '100%',
            positionStrategy: this.overlay.position()
                .global()
                .bottom()
                .centerHorizontally()
        });
    };
    NagLayer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]])
    ], NagLayer);
    return NagLayer;
}(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LayerRef"]));



/***/ }),

/***/ "./demo/app/modules/demo/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"vclArticleHeader\"> {{title}}</h2>\n<div *ngIf=\"tabs.length>0\">\n  <vcl-tab-nav borders=true>\n    <vcl-tab *ngFor=\"let tab of tabs\">\n      <vcl-tab-label>{{tab.name}}</vcl-tab-label>\n      <div *ngIf=\"tab.type==='component'\">\n        <ng-template [cdkPortalOutlet]=\"tab.content\"></ng-template>\n      </div>\n      <div *ngIf=\"tab.type==='text'\"><pre>{{tab.content}}</pre></div>\n      <div *ngIf=\"tab.type==='html'\" [innerHtml]=\"tab.content\"></div>\n      <div *ngIf=\"tab.type==='md'\"   class=\"markdown-body\"  [innerHtml]=\"tab.content\"></div>\n      <pre *ngIf=\"tab.type==='pre'\"  [innerHtml]=\"tab.content\"></pre>\n    </vcl-tab>\n  </vcl-tab-nav>\n</div>\n"

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
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");





var DemoComponent = /** @class */ (function () {
    function DemoComponent(activatedRoute, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.tabs = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.activatedRoute.snapshot.data.demo();
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
                        content = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](data.tabs[key]);
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

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLTabNavModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]
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

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer.open()\"</span>&gt;</span>Open inline layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"openBarComponent()\"</span>&gt;</span>Open bar component as layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"openNagLayer()\"</span>&gt;</span>Open nag layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-layer</span> #<span class=\"hljs-attr\">layer</span>=<span class=\"hljs-string\">\"vclLayer\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>\n        Layer\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer.close()\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n        Press escape or click outside of layer to close<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer.close()\"</span>&gt;</span>Close layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/nag.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/layer/nag.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutWidth vclLayoutHorizontal vclLayoutCenter\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutFlex vclLayoutThree\"</span>&gt;</span>\n    Cookies and similar technologies help us deliver our services. By using our services,\n    you agree to our use of cookies. You can find further information about the\n    use of Cookies on this website in our <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span>&gt;</span>privacy policy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>.\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutHorizontal vclLayoutCenterJustified vclLayoutCenter vclGutterMarginLR\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"layer.data.allowDecline\"</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"button\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"decline()\"</span>&gt;</span>Decline<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"button\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"accept()\"</span>&gt;</span>Accept<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/bar.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/bar.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { LayerRef } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'bar.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> BarComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> layer: LayerRef</span>) { }\n\n  <span class=\"hljs-keyword\">get</span> title() {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.layer.data.title;\n  }\n\n  close(value?: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-keyword\">this</span>.layer.close({\n      value\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { LayerService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { BarComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./bar.component'</span>;\n<span class=\"hljs-keyword\">import</span> { NagLayer } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./nag.component'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> LayerDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\">\n    <span class=\"hljs-keyword\">private</span> nagLayer: NagLayer,\n    <span class=\"hljs-keyword\">private</span> layerService: LayerService,\n  </span>) {  }\n\n  openBarComponent() {\n    <span class=\"hljs-keyword\">const</span> layer = <span class=\"hljs-keyword\">this</span>.layerService.open(BarComponent, {\n      data: {\n        title: <span class=\"hljs-string\">'bar component layer title'</span>\n      },\n      closeOnBackdropClick: <span class=\"hljs-literal\">false</span>,\n      closeOnEscape: <span class=\"hljs-literal\">false</span>\n    });\n    layer.afterClose.subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      layer.destroy(); <span class=\"hljs-comment\">// Layer is not needed anymore</span>\n      <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Bar component result:'</span> + result.value);\n    });\n  }\n\n  openNagLayer() {\n    <span class=\"hljs-keyword\">this</span>.nagLayer.open({\n      data: {\n        allowDecline: <span class=\"hljs-literal\">true</span>\n      }\n    }).subscribe(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n      <span class=\"hljs-keyword\">if</span> (result.accept) {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Accepted'</span>);\n      } <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Declined'</span>);\n      }\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/nag.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/nag.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, Injector, Injectable, Inject, forwardRef, HostBinding } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { LayerRef, LayerConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { Overlay } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/cdk/overlay'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> NagLayerData {\n  allowDecline: <span class=\"hljs-built_in\">boolean</span>;\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> NagLayerResult {\n  accept: <span class=\"hljs-built_in\">boolean</span>;\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'nag.component.html'</span>,\n  styles: [<span class=\"hljs-string\">`:host { width: 100%; }`</span>]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> NagComponent {\n  <span class=\"hljs-comment\">// Utilize forwardRef to avoid using NagLayer before it was declared</span>\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-meta\">@Inject</span>(forwardRef(() =&gt; NagLayer)) <span class=\"hljs-keyword\">public</span> layer: NagLayer</span>) { }\n\n  <span class=\"hljs-meta\">@HostBinding</span>(<span class=\"hljs-string\">'class.vclNag'</span>)\n  <span class=\"hljs-meta\">@HostBinding</span>(<span class=\"hljs-string\">'class.vclContainer'</span>)\n  <span class=\"hljs-meta\">@HostBinding</span>(<span class=\"hljs-string\">'class.vclLayoutHorizontal'</span>)\n  <span class=\"hljs-meta\">@HostBinding</span>(<span class=\"hljs-string\">'class.vclLayoutCenterJustified'</span>)\n  _hostClasses = <span class=\"hljs-literal\">true</span>;\n\n  accept() {\n    <span class=\"hljs-keyword\">this</span>.layer.close({\n      accept: <span class=\"hljs-literal\">true</span>\n    });\n  }\n\n  decline() {\n    <span class=\"hljs-keyword\">this</span>.layer.close({\n      accept: <span class=\"hljs-literal\">false</span>\n    });\n  }\n}\n\n<span class=\"hljs-meta\">@Injectable</span>({\n  providedIn: <span class=\"hljs-string\">'root'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> NagLayer <span class=\"hljs-keyword\">extends</span> LayerRef&lt;NagLayerData, NagLayerResult&gt; {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\">injector: Injector, <span class=\"hljs-keyword\">private</span> overlay: Overlay</span>) {\n    <span class=\"hljs-keyword\">super</span>(injector);\n  }\n\n  templateOrComponent = NagComponent;\n\n  getLayerConfig(): LayerConfig {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> LayerConfig({\n      closeOnEscape: <span class=\"hljs-literal\">false</span>,\n      hasBackdrop: <span class=\"hljs-literal\">false</span>,\n      width: <span class=\"hljs-string\">'100%'</span>,\n      positionStrategy: <span class=\"hljs-keyword\">this</span>.overlay.position()\n        .global()\n        .bottom()\n        .centerHorizontally()\n    });\n  }\n\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/layer/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/layer/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-layer\">vcl-layer</h1>\n<p>An overlay placed in the center of the screen.</p>\n<h2 id=\"usage\">Usage</h2>\n<h3 id=\"the-layer-reference-object\">The layer reference object</h3>\n<p>A layer implements the <code>LayerRef</code> interface which allows to listen for events and open/close the layer.<br>It can be created via the <code>vcl-layer</code> component or with the <code>LayerService</code> from a component class:</p>\n<h4 id=\"vcl-layer-1\">vcl-layer</h4>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;myTemplateLayer.open()&quot;</span>&gt;</span>Open Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-layer</span> #<span class=\"hljs-attr\">myTemplateLayer</span>=<span class=\"hljs-string\">&quot;vclLayer&quot;</span> [<span class=\"hljs-attr\">modal</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;vclPanel vclNoMargin&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;vclPanelBody&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;vclPanelContent&quot;</span>&gt;</span>\n        Content\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;myTemplateLayer.close()&quot;</span>&gt;</span>Close Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span></pre>\n<h4 id=\"component-layer\">Component Layer</h4>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { LayerRef } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n<span class=\"hljs-comment\">// This is just a common component</span>\n@Component({ ... })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyLayerComponent</span> </span>{\n\n  <span class=\"hljs-comment\">// layer is a reference to the current layer.</span>\n  <span class=\"hljs-comment\">// Its value is null when the component is not used as a layer</span>\n  <span class=\"hljs-keyword\">constructor</span>(@Optional() private layer: LayerRef) { }\n\n  close() {\n    <span class=\"hljs-comment\">// Close the layer</span>\n    <span class=\"hljs-keyword\">this</span>.layer.close(<span class=\"hljs-string\">&apos;result&apos;</span>);\n  }\n}</pre>\n<h4 id=\"using-the-layers\">Using the Layers</h4>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { LayerService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n<span class=\"hljs-keyword\">import</span> { MyLayerComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;./my-layer.component&apos;</span>;\n\n@Component({ ... })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">DemoComponent</span> </span>{\n  <span class=\"hljs-keyword\">constructor</span>(\n    private layerService: LayerService // This is the reference to the component layer\n  ) {}\n\n  openComponentLayer() {\n    <span class=\"hljs-keyword\">const</span> layer = <span class=\"hljs-keyword\">this</span>.layerService.open(MyLayerComponent).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-built_in\">console</span>.log(result);\n    });\n  }\n}</pre>\n<h3 id=\"api\">API</h3>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">export</span> interface LayerRef {\n  readonly visible: boolean;\n  readonly afterClose: Observable&lt;any | <span class=\"hljs-literal\">undefined</span>&gt;;\n  open(config?: LayerConfig): Observable&lt;any&gt;;\n  close(result?: any): <span class=\"hljs-keyword\">void</span>;\n  destroy(): <span class=\"hljs-keyword\">void</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">LayerService</span> </span>{\n  create(component: any, config?: LayerConfig): Layer;\n  open(component: ComponentType&lt;TComponent&gt;, config?: LayerConfig): Layer;\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">LayerConfig</span>&lt;<span class=\"hljs-title\">TData</span> </span>= any&gt; extends OverlayConfig {\n  data?: TData;\n  closeOnBackdropClick?: boolean;\n  closeOnEscape?: boolean;\n}\n</pre>\n<h4 id=\"vcl-layer-attributes\">vcl-layer attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>closeOnBackdropClick</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Wether a the layer should close when clicked outside</td>\n</tr>\n<tr>\n<td><code>closeOnEscape</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Wether a the layer should close when escape is pressed</td>\n</tr>\n<tr>\n<td><code>position</code></td>\n<td>PositionStrategy</td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-layer-demo-module.js.map