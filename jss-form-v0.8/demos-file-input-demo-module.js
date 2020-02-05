(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-file-input-demo-module"],{

/***/ "./demo/app/demos/file-input/demo.component.html":
/*!*******************************************************!*\
  !*** ./demo/app/demos/file-input/demo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>File Input</h3>\n<vcl-file-input>My File</vcl-file-input>\n\n\n<h3>File Input (Disabled)</h3>\n<vcl-file-input [disabled]=\"true\">My File</vcl-file-input>\n\n<h3>File Input (multiple)</h3>\n<vcl-file-input [multiple]=\"true\">Many Files</vcl-file-input>\n\n<h3>File Input (.png only)</h3>\n<vcl-file-input accept=\"image/png\">An Image</vcl-file-input>\n"

/***/ }),

/***/ "./demo/app/demos/file-input/demo.component.ts":
/*!*****************************************************!*\
  !*** ./demo/app/demos/file-input/demo.component.ts ***!
  \*****************************************************/
/*! exports provided: FileInputDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputDemoComponent", function() { return FileInputDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileInputDemoComponent = /** @class */ (function () {
    function FileInputDemoComponent() {
    }
    FileInputDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/file-input/demo.component.html")
        })
    ], FileInputDemoComponent);
    return FileInputDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/file-input/demo.module.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/file-input/demo.module.ts ***!
  \**************************************************/
/*! exports provided: demo, FileInputDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputDemoModule", function() { return FileInputDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/file-input/demo.component.ts");








function demo() {
    return {
        label: 'File Input',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["FileInputDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/file-input/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/file-input/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/file-input/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/file-input/demo.component.ts")
            }
        }
    };
}
var FileInputDemoModule = /** @class */ (function () {
    function FileInputDemoModule() {
    }
    FileInputDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFileInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FileInputDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FileInputDemoComponent"]]
        })
    ], FileInputDemoModule);
    return FileInputDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/file-input/demo.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/file-input/demo.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>File Input<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-file-input</span>&gt;</span>My File<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-file-input</span>&gt;</span>\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>File Input (Disabled)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-file-input</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>My File<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-file-input</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>File Input (multiple)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-file-input</span> [<span class=\"hljs-attr\">multiple</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>Many Files<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-file-input</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>File Input (.png only)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-file-input</span> <span class=\"hljs-attr\">accept</span>=<span class=\"hljs-string\">\"image/png\"</span>&gt;</span>An Image<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-file-input</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/file-input/demo.component.ts":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/file-input/demo.component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FileInputDemoComponent { }\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/file-input/README.md":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/file-input/README.md ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-file-input\">vcl-file-input</h1>\n<p>Enhanced file input</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;vcl-file-input [multiple]=&quot;true&quot; [accept]=&quot;accept&quot; [disabled]=&quot;disabled&quot;&gt;My Files&lt;/vcl-file-input&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>accept</code></td>\n<td>string</td>\n<td></td>\n<td>like html5 file-input</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>multiple</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, more than 1 file can be selected</td>\n</tr>\n</tbody></table>\n<h4 id=\"events\">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when files have changed</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-file-input-demo-module.js.map