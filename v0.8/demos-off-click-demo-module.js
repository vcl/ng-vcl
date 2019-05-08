(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-off-click-demo-module"],{

/***/ "./demo/app/demos/off-click/demo.component.html":
/*!******************************************************!*\
  !*** ./demo/app/demos/off-click/demo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (offClick)=\"offClick()\" style=\"border: 2px solid;background-color:red;width:300px;height:300px\">\n  DIV 1\n  <br>\n  Click somewhere outside to trigger an offClick\n  <div style=\"border: 1px solid;background-color:green;width:50%;margin:auto; height:100px\">\n    DIV 2 \n    <br>\n    This is a subelement of DIV 1 \n  </div>\n</div>\n<br>\n<div *ngIf=\"clicks > 0\">offClicks triggered: {{clicks}}</div>\n<div *ngIf=\"clicks === 0\">Click anywhere to trigger an offClick</div>\n  \n"

/***/ }),

/***/ "./demo/app/demos/off-click/demo.component.ts":
/*!****************************************************!*\
  !*** ./demo/app/demos/off-click/demo.component.ts ***!
  \****************************************************/
/*! exports provided: OffClickDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffClickDemoComponent", function() { return OffClickDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffClickDemoComponent = /** @class */ (function () {
    function OffClickDemoComponent() {
        this.clicks = 0;
    }
    OffClickDemoComponent.prototype.offClick = function () {
        this.clicks++;
    };
    OffClickDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/off-click/demo.component.html")
        })
    ], OffClickDemoComponent);
    return OffClickDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/off-click/demo.module.ts":
/*!*************************************************!*\
  !*** ./demo/app/demos/off-click/demo.module.ts ***!
  \*************************************************/
/*! exports provided: demo, OffClickDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffClickDemoModule", function() { return OffClickDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/off-click/demo.component.ts");







function demo() {
    return {
        label: 'Off Click',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["OffClickDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/off-click/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/off-click/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/off-click/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/off-click/demo.component.ts")
            }
        }
    };
}
var OffClickDemoModule = /** @class */ (function () {
    function OffClickDemoModule() {
    }
    OffClickDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLOffClickModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["OffClickDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["OffClickDemoComponent"]]
        })
    ], OffClickDemoModule);
    return OffClickDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/off-click/demo.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/off-click/demo.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> (<span class=\"hljs-attr\">offClick</span>)=<span class=\"hljs-string\">\"offClick()\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"border: 2px solid;background-color:red;width:300px;height:300px\"</span>&gt;</span>\n  DIV 1\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n  Click somewhere outside to trigger an offClick\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"border: 1px solid;background-color:green;width:50%;margin:auto; height:100px\"</span>&gt;</span>\n    DIV 2 \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n    This is a subelement of DIV 1 \n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"clicks &gt; 0\"</span>&gt;</span>offClicks triggered: {{clicks}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"clicks === 0\"</span>&gt;</span>Click anywhere to trigger an offClick<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  \n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/off-click/demo.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/off-click/demo.component.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> OffClickDemoComponent  {\n\n  clicks = <span class=\"hljs-number\">0</span>;\n\n  offClick() {\n    <span class=\"hljs-keyword\">this</span>.clicks++;\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/off-click/README.md":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/off-click/README.md ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"offclick-directive\">offClick directive</h1>\n<p>The offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  </p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLOffClickModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLOffClickModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<p>offClick() is called when the click`s source is not DIV1 or DIV2  </p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> (<span class=\"hljs-attr\">offClick</span>)=<span class=\"hljs-string\">&quot;offClick()&quot;</span>&gt;</span>\n  DIV1\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    DIV2\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-off-click-demo-module.js.map