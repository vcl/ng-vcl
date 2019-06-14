(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-select-demo-module"],{

/***/ "./demo/app/demos/select/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/demos/select/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>single-select</h3>\n<vcl-select>\n  <vcl-select-list [(value)]=\"value1\">\n    <vcl-select-list-item label=\" - \">\n      <vcl-select-list-label>None</vcl-select-list-label>\n    </vcl-select-list-item>\n    <vcl-select-list-header>Europe</vcl-select-list-header>\n    <vcl-select-list-item value=\"gr\">\n      <vcl-select-list-label>Greece</vcl-select-list-label>\n      <vcl-select-list-sublabel>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-select-list-sublabel>\n    </vcl-select-list-item>\n    <vcl-select-list-item value=\"fr\">\n      <vcl-select-list-label>France</vcl-select-list-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value=\"de\">\n      <vcl-select-list-label>Germany</vcl-select-list-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value=\"gb\" label=\"United Kingdom\">\n      <vcl-select-list-label>The United Kingdom of Great Britain and Northern Ireland</vcl-select-list-label>\n    </vcl-select-list-item>\n    <vcl-select-list-header>Asia</vcl-select-list-header>\n    <vcl-select-list-item value=\"jp\">\n      <vcl-select-list-label>Japan</vcl-select-list-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value=\"cn\">\n      <vcl-select-list-label>China</vcl-select-list-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value=\"th\">\n      <vcl-select-list-label>Thailand</vcl-select-list-label>\n    </vcl-select-list-item>\n  </vcl-select-list>\n</vcl-select>\n\n<p> Selected value: {{value1}}</p>\n\n<br>\n\n<h3>multi-select</h3>\n<vcl-select placeholder=\"Select items\">\n  <vcl-select-list [(value)]=\"value2\" selectionMode=\"multiple\" >\n    <vcl-select-list-item *ngFor=\"let item of items\" [value]=\"item.value\">\n      <vcl-select-list-label>{{item.label}}</vcl-select-list-label>\n    </vcl-select-list-item>\n  </vcl-select-list>\n</vcl-select>\n\n<p> Selected values: {{value2}}</p>\n"

/***/ }),

/***/ "./demo/app/demos/select/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/demos/select/demo.component.ts ***!
  \*************************************************/
/*! exports provided: SelectDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoComponent", function() { return SelectDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent() {
        this.value1 = undefined;
        this.value2 = [];
        this.items = Array.from(Array(30).keys()).map(function (i) { return ({
            label: 'item ' + (i + 1),
            value: i + 1
        }); });
    }
    SelectDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/select/demo.component.html")
        })
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/select/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/demos/select/demo.module.ts ***!
  \**********************************************/
/*! exports provided: demo, SelectDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoModule", function() { return SelectDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/select/demo.component.ts");









function demo() {
    return {
        label: 'Select',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_8__["SelectDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/select/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/select/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/select/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/select/demo.component.ts")
            }
        }
    };
}
var SelectDemoModule = /** @class */ (function () {
    function SelectDemoModule() {
    }
    SelectDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLSelectModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_8__["SelectDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_8__["SelectDemoComponent"]]
        })
    ], SelectDemoModule);
    return SelectDemoModule;
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
        var data = this.activatedRoute.snapshot.data.demo();
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/select/demo.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/select/demo.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>single-select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\" - \"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>None<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-header</span>&gt;</span>Europe<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-header</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"gr\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Greece<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-sublabel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"fr\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>France<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"de\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Germany<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"gb\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"United Kingdom\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-header</span>&gt;</span>Asia<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-header</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"jp\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Japan<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"cn\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>China<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"th\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Thailand<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span> Selected value: {{value1}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>multi-select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Select items\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"value2\"</span> <span class=\"hljs-attr\">selectionMode</span>=<span class=\"hljs-string\">\"multiple\"</span> &gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">\"let item of items\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"item.value\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>{{item.label}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span> Selected values: {{value2}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/select/demo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/select/demo.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> SelectDemoComponent {\n\n  value1 = <span class=\"hljs-literal\">undefined</span>;\n  value2 = [];\n\n  items = <span class=\"hljs-built_in\">Array</span>.from(<span class=\"hljs-built_in\">Array</span>(<span class=\"hljs-number\">30</span>).keys()).map(<span class=\"hljs-function\"><span class=\"hljs-params\">i</span> =&gt;</span> ({\n    label: <span class=\"hljs-string\">'item '</span> + (i + <span class=\"hljs-number\">1</span>),\n    value: i + <span class=\"hljs-number\">1</span>\n  }));\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/select/README.md":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/select/README.md ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-select\">vcl-select</h1>\n<p>A select control. Utilizes the select-list to render a list of selectable items in a dropdown.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">&quot;value&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot; -&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>[Clear selection]<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">&quot;1&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">&quot;2&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">&quot;3&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>Item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select-list</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-select-attributes\">vcl-select attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected option(s)</td>\n</tr>\n<tr>\n<td><code>placeholder</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>&quot;single&quot; | &quot;multiple&quot;</td>\n<td>&quot;single&quot;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the select</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disabled the control when true</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-select-events\">vcl-select events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when the selected options change</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-select-demo-module.js.map