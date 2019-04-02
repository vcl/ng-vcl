(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-badge-demo-module"],{

/***/ "./demo/app/demos/badge/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/badge/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Default badge</h3>\n<vcl-badge>default</vcl-badge>\n\n<h3>Primary badge</h3>\n<vcl-badge type=\"primary\">primary</vcl-badge>\n\n<h3>Success badge</h3>\n<vcl-badge type=\"success\">success</vcl-badge>\n\n<h3>Info badge</h3>\n<vcl-badge type=\"info\">info</vcl-badge>\n\n<h3>Warning badge</h3>\n<vcl-badge type=\"warning\">warning</vcl-badge>\n\n<h3>Error badge</h3>\n<vcl-badge type=\"error\">error</vcl-badge>\n"

/***/ }),

/***/ "./demo/app/demos/badge/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/badge/demo.component.ts ***!
  \************************************************/
/*! exports provided: BadgeDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDemoComponent", function() { return BadgeDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeDemoComponent = /** @class */ (function () {
    function BadgeDemoComponent() {
    }
    BadgeDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/badge/demo.component.html")
        })
    ], BadgeDemoComponent);
    return BadgeDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/badge/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/badge/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, BadgeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDemoModule", function() { return BadgeDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/badge/demo.component.ts");







function demo() {
    return {
        label: 'Badge',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["BadgeDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/badge/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/badge/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/badge/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/badge/demo.component.ts")
            }
        }
    };
}
var BadgeDemoModule = /** @class */ (function () {
    function BadgeDemoModule() {
    }
    BadgeDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLBadgeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["BadgeDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["BadgeDemoComponent"]]
        })
    ], BadgeDemoModule);
    return BadgeDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/badge/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/badge/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Default badge<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Primary badge<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Success badge<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"success\"</span>&gt;</span>success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Info badge<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"info\"</span>&gt;</span>info<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Warning badge<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Error badge<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"error\"</span>&gt;</span>error<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/badge/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/badge/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> BadgeDemoComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/badge/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/badge/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-badge\">vcl-badge</h1>\n<p>A visually highlighted tag to attribute items.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLBadgeModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLBadgeModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;primary&quot;</span>&gt;</span>primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;success&quot;</span>&gt;</span>success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;info&quot;</span>&gt;</span>info<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;warning&quot;</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-badge</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;error&quot;</span>&gt;</span>error<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-badge</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-badge-attributes\">vcl-badge attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>type</code></td>\n<td>string</td>\n<td></td>\n<td>the badge&apos;s type</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-badge-demo-module.js.map