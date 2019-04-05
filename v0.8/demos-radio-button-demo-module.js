(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-radio-button-demo-module"],{

/***/ "./demo/app/demos/radio-button/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/radio-button/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic</h3>\n<vcl-radio-button [(checked)]=\"isChecked\" (checkedChange)=\"onChange($event)\"></vcl-radio-button> Check!\n\n<br>\n<h3>Disabled</h3>\n<vcl-radio-button [disabled]=\"true\"></vcl-radio-button> Check!\n\n<h3>With Form Control Label</h3>\n<label vcl-form-control-label>\n  <vcl-radio-button></vcl-radio-button>\n  <vcl-icogram appIcon=\"fas:check\">Check!</vcl-icogram>\n</label>\n\n<h3>Radio group</h3>\n\n<vcl-radio-group [(ngModel)]=\"rgValue1\">\n  <vcl-radio-button value=\"red\"></vcl-radio-button> Red\n  <vcl-radio-button value=\"green\"></vcl-radio-button> Green\n</vcl-radio-group>\n<p></p>\n<p>Current value: {{rgValue1}}</p>\n\n<h3>Radio group with Form Control Label</h3>\n<vcl-radio-group class=\"vclInputControlGroup\" [(ngModel)]=\"rgValue2\">\n  <label vcl-form-control-label>\n    <vcl-radio-button value=\"m\"></vcl-radio-button>\n    <vcl-icogram appIcon=\"fas:mars\">Male</vcl-icogram>\n  </label>\n  <label vcl-form-control-label>\n    <vcl-radio-button value=\"f\"></vcl-radio-button>\n    <vcl-icogram appIcon=\"fas:venus\">Female</vcl-icogram>\n  </label>\n  <label vcl-form-control-label>\n    <vcl-radio-button value=\"g\"></vcl-radio-button>\n    <vcl-icogram appIcon=\"fas:genderless\">Genderless</vcl-icogram>\n  </label>\n</vcl-radio-group>\n<p>Current value: {{rgValue2}}</p>\n\n<h3>Inline Radio group with Form Control Label</h3>\n<vcl-radio-group class=\"vclInputInlineControlGroup\" [(ngModel)]=\"rgValue3\">\n  <label vcl-form-control-label>\n    <vcl-radio-button value=\"m\"></vcl-radio-button>\n    <vcl-icogram appIcon=\"fas:mars\">Male</vcl-icogram>\n  </label>\n  <label vcl-form-control-label>\n    <vcl-radio-button value=\"f\"></vcl-radio-button>\n    <vcl-icogram appIcon=\"fas:venus\">Female</vcl-icogram>\n  </label>\n  <label vcl-form-control-label>\n    <vcl-radio-button value=\"g\"></vcl-radio-button>\n    <vcl-icogram appIcon=\"fas:genderless\">Genderless</vcl-icogram>\n  </label>\n</vcl-radio-group>\n<p>Current value: {{rgValue3}}</p>\n  "

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
        this.rgValue1 = 'red';
        this.rgValue2 = 'f';
        this.rgValue3 = 'g';
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
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFormControlLabelModule"],
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

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Basic<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked\"</span> (<span class=\"hljs-attr\">checkedChange</span>)=<span class=\"hljs-string\">\"onChange($event)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> Check!\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> Check!\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With Form Control Label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:check\"</span>&gt;</span>Check!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Radio group<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"rgValue1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> Red\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> Green\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Current value: {{rgValue1}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Radio group with Form Control Label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclInputControlGroup\"</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"rgValue2\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"m\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:mars\"</span>&gt;</span>Male<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"f\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:venus\"</span>&gt;</span>Female<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"g\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:genderless\"</span>&gt;</span>Genderless<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Current value: {{rgValue2}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Inline Radio group with Form Control Label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclInputInlineControlGroup\"</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"rgValue3\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"m\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:mars\"</span>&gt;</span>Male<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"f\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:venus\"</span>&gt;</span>Female<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"g\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:genderless\"</span>&gt;</span>Genderless<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Current value: {{rgValue3}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  "

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/radio-button/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/radio-button/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> RadioButtonDemoComponent {\n\n  isChecked = <span class=\"hljs-literal\">false</span>;\n\n  rgValue1 = <span class=\"hljs-string\">'red'</span>;\n  rgValue2 = <span class=\"hljs-string\">'f'</span>;\n  rgValue3 = <span class=\"hljs-string\">'g'</span>;\n\n  onChange(value) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'radio-button onChange fired'</span>);\n    <span class=\"hljs-built_in\">console</span>.dir(value);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/radio-button/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/radio-button/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-radio-button\">vcl-radio-button</h1>\n<p>A radio button utilizing <code>vcl-icon</code></p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;vcl-radio-button [(checked)]=&quot;checked&quot;&gt;&lt;/vcl-radio-button&gt; Label</code></pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">&quot;value&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;red&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> Red\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;green&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span> Green\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-radio-button-attributes\">vcl-radio-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code>*</td>\n<td>boolean</td>\n<td>false</td>\n<td>2-Way-Binding. State of radio button</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Value of the radio button</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the radio button</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-radio-group-attributes\">vcl-radio-group attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>any</td>\n<td></td>\n<td>Value of the checked radio button</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n"

/***/ })

}]);
//# sourceMappingURL=demos-radio-button-demo-module.js.map