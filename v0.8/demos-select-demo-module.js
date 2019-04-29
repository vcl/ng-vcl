(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-select-demo-module"],{

/***/ "./demo/app/demos/select/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/demos/select/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>single-select</h3>\n<vcl-select [(value)]=\"value1\">\n  <vcl-dropdown #dropdownCountries=\"vclDropdown\">\n    <vcl-dropdown-item label=\" - \">\n      <vcl-dropdown-label>None</vcl-dropdown-label>\n    </vcl-dropdown-item>\n    <vcl-dropdown-header>Europe</vcl-dropdown-header>\n    <vcl-dropdown-item value=\"gr\">\n      <vcl-dropdown-label>Greece</vcl-dropdown-label>\n      <vcl-dropdown-sublabel>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-dropdown-sublabel>\n    </vcl-dropdown-item>\n    <vcl-dropdown-item value=\"fr\">\n      <vcl-dropdown-label>France</vcl-dropdown-label>\n    </vcl-dropdown-item>\n    <vcl-dropdown-item value=\"de\">\n      <vcl-dropdown-label>Germany</vcl-dropdown-label>\n    </vcl-dropdown-item>\n    <vcl-dropdown-item value=\"uk\" label=\"United Kingdom\">\n      <vcl-dropdown-label>The United Kingdom of Great Britain and Northern Ireland</vcl-dropdown-label>\n    </vcl-dropdown-item>\n    <vcl-dropdown-header>Asia</vcl-dropdown-header>\n    <vcl-dropdown-item value=\"jp\">\n      <vcl-dropdown-label>Japan</vcl-dropdown-label>\n    </vcl-dropdown-item>\n    <vcl-dropdown-item value=\"cn\">\n      <vcl-dropdown-label>China</vcl-dropdown-label>\n    </vcl-dropdown-item>\n    <vcl-dropdown-item value=\"th\">\n      <vcl-dropdown-label>Thailand</vcl-dropdown-label>\n    </vcl-dropdown-item>\n  </vcl-dropdown>\n</vcl-select>\n\n<p> Selected value: {{value1}}</p>\n\n<br>\n\n<h3>multi-select</h3>\n<vcl-select [(value)]=\"value2\" label=\"Select items\" selectionMode=\"multiple\" >\n  <vcl-dropdown>\n    <vcl-dropdown-item *ngFor=\"let item of items\" [value]=\"item.value\">\n      <vcl-dropdown-label>{{item.label}}</vcl-dropdown-label>\n    </vcl-dropdown-item>\n  </vcl-dropdown>\n</vcl-select>\n\n<p> Selected values: {{value2}}</p>\n"

/***/ }),

/***/ "./demo/app/demos/select/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/demos/select/demo.component.ts ***!
  \*************************************************/
/*! exports provided: SelectDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoComponent", function() { return SelectDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent() {
        this.value1 = undefined;
        this.value2 = [];
        this.items = Array.from(Array(30).keys()).map(function (i) { return ({
            label: 'item ' + i + 1,
            value: i + 1
        }); });
    }
    SelectDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/select/demo.component.html")
        })
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/select/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/demos/select/demo.module.ts ***!
  \**********************************************/
/*! exports provided: demo, SelectDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoModule", function() { return SelectDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/select/demo.component.ts");









function demo() {
    return {
        name: 'Dropdown',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_8__["SelectDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/dropdown/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/dropdown/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/select/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/select/demo.component.ts")
            }
        }
    };
}
var SelectDemoModule = /** @class */ (function () {
    function SelectDemoModule() {
    }
    SelectDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLSelectModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_8__["SelectDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_8__["SelectDemoComponent"]]
        })
    ], SelectDemoModule);
    return SelectDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/select/demo.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/select/demo.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>single-select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown</span> #<span class=\"hljs-attr\">dropdownCountries</span>=<span class=\"hljs-string\">\"vclDropdown\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\" - \"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>None<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-header</span>&gt;</span>Europe<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-header</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"gr\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Greece<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"fr\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>France<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"de\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Germany<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"uk\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"United Kingdom\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-header</span>&gt;</span>Asia<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-header</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"jp\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Japan<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"cn\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>China<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"th\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Thailand<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span> Selected value: {{value1}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>multi-select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value2\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"Select items\"</span> <span class=\"hljs-attr\">selectionMode</span>=<span class=\"hljs-string\">\"multiple\"</span> &gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">\"let item of items\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"item.value\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>{{item.label}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span> Selected values: {{value2}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/select/demo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/select/demo.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> SelectDemoComponent {\n\n  value1 = <span class=\"hljs-literal\">undefined</span>;\n  value2 = [];\n\n  items = <span class=\"hljs-built_in\">Array</span>.from(<span class=\"hljs-built_in\">Array</span>(<span class=\"hljs-number\">30</span>).keys()).map(<span class=\"hljs-function\"><span class=\"hljs-params\">i</span> =&gt;</span> ({\n    label: <span class=\"hljs-string\">'item '</span> + i + <span class=\"hljs-number\">1</span>,\n    value: i + <span class=\"hljs-number\">1</span>\n  }));\n\n}\n"

/***/ })

}]);
//# sourceMappingURL=demos-select-demo-module.js.map