(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-radio-button-demo-module"],{

/***/ "./demo/app/demos/radio-button/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/radio-button/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Checkable</h3>\n<vcl-radio-button [(checked)]=\"isChecked\" (checkedChange)=\"onChange($event)\"></vcl-radio-button> <a (tap)=\"isChecked=false\">Uncheck</a>\n\n<br>\n<h3>Disabled</h3>\n<vcl-radio-button [disabled]=\"true\"></vcl-radio-button>\n\n<br>\n<h3>With label</h3>\n\n<vcl-radio-button [(checked)]=\"isChecked2\" label=\"\">label after</vcl-radio-button>\n<vcl-radio-button [(checked)]=\"isChecked3\" label=\"\" labelPosition=\"before\">label before</vcl-radio-button>\n\n<br>\n<h3>With custom content</h3>\n\n<vcl-radio-button [(checked)]=\"isChecked4\">\n  <vcl-icogram appIcon=\"fas:check\">Yes</vcl-icogram>\n</vcl-radio-button>\n\n\n<h3>Radio Group using index as value</h3>\n\n<vcl-radio-group [(ngModel)]=\"rgValue1\">\n  <vcl-radio-button>Value 1</vcl-radio-button>\n  <vcl-radio-button>Value 2</vcl-radio-button>\n</vcl-radio-group>\n<br>\nState: {{rgValue1}}\n\n<h3>Radio Group using custom values</h3>\n\n<vcl-radio-group [(ngModel)]=\"rgValue2\">\n  <vcl-radio-button [value]=\"'f'\">\n    <vcl-icogram appIcon=\"fas:venus\">Female</vcl-icogram>\n  </vcl-radio-button>\n  <vcl-radio-button [value]=\"'m'\">\n    <vcl-icogram appIcon=\"fas:mars\">Male</vcl-icogram>\n  </vcl-radio-button>\n</vcl-radio-group>\n<br>\nState: {{rgValue2}}\n\n<h3>Vertical Radio Group</h3>\n\n<vcl-radio-group [(ngModel)]=\"rgValue3\" [layout]=\"'vertical'\">\n  <vcl-radio-button>Value 1</vcl-radio-button>\n  <vcl-radio-button>Value 2</vcl-radio-button>\n</vcl-radio-group>\n<br>\nState: {{rgValue3}}\n"

/***/ }),

/***/ "./demo/app/demos/radio-button/demo.component.ts":
/*!*******************************************************!*\
  !*** ./demo/app/demos/radio-button/demo.component.ts ***!
  \*******************************************************/
/*! exports provided: RadioButtonDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonDemoComponent", function() { return RadioButtonDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioButtonDemoComponent = /** @class */ (function () {
    function RadioButtonDemoComponent() {
        this.isChecked = false;
        this.isChecked2 = false;
        this.isChecked3 = false;
        this.isChecked4 = false;
        this.rgValue1 = 1;
        this.rgValue2 = 'f';
        this.rgValue3 = 0;
    }
    RadioButtonDemoComponent.prototype.onChange = function (value) {
        console.log('radio-button onChange fired');
        console.dir(value);
    };
    RadioButtonDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/radio-button/demo.component.html")
        })
    ], RadioButtonDemoComponent);
    return RadioButtonDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/radio-button/demo.module.ts":
/*!****************************************************!*\
  !*** ./demo/app/demos/radio-button/demo.module.ts ***!
  \****************************************************/
/*! exports provided: demo, RadioButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonDemoModule", function() { return RadioButtonDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/radio-button/demo.component.ts");








function demo() {
    return {
        label: 'Radio Button',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/radio-button/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/radio-button/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/radio-button/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/radio-button/demo.component.ts")
            }
        }
    };
}
var RadioButtonDemoModule = /** @class */ (function () {
    function RadioButtonDemoModule() {
    }
    RadioButtonDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLRadioButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLIcogramModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonDemoComponent"]]
        })
    ], RadioButtonDemoModule);
    return RadioButtonDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/radio-button/demo.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/radio-button/demo.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Checkable<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked\"</span> (<span class=\"hljs-attr\">checkedChange</span>)=<span class=\"hljs-string\">\"onChange($event)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> (<span class=\"hljs-attr\">tap</span>)=<span class=\"hljs-string\">\"isChecked=false\"</span>&gt;</span>Uncheck<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked2\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>label after<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked3\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"\"</span> <span class=\"hljs-attr\">labelPosition</span>=<span class=\"hljs-string\">\"before\"</span>&gt;</span>label before<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With custom content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked4\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:check\"</span>&gt;</span>Yes<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Radio Group using index as value<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"rgValue1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>Value 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>Value 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\nState: {{rgValue1}}\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Radio Group using custom values<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"rgValue2\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'f'\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:venus\"</span>&gt;</span>Female<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'m'\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:mars\"</span>&gt;</span>Male<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\nState: {{rgValue2}}\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Vertical Radio Group<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"rgValue3\"</span> [<span class=\"hljs-attr\">layout</span>]=<span class=\"hljs-string\">\"'vertical'\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>Value 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>Value 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\nState: {{rgValue3}}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/radio-button/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/radio-button/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> RadioButtonDemoComponent {\n\n  isChecked = <span class=\"hljs-literal\">false</span>;\n  isChecked2 = <span class=\"hljs-literal\">false</span>;\n  isChecked3 = <span class=\"hljs-literal\">false</span>;\n  isChecked4 = <span class=\"hljs-literal\">false</span>;\n\n  rgValue1 = <span class=\"hljs-number\">1</span>;\n  rgValue2 = <span class=\"hljs-string\">'f'</span>;\n  rgValue3 = <span class=\"hljs-number\">0</span>;\n\n  onChange(value) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'radio-button onChange fired'</span>);\n    <span class=\"hljs-built_in\">console</span>.dir(value);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/radio-button/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/radio-button/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-radio-button\">vcl-radio-button</h1>\n<p>A radio button utilizing <code>vcl-icon</code></p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;vcl-radio-button [(checked)]=&quot;checked&quot;&gt;Label&lt;/vcl-radio-button&gt;</code></pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">&quot;value&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Red&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;red&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Green&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;green&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-radio-button-attributes\">vcl-radio-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code>*</td>\n<td>boolean</td>\n<td>false</td>\n<td>2-Way-Binding. State of radio button</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>A label</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Value of the radio button</td>\n</tr>\n<tr>\n<td><code>checkedIcon</code></td>\n<td>string</td>\n<td>fa:chWeck-square-o</td>\n<td>Icon to be displayed when checked</td>\n</tr>\n<tr>\n<td><code>uncheckedIcon</code></td>\n<td>string</td>\n<td>fa:square-o</td>\n<td>Icon to be displayed when unchecked</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the radio button</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-radio-group-attributes\">vcl-radio-group attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>any</td>\n<td></td>\n<td>Value of the checked radio button</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>&apos;horizontal | &apos;vertical&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td></td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-radio-group-events\">vcl-radio-group events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>change</code></td>\n<td>any</td>\n<td>Triggers when selected radio button changes</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n"

/***/ })

}]);
//# sourceMappingURL=demos-radio-button-demo-module.js.map