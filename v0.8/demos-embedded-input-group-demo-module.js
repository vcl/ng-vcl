(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-embedded-input-group-demo-module"],{

/***/ "./demo/app/demos/embedded-input-group/demo.component.html":
/*!*****************************************************************!*\
  !*** ./demo/app/demos/embedded-input-group/demo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nIcon on the left\n<vcl-embedded-input-group>\n  <vcl-icon vclPrepend icon=\"fas:search\"></vcl-icon>\n  <input vclInput placeholder=\"Postcode, City, Name of the Workshop\" />\n</vcl-embedded-input-group>\n\nicon on the right\n<vcl-embedded-input-group>\n  <input vclInput placeholder=\"Postcode, City, Name of the Workshop\" />\n  <vcl-icon vclAppend icon=\"fas:search\"></vcl-icon>\n</vcl-embedded-input-group>\n\nButton on the right\n<vcl-embedded-input-group>\n  <input vclInput />\n  <button vcl-square-button vclAppend (click)=\"someAction($event)\">\n    <vcl-icon [icon]=\"'fas:times-circle'\"></vcl-icon>\n  </button>\n</vcl-embedded-input-group>\n\nIcon on the left and button on the right\n<vcl-embedded-input-group>\n  <vcl-icon vclPrepend icon=\"fas:cog\"></vcl-icon>\n  <input vclInput />\n  <button vcl-square-button vclAppend (click)=\"someAction($event)\">\n    <vcl-icon [icon]=\"'fas:times-circle'\"></vcl-icon>\n  </button>\n</vcl-embedded-input-group>\n\nButton on the left and right\n<vcl-embedded-input-group>\n  <button vcl-square-button vclPrepend (click)=\"someAction($event)\">\n    <vcl-icon [icon]=\"'fas:cog'\"></vcl-icon>\n  </button>\n  <input vclInput />\n  <button vcl-square-button vclAppend (click)=\"someAction($event)\">\n    <vcl-icon [icon]=\"'fas:times-circle'\"></vcl-icon>\n  </button>\n</vcl-embedded-input-group>\n\nCombined with Input-group\n<div class=\"vclInputGroup\">\n  <vcl-embedded-input-group>\n    <vcl-icon vclPrepend icon=\"fas:cog\"></vcl-icon>\n    <input vclInput />\n    <button vcl-square-button vclAppend (click)=\"someAction($event)\">\n      <vcl-icon [icon]=\"'fas:times-circle'\"></vcl-icon>\n    </button>\n  </vcl-embedded-input-group>\n  <div class=\"vclInputGroupButton\">\n    <button vcl-button class=\"vclButton\" (click)=\"someAction($event)\">GO</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/embedded-input-group/demo.component.ts":
/*!***************************************************************!*\
  !*** ./demo/app/demos/embedded-input-group/demo.component.ts ***!
  \***************************************************************/
/*! exports provided: EmbeddedInputGroupDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupDemoComponent", function() { return EmbeddedInputGroupDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmbeddedInputGroupDemoComponent = /** @class */ (function () {
    function EmbeddedInputGroupDemoComponent() {
    }
    EmbeddedInputGroupDemoComponent.prototype.someAction = function (event) { console.log(event); };
    EmbeddedInputGroupDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/embedded-input-group/demo.component.html")
        })
    ], EmbeddedInputGroupDemoComponent);
    return EmbeddedInputGroupDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/embedded-input-group/demo.module.ts":
/*!************************************************************!*\
  !*** ./demo/app/demos/embedded-input-group/demo.module.ts ***!
  \************************************************************/
/*! exports provided: demo, EmbeddedInputGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupDemoModule", function() { return EmbeddedInputGroupDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/embedded-input-group/demo.component.ts");







function demo() {
    return {
        label: 'Embedded Input Group',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/embedded-input-group/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/embedded-input-group/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/embedded-input-group/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/embedded-input-group/demo.component.ts")
            },
        },
    };
}
var EmbeddedInputGroupDemoModule = /** @class */ (function () {
    function EmbeddedInputGroupDemoModule() {
    }
    EmbeddedInputGroupDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLInputModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIcogramModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIconModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLEmbeddedInputGroupModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupDemoComponent"]]
        })
    ], EmbeddedInputGroupDemoModule);
    return EmbeddedInputGroupDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/embedded-input-group/demo.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/embedded-input-group/demo.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nIcon on the left\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Postcode, City, Name of the Workshop\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nicon on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Postcode, City, Name of the Workshop\"</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclAppend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nButton on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclAppend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nIcon on the left and button on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:cog\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclAppend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nButton on the left and right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclPrepend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:cog'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclAppend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nCombined with Input-group\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclInputGroup\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:cog\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclAppend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclInputGroupButton\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclButton\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"someAction($event)\"</span>&gt;</span>GO<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/embedded-input-group/demo.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/embedded-input-group/demo.component.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> EmbeddedInputGroupDemoComponent {\n  someAction(event: <span class=\"hljs-built_in\">any</span>): <span class=\"hljs-built_in\">void</span> { <span class=\"hljs-built_in\">console</span>.log(event); }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/embedded-input-group/README.md":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/embedded-input-group/README.md ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-embedded-input-group\">vcl-embedded-input-group</h1>\n<p>Adds the possibility to prepend and append icons or buttons inside of input fields.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\">\nInput with icon on the left\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:search&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;placeholder text&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nInput with icon on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;Postcode, City, Name of the Workshop&quot;</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclApppend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:times-circle&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nInput with button on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclApppend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;someAction($event)&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:times-circle&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\nInput with icon on the left and button on the right\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">&quot;fas:cog&quot;</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">&quot;fas:times-circle&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:search&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-square-button</span> <span class=\"hljs-attr\">vclApppend</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;someAction($event)&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:times-circle&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span></pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-embedded-input-group-demo-module.js.map