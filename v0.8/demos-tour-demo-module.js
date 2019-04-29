(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-tour-demo-module"],{

/***/ "./demo/app/demos/tour/demo.component.html":
/*!*************************************************!*\
  !*** ./demo/app/demos/tour/demo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"vlcContentArea\">\n    <vcl-tour-overlay></vcl-tour-overlay>\n    \n    <div class=\"vclLayoutVertical\">\n        <div>\n            <button type=\"button\" class=\"vclButton\" (click)=\"startTour()\">\n                <div class=\"vclIcogram\">\n                    <span class=\"vclText\">Start tour</span>\n                </div>\n            </button>\n        </div>   \n        <div>\n            <div class=\"vclGridSpan-25p\">\n                <h1 class=\"vclContainer\" #heading1>Heading</h1>\n            </div>\n            <div class=\"vclGridSpan-25p\">\n                <br>\n                <p class=\"vclContainer\" #heading2>Heading</p>\n            </div>\n            <div class=\"vclGridSpan-25p\">\n                <br>\n                <p class=\"vclContainer\" #heading3>Heading</p>\n            </div>\n            <div class=\"vclGridSpan-25p\">\n                <br>\n                <p class=\"vclContainer\" #heading4>Heading</p>\n            </div>\n        </div>\n    </div>\n\n    <vcl-tour-step\n        [target]=\"heading1\"\n        title=\"Step Title\">\n            Demo tour first step with title\n    </vcl-tour-step>\n\n    <vcl-tour-step \n        [target]=\"heading2\"\n        [offsetY]=\"50\">\n            Demo tour second step no title with Y offset\n    </vcl-tour-step>\n    \n    <vcl-tour-step\n        [target]=\"heading3\"\n        [originX]=\"'center'\"\n        [originY]=\"'top'\"\n        [overlayX]=\"'center'\"\n        [overlayY]=\"'bottom'\">\n            Demo tour third step top position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]=\"heading4\"\n        [originX]=\"'start'\"\n        [overlayX]=\"'end'\"\n        [originY]=\"'center'\"\n        [overlayY]=\"'center'\">\n            Demo tour fourth step left position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]=\"heading2\"\n        [originX]=\"'end'\"\n        [overlayX]=\"'start'\"\n        [originY]=\"'center'\"\n        [overlayY]=\"'center'\">\n            Demo tour fifth step right position\n    </vcl-tour-step>\n    \n</section>\n"

/***/ }),

/***/ "./demo/app/demos/tour/demo.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/tour/demo.component.ts ***!
  \***********************************************/
/*! exports provided: TourDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourDemoComponent", function() { return TourDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");



var TourDemoComponent = /** @class */ (function () {
    function TourDemoComponent(tour) {
        this.tour = tour;
    }
    TourDemoComponent.prototype.startTour = function () {
        this.tour.initialize();
        this.tour.start();
    };
    TourDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/tour/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["TourService"]])
    ], TourDemoComponent);
    return TourDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/tour/demo.module.ts":
/*!********************************************!*\
  !*** ./demo/app/demos/tour/demo.module.ts ***!
  \********************************************/
/*! exports provided: demo, TourDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourDemoModule", function() { return TourDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/tour/demo.component.ts");







function demo() {
    return {
        label: 'Tour',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["TourDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/tour/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/tour/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/tour/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/tour/demo.component.ts")
            }
        }
    };
}
var TourDemoModule = /** @class */ (function () {
    function TourDemoModule() {
    }
    TourDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLTourModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLNavigationModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["TourDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["TourDemoComponent"]]
        })
    ], TourDemoModule);
    return TourDemoModule;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"vclArticleHeader\"> {{title}}</h2>\n<div *ngIf=\"tabs.length>0\">\n  <vcl-tab-nav borders=true>\n    <vcl-tab *ngFor=\"let tab of tabs\">\n      <ng-template vcl-tab-label>{{tab.name}}</ng-template>\n      <wormhole *ngIf=\"tab.type==='component'\" [connect]=\"tab.content\"></wormhole>\n      <div *ngIf=\"tab.type==='text'\"><pre>{{tab.content}}</pre></div>\n      <div *ngIf=\"tab.type==='html'\" [innerHtml]=\"tab.content\"></div>\n      <div *ngIf=\"tab.type==='md'\"   class=\"markdown-body\"  [innerHtml]=\"tab.content\"></div>\n      <pre *ngIf=\"tab.type==='pre'\"  [innerHtml]=\"tab.content\"></pre>\n    </vcl-tab>\n  </vcl-tab-nav>\n</div>\n"

/***/ }),

/***/ "./demo/app/modules/demo/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.ts ***!
  \*************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var DemoComponent = /** @class */ (function () {
    function DemoComponent(activatedRoute, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.tabs = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.activatedRoute.snapshot.data['demo']();
        if (data) {
            this.title = data.label;
            if (data.tabs) {
                this.tabs = Object.keys(data.tabs).map(function (key) {
                    var type;
                    var content;
                    if (typeof data.tabs[key] === 'object' && data.tabs[key]) {
                        type = data.tabs[key].type;
                        if (type === 'pre' || type === 'html' || type === 'md') {
                            content = _this.sanitizer.bypassSecurityTrustHtml(data.tabs[key].content);
                        }
                        else {
                            content = data.tabs[key].content;
                        }
                    }
                    else if (typeof data.tabs[key] === 'function') {
                        type = 'component';
                        content = data.tabs[key];
                    }
                    return {
                        name: key,
                        content: content,
                        type: type
                    };
                });
            }
            else {
                this.tabs = [];
            }
        }
        else {
            this.title = 'ng-vcl';
            this.tabs = [];
        }
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/modules/demo/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/modules/demo/demo.module.ts ***!
  \**********************************************/
/*! exports provided: DemoComponent, DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.component */ "./demo/app/modules/demo/demo.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return _demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]; });







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLTabNavModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLWormholeModule"]
            ],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/tour/demo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/tour/demo.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">section</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vlcContentArea\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-overlay</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-overlay</span>&gt;</span>\n    \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutVertical\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"button\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclButton\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"startTour()\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclIcogram\"</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclText\"</span>&gt;</span>Start tour<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>   \n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-25p\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclContainer\"</span> #<span class=\"hljs-attr\">heading1</span>&gt;</span>Heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-25p\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclContainer\"</span> #<span class=\"hljs-attr\">heading2</span>&gt;</span>Heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-25p\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclContainer\"</span> #<span class=\"hljs-attr\">heading3</span>&gt;</span>Heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGridSpan-25p\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclContainer\"</span> #<span class=\"hljs-attr\">heading4</span>&gt;</span>Heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-step</span>\n        [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"heading1\"</span>\n        <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"Step Title\"</span>&gt;</span>\n            Demo tour first step with title\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-step</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-step</span> \n        [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"heading2\"</span>\n        [<span class=\"hljs-attr\">offsetY</span>]=<span class=\"hljs-string\">\"50\"</span>&gt;</span>\n            Demo tour second step no title with Y offset\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-step</span>&gt;</span>\n    \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-step</span>\n        [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"heading3\"</span>\n        [<span class=\"hljs-attr\">originX</span>]=<span class=\"hljs-string\">\"'center'\"</span>\n        [<span class=\"hljs-attr\">originY</span>]=<span class=\"hljs-string\">\"'top'\"</span>\n        [<span class=\"hljs-attr\">overlayX</span>]=<span class=\"hljs-string\">\"'center'\"</span>\n        [<span class=\"hljs-attr\">overlayY</span>]=<span class=\"hljs-string\">\"'bottom'\"</span>&gt;</span>\n            Demo tour third step top position\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-step</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-step</span>\n        [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"heading4\"</span>\n        [<span class=\"hljs-attr\">originX</span>]=<span class=\"hljs-string\">\"'start'\"</span>\n        [<span class=\"hljs-attr\">overlayX</span>]=<span class=\"hljs-string\">\"'end'\"</span>\n        [<span class=\"hljs-attr\">originY</span>]=<span class=\"hljs-string\">\"'center'\"</span>\n        [<span class=\"hljs-attr\">overlayY</span>]=<span class=\"hljs-string\">\"'center'\"</span>&gt;</span>\n            Demo tour fourth step left position\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-step</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-step</span>\n        [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"heading2\"</span>\n        [<span class=\"hljs-attr\">originX</span>]=<span class=\"hljs-string\">\"'end'\"</span>\n        [<span class=\"hljs-attr\">overlayX</span>]=<span class=\"hljs-string\">\"'start'\"</span>\n        [<span class=\"hljs-attr\">originY</span>]=<span class=\"hljs-string\">\"'center'\"</span>\n        [<span class=\"hljs-attr\">overlayY</span>]=<span class=\"hljs-string\">\"'center'\"</span>&gt;</span>\n            Demo tour fifth step right position\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-step</span>&gt;</span>\n    \n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">section</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/tour/demo.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/tour/demo.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { TourService, TourOptions } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> TourDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">public</span> tour: TourService</span>) { }\n\n  <span class=\"hljs-keyword\">public</span> startTour() {\n    <span class=\"hljs-keyword\">this</span>.tour.initialize();\n    <span class=\"hljs-keyword\">this</span>.tour.start();\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/tour/README.md":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/tour/README.md ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-tour-step-and-vcl-tour-overlay\">vcl-tour-step and vcl-tour-overlay</h1>\n<p>Simple and customizable application tour component with overlay.</p>\n<p>Note: For the highlight to work, the target element has to have a background-color.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLTourModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLTourModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{\n\n  <span class=\"hljs-keyword\">constructor</span>(public tour: TourService){ }\n\n  startTour() {\n    <span class=\"hljs-keyword\">this</span>.tour.start();\n  }\n}</pre>\n<pre class=\"hljs\"><span class=\"hljs-comment\">&lt;!-- Overlay element inserted on top of the page--&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-overlay</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-overlay</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Start tour --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">&quot;button&quot;</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;startTour()&quot;</span>&gt;</span>Begin tour<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Some application element --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">&quot;foo&quot;</span>&gt;</span>Some element<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tour-step</span> <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">&quot;#foo&quot;</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">&quot;some title&quot;</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- ANY HTML HERE --&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tour-step</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-tour-step-attributes\">vcl-tour-step attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output debug information</td>\n</tr>\n<tr>\n<td><code>debugPopover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output <code>vcl-tour-step</code>&apos;s <code>vcl-popover</code> debug information</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>Tour step title</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>string  ElementRef  Element</td>\n<td></td>\n<td>The target can be a selector, element or ElementRef instance</td>\n</tr>\n<tr>\n<td><code>order</code></td>\n<td>number</td>\n<td></td>\n<td>The order number in which tour step should be shown, necessary if same element used multiple times</td>\n</tr>\n<tr>\n<td><code>targetX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Center</td>\n<td>Position of the target-side</td>\n</tr>\n<tr>\n<td><code>attachmentX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Center</td>\n<td>Position of the popover-side</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td></td>\n<td><code>vcl-popover</code>&apos;s AttachmentX offset</td>\n</tr>\n<tr>\n<td><code>targetY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Bottom</td>\n<td>Position of the target-vertical</td>\n</tr>\n<tr>\n<td><code>attachmentY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Top</td>\n<td>Position of the popover-vertical</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td></td>\n<td><code>vcl-popover</code>&apos;s AttachmentY offset</td>\n</tr>\n</tbody></table>\n<h4 id=\"tourservice-events\">TourService events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>end$</code></td>\n<td>true</td>\n<td>Event is emitted when the tour is finished or ended</td>\n</tr>\n<tr>\n<td><code>tourComponent$</code></td>\n<td>TourComponent</td>\n<td>Current <code>TourComponent</code> is emitted on each <code>vcl-tour-step</code></td>\n</tr>\n</tbody></table>\n<h3 id=\"tourservice-default-options\">TourService default options</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output debug information</td>\n</tr>\n<tr>\n<td><code>debugTour</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output every <code>vcl-tour-step</code> debug information</td>\n</tr>\n<tr>\n<td><code>debugPopover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output every <code>vcl-tour-step</code>&apos;s <code>vcl-popover</code> debug information</td>\n</tr>\n<tr>\n<td><code>useOrder</code></td>\n<td>boolean</td>\n<td>false</td>\n<td><code>vcl-tour-step</code>&apos;s <code>@Input() order</code> is not used and instead the service relies on the DOM element creation order</td>\n</tr>\n<tr>\n<td><code>elementsDisabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Disabling highlightedElement (click) wont work</td>\n</tr>\n<tr>\n<td><code>applyRelative</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>zIndex</code></td>\n<td>number</td>\n<td>20</td>\n<td>Used <code>z-index</code> for <code>vcl-tour-step</code> components</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td>0</td>\n<td>Used AttachmentX offset for <code>vcl-tour-step</code> components</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td>0</td>\n<td>Used AttachmentY offset for <code>vcl-tour-step</code> components</td>\n</tr>\n</tbody></table>\n<h4 id=\"custom-options-usage\">Custom options usage</h4>\n<pre class=\"hljs\"> startTour() {\n    <span class=\"hljs-keyword\">this</span>.tour.initialize({<span class=\"hljs-attr\">elementsDisabled</span>: <span class=\"hljs-literal\">false</span>}); <span class=\"hljs-comment\">// TourOptions</span>\n    <span class=\"hljs-keyword\">this</span>.tour.start();\n  }</pre>\n<p>export class TourOptions {<br>  debug: boolean = false;<br>  debugTour: boolean = false;<br>  debugPopover: boolean = false;</p>\n<p>  useOrder: boolean = false;<br>  elementsDisabled: boolean = true;<br>  applyRelative: boolean = true;<br>  dismissOnOverlay: boolean = false;</p>\n<p>  zIndex: number = 20;</p>\n<p>  previousLabel: string = &apos;Previous&apos;;<br>  nextLabel: string = &apos;Next&apos;;<br>  exitLabel: string = &apos;Exit&apos;;</p>\n<p>  previousIcon: string = &apos;fas fa-chevron-left&apos;;<br>  nextIcon: string = &apos;fas fa-chevron-right&apos;;<br>  exitIcon: string = &apos;fas fa-close&apos;;</p>\n<p>  buttonClass: string = &apos;&apos;;<br>}</p>\n"

/***/ })

}]);
//# sourceMappingURL=demos-tour-demo-module.js.map