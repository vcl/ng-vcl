(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-table-demo-module"],{

/***/ "./demo/app/demos/table/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/table/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table vcl-table class=\"vclFixed vclVAlignMiddle vclRowHoverHighlight vclAltRowColor\" >\n  <thead>\n    <tr>\n      <th [span]=\"50\" sort (change)=\"OnSortingDefaultColumn($event)\">\n        <span>Default Column ({{defaultColumnSortName}})</span>\n        <sort-icon></sort-icon>\n      </th>\n      <th [span]=\"20\" sort>\n        <span>Right aligned Column</span>\n        <sort-icon></sort-icon>\n      </th>\n      <th [span]=\"20\">\n        <span>Centered Column</span>\n      </th>\n      <th [span]=\"10\">\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Lorem ipsum</td>\n      <td [align-right]=\"true\">11.000</td>\n      <td align-center>Sent</td>\n      <td align-center></td>\n    </tr>\n    <tr>\n      <td nowrap>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.</td>\n      <td [align-right]=\"true\">11.000</td>\n      <td align-center>Sent</td>\n      <td align-center></td>\n    </tr>\n    <tr>\n      <td><a href=\"#table\">Lorem ipsum dolor sit amet</a>, Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.</td>\n      <td [align-right]=\"true\">11.000</td>\n      <td align-center>Sent</td>\n      <td align-center></td>\n    </tr>\n    <tr>\n      <td [overflow-ellipsis]=\"readMore\"><a *ngIf=\"readMore\" (click)=\"readMore = false\">Read more</a> Truncated content. Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n        ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      </td>\n      <td [align-right]=\"true\">11.000</td>\n      <td hightlight align-center>N/A</td>\n      <td align-center></td>\n    </tr>\n    <tr disabled>\n      <td>Disabled row.</td>\n      <td [align-right]=\"true\">11.000</td>\n      <td hightlight align-center>On hold</td>\n      <td align-center></td>\n    </tr>\n    <tr selectable (click)=\"isSelected = !isSelected\" [selected]=\"isSelected\">\n      <td>Click to unselect</td>\n      <td [align-right]=\"true\">11.000</td>\n      <td hightlight align-center>N/A</td>\n      <td align-center></td>\n    </tr>\n    <tr>\n      <td>Normal row.</td>\n      <td [align-right]=\"true\">11.000</td>\n      <td hightlight align-center>On hold</td>\n      <td align-center></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./demo/app/demos/table/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/table/demo.component.ts ***!
  \************************************************/
/*! exports provided: TableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoComponent", function() { return TableDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableDemoComponent = /** @class */ (function () {
    function TableDemoComponent() {
        this.isSelected = true;
        this.readMore = true;
    }
    TableDemoComponent.prototype.OnSortingDefaultColumn = function (sort) {
        this.defaultColumnSort = sort;
    };
    Object.defineProperty(TableDemoComponent.prototype, "defaultColumnSortName", {
        get: function () {
            switch (this.defaultColumnSort) {
                case -1: {
                    return 'desc';
                }
                case 1: {
                    return 'asc';
                }
                default: {
                    return 'none';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    TableDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/table/demo.component.html"),
        })
    ], TableDemoComponent);
    return TableDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/table/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/table/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, TableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoModule", function() { return TableDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/table/demo.component.ts");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");







function demo() {
    return {
        label: 'Table',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_5__["TableDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/table/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/table/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/table/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/table/demo.component.ts")
            }
        },
    };
}
var TableDemoModule = /** @class */ (function () {
    function TableDemoModule() {
    }
    TableDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_3__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [
                _demo_component__WEBPACK_IMPORTED_MODULE_5__["TableDemoComponent"],
            ],
            declarations: [
                _demo_component__WEBPACK_IMPORTED_MODULE_5__["TableDemoComponent"],
            ]
        })
    ], TableDemoModule);
    return TableDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/table/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/table/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">vcl-table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclFixed vclVAlignMiddle vclRowHoverHighlight vclAltRowColor\"</span> &gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> [<span class=\"hljs-attr\">span</span>]=<span class=\"hljs-string\">\"50\"</span> <span class=\"hljs-attr\">sort</span> (<span class=\"hljs-attr\">change</span>)=<span class=\"hljs-string\">\"OnSortingDefaultColumn($event)\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Default Column ({{defaultColumnSortName}})<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">sort-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">sort-icon</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> [<span class=\"hljs-attr\">span</span>]=<span class=\"hljs-string\">\"20\"</span> <span class=\"hljs-attr\">sort</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Right aligned Column<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">sort-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">sort-icon</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> [<span class=\"hljs-attr\">span</span>]=<span class=\"hljs-string\">\"20\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Centered Column<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> [<span class=\"hljs-attr\">span</span>]=<span class=\"hljs-string\">\"10\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Lorem ipsum<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>Sent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">nowrap</span>&gt;</span>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>Sent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#table\"</span>&gt;</span>Lorem ipsum dolor sit amet<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>, Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>Sent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">overflow-ellipsis</span>]=<span class=\"hljs-string\">\"readMore\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"readMore\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"readMore = false\"</span>&gt;</span>Read more<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span> Truncated content. Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n        ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">hightlight</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>N/A<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Disabled row.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">hightlight</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>On hold<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">selectable</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"isSelected = !isSelected\"</span> [<span class=\"hljs-attr\">selected</span>]=<span class=\"hljs-string\">\"isSelected\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Click to unselect<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">hightlight</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>N/A<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Normal row.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> [<span class=\"hljs-attr\">align-right</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>11.000<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">hightlight</span> <span class=\"hljs-attr\">align-center</span>&gt;</span>On hold<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">align-center</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/table/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/table/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'./demo.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> TableDemoComponent {\n  isSelected = <span class=\"hljs-literal\">true</span>;\n  defaultColumnSort: <span class=\"hljs-number\">-1</span> | <span class=\"hljs-number\">0</span> | <span class=\"hljs-number\">1</span>;\n  readMore = <span class=\"hljs-literal\">true</span>;\n\n  OnSortingDefaultColumn(sort: <span class=\"hljs-number\">-1</span> | <span class=\"hljs-number\">0</span> | <span class=\"hljs-number\">1</span>): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>.defaultColumnSort = sort;\n  }\n\n\n  <span class=\"hljs-keyword\">get</span> defaultColumnSortName(): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">switch</span> (<span class=\"hljs-keyword\">this</span>.defaultColumnSort) {\n      <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">-1</span>: {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'desc'</span>;\n      }\n      <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">1</span>: {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'asc'</span>;\n      }\n      <span class=\"hljs-keyword\">default</span>: {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'none'</span>;\n      }\n    }\n  }\n\n\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/table/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/table/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-table\">vcl-table</h1>\n<p>Display tabular data.</p>\n<h2 id=\"usage\">Usage</h2>\n<p>You can simply add directive to necessary element</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">hover</span>&gt;</span>\n...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span></pre>\n<p>or pass parameter to toggle it behavior</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> [<span class=\"hljs-attr\">hover</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n...\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> [<span class=\"hljs-attr\">span</span>]=<span class=\"hljs-string\">&quot;10&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span></pre>\n<h2 id=\"features\">Features</h2>\n<table>\n<thead>\n<tr>\n<th>Selector</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>hightlight</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Highlight single cells and columns.</td>\n</tr>\n<tr>\n<td><code>span</code></td>\n<td>number</td>\n<td>0</td>\n<td>Defines column width from <code>0</code> to <code>100</code> percents. Have to be used on the <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>sort</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Sortable columns are defined with the <code>sort</code> directive  on the respective <code>th</code>s. To handle sorting changes subscribe for <code>change</code> event <code>EventEmitter&lt;-1</code> | <code>0</code> | <code>1&gt;</code>. To add additional sort icon use <code>sort-icon</code> component withinside <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Rows can be styled to suggest their selectability (single or multiple) using the <code>selectable</code> directive, which makes rows show a pointer cursor on hover.</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually select individual cells and thus rows.</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually disable row content.</td>\n</tr>\n<tr>\n<td><code>align-center</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to center</td>\n</tr>\n<tr>\n<td><code>align-right</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to right</td>\n</tr>\n<tr>\n<td><code>align-bottom</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to bottom</td>\n</tr>\n<tr>\n<td><code>align-middle</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to middle</td>\n</tr>\n<tr>\n<td><code>nowrap</code>, <code>overflow-ellipsis</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>In conjunction with the fixed layout mode, this directive can be used to truncate all cell content which would span more than one line and show an ellipsis to indicate truncated content instead</td>\n</tr>\n<tr>\n<td><code>break-words</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Break words of textual cell content apart. This works best in combination with the <code>fixed</code> layout mode</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-table-demo-module.js.map