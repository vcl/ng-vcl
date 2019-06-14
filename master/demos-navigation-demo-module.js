(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-navigation-demo-module"],{

/***/ "./demo/app/demos/navigation/demo.component.html":
/*!*******************************************************!*\
  !*** ./demo/app/demos/navigation/demo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic navigation</h3>\n\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:home\"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item #products=\"vclNavigationItem\">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]=\"products.opened ? 'fas:chevron-down' : 'fas:chevron-right'\"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon=\"fas:bicycle\"></vcl-icon>\n            Product 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon=\"fas:bicycle\"></vcl-icon>\n            Product 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item #contact=\"vclNavigationItem\">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]=\"contact.opened ? 'fas:chevron-down' : 'fas:chevron-right'\"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n            Contact 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n            Contact 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>    \n  </vcl-navigation-item>\n</vcl-navigation>\n\n<h3>Horizontal navigation</h3>\n\n<vcl-navigation layout=\"horizontal\">\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:home\"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:bicycle\"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n        Contacts\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n  "

/***/ }),

/***/ "./demo/app/demos/navigation/demo.component.ts":
/*!*****************************************************!*\
  !*** ./demo/app/demos/navigation/demo.component.ts ***!
  \*****************************************************/
/*! exports provided: NavigationDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDemoComponent", function() { return NavigationDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationDemoComponent = /** @class */ (function () {
    function NavigationDemoComponent() {
    }
    NavigationDemoComponent.prototype.onNavigate = function (route) {
        console.log('Navigate', route);
    };
    NavigationDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/navigation/demo.component.html")
        })
    ], NavigationDemoComponent);
    return NavigationDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/navigation/demo.module.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/navigation/demo.module.ts ***!
  \**************************************************/
/*! exports provided: demo, NavigationDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDemoModule", function() { return NavigationDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/navigation/demo.component.ts");







function demo() {
    return {
        label: 'Navigation',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["NavigationDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/navigation/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/navigation/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/navigation/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/navigation/demo.component.ts")
            }
        }
    };
}
var NavigationDemoModule = /** @class */ (function () {
    function NavigationDemoModule() {
    }
    NavigationDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLNavigationModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIcogramModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["NavigationDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["NavigationDemoComponent"]]
        })
    ], NavigationDemoModule);
    return NavigationDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/navigation/demo.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/navigation/demo.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Basic navigation<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:home\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Home\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span> #<span class=\"hljs-attr\">products</span>=<span class=\"hljs-string\">\"vclNavigationItem\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"products.opened ? 'fas:chevron-down' : 'fas:chevron-right'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Products\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bicycle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n            Product 1\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bicycle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n            Product 2\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span> #<span class=\"hljs-attr\">contact</span>=<span class=\"hljs-string\">\"vclNavigationItem\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"contact.opened ? 'fas:chevron-down' : 'fas:chevron-right'\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Contact\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:envelope\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n            Contact 1\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:envelope\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n            Contact 2\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>    \n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Horizontal navigation<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation</span> <span class=\"hljs-attr\">layout</span>=<span class=\"hljs-string\">\"horizontal\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:home\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Home\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:bicycle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Products\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:envelope\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Contacts\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n  "

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/navigation/demo.component.ts":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/navigation/demo.component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> NavigationDemoComponent {\n\n  hoverName?: <span class=\"hljs-built_in\">string</span>;\n  hoverLastName?: <span class=\"hljs-built_in\">string</span>;\n\n  onNavigate(route) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Navigate'</span>, route);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/navigation/README.md":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/navigation/README.md ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-navigation\">vcl-navigation</h1>\n<p>The navigation groups navigation items to form a navigation menu.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLNavigationModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLNavigationModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:home&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Home\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:bicycle&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Products\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>Product 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>Product 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">&quot;fas:envelope&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        Contact\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-navigation</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-navigation-attributes\">vcl-navigation attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>layout</code></td>\n<td>&apos;horizontal&apos; | &apos;vertical&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td></td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-navigation-item-attributes\">vcl-navigation-item attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>opened</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true and nested this opens the subitems</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Wether the item is selected</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-navigation-demo-module.js.map