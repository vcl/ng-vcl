(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-busy-indicator-demo-module"],{

/***/ "./demo/app/demos/busy-indicator/demo.component.html":
/*!***********************************************************!*\
  !*** ./demo/app/demos/busy-indicator/demo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Simple busy indicator</h3>\n<vcl-busy-indicator>Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Horizontal busy indicator</h3>\n<vcl-busy-indicator [layout]=\"'horizontal'\" class=\"huge\">Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy indicator with text</h3>\n<vcl-busy-indicator>\n    Loading...\n  </vcl-busy-indicator>\n<br><br>\n\n<h3>Indicator using icon font</h3>\n<vcl-busy-indicator  icon=\"fas fa-circle-notch fa-spin fa-3x fa-fw\"></vcl-busy-indicator>\n  <br><br>\n\n<h3>Indicator using custom image</h3>\n<vcl-busy-indicator imageSrc=\"http://www.polidoor.com/assets/img/loading.gif\">\n  Loading...\n</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy container</h3>\n<div [vcl-busy-indicator-cover]=\"isBusy\" class=\"vclContainer vclLayoutHorizontal vclLayoutCenterJustified\" style=\"height:15em\">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  <button vcl-button (click)=\"makeBusy()\">Make container busy for 3 secs</button>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/busy-indicator/demo.component.ts":
/*!*********************************************************!*\
  !*** ./demo/app/demos/busy-indicator/demo.component.ts ***!
  \*********************************************************/
/*! exports provided: BusyDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyDemoComponent", function() { return BusyDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BusyDemoComponent = /** @class */ (function () {
    function BusyDemoComponent() {
        this.isBusy = false;
    }
    BusyDemoComponent.prototype.makeBusy = function () {
        var _this = this;
        this.isBusy = true;
        setTimeout(function () { return _this.isBusy = false; }, 3000);
    };
    BusyDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/busy-indicator/demo.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  "]
        })
    ], BusyDemoComponent);
    return BusyDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/busy-indicator/demo.module.ts":
/*!******************************************************!*\
  !*** ./demo/app/demos/busy-indicator/demo.module.ts ***!
  \******************************************************/
/*! exports provided: demo, BusyDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyDemoModule", function() { return BusyDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/busy-indicator/demo.component.ts");
/* harmony import */ var _ng_vcl_ng_vcl_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-vcl/ng-vcl/icon */ "./lib/ng-vcl/src/icon/index.ts");








function demo() {
    return {
        label: 'Busy Indicator',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["BusyDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/busy-indicator/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/busy-indicator/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/busy-indicator/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/busy-indicator/demo.component.ts")
            },
        }
    };
}
var BusyDemoModule = /** @class */ (function () {
    function BusyDemoModule() {
    }
    BusyDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl_icon__WEBPACK_IMPORTED_MODULE_7__["VCLIconModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLBusyIndicatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["BusyDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["BusyDemoComponent"]]
        })
    ], BusyDemoModule);
    return BusyDemoModule;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"vclArticleHeader\"> {{title}}</h2>\n<div *ngIf=\"tabs.length>0\">\n  <vcl-tab-nav borders=true>\n    <vcl-tab *ngFor=\"let tab of tabs\">\n      <vcl-tab-label>{{tab.name}}</vcl-tab-label>\n      <div *ngIf=\"tab.type==='component'\">\n        <ng-template [cdkPortalOutlet]=\"tab.content\"></ng-template>\n      </div>\n      <div *ngIf=\"tab.type==='text'\"><pre>{{tab.content}}</pre></div>\n      <div *ngIf=\"tab.type==='html'\" [innerHtml]=\"tab.content\"></div>\n      <div *ngIf=\"tab.type==='md'\"   class=\"markdown-body\"  [innerHtml]=\"tab.content\"></div>\n      <pre *ngIf=\"tab.type==='pre'\"  [innerHtml]=\"tab.content\"></pre>\n    </vcl-tab>\n  </vcl-tab-nav>\n</div>\n"

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
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");





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
                        content = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](data.tabs[key]);
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

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLTabNavModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]
            ],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/busy-indicator/demo.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/busy-indicator/demo.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Simple busy indicator<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>Loading...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Horizontal busy indicator<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span> [<span class=\"hljs-attr\">layout</span>]=<span class=\"hljs-string\">\"'horizontal'\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"huge\"</span>&gt;</span>Loading...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Busy indicator with text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n    Loading...\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Indicator using icon font<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span>  <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas fa-circle-notch fa-spin fa-3x fa-fw\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Indicator using custom image<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span> <span class=\"hljs-attr\">imageSrc</span>=<span class=\"hljs-string\">\"http://www.polidoor.com/assets/img/loading.gif\"</span>&gt;</span>\n  Loading...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Busy container<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> [<span class=\"hljs-attr\">vcl-busy-indicator-cover</span>]=<span class=\"hljs-string\">\"isBusy\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclContainer vclLayoutHorizontal vclLayoutCenterJustified\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"height:15em\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"makeBusy()\"</span>&gt;</span>Make container busy for 3 secs<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/busy-indicator/demo.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/busy-indicator/demo.component.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ViewEncapsulation } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n  encapsulation: ViewEncapsulation.None,\n  styles: [<span class=\"hljs-string\">`\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  `</span>]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> BusyDemoComponent {\n  isBusy = <span class=\"hljs-literal\">false</span>;\n\n  makeBusy() {\n    <span class=\"hljs-keyword\">this</span>.isBusy = <span class=\"hljs-literal\">true</span>;\n    setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> <span class=\"hljs-keyword\">this</span>.isBusy = <span class=\"hljs-literal\">false</span>, <span class=\"hljs-number\">3000</span>);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/busy-indicator/README.md":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/busy-indicator/README.md ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"busy-indicator\">Busy Indicator</h1>\n<h2 id=\"vcl-busy-indicator\">vcl-busy-indicator</h2>\n<p>An indicator to show that a lasting operation is currently in progress.</p>\n<h3 id=\"usage\">Usage</h3>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Loading&#x2026;<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas fa-circle-notch fa-spin fa-3x fa-fw&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-busy-indicator-attributes\">vcl-busy-indicator Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td>&quot;Loading&quot;</td>\n<td>Alternative icon</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td>&quot;Loading&quot;</td>\n<td>icon aria label</td>\n</tr>\n<tr>\n<td><code>imageHeight</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon height</td>\n</tr>\n<tr>\n<td><code>imageWidth</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon width</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>&quot;vertical&quot; or &quot;horizontal&quot;</td>\n<td>&quot;vertical&quot;</td>\n<td>The indicator direction</td>\n</tr>\n</tbody></table>\n<h2 id=\"vcl-busy-indicator-cover\">[vcl-busy-indicator-cover]</h2>\n<p>Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.</p>\n<h3 id=\"usage-1\">Usage</h3>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> [<span class=\"hljs-attr\">vcl-busy-indicator-cover</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n  This content will be covered by the layer\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></pre>\n<h3 id=\"api-1\">API</h3>\n<h4 id=\"vcl-busy-indicator-cover-attributes\">vcl-busy-indicator-cover Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vcl-busy-indicator-cover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Shows the layer when <code>true</code></td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-busy-indicator-demo-module.js.map