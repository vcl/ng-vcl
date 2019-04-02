(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-autocomplete-demo-module"],{

/***/ "./demo/app/demos/autocomplete/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/autocomplete/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>vcl-input with fixed data</h3>\n\n<vcl-embedded-input-group prepIcon=\"fas:search\">\n  <input vclEmbeddedInputGroup placeholder=\"Search\"  [vclInputAutocomplete]=\"acCountry\" (change)=\"onChange($event);\" />\n</vcl-embedded-input-group>\n\n<h3>vcl-token-input with fixed data</h3>\n\n<vcl-token-input-container (tokensChange)=\"onChange($event)\">\n  <input vclInput placeholder=\"Search for country to add\" [vclTokenInputAutocomplete]=\"acCountry\" />\n</vcl-token-input-container>\n\n<vcl-autocomplete #acCountry=\"vclAutocomplete\">\n  <vcl-autocomplete-header>Europe</vcl-autocomplete-header>\n  <vcl-autocomplete-item value=\"gr\" label=\"Greece\"></vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"fr\" label=\"France\"></vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"de\" label=\"Germany\"></vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"uk\" label=\"The United Kingdom of Great Britain and Northern Ireland\"></vcl-autocomplete-item>\n  <vcl-autocomplete-header>Asia</vcl-autocomplete-header>\n  <vcl-autocomplete-item value=\"jp\" label=\"Japan\"></vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"cn\" label=\"China\"></vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"th\" label=\"Thailand\"></vcl-autocomplete-item>\n</vcl-autocomplete>\n\n<h3>vcl-token-input with async data</h3>\n\n<vcl-token-input-container (tokensChange)=\"onChange($event)\">\n  <input vclInput\n         placeholder=\"Search for books to add\"\n         [vclTokenInputAutocomplete]=\"acBooks\"\n         (input)=\"booksInput$.next($event.target.value)\"\n         (autocompleteSelect)=\"booksInput$.next('')\" />\n</vcl-token-input-container>\n\n<vcl-autocomplete #acBooks=\"vclAutocomplete\">\n  <ng-container *ngIf=\"ac$ | async as ac\">\n    <vcl-busy-indicator *ngIf=\"ac.state === 'loading'\" style=\"padding: 1em\"></vcl-busy-indicator>\n    <div *ngIf=\"ac.state === 'success' && ac.books.length === 0\" style=\"padding: 1em\">No books found</div>\n    <ng-container *ngIf=\"ac.state === 'success' && ac.books.length > 0\">\n      <vcl-autocomplete-item *ngFor=\"let book of ac.books\" [label]=\"book.title\" [value]=\"book.id\"></vcl-autocomplete-item>\n    </ng-container>\n  </ng-container>\n</vcl-autocomplete>\n"

/***/ }),

/***/ "./demo/app/demos/autocomplete/demo.component.ts":
/*!*******************************************************!*\
  !*** ./demo/app/demos/autocomplete/demo.component.ts ***!
  \*******************************************************/
/*! exports provided: AutocompleteDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDemoComponent", function() { return AutocompleteDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';
var AutocompleteDemoComponent = /** @class */ (function () {
    function AutocompleteDemoComponent(http) {
        var _this = this;
        this.http = http;
        this.booksInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.ac$ = this.booksInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (search) {
            if (!search || search.length < 2) {
                // Show nothing if less than 2 characters
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ state: 'void', books: [] });
            }
            else {
                return _this.http.get(BOOK_API_URL + "?q=" + search + "&projection=lite").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                    var items = data.items || [];
                    return {
                        state: 'success',
                        books: items.filter(function (item) { return item.id && item.volumeInfo && item.volumeInfo.title; })
                            .map(function (item) { return ({
                            id: item.id,
                            title: item.volumeInfo.title
                        }); })
                    };
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (ex) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ state: 'error', books: [] }); }), // Error state
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({ state: 'loading', books: [] }) // Set state to loading before the request
                );
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({ state: 'void', books: [] }) // Initial state
        );
    }
    AutocompleteDemoComponent.prototype.onChange = function (change) {
        console.log(change);
    };
    AutocompleteDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/autocomplete/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AutocompleteDemoComponent);
    return AutocompleteDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/autocomplete/demo.module.ts":
/*!****************************************************!*\
  !*** ./demo/app/demos/autocomplete/demo.module.ts ***!
  \****************************************************/
/*! exports provided: demo, AutocompleteDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDemoModule", function() { return AutocompleteDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/autocomplete/demo.component.ts");








function demo() {
    return {
        label: 'Input',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!./../../../../lib/ng-vcl/src/autocomplete/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/autocomplete/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/autocomplete/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/autocomplete/demo.component.ts")
            },
        },
    };
}
var AutocompleteDemoModule = /** @class */ (function () {
    function AutocompleteDemoModule() {
    }
    AutocompleteDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLInputModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLEmbeddedInputGroupModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLAutocompleteModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLTokenModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLBusyIndicatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteDemoComponent"]]
        })
    ], AutocompleteDemoModule);
    return AutocompleteDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/autocomplete/demo.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/autocomplete/demo.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>vcl-input with fixed data<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Search\"</span>  [<span class=\"hljs-attr\">vclInputAutocomplete</span>]=<span class=\"hljs-string\">\"acCountry\"</span> (<span class=\"hljs-attr\">change</span>)=<span class=\"hljs-string\">\"onChange($event);\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>vcl-token-input with fixed data<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-input-container</span> (<span class=\"hljs-attr\">tokensChange</span>)=<span class=\"hljs-string\">\"onChange($event)\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Search for country to add\"</span> [<span class=\"hljs-attr\">vclTokenInputAutocomplete</span>]=<span class=\"hljs-string\">\"acCountry\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-input-container</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete</span> #<span class=\"hljs-attr\">acCountry</span>=<span class=\"hljs-string\">\"vclAutocomplete\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>Europe<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"gr\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"Greece\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"fr\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"France\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"de\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"Germany\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"uk\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"The United Kingdom of Great Britain and Northern Ireland\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>Asia<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"jp\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"Japan\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"cn\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"China\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"th\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"Thailand\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>vcl-token-input with async data<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-token-input-container</span> (<span class=\"hljs-attr\">tokensChange</span>)=<span class=\"hljs-string\">\"onChange($event)\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span>\n         <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Search for books to add\"</span>\n         [<span class=\"hljs-attr\">vclTokenInputAutocomplete</span>]=<span class=\"hljs-string\">\"acBooks\"</span>\n         (<span class=\"hljs-attr\">input</span>)=<span class=\"hljs-string\">\"booksInput$.next($event.target.value)\"</span>\n         (<span class=\"hljs-attr\">autocompleteSelect</span>)=<span class=\"hljs-string\">\"booksInput$.next('')\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-token-input-container</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete</span> #<span class=\"hljs-attr\">acBooks</span>=<span class=\"hljs-string\">\"vclAutocomplete\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ng-container</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"ac$ | async as ac\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"ac.state === 'loading'\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"padding: 1em\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"ac.state === 'success' &amp;&amp; ac.books.length === 0\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"padding: 1em\"</span>&gt;</span>No books found<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ng-container</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"ac.state === 'success' &amp;&amp; ac.books.length &gt; 0\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">\"let book of ac.books\"</span> [<span class=\"hljs-attr\">label</span>]=<span class=\"hljs-string\">\"book.title\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"book.id\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ng-container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ng-container</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/autocomplete/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/autocomplete/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { HttpClient } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/common/http'</span>;\n<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { BehaviorSubject ,  of } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { debounceTime, switchMap, map, catchError, startWith } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs/operators'</span>;\n\n<span class=\"hljs-keyword\">const</span> BOOK_API_URL = <span class=\"hljs-string\">'https://www.googleapis.com/books/v1/volumes'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> AutocompleteDemoComponent {\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> http: HttpClient</span>) { }\n\n  booksInput$ = <span class=\"hljs-keyword\">new</span> BehaviorSubject&lt;<span class=\"hljs-built_in\">string</span>&gt;(<span class=\"hljs-string\">''</span>);\n\n  ac$ = <span class=\"hljs-keyword\">this</span>.booksInput$.pipe(\n                 debounceTime(<span class=\"hljs-number\">200</span>),\n                 switchMap(<span class=\"hljs-function\"><span class=\"hljs-params\">search</span> =&gt;</span> {\n                  <span class=\"hljs-keyword\">if</span> (!search || search.length &lt; <span class=\"hljs-number\">2</span>) {\n                    <span class=\"hljs-comment\">// Show nothing if less than 2 characters</span>\n                    <span class=\"hljs-keyword\">return</span> of({ state: <span class=\"hljs-string\">'void'</span>, books: [] });\n                  } <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.http.get(<span class=\"hljs-string\">`<span class=\"hljs-subst\">${BOOK_API_URL}</span>?q=<span class=\"hljs-subst\">${search}</span>&amp;projection=lite`</span>).pipe(\n                      map(<span class=\"hljs-function\">(<span class=\"hljs-params\">data: <span class=\"hljs-built_in\">any</span></span>) =&gt;</span> {\n                        <span class=\"hljs-keyword\">const</span> items = data.items || [];\n                        <span class=\"hljs-keyword\">return</span> {\n                          state: <span class=\"hljs-string\">'success'</span>,\n                          books: items.filter(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> item.id &amp;&amp; item.volumeInfo &amp;&amp; item.volumeInfo.title)\n                                      .map(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> ({\n                            id: item.id,\n                            title: item.volumeInfo.title\n                          }))\n                        };\n                      }),\n                      catchError(<span class=\"hljs-function\"><span class=\"hljs-params\">ex</span> =&gt;</span> of({ state: <span class=\"hljs-string\">'error'</span>, books: [] })), <span class=\"hljs-comment\">// Error state</span>\n                      startWith({ state: <span class=\"hljs-string\">'loading'</span>, books: [] }) <span class=\"hljs-comment\">// Set state to loading before the request</span>\n                    );\n                  }\n                }),\n                startWith({ state: <span class=\"hljs-string\">'void'</span>, books: [] }) <span class=\"hljs-comment\">// Initial state</span>\n  );\n\n  onChange(change) {\n    <span class=\"hljs-built_in\">console</span>.log(change);\n  }\n}\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/autocomplete/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/autocomplete/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-autocomplete\">vcl-autocomplete</h1>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;Search&quot;</span> [<span class=\"hljs-attr\">vclInputAutocomplete</span>]=<span class=\"hljs-string\">&quot;acCountry&quot;</span> /&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete</span> #<span class=\"hljs-attr\">acCountry</span>=<span class=\"hljs-string\">&quot;vclAutocomplete&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;France&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;fr&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Germany&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;de&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-seperator</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-seperator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;New Zealand&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;nz&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>Custom content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete</span>&gt;</span>\n</pre>\n<h3 id=\"vcl-autocomplete-item-attributes\">vcl-autocomplete-item attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The items label</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-autocomplete-demo-module.js.map