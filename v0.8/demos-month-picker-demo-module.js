(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-month-picker-demo-module"],{

/***/ "./demo/app/demos/month-picker/demo.component.html":
/*!*********************************************************!*\
  !*** ./demo/app/demos/month-picker/demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Demo with 2 selectable months in different colors</h3>\n<vcl-month-picker id=\"myStyledMonthPicker \" #myStyledMonthPicker\n  [locales]=\"locales\"\n  [dateOptions]=\"dateOptions\"\n  [prevYearAvailable]=\"true\"\n  [nextYearAvailable]=\"true\"\n  [colors]=\"['#50E3C2', '#FF3CE6']\">\n</vcl-month-picker>\n<br><br>\n\n<h3>Demo with set range for selectable months</h3>\n<vcl-month-picker [locales]=\"locales\"\n                  [dateOptions]=\"dateOptions\"\n                  [prevYearAvailable]=\"true\"\n                  [nextYearAvailable]=\"true\"\n                  [min]=\"min\"\n                  [max]=\"max\"\n                  [expandable]=\"true\"\n>\n</vcl-month-picker>\n<br><br>\n\n<h3>Demo with two way data binding</h3>\n<vcl-month-picker [prevYearAvailable]=\"true\"\n                  [nextYearAvailable]=\"true\"\n                  [(ngModel)]=\"selectedMonth\"\n>\n\n</vcl-month-picker>\n\n{{selectedMonth.toDateString()}}\n\n<button vcl-button\n        (click)=\"btn()\">Change Month\n</button>\n"

/***/ }),

/***/ "./demo/app/demos/month-picker/demo.component.ts":
/*!*******************************************************!*\
  !*** ./demo/app/demos/month-picker/demo.component.ts ***!
  \*******************************************************/
/*! exports provided: MonthPickerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerDemoComponent", function() { return MonthPickerDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");



var MonthPickerDemoComponent = /** @class */ (function () {
    function MonthPickerDemoComponent() {
        this.expanded = false;
        this.thisYear = new Date().getUTCFullYear();
        this.currentYear = this.thisYear;
        this.prevYearAvailable = true;
        this.nextYearAvailable = false;
        this.locales = 'en-us';
        this.dateOptions = {
            month: 'long'
        };
        this.selectedMonth = new Date(2018, 1);
        this.min = new Date();
        this.max = new Date(2019, 1, 1);
    }
    MonthPickerDemoComponent.prototype.ngAfterViewInit = function () {
        var now = new Date();
        this.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), 'pink');
        now.setMonth(now.getMonth() - 1);
        this.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), 'black');
        this.styledMonthPicker.dePreselectMonth(now.getFullYear(), now.getMonth());
    };
    MonthPickerDemoComponent.prototype.expandMonthPicker = function () {
        this.expanded = !this.expanded;
    };
    MonthPickerDemoComponent.prototype.onSelect = function (date) {
        console.log('onSelect():', date);
    };
    MonthPickerDemoComponent.prototype.onPreviousYearTap = function () {
        console.log('onPreviousYearTap()');
        console.log('this.currentYear:', this.currentYear);
        if (this.currentYear < this.thisYear) {
            this.nextYearAvailable = true;
        }
    };
    MonthPickerDemoComponent.prototype.onNextYearTap = function () {
        console.log('onNextYearTap()');
        console.log('this.currentYear:', this.currentYear);
        if (this.currentYear === this.thisYear) {
            this.nextYearAvailable = false;
        }
    };
    MonthPickerDemoComponent.prototype.btn = function () {
        this.selectedMonth = new Date(2018, 4);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myStyledMonthPicker'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["MonthPickerComponent"])
    ], MonthPickerDemoComponent.prototype, "styledMonthPicker", void 0);
    MonthPickerDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/month-picker/demo.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MonthPickerDemoComponent);
    return MonthPickerDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/month-picker/demo.module.ts":
/*!****************************************************!*\
  !*** ./demo/app/demos/month-picker/demo.module.ts ***!
  \****************************************************/
/*! exports provided: demo, MonthPickerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerDemoModule", function() { return MonthPickerDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/month-picker/demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








function demo() {
    return {
        label: 'Month Picker',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["MonthPickerDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/month-picker/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/month-picker/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/month-picker/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/month-picker/demo.component.ts")
            }
        }
    };
}
var MonthPickerDemoModule = /** @class */ (function () {
    function MonthPickerDemoModule() {
    }
    MonthPickerDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLPopoverModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLMonthPickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["MonthPickerDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["MonthPickerDemoComponent"]]
        })
    ], MonthPickerDemoModule);
    return MonthPickerDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/month-picker/demo.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/month-picker/demo.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Demo with 2 selectable months in different colors<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-month-picker</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"myStyledMonthPicker \"</span> #<span class=\"hljs-attr\">myStyledMonthPicker</span>\n  [<span class=\"hljs-attr\">locales</span>]=<span class=\"hljs-string\">\"locales\"</span>\n  [<span class=\"hljs-attr\">dateOptions</span>]=<span class=\"hljs-string\">\"dateOptions\"</span>\n  [<span class=\"hljs-attr\">prevYearAvailable</span>]=<span class=\"hljs-string\">\"true\"</span>\n  [<span class=\"hljs-attr\">nextYearAvailable</span>]=<span class=\"hljs-string\">\"true\"</span>\n  [<span class=\"hljs-attr\">colors</span>]=<span class=\"hljs-string\">\"['#50E3C2', '#FF3CE6']\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-month-picker</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Demo with set range for selectable months<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-month-picker</span> [<span class=\"hljs-attr\">locales</span>]=<span class=\"hljs-string\">\"locales\"</span>\n                  [<span class=\"hljs-attr\">dateOptions</span>]=<span class=\"hljs-string\">\"dateOptions\"</span>\n                  [<span class=\"hljs-attr\">prevYearAvailable</span>]=<span class=\"hljs-string\">\"true\"</span>\n                  [<span class=\"hljs-attr\">nextYearAvailable</span>]=<span class=\"hljs-string\">\"true\"</span>\n                  [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"min\"</span>\n                  [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"max\"</span>\n                  [<span class=\"hljs-attr\">expandable</span>]=<span class=\"hljs-string\">\"true\"</span>\n&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-month-picker</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Demo with two way data binding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-month-picker</span> [<span class=\"hljs-attr\">prevYearAvailable</span>]=<span class=\"hljs-string\">\"true\"</span>\n                  [<span class=\"hljs-attr\">nextYearAvailable</span>]=<span class=\"hljs-string\">\"true\"</span>\n                  [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"selectedMonth\"</span>\n&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-month-picker</span>&gt;</span>\n\n{{selectedMonth.toDateString()}}\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span>\n        (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"btn()\"</span>&gt;</span>Change Month\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/month-picker/demo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/month-picker/demo.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ViewChild, AfterViewInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { MonthPickerComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> MonthPickerDemoComponent <span class=\"hljs-keyword\">implements</span> AfterViewInit {\n\n  <span class=\"hljs-meta\">@ViewChild</span>(<span class=\"hljs-string\">'myStyledMonthPicker'</span>) styledMonthPicker: MonthPickerComponent;\n\n  expanded = <span class=\"hljs-literal\">false</span>;\n\n  thisYear: <span class=\"hljs-built_in\">number</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getUTCFullYear();\n\n  currentYear: <span class=\"hljs-built_in\">number</span> = <span class=\"hljs-keyword\">this</span>.thisYear;\n\n  prevYearAvailable = <span class=\"hljs-literal\">true</span>;\n\n  nextYearAvailable = <span class=\"hljs-literal\">false</span>;\n\n  locales = <span class=\"hljs-string\">'en-us'</span>;\n\n  dateOptions: <span class=\"hljs-built_in\">any</span> = {\n    month: <span class=\"hljs-string\">'long'</span>\n  };\n\n  selectedMonth = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-number\">2018</span>, <span class=\"hljs-number\">1</span>);\n\n  min = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n  max = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-number\">2019</span>, <span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">1</span>);\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"></span>) { }\n\n  ngAfterViewInit() {\n    <span class=\"hljs-keyword\">const</span> now: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n    <span class=\"hljs-keyword\">this</span>.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), <span class=\"hljs-string\">'pink'</span>);\n\n    now.setMonth(now.getMonth() - <span class=\"hljs-number\">1</span>);\n    <span class=\"hljs-keyword\">this</span>.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), <span class=\"hljs-string\">'black'</span>);\n    <span class=\"hljs-keyword\">this</span>.styledMonthPicker.dePreselectMonth(now.getFullYear(), now.getMonth());\n  }\n\n  expandMonthPicker() {\n    <span class=\"hljs-keyword\">this</span>.expanded = !<span class=\"hljs-keyword\">this</span>.expanded;\n  }\n\n  onSelect(date: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onSelect():'</span>, date);\n  }\n\n  onPreviousYearTap() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onPreviousYearTap()'</span>);\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'this.currentYear:'</span>, <span class=\"hljs-keyword\">this</span>.currentYear);\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.currentYear &lt; <span class=\"hljs-keyword\">this</span>.thisYear) {\n      <span class=\"hljs-keyword\">this</span>.nextYearAvailable = <span class=\"hljs-literal\">true</span>;\n    }\n  }\n\n  onNextYearTap() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onNextYearTap()'</span>);\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'this.currentYear:'</span>, <span class=\"hljs-keyword\">this</span>.currentYear);\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.currentYear === <span class=\"hljs-keyword\">this</span>.thisYear) {\n      <span class=\"hljs-keyword\">this</span>.nextYearAvailable = <span class=\"hljs-literal\">false</span>;\n    }\n  }\n\n  btn() {\n    <span class=\"hljs-keyword\">this</span>.selectedMonth = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-number\">2018</span>, <span class=\"hljs-number\">4</span>);\n  }\n}\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/month-picker/README.md":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/month-picker/README.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-month-picker\">vcl-month-picker</h1>\n<p>Lets users pick months comfortably.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLMonthPickerModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLMonthPickerModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><code>&lt;vcl-month-picker [prevYearAvailable]=&quot;true&quot; [nextYearAvailable]=&quot;true&quot;&gt;&lt;/vcl-month-picker&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-month-picker-attributes\">vcl-month-picker attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>expanded</code></td>\n<td>boolean</td>\n<td>true</td>\n<td></td>\n</tr>\n<tr>\n<td><code>currentYear</code></td>\n<td>number</td>\n<td><code>(new Date()).getFullYear()</code></td>\n<td></td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td><code>monthsPerRow</code></td>\n<td>number</td>\n<td>3</td>\n<td></td>\n</tr>\n<tr>\n<td><code>colors</code></td>\n<td>string[]</td>\n<td></td>\n<td>use to override month selection color [&apos;#00ff00&apos;, &apos;#000ff&apos;, ...]</td>\n</tr>\n<tr>\n<td><code>locales</code></td>\n<td>string | string[]</td>\n<td>&apos;en-US&apos;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>dateOptions</code></td>\n<td>Intl.DateTimeFormatOptions</td>\n<td>{ month: &apos;short&apos; }</td>\n<td></td>\n</tr>\n<tr>\n<td><code>expandable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>prevYearAvailable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>nextYearAvailable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>useAvailableMonths</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>closeBtnIcon</code></td>\n<td>string</td>\n<td>&apos;fas:times&apos;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>prevYearBtnIcon</code></td>\n<td>string</td>\n<td>&apos;fas:chevron-left&apos;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>nextYearBtnIcon</code></td>\n<td>string</td>\n<td>&apos;fas:chevron-right&apos;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>maxSelectableMonths</code></td>\n<td>number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>minSelectableMonths</code></td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td><code>minYear</code></td>\n<td>number</td>\n<td><code>Number.MIN_SAFE_INTEGER</code></td>\n<td></td>\n</tr>\n<tr>\n<td><code>maxYear</code></td>\n<td>number</td>\n<td><code>Number.MAX_SAFE_INTEGER</code></td>\n<td></td>\n</tr>\n<tr>\n<td><code>min</code></td>\n<td>Date</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>max</code></td>\n<td>Date</td>\n<td></td>\n<td>&#xA0;</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-month-picker-events\">vcl-month-picker events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>expandedChange</code></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td><code>currentYearChange</code></td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td><code>prevYearBtnTap</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>nextYearBtnTap</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>select</code></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td><code>deselect</code></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td><code>change</code></td>\n<td>Date | Array&lt;Date|undefined&gt;</td>\n<td>&#xA0;</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-month-picker-demo-module.js.map