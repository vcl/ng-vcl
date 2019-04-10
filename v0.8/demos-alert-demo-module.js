(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-alert-demo-module"],{

/***/ "./demo/app/demos/alert/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/alert/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button vcl-button (click)=\"message()\">A message</button><br><br>\n<button vcl-button (click)=\"messageWithTitle()\">A title and a message</button><br><br>\n<button vcl-button (click)=\"info()\">An info</button><br><br>\n<button vcl-button (click)=\"success()\">A success</button><br><br>\n<button vcl-button (click)=\"warning()\">A warning</button><br><br>\n<button vcl-button (click)=\"error()\">An error</button><br><br>\n<button vcl-button (click)=\"htmlMessage()\">A html message</button><br><br>\n<button vcl-button (click)=\"custom()\">A custom info message</button><br><br>\n<button vcl-button (click)=\"question()\">A question</button><br><br>\n<button vcl-button (click)=\"async()\">An async request</button><br><br>\n<button vcl-button (click)=\"retry()\">Retrying an async request</button><br><br>\n<button vcl-button (click)=\"inputText()\">A text input</button><br><br>\n"

/***/ }),

/***/ "./demo/app/demos/alert/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/alert/demo.component.ts ***!
  \************************************************/
/*! exports provided: AlertDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDemoComponent", function() { return AlertDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





function createAsyncResult(data, error) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        setTimeout(function () {
            var err;
            if (typeof error === 'function') {
                err = error();
            }
            else {
                err = !!error;
            }
            if (err) {
                observer.error(data);
            }
            else {
                observer.next(data);
                observer.complete();
            }
        }, 1000);
    });
}
var AlertDemoComponent = /** @class */ (function () {
    function AlertDemoComponent(alert) {
        this.alert = alert;
    }
    AlertDemoComponent.prototype.message = function () {
        this.alert.alert('A message');
    };
    AlertDemoComponent.prototype.messageWithTitle = function () {
        this.alert.alert('A message', {
            title: 'A title'
        });
    };
    AlertDemoComponent.prototype.info = function () {
        this.alert.info('This is an information', {
            title: 'An information'
        });
    };
    AlertDemoComponent.prototype.success = function () {
        this.alert.success('You are successful', {
            title: 'A success'
        });
    };
    AlertDemoComponent.prototype.warning = function () {
        this.alert.warning('This is a warning', {
            title: 'A warning'
        });
    };
    AlertDemoComponent.prototype.error = function () {
        this.alert.error('This is an error', {
            title: 'An error'
        });
    };
    AlertDemoComponent.prototype.htmlMessage = function () {
        this.alert.alert("Use <i>as much<i> <a href=\"//www.w3schools.com/html/\">HTML</a> as you <b>like</b>", {
            html: true
        });
    };
    AlertDemoComponent.prototype.custom = function () {
        this.alert.open({
            text: 'This is a bit customized...',
            title: 'Information',
            type: _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonClass: 'vclSuggestive',
            confirmButtonPrepIcon: 'fas:bolt',
            cancelButtonColor: 'orange',
            customClass: 'vclScale130p',
        });
    };
    AlertDemoComponent.prototype.question = function () {
        var _this = this;
        this.alert.open({
            text: 'Do you really want to delete the file?',
            title: 'Delete file?',
            type: _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Question,
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonLabel: 'No',
            confirmButtonLabel: 'Yes'
        }).subscribe(function (result) {
            if (result.action === 'confirm') {
                _this.alert.success('File deleted');
            }
            else {
                _this.alert.error('Reason: ' + result.action, { title: 'File not deleted' });
            }
        });
    };
    AlertDemoComponent.prototype.async = function () {
        var _this = this;
        this.alert.open({
            text: 'Determine your user agent?',
            confirmAction: createAsyncResult(window.navigator.userAgent),
            showCancelButton: true
        }).subscribe(function (result) {
            if (result.action === 'confirm') {
                _this.alert.info(result.value, {
                    title: 'Your user agent'
                });
            }
        });
    };
    AlertDemoComponent.prototype.inputText = function () {
        var _this = this;
        this.alert.open({
            text: 'What is your name?',
            input: _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["AlertInput"].Text,
            confirmButtonLabel: 'Next',
            inputValidator: function (value) {
                if (typeof value !== 'string' || value.length < 2) {
                    throw new Error('Invalid name!');
                }
                return true;
            }
        }).subscribe(function (result) {
            if (result.action === 'confirm') {
                _this.alert.info('Hello ' + result.value);
            }
        });
    };
    AlertDemoComponent.prototype.retry = function () {
        var _this = this;
        // This fake async request will fail the first time
        var fails = 0;
        var fakeAsync = createAsyncResult(new Date().toLocaleTimeString(), function () { return ++fails <= 1; });
        // Add a retry routine using an alert
        var fakeAsyncWithRetries = fakeAsync.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (err) {
                return _this.alert.open({
                    text: 'Retry?',
                    type: _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning,
                    showCancelButton: true,
                    modal: true,
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
                    if (result.action === 'cancel') {
                        throw new Error();
                    }
                }));
            }));
        }));
        this.alert.open({
            text: 'Show current time? (will fail the first time)',
            showCancelButton: true,
            confirmAction: fakeAsyncWithRetries,
        }).subscribe(function (result) {
            _this.alert.info(result.value, { title: 'Time' });
        });
    };
    AlertDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/alert/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertDemoComponent);
    return AlertDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/alert/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/alert/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, AlertDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDemoModule", function() { return AlertDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/alert/demo.component.ts");







function demo() {
    return {
        label: 'Alert',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["AlertDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/alert/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/alert/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/alert/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/alert/demo.component.ts")
            }
        },
    };
}
var AlertDemoModule = /** @class */ (function () {
    function AlertDemoModule() {
    }
    AlertDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLAlertModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["AlertDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["AlertDemoComponent"]]
        })
    ], AlertDemoModule);
    return AlertDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/alert/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/alert/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"message()\"</span>&gt;</span>A message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"messageWithTitle()\"</span>&gt;</span>A title and a message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"info()\"</span>&gt;</span>An info<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"success()\"</span>&gt;</span>A success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"warning()\"</span>&gt;</span>A warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"error()\"</span>&gt;</span>An error<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"htmlMessage()\"</span>&gt;</span>A html message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"custom()\"</span>&gt;</span>A custom info message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"question()\"</span>&gt;</span>A question<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"async()\"</span>&gt;</span>An async request<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"retry()\"</span>&gt;</span>Retrying an async request<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"inputText()\"</span>&gt;</span>A text input<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/alert/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/alert/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Observable } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { AlertService, AlertType, AlertAlignment, AlertInput } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { retryWhen, switchMap, tap } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs/operators'</span>;\n\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">createAsyncResult</span>(<span class=\"hljs-params\">data: <span class=\"hljs-built_in\">any</span>, error?: <span class=\"hljs-built_in\">boolean</span> | <span class=\"hljs-built_in\">Function</span></span>): <span class=\"hljs-title\">Observable</span>&lt;<span class=\"hljs-title\">any</span>&gt; </span>{\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> Observable(<span class=\"hljs-function\"><span class=\"hljs-params\">observer</span> =&gt;</span> {\n    setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n      <span class=\"hljs-keyword\">let</span> err;\n      <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> error === <span class=\"hljs-string\">'function'</span>) {\n        err = error();\n      } <span class=\"hljs-keyword\">else</span> {\n        err = !!error;\n      }\n\n      <span class=\"hljs-keyword\">if</span> (err) {\n        observer.error(data);\n      } <span class=\"hljs-keyword\">else</span> {\n        observer.next(data);\n        observer.complete();\n      }\n    }, <span class=\"hljs-number\">1000</span>);\n  });\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> AlertDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> alert: AlertService</span>) {}\n\n  message() {\n    <span class=\"hljs-keyword\">this</span>.alert.alert(<span class=\"hljs-string\">'A message'</span>);\n  }\n\n  messageWithTitle() {\n    <span class=\"hljs-keyword\">this</span>.alert.alert(<span class=\"hljs-string\">'A message'</span>, {\n      title: <span class=\"hljs-string\">'A title'</span>\n    });\n  }\n\n  info() {\n    <span class=\"hljs-keyword\">this</span>.alert.info(<span class=\"hljs-string\">'This is an information'</span>, {\n      title: <span class=\"hljs-string\">'An information'</span>\n    });\n  }\n\n  success() {\n    <span class=\"hljs-keyword\">this</span>.alert.success(<span class=\"hljs-string\">'You are successful'</span>, {\n      title: <span class=\"hljs-string\">'A success'</span>\n    });\n  }\n\n  warning() {\n    <span class=\"hljs-keyword\">this</span>.alert.warning(<span class=\"hljs-string\">'This is a warning'</span>, {\n      title: <span class=\"hljs-string\">'A warning'</span>\n    });\n  }\n\n  error() {\n    <span class=\"hljs-keyword\">this</span>.alert.error(<span class=\"hljs-string\">'This is an error'</span>, {\n      title: <span class=\"hljs-string\">'An error'</span>\n    });\n  }\n\n  htmlMessage() {\n    <span class=\"hljs-keyword\">this</span>.alert.alert(<span class=\"hljs-string\">`Use &lt;i&gt;as much&lt;i&gt; &lt;a href=\"//www.w3schools.com/html/\"&gt;HTML&lt;/a&gt; as you &lt;b&gt;like&lt;/b&gt;`</span>, {\n      html: <span class=\"hljs-literal\">true</span>\n    });\n  }\n\n  custom() {\n    <span class=\"hljs-keyword\">this</span>.alert.open({\n      text: <span class=\"hljs-string\">'This is a bit customized...'</span>,\n      title: <span class=\"hljs-string\">'Information'</span>,\n      <span class=\"hljs-keyword\">type</span>: AlertType.Info,\n      showCloseButton: <span class=\"hljs-literal\">true</span>,\n      showCancelButton: <span class=\"hljs-literal\">true</span>,\n      confirmButtonClass: <span class=\"hljs-string\">'vclSuggestive'</span>,\n      confirmButtonPrepIcon: <span class=\"hljs-string\">'fas:bolt'</span>,\n      cancelButtonColor: <span class=\"hljs-string\">'orange'</span>,\n      customClass: <span class=\"hljs-string\">'vclScale130p'</span>,\n    });\n  }\n\n  question() {\n    <span class=\"hljs-keyword\">this</span>.alert.open({\n      text: <span class=\"hljs-string\">'Do you really want to delete the file?'</span>,\n      title: <span class=\"hljs-string\">'Delete file?'</span>,\n      <span class=\"hljs-keyword\">type</span>: AlertType.Question,\n      showCloseButton: <span class=\"hljs-literal\">true</span>,\n      showCancelButton: <span class=\"hljs-literal\">true</span>,\n      cancelButtonLabel: <span class=\"hljs-string\">'No'</span>,\n      confirmButtonLabel: <span class=\"hljs-string\">'Yes'</span>\n    }).subscribe(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n      <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">'confirm'</span>) {\n        <span class=\"hljs-keyword\">this</span>.alert.success(<span class=\"hljs-string\">'File deleted'</span>);\n      } <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-keyword\">this</span>.alert.error(<span class=\"hljs-string\">'Reason: '</span> + result.action , { title: <span class=\"hljs-string\">'File not deleted'</span> });\n      }\n    });\n  }\n\n  <span class=\"hljs-keyword\">async</span>() {\n    <span class=\"hljs-keyword\">this</span>.alert.open({\n      text: <span class=\"hljs-string\">'Determine your user agent?'</span>,\n      confirmAction: createAsyncResult(<span class=\"hljs-built_in\">window</span>.navigator.userAgent),\n      showCancelButton: <span class=\"hljs-literal\">true</span>\n    }).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">'confirm'</span>) {\n        <span class=\"hljs-keyword\">this</span>.alert.info(result.value, {\n          title: <span class=\"hljs-string\">'Your user agent'</span>\n        });\n      }\n    });\n  }\n\n  inputText() {\n    <span class=\"hljs-keyword\">this</span>.alert.open({\n      text: <span class=\"hljs-string\">'What is your name?'</span>,\n      input: AlertInput.Text,\n      confirmButtonLabel: <span class=\"hljs-string\">'Next'</span>,\n      inputValidator: <span class=\"hljs-function\">(<span class=\"hljs-params\">value</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> value !== <span class=\"hljs-string\">'string'</span> || value.length &lt; <span class=\"hljs-number\">2</span>) {\n          <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Error</span>(<span class=\"hljs-string\">'Invalid name!'</span>);\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n      }\n    }).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">'confirm'</span>) {\n        <span class=\"hljs-keyword\">this</span>.alert.info(<span class=\"hljs-string\">'Hello '</span> + result.value);\n      }\n    });\n  }\n\n  retry() {\n    <span class=\"hljs-comment\">// This fake async request will fail the first time</span>\n    <span class=\"hljs-keyword\">let</span> fails = <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-keyword\">const</span> fakeAsync = createAsyncResult(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().toLocaleTimeString(), <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> ++fails &lt;= <span class=\"hljs-number\">1</span>);\n\n    <span class=\"hljs-comment\">// Add a retry routine using an alert</span>\n    <span class=\"hljs-keyword\">const</span> fakeAsyncWithRetries = fakeAsync.pipe(\n      retryWhen(<span class=\"hljs-function\"><span class=\"hljs-params\">errors</span> =&gt;</span> {\n        <span class=\"hljs-keyword\">return</span> errors.pipe(switchMap(<span class=\"hljs-function\"><span class=\"hljs-params\">err</span> =&gt;</span> {\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.alert.open({\n            text: <span class=\"hljs-string\">'Retry?'</span>,\n            <span class=\"hljs-keyword\">type</span>: AlertType.Warning,\n            showCancelButton: <span class=\"hljs-literal\">true</span>,\n            modal: <span class=\"hljs-literal\">true</span>,\n          }).pipe(tap(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n            <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">'cancel'</span>) {\n              <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Error</span>();\n            }\n          }));\n        }));\n      }));\n\n    <span class=\"hljs-keyword\">this</span>.alert.open({\n      text: <span class=\"hljs-string\">'Show current time? (will fail the first time)'</span>,\n      showCancelButton: <span class=\"hljs-literal\">true</span>,\n      confirmAction: fakeAsyncWithRetries,\n    }).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-keyword\">this</span>.alert.info(result.value, { title: <span class=\"hljs-string\">'Time'</span> });\n    });\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/alert/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/alert/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-alert\">vcl-alert</h1>\n<p>Better javascript alert()</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-meta\">@Component</span>({ ... })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> MyComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> alert: AlertService</span>) {}\n\n  message() {\n    <span class=\"hljs-keyword\">this</span>.alert.success(<span class=\"hljs-string\">&apos;Done!&apos;</span>);\n  }\n\n  deleteFile() {\n    <span class=\"hljs-keyword\">this</span>.alert.open({\n      text: <span class=\"hljs-string\">&apos;Do you really want to delete the file?&apos;</span>,\n      title: <span class=\"hljs-string\">&apos;Delete file&apos;</span>,\n      <span class=\"hljs-keyword\">type</span>: AlertType.Question,\n      showCloseButton: <span class=\"hljs-literal\">true</span>,\n      showCancelButton: <span class=\"hljs-literal\">true</span>,\n      cancelButtonLabel: <span class=\"hljs-string\">&apos;No&apos;</span>,\n      confirmButtonLabel: <span class=\"hljs-string\">&apos;Yes&apos;</span>\n    }).subscribe(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n      <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">&apos;confirm&apos;</span>) {\n        <span class=\"hljs-keyword\">this</span>.alert.success(<span class=\"hljs-string\">&apos;File deleted&apos;</span>);\n      } <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-keyword\">this</span>.alert.error(<span class=\"hljs-string\">&apos;File not deleted&apos;</span>);\n      }\n    });\n  }\n\n}</pre>\n<h3 id=\"examples\">Examples</h3>\n<pre class=\"hljs\"><span class=\"hljs-comment\">// Simple message</span>\n<span class=\"hljs-keyword\">this</span>.alert.success(<span class=\"hljs-string\">&apos;A message&apos;</span>);\n\n<span class=\"hljs-comment\">// Message with a title</span>\n<span class=\"hljs-keyword\">this</span>.alert.info(<span class=\"hljs-string\">&apos;A message&apos;</span>, {\n  title: <span class=\"hljs-string\">&apos;A title&apos;</span>\n});\n\n<span class=\"hljs-comment\">// HTML Message</span>\n<span class=\"hljs-keyword\">this</span>.alert.open({\n  text: <span class=\"hljs-string\">`Use &lt;i&gt;as much&lt;i&gt; &lt;a href=&quot;//www.w3schools.com/html/&quot;&gt;HTML&lt;/a&gt; as you &lt;b&gt;like&lt;/b&gt;`</span>.\n  html: <span class=\"hljs-literal\">true</span>\n});\n\n<span class=\"hljs-comment\">// Customized info message</span>\n<span class=\"hljs-keyword\">this</span>.alert.open({\n  title: <span class=\"hljs-string\">&apos;Information&apos;</span>,\n  text: <span class=\"hljs-string\">&apos;This is a bit customized...&apos;</span>,\n  <span class=\"hljs-keyword\">type</span>: AlertType.Info,\n  showCloseButton: <span class=\"hljs-literal\">true</span>,\n  showCancelButton: <span class=\"hljs-literal\">true</span>,\n  confirmButtonClass: <span class=\"hljs-string\">&apos;vclSuggestive&apos;</span>,\n  confirmButtonPrepIcon: <span class=\"hljs-string\">&apos;fas:bolt&apos;</span>,\n  cancelButtonColor: <span class=\"hljs-string\">&apos;orange&apos;</span>,\n  customClass: <span class=\"hljs-string\">&apos;vclScale130p&apos;</span>,\n});\n\n<span class=\"hljs-comment\">// Confirmation</span>\n<span class=\"hljs-keyword\">this</span>.alert.open({\n  title: <span class=\"hljs-string\">&apos;Delete file&apos;</span>,\n  text: <span class=\"hljs-string\">&apos;Do you really want to delete the file?&apos;</span>,\n  <span class=\"hljs-keyword\">type</span>: AlertType.Question,\n  showCloseButton: <span class=\"hljs-literal\">true</span>,\n  showCancelButton: <span class=\"hljs-literal\">true</span>,\n  cancelButtonLabel: <span class=\"hljs-string\">&apos;No&apos;</span>,\n  confirmButtonLabel: <span class=\"hljs-string\">&apos;Yes&apos;</span>\n}).subscribe(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n  <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">&apos;confirm&apos;</span>) {\n    <span class=\"hljs-keyword\">this</span>.alert.success(<span class=\"hljs-string\">&apos;File deleted&apos;</span>);\n  } <span class=\"hljs-keyword\">else</span> {\n    <span class=\"hljs-keyword\">this</span>.alert.error(<span class=\"hljs-string\">&apos;File not deleted&apos;</span>);\n  }\n});\n\n<span class=\"hljs-comment\">// Handling async data</span>\n<span class=\"hljs-keyword\">this</span>.alert.open({\n  text: <span class=\"hljs-string\">&apos;Fetch data?&apos;</span>,\n  confirmAction: <span class=\"hljs-keyword\">this</span>.http.get(<span class=\"hljs-string\">&apos;/foo/data&apos;</span>),\n  showCancelButton: <span class=\"hljs-literal\">true</span>\n}).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n  <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">&apos;confirm&apos;</span>) {\n    <span class=\"hljs-keyword\">this</span>.alert.info(result.value, { title: <span class=\"hljs-string\">&apos;Your foo data&apos;</span> });\n  } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (result.action === <span class=\"hljs-string\">&apos;error&apos;</span>) {\n    <span class=\"hljs-keyword\">this</span>.alert.error(err, { title: <span class=\"hljs-string\">&apos;Could not fetch data&apos;</span> });\n  }\n});\n\n<span class=\"hljs-comment\">// With an input element</span>\n<span class=\"hljs-keyword\">this</span>.alert.open({\n  text: <span class=\"hljs-string\">&apos;What is your name?&apos;</span>,\n  input: AlertInput.Text,\n  confirmButtonLabel: <span class=\"hljs-string\">&apos;Next&apos;</span>,\n  inputValidator: <span class=\"hljs-function\">(<span class=\"hljs-params\">value</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> value !== <span class=\"hljs-string\">&apos;string&apos;</span> || value.length &lt; <span class=\"hljs-number\">2</span>) {\n      <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-string\">&apos;This is not your name!&apos;</span>;\n    }\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n  }\n}).subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n  <span class=\"hljs-keyword\">this</span>.alert.info(<span class=\"hljs-string\">&apos;Hello &apos;</span> + result.value);\n});</pre>\n<h3 id=\"some-helper-methods\">Some helper methods</h3>\n<pre class=\"hljs\">alert(text: <span class=\"hljs-built_in\">string</span>, opts?: AlertOptions); <span class=\"hljs-comment\">// Just the message</span>\ninfo(text: <span class=\"hljs-built_in\">string</span>, opts?: AlertOptions); <span class=\"hljs-comment\">// Message with AlertType.Info</span>\nsuccess(text: <span class=\"hljs-built_in\">string</span>, opts?: AlertOptions); <span class=\"hljs-comment\">// Message with AlertType.Success</span>\nwarning(text: <span class=\"hljs-built_in\">string</span>, opts?: AlertOptions); <span class=\"hljs-comment\">// Message with AlertType.Warning</span>\nerror(text: <span class=\"hljs-built_in\">string</span>, opts?: AlertOptions); <span class=\"hljs-comment\">// Message with AlertType.Error</span>\nquestion(text: <span class=\"hljs-built_in\">string</span>, opts?: AlertOptions); <span class=\"hljs-comment\">// Message with AlertType.Question and showCancelButton=true</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"alert-attributes\">Alert Attributes</h4>\n<p>All attributes are optional</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>text</code></td>\n<td>string</td>\n<td></td>\n<td>The main message</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>A title</td>\n</tr>\n<tr>\n<td><code>html</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Treats the main message as html when <code>true</code></td>\n</tr>\n<tr>\n<td><code>type</code></td>\n<td>AlertType</td>\n<td>None</td>\n<td>The type. Defines color and icon.</td>\n</tr>\n<tr>\n<td><code>modal</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Allow closing via ESC and offclick if true</td>\n</tr>\n<tr>\n<td><code>customClass</code></td>\n<td>string</td>\n<td></td>\n<td>A custom css class for the alert modal</td>\n</tr>\n<tr>\n<td><code>showConfirmButton</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Show the confirmation button</td>\n</tr>\n<tr>\n<td><code>showCancelButton</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Show the cancel button</td>\n</tr>\n<tr>\n<td><code>showCloseButton</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Show the close button</td>\n</tr>\n<tr>\n<td><code>confirmButtonLabel</code></td>\n<td>string</td>\n<td>&apos;OK&apos;</td>\n<td>Changes the confirm button label</td>\n</tr>\n<tr>\n<td><code>confirmButtonClass</code></td>\n<td>string</td>\n<td>&apos;vclEmphasized&apos;</td>\n<td>Adds a class to the confirm button</td>\n</tr>\n<tr>\n<td><code>confirmButtonPrepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the confirm button label</td>\n</tr>\n<tr>\n<td><code>confirmButtonAppIcon</code></td>\n<td>string</td>\n<td></td>\n<td>same as <code>confirmButtonPrepIcon</code>, but appended</td>\n</tr>\n<tr>\n<td><code>cancelButtonLabel</code></td>\n<td>string</td>\n<td>&apos;Cancel&apos;</td>\n<td>Changes the cancel button label</td>\n</tr>\n<tr>\n<td><code>cancelButtonClass</code></td>\n<td>string</td>\n<td>&apos;vclDanger&apos;</td>\n<td>Adds a class to the cancel button</td>\n</tr>\n<tr>\n<td><code>cancelButtonPrepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the cancel button label</td>\n</tr>\n<tr>\n<td><code>cancelButtonAppIcon</code></td>\n<td>string</td>\n<td></td>\n<td>same as <code>cancelButtonPrepIcon</code>, but appended</td>\n</tr>\n<tr>\n<td><code>cancelButtonThrowsError</code></td>\n<td>boolean</td>\n<td></td>\n<td>Throw an error instead of passing a result on cancel</td>\n</tr>\n<tr>\n<td><code>confirmAction</code></td>\n<td>Observable</td>\n<td></td>\n<td>Enables loader and subscribes to observable. Closes alert when the observable completes or errors.</td>\n</tr>\n<tr>\n<td><code>input</code></td>\n<td>AlertInput</td>\n<td>None</td>\n<td>Input element</td>\n</tr>\n<tr>\n<td><code>inputValue</code></td>\n<td>any</td>\n<td></td>\n<td>Default value for the input</td>\n</tr>\n<tr>\n<td><code>inputPlaceholder</code></td>\n<td>string</td>\n<td></td>\n<td>A placeholder. Shown in the input element when using AlertInput.Text</td>\n</tr>\n<tr>\n<td><code>inputValidator</code></td>\n<td>function</td>\n<td></td>\n<td>Input validator callback</td>\n</tr>\n</tbody></table>\n<h4 id=\"enums\">Enums</h4>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">enum</span> AlertType {\n  None,\n  Question,\n  Info,\n  Success,\n  Warning,\n  <span class=\"hljs-built_in\">Error</span>\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">enum</span> AlertInput {\n  None,\n  Text\n}</pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-alert-demo-module.js.map