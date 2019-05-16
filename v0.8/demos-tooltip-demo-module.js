(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-tooltip-demo-module"],{

/***/ "./demo/app/demos/tooltip/demo.component.html":
/*!****************************************************!*\
  !*** ./demo/app/demos/tooltip/demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; height:100px\">\n  <div vclTooltip=\"Tooltip on the top\" style=\"background-color:#E6E6E6;flex:1\">\n    <p>Tooltip on the top</p>\n  </div>\n  <div vclTooltip=\"Tooltip on the right\" vclTooltipPosition=\"right\" style=\"background-color:#D8D8D8;flex:1\">\n    <p>Tooltip on the right</p>\n  </div>\n  <div vclTooltip=\"Tooltip on the left\" vclTooltipPosition=\"left\" style=\"background-color:#BDBDBD;flex:1\">\n    <p>Tooltip on the left</p>\n  </div>\n  <div vclTooltip=\"Tooltip on the bottom\" vclTooltipPosition=\"bottom\" style=\"background-color:#A4A4A4;flex:1\">\n    <p>Tooltip on the bottom</p>\n  </div>\n</div>\n<div style=\"display: flex; height:100px; padding-top: 2em\">\n  <div vclTooltip=\"Tooltip with no pointer arrow\" [vclTooltipArrowPointer]=\"false\" style=\"background-color:#E6E6E6;flex:1\">\n    <p>Tooltip with no pointer arrow</p>\n  </div>\n  <div vclTooltip=\"Tooltip with delay before showing\" [vclTooltipShowDelay]=\"500\" style=\"background-color:#D8D8D8;flex:1\">\n    <p>Tooltip with delay before showing</p>\n  </div>\n  <div vclTooltip=\"Tooltip with delay before hiding\" [vclTooltipHideDelay]=\"500\" style=\"background-color:#BDBDBD;flex:1\">\n    <p>Tooltip with delay before hiding</p>\n  </div>\n  <div [vclTooltip]=\"tt\" style=\"background-color:#A4A4A4;flex:1\">\n    <p>Tooltip with rich content</p>\n    <vcl-tooltip #tt=\"vclTooltip\">\n      <div class=\"vclLayoutHorizontal vclLayoutCenter\">\n        <img src=\"http://lorempixel.com/50/50/cats/\" />\n        <span class=\"vclGutterMarginLR\">Tooltip with rich content </span>\n      </div>\n    </vcl-tooltip>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/tooltip/demo.component.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/tooltip/demo.component.ts ***!
  \**************************************************/
/*! exports provided: ToolTipDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipDemoComponent", function() { return ToolTipDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolTipDemoComponent = /** @class */ (function () {
    function ToolTipDemoComponent() {
    }
    ToolTipDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/tooltip/demo.component.html"),
            styles: ["p{ text-align:center;padding-top:30px}"]
        })
    ], ToolTipDemoComponent);
    return ToolTipDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/tooltip/demo.module.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/tooltip/demo.module.ts ***!
  \***********************************************/
/*! exports provided: demo, ToolTipDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipDemoModule", function() { return ToolTipDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/tooltip/demo.component.ts");







function demo() {
    return {
        label: 'Tooltip',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["ToolTipDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/tooltip/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/tooltip/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/tooltip/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/tooltip/demo.component.ts")
            }
        },
    };
}
var ToolTipDemoModule = /** @class */ (function () {
    function ToolTipDemoModule() {
    }
    ToolTipDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLTooltipModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ToolTipDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ToolTipDemoComponent"]]
        })
    ], ToolTipDemoModule);
    return ToolTipDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/tooltip/demo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/tooltip/demo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"display: flex; height:100px\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip on the top\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#E6E6E6;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip on the top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip on the right\"</span> <span class=\"hljs-attr\">vclTooltipPosition</span>=<span class=\"hljs-string\">\"right\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#D8D8D8;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip on the right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip on the left\"</span> <span class=\"hljs-attr\">vclTooltipPosition</span>=<span class=\"hljs-string\">\"left\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#BDBDBD;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip on the left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip on the bottom\"</span> <span class=\"hljs-attr\">vclTooltipPosition</span>=<span class=\"hljs-string\">\"bottom\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#A4A4A4;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip on the bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"display: flex; height:100px; padding-top: 2em\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip with no pointer arrow\"</span> [<span class=\"hljs-attr\">vclTooltipArrowPointer</span>]=<span class=\"hljs-string\">\"false\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#E6E6E6;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip with no pointer arrow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip with delay before showing\"</span> [<span class=\"hljs-attr\">vclTooltipShowDelay</span>]=<span class=\"hljs-string\">\"500\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#D8D8D8;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip with delay before showing<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">\"Tooltip with delay before hiding\"</span> [<span class=\"hljs-attr\">vclTooltipHideDelay</span>]=<span class=\"hljs-string\">\"500\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#BDBDBD;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip with delay before hiding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> [<span class=\"hljs-attr\">vclTooltip</span>]=<span class=\"hljs-string\">\"tt\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"background-color:#A4A4A4;flex:1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Tooltip with rich content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tooltip</span> #<span class=\"hljs-attr\">tt</span>=<span class=\"hljs-string\">\"vclTooltip\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutHorizontal vclLayoutCenter\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"http://lorempixel.com/50/50/cats/\"</span> /&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGutterMarginLR\"</span>&gt;</span>Tooltip with rich content <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tooltip</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/tooltip/demo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/tooltip/demo.component.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n    templateUrl: <span class=\"hljs-string\">'./demo.component.html'</span>,\n    styles: [<span class=\"hljs-string\">`p{ text-align:center;padding-top:30px}`</span>]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ToolTipDemoComponent  {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/tooltip/README.md":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/tooltip/README.md ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-tooltip\">vcl-tooltip</h1>\n<p>The tooltip directive provides a message or rich content that is displayed when the user hovers an element.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">&quot;Tooltip message&quot;</span>&gt;</span>\n  ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></pre>\n<p>Default tooltip placement is at the <code>top</code> of target element. To change tooltip placement set <code>vclTooltipPosition</code> value to either <code>right</code>, <code>left</code> or <code>bottom</code>.</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">vclTooltip</span>=<span class=\"hljs-string\">&quot;Tooltip message&quot;</span> <span class=\"hljs-attr\">vclTooltipPosition</span>=<span class=\"hljs-string\">&quot;right&quot;</span>&gt;</span>\n  ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></pre>\n<p>You can also use rich content.</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> [<span class=\"hljs-attr\">vclTooltip</span>]=<span class=\"hljs-string\">&quot;tt&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tooltip</span> #<span class=\"hljs-attr\">tt</span>=<span class=\"hljs-string\">&quot;vclTooltip&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>My content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tooltip</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcltooltip-attributes\">[vclTooltip] Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclTooltip</code></td>\n<td>string</td>\n<td></td>\n<td>Content displayed within the tooltip</td>\n</tr>\n<tr>\n<td><code>vclTooltipPosition</code></td>\n<td>string</td>\n<td>top</td>\n<td>Placement of the tooltip</td>\n</tr>\n<tr>\n<td><code>vclTooltipArrowPointer</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Whether to show the tooltip&apos;s arrow pointer</td>\n</tr>\n<tr>\n<td><code>vclTooltipShowDelay</code></td>\n<td>number</td>\n<td>0</td>\n<td>Delay before showing the tooltip after hovering the element</td>\n</tr>\n<tr>\n<td><code>vclTooltipHideDelay</code></td>\n<td>number</td>\n<td>0</td>\n<td>Delay before hiding the tooltip after the element loses hover</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-tooltip-demo-module.js.map