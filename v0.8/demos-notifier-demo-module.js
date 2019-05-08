(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-notifier-demo-module"],{

/***/ "./demo/app/demos/notifier/demo.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/notifier/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-button-group [(value)]=\"position\" mode=\"single\">\n  <button vcl-button [value]=\"positions.TopRight\">Top Right</button>\n  <button vcl-button [value]=\"positions.Top\">Top</button>\n  <button vcl-button [value]=\"positions.TopLeft\">Top Left</button>\n  <button vcl-button [value]=\"positions.BottomRight\">Bottom Right</button>\n  <button vcl-button [value]=\"positions.Bottom\">Bottom</button>\n  <button vcl-button [value]=\"positions.BottomLeft\">Bottom Left</button>\n</vcl-button-group>\n\n<br><br>\n\n<button vcl-button (click)=\"default()\">An message</button><br><br>\n<button vcl-button (click)=\"info()\">An info message</button><br><br>\n<button vcl-button (click)=\"success()\">A success message</button><br><br>\n<button vcl-button (click)=\"warning()\">A warning</button><br><br>\n<button vcl-button (click)=\"error()\">An error message</button><br><br>\n<button vcl-button (click)=\"custom()\">A custom message</button><br><br>\n"

/***/ }),

/***/ "./demo/app/demos/notifier/demo.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/notifier/demo.component.ts ***!
  \***************************************************/
/*! exports provided: NotifierContentComponent, NotifierDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierContentComponent", function() { return NotifierContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierDemoComponent", function() { return NotifierDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var cnt = 1;
var NotifierContentComponent = /** @class */ (function () {
    function NotifierContentComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotifierContentComponent.prototype, "text", void 0);
    NotifierContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: '<button class="vclButton">{{text}}</button>'
        })
    ], NotifierContentComponent);
    return NotifierContentComponent;
}());

var NotifierDemoComponent = /** @class */ (function () {
    function NotifierDemoComponent(notifier) {
        this.notifier = notifier;
        this.positions = _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["NotifierPosition"];
        this.position = _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["NotifierPosition"].TopRight;
    }
    NotifierDemoComponent.prototype.default = function () {
        this.notifier.queue({
            text: 'A message ' + cnt++,
            position: this.position
        });
    };
    NotifierDemoComponent.prototype.info = function () {
        this.notifier.info({
            text: 'An info message ' + cnt++,
            position: this.position
        });
    };
    NotifierDemoComponent.prototype.success = function () {
        this.notifier.success({
            text: 'A success message ' + cnt++,
            position: this.position
        });
    };
    NotifierDemoComponent.prototype.warning = function () {
        this.notifier.warning({
            text: 'A warning ' + cnt++,
            position: this.position
        });
    };
    NotifierDemoComponent.prototype.error = function () {
        this.notifier.error({
            text: 'An error message ' + cnt++,
            position: this.position
        });
    };
    NotifierDemoComponent.prototype.custom = function () {
        this.notifier.queue({
            text: '<b>A <i>custom</i> message</b>',
            html: true,
            // backgroundColor: 'black',
            // textColor: 'white',
            position: this.position,
            showCloseButton: false,
            timeout: 10000
        });
    };
    NotifierDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/notifier/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]])
    ], NotifierDemoComponent);
    return NotifierDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/notifier/demo.module.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/notifier/demo.module.ts ***!
  \************************************************/
/*! exports provided: demo, NotifierDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierDemoModule", function() { return NotifierDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/notifier/demo.component.ts");








function demo() {
    return {
        label: 'Notifiers',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["NotifierDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/notifier/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/notifier/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/notifier/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/notifier/demo.component.ts")
            }
        }
    };
}
var NotifierDemoModule = /** @class */ (function () {
    function NotifierDemoModule() {
    }
    NotifierDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLNotifierModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonGroupModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["NotifierDemoComponent"], _demo_component__WEBPACK_IMPORTED_MODULE_7__["NotifierContentComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["NotifierDemoComponent"], _demo_component__WEBPACK_IMPORTED_MODULE_7__["NotifierContentComponent"]]
        })
    ], NotifierDemoModule);
    return NotifierDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/notifier/demo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/notifier/demo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> [(<span class=\"hljs-attr\">value</span>)]=<span class=\"hljs-string\">\"position\"</span> <span class=\"hljs-attr\">mode</span>=<span class=\"hljs-string\">\"single\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"positions.TopRight\"</span>&gt;</span>Top Right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"positions.Top\"</span>&gt;</span>Top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"positions.TopLeft\"</span>&gt;</span>Top Left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"positions.BottomRight\"</span>&gt;</span>Bottom Right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"positions.Bottom\"</span>&gt;</span>Bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"positions.BottomLeft\"</span>&gt;</span>Bottom Left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"default()\"</span>&gt;</span>An message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"info()\"</span>&gt;</span>An info message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"success()\"</span>&gt;</span>A success message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"warning()\"</span>&gt;</span>A warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"error()\"</span>&gt;</span>An error message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"custom()\"</span>&gt;</span>A custom message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/notifier/demo.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/notifier/demo.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NotifierPosition, NotifierService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { Component, Input } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-keyword\">let</span> cnt = <span class=\"hljs-number\">1</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  template: <span class=\"hljs-string\">'&lt;button class=\"vclButton\"&gt;{{text}}&lt;/button&gt;'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> NotifierContentComponent {\n  <span class=\"hljs-meta\">@Input</span>()text;\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> NotifierDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> notifier: NotifierService</span>) {}\n\n  positions = NotifierPosition;\n  position: NotifierPosition = NotifierPosition.TopRight;\n\n  <span class=\"hljs-keyword\">default</span>() {\n    <span class=\"hljs-keyword\">this</span>.notifier.queue({\n      text: <span class=\"hljs-string\">'A message '</span> + cnt++,\n      position: <span class=\"hljs-keyword\">this</span>.position\n    });\n  }\n  info() {\n    <span class=\"hljs-keyword\">this</span>.notifier.info({\n      text: <span class=\"hljs-string\">'An info message '</span> + cnt++,\n      position: <span class=\"hljs-keyword\">this</span>.position\n    });\n  }\n  success() {\n    <span class=\"hljs-keyword\">this</span>.notifier.success({\n      text: <span class=\"hljs-string\">'A success message '</span> + cnt++,\n      position: <span class=\"hljs-keyword\">this</span>.position\n    });\n  }\n  warning() {\n    <span class=\"hljs-keyword\">this</span>.notifier.warning({\n      text: <span class=\"hljs-string\">'A warning '</span> + cnt++,\n      position: <span class=\"hljs-keyword\">this</span>.position\n    });\n  }\n  error() {\n    <span class=\"hljs-keyword\">this</span>.notifier.error({\n      text: <span class=\"hljs-string\">'An error message '</span> + cnt++,\n      position: <span class=\"hljs-keyword\">this</span>.position\n    });\n  }\n  custom() {\n    <span class=\"hljs-keyword\">this</span>.notifier.queue({\n      text: <span class=\"hljs-string\">'&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;'</span>,\n      html: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-comment\">// backgroundColor: 'black',</span>\n      <span class=\"hljs-comment\">// textColor: 'white',</span>\n      position: <span class=\"hljs-keyword\">this</span>.position,\n      showCloseButton: <span class=\"hljs-literal\">false</span>,\n      timeout: <span class=\"hljs-number\">10000</span>\n    });\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/notifier/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/notifier/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-notifier\">vcl-notifier</h1>\n<p>Growl-style notifiers</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLNotifierModule, VCLLayerModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ \n    VCLLayerModule.forRoot(),\n    VCLNotifierModule,\n  ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\">@Component({ ... })\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyComponent</span> </span>{\n\n  <span class=\"hljs-keyword\">constructor</span>(private notifier: NotifierService) {}\n\n  info() {\n    <span class=\"hljs-keyword\">this</span>.notifier.info({\n      <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">&apos;An info message&apos;</span>\n    });\n  }\n  success() {\n    <span class=\"hljs-keyword\">this</span>.notifier.success({\n      <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">&apos;A success message&apos;</span>,\n      <span class=\"hljs-attr\">position</span>: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class=\"hljs-keyword\">this</span>.notifier.warning({\n      <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">&apos;A warning&apos;</span>,\n      <span class=\"hljs-attr\">showCloseButton</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">timeout</span>: <span class=\"hljs-number\">10000</span>\n    });\n  }\n  error() {\n    <span class=\"hljs-keyword\">this</span>.notifier.error({\n      <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">&apos;An error message&apos;</span>,\n      <span class=\"hljs-attr\">timeout</span>: <span class=\"hljs-literal\">false</span>\n    });\n  }\n  custom() {\n    <span class=\"hljs-keyword\">this</span>.notifier.show({\n      <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">&apos;&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;&apos;</span>,\n      <span class=\"hljs-attr\">html</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">backgroundColor</span>: <span class=\"hljs-string\">&apos;black&apos;</span>,\n      <span class=\"hljs-attr\">textColor</span>: <span class=\"hljs-string\">&apos;white&apos;</span>,\n      <span class=\"hljs-attr\">position</span>: NotifierPosition.TopLeft,\n      <span class=\"hljs-attr\">showCloseButton</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">timeout</span>: <span class=\"hljs-number\">10000</span>\n    });\n  }\n}</pre>\n<h3 id=\"api\">API</h3>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class=\"hljs-built_in\">Error</span>\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> NotifierOptions {\n  text?: <span class=\"hljs-built_in\">string</span>;\n  html?: <span class=\"hljs-built_in\">boolean</span>;\n  <span class=\"hljs-keyword\">type</span>?: NotifierType;\n  showCloseButton?: <span class=\"hljs-built_in\">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class=\"hljs-built_in\">number</span> | <span class=\"hljs-built_in\">boolean</span>;\n  backgroundColor?: <span class=\"hljs-built_in\">string</span>;\n  textColor?: <span class=\"hljs-built_in\">string</span>;\n}</pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-notifier-demo-module.js.map