(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-button-group-demo-module"],{

/***/ "./demo/app/demos/button-group/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/button-group/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic Button Group</h3>\n<vcl-button-group [(ngModel)]=\"value1\">\n  <button vcl-button [value]=\"1\">One</button>\n  <button vcl-button [value]=\"2\">Two</button>\n  <button vcl-button [value]=\"3\">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value1}}</p>\n\n<h3>Vertical Button Group</h3>\n<vcl-button-group class=\"vclVertical\" style=\"width: 10em\" [(ngModel)]=\"value2\">\n  <button vcl-button [value]=\"1\">One</button>\n  <button vcl-button [value]=\"2\">Two</button>\n  <button vcl-button [value]=\"3\">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value2}}</p>\n\n<h3>Button Group with multiselection</h3>\n<vcl-button-group mode=\"multiple\" [(ngModel)]=\"value3\">\n  <button vcl-icon-button icon=\"fas:italic\" [value]=\"'italic'\"></button>\n  <button vcl-icon-button icon=\"fas:bold\" [value]=\"'bold'\"></button>\n  <button vcl-icon-button icon=\"fas:underline\" [value]=\"'underline'\"></button>\n</vcl-button-group>\n<p>Selected values: {{value3}}</p>\n\n\n<h3>Disabled Button Group</h3>\n<vcl-button-group [disabled]=\"true\" mode=\"multiple\">\n  <button vcl-icon-button icon=\"fas:italic\" [value]=\"'italic'\"></button>\n  <button vcl-icon-button icon=\"fas:bold\" [value]=\"'bold'\"></button>\n  <button vcl-icon-button icon=\"fas:underline\" [value]=\"'underline'\"></button>\n</vcl-button-group>\n"

/***/ }),

/***/ "./demo/app/demos/button-group/demo.component.ts":
/*!*******************************************************!*\
  !*** ./demo/app/demos/button-group/demo.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonGroupDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupDemoComponent", function() { return ButtonGroupDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonGroupDemoComponent = /** @class */ (function () {
    function ButtonGroupDemoComponent() {
        this.value1 = 2;
        this.value2 = 1;
        this.value3 = [];
    }
    ButtonGroupDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/button-group/demo.component.html")
        })
    ], ButtonGroupDemoComponent);
    return ButtonGroupDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/button-group/demo.module.ts":
/*!****************************************************!*\
  !*** ./demo/app/demos/button-group/demo.module.ts ***!
  \****************************************************/
/*! exports provided: demo, ButtonGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupDemoModule", function() { return ButtonGroupDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/button-group/demo.component.ts");








function demo() {
    return {
        label: 'Button Group',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["ButtonGroupDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/button-group/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/button-group/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/button-group/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/button-group/demo.component.ts")
            }
        },
    };
}
var ButtonGroupDemoModule = /** @class */ (function () {
    function ButtonGroupDemoModule() {
    }
    ButtonGroupDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonGroupModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["ButtonGroupDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["ButtonGroupDemoComponent"]]
        })
    ], ButtonGroupDemoModule);
    return ButtonGroupDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/button-group/demo.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/button-group/demo.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Basic Button Group<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"value1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"1\"</span>&gt;</span>One<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span>Two<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"3\"</span>&gt;</span>Three<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Selected value: {{value1}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Vertical Button Group<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclVertical\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 10em\"</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"value2\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"1\"</span>&gt;</span>One<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span>Two<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"3\"</span>&gt;</span>Three<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Selected value: {{value2}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Button Group with multiselection<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">\"multiple\"</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"value3\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:italic\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'italic'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bold\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'bold'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:underline\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'underline'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Selected values: {{value3}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Disabled Button Group<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span> <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">\"multiple\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:italic\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'italic'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bold\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'bold'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:underline\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'underline'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/button-group/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/button-group/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ButtonGroupDemoComponent {\n\n  value1 = <span class=\"hljs-number\">2</span>;\n  value2 = <span class=\"hljs-number\">1</span>;\n  value3 = [];\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/button-group/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/button-group/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-button-group\">vcl-button-group</h1>\n<p>A button group which distributes space for each button equally to occupy 100% horizontal space.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLButtonGroupModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLButtonGroupModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">&quot;single&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">&quot;1&quot;</span>&gt;</span>Action 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">&quot;2&quot;</span>&gt;</span>Action 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">&quot;3&quot;</span>&gt;</span>Action 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>number | number[]</td>\n<td></td>\n<td>Index of the selected button(s)</td>\n</tr>\n<tr>\n<td><code>mode</code></td>\n<td>string</td>\n<td><code>single</code></td>\n<td><code>single</code> or <code>multiple</code></td>\n</tr>\n</tbody></table>\n<h4 id=\"events\">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectionChange</code></td>\n<td>event (number | number[])</td>\n<td>Triggers when selected buttons change</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-button-group-demo-module.js.map