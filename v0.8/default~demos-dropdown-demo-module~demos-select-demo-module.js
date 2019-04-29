(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demos-dropdown-demo-module~demos-select-demo-module"],{

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

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/dropdown/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/dropdown/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-dropdown\">vcl-dropdown</h1>\n<p>A dropdown menu consisting of a list of items which can be selected.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;dropdown1.open()&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown</span> #<span class=\"hljs-attr\">dropdown1</span>=<span class=\"hljs-string\">&quot;vclDropdown&quot;</span> <span class=\"hljs-attr\">selectionMode</span>=<span class=\"hljs-string\">&quot;none&quot;</span> (<span class=\"hljs-attr\">valueChange</span>)=<span class=\"hljs-string\">&quot;onDropdownSelect($event)&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;1&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;2&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;3&quot;</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span></pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;Type to open dropdown&quot;</span> [<span class=\"hljs-attr\">vclDropdown</span>]=<span class=\"hljs-string\">&quot;dropdown2&quot;</span> /&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown</span> #<span class=\"hljs-attr\">dropdown2</span>=<span class=\"hljs-string\">&quot;vclDropdown&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-header</span>&gt;</span>Items<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;1&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>Description of Item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;2&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>Description of Item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;3&quot;</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>Description of Item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-seperator</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-seperator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;4&quot;</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Seperated Item 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>Description of Item 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span>\n</pre>\n<h3 id=\"vcl-dropdown-attributes\">vcl-dropdown attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Current value</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>ElementRef</td>\n<td></td>\n<td>The target the dropdown attaches to</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number | string</td>\n<td></td>\n<td>Dropdown width</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number | string</td>\n<td>&apos;20em&apos;</td>\n<td>Dropdown height</td>\n</tr>\n<tr>\n<td><code>maxHeight</code></td>\n<td>number | string</td>\n<td></td>\n<td>Dropdown max height</td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>&apos;single&apos; | &apos;multiple&apos; | &apos;none&apos;</td>\n<td>&apos;single&apos;</td>\n<td><code>single</code> allows only one item to be selected. <code>multi</code> allows multiple items to be selected. <code>none</code> allows none item to be selected</td>\n</tr>\n</tbody></table>\n<h3 id=\"vcl-dropdown-events\">vcl-dropdown events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any</td>\n<td>Fired when the dropdown value has changes</td>\n</tr>\n<tr>\n<td><code>afterClose</code></td>\n<td>any</td>\n<td>Fired after the dropdown was closed</td>\n</tr>\n</tbody></table>\n<h3 id=\"vcl-dropdown-item-attributes\">vcl-dropdown-item attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td></td>\n<td>Disables the item</td>\n</tr>\n</tbody></table>\n<h3 id=\"inputvcldropdown-attributes\">input[vclDropdown] attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclDropdown</code></td>\n<td>vcl-dropdown</td>\n<td></td>\n<td>The dropdown component to use</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=default~demos-dropdown-demo-module~demos-select-demo-module.js.map