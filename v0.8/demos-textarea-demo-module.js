(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-textarea-demo-module"],{

/***/ "./demo/app/demos/textarea/demo.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/textarea/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Default</h3>\n<textarea vclInput [(ngModel)]=\"data1\" rows=\"3\"></textarea>\n\n\n<h3>Textarea with autogrow (minRows=5, maxRows=10)</h3>\n<textarea vclInput [(ngModel)]=\"data2\" [autogrow]=\"true\" [minRows]=\"5\" [maxRows]=\"10\"></textarea>\n"

/***/ }),

/***/ "./demo/app/demos/textarea/demo.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/textarea/demo.component.ts ***!
  \***************************************************/
/*! exports provided: TextareaDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaDemoComponent", function() { return TextareaDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextareaDemoComponent = /** @class */ (function () {
    function TextareaDemoComponent() {
        this.data1 = "line 1\nline 2\nline 3\nline 4\nline 5\nline 6";
        this.data2 = "line 1\nline 2\nline 3\nline 4\nline 5\nline 6";
        this.data3 = "line 1\nline 2\nline 3\nline 4\nline 5\nline 6";
    }
    TextareaDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/textarea/demo.component.html")
        })
    ], TextareaDemoComponent);
    return TextareaDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/textarea/demo.module.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/textarea/demo.module.ts ***!
  \************************************************/
/*! exports provided: demo, TextareaDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaDemoModule", function() { return TextareaDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/textarea/demo.component.ts");








function demo() {
    return {
        label: 'Textarea',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["TextareaDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/textarea/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/textarea/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/textarea/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/textarea/demo.component.ts")
            }
        }
    };
}
var TextareaDemoModule = /** @class */ (function () {
    function TextareaDemoModule() {
    }
    TextareaDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLTextareaModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["TextareaDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["TextareaDemoComponent"]]
        })
    ], TextareaDemoModule);
    return TextareaDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/textarea/demo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/textarea/demo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">vclInput</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"data1\"</span> <span class=\"hljs-attr\">rows</span>=<span class=\"hljs-string\">\"3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Textarea with autogrow (minRows=5, maxRows=10)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">vclInput</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"data2\"</span> [<span class=\"hljs-attr\">autogrow</span>]=<span class=\"hljs-string\">\"true\"</span> [<span class=\"hljs-attr\">minRows</span>]=<span class=\"hljs-string\">\"5\"</span> [<span class=\"hljs-attr\">maxRows</span>]=<span class=\"hljs-string\">\"10\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/textarea/demo.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/textarea/demo.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> TextareaDemoComponent {\n\n  data1 =\n  <span class=\"hljs-string\">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n  data2 =\n  <span class=\"hljs-string\">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n\n  data3 =\n  <span class=\"hljs-string\">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/textarea/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/textarea/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-textarea\">vcl-textarea</h1>\n<p>Enhanced textarea</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;textarea vclInput [(ngModel)]=&quot;data1&quot; [autogrow]=&quot;true&quot; [minRows]=&quot;5&quot; [maxRows]=&quot;10&quot;&gt;&lt;/textarea&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-textarea-demo-module.js.map