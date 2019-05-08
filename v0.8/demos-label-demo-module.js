(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-label-demo-module"],{

/***/ "./demo/app/demos/label/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/label/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Default label</h3>\n<vcl-label type>default</vcl-label>\n\n<h3>Primary label</h3>\n<vcl-label type=\"primary\">primary</vcl-label>\n\n<h3>Success label</h3>\n<vcl-label type=\"success\">success</vcl-label>\n\n<h3>Info label</h3>\n<vcl-label type=\"info\">info</vcl-label>\n\n<h3>Warning label</h3>\n<vcl-label type=\"warning\">warning</vcl-label>\n\n<h3>Error label</h3>\n<vcl-label type=\"error\">error</vcl-label>\n"

/***/ }),

/***/ "./demo/app/demos/label/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/label/demo.component.ts ***!
  \************************************************/
/*! exports provided: LabelDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDemoComponent", function() { return LabelDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelDemoComponent = /** @class */ (function () {
    function LabelDemoComponent() {
    }
    LabelDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/label/demo.component.html")
        })
    ], LabelDemoComponent);
    return LabelDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/label/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/label/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, LabelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDemoModule", function() { return LabelDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/label/demo.component.ts");







function demo() {
    return {
        label: 'Label',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["LabelDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/label/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/label/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/label/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/label/demo.component.ts")
            }
        }
    };
}
var LabelDemoModule = /** @class */ (function () {
    function LabelDemoModule() {
    }
    LabelDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLLabelModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["LabelDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["LabelDemoComponent"]]
        })
    ], LabelDemoModule);
    return LabelDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/label/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/label/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Default label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Primary label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Success label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"success\"</span>&gt;</span>success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Info label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"info\"</span>&gt;</span>info<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Warning label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Error label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"error\"</span>&gt;</span>error<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/label/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/label/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> LabelDemoComponent { }\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/label/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/label/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-label\">vcl-label</h1>\n<p>A visually highlighted tag to attribute items.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLLabelModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLLabelModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;primary&quot;</span>&gt;</span>primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;success&quot;</span>&gt;</span>success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;info&quot;</span>&gt;</span>info<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;warning&quot;</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-label</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;error&quot;</span>&gt;</span>error<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-label</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-label-attributes\">vcl-label attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>type</code></td>\n<td>string</td>\n<td></td>\n<td>the label&apos;s type</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-label-demo-module.js.map