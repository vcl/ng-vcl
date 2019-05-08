(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-flip-switch-demo-module"],{

/***/ "./demo/app/demos/flip-switch/demo.component.html":
/*!********************************************************!*\
  !*** ./demo/app/demos/flip-switch/demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>2-way-binding</h3>\n<vcl-flip-switch onLabel=\"On\" offLabel=\"Off\" [(value)]=\"value\"></vcl-flip-switch><br>\nCurrent value: {{value}}\n\n<h3>Preset \"on\"</h3>\n<vcl-flip-switch value=\"true\" onLabel=\"On\" offLabel=\"Off\" (change)=\"onChange($event)\"></vcl-flip-switch>\n"

/***/ }),

/***/ "./demo/app/demos/flip-switch/demo.component.ts":
/*!******************************************************!*\
  !*** ./demo/app/demos/flip-switch/demo.component.ts ***!
  \******************************************************/
/*! exports provided: FlipSwitchDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipSwitchDemoComponent", function() { return FlipSwitchDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlipSwitchDemoComponent = /** @class */ (function () {
    function FlipSwitchDemoComponent() {
        this.value = false;
    }
    FlipSwitchDemoComponent.prototype.onChange = function (ev) {
        console.log('changed:');
        console.dir(ev);
    };
    FlipSwitchDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/flip-switch/demo.component.html")
        })
    ], FlipSwitchDemoComponent);
    return FlipSwitchDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/flip-switch/demo.module.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/flip-switch/demo.module.ts ***!
  \***************************************************/
/*! exports provided: demo, FlipSwitchDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipSwitchDemoModule", function() { return FlipSwitchDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/flip-switch/demo.component.ts");








function demo() {
    return {
        name: 'Flip-Switch',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["FlipSwitchDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/flip-switch/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/flip-switch/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/flip-switch/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/flip-switch/demo.component.ts")
            }
        }
    };
}
var FlipSwitchDemoModule = /** @class */ (function () {
    function FlipSwitchDemoModule() {
    }
    FlipSwitchDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFlipSwitchModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FlipSwitchDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FlipSwitchDemoComponent"]]
        })
    ], FlipSwitchDemoModule);
    return FlipSwitchDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/flip-switch/demo.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/flip-switch/demo.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>2-way-binding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-flip-switch</span> <span class=\"hljs-attr\">onLabel</span>=<span class=\"hljs-string\">\"On\"</span> <span class=\"hljs-attr\">offLabel</span>=<span class=\"hljs-string\">\"Off\"</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-flip-switch</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\nCurrent value: {{value}}\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Preset \"on\"<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-flip-switch</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"true\"</span> <span class=\"hljs-attr\">onLabel</span>=<span class=\"hljs-string\">\"On\"</span> <span class=\"hljs-attr\">offLabel</span>=<span class=\"hljs-string\">\"Off\"</span> (<span class=\"hljs-attr\">change</span>)=<span class=\"hljs-string\">\"onChange($event)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-flip-switch</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/flip-switch/demo.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/flip-switch/demo.component.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FlipSwitchDemoComponent {\n\n  selectedItem: <span class=\"hljs-built_in\">any</span>;\n\n  value = <span class=\"hljs-literal\">false</span>;\n\n  onChange(ev) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'changed:'</span>);\n    <span class=\"hljs-built_in\">console</span>.dir(ev);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/flip-switch/README.md":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/flip-switch/README.md ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-flip-switch\">vcl-flip-switch</h1>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;vcl-flip-switch [(value)]=&quot;value&quot; onLabel=&quot;On&quot; offLabel=&quot;Off&quot;&gt;&lt;/vcl-flip-switch&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>onLabel</code></td>\n<td>string</td>\n<td>&apos;On&apos;</td>\n<td>The label for &quot;on&quot;</td>\n</tr>\n<tr>\n<td><code>offLabel</code></td>\n<td>string</td>\n<td>&apos;Off&apos;</td>\n<td>The label for &quot;off&quot;</td>\n</tr>\n</tbody></table>\n<h4 id=\"events\">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value after a change</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-flip-switch-demo-module.js.map