(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-rating-demo-module"],{

/***/ "./demo/app/demos/rating/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/demos/rating/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Horizontal</h2>\n<vcl-rating [(value)]=\"horizontalValue\"></vcl-rating>\n<div>Value: {{ horizontalValue }}</div>\n\n<h2>Vertical</h2>\n<vcl-rating type=\"vertical\" [(value)]=\"verticalValue\"></vcl-rating>\n<div>Value: {{ verticalValue }}</div>\n\n<h2>Custom Star Count</h2>\n<vcl-rating [ratingItemCount]=\"15\" [(value)]=\"customValue\"></vcl-rating>\n<div>Value: {{ customValue }}</div>\n\n<h2>With label</h2>\n\n<label class=\"vclFormControlLabel\" for=\"vInputEx1\">\n  Rating: {{rating1.labelChange | async}}\n</label>\n<vcl-rating [value]=\"2\" #rating1=\"vclRating\">\n  <vcl-rating-item><span style=\"color: red\">Bad</span></vcl-rating-item> \n  <vcl-rating-item><span style=\"color: orange\">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style=\"color: green\">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>With rich label</h2>\n\n<label class=\"vclFormControlLabel\" for=\"vInputEx1\">\n  Rating: <vcl-rating-item-label [target]=\"rating2\"></vcl-rating-item-label>\n</label>\n<vcl-rating [value]=\"2\" #rating2=\"vclRating\">\n  <vcl-rating-item><span style=\"color: red\">Bad</span></vcl-rating-item> \n  <vcl-rating-item><span style=\"color: orange\">Average</span></vcl-rating-item>\n  <vcl-rating-item><span style=\"color: green\">Good</span></vcl-rating-item>\n</vcl-rating>\n\n<h2>Custom Icons</h2>\n<vcl-rating ratingFullIcon=\"fas fa-battery-full\" ratingHalfIcon=\"fas fa-battery-half\" ratingEmptyIcon=\"fas fa-battery-empty\" [value]=\"2.5\"></vcl-rating>\n"

/***/ }),

/***/ "./demo/app/demos/rating/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/demos/rating/demo.component.ts ***!
  \*************************************************/
/*! exports provided: RatingDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemoComponent", function() { return RatingDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingDemoComponent = /** @class */ (function () {
    function RatingDemoComponent() {
        this.horizontalValue = 2.5;
        this.verticalValue = 2.5;
        this.customValue = 7.5;
    }
    RatingDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/rating/demo.component.html")
        })
    ], RatingDemoComponent);
    return RatingDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/rating/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/demos/rating/demo.module.ts ***!
  \**********************************************/
/*! exports provided: demo, RatingDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemoModule", function() { return RatingDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/rating/demo.component.ts");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");








function demo() {
    return {
        label: 'Rating',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["RatingDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/rating/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/rating/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/rating/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/rating/demo.component.ts")
            }
        }
    };
}
var RatingDemoModule = /** @class */ (function () {
    function RatingDemoModule() {
    }
    RatingDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_7__["VCLRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["RatingDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["RatingDemoComponent"]]
        })
    ], RatingDemoModule);
    return RatingDemoModule;
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

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/rating/demo.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/rating/demo.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Horizontal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"horizontalValue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>Value: {{ horizontalValue }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Vertical<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"vertical\"</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"verticalValue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>Value: {{ verticalValue }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Custom Star Count<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating</span> [<span class=\"hljs-attr\">ratingItemCount</span>]=<span class=\"hljs-string\">\"15\"</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"customValue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>Value: {{ customValue }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>With label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclFormControlLabel\"</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"vInputEx1\"</span>&gt;</span>\n  Rating: {{rating1.labelChange | async}}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2\"</span> #<span class=\"hljs-attr\">rating1</span>=<span class=\"hljs-string\">\"vclRating\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: red\"</span>&gt;</span>Bad<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span> \n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: orange\"</span>&gt;</span>Average<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: green\"</span>&gt;</span>Good<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>With rich label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclFormControlLabel\"</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"vInputEx1\"</span>&gt;</span>\n  Rating: <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item-label</span> [<span class=\"hljs-attr\">target</span>]=<span class=\"hljs-string\">\"rating2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item-label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2\"</span> #<span class=\"hljs-attr\">rating2</span>=<span class=\"hljs-string\">\"vclRating\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: red\"</span>&gt;</span>Bad<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span> \n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: orange\"</span>&gt;</span>Average<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: green\"</span>&gt;</span>Good<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Custom Icons<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-rating</span> <span class=\"hljs-attr\">ratingFullIcon</span>=<span class=\"hljs-string\">\"fas fa-battery-full\"</span> <span class=\"hljs-attr\">ratingHalfIcon</span>=<span class=\"hljs-string\">\"fas fa-battery-half\"</span> <span class=\"hljs-attr\">ratingEmptyIcon</span>=<span class=\"hljs-string\">\"fas fa-battery-empty\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"2.5\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-rating</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/rating/demo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/rating/demo.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> {Component} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> RatingDemoComponent {\n\n  horizontalValue = <span class=\"hljs-number\">2.5</span>;\n  verticalValue = <span class=\"hljs-number\">2.5</span>;\n  customValue = <span class=\"hljs-number\">7.5</span>;\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/rating/README.md":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/rating/README.md ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-rating\">vcl-rating</h1>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><code>&lt;vcl-rating [(value)]=&quot;value&quot;&gt;&lt;/vcl-rating&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code> <em>(1)</em></td>\n<td>number</td>\n<td>0</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>type</code></td>\n<td>&apos;horizontal&apos;, &apos;vertical&apos;, &apos;small&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td>Rating type.</td>\n</tr>\n<tr>\n<td><code>fullStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star&apos;</td>\n<td>Full star icon</td>\n</tr>\n<tr>\n<td><code>halfStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star-half&apos;</td>\n<td>Half star icon</td>\n</tr>\n<tr>\n<td><code>emptyStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star-empty&apos;</td>\n<td>Empty star icon</td>\n</tr>\n<tr>\n<td><code>starCount</code></td>\n<td>number</td>\n<td>5</td>\n<td>Max rating</td>\n</tr>\n<tr>\n<td><code>readonly</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Whether the stars can be clicked</td>\n</tr>\n</tbody></table>\n<h4 id=\"events\">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>number</td>\n<td>emits when the value changes</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-rating-demo-module.js.map