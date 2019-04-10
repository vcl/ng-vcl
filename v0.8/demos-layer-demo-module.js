(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-layer-demo-module"],{

/***/ "./demo/app/demos/layer/demo.component.html":
/*!**************************************************!*\
  !*** ./demo/app/demos/layer/demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button vcl-button (click)=\"layer1.open()\">Open template layer</button>\n<br><br>\n<button vcl-button (click)=\"openComponentLayer()\">Open component layer</button>\n\n<vcl-layer #layer1=\"vclLayer\">\n  <div class=\"vclPanel vclPanelDialog vclNoMargin\">\n    <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <h3 class=\"vclPanelTitle\">\n        Layer\n      </h3>\n      <button vcl-icon-button icon=\"fas:times\" class=\"vclTransparent\" (click)=\"layer1.close()\"></button>\n    </div>\n    <div class=\"vclPanelBody\">\n      <p class=\"vclPanelContent\">\n        Press escape or click outside of layer to close<br><br>\n      </p>\n    </div>\n    <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <div></div>\n      <div class=\"vclLooseButtonGroup\">\n        <button vcl-button icon=\"fas:times\" class=\"vclTransparent vclOutline\" (click)=\"layer1.close()\">Close layer</button>\n        <button vcl-button icon=\"fas:times\" class=\"vclEmphasized\" (click)=\"layer2.open()\">Open modal layer</button>\n      </div>\n    </div>\n  </div>\n</vcl-layer>\n\n<vcl-layer #layer2=\"vclLayer\" [modal]=\"true\">\n  <div class=\"vclPanel vclPanelDialog vclNoMargin\">\n    <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <h3 class=\"vclPanelTitle\">Modal Layer</h3>\n      <button vcl-icon-button icon=\"fas:times\" class=\"vclTransparent\" (click)=\"layer2.close()\"></button>\n    </div>\n    <div class=\"vclPanelBody\">\n      <p class=\"vclPanelContent\">\n        Modal layers cannot be closed with escape or outside click\n      </p>\n    </div>\n    <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n      <div></div>\n      <div class=\"vclLooseButtonGroup\">\n        <button vcl-button icon=\"fas:times\" class=\"vclTransparent vclOutline\" (click)=\"layer2.close()\">Close layer</button>\n      </div>\n    </div>\n  </div>\n</vcl-layer>\n"

/***/ }),

/***/ "./demo/app/demos/layer/demo.component.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/layer/demo.component.ts ***!
  \************************************************/
/*! exports provided: LayerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerDemoComponent", function() { return LayerDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.component */ "./demo/app/demos/layer/example.component.ts");



var LayerDemoComponent = /** @class */ (function () {
    function LayerDemoComponent(layerRef) {
        this.layerRef = layerRef;
        layerRef.afterClose.subscribe(function (result) {
            console.log(result.value);
        });
    }
    LayerDemoComponent.prototype.openComponentLayer = function () {
        this.layerRef.open({
            title: 'Component Layer'
        });
    };
    LayerDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/layer/demo.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleLayerRef"]])
    ], LayerDemoComponent);
    return LayerDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/layer/demo.module.ts":
/*!*********************************************!*\
  !*** ./demo/app/demos/layer/demo.module.ts ***!
  \*********************************************/
/*! exports provided: demo, LayerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerDemoModule", function() { return LayerDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/layer/demo.component.ts");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example.component */ "./demo/app/demos/layer/example.component.ts");








function demo() {
    return {
        label: 'Layer',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/layer/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/layer/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts")
            },
            'example.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./example.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/example.component.html")
            },
            'example.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./example.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/example.component.ts")
            }
        },
    };
}
var LayerDemoModule = /** @class */ (function () {
    function LayerDemoModule() {
    }
    LayerDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLLayerModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo },
                    }]),
            ],
            providers: [
                _example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleLayerProvider"]
            ],
            entryComponents: [
                _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
                _example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"]
            ],
            declarations: [
                _demo_component__WEBPACK_IMPORTED_MODULE_6__["LayerDemoComponent"],
                _example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"]
            ]
        })
    ], LayerDemoModule);
    return LayerDemoModule;
}());



/***/ }),

/***/ "./demo/app/demos/layer/example.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/layer/example.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclPanel vclPanelDialog vclNoMargin\">\n  <div class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <h3 class=\"vclPanelTitle\">{{title}}</h3>\n    <button vcl-icon-button icon=\"fas:times\" class=\"vclTransparent\" (click)=\"close()\"></button>\n  </div>\n  <div class=\"vclPanelBody\">\n    <p class=\"vclPanelContent\">\n      Component layer content\n    </p>\n  </div>\n  <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <div></div>\n    <div class=\"vclLooseButtonGroup\">\n      <button vcl-button class=\"vclTransparent vclOutline\" (click)=\"close()\">Close Layer</button>\n      <button vcl-button class=\"vclEmphasized\" (click)=\"close('data')\">Close Layer with result</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/layer/example.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/layer/example.component.ts ***!
  \***************************************************/
/*! exports provided: ExampleLayerRef, exampleLayerFactory, ExampleLayerProvider, ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleLayerRef", function() { return ExampleLayerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleLayerFactory", function() { return exampleLayerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleLayerProvider", function() { return ExampleLayerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");



var ExampleLayerRef = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleLayerRef, _super);
    function ExampleLayerRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExampleLayerRef;
}(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["ComponentLayerRef"]));

var exampleLayerFactory = function (lf) { return lf.create(ExampleComponent, {
    modal: true,
    useClass: ExampleLayerRef
}); };
var ExampleLayerProvider = {
    provide: ExampleLayerRef,
    useFactory: exampleLayerFactory,
    deps: [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["LayerFactory"]]
};
var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(layerRef) {
        this.layerRef = layerRef;
    }
    Object.defineProperty(ExampleComponent.prototype, "title", {
        get: function () {
            return this.layerRef.data.title;
        },
        enumerable: true,
        configurable: true
    });
    ExampleComponent.prototype.close = function (value) {
        this.layerRef.close({
            value: value
        });
    };
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./example.component.html */ "./demo/app/demos/layer/example.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ExampleLayerRef])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/demo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/layer/demo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer1.open()\"</span>&gt;</span>Open template layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"openComponentLayer()\"</span>&gt;</span>Open component layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-layer</span> #<span class=\"hljs-attr\">layer1</span>=<span class=\"hljs-string\">\"vclLayer\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>\n        Layer\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer1.close()\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n        Press escape or click outside of layer to close<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer1.close()\"</span>&gt;</span>Close layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer2.open()\"</span>&gt;</span>Open modal layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-layer</span> #<span class=\"hljs-attr\">layer2</span>=<span class=\"hljs-string\">\"vclLayer\"</span> [<span class=\"hljs-attr\">modal</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>Modal Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer2.close()\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n        Modal layers cannot be closed with escape or outside click\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"layer2.close()\"</span>&gt;</span>Close layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-layer</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/layer/example.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/layer/example.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanel vclPanelDialog vclNoMargin\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelTitle\"</span>&gt;</span>{{title}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-icon-button</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:times\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close()\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelBody\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelContent\"</span>&gt;</span>\n      Component layer content\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclTransparent vclOutline\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close()\"</span>&gt;</span>Close Layer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"close('data')\"</span>&gt;</span>Close Layer with result<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/demo.component.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { ExampleLayerRef } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./example.component'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> LayerDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\">\n    <span class=\"hljs-keyword\">private</span> layerRef: ExampleLayerRef\n  </span>) {\n    layerRef.afterClose.subscribe(<span class=\"hljs-function\"><span class=\"hljs-params\">result</span> =&gt;</span> {\n      <span class=\"hljs-built_in\">console</span>.log(result.value);\n    });\n  }\n\n  openComponentLayer() {\n    <span class=\"hljs-keyword\">this</span>.layerRef.open({\n      title: <span class=\"hljs-string\">'Component Layer'</span>\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/layer/example.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/layer/example.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, Provider } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { ComponentLayerRef, LayerFactory } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> ExampleLayerData {\n  title: <span class=\"hljs-built_in\">string</span>;\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> ExampleLayerResult {\n  value: <span class=\"hljs-built_in\">string</span>;\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ExampleLayerRef <span class=\"hljs-keyword\">extends</span> ComponentLayerRef&lt;ExampleComponent, ExampleLayerData, ExampleLayerResult&gt; { }\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> exampleLayerFactory = <span class=\"hljs-function\">(<span class=\"hljs-params\">lf: LayerFactory</span>) =&gt;</span> lf.create(ExampleComponent, {\n  modal: <span class=\"hljs-literal\">true</span>,\n  useClass: ExampleLayerRef\n});\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> ExampleLayerProvider: Provider = {\n provide: ExampleLayerRef,\n useFactory: exampleLayerFactory,\n deps: [ LayerFactory ]\n};\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'example.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> ExampleComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> layerRef: ExampleLayerRef</span>) { }\n\n  <span class=\"hljs-keyword\">get</span> title() {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.layerRef.data.title;\n  }\n\n  close(value?: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-keyword\">this</span>.layerRef.close({\n      value\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/layer/README.md":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/layer/README.md ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>TODO</p>\n"

/***/ })

}]);
//# sourceMappingURL=demos-layer-demo-module.js.map