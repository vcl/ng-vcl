(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-date-picker-demo-module"],{

/***/ "./demo/app/demos/date-picker/demo.component.html":
/*!********************************************************!*\
  !*** ./demo/app/demos/date-picker/demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Default Date Picker</h3>\n<vcl-date-picker [(ngModel)]=\"selectedDate\" style=\"width: 18em;\"></vcl-date-picker>\n<span>Date: {{ selectedDate.toLocaleString() }}</span>\n\n<h3>Ranged Date Picker (with a maxRangeLength of '7')</h3>\n<vcl-date-picker style=\"width: 18em;\" \n                 [selectedDate]=\"selectedDate2\" \n                 [selectedRangeEnd]=\"selectedRangeEnd\" \n                 [selectRange]=\"true\" \n                 [maxRangeLength]=\"7\" \n                 [minDate]=\"minDate\"\n                 (dateChange)=\"onChange($event)\">\n</vcl-date-picker>\n\n<h3>Minimal Date Picker</h3>\n<vcl-date-picker [displayJumpToday]=\"false\"\n                 [displayJumpSelected]=\"false\"\n                 [displayWeekNumbers]=\"false\"\n                 [displayWeekdays]=\"false\">\n</vcl-date-picker>\n\n<h3>Default Time Picker</h3>\n<vcl-date-picker [(ngModel)]=\"selectedDate3\"\n                 [displayDate]=\"false\"\n                 [displayTime]=\"true\">\n</vcl-date-picker>\n<span>Date: {{ selectedDate3.toLocaleString() }}</span>\n\n<h3>12h Timepicker with seconds</h3>\n<vcl-date-picker [(ngModel)]=\"selectedDate4\"\n                 [displayDate]=\"false\"\n                 [displayTime]=\"true\"\n                 [displayMinutes]=\"false\"\n                 [displaySeconds]=\"true\"\n                 [displayHours24]=\"false\">\n</vcl-date-picker>\n<span>Date: {{ selectedDate4.toLocaleString() }}</span>\n\n<h3>Full example</h3>\n<vcl-date-picker [(ngModel)]=\"selectedDate5\"\n                 [displayTime]=\"true\"\n                 [displaySeconds]=\"true\">\n</vcl-date-picker>\n<span>Date: {{ selectedDate5.toLocaleString() }}</span>\n"

/***/ }),

/***/ "./demo/app/demos/date-picker/demo.component.ts":
/*!******************************************************!*\
  !*** ./demo/app/demos/date-picker/demo.component.ts ***!
  \******************************************************/
/*! exports provided: DatePickerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDemoComponent", function() { return DatePickerDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatePickerDemoComponent = /** @class */ (function () {
    function DatePickerDemoComponent() {
        this.selectedDate = new Date();
        this.selectedDate2 = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 31);
        this.selectedRangeEnd = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 34);
        this.selectedDate3 = new Date();
        this.selectedDate4 = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 31);
        this.selectedDate5 = new Date();
        this.minDate = new Date();
    }
    DatePickerDemoComponent.prototype.onChange = function (date) {
        console.log('onChange', date);
    };
    DatePickerDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/date-picker/demo.component.html"),
            styles: ["\n    .100px{\n      width: 100px;\n    }\n  "]
        })
    ], DatePickerDemoComponent);
    return DatePickerDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/date-picker/demo.module.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/date-picker/demo.module.ts ***!
  \***************************************************/
/*! exports provided: demo, DatePickerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDemoModule", function() { return DatePickerDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/date-picker/demo.component.ts");








function demo() {
    return {
        label: 'Date Picker',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/date-picker/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/date-picker/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/date-picker/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/date-picker/demo.component.ts")
            }
        },
    };
}
var DatePickerDemoModule = /** @class */ (function () {
    function DatePickerDemoModule() {
    }
    DatePickerDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLDatePickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerDemoComponent"]]
        })
    ], DatePickerDemoModule);
    return DatePickerDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/date-picker/demo.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/date-picker/demo.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Default Date Picker<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-date-picker</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"selectedDate\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 18em;\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-date-picker</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Date: {{ selectedDate.toLocaleString() }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Ranged Date Picker (with a maxRangeLength of '7')<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-date-picker</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 18em;\"</span> \n                 [<span class=\"hljs-attr\">selectedDate</span>]=<span class=\"hljs-string\">\"selectedDate2\"</span> \n                 [<span class=\"hljs-attr\">selectedRangeEnd</span>]=<span class=\"hljs-string\">\"selectedRangeEnd\"</span> \n                 [<span class=\"hljs-attr\">selectRange</span>]=<span class=\"hljs-string\">\"true\"</span> \n                 [<span class=\"hljs-attr\">maxRangeLength</span>]=<span class=\"hljs-string\">\"7\"</span> \n                 [<span class=\"hljs-attr\">minDate</span>]=<span class=\"hljs-string\">\"minDate\"</span>\n                 (<span class=\"hljs-attr\">dateChange</span>)=<span class=\"hljs-string\">\"onChange($event)\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-date-picker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Minimal Date Picker<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-date-picker</span> [<span class=\"hljs-attr\">displayJumpToday</span>]=<span class=\"hljs-string\">\"false\"</span>\n                 [<span class=\"hljs-attr\">displayJumpSelected</span>]=<span class=\"hljs-string\">\"false\"</span>\n                 [<span class=\"hljs-attr\">displayWeekNumbers</span>]=<span class=\"hljs-string\">\"false\"</span>\n                 [<span class=\"hljs-attr\">displayWeekdays</span>]=<span class=\"hljs-string\">\"false\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-date-picker</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Default Time Picker<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-date-picker</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"selectedDate3\"</span>\n                 [<span class=\"hljs-attr\">displayDate</span>]=<span class=\"hljs-string\">\"false\"</span>\n                 [<span class=\"hljs-attr\">displayTime</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-date-picker</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Date: {{ selectedDate3.toLocaleString() }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>12h Timepicker with seconds<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-date-picker</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"selectedDate4\"</span>\n                 [<span class=\"hljs-attr\">displayDate</span>]=<span class=\"hljs-string\">\"false\"</span>\n                 [<span class=\"hljs-attr\">displayTime</span>]=<span class=\"hljs-string\">\"true\"</span>\n                 [<span class=\"hljs-attr\">displayMinutes</span>]=<span class=\"hljs-string\">\"false\"</span>\n                 [<span class=\"hljs-attr\">displaySeconds</span>]=<span class=\"hljs-string\">\"true\"</span>\n                 [<span class=\"hljs-attr\">displayHours24</span>]=<span class=\"hljs-string\">\"false\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-date-picker</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Date: {{ selectedDate4.toLocaleString() }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Full example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-date-picker</span> [(<span class=\"hljs-attr\">ngModel</span>)]=<span class=\"hljs-string\">\"selectedDate5\"</span>\n                 [<span class=\"hljs-attr\">displayTime</span>]=<span class=\"hljs-string\">\"true\"</span>\n                 [<span class=\"hljs-attr\">displaySeconds</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-date-picker</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>Date: {{ selectedDate5.toLocaleString() }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/date-picker/demo.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/date-picker/demo.component.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n  styles: [<span class=\"hljs-string\">`\n    .100px{\n      width: 100px;\n    }\n  `</span>]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DatePickerDemoComponent {\n\n  selectedDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n  selectedDate2 = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">31</span>);\n  selectedRangeEnd = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">34</span>);\n  selectedDate3 = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n  selectedDate4 = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">31</span>);\n  selectedDate5 = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n  minDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  onChange(date) {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'onChange'</span>, date);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/date-picker/README.md":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/date-picker/README.md ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-date-picker\">vcl-date-picker</h1>\n<p>Lets users pick dates and points in time comfortably.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLDatePickerModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLDatePickerModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><code>&lt;vcl-date-picker&gt;&lt;/vcl-date-picker&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>highlightToday</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true, the current day will be highlighted</td>\n</tr>\n<tr>\n<td><code>highlightSelected</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true the selected days will be highlighted</td>\n</tr>\n<tr>\n<td><code>displayWeekNumbers</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true the weeknumber will be displayed</td>\n</tr>\n<tr>\n<td><code>displayWeekdays</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true the weekday-names will be displayed</td>\n</tr>\n<tr>\n<td><code>displayJumpToday</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true the button &quot;jump to today&quot; will be shown</td>\n</tr>\n<tr>\n<td><code>displayJumpSelected</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true the button &quot;jump to selected&quot; will be displayed</td>\n</tr>\n<tr>\n<td><code>selectedDate</code></td>\n<td>Date</td>\n<td>today</td>\n<td>The inital selected time</td>\n</tr>\n<tr>\n<td><code>selectRange</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, a range of days can be selected</td>\n</tr>\n<tr>\n<td><code>selectedRangeEnd</code></td>\n<td>Date</td>\n<td></td>\n<td>if set, the initial selected range ends here</td>\n</tr>\n<tr>\n<td><code>maxRangeLength</code></td>\n<td>number</td>\n<td>Infinity</td>\n<td>the max amount of days which can be in range</td>\n</tr>\n<tr>\n<td><code>minDate</code></td>\n<td>Date</td>\n<td>0.0.0</td>\n<td>min date which can be picked</td>\n</tr>\n<tr>\n<td><code>maxDate</code></td>\n<td>Date</td>\n<td>1.1.10000</td>\n<td>max date which can be picked</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-date-picker-demo-module.js.map