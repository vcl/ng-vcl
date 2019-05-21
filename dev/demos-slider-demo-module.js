(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-slider-demo-module"],{

/***/ "./demo/app/demos/slider/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/demos/slider/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic</h3>\n<vcl-slider [(value)]=\"value1\"></vcl-slider>\nValue: {{value1}}\n\n<h3>With a scale</h3>\n<vcl-slider \n  [(value)]=\"value2\" \n  [min]=\"0\" \n  [max]=\"100\"\n  [scale]=\"10\">\n</vcl-slider>\nValue: {{value2}}\n\n<h3>With value locked to the scale</h3>\n<vcl-slider \n  [(value)]=\"value3\" \n  [min]=\"0\" \n  [max]=\"100\"\n  [scale]=\"11\"\n  [lock]=\"true\" >\n</vcl-slider>\nValue: {{value3}}\n\n\n<h3>custom labeled scale</h3>\n<vcl-slider \n  [(value)]=\"value4\" \n  [min]=\"0\" \n  [max]=\"5\" \n  [enableWheel]=\"true\" \n  [scale]=\"['☀','☁','☂','☃','☄','1']\">\n</vcl-slider>\nValue: {{value4}}\n\n\n<h3>disabled</h3>\n\n<vcl-slider \n  [(value)]=\"value5\" \n  [min]=\"0\" \n  [max]=\"7\" \n  [disabled]=\"true\" \n  [scale]=\"['d','i','s','a','b','l', 'e', 'd']\">\n</vcl-slider>\n"

/***/ }),

/***/ "./demo/app/demos/slider/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/demos/slider/demo.component.ts ***!
  \*************************************************/
/*! exports provided: SliderDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDemoComponent", function() { return SliderDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderDemoComponent = /** @class */ (function () {
    function SliderDemoComponent() {
        this.value1 = 0;
        this.value2 = 0;
        this.value3 = 0;
        this.value4 = 0;
        this.value5 = 0;
    }
    SliderDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/slider/demo.component.html")
        })
    ], SliderDemoComponent);
    return SliderDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/slider/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/demos/slider/demo.module.ts ***!
  \**********************************************/
/*! exports provided: demo, SliderDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDemoModule", function() { return SliderDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/slider/demo.component.ts");








function demo() {
    return {
        label: 'Slider',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["SliderDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/slider/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/slider/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/slider/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/slider/demo.component.ts")
            }
        }
    };
}
var SliderDemoModule = /** @class */ (function () {
    function SliderDemoModule() {
    }
    SliderDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLSliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["SliderDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["SliderDemoComponent"]]
        })
    ], SliderDemoModule);
    return SliderDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/slider/demo.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/slider/demo.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Basic<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\nValue: {{value1}}\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With a scale<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> \n  [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value2\"</span> \n  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"0\"</span> \n  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"100\"</span>\n  [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"10\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\nValue: {{value2}}\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With value locked to the scale<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> \n  [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value3\"</span> \n  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"0\"</span> \n  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"100\"</span>\n  [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"11\"</span>\n  [<span class=\"hljs-attr\">lock</span>]=<span class=\"hljs-string\">\"true\"</span> &gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\nValue: {{value3}}\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>custom labeled scale<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> \n  [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value4\"</span> \n  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"0\"</span> \n  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"5\"</span> \n  [<span class=\"hljs-attr\">enableWheel</span>]=<span class=\"hljs-string\">\"true\"</span> \n  [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"['☀','☁','☂','☃','☄','1']\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\nValue: {{value4}}\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> \n  [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value5\"</span> \n  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"0\"</span> \n  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"7\"</span> \n  [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span> \n  [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"['d','i','s','a','b','l', 'e', 'd']\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/slider/demo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/slider/demo.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> SliderDemoComponent {\n  value1 = <span class=\"hljs-number\">0</span>;\n  value2 = <span class=\"hljs-number\">0</span>;\n  value3 = <span class=\"hljs-number\">0</span>;\n  value4 = <span class=\"hljs-number\">0</span>;\n  value5 = <span class=\"hljs-number\">0</span>;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/slider/README.md":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/slider/README.md ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-slider\">vcl-slider</h1>\n<h2 id=\"usage\">Usage</h2>\n<p><em>Note: HammerJS must be loaded for touch events</em></p>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLSliderModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLSliderModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span>\n  [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">&quot;value1&quot;</span>\n  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">&quot;0&quot;</span>\n  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">&quot;100&quot;</span>\n  [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">&quot;10&quot;</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span></pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span>\n  [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">&quot;value2&quot;</span>\n  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">&quot;0&quot;</span>\n  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">&quot;50&quot;</span>\n  [<span class=\"hljs-attr\">lock</span>]=<span class=\"hljs-string\">&quot;5&quot;</span>\n  [<span class=\"hljs-attr\">enableWheel</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>\n  [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">&quot;[&apos;Zero&apos;,&apos;One&apos;,&apos;Two&apos;,&apos;Three&apos;,&apos;Four&apos;,&apos;Five&apos;]&quot;</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>The current value</td>\n</tr>\n<tr>\n<td><code>min</code></td>\n<td>number</td>\n<td>0</td>\n<td>The min value</td>\n</tr>\n<tr>\n<td><code>max</code></td>\n<td>number</td>\n<td>100</td>\n<td>The max value</td>\n</tr>\n<tr>\n<td><code>scale</code></td>\n<td>string[] &amp;#124 number</td>\n<td></td>\n<td>The legend below the slider</td>\n</tr>\n<tr>\n<td><code>lock</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>The selectable value is locked to the scale</td>\n</tr>\n<tr>\n<td><code>enableWheel</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Allows to change the value with the mouse wheel</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the slider when true</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the slider</td>\n</tr>\n</tbody></table>\n<h4 id=\"events\">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when slider value changes</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-slider-demo-module.js.map