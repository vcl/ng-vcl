(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-button-demo-module"],{

/***/ "./demo/app/demos/button/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/demos/button/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button vcl-button (click)=\"someAction($event)\">Button</button>\n<br><br>\n<button vcl-button (click)=\"someAction($event)\" disabled=true>Disabled button</button>\n<br><br>\n<button vcl-button (click)=\"someAction($event)\" class=\"vclEmphasized\">Emphasized label button</button>\n<br><br>\n<button vcl-icon-button icon=\"fas:bolt\" title=\"Square Button\" (click)=\"someAction($event)\"></button>\n<br><br>\n<button vcl-icogram-button (click)=\"someAction($event)\" appIcon=\"fas:bolt\">Label button with appended icon</button>\n<br><br>\n<button vcl-icogram-button (click)=\"someAction($event)\" prepIcon=\"fas:bolt\">Label button with prepended icon</button>\n<br><br>\n<button vcl-icogram-button (click)=\"someAction($event)\" appIcon=\"fas:bolt\" prepIcon=\"fas:bolt\">Label button with prepended and appended icon</button>\n<br><br>\n<button vcl-button vclSelectable (select)=\"someAction($event)\">Selectable button</button>\n<br><br>\n<button vcl-button vclSelectable=\"true\" (select)=\"someAction($event)\">Selectable button (preselected)</button>\n<br><br>\n<button vcl-icon-button vclSelectable (select)=\"someAction($event)\" icon=\"fas:bolt\"></button>\n"

/***/ }),

/***/ "./demo/app/demos/button/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/demos/button/demo.component.ts ***!
  \*************************************************/
/*! exports provided: ButtonDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoComponent", function() { return ButtonDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonDemoComponent = /** @class */ (function () {
    function ButtonDemoComponent() {
    }
    ButtonDemoComponent.prototype.someAction = function (param) {
        console.log('Action handler, param:', param);
    };
    ButtonDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/button/demo.component.html")
        })
    ], ButtonDemoComponent);
    return ButtonDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/button/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/demos/button/demo.module.ts ***!
  \**********************************************/
/*! exports provided: demo, ButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoModule", function() { return ButtonDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/button/demo.component.ts");







function demo() {
    return {
        label: 'Button',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["ButtonDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/button/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/button/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/button/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/button/demo.component.ts")
            }
        },
    };
}
var ButtonDemoModule = /** @class */ (function () {
    function ButtonDemoModule() {
    }
    ButtonDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIcogramModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ButtonDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ButtonDemoComponent"]]
        })
    ], ButtonDemoModule);
    return ButtonDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/button/demo.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/button/demo.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>Button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> <span class=\"hljs-attr\">disabled</span>=<span class=\"hljs-string\">true</span>&gt;</span>Disabled button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span>&gt;</span>Emphasized label button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bolt\"</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"Square Button\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icogram-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:bolt\"</span>&gt;</span>Label button with appended icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icogram-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:bolt\"</span>&gt;</span>Label button with prepended icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icogram-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:bolt\"</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:bolt\"</span>&gt;</span>Label button with prepended and appended icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">vclSelectable</span> (<span class=\"hljs-attr\">select</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>Selectable button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">vclSelectable</span>=<span class=\"hljs-string\">\"true\"</span> (<span class=\"hljs-attr\">select</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>Selectable button (preselected)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">vclSelectable</span> (<span class=\"hljs-attr\">select</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bolt\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/button/demo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/button/demo.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ButtonDemoComponent {\n  someAction(param) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Action handler, param:'</span>, param);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/button/README.md":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/button/README.md ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-button\">vcl-button</h1>\n<p><code>vcl-button</code> enhances the HTML <code>&lt;button&gt;</code> with styling and features.<br>It is the main control for triggering actions.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLButtonModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLButtonModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{ ... }</pre>\n<h3 id=\"buttonvcl-button\">button[vcl-button]</h3>\n<pre class=\"hljs\"><code>&lt;button vcl-button (click)=&quot;someAction($event)&quot;&gt;Action&lt;/button&gt;</code></pre>\n<h3 id=\"buttonvcl-icogram-button\">button[vcl-icogram-button]</h3>\n<pre class=\"hljs\"><code>&lt;button vcl-icogram-button appIcon=&quot;fas:bolt&quot;&gt;Action&lt;/button&gt;</code></pre>\n<h3 id=\"buttonvcl-icon-button\">button[vcl-icon-button]</h3>\n<pre class=\"hljs\"><code>&lt;button vcl-icon-button icon=&quot;fas:bolt&quot;&gt;&lt;/button&gt;</code></pre>\n<h3 id=\"buttonvcl-buttonvclselectable\">button[vcl-button][vclSelectable]</h3>\n<pre class=\"hljs\"><code>&lt;button vcl-button vclSelectable (select)=&quot;someAction($event)&quot;&gt;Action&lt;/button&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-button-attributes\">vcl-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>State to indicate that the button is disabled</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-icogram-button-attributes\">vcl-icogram-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as prepIcon but appended</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-icon-button-attributes\">vcl-icon-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td></td>\n<td>Sets the button icon</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-buttonvclselectable-attributes\">vcl-button[vclSelectable] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Preselect button if true</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-buttonvclselectable-events\">vcl-button[vclSelectable] events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>select</code></td>\n<td>Triggered when the button is selected</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-button-demo-module.js.map