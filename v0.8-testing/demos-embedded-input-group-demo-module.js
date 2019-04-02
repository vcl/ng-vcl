(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-embedded-input-group-demo-module"],{

/***/ "./demo/app/demos/embedded-input-group/demo.component.html":
/*!*****************************************************************!*\
  !*** ./demo/app/demos/embedded-input-group/demo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nIcon left and placeholder text\n<vcl-embedded-input-group prepIcon=\"fas:search\">\n  <input vclEmbeddedInputGroup placeholder=\"Postcode, City, Name of the Workshop\" />\n</vcl-embedded-input-group>\n\nPlaceholder text and icon on the right\n<vcl-embedded-input-group appIcon=\"fas:search\">\n  <input vclEmbeddedInputGroup placeholder=\"Postcode, City, Name of the Workshop\" />\n</vcl-embedded-input-group>\n\nButton on the right\n<vcl-embedded-input-group>\n  <input vclEmbeddedInputGroup />\n  <button vcl-icon-button vclEmbeddedInputGroup (click)=\"someAction($event)\" [icon]=\"'fas:times-circle'\"></button>\n</vcl-embedded-input-group>\n\nLeft icon and button on the right\n<vcl-embedded-input-group prepIcon=\"fas:cog\">\n  <input vclEmbeddedInputGroup />\n  <button vcl-icon-button vclEmbeddedInputGroup (click)=\"someAction($event)\" [icon]=\"'fas:times-circle'\"></button>\n</vcl-embedded-input-group>\n\nDisabled group\n<vcl-embedded-input-group prepIcon=\"fas:cog\" [disabled]=true>\n  <input vclEmbeddedInputGroup />\n  <button vcl-icon-button vclEmbeddedInputGroup [icon]=\"'fas:times-circle'\"></button>\n</vcl-embedded-input-group>\n\nCombined with Input-group\n<div class=\"vclInputGroup\">\n  <vcl-embedded-input-group prepIcon=\"fas:cog\">\n    <input vclEmbeddedInputGroup />\n    <button vcl-icon-button vclEmbeddedInputGroup (click)=\"someAction($event)\" [icon]=\"'fas:times-circle'\"></button>\n  </vcl-embedded-input-group>\n  <div class=\"vclInputGroupButton\">\n    <button vcl-button class=\"vclButton\" label=\"\" (click)=\"someAction($event)\">GO</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/embedded-input-group/demo.component.ts":
/*!***************************************************************!*\
  !*** ./demo/app/demos/embedded-input-group/demo.component.ts ***!
  \***************************************************************/
/*! exports provided: EmbeddedInputGroupDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupDemoComponent", function() { return EmbeddedInputGroupDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmbeddedInputGroupDemoComponent = /** @class */ (function () {
    function EmbeddedInputGroupDemoComponent() {
    }
    EmbeddedInputGroupDemoComponent.prototype.someAction = function (event) { console.log(event); };
    EmbeddedInputGroupDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/embedded-input-group/demo.component.html")
        })
    ], EmbeddedInputGroupDemoComponent);
    return EmbeddedInputGroupDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/embedded-input-group/demo.module.ts":
/*!************************************************************!*\
  !*** ./demo/app/demos/embedded-input-group/demo.module.ts ***!
  \************************************************************/
/*! exports provided: demo, EmbeddedInputGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupDemoModule", function() { return EmbeddedInputGroupDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/embedded-input-group/demo.component.ts");







function demo() {
    return {
        label: 'Embedded Input Group',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/embedded-input-group/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/embedded-input-group/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/embedded-input-group/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/embedded-input-group/demo.component.ts")
            },
        },
    };
}
var EmbeddedInputGroupDemoModule = /** @class */ (function () {
    function EmbeddedInputGroupDemoModule() {
    }
    EmbeddedInputGroupDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLInputControlGroupModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLInputModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLEmbeddedInputGroupModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupDemoComponent"]]
        })
    ], EmbeddedInputGroupDemoModule);
    return EmbeddedInputGroupDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/embedded-input-group/demo.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/embedded-input-group/demo.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nIcon left and placeholder text\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Postcode, City, Name of the Workshop\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nPlaceholder text and icon on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Postcode, City, Name of the Workshop\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nButton on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nLeft icon and button on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:cog\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nDisabled group\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:cog\"</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">true</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nCombined with Input-group\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclInputGroup\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:cog\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclInputGroupButton\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclButton\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>GO<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/embedded-input-group/demo.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/embedded-input-group/demo.component.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> EmbeddedInputGroupDemoComponent {\n  someAction(event: <span class=\"hljs-built_in\">any</span>): <span class=\"hljs-built_in\">void</span> { <span class=\"hljs-built_in\">console</span>.log(event); }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/embedded-input-group/README.md":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/embedded-input-group/README.md ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-embedded-input-group\">vcl-embedded-input-group</h1>\n<p>Embedded-Input-Group</p>\n<p>Adds the possibility to prepend and append icons or buttons inside of input fields.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\">\nIcon left and placeholder text\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">&quot;fas:search&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;placeholder text&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nPlaceholder text and icon on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">&quot;fas:times-circle&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;Postcode, City, Name of the Workshop&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nButton on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;someAction($event)&quot;</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">&quot;&apos;fas:search&apos;&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nLeft icon and button on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">&quot;fas:cog&quot;</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">&quot;fas:times-circle&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;someAction($event)&quot;</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">&quot;&apos;fas:times-circle&apos;&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-embedded-input-group-attributes\">vcl-embedded-input-group attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the input group when true</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Prepenced icon</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Appended icon</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-embedded-input-group-demo-module.js.map