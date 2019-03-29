(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-icon-demo-module"],{

/***/ "./demo/app/demos/icon/demo.component.html":
/*!*************************************************!*\
  !*** ./demo/app/demos/icon/demo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Custom icon (from the <i>Font Awesome</i> icon font):\n<vcl-icon icon=\"fas fa-cog\" alt=\"cog\"></vcl-icon>\n<br><br>\n\nIcon provider based (from the <i>Font Awesome</i> icon font):\n<vcl-icon icon=\"fas:cog\" alt=\"cog\"></vcl-icon>\n\n<br><br>\n\nPNG image resource based:\n<vcl-icon alt=\"cog\">\n  <img src=\"http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36\">\n</vcl-icon>\n\n<br><br>\n\nSVG based:\n<vcl-icon  [class]=\"'vclIconSize1'\">\n  <svg width=\"25\" height=\"25\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path id=\"mysvg\" d=\"M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z\"/></svg>\n</vcl-icon>\n"

/***/ }),

/***/ "./demo/app/demos/icon/demo.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/icon/demo.component.ts ***!
  \***********************************************/
/*! exports provided: IconDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDemoComponent", function() { return IconDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconDemoComponent = /** @class */ (function () {
    function IconDemoComponent() {
    }
    IconDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/icon/demo.component.html")
        })
    ], IconDemoComponent);
    return IconDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/icon/demo.module.ts":
/*!********************************************!*\
  !*** ./demo/app/demos/icon/demo.module.ts ***!
  \********************************************/
/*! exports provided: demo, IconDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDemoModule", function() { return IconDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/icon/demo.component.ts");







function demo() {
    return {
        label: 'Icon',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["IconDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/icon/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/icon/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/icon/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/icon/demo.component.ts")
            },
        },
    };
}
var IconDemoModule = /** @class */ (function () {
    function IconDemoModule() {
    }
    IconDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["IconDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["IconDemoComponent"]]
        })
    ], IconDemoModule);
    return IconDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/icon/demo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/icon/demo.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Custom icon (from the <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span>&gt;</span>Font Awesome<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span> icon font):\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas fa-cog\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"cog\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\nIcon provider based (from the <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span>&gt;</span>Font Awesome<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span> icon font):\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:cog\"</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"cog\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\nPNG image resource based:\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">alt</span>=<span class=\"hljs-string\">\"cog\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\nSVG based:\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span>  [<span class=\"hljs-attr\">class</span>]=<span class=\"hljs-string\">\"'vclIconSize1'\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">svg</span> <span class=\"hljs-attr\">width</span>=<span class=\"hljs-string\">\"25\"</span> <span class=\"hljs-attr\">height</span>=<span class=\"hljs-string\">\"25\"</span> <span class=\"hljs-attr\">viewBox</span>=<span class=\"hljs-string\">\"0 0 1792 1792\"</span> <span class=\"hljs-attr\">xmlns</span>=<span class=\"hljs-string\">\"http://www.w3.org/2000/svg\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">path</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"mysvg\"</span> <span class=\"hljs-attr\">d</span>=<span class=\"hljs-string\">\"M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z\"</span>/&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">svg</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/icon/demo.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/icon/demo.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> IconDemoComponent {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/icon/README.md":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/icon/README.md ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-icon\">vcl-icon</h1>\n<p>Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.</p>\n<h2 id=\"usage\">Usage</h2>\n<p>As a component</p>\n<pre class=\"hljs\"><code>&lt;vcl-icon icon=&quot;fas:cog&quot; aria-label=&quot;Settings&quot;&gt;&lt;/vcl-icon&gt;</code></pre>\n<p>With image resource</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">aria-label</span>=<span class=\"hljs-string\">&quot;Settings&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36&quot;</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span></pre>\n<p>With SVG</p>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span>  [<span class=\"hljs-attr\">class</span>]=<span class=\"hljs-string\">&quot;&apos;vclIconSize1&apos;&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">svg</span>  <span class=\"hljs-attr\">...</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">svg</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon generator lookup via icon class provider</td>\n</tr>\n<tr>\n<td><code>svguse</code></td>\n<td>string</td>\n<td></td>\n<td>Generates an SVG <code>use</code> tag referencing the value</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-icon-demo-module.js.map