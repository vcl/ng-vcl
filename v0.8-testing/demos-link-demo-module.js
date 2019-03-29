(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-link-demo-module"],{

/***/ "./demo/app/demos/link/demo.component.html":
/*!*************************************************!*\
  !*** ./demo/app/demos/link/demo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Label with an appended icon</h3>\n<a vcl-content-link\n  href=\"'https://github.com/ng-vcl/ng-vcl'\"\n  [appIcon]=\"'fas:external-link-alt'\"\n  target=\"'_blank'\">Example external Link</a>\n<br><br>\n\n<h3>Disabled link</h3>\n<a vcl-link\n  [href]=\"'this is not considered when the link is disabled'\"\n  [disabled]=\"true\">Disabled link</a>\n<br><br>\n"

/***/ }),

/***/ "./demo/app/demos/link/demo.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/link/demo.component.ts ***!
  \***********************************************/
/*! exports provided: LinkDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDemoComponent", function() { return LinkDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinkDemoComponent = /** @class */ (function () {
    function LinkDemoComponent() {
    }
    LinkDemoComponent.prototype.someAction = function (param) {
        console.log('Action handler, param:', param);
    };
    LinkDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/link/demo.component.html")
        })
    ], LinkDemoComponent);
    return LinkDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/link/demo.module.ts":
/*!********************************************!*\
  !*** ./demo/app/demos/link/demo.module.ts ***!
  \********************************************/
/*! exports provided: demo, LinkDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDemoModule", function() { return LinkDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/link/demo.component.ts");







function demo() {
    return {
        label: 'Link',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["LinkDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/link/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/link/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/link/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/link/demo.component.ts")
            }
        }
    };
}
var LinkDemoModule = /** @class */ (function () {
    function LinkDemoModule() {
    }
    LinkDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLLinkModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["LinkDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["LinkDemoComponent"]]
        })
    ], LinkDemoModule);
    return LinkDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/link/demo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/link/demo.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Label with an appended icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">vcl-content-link</span>\n  <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"'https://github.com/ng-vcl/ng-vcl'\"</span>\n  [<span class=\"hljs-attr\">appIcon</span>]=<span class=\"hljs-string\">\"'fas:external-link-alt'\"</span>\n  <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"'_blank'\"</span>&gt;</span>Example external Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Disabled link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">vcl-link</span>\n  [<span class=\"hljs-attr\">href</span>]=<span class=\"hljs-string\">\"'this is not considered when the link is disabled'\"</span>\n  [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>Disabled link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/link/demo.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/link/demo.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> LinkDemoComponent {\n  someAction(param) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Action handler, param:'</span>, param);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/link/README.md":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/link/README.md ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-link\">vcl-link</h1>\n<p>The anchor tag with VCL and Angular awareness.<br>Uses vcl-icogram to display a combination of text and icons if <code>appIcon</code> or <code>appIcon</code> is provided.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;a vcl-link href=&quot;http://www.example.com&quot; prepIcon=&quot;fas:chevron-right&quot;&gt;Example Link&lt;/a&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>href</code></td>\n<td>string</td>\n<td></td>\n<td><code>href</code> attribute</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be appended to the label</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>disabled if <code>true</code></td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-link-demo-module.js.map