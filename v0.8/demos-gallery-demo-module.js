(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-gallery-demo-module"],{

/***/ "./demo/app/demos/gallery/demo.component.html":
/*!****************************************************!*\
  !*** ./demo/app/demos/gallery/demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-gallery [selectedImage]=\"1\">\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=450\" thumbnail=\"https://picsum.photos/200/200?image=450\" alt=\"Image 1\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=451\" thumbnail=\"https://picsum.photos/200/200?image=451\" alt=\"Image 2\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=452\" thumbnail=\"https://picsum.photos/200/200?image=452\" alt=\"Image 3\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=453\" thumbnail=\"https://picsum.photos/200/200?image=453\" alt=\"Image 4\"></vcl-gallery-image>\n\n  <div class=\"vclGalleryHeader\">\n    <h2>Simple gallery</h2>\n  </div>\n\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n<br><br>\n\n<vcl-gallery [selectedImage]=\"1\" [wrap]=\"true\">\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=440\" thumbnail=\"https://picsum.photos/200/200?image=440\" alt=\"Image 1\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=441\" thumbnail=\"https://picsum.photos/200/200?image=441\" alt=\"Image 2\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=442\" thumbnail=\"https://picsum.photos/200/200?image=442\" alt=\"Image 3\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=443\" thumbnail=\"https://picsum.photos/200/200?image=443\" alt=\"Image 4\"></vcl-gallery-image>\n\n  <div class=\"vclGalleryHeader\">\n    <h2>Gallery with wrapping</h2>\n  </div>\n\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n<br><br>\n\n<h2>Gallery components seperated</h2>\n\n<vcl-gallery #external [selectedImage]=\"1\">\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=430\" thumbnail=\"https://picsum.photos/200/200?image=430\" alt=\"Image 1\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=431\" thumbnail=\"https://picsum.photos/200/200?image=431\" alt=\"Image 2\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=432\" thumbnail=\"https://picsum.photos/200/200?image=432\" alt=\"Image 3\"></vcl-gallery-image>\n  <vcl-gallery-image image=\"https://picsum.photos/600/500?image=433\" thumbnail=\"https://picsum.photos/200/200?image=433\" alt=\"Image 4\"></vcl-gallery-image>\n</vcl-gallery>\n\n<h3>Body:</h3>\n<vcl-gallery-body [target]=\"external\"></vcl-gallery-body>\n<br><br>\n\n<h3>Footer:</h3>\n<vcl-gallery-footer [target]=\"external\"></vcl-gallery-footer>\n<br><br>\n\n<h3>Thumbnails:</h3>\n<vcl-gallery-thumbnails [target]=\"external\"></vcl-gallery-thumbnails>\n"

/***/ }),

/***/ "./demo/app/demos/gallery/demo.component.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/gallery/demo.component.ts ***!
  \**************************************************/
/*! exports provided: GalleryDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDemoComponent", function() { return GalleryDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryDemoComponent = /** @class */ (function () {
    function GalleryDemoComponent() {
    }
    GalleryDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/gallery/demo.component.html")
        })
    ], GalleryDemoComponent);
    return GalleryDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/gallery/demo.module.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/gallery/demo.module.ts ***!
  \***********************************************/
/*! exports provided: demo, GalleryDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDemoModule", function() { return GalleryDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/gallery/demo.component.ts");







function demo() {
    return {
        label: 'Busy',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["GalleryDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/gallery/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/gallery/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/gallery/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/gallery/demo.component.ts")
            },
        }
    };
}
var GalleryDemoModule = /** @class */ (function () {
    function GalleryDemoModule() {
    }
    GalleryDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLGalleryModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["GalleryDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["GalleryDemoComponent"]]
        })
    ], GalleryDemoModule);
    return GalleryDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/gallery/demo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/gallery/demo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery</span> [<span class=\"hljs-attr\">selectedImage</span>]=<span class=\"hljs-string\">\"1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=450\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=450\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=451\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=451\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=452\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=452\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=453\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=453\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 4\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGalleryHeader\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Simple gallery<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery</span> [<span class=\"hljs-attr\">selectedImage</span>]=<span class=\"hljs-string\">\"1\"</span> [<span class=\"hljs-attr\">wrap</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=440\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=440\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=441\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=441\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=442\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=442\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=443\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=443\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 4\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGalleryHeader\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Gallery with wrapping<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Gallery components seperated<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery</span> #<span class=\"hljs-attr\">external</span> [<span class=\"hljs-attr\">selectedImage</span>]=<span class=\"hljs-string\">\"1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=430\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=430\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=431\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=431\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=432\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=432\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">\"https://picsum.photos/600/500?image=433\"</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">\"https://picsum.photos/200/200?image=433\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"Image 4\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Body:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-body</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"external\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Footer:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-footer</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"external\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Thumbnails:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-thumbnails</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"external\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/gallery/demo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/gallery/demo.component.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> GalleryDemoComponent {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/gallery/README.md":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/gallery/README.md ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-gallery\">vcl-gallery</h1>\n<p>A gallery containing multiple images with mobile swipe support.</p>\n<p><em>Note: HammerJS must be loaded for touch events</em></p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery</span> [<span class=\"hljs-attr\">selectedImage</span>]=<span class=\"hljs-string\">&quot;1&quot;</span> [<span class=\"hljs-attr\">wrap</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/600/500?image=450&quot;</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/200/200?image=450&quot;</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">&quot;Image 1&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/600/500?image=451&quot;</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/200/200?image=451&quot;</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">&quot;Image 2&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/600/500?image=452&quot;</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/200/200?image=452&quot;</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">&quot;Image 3&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-image</span> <span class=\"hljs-attr\">image</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/600/500?image=453&quot;</span> <span class=\"hljs-attr\">thumbnail</span>=<span class=\"hljs-string\">&quot;https://picsum.photos/200/200?image=453&quot;</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">&quot;Image 4&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-image</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-header</span> <span class=\"hljs-attr\">galleryTitle</span>=<span class=\"hljs-string\">&quot;Simple gallery&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-body</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-footer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery-thumbnails</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-gallery</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"gallery-attributes\">Gallery Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectedImage</code></td>\n<td>number</td>\n<td>0</td>\n<td>the selected image (optional)</td>\n</tr>\n<tr>\n<td><code>wrap</code></td>\n<td>string</td>\n<td>false</td>\n<td>whether to wrap around (optional)</td>\n</tr>\n</tbody></table>\n<h4 id=\"gallery-methods\">Gallery Methods</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Arguments</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectImage</code></td>\n<td>index: number</td>\n<td>select an image by index</td>\n</tr>\n<tr>\n<td><code>selectNext</code></td>\n<td></td>\n<td>select next image</td>\n</tr>\n<tr>\n<td><code>selectPrevious</code></td>\n<td></td>\n<td>select previous image</td>\n</tr>\n</tbody></table>\n<h4 id=\"image-attributes\">Image Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>image</code></td>\n<td>string</td>\n<td></td>\n<td>image source</td>\n</tr>\n<tr>\n<td><code>thumbnail</code></td>\n<td>string</td>\n<td><code>&quot;&quot;</code></td>\n<td>thumbnail source (optional)</td>\n</tr>\n<tr>\n<td><code>alt</code></td>\n<td>string</td>\n<td><code>&quot;&quot;</code></td>\n<td>alt text (optional)</td>\n</tr>\n</tbody></table>\n<h3 id=\"gallery-header-attributes\">Gallery Header Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>galleryTitle</code></td>\n<td>string</td>\n<td></td>\n<td>title of the gallery</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>GalleryComponent</td>\n<td></td>\n<td>gallery component (required if outside of it)</td>\n</tr>\n</tbody></table>\n<h3 id=\"gallery-body-attributes\">Gallery Body Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>target</code></td>\n<td>GalleryComponent</td>\n<td></td>\n<td>gallery component (required if outside of it)</td>\n</tr>\n</tbody></table>\n<h3 id=\"gallery-footer-attributes\">Gallery Footer Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>target</code></td>\n<td>GalleryComponent</td>\n<td></td>\n<td>gallery component (required if outside of it)</td>\n</tr>\n</tbody></table>\n<h3 id=\"gallery-thumbnails-attributes\">Gallery Thumbnails Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>target</code></td>\n<td>GalleryComponent</td>\n<td></td>\n<td>gallery component (required if outside of it)</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-gallery-demo-module.js.map