(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-autocomplete-demo-module"],{

/***/ "./demo/app/demos/autocomplete/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/autocomplete/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>vcl-autocomplete with fixed data</h3>\n\n<vcl-embedded-input-group prepIcon=\"fas:search\">\n  <input #inputCountry \n         placeholder=\"Search\"\n         vclEmbeddedInputGroup   \n         [vclAutocomplete]=\"acCountry\"\n         />\n</vcl-embedded-input-group>\n\n<vcl-autocomplete #acCountry=\"vclAutocomplete\" target=\"inputCountry\">\n  <vcl-autocomplete-header>Europe</vcl-autocomplete-header>\n  <vcl-autocomplete-item value=\"gr\">Greece</vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"fr\">France</vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"de\">Germany</vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"uk\">The United Kingdom of Great Britain and Northern Ireland</vcl-autocomplete-item>\n  <vcl-autocomplete-header>Asia</vcl-autocomplete-header>\n  <vcl-autocomplete-item value=\"jp\">Japan</vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"cn\">China</vcl-autocomplete-item>\n  <vcl-autocomplete-item value=\"th\">Thailand</vcl-autocomplete-item>\n</vcl-autocomplete>\n\n<h3>vcl-autocomplete with async data</h3>\n\n<vcl-embedded-input-group prepIcon=\"fas:search\">\n  <input #inputBooks \n         vclEmbeddedInputGroup \n         placeholder=\"Search Google Books api\" \n         (input)=\"search$.next($event.target.value)\"\n         [vclAutocomplete]=\"acBooks\"\n         [vclAutocompleteDisabled]=\"search.state === 'cleared'\"\n         [vclAutocompleteSelect]=\"'void'\"\n          />\n  <button vcl-icon-button \n          vclEmbeddedInputGroup \n          (click)=\"inputBooks.value = ''; inputBooks.focus(); search$.next('')\" \n          [icon]=\"'fas:times-circle'\">\n  </button>\n</vcl-embedded-input-group>\n\n<vcl-autocomplete #acBooks=\"vclAutocomplete\" (itemSelected)=\"onSelectBook($event);\">\n  <vcl-busy-indicator *ngIf=\"search.state === 'loading'\" style=\"padding: 1em\"></vcl-busy-indicator>\n  <div *ngIf=\"search.state === 'success' && search.books.length === 0\" style=\"padding: 1em\">No books found</div>\n  <ng-container *ngIf=\"search.state === 'success' && search.books.length > 0\">\n    <vcl-autocomplete-item *ngFor=\"let book of search.books\" [value]=\"book\">{{book.title}}</vcl-autocomplete-item>\n  </ng-container>\n</vcl-autocomplete>\n\n<ng-container *ngIf=\"books.length > 0\">\n\n  <h3>Books ({{books.length}})</h3>\n\n  <div class=\"vclDataList vclItemSelectability vclItemHoverHighlight vclNoBorder vclScrollable vclY\" style=\"max-height: 20em;\">\n    <ul class=\"vclDataListBody\" role=\"listbox\" aria-multiselectable=\"false\">\n      <li *ngFor=\"let book of books\" class=\"vclDataListItem vclLayoutHorizontal\" role=\"option\" aria-selected=\"false\">\n        <div>\n          <img class=\"vclResponsiveImage\" [src]=\"book.image\">\n        </div>\n        <div class=\"vclGutterMargin vclLayoutFlex\">\n          <div class=\"vclLayoutHorizontal\">\n            <div class=\"vclLayoutHorizontal vclLayoutCenter vclLayoutFlex\">\n              <h2 class=\"vclNoMargin\">{{book.title}}</h2>\n            </div>\n            <div class=\"vclSecondaryTextColor vclAlignRight\">\n              <i>{{book.date}}</i><br>\n              <span>{{book.author}}</span>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <button vcl-button (click)=\"onClearBooks()\">Clear</button>\n\n</ng-container>\n"

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
        this.search = {
            state: 'cleared',
            books: []
        };
        this.books = [];
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.searchSub = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) {
            // Show nothing if less than 2 characters
            if (!value || value.length < 2) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ state: 'cleared', books: [] });
            }
            else {
                return _this.http.get(BOOK_API_URL + "?q=" + value + "&projection=lite").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                    var items = data.items || [];
                    return {
                        state: 'success',
                        books: items.filter(function (item) { return item.id && item.volumeInfo && item.volumeInfo.title; })
                            .map(function (item) { return ({
                            id: item.id,
                            title: item.volumeInfo.title,
                            image: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
                            author: item.volumeInfo.authors && item.volumeInfo.authors.join(', '),
                            date: item.volumeInfo.publishedDate,
                        }); })
                    };
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (ex) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ state: 'error', books: [] }); }), // Error state
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({ state: 'loading', books: [] }) // Set state to loading before the request
                );
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({ state: 'cleared', books: [] }) // Initial state
        ).subscribe(function (search) { return _this.search = search; });
    }
    AutocompleteDemoComponent.prototype.onSelectBook = function (book) {
        this.search$.next('');
        this.books.push(book);
    };
    AutocompleteDemoComponent.prototype.onClearBooks = function () {
        this.books = [];
    };
    AutocompleteDemoComponent.prototype.ngOnDestroy = function () {
        this.searchSub && this.searchSub.unsubscribe();
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
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLIcogramModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
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

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>vcl-autocomplete with fixed data<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> #<span class=\"hljs-attr\">inputCountry</span> \n         <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Search\"</span>\n         <span class=\"hljs-attr\">vclEmbeddedInputGroup</span>   \n         [<span class=\"hljs-attr\">vclAutocomplete</span>]=<span class=\"hljs-string\">\"acCountry\"</span>\n         /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete</span> #<span class=\"hljs-attr\">acCountry</span>=<span class=\"hljs-string\">\"vclAutocomplete\"</span> <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"inputCountry\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>Europe<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"gr\"</span>&gt;</span>Greece<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"fr\"</span>&gt;</span>France<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"de\"</span>&gt;</span>Germany<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"uk\"</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>Asia<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"jp\"</span>&gt;</span>Japan<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"cn\"</span>&gt;</span>China<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"th\"</span>&gt;</span>Thailand<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>vcl-autocomplete with async data<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:search\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> #<span class=\"hljs-attr\">inputBooks</span> \n         <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> \n         <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Search Google Books api\"</span> \n         (<span class=\"hljs-attr\">input</span>)=<span class=\"hljs-string\">\"search$.next($event.target.value)\"</span>\n         [<span class=\"hljs-attr\">vclAutocomplete</span>]=<span class=\"hljs-string\">\"acBooks\"</span>\n         [<span class=\"hljs-attr\">vclAutocompleteDisabled</span>]=<span class=\"hljs-string\">\"search.state === 'cleared'\"</span>\n         [<span class=\"hljs-attr\">vclAutocompleteSelect</span>]=<span class=\"hljs-string\">\"'void'\"</span>\n          /&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> \n          <span class=\"hljs-attr\">vclEmbeddedInputGroup</span> \n          (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"inputBooks.value = ''; inputBooks.focus(); search$.next('')\"</span> \n          [<span class=\"hljs-attr\">icon</span>]=<span class=\"hljs-string\">\"'fas:times-circle'\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete</span> #<span class=\"hljs-attr\">acBooks</span>=<span class=\"hljs-string\">\"vclAutocomplete\"</span> (<span class=\"hljs-attr\">itemSelected</span>)=<span class=\"hljs-string\">\"onSelectBook($event);\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-busy-indicator</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"search.state === 'loading'\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"padding: 1em\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-busy-indicator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"search.state === 'success' &amp;&amp; search.books.length === 0\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"padding: 1em\"</span>&gt;</span>No books found<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ng-container</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"search.state === 'success' &amp;&amp; search.books.length &gt; 0\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">\"let book of search.books\"</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"book\"</span>&gt;</span>{{book.title}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ng-container</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ng-container</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"books.length &gt; 0\"</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Books ({{books.length}})<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclDataList vclItemSelectability vclItemHoverHighlight vclNoBorder vclScrollable vclY\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"max-height: 20em;\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclDataListBody\"</span> <span class=\"hljs-attr\">role</span>=<span class=\"hljs-string\">\"listbox\"</span> <span class=\"hljs-attr\">aria-multiselectable</span>=<span class=\"hljs-string\">\"false\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span> *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">\"let book of books\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclDataListItem vclLayoutHorizontal\"</span> <span class=\"hljs-attr\">role</span>=<span class=\"hljs-string\">\"option\"</span> <span class=\"hljs-attr\">aria-selected</span>=<span class=\"hljs-string\">\"false\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclResponsiveImage\"</span> [<span class=\"hljs-attr\">src</span>]=<span class=\"hljs-string\">\"book.image\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclGutterMargin vclLayoutFlex\"</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutHorizontal\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLayoutHorizontal vclLayoutCenter vclLayoutFlex\"</span>&gt;</span>\n              <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclNoMargin\"</span>&gt;</span>{{book.title}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclSecondaryTextColor vclAlignRight\"</span>&gt;</span>\n              <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span>&gt;</span>{{book.date}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n              <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{book.author}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"onClearBooks()\"</span>&gt;</span>Clear<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ng-container</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/autocomplete/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/autocomplete/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { HttpClient } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/common/http'</span>;\n<span class=\"hljs-keyword\">import</span> { Component, OnInit, OnDestroy } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { BehaviorSubject ,  of, timer, EMPTY } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { debounceTime, switchMap, map, catchError, startWith, debounce, distinctUntilChanged } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs/operators'</span>;\n\n<span class=\"hljs-keyword\">const</span> BOOK_API_URL = <span class=\"hljs-string\">'https://www.googleapis.com/books/v1/volumes'</span>;\n\n<span class=\"hljs-keyword\">interface</span> Book {\n  id: <span class=\"hljs-built_in\">string</span>;\n  title: <span class=\"hljs-built_in\">string</span>;\n  author?: <span class=\"hljs-built_in\">string</span>;\n  date?: <span class=\"hljs-built_in\">string</span>;\n  image?: <span class=\"hljs-built_in\">string</span>;\n}\n<span class=\"hljs-keyword\">interface</span> Search {\n  state: <span class=\"hljs-string\">'cleared'</span> | <span class=\"hljs-string\">'loading'</span> | <span class=\"hljs-string\">'error'</span>;\n  books: Book[];\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> AutocompleteDemoComponent <span class=\"hljs-keyword\">implements</span> OnDestroy {\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> http: HttpClient</span>) { }\n\n  search: Search = {\n    state: <span class=\"hljs-string\">'cleared'</span>,\n    books: []\n  };\n\n  books: Book[] = [];\n\n  search$ = <span class=\"hljs-keyword\">new</span> BehaviorSubject&lt;<span class=\"hljs-built_in\">string</span>&gt;(<span class=\"hljs-string\">''</span>);\n\n  searchSub = <span class=\"hljs-keyword\">this</span>.search$.pipe(\n                distinctUntilChanged(),\n                switchMap(<span class=\"hljs-function\"><span class=\"hljs-params\">value</span> =&gt;</span> {\n                  <span class=\"hljs-comment\">// Show nothing if less than 2 characters</span>\n                  <span class=\"hljs-keyword\">if</span> (!value || value.length &lt; <span class=\"hljs-number\">2</span>) {\n                    <span class=\"hljs-keyword\">return</span> of({ state: <span class=\"hljs-string\">'cleared'</span>, books: [] });\n                  } <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.http.get(<span class=\"hljs-string\">`<span class=\"hljs-subst\">${BOOK_API_URL}</span>?q=<span class=\"hljs-subst\">${value}</span>&amp;projection=lite`</span>).pipe(\n                      map(<span class=\"hljs-function\">(<span class=\"hljs-params\">data: <span class=\"hljs-built_in\">any</span></span>) =&gt;</span> {\n                        <span class=\"hljs-keyword\">const</span> items = data.items || [];\n                        <span class=\"hljs-keyword\">return</span> {\n                          state: <span class=\"hljs-string\">'success'</span>,\n                          books: items.filter(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> item.id &amp;&amp; item.volumeInfo &amp;&amp; item.volumeInfo.title)\n                                      .map(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> ({\n                            id: item.id,\n                            title: item.volumeInfo.title,\n                            image: item.volumeInfo.imageLinks &amp;&amp; item.volumeInfo.imageLinks &amp;&amp; item.volumeInfo.imageLinks.smallThumbnail,\n                            author: item.volumeInfo.authors &amp;&amp; item.volumeInfo.authors.join(<span class=\"hljs-string\">', '</span>),\n                            date: item.volumeInfo.publishedDate,\n                          }))\n                        };\n                      }),\n                      catchError(<span class=\"hljs-function\"><span class=\"hljs-params\">ex</span> =&gt;</span> of({ state: <span class=\"hljs-string\">'error'</span>, books: [] })), <span class=\"hljs-comment\">// Error state</span>\n                      startWith({ state: <span class=\"hljs-string\">'loading'</span>, books: [] }) <span class=\"hljs-comment\">// Set state to loading before the request</span>\n                    );\n                  }\n                }),\n                startWith&lt;Search&gt;({ state: <span class=\"hljs-string\">'cleared'</span>, books: [] }) <span class=\"hljs-comment\">// Initial state</span>\n  ).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">search</span> =&gt;</span> <span class=\"hljs-keyword\">this</span>.search = search);\n\n  onSelectBook(book: Book) {\n    <span class=\"hljs-keyword\">this</span>.search$.next(<span class=\"hljs-string\">''</span>);\n    <span class=\"hljs-keyword\">this</span>.books.push(book);\n  }\n\n  onClearBooks() {\n    <span class=\"hljs-keyword\">this</span>.books = [];\n  }\n\n  ngOnDestroy() {\n    <span class=\"hljs-keyword\">this</span>.searchSub &amp;&amp; <span class=\"hljs-keyword\">this</span>.searchSub.unsubscribe();\n  }\n}\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/autocomplete/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/autocomplete/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-autocomplete\">vcl-autocomplete</h1>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;Select country&quot;</span> [<span class=\"hljs-attr\">vclAutocompleteInput</span>]=<span class=\"hljs-string\">&quot;acCountries&quot;</span> /&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete</span> #<span class=\"hljs-attr\">acCountries</span>=<span class=\"hljs-string\">&quot;vclAutocomplete&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-header</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;France&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;fr&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Germany&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;de&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-seperator</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-seperator</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-autocomplete-item</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;New Zealand&quot;</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">&quot;nz&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete-item</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>Custom content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-autocomplete</span>&gt;</span>\n</pre>\n<h3 id=\"vcl-autocomplete-attributes\">vcl-autocomplete attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the autocomplete</td>\n</tr>\n<tr>\n<td><code>popoverWidth</code></td>\n<td>number</td>\n<td></td>\n<td>popover width. Uses host width by default.</td>\n</tr>\n</tbody></table>\n<h3 id=\"vcl-autocomplete-events\">vcl-autocomplete events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>itemSelected</code></td>\n<td>any</td>\n<td>Emits the value after an item was selected</td>\n</tr>\n</tbody></table>\n<h3 id=\"vcl-autocomplete-item-attributes\">vcl-autocomplete-item attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td></td>\n<td>Disables the item</td>\n</tr>\n</tbody></table>\n<h3 id=\"inputvclautocompleteinput-attributes\">input[vclAutocompleteInput] attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclAutocomplete</code></td>\n<td>vcl-autocomplete</td>\n<td></td>\n<td>The autocomplete component to use</td>\n</tr>\n<tr>\n<td><code>vclAutocompleteDisabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables autocompletion</td>\n</tr>\n<tr>\n<td><code>vclAutocompleteSelect</code></td>\n<td>&apos;value&apos; | &apos;void&apos; | <code>(value) =&gt; string</code></td>\n<td>value</td>\n<td>Value to pass to input after selection</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-autocomplete-demo-module.js.map