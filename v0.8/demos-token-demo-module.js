(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-token-demo-module"],{

/***/ "./demo/app/demos/token/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/token/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>single tokens</h3>\n<vcl-token>my token</vcl-token>\n<vcl-token [selected]=\"true\">my selected token</vcl-token>\n<vcl-token [removable]=\"true\" (remove)=\"onRemove($event)\">my removable token</vcl-token>\n<vcl-token [removable]=\"true\" (remove)=\"onRemove($event)\">my icon token</vcl-token>\n\n<br/>\n\n<h3>tokenlist</h3>\n<vcl-token-list [value]=\"[1]\" (valueChange)=\"onListChange($event);\">\n  <vcl-token [value]=\"1\">my token 1</vcl-token>\n  <vcl-token [value]=\"2\">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>selectable and removable tokenlist</h3>\n<vcl-token-list [value]=\"[1]\" [selectable]=\"true\" [removable]=\"true\" (valueChange)=\"onListChange($event);\">\n  <vcl-token [value]=\"1\">my token 1</vcl-token>\n  <vcl-token [value]=\"2\">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>tokeninput</h3>\n<vcl-token-input-container (tokensChange)=\"onInputChange($event);\">\n  <input vclInput vclTokenInput />\n  <!-- <input vclInput vcl-token-input /> -->\n</vcl-token-input-container>\n\n<h3>tokeninput (disabled)</h3>\n<vcl-token-input-container [disabled]=\"true\">\n  <input vclInput vclTokenInput />\n  <!-- <input vclInput vcl-token-input /> -->\n</vcl-token-input-container>\n"

/***/ }),

/***/ "./demo/app/demos/token/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/token/demo.component.ts ***!
  \************************************************/
/*! exports provided: TokenDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDemoComponent", function() { return TokenDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenDemoComponent = /** @class */ (function () {
    function TokenDemoComponent() {
    }
    TokenDemoComponent.prototype.onRemove = function (token) {
        console.log('onRemove', token);
    };
    TokenDemoComponent.prototype.onListChange = function (value) {
        console.log('onListChange', value);
    };
    TokenDemoComponent.prototype.onInputChange = function (value) {
        console.log('onInputChange', value);
    };
    TokenDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/token/demo.component.html")
        })
    ], TokenDemoComponent);
    return TokenDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/token/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/token/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, TokenDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDemoModule", function() { return TokenDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/token/demo.component.ts");








function demo() {
    return {
        label: 'Token',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["TokenDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/token/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/token/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/token/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/token/demo.component.ts")
            }
        }
    };
}
var TokenDemoModule = /** @class */ (function () {
    function TokenDemoModule() {
    }
    TokenDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLTokenModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["TokenDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["TokenDemoComponent"]]
        })
    ], TokenDemoModule);
    return TokenDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/token/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/token/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>single tokens<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span>&gt;</span>my token<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">selected</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>my selected token<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">removable</span>]=<span class=\"hljs-string\">\"true\"</span> (<span class=\"hljs-attr\">remove</span>)=<span class=\"hljs-string\">\"onRemove($event)\"</span>&gt;</span>my removable token<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">removable</span>]=<span class=\"hljs-string\">\"true\"</span> (<span class=\"hljs-attr\">remove</span>)=<span class=\"hljs-string\">\"onRemove($event)\"</span>&gt;</span>my icon token<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>tokenlist<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-list</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"[1]\"</span> (<span class=\"hljs-attr\">valueChange</span>)=<span class=\"hljs-string\">\"onListChange($event);\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"1\"</span>&gt;</span>my token 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span>my token 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-list</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>selectable and removable tokenlist<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-list</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"[1]\"</span> [<span class=\"hljs-attr\">selectable</span>]=<span class=\"hljs-string\">\"true\"</span> [<span class=\"hljs-attr\">removable</span>]=<span class=\"hljs-string\">\"true\"</span> (<span class=\"hljs-attr\">valueChange</span>)=<span class=\"hljs-string\">\"onListChange($event);\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"1\"</span>&gt;</span>my token 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2\"</span>&gt;</span>my token 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-list</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>tokeninput<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-input-container</span> (<span class=\"hljs-attr\">tokensChange</span>)=<span class=\"hljs-string\">\"onInputChange($event);\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">vclTokenInput</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- &lt;input vclInput vcl-token-input /&gt; --&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-input-container</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>tokeninput (disabled)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-input-container</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">vclTokenInput</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- &lt;input vclInput vcl-token-input /&gt; --&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-input-container</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/token/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/token/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> TokenDemoComponent {\n\n  onRemove(token) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onRemove'</span>, token);\n  }\n\n  onListChange(value) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onListChange'</span>, value);\n  }\n\n  onInputChange(value) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onInputChange'</span>, value);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/token/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/token/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-token\">vcl-token</h1>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLTokenModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLTokenModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<h2 id=\"single-token\">single token</h2>\n<pre class=\"hljs\"><code>&lt;vcl-token&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id=\"single-selected-token\">single selected token</h2>\n<pre class=\"hljs\"><code>&lt;vcl-token [selected]=&quot;true&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id=\"single-removable-token\">single removable token</h2>\n<pre class=\"hljs\"><code>&lt;vcl-token [removable]=&quot;true&quot; (remove)=&quot;onRemove()&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id=\"token-list\">token-list</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-list</span> [<span class=\"hljs-attr\">selectable</span>]=<span class=\"hljs-string\">&quot;true&quot;</span> (<span class=\"hljs-attr\">change</span>)=<span class=\"hljs-string\">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">selected</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>mytoken 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token</span> [<span class=\"hljs-attr\">selected</span>]=<span class=\"hljs-string\">&quot;false&quot;</span>&gt;</span>mytoken 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-list</span>&gt;</span></pre>\n<h2 id=\"token-insert\">token-insert</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-input-container</span> (<span class=\"hljs-attr\">tokensChange</span>)=<span class=\"hljs-string\">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">vclTokenInput</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-input-container</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-token-attributes\">vcl-token attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>token value</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the token is highlighted</td>\n</tr>\n<tr>\n<td><code>removable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the remove-cross is shown</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-token-events\">vcl-token events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>remove</code></td>\n<td></td>\n<td>called when the remove-button is pressed</td>\n</tr>\n</tbody></table>\n<h4 id=\"token-list-attributes\">token-list attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>any[]</td>\n<td>any[]</td>\n<td>The values of the selected tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n</tbody></table>\n<h4 id=\"token-list-events\">token-list events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>string[]</td>\n<td>called when the selection of token changes</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-token-input-container-attributes\">vcl-token-input-container attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>Token[]</td>\n<td>[]</td>\n<td>List of tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n<tr>\n<td><code>allowDuplicates</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens with matching values are not added</td>\n</tr>\n<tr>\n<td><code>preselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are preselected after being added if true</td>\n</tr>\n<tr>\n<td><code>tokenClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for tokens</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the token-input</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-token-input-container-events\">vcl-token-input-container events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>Token[]</td>\n<td>called after tokens are added/removed or the selection of token changes</td>\n</tr>\n<tr>\n<td><code>confirm</code></td>\n<td>Token[]</td>\n<td>called after <code>enter</code> is pressed when input element is empty</td>\n</tr>\n</tbody></table>\n<h4 id=\"interfaces\">interfaces</h4>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">interface</span> Token {\n  label: <span class=\"hljs-built_in\">string</span>;\n  value: <span class=\"hljs-built_in\">any</span>;\n  selected?: <span class=\"hljs-built_in\">boolean</span>;\n}</pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-token-demo-module.js.map