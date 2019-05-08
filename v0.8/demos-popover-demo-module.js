(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-popover-demo-module"],{

/***/ "./demo/app/demos/popover/demo.component.html":
/*!****************************************************!*\
  !*** ./demo/app/demos/popover/demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height:500px; width: 100%;\">\n  <button vcl-button [selectable]=\"true\" [selected]=\"popover1.visible\" (click)=\"popover1.toggle()\">Toggle Popover</button>\n  <div #target style=\"position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green\">\n    The target\n  </div>\n</div>\n\n<vcl-popover\n  #popover1\n  [target]=\"target\"\n  [style]=\"style\"\n  (afterClose)=\"popover2.close()\">\n  <div style=\"width: 400px\">\n    Popover is connected to the target <br>\n    <button vcl-button (click)=\"popover2.open()\">Show additional Popover</button>\n    &nbsp;\n    <button vcl-button (click)=\"popover1.close();\">Close Popovers</button>\n  </div>\n</vcl-popover>\n\n<vcl-popover\n  #popover2\n  [target]=\"target\"\n  originX=\"start\"\n  originY=\"top\"\n  overlayX=\"start\"\n  overlayY=\"bottom\">\n  <div style=\"width: 300px; height: 50px;\">\n      Popover is connected to the target<br>\n  </div>\n</vcl-popover>\n"

/***/ }),

/***/ "./demo/app/demos/popover/demo.component.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/popover/demo.component.ts ***!
  \**************************************************/
/*! exports provided: PopoverDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDemoComponent", function() { return PopoverDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopoverDemoComponent = /** @class */ (function () {
    function PopoverDemoComponent() {
        this.style = {
            border: '3px double red',
            padding: '20px',
            overflow: 'hidden'
        };
    }
    PopoverDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/popover/demo.component.html"),
        })
    ], PopoverDemoComponent);
    return PopoverDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/popover/demo.module.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/popover/demo.module.ts ***!
  \***********************************************/
/*! exports provided: demo, PopoverDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDemoModule", function() { return PopoverDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/popover/demo.component.ts");







function demo() {
    return {
        label: 'Popover',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["PopoverDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/popover/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/popover/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/popover/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/popover/demo.component.ts")
            }
        }
    };
}
var PopoverDemoModule = /** @class */ (function () {
    function PopoverDemoModule() {
    }
    PopoverDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLPopoverModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["PopoverDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["PopoverDemoComponent"]]
        })
    ], PopoverDemoModule);
    return PopoverDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/popover/demo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/popover/demo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"min-height:500px; width: 100%;\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">selectable</span>]=<span class=\"hljs-string\">\"true\"</span> [<span class=\"hljs-attr\">selected</span>]=<span class=\"hljs-string\">\"popover1.visible\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"popover1.toggle()\"</span>&gt;</span>Toggle Popover<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> #<span class=\"hljs-attr\">target</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green\"</span>&gt;</span>\n    The target\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-popover</span>\n  #<span class=\"hljs-attr\">popover1</span>\n  [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"target\"</span>\n  [<span class=\"hljs-attr\">style</span>]=<span class=\"hljs-string\">\"style\"</span>\n  (<span class=\"hljs-attr\">afterClose</span>)=<span class=\"hljs-string\">\"popover2.close()\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 400px\"</span>&gt;</span>\n    Popover is connected to the target <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"popover2.open()\"</span>&gt;</span>Show additional Popover<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    &amp;nbsp;\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"popover1.close();\"</span>&gt;</span>Close Popovers<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-popover</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-popover</span>\n  #<span class=\"hljs-attr\">popover2</span>\n  [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"target\"</span>\n  <span class=\"hljs-attr\">originX</span>=<span class=\"hljs-string\">\"start\"</span>\n  <span class=\"hljs-attr\">originY</span>=<span class=\"hljs-string\">\"top\"</span>\n  <span class=\"hljs-attr\">overlayX</span>=<span class=\"hljs-string\">\"start\"</span>\n  <span class=\"hljs-attr\">overlayY</span>=<span class=\"hljs-string\">\"bottom\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 300px; height: 50px;\"</span>&gt;</span>\n      Popover is connected to the target<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-popover</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/popover/demo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/popover/demo.component.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> PopoverDemoComponent {\n  style = {\n    border: <span class=\"hljs-string\">'3px double red'</span>,\n    padding: <span class=\"hljs-string\">'20px'</span>,\n    overflow: <span class=\"hljs-string\">'hidden'</span>\n  };\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/popover/README.md":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/popover/README.md ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-popover\">vcl-popover</h1>\n<p>A popover is a dom-element which &apos;floats&apos; at the position of the target element.<br>The popover uses <a href=\"https://material.angular.io/cdk/overlay/overview\">@angular/cdk&apos;s</a> overlay for positioning.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> #<span class=\"hljs-attr\">myTarget</span>&gt;</span>any dom-element which is the target<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-popover</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">&quot;myTarget&quot;</span> [(<span class=\"hljs-attr\">visible</span>)]=<span class=\"hljs-string\">&quot;true&quot;</span> <span class=\"hljs-attr\">originX</span>=<span class=\"hljs-string\">&quot;end&quot;</span> <span class=\"hljs-attr\">originY</span>=<span class=\"hljs-string\">&quot;top&quot;</span> <span class=\"hljs-attr\">overlayX</span>=<span class=\"hljs-string\">&quot;start&quot;</span> <span class=\"hljs-attr\">overlayY</span>=<span class=\"hljs-string\">&quot;top&quot;</span>&gt;</span>\n  Popover-Content\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-popover</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>visible</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>true</td>\n<td>the popover is hidden if false</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>ElementRef</td>\n<td></td>\n<td>the target must be an ElementRef instance</td>\n</tr>\n<tr>\n<td><code>originX</code></td>\n<td>&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td>\n<td>&quot;start&quot;</td>\n<td>horizontal position on the target</td>\n</tr>\n<tr>\n<td><code>originY</code></td>\n<td>&quot;bottom&quot; | &quot;center&quot; | &quot;top&quot;</td>\n<td>&quot;bottom&quot;</td>\n<td>vertical position on the target</td>\n</tr>\n<tr>\n<td><code>overlayX</code></td>\n<td>&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td>\n<td>&quot;start&quot;</td>\n<td>horizontal position of the popover</td>\n</tr>\n<tr>\n<td><code>overlayY</code></td>\n<td>&quot;bottom&quot; | &quot;center&quot; | &quot;top&quot;</td>\n<td>&quot;top&quot;</td>\n<td>vertical position of the popover</td>\n</tr>\n<tr>\n<td><code>offsetX</code></td>\n<td>number</td>\n<td>0</td>\n<td>horizontal popover offset</td>\n</tr>\n<tr>\n<td><code>offsetY</code></td>\n<td>number</td>\n<td>0</td>\n<td>vertical popover offset</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number | string</td>\n<td></td>\n<td>popover width</td>\n</tr>\n<tr>\n<td><code>offsetY</code></td>\n<td>number | string</td>\n<td></td>\n<td>popover height</td>\n</tr>\n</tbody></table>\n<h4 id=\"methods\">Methods</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Attributes</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>open</code></td>\n<td></td>\n<td>will show the popover</td>\n</tr>\n<tr>\n<td><code>close</code></td>\n<td></td>\n<td>will hide the popover</td>\n</tr>\n<tr>\n<td><code>reposition</code></td>\n<td></td>\n<td>re-positions the popover, use this if the popover changes its content-size</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n"

/***/ })

}]);
//# sourceMappingURL=demos-popover-demo-module.js.map