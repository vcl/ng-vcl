(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-zoom-box-demo-module"],{

/***/ "./demo/app/demos/zoom-box/demo.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/zoom-box/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Sample Zoom-Box</h3>\n<div class=\"vclGridRow\">\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box-container #first [x]=\"30\" [y]=\"60\" [width]=\"120\" [height]=\"190\">\n      <img src=\"https://picsum.photos/320/320?image=434\">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box [target]=\"first\"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with a higher resolution image and mouse reset</h3>\n<div class=\"vclGridRow\">\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box-container #second [x]=\"30\" [y]=\"60\" [width]=\"190\" [height]=\"120\" [resetOnOut]=\"true\">\n      <img src=\"https://picsum.photos/320/320?image=434\">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box [target]=\"second\" image=\"https://picsum.photos/640/640?image=434\" [scale]=\"2\"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an initially hidden magnifier</h3>\n<div class=\"vclGridRow\">\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box-container #third [x]=\"30\" [y]=\"60\" [width]=\"190\" [height]=\"120\" [hiding]=\"true\">\n      <img src=\"https://picsum.photos/320/320?image=434\">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box [target]=\"third\" image=\"https://picsum.photos/640/640?image=434\" [scale]=\"2\"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with appearing magnifier</h3>\n<div class=\"vclGridRow\">\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box-container #fourth [x]=\"30\" [y]=\"60\" [width]=\"190\" [height]=\"120\" [hidden]=\"true\" [hiding]=\"true\">\n      <img src=\"https://picsum.photos/320/320?image=434\">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box [target]=\"fourth\" image=\"https://picsum.photos/640/640?image=434\" [scale]=\"2\"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an constantly hidden magnifier</h3>\n<div class=\"vclGridRow\">\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box-container #fifth [x]=\"30\" [y]=\"60\" [width]=\"190\" [height]=\"120\" [invisible]=\"true\">\n      <img src=\"https://picsum.photos/320/320?image=434\">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class=\"vclGridSpan-4\">\n    <vcl-zoom-box [target]=\"fifth\" image=\"https://picsum.photos/640/640?image=434\" [scale]=\"2\"></vcl-zoom-box>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/zoom-box/demo.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/zoom-box/demo.component.ts ***!
  \***************************************************/
/*! exports provided: ZoomBoxDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomBoxDemoComponent", function() { return ZoomBoxDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZoomBoxDemoComponent = /** @class */ (function () {
    function ZoomBoxDemoComponent() {
    }
    ZoomBoxDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/zoom-box/demo.component.html")
        })
    ], ZoomBoxDemoComponent);
    return ZoomBoxDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/zoom-box/demo.module.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/zoom-box/demo.module.ts ***!
  \************************************************/
/*! exports provided: demo, ZoomBoxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomBoxDemoModule", function() { return ZoomBoxDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/zoom-box/demo.component.ts");







function demo() {
    return {
        label: 'Busy',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["ZoomBoxDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/zoom-box/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/zoom-box/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/zoom-box/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/zoom-box/demo.component.ts")
            },
        }
    };
}
var ZoomBoxDemoModule = /** @class */ (function () {
    function ZoomBoxDemoModule() {
    }
    ZoomBoxDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLZoomBoxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ZoomBoxDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ZoomBoxDemoComponent"]]
        })
    ], ZoomBoxDemoModule);
    return ZoomBoxDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/zoom-box/demo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/zoom-box/demo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Sample Zoom-Box<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridRow\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-container</span> #<span class=\"hljs-attr\">first</span> [<span class=\"hljs-attr\">x</span>]=<span class=\"hljs-string\">\"30\"</span> [<span class=\"hljs-attr\">y</span>]=<span class=\"hljs-string\">\"60\"</span> [<span class=\"hljs-attr\">width</span>]=<span class=\"hljs-string\">\"120\"</span> [<span class=\"hljs-attr\">height</span>]=<span class=\"hljs-string\">\"190\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://picsum.photos/320/320?image=434\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"first\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Zoom-Box with a higher resolution image and mouse reset<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridRow\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-container</span> #<span class=\"hljs-attr\">second</span> [<span class=\"hljs-attr\">x</span>]=<span class=\"hljs-string\">\"30\"</span> [<span class=\"hljs-attr\">y</span>]=<span class=\"hljs-string\">\"60\"</span> [<span class=\"hljs-attr\">width</span>]=<span class=\"hljs-string\">\"190\"</span> [<span class=\"hljs-attr\">height</span>]=<span class=\"hljs-string\">\"120\"</span> [<span class=\"hljs-attr\">resetOnOut</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://picsum.photos/320/320?image=434\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"second\"</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/640/640?image=434\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Zoom-Box with an initially hidden magnifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridRow\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-container</span> #<span class=\"hljs-attr\">third</span> [<span class=\"hljs-attr\">x</span>]=<span class=\"hljs-string\">\"30\"</span> [<span class=\"hljs-attr\">y</span>]=<span class=\"hljs-string\">\"60\"</span> [<span class=\"hljs-attr\">width</span>]=<span class=\"hljs-string\">\"190\"</span> [<span class=\"hljs-attr\">height</span>]=<span class=\"hljs-string\">\"120\"</span> [<span class=\"hljs-attr\">hiding</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://picsum.photos/320/320?image=434\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"third\"</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/640/640?image=434\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Zoom-Box with appearing magnifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridRow\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-container</span> #<span class=\"hljs-attr\">fourth</span> [<span class=\"hljs-attr\">x</span>]=<span class=\"hljs-string\">\"30\"</span> [<span class=\"hljs-attr\">y</span>]=<span class=\"hljs-string\">\"60\"</span> [<span class=\"hljs-attr\">width</span>]=<span class=\"hljs-string\">\"190\"</span> [<span class=\"hljs-attr\">height</span>]=<span class=\"hljs-string\">\"120\"</span> [<span class=\"hljs-attr\">hidden</span>]=<span class=\"hljs-string\">\"true\"</span> [<span class=\"hljs-attr\">hiding</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://picsum.photos/320/320?image=434\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"fourth\"</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/640/640?image=434\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Zoom-Box with an constantly hidden magnifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridRow\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-container</span> #<span class=\"hljs-attr\">fifth</span> [<span class=\"hljs-attr\">x</span>]=<span class=\"hljs-string\">\"30\"</span> [<span class=\"hljs-attr\">y</span>]=<span class=\"hljs-string\">\"60\"</span> [<span class=\"hljs-attr\">width</span>]=<span class=\"hljs-string\">\"190\"</span> [<span class=\"hljs-attr\">height</span>]=<span class=\"hljs-string\">\"120\"</span> [<span class=\"hljs-attr\">invisible</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://picsum.photos/320/320?image=434\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"fifth\"</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/640/640?image=434\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/zoom-box/demo.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/zoom-box/demo.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ZoomBoxDemoComponent {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/zoom-box/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/zoom-box/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-zoom-box\">vcl-zoom-box</h1>\n<p>Zoom into areas of images.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-container</span> #<span class=\"hljs-attr\">first</span> [<span class=\"hljs-attr\">x</span>]=<span class=\"hljs-string\">&quot;30&quot;</span> [<span class=\"hljs-attr\">y</span>]=<span class=\"hljs-string\">&quot;60&quot;</span> [<span class=\"hljs-attr\">width</span>]=<span class=\"hljs-string\">&quot;120&quot;</span> [<span class=\"hljs-attr\">height</span>]=<span class=\"hljs-string\">&quot;190&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/320/320?image=434&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-magnifier</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box-container</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-zoom-box</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">&quot;first&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-zoom-box</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"zoom-box-container-attributes\">Zoom-Box Container Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>x</code></td>\n<td>number</td>\n<td>0</td>\n<td>Left offset (optional)</td>\n</tr>\n<tr>\n<td><code>y</code></td>\n<td>number</td>\n<td>0</td>\n<td>Top offset (optional)</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number</td>\n<td></td>\n<td>Width of zoomed box</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number</td>\n<td></td>\n<td>Height of zoomed box</td>\n</tr>\n<tr>\n<td><code>resetOnOut</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Reset position to initial on mouse out</td>\n</tr>\n</tbody></table>\n<h3 id=\"zoom-box-attributes\">Zoom-Box Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>image</code></td>\n<td>string</td>\n<td>&quot;&quot;</td>\n<td>High resolution image (optional)</td>\n</tr>\n<tr>\n<td><code>highResScale</code></td>\n<td>number</td>\n<td>1</td>\n<td>High resolution image scale multiplier (required if image is defined)</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-zoom-box-demo-module.js.map