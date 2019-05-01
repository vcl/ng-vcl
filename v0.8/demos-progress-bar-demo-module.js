(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-progress-bar-demo-module"],{

/***/ "./demo/app/demos/progress-bar/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/progress-bar/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-progress-bar [value]=\"80\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]=\"10\" [maxValue]=\"20\" [value]=\"15\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]=\"10\" [maxValue]=\"20\" [value]=\"30\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]=\"40\" [secondaryValue]=\"60\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]=\"true\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]=\"true\" [speed]=\"5\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]=\"40\" [indeterminate]=\"true\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]=\"110\" [indeterminate]=\"true\"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]=\"value$ | async\" [maxValue]=\"1000\"></vcl-progress-bar>\n"

/***/ }),

/***/ "./demo/app/demos/progress-bar/demo.component.ts":
/*!*******************************************************!*\
  !*** ./demo/app/demos/progress-bar/demo.component.ts ***!
  \*******************************************************/
/*! exports provided: ProgressBarDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoComponent", function() { return ProgressBarDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProgressBarDemoComponent = /** @class */ (function () {
    function ProgressBarDemoComponent() {
        this.value$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["range"])(0, 1000), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(50)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var x = _a[0];
            return x;
        }));
    }
    ProgressBarDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/progress-bar/demo.component.html")
        })
    ], ProgressBarDemoComponent);
    return ProgressBarDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/progress-bar/demo.module.ts":
/*!****************************************************!*\
  !*** ./demo/app/demos/progress-bar/demo.module.ts ***!
  \****************************************************/
/*! exports provided: demo, ProgressBarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoModule", function() { return ProgressBarDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/progress-bar/demo.component.ts");







function demo() {
    return {
        label: 'Progress-Bar',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/progress-bar/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/progress-bar/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/progress-bar/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/progress-bar/demo.component.ts")
            }
        }
    };
}
var ProgressBarDemoModule = /** @class */ (function () {
    function ProgressBarDemoModule() {
    }
    ProgressBarDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLProgressBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarDemoComponent"]]
        })
    ], ProgressBarDemoModule);
    return ProgressBarDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/progress-bar/demo.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/progress-bar/demo.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"80\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">minValue</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">maxValue</span>]=<span class=\"hljs-string\">\"20\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"15\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">minValue</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">maxValue</span>]=<span class=\"hljs-string\">\"20\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"30\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"40\"</span> [<span class=\"hljs-attr\">secondaryValue</span>]=<span class=\"hljs-string\">\"60\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">indeterminate</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">indeterminate</span>]=<span class=\"hljs-string\">\"true\"</span> [<span class=\"hljs-attr\">speed</span>]=<span class=\"hljs-string\">\"5\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"40\"</span> [<span class=\"hljs-attr\">indeterminate</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"110\"</span> [<span class=\"hljs-attr\">indeterminate</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-progress-bar</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"value$ | async\"</span> [<span class=\"hljs-attr\">maxValue</span>]=<span class=\"hljs-string\">\"1000\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-progress-bar</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/progress-bar/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/progress-bar/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { zip, range, interval } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { map } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs/operators'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ProgressBarDemoComponent {\n  value$ = zip(range(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1000</span>), interval(<span class=\"hljs-number\">50</span>)).pipe(map(<span class=\"hljs-function\">(<span class=\"hljs-params\">[x]</span>) =&gt;</span> x));\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/progress-bar/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/progress-bar/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-progress-bar\">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-progress-bar-demo-module.js.map