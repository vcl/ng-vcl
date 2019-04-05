(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-form-control-label-demo-module"],{

/***/ "./demo/app/demos/form-control-label/demo.component.html":
/*!***************************************************************!*\
  !*** ./demo/app/demos/form-control-label/demo.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Stacked label</h3>\n<label vcl-form-control-label [target]=\"input1\">Label</label>\n<input #input1=\"vclInput\" vclInput> \n\n<h3>Wrapping label</h3>\n<label vcl-form-control-label>\n  Label\n  <input vclInput>\n</label>\n\n<!-- \n<label vcl-form-control-label label=\"Label 1\" subLabel=\"Sub label 1\" for=\"form-control-label-demo-1\"></label>\n<input id=\"form-control-label-demo-1\" class=\"vclInput\" type=\"text\">\n\n\n<h3>Disabled label</h3>\n<label vcl-form-control-label label=\"Label 3 (disabled)\" disabled=true>\n  <input class=\"vclInput vclDisabled\" disabled=\"disabled\" type=\"text\">\n</label>\n\n<h3>Required label</h3>\n<label vcl-form-control-label label=\"Label 4 (required)\" required=true>\n  <input class=\"vclInput\" type=\"text\">\n</label> -->\n\n<!-- \n<label vcl-form-control-label [target]=\"input1\">Label</label>\n<input #input1=\"vclInput\" vclInput class=\"vclInput\" type=\"text\">  -->\n"

/***/ }),

/***/ "./demo/app/demos/form-control-label/demo.component.ts":
/*!*************************************************************!*\
  !*** ./demo/app/demos/form-control-label/demo.component.ts ***!
  \*************************************************************/
/*! exports provided: FormControlLabelDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlLabelDemoComponent", function() { return FormControlLabelDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormControlLabelDemoComponent = /** @class */ (function () {
    function FormControlLabelDemoComponent() {
    }
    FormControlLabelDemoComponent.prototype.onButtonClick = function () {
        console.log('onButtonTap');
    };
    FormControlLabelDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/form-control-label/demo.component.html")
        })
    ], FormControlLabelDemoComponent);
    return FormControlLabelDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/form-control-label/demo.module.ts":
/*!**********************************************************!*\
  !*** ./demo/app/demos/form-control-label/demo.module.ts ***!
  \**********************************************************/
/*! exports provided: demo, FormControlLabelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlLabelDemoModule", function() { return FormControlLabelDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/form-control-label/demo.component.ts");








function demo() {
    return {
        name: 'Form Control Label',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["FormControlLabelDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/form-control-label/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/form-control-label/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/form-control-label/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/form-control-label/demo.component.ts")
            }
        }
    };
}
var FormControlLabelDemoModule = /** @class */ (function () {
    function FormControlLabelDemoModule() {
    }
    FormControlLabelDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFormControlLabelModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLInputModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FormControlLabelDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FormControlLabelDemoComponent"]]
        })
    ], FormControlLabelDemoModule);
    return FormControlLabelDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/form-control-label/demo.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/form-control-label/demo.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Stacked label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"input1\"</span>&gt;</span>Label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> #<span class=\"hljs-attr\">input1</span>=<span class=\"hljs-string\">\"vclInput\"</span> <span class=\"hljs-attr\">vclInput</span>&gt;</span> \n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Wrapping label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n  Label\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- \n&lt;label vcl-form-control-label label=\"Label 1\" subLabel=\"Sub label 1\" for=\"form-control-label-demo-1\"&gt;&lt;/label&gt;\n&lt;input id=\"form-control-label-demo-1\" class=\"vclInput\" type=\"text\"&gt;\n\n\n&lt;h3&gt;Disabled label&lt;/h3&gt;\n&lt;label vcl-form-control-label label=\"Label 3 (disabled)\" disabled=true&gt;\n  &lt;input class=\"vclInput vclDisabled\" disabled=\"disabled\" type=\"text\"&gt;\n&lt;/label&gt;\n\n&lt;h3&gt;Required label&lt;/h3&gt;\n&lt;label vcl-form-control-label label=\"Label 4 (required)\" required=true&gt;\n  &lt;input class=\"vclInput\" type=\"text\"&gt;\n&lt;/label&gt; --&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- \n&lt;label vcl-form-control-label [target]=\"input1\"&gt;Label&lt;/label&gt;\n&lt;input #input1=\"vclInput\" vclInput class=\"vclInput\" type=\"text\"&gt;  --&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/form-control-label/demo.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/form-control-label/demo.component.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FormControlLabelDemoComponent {\n  onButtonClick() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onButtonTap'</span>);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/form-control-label/README.md":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/form-control-label/README.md ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-form-control-label\">vcl-form-control-label</h1>\n<p>Label to describe form controls.</p>\n<h2 id=\"usage\">Usage</h2>\n<p>Non-wrapping label</p>\n<pre class=\"hljs\"><code>&lt;label vcl-form-control-label label=&quot;Label text&quot; subLabel=&quot;Sub label text&quot; for=&quot;...&quot;&gt;&lt;/label&gt;</code></pre>\n<p>Wrapping label</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Label text&quot;</span> <span class=\"hljs-attr\">subLabel</span>=<span class=\"hljs-string\">&quot;Sub label text&quot;</span>&gt;</span>\n  ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The label</td>\n</tr>\n<tr>\n<td><code>subLabel</code></td>\n<td>string</td>\n<td></td>\n<td>The sublabel</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Whether the label is disabled or not</td>\n</tr>\n<tr>\n<td><code>required</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Shows the required indicator when true</td>\n</tr>\n<tr>\n<td><code>requiredIndicatorCharacter</code></td>\n<td>string</td>\n<td>&#x2022;</td>\n<td>The required indicator character</td>\n</tr>\n<tr>\n<td><code>requiredIndLabel</code></td>\n<td>string</td>\n<td></td>\n<td>Accessible label for the required indicator</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-form-control-label-demo-module.js.map