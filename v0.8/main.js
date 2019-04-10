(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/alert/demo.module": [
		"./demo/app/demos/alert/demo.module.ts",
		"common",
		"demos-alert-demo-module"
	],
	"./demos/autocomplete/demo.module": [
		"./demo/app/demos/autocomplete/demo.module.ts",
		"common",
		"demos-autocomplete-demo-module"
	],
	"./demos/badge/demo.module": [
		"./demo/app/demos/badge/demo.module.ts",
		"common",
		"demos-badge-demo-module"
	],
	"./demos/busy-indicator/demo.module": [
		"./demo/app/demos/busy-indicator/demo.module.ts",
		"common",
		"demos-busy-indicator-demo-module"
	],
	"./demos/button-group/demo.module": [
		"./demo/app/demos/button-group/demo.module.ts",
		"common",
		"demos-button-group-demo-module"
	],
	"./demos/button/demo.module": [
		"./demo/app/demos/button/demo.module.ts",
		"common",
		"demos-button-demo-module"
	],
	"./demos/checkbox/demo.module": [
		"./demo/app/demos/checkbox/demo.module.ts",
		"common",
		"demos-checkbox-demo-module"
	],
	"./demos/embedded-input-group/demo.module": [
		"./demo/app/demos/embedded-input-group/demo.module.ts",
		"common",
		"demos-embedded-input-group-demo-module"
	],
	"./demos/flip-switch/demo.module": [
		"./demo/app/demos/flip-switch/demo.module.ts",
		"common",
		"demos-flip-switch-demo-module"
	],
	"./demos/form-control-label/demo.module": [
		"./demo/app/demos/form-control-label/demo.module.ts",
		"common",
		"demos-form-control-label-demo-module"
	],
	"./demos/icogram/demo.module": [
		"./demo/app/demos/icogram/demo.module.ts",
		"common",
		"demos-icogram-demo-module"
	],
	"./demos/icon/demo.module": [
		"./demo/app/demos/icon/demo.module.ts",
		"common",
		"demos-icon-demo-module"
	],
	"./demos/input/demo.module": [
		"./demo/app/demos/input/demo.module.ts",
		"common",
		"demos-input-demo-module"
	],
	"./demos/label/demo.module": [
		"./demo/app/demos/label/demo.module.ts",
		"common",
		"demos-label-demo-module"
	],
	"./demos/layer/demo.module": [
		"./demo/app/demos/layer/demo.module.ts",
		"common",
		"demos-layer-demo-module"
	],
	"./demos/popover/demo.module": [
		"./demo/app/demos/popover/demo.module.ts",
		"common",
		"demos-popover-demo-module"
	],
	"./demos/radio-button/demo.module": [
		"./demo/app/demos/radio-button/demo.module.ts",
		"common",
		"demos-radio-button-demo-module"
	],
	"./demos/textarea/demo.module": [
		"./demo/app/demos/textarea/demo.module.ts",
		"common",
		"demos-textarea-demo-module"
	],
	"./demos/tour/demo.module": [
		"./demo/app/demos/tour/demo.module.ts",
		"common",
		"demos-tour-demo-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./demo/app/app-routing.module.ts":
/*!****************************************!*\
  !*** ./demo/app/app-routing.module.ts ***!
  \****************************************/
/*! exports provided: routes, appRoutingProviders, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./demo/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CAT_STATUS_INFORMATION = 'Status Information';
var CAT_TYPOGRAPHICAL = 'Typographical';
var CAT_FORM_CONTROLS = 'Form Controls';
var CAT_TABULAR_DATA = 'Tabular Data';
var CAT_NAVIGATION = 'Navigation';
var CAT_OVERLAYS = 'Overlays';
var CAT_BUTTONS = 'Buttons';
var CAT_FORMS = 'Forms';
var CAT_MEDIA = 'Media';
var CAT_MISC = 'Misc';
var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        loadChildren: './demos/badge/demo.module#BadgeDemoModule',
        path: 'badge',
        data: {
            demo: {
                label: 'Badge',
                category: CAT_TYPOGRAPHICAL,
            }
        }
    },
    {
        loadChildren: './demos/label/demo.module#LabelDemoModule',
        path: 'label',
        data: {
            demo: {
                label: 'Label',
                category: CAT_TYPOGRAPHICAL,
            }
        }
    },
    // {
    //   loadChildren: './demos/navigation/demo.module#NavigationDemoModule',
    //   path: 'navigation',
    //   data: {
    //     demo: {
    //       label: 'Navigation',
    //       category: CAT_NAVIGATION,
    //     }
    //   }
    // },
    // {
    //   loadChildren: './demos/tab-nav/demo.module#TabNavDemoModule',
    //   path: 'tab-nav',
    //   data: {
    //     demo: {
    //       label: 'Tab Navigation',
    //       category: CAT_NAVIGATION,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/button/demo.module#ButtonDemoModule',
        path: 'button',
        data: {
            demo: {
                label: 'Button',
                category: CAT_BUTTONS,
            }
        }
    },
    {
        loadChildren: './demos/button-group/demo.module#ButtonGroupDemoModule',
        path: 'button-group',
        data: {
            demo: {
                label: 'Button Group',
                category: CAT_BUTTONS,
            }
        }
    },
    {
        loadChildren: './demos/checkbox/demo.module#CheckboxDemoModule',
        path: 'checkbox',
        data: {
            demo: {
                label: 'Checkbox',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    // {
    //   loadChildren: './demos/date-picker/demo.module#DatePickerDemoModule',
    //   path: 'date-picker',
    //   data: {
    //     demo: {
    //       label: 'Date Picker',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    // {
    //   loadChildren: './demos/dropdown/demo.module#DropdownDemoModule',
    //   path: 'dropdown',
    //   data: {
    //     demo: {
    //       label: 'Dropdown',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    // {
    //   loadChildren: './demos/file-input/demo.module#FileInputDemoModule',
    //   path: 'file-input',
    //   data: {
    //     demo: {
    //       label: 'File Input',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/flip-switch/demo.module#FlipSwitchDemoModule',
        path: 'flip-switch',
        data: {
            demo: {
                label: 'Flip-Switch',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    {
        loadChildren: './demos/input/demo.module#InputDemoModule',
        path: 'input',
        data: {
            demo: {
                label: 'Input',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    // {
    //   loadChildren: './demos/password-input/demo.module#PasswordInputDemoModule',
    //   path: 'password-input',
    //   data: {
    //     demo: {
    //       label: 'Password Input',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    // {
    //   loadChildren: './demos/input-control-group/demo.module#InputControlGroupDemoModule',
    //   path: 'input-control-group',
    //   data: {
    //     demo: {
    //       label: 'Input Control Group',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/embedded-input-group/demo.module#EmbeddedInputGroupDemoModule',
        path: 'embedded-input-group',
        data: {
            demo: {
                label: 'Embedded Input Group',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    // {
    //   loadChildren: './demos/month-picker/demo.module#MonthPickerDemoModule',
    //   path: 'month-picker',
    //   data: {
    //     demo: {
    //       label: 'Month Picker',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/radio-button/demo.module#RadioButtonDemoModule',
        path: 'radio-button',
        data: {
            demo: {
                label: 'Radio Button',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    // {
    //   loadChildren: './demos/select/demo.module#SelectDemoModule',
    //   path: 'select',
    //   data: {
    //     demo: {
    //       label: 'Select',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    // {
    //   loadChildren: './demos/slider/demo.module#SliderDemoModule',
    //   path: 'slider',
    //   data: {
    //     demo: {
    //       label: 'Slider',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/textarea/demo.module#TextareaDemoModule',
        path: 'textarea',
        data: {
            demo: {
                label: 'Textarea',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    // {
    //   loadChildren: './demos/token/demo.module#TokenDemoModule',
    //   path: 'token',
    //   data: {
    //     demo: {
    //       label: 'Token',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/autocomplete/demo.module#AutocompleteDemoModule',
        path: 'autocomplete',
        data: {
            demo: {
                label: 'Autocomplete',
                category: CAT_FORM_CONTROLS,
            }
        }
    },
    // {
    //   loadChildren: './demos/form-mashups/demo.module#FormMashupsDemoModule',
    //   path: 'form-mashups',
    //   data: {
    //     demo: {
    //       label: 'Mashups',
    //       category: CAT_FORM_CONTROLS,
    //     }
    //   }
    // },
    // // {
    // //   loadChildren: './demos/form/demo.module#FormDemoModule',
    // //   path: 'form',
    // //   data: {
    // //     demo: {
    // //       label: 'All Controls Example',
    // //       category: CAT_FORMS,
    // //     }
    // //   }
    // // },
    {
        loadChildren: './demos/form-control-label/demo.module#FormControlLabelDemoModule',
        path: 'form-control-label',
        data: {
            demo: {
                label: 'Form Control Label',
                category: CAT_FORMS,
            }
        }
    },
    // // {
    // //   loadChildren: './demos/jss-form/demo.module#VCLJssFormDemoModule',
    // //   path: 'jss-form',
    // //   data: {
    // //     demo: {
    // //       label: 'JSS-Form',
    // //       category: CAT_FORMS,
    // //     }
    // //   }
    // // },
    // // {
    // //   loadChildren: './demos/form-layouts/demo.module#FormLayoutsDemoModule',
    // //   path: 'form-layouts',
    // //   data: {
    // //     demo: {
    // //       label: 'Layouts',
    // //       category: CAT_FORMS,
    // //     }
    // //   }
    // // },
    {
        loadChildren: './demos/alert/demo.module#AlertDemoModule',
        path: 'alert',
        data: {
            demo: {
                label: 'Alert',
                category: CAT_OVERLAYS,
            }
        }
    },
    {
        loadChildren: './demos/layer/demo.module#LayerDemoModule',
        path: 'layer',
        data: {
            demo: {
                label: 'Layer',
                category: CAT_OVERLAYS,
            }
        }
    },
    {
        loadChildren: './demos/popover/demo.module#PopoverDemoModule',
        path: 'popover',
        data: {
            demo: {
                label: 'Popover',
                category: CAT_OVERLAYS,
            }
        }
    },
    // {
    //   loadChildren: './demos/tooltip/demo.module#ToolTipDemoModule',
    //   path: 'tooltip',
    //   data: {
    //     demo: {
    //       label: 'Tooltip',
    //       category: CAT_OVERLAYS,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/tour/demo.module#TourDemoModule',
        path: 'tour',
        data: {
            demo: {
                label: 'Tour',
                category: CAT_OVERLAYS,
            }
        }
    },
    {
        loadChildren: './demos/icon/demo.module#IconDemoModule',
        path: 'icon',
        data: {
            demo: {
                label: 'Icon',
                category: CAT_MEDIA,
            }
        }
    },
    {
        loadChildren: './demos/icogram/demo.module#IcogramDemoModule',
        path: 'icogram',
        data: {
            demo: {
                label: 'Icogram',
                category: CAT_MEDIA,
            }
        }
    },
    // {
    //   loadChildren: './demos/zoom-box/demo.module#ZoomBoxDemoModule',
    //   path: 'zoom-box',
    //   data: {
    //     demo: {
    //       label: 'Zoom-Box',
    //       category: CAT_MEDIA,
    //     }
    //   }
    // },
    // {
    //   loadChildren: './demos/gallery/demo.module#GalleryDemoModule',
    //   path: 'gallery',
    //   data: {
    //     demo: {
    //       label: 'Gallery',
    //       category: CAT_MEDIA,
    //     }
    //   }
    // },
    {
        loadChildren: './demos/busy-indicator/demo.module#BusyDemoModule',
        path: 'busy-indicator',
        data: {
            demo: {
                label: 'Busy Indicator',
                category: CAT_STATUS_INFORMATION,
            }
        }
    },
];
var appRoutingProviders = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true
                })],
            providers: appRoutingProviders.slice(),
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/*!********************************!*\
  !*** ./demo/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/app.component */ "./demo/app/components/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./demo/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./demo/app/app-routing.module.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLIconModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLFontAwesomeModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLMaterialDesignModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLNavigationModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_6__["VCLLayerModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"]
            ],
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            ],
            entryComponents: [],
            bootstrap: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/app/components/app/app.component.html":
/*!****************************************************!*\
  !*** ./demo/app/components/app/app.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclLayoutVertical docMain\">\n  <header class=\"vclApplicationHeader vclLayoutHorizontal vclLayoutCenter vclLayoutJustified\">\n    <div role=\"banner\">\n      <a href=\"#\" class=\"vclLayoutHorizontal vclLayoutCenter\">\n        <img class=\"vclResponsiveImage vclLogo\" role=\"presentation\" src=\"https://cdn.jsdelivr.net/gh/ng-vcl/ng-vcl/gfx/angular_vcl_logo_square.png\">\n        <h1 class=\"vclAppName\">Angular VCL Demo Browser (v{{version}}<span *ngIf=\"gitBranch\"> {{gitBranch}}</span>)</h1>\n      </a>\n    </div>\n    <div><a href=\"https://github.com/ng-vcl/ng-vcl\" target=\"_blank\" title=\"to Github\">\n      <span class=\"vclIcon fab fa-github fa-3x\"></span> </a>\n    </div>\n  </header>\n  <div class=\"vclContentArea vclLayoutFlex vclLayoutHorizontal\">\n    <div class=\"vclLayoutVertical docNav\">\n      <div class=\"vclInputGroupEmb\">\n        <span class=\"vclPrepended\">\n          <vcl-icon icon=\"fas:search\"></vcl-icon>\n        </span>\n\n        <input #searchInput (keyup)=\"search(searchInput.value)\"\n          class=\"vclInput vclNoBorder vclPrepItem vclAppItem searchInput\"\n          type=\"search\"\n          name=\"search\"\n          placeholder=\"Search Modules\"\n          autocomplete=\"off\"\n          autofocus />\n\n        <button vcl-button *ngIf=\"searchInput.value\"\n          (tap)=\"searchInput.value = ''; search('')\"\n          class=\"vclButton vclTransparent vclSquare vclAppended\"\n          icon=\"fas:times-circle\"></button>\n      </div>\n\n      <nav vcl-navigation class=\"vclScrollable vclYOnHover vclLayoutFlex\"\n        [type]=\"'vertical'\"\n        [useRouter]=\"true\"\n        [subLevelHintIconSide]=\"'left'\"\n        [subLevelHintIconOpened]=\"'fas:angle-down'\"\n        [subLevelHintIconClosed]=\"'fas:angle-right'\">\n\n        <div *ngIf=\"searchResults.length; else noSearch\">\n          <vcl-navitem *ngFor=\"let searchResult of searchResults\" [label]=\"searchResult.label\" [route]=\"searchResult.route\"></vcl-navitem>\n        </div>\n\n        <ng-template #noSearch>\n          <vcl-navitem *ngFor=\"let item of GROUPED_DEMOS\" [label]=\"item.label\">\n            <ng-container *ngIf=\"item.items\">\n              <vcl-navitem *ngFor=\"let subitem of item.items\" [label]=\"subitem.label\" [route]=\"subitem.route\"></vcl-navitem>\n            </ng-container>\n          </vcl-navitem>\n        </ng-template>\n\n      </nav>\n    </div>\n    <div class=\"vclScrollable vclLayoutFlex docContent\"> \n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/components/app/app.component.ts":
/*!**************************************************!*\
  !*** ./demo/app/components/app/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app-routing.module */ "./demo/app/app-routing.module.ts");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.version = __webpack_require__(/*! ./../../../../package.json */ "./package.json").version;
        this.gitBranch = "v0.8" || false;
        this.GROUPED_DEMOS = function () {
            var itemsMap = {};
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"].forEach(function (r) {
                if (r.data && r.data['demo']) {
                    var demo = r.data['demo'];
                    if (!itemsMap[demo.category]) {
                        itemsMap[demo.category] = [];
                    }
                    itemsMap[demo.category].push({
                        label: demo.label,
                        route: ['/' + r.path]
                    });
                }
            });
            return Object.keys(itemsMap).map(function (category) { return ({
                label: category,
                items: itemsMap[category]
            }); });
        }();
        this.searchResults = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (path) {
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.search = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.searchResults = new fuse_js__WEBPACK_IMPORTED_MODULE_4__(this.GROUPED_DEMOS, {
                    keys: ['items.label']
                }).search(text)
                    .reduce(function (p, demoGroup) {
                    return p.concat(new fuse_js__WEBPACK_IMPORTED_MODULE_4__(demoGroup.items, { keys: ['label'] }).search(text));
                }, []);
                return [2 /*return*/];
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-demo',
            template: __webpack_require__(/*! ./app.component.html */ "./demo/app/components/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/components/home/home.component.html":
/*!******************************************************!*\
  !*** ./demo/app/components/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"markdown-body\"  [innerHtml]=\"readme\"></div>\n"

/***/ }),

/***/ "./demo/app/components/home/home.component.ts":
/*!****************************************************!*\
  !*** ./demo/app/components/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var README = __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/README.md");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(HomeComponent.prototype, "readme", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(README);
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./demo/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/*!******************************************!*\
  !*** ./demo/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./lib/ng-vcl/src/alert/alert.component.html":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/alert/alert.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclPanel vclPanelDialog vclNoMargin\" [ngClass]=\"alertClass\" style=\"min-width: 25em\" role=\"dialog\">\n  <div *ngIf=\"alert.title\" class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <h3 class=\"vclPanelTitle\">{{alert.title}}</h3>\n    <button *ngIf=\"alert.showCloseButton\" vcl-icon-button icon=\"fas:times\" class=\"vclTransparent\" (click)=\"close()\"></button>\n  </div>\n\n  <div class=\"vclPanelBody\">\n    <div class=\"vclPanelContent\">\n      <div class=\"vclIcogram\">\n        <vcl-icon *ngIf=\"iconClass\" class=\"vclScale300p\" [icon]=\"iconClass\" aria-hidden=\"true\" role=\"img\"></vcl-icon>\n        <div *ngIf=\"alert.text && !alert.html\">{{alert.text}}</div>\n        <div [innerHtml]=\"alert.text\" *ngIf=\"alert.text && alert.html\"></div>\n      </div>\n\n      <div class=\"vclInputControlGroup\" *ngIf=\"alert.input\">\n        <p></p>\n        <input vclInput vclInputAlert [class.vclError]=\"validationError\" [alert]=\"alert\" (input)=\"valueChange($event.target.value)\">\n        <div *ngIf=\"validationError\" class=\"vclFormControlHint vclError\">\n          {{validationError}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n    <div></div>\n    <div class=\"vclLooseButtonGroup\">\n\n      <button vcl-icogram-button\n        *ngIf=\"!!alert.showCancelButton\"\n        type=\"button\"\n        [style.background-color]=\"!!alert.cancelButtonColor\"\n        [ngClass]=\"alert.cancelButtonClass\"\n        [appIcon]=\"alert.cancelButtonAppIcon\"\n        [prepIcon]=\"alert.cancelButtonPrepIcon\"\n        [disabled]=\"(!alert.showConfirmButton && !!loader)\"\n        [appIcon]=\"(!alert.showConfirmButton && !!loader) ? null : alert.cancelButtonAppIcon\"\n        [prepIcon]=\"(!alert.showConfirmButton && !!loader) ? 'vcl:busy' : alert.cancelButtonPrepIcon\"\n        (click)=\"cancel()\"\n        >\n        {{alert.cancelButtonLabel}}\n      </button>\n\n      <button vcl-icogram-button\n        *ngIf=\"!!alert.showConfirmButton\"\n        type=\"button\"\n        (click)=\"confirm()\"\n        [style.background-color]=\"alert.confirmButtonColor\"\n        [ngClass]=\"alert.confirmButtonClass\"\n        [disabled]=\"loader\"\n        [appIcon]=\"loader ? null : alert.confirmButtonAppIcon\"\n        [prepIcon]=\"loader ? 'vcl:busy' : alert.confirmButtonPrepIcon\"\n        >\n        {{alert.confirmButtonLabel}}\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertLayerRef, AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertLayerRef", function() { return AlertLayerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layer */ "./lib/ng-vcl/src/layer/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/alert/types.ts");





var AlertLayerRef = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AlertLayerRef, _super);
    function AlertLayerRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AlertLayerRef;
}(_layer__WEBPACK_IMPORTED_MODULE_3__["ComponentLayerRef"]));

var AlertComponent = /** @class */ (function () {
    function AlertComponent(elementRef, alertLayer, cdRef) {
        this.elementRef = elementRef;
        this.alertLayer = alertLayer;
        this.cdRef = cdRef;
        this.loader = false;
    }
    Object.defineProperty(AlertComponent.prototype, "alert", {
        get: function () {
            return this.alertLayer.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "alertClass", {
        get: function () {
            return _types__WEBPACK_IMPORTED_MODULE_4__["TYPE_CLASS_MAP"][this.alert.type || _types__WEBPACK_IMPORTED_MODULE_4__["AlertType"].None].alertClass + ' ' + (this.alert.customClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconClass", {
        get: function () {
            return _types__WEBPACK_IMPORTED_MODULE_4__["TYPE_CLASS_MAP"][this.alert.type || _types__WEBPACK_IMPORTED_MODULE_4__["AlertType"].None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    AlertComponent.prototype.confirm = function () {
        var _this = this;
        if (this.loader) {
            return;
        }
        var result = {
            action: 'confirm',
        };
        if (this.alert.input) {
            if (this.alert.inputValidator) {
                try {
                    var valid = this.alert.inputValidator(this.value);
                    if (!valid) {
                        this.validationError = 'Invalid value';
                        return;
                    }
                    result.value = this.value;
                }
                catch (ex) {
                    this.validationError = String(ex);
                    return;
                }
            }
        }
        if (this.alert.confirmAction) {
            this.loader = true;
            this.cdRef.markForCheck();
            var $ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(typeof this.alert.confirmAction === 'function' ? this.alert.confirmAction(result) : this.alert.confirmAction);
            this.confirmActionSub = $.subscribe(function (value) {
                var asyncResult = {
                    action: 'confirm',
                    value: value
                };
                _this.alertLayer.close(asyncResult);
            }, function (err) {
                var errorResult = {
                    action: 'error',
                    value: err
                };
                _this.alertLayer.close(errorResult);
            });
        }
        else {
            this.alertLayer.close(result);
        }
    };
    AlertComponent.prototype.cancel = function () {
        if (this.confirmActionSub) {
            this.confirmActionSub.unsubscribe();
        }
        var result = {
            action: 'cancel'
        };
        this.alertLayer.close(result);
    };
    AlertComponent.prototype.close = function () {
        var result = {
            action: 'close'
        };
        this.alertLayer.close(result);
    };
    AlertComponent.prototype.valueChange = function (value) {
        this.value = value;
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.confirmActionSub && this.confirmActionSub.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./alert.component.html */ "./lib/ng-vcl/src/alert/alert.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                '[tabindex]': '0',
                '[style.outline]': '"none"'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_layer__WEBPACK_IMPORTED_MODULE_3__["ComponentLayerRef"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            AlertLayerRef,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/alert/alert.service.ts":
/*!***********************************************!*\
  !*** ./lib/ng-vcl/src/alert/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/alert/types.ts");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./lib/ng-vcl/src/alert/alert.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layer */ "./lib/ng-vcl/src/layer/index.ts");






var AlertService = /** @class */ (function () {
    function AlertService(lf) {
        this.lf = lf;
    }
    AlertService.prototype.alert = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text }, opts);
    };
    AlertService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: _types__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info }, opts);
    };
    AlertService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: _types__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success }, opts);
    };
    AlertService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: _types__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning }, opts);
    };
    AlertService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: _types__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error }, opts);
    };
    AlertService.prototype.question = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: _types__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Question, showCancelButton: true }, opts);
    };
    AlertService.prototype.open = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var alert = Object.assign.apply(Object, [{}, _types__WEBPACK_IMPORTED_MODULE_2__["ALERT_DEFAULTS"]].concat(opts));
        var layerRef = this.lf.create(_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], {
            modal: alert.modal,
            useClass: _alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertLayerRef"]
        });
        layerRef.open(alert);
        return layerRef.afterClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result || {
                action: 'close'
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_layer__WEBPACK_IMPORTED_MODULE_5__["LayerFactory"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/alert/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/alert/index.ts ***!
  \***************************************/
/*! exports provided: AlertService, AlertType, AlertInput, AlertAlignment, VCLAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLAlertModule", function() { return VCLAlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icogram_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../icogram/index */ "./lib/ng-vcl/src/icogram/index.ts");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../layer */ "./lib/ng-vcl/src/layer/index.ts");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _busy_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../busy-indicator */ "./lib/ng-vcl/src/busy-indicator/index.ts");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alert.component */ "./lib/ng-vcl/src/alert/alert.component.ts");
/* harmony import */ var _input_alert_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input-alert.directive */ "./lib/ng-vcl/src/alert/input-alert.directive.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alert.service */ "./lib/ng-vcl/src/alert/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/alert/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _types__WEBPACK_IMPORTED_MODULE_13__["AlertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertInput", function() { return _types__WEBPACK_IMPORTED_MODULE_13__["AlertInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertAlignment", function() { return _types__WEBPACK_IMPORTED_MODULE_13__["AlertAlignment"]; });
















var VCLAlertModule = /** @class */ (function () {
    function VCLAlertModule() {
    }
    VCLAlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _button_index__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _input_index__WEBPACK_IMPORTED_MODULE_7__["VCLInputModule"],
                _icogram_index__WEBPACK_IMPORTED_MODULE_4__["VCLIcogramModule"],
                _icon__WEBPACK_IMPORTED_MODULE_8__["VCLIconModule"],
                _busy_indicator__WEBPACK_IMPORTED_MODULE_9__["VCLBusyIndicatorModule"],
                _layer__WEBPACK_IMPORTED_MODULE_6__["VCLLayerModule"]
            ],
            exports: [],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"], _input_alert_directive__WEBPACK_IMPORTED_MODULE_11__["AlertInputDirective"]],
            entryComponents: [_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"]],
            providers: [_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"]],
        })
    ], VCLAlertModule);
    return VCLAlertModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/alert/input-alert.directive.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/alert/input-alert.directive.ts ***!
  \*******************************************************/
/*! exports provided: AlertInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInputDirective", function() { return AlertInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/alert/types.ts");



// TODO: support text, password, textarea, select, radio, checkbox file.
var AlertInputDirective = /** @class */ (function () {
    function AlertInputDirective(elementRef) {
        this.elementRef = elementRef;
        this.alert = {};
        this.inputValue = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(AlertInputDirective.prototype, "input", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    AlertInputDirective.prototype.ngOnInit = function () {
        if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
            this.inputValue = this.alert.inputValue;
        }
    };
    AlertInputDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.input) {
            setTimeout(function () { return _this.input.focus(); }, 1);
        }
    };
    Object.defineProperty(AlertInputDirective.prototype, "control", {
        get: function () {
            switch (this.alert.input) {
                case _types__WEBPACK_IMPORTED_MODULE_2__["AlertInput"].Text: return 'input';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertInputDirective.prototype, "placeholder", {
        get: function () {
            return this.alert.inputPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    AlertInputDirective.prototype.inputValueChange = function (value) {
        this.valueChange.emit(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertInputDirective.prototype, "alert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertInputDirective.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.placeholder'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertInputDirective.prototype, "placeholder", null);
    AlertInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[vclInputAlert]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AlertInputDirective);
    return AlertInputDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/alert/types.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/alert/types.ts ***!
  \***************************************/
/*! exports provided: AlertType, AlertAlignment, AlertInput, ALERT_DEFAULTS, TYPE_CLASS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertAlignment", function() { return AlertAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInput", function() { return AlertInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_DEFAULTS", function() { return ALERT_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CLASS_MAP", function() { return TYPE_CLASS_MAP; });
var _a;
var AlertType;
(function (AlertType) {
    AlertType[AlertType["None"] = 0] = "None";
    AlertType[AlertType["Question"] = 1] = "Question";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Success"] = 3] = "Success";
    AlertType[AlertType["Warning"] = 4] = "Warning";
    AlertType[AlertType["Error"] = 5] = "Error";
})(AlertType || (AlertType = {}));
var AlertAlignment;
(function (AlertAlignment) {
    AlertAlignment[AlertAlignment["Left"] = 0] = "Left";
    AlertAlignment[AlertAlignment["Center"] = 1] = "Center";
    AlertAlignment[AlertAlignment["Right"] = 2] = "Right";
})(AlertAlignment || (AlertAlignment = {}));
var AlertInput;
(function (AlertInput) {
    AlertInput[AlertInput["None"] = 0] = "None";
    AlertInput[AlertInput["Text"] = 1] = "Text";
})(AlertInput || (AlertInput = {}));
var ALERT_DEFAULTS = {
    type: AlertType.None,
    html: false,
    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: false,
    modal: false,
    cancelButtonLabel: 'Cancel',
    cancelButtonClass: 'vclTransparent vclOutline',
    confirmButtonLabel: 'OK',
    confirmButtonClass: 'vclEmphasized',
    input: AlertInput.None,
};
var TYPE_CLASS_MAP = (_a = {},
    _a[AlertType.None] = {
        alertClass: '',
        iconClass: ''
    },
    _a[AlertType.Question] = {
        alertClass: '',
        iconClass: 'vcl:question'
    },
    _a[AlertType.Info] = {
        alertClass: 'vclInfo',
        iconClass: 'vcl:info'
    },
    _a[AlertType.Success] = {
        alertClass: 'vclSuccess',
        iconClass: 'vcl:success'
    },
    _a[AlertType.Warning] = {
        alertClass: 'vclWarning',
        iconClass: 'vcl:warning'
    },
    _a[AlertType.Error] = {
        alertClass: 'vclError',
        iconClass: 'vcl:error'
    },
    _a);


/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-header.component.html":
/*!************************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclDropdownItemGroupHeaderLabel\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-header.component.ts":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: AutocompleteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteHeaderComponent", function() { return AutocompleteHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutocompleteHeaderComponent = /** @class */ (function () {
    function AutocompleteHeaderComponent() {
        // TODO: Workaround
        this.styleDisplay = 'block';
        this.classVCLDropdownItemGroupHeader = true;
        // TODO: Find appropriate role
        // @HostBinding('attr.role')
        // attrRole = 'menuitem';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteHeaderComponent.prototype, "styleDisplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDropdownItemGroupHeader'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteHeaderComponent.prototype, "classVCLDropdownItemGroupHeader", void 0);
    AutocompleteHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-autocomplete-header',
            exportAs: 'vclAutocompleteHeader',
            template: __webpack_require__(/*! ./autocomplete-header.component.html */ "./lib/ng-vcl/src/autocomplete/autocomplete-header.component.html")
        })
    ], AutocompleteHeaderComponent);
    return AutocompleteHeaderComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-input.directive.ts":
/*!*********************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-input.directive.ts ***!
  \*********************************************************************/
/*! exports provided: AutocompleteInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteInputDirective", function() { return AutocompleteInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete.component */ "./lib/ng-vcl/src/autocomplete/autocomplete.component.ts");




var AutocompleteInputDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AutocompleteInputDirective, _super);
    function AutocompleteInputDirective(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        // tslint:disable-next-line:no-input-rename
        _this.acDisabled = false;
        // tslint:disable-next-line:no-input-rename
        _this.select = 'value';
        _this.focused = false;
        return _this;
    }
    AutocompleteInputDirective.prototype.onfocus = function () {
        this.focused = true;
        this.update();
    };
    AutocompleteInputDirective.prototype.onFocusOrInput = function () {
        this.update();
    };
    AutocompleteInputDirective.prototype.onBlur = function () {
        this.focused = false;
        this.update();
    };
    AutocompleteInputDirective.prototype.update = function () {
        var _this = this;
        if (this.disabled || this.acDisabled || !this.focused || !this.ac) {
            this.close();
            return;
        }
        this.acSub = this.ac.render(this.elementRef).subscribe(function (value) {
            if (typeof _this.select === 'function') {
                value = _this.select(value);
            }
            else if (_this.select === 'void') {
                value = '';
            }
            _this.elementRef.nativeElement.value = value;
            _this.elementRef.nativeElement.focus();
            _this.close();
        });
    };
    AutocompleteInputDirective.prototype.close = function () {
        if (this.acSub) {
            this.acSub.unsubscribe();
            this.acSub = undefined;
        }
    };
    AutocompleteInputDirective.prototype.onKeyUp = function (event) {
        var code = event.code || event.key;
        if (code === 'Escape') {
            this.close();
        }
        else if (code === 'ArrowUp') {
            this.ac && this.ac.highlightPrev();
            event.preventDefault();
            return false;
        }
        else if (event.code === 'ArrowDown') {
            if (!this.acSub) {
                this.close();
            }
            else {
                this.ac && this.ac.highlightNext();
            }
            event.preventDefault();
            return false;
        }
    };
    AutocompleteInputDirective.prototype.handleKeyPressEvent = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var code;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                code = event.code || event.key;
                if (this.ac && code === 'Enter') {
                    event.preventDefault();
                    this.ac.selectHighlighted();
                }
                return [2 /*return*/];
            });
        });
    };
    AutocompleteInputDirective.prototype.ngOnDestroy = function () {
        this.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vclAutocomplete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _autocomplete_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteComponent"])
    ], AutocompleteInputDirective.prototype, "ac", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vclAutocompleteDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteInputDirective.prototype, "acDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vclAutocompleteSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteInputDirective.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteInputDirective.prototype, "onfocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteInputDirective.prototype, "onFocusOrInput", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteInputDirective.prototype, "onBlur", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteInputDirective.prototype, "onKeyUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
    ], AutocompleteInputDirective.prototype, "handleKeyPressEvent", null);
    AutocompleteInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[vclAutocomplete]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutocompleteInputDirective);
    return AutocompleteInputDirective;
}(_input__WEBPACK_IMPORTED_MODULE_2__["InputDirective"]));



/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-item.component.html":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div role=\"menuitem\" class=\"vclDropdownItemLabel\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-item.component.ts":
/*!********************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-item.component.ts ***!
  \********************************************************************/
/*! exports provided: AutocompleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteItemComponent", function() { return AutocompleteItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/autocomplete/interfaces.ts");



var AutocompleteItemComponent = /** @class */ (function () {
    function AutocompleteItemComponent(host) {
        this.host = host;
        // TODO: Workaround
        this.styleDisplay = 'block';
        this.classVCLDropdownItem = true;
        this.attrRole = 'menuitem';
        this.disabled = false;
    }
    Object.defineProperty(AutocompleteItemComponent.prototype, "isDisabled", {
        get: function () {
            return this.disabled || this.host.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutocompleteItemComponent.prototype, "isHighlighted", {
        get: function () {
            return this.host.isItemHighlighted(this);
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteItemComponent.prototype.onclick = function () {
        this.host.selectItem(this);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteItemComponent.prototype, "styleDisplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDropdownItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteItemComponent.prototype, "classVCLDropdownItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteItemComponent.prototype, "attrRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutocompleteItemComponent.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclHighlighted'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutocompleteItemComponent.prototype, "isHighlighted", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteItemComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteItemComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteItemComponent.prototype, "onclick", null);
    AutocompleteItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-autocomplete-item',
            exportAs: 'vclAutocompleteItem',
            template: __webpack_require__(/*! ./autocomplete-item.component.html */ "./lib/ng-vcl/src/autocomplete/autocomplete-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_2__["AUTOCOMPLETE_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AutocompleteItemComponent);
    return AutocompleteItemComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-seperator.component.html":
/*!***************************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-seperator.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclSeparator\"></div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete-seperator.component.ts":
/*!*************************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete-seperator.component.ts ***!
  \*************************************************************************/
/*! exports provided: AutocompleteSeperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteSeperatorComponent", function() { return AutocompleteSeperatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutocompleteSeperatorComponent = /** @class */ (function () {
    function AutocompleteSeperatorComponent() {
        // TODO: Workaround
        this.styleDisplay = 'block';
        this.attrRole = 'seperator';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteSeperatorComponent.prototype, "styleDisplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteSeperatorComponent.prototype, "attrRole", void 0);
    AutocompleteSeperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-autocomplete-seperator',
            exportAs: 'vclAutocompleteSeperator',
            template: __webpack_require__(/*! ./autocomplete-seperator.component.html */ "./lib/ng-vcl/src/autocomplete/autocomplete-seperator.component.html")
        })
    ], AutocompleteSeperatorComponent);
    return AutocompleteSeperatorComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete.component.html":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-popover #popover \n              *ngIf=\"handle\"\n              [visible]=\"true\" \n              [target]=\"handle.element\" \n              targetX=\"left\" \n              targetY=\"bottom\" \n              attachmentX=\"left\" \n              attachmentY=\"top\" \n              [style.width]=\"width\"\n              (mousedown)=\"$event.preventDefault()\"\n              >\n  <div class=\"vclDropdown vclNoBorder vclOpen\" role=\"menu\">\n    <ng-content></ng-content>\n  </div>\n</vcl-popover>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/autocomplete.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/autocomplete.component.ts ***!
  \***************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover/index */ "./lib/ng-vcl/src/popover/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/index */ "./lib/ng-vcl/src/core/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/autocomplete/interfaces.ts");
/* harmony import */ var _autocomplete_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete-item.component */ "./lib/ng-vcl/src/autocomplete/autocomplete-item.component.ts");







var AutocompleteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AutocompleteComponent, _super);
    function AutocompleteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        return _this;
    }
    AutocompleteComponent_1 = AutocompleteComponent;
    Object.defineProperty(AutocompleteComponent.prototype, "width", {
        get: function () {
            if (typeof this.popoverWidth === 'number') {
                return this.popoverWidth;
            }
            else if (this.handle && this.handle.element && this.handle.element.nativeElement.offsetWidth) {
                return this.handle.element.nativeElement.offsetWidth + 'px';
            }
            else {
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteComponent.prototype.isItemHighlighted = function (item) {
        return this.highlightedItem === item;
    };
    AutocompleteComponent.prototype.selectItem = function (item) {
        if (this.handle) {
            this.itemSelected.emit(item.value);
            this.handle.select(item.value);
        }
    };
    AutocompleteComponent.prototype.render = function (element) {
        var _this = this;
        if (this.handle) {
            this.handle.destroy();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var handle = _this.handle = {
                destroy: function () {
                    _this.handle = undefined;
                    observer.complete();
                },
                select: function (value) {
                    observer.next(value);
                    handle.destroy();
                },
                element: element
            };
            return function () {
                handle.destroy();
            };
        });
    };
    AutocompleteComponent.prototype.highlightPrev = function () {
        var _this = this;
        if (this.items) {
            var currIdx_1 = this.items.toArray().findIndex(function (item, thisIdx) { return item === _this.highlightedItem; });
            if (currIdx_1 < 0) {
                this.highlightedItem = this.items.first;
            }
            else {
                var highlightedItem = this.items.toArray().reverse().find(function (item, thisRevId, items) {
                    var thisIdx = (items.length - 1) - thisRevId;
                    return thisIdx < currIdx_1;
                });
                if (highlightedItem) {
                    this.highlightedItem = highlightedItem;
                }
                else {
                    this.highlightedItem = this.items.first;
                }
            }
        }
    };
    AutocompleteComponent.prototype.highlightNext = function () {
        var _this = this;
        if (this.items) {
            var currIdx_2 = this.items.toArray().findIndex(function (item, thisIdx) { return item === _this.highlightedItem; });
            var highlightedItem = this.items.toArray().find(function (item, thisIdx) { return thisIdx > currIdx_2; });
            if (highlightedItem) {
                this.highlightedItem = highlightedItem;
            }
        }
    };
    AutocompleteComponent.prototype.selectHighlighted = function () {
        if (this.highlightedItem && this.handle) {
            this.handle.select(this.highlightedItem);
            return true;
        }
        return false;
    };
    AutocompleteComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.itemsSub && this.itemsSub.unsubscribe();
        this.contentSub && this.contentSub.unsubscribe();
    };
    var AutocompleteComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return _autocomplete_item_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteItemComponent"]; })),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], AutocompleteComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('popover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _popover_index__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"])
    ], AutocompleteComponent.prototype, "popover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AutocompleteComponent.prototype, "popoverWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteComponent.prototype, "itemSelected", void 0);
    AutocompleteComponent = AutocompleteComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'vcl-autocomplete',
            exportAs: 'vclAutocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./lib/ng-vcl/src/autocomplete/autocomplete.component.html"),
            providers: [
                {
                    provide: _interfaces__WEBPACK_IMPORTED_MODULE_5__["AUTOCOMPLETE_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return AutocompleteComponent_1; })
                }
            ],
            styles: ["\n    .vclDropdown {\n      padding: 0;\n      position: static;\n    }\n    .vclPopOver {\n      padding: 0;\n    }\n  "]
        })
    ], AutocompleteComponent);
    return AutocompleteComponent;
}(_core_index__WEBPACK_IMPORTED_MODULE_4__["ObservableComponent"]));



/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/index.ts ***!
  \**********************************************/
/*! exports provided: AutocompleteComponent, AutocompleteItemComponent, AutocompleteSeperatorComponent, AutocompleteHeaderComponent, AutocompleteInputDirective, VCLAutocompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLAutocompleteModule", function() { return VCLAutocompleteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover/index */ "./lib/ng-vcl/src/popover/index.ts");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _token_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token/index */ "./lib/ng-vcl/src/token/index.ts");
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete.component */ "./lib/ng-vcl/src/autocomplete/autocomplete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return _autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"]; });

/* harmony import */ var _autocomplete_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autocomplete-item.component */ "./lib/ng-vcl/src/autocomplete/autocomplete-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteItemComponent", function() { return _autocomplete_item_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteItemComponent"]; });

/* harmony import */ var _autocomplete_seperator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autocomplete-seperator.component */ "./lib/ng-vcl/src/autocomplete/autocomplete-seperator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteSeperatorComponent", function() { return _autocomplete_seperator_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteSeperatorComponent"]; });

/* harmony import */ var _autocomplete_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./autocomplete-header.component */ "./lib/ng-vcl/src/autocomplete/autocomplete-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteHeaderComponent", function() { return _autocomplete_header_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteHeaderComponent"]; });

/* harmony import */ var _autocomplete_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./autocomplete-input.directive */ "./lib/ng-vcl/src/autocomplete/autocomplete-input.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteInputDirective", function() { return _autocomplete_input_directive__WEBPACK_IMPORTED_MODULE_10__["AutocompleteInputDirective"]; });












// import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';

var VCLAutocompleteModule = /** @class */ (function () {
    function VCLAutocompleteModule() {
    }
    VCLAutocompleteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _input_index__WEBPACK_IMPORTED_MODULE_4__["VCLInputModule"], _popover_index__WEBPACK_IMPORTED_MODULE_3__["VCLPopoverModule"], _token_index__WEBPACK_IMPORTED_MODULE_5__["VCLTokenModule"]],
            exports: [_autocomplete_input_directive__WEBPACK_IMPORTED_MODULE_10__["AutocompleteInputDirective"], _autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _autocomplete_item_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteItemComponent"], _autocomplete_seperator_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteSeperatorComponent"], _autocomplete_header_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteHeaderComponent"]],
            declarations: [_autocomplete_input_directive__WEBPACK_IMPORTED_MODULE_10__["AutocompleteInputDirective"], _autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _autocomplete_item_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteItemComponent"], _autocomplete_seperator_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteSeperatorComponent"], _autocomplete_header_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteHeaderComponent"]],
            providers: [],
        })
    ], VCLAutocompleteModule);
    return VCLAutocompleteModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/autocomplete/interfaces.ts":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/autocomplete/interfaces.ts ***!
  \***************************************************/
/*! exports provided: AUTOCOMPLETE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_TOKEN", function() { return AUTOCOMPLETE_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AUTOCOMPLETE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('autocomplete');


/***/ }),

/***/ "./lib/ng-vcl/src/badge/badge.component.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/badge/badge.component.ts ***!
  \*************************************************/
/*! exports provided: BadgeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDirective", function() { return BadgeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeDirective = /** @class */ (function () {
    function BadgeDirective() {
    }
    Object.defineProperty(BadgeDirective.prototype, "vclPrimary", {
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeDirective.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeDirective.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeDirective.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeDirective.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BadgeDirective.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclPrimary'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeDirective.prototype, "vclPrimary", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclSuccess'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeDirective.prototype, "vclSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeDirective.prototype, "vclInfo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclWarning'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeDirective.prototype, "vclWarning", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclError'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeDirective.prototype, "vclError", null);
    BadgeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'vcl-badge',
            host: {
                '[class.vclBadge]': 'true'
            }
        })
    ], BadgeDirective);
    return BadgeDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/badge/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/badge/index.ts ***!
  \***************************************/
/*! exports provided: VCLBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLBadgeModule", function() { return VCLBadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge.component */ "./lib/ng-vcl/src/badge/badge.component.ts");




var VCLBadgeModule = /** @class */ (function () {
    function VCLBadgeModule() {
    }
    VCLBadgeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeDirective"]],
            declarations: [_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeDirective"]],
            providers: [],
        })
    ], VCLBadgeModule);
    return VCLBadgeModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/busy-indicator/busy-indicator-cover.component.html":
/*!***************************************************************************!*\
  !*** ./lib/ng-vcl/src/busy-indicator/busy-indicator-cover.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<div *ngIf=\"busy\" tabindex=\"-1\" class=\"vclLoadingLayer\">\n  <div class=\"vclLoadingLayerContent\">\n    <ng-content select=\"vcl-busy-indicator\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/busy-indicator/busy-indicator-cover.component.ts":
/*!*************************************************************************!*\
  !*** ./lib/ng-vcl/src/busy-indicator/busy-indicator-cover.component.ts ***!
  \*************************************************************************/
/*! exports provided: BusyIndicatorCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorCoverComponent", function() { return BusyIndicatorCoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BusyIndicatorCoverComponent = /** @class */ (function () {
    function BusyIndicatorCoverComponent() {
        // tslint:disable-next-line:no-input-rename
        this.busy = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vcl-busy-indicator-cover'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclLoadingLayerContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busy", void 0);
    BusyIndicatorCoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[vcl-busy-indicator-cover]',
            template: __webpack_require__(/*! ./busy-indicator-cover.component.html */ "./lib/ng-vcl/src/busy-indicator/busy-indicator-cover.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], BusyIndicatorCoverComponent);
    return BusyIndicatorCoverComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/busy-indicator/busy-indicator.component.html":
/*!*********************************************************************!*\
  !*** ./lib/ng-vcl/src/busy-indicator/busy-indicator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclLayoutCenterJustified vclIcogram {{layout == 'vertical' ? 'vclLayoutVertical' : 'vclLayoutHorizontal'}}\" role=\"status\">\n  <vcl-icon *ngIf=\"!icon\" class=\"vclLayoutSelfCenter\" [attr.aria-label]=\"label\">\n    <img [src]=\"imageSrc\" role=”presentation” [style.width]=\"imageWidth\" [style.height]=\"imageHeight\">\n  </vcl-icon>\n  <vcl-icon *ngIf=\"icon\" class=\"vclLayoutSelfCenter\" [attr.aria-label]=\"label\" [icon]=\"icon\"></vcl-icon>\n\n  <div class=\"vclLayoutSelfCenter\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/busy-indicator/busy-indicator.component.ts":
/*!*******************************************************************!*\
  !*** ./lib/ng-vcl/src/busy-indicator/busy-indicator.component.ts ***!
  \*******************************************************************/
/*! exports provided: BusyIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorComponent", function() { return BusyIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



// tslint:disable-next-line:max-line-length
var CIRCULAR = 'data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=';
var BusyIndicatorComponent = /** @class */ (function () {
    function BusyIndicatorComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.layout = 'vertical';
        this.label = 'Loading';
        this.imageHeight = '3em';
        this.imageWidth = '3em';
        this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(CIRCULAR);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BusyIndicatorComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BusyIndicatorComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BusyIndicatorComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BusyIndicatorComponent.prototype, "imageHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BusyIndicatorComponent.prototype, "imageWidth", void 0);
    BusyIndicatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'vcl-busy-indicator',
            template: __webpack_require__(/*! ./busy-indicator.component.html */ "./lib/ng-vcl/src/busy-indicator/busy-indicator.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], BusyIndicatorComponent);
    return BusyIndicatorComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/busy-indicator/index.ts":
/*!************************************************!*\
  !*** ./lib/ng-vcl/src/busy-indicator/index.ts ***!
  \************************************************/
/*! exports provided: BusyIndicatorCoverComponent, BusyIndicatorComponent, VCLBusyIndicatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLBusyIndicatorModule", function() { return VCLBusyIndicatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _icogram_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icogram/index */ "./lib/ng-vcl/src/icogram/index.ts");
/* harmony import */ var _busy_indicator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./busy-indicator.component */ "./lib/ng-vcl/src/busy-indicator/busy-indicator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorComponent", function() { return _busy_indicator_component__WEBPACK_IMPORTED_MODULE_5__["BusyIndicatorComponent"]; });

/* harmony import */ var _busy_indicator_cover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./busy-indicator-cover.component */ "./lib/ng-vcl/src/busy-indicator/busy-indicator-cover.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorCoverComponent", function() { return _busy_indicator_cover_component__WEBPACK_IMPORTED_MODULE_6__["BusyIndicatorCoverComponent"]; });









var VCLBusyIndicatorModule = /** @class */ (function () {
    function VCLBusyIndicatorModule() {
    }
    VCLBusyIndicatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icon_index__WEBPACK_IMPORTED_MODULE_3__["VCLIconModule"], _icogram_index__WEBPACK_IMPORTED_MODULE_4__["VCLIcogramModule"]],
            exports: [_busy_indicator_cover_component__WEBPACK_IMPORTED_MODULE_6__["BusyIndicatorCoverComponent"], _busy_indicator_component__WEBPACK_IMPORTED_MODULE_5__["BusyIndicatorComponent"]],
            declarations: [_busy_indicator_cover_component__WEBPACK_IMPORTED_MODULE_6__["BusyIndicatorCoverComponent"], _busy_indicator_component__WEBPACK_IMPORTED_MODULE_5__["BusyIndicatorComponent"]]
        })
    ], VCLBusyIndicatorModule);
    return VCLBusyIndicatorModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/button-group/button-group.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/button-group/button-group.component.ts ***!
  \***************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, ButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return ButtonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./lib/ng-vcl/src/button/index.ts");





var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ButtonGroupComponent; }),
    multi: true
};
var ButtonGroupComponent = /** @class */ (function () {
    function ButtonGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this._disabled = false;
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formDisabled = false;
        /**
       * things needed for ControlValueAccessor-Interface
       */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ButtonGroupComponent_1 = ButtonGroupComponent;
    Object.defineProperty(ButtonGroupComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            this._disabled = disabled;
            this.syncButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "isDisabled", {
        get: function () {
            return this.formDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupComponent.prototype.toggle = function (btn) {
        if (this.mode === 'multiple') {
            if (Array.isArray(this.selectedValue)) {
                var selectedValue = this.selectedValue = this.selectedValue.slice();
                var idx = this.selectedValue.indexOf(btn.value);
                if (idx >= 0) {
                    selectedValue.splice(idx, 1);
                    this.selectedValue = selectedValue;
                }
                else {
                    this.selectedValue = this.selectedValue.concat([btn.value]);
                }
            }
            else {
                this.selectedValue = [btn.value];
            }
        }
        else {
            this.selectedValue = btn.value;
        }
    };
    ButtonGroupComponent.prototype.syncButtons = function () {
        var _this = this;
        var selectedValue = this.selectedValue;
        if (this.buttons && this.mode === 'multiple' && Array.isArray(selectedValue)) {
            this.buttons.forEach(function (btn) {
                btn.setSelected(selectedValue.includes(btn.value));
            });
        }
        else if (this.buttons && this.mode === 'single') {
            this.buttons.forEach(function (btn) {
                btn.setSelected(selectedValue === btn.value);
            });
        }
        if (this.buttons) {
            this.buttons.forEach(function (btn) {
                btn.setDisabled(_this.isDisabled);
            });
        }
    };
    ButtonGroupComponent.prototype.notifyButtonClick = function (btn) {
        this.toggle(btn);
        this.syncButtons();
        this.triggerChange();
        this.onTouched();
    };
    ButtonGroupComponent.prototype.notifyButtonBlur = function (btn) {
        if (this.buttons.last === btn) {
            this.onTouched();
        }
    };
    ButtonGroupComponent.prototype.triggerChange = function () {
        this.selectionChange.emit(this.selectedValue);
        this.onChange(this.selectedValue);
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Syncs changed buttons checked state to be in line with the current group value
        this.buttonsSub = this.buttons.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(function () {
            if (!_this.buttons) {
                return;
            }
            _this.syncButtons();
        });
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.buttonsSub && this.buttonsSub.unsubscribe();
    };
    ButtonGroupComponent.prototype.writeValue = function (value) {
        this.selectedValue = value;
        this.syncButtons();
        this.cdRef.markForCheck();
    };
    ButtonGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonGroupComponent.prototype.setDisabledState = function (disabled) {
        this.formDisabled = disabled;
        this.cdRef.markForCheck();
    };
    var ButtonGroupComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_button__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ButtonGroupComponent.prototype, "buttons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ButtonGroupComponent.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonGroupComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonGroupComponent.prototype, "selectionChange", void 0);
    ButtonGroupComponent = ButtonGroupComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-button-group',
            host: {
                '[class.vclButtonGroup]': 'true',
            },
            template: "<ng-content select=\"button\"></ng-content>",
            providers: [
                CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                {
                    provide: _button__WEBPACK_IMPORTED_MODULE_4__["BUTTON_OBSERVER_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ButtonGroupComponent_1; })
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/button-group/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/button-group/index.ts ***!
  \**********************************************/
/*! exports provided: ButtonGroupComponent, VCLButtonGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLButtonGroupModule", function() { return VCLButtonGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-group.component */ "./lib/ng-vcl/src/button-group/button-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return _button_group_component__WEBPACK_IMPORTED_MODULE_3__["ButtonGroupComponent"]; });

/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");






var VCLButtonGroupModule = /** @class */ (function () {
    function VCLButtonGroupModule() {
    }
    VCLButtonGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_index__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"]],
            exports: [_button_group_component__WEBPACK_IMPORTED_MODULE_3__["ButtonGroupComponent"], _button_index__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"]],
            declarations: [_button_group_component__WEBPACK_IMPORTED_MODULE_3__["ButtonGroupComponent"]],
            providers: [],
        })
    ], VCLButtonGroupModule);
    return VCLButtonGroupModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/button/button-icogram.component.html":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/button/button-icogram.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icogram [appIcon]=\"appIcon\" [prepIcon]=\"prepIcon\">\n  <ng-content></ng-content>\n</vcl-icogram>\n\n"

/***/ }),

/***/ "./lib/ng-vcl/src/button/button-icogram.component.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/button/button-icogram.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonIcogramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIcogramComponent", function() { return ButtonIcogramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./lib/ng-vcl/src/button/button.component.ts");



var ButtonIcogramComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonIcogramComponent, _super);
    function ButtonIcogramComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonIcogramComponent_1 = ButtonIcogramComponent;
    var ButtonIcogramComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonIcogramComponent.prototype, "prepIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonIcogramComponent.prototype, "appIcon", void 0);
    ButtonIcogramComponent = ButtonIcogramComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'button[vcl-icogram-button], a[vcl-icogram-button]',
            exportAs: 'vclButton',
            template: __webpack_require__(/*! ./button-icogram.component.html */ "./lib/ng-vcl/src/button/button-icogram.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                {
                    provide: _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ButtonIcogramComponent_1; })
                }
            ]
        })
    ], ButtonIcogramComponent);
    return ButtonIcogramComponent;
}(_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]));



/***/ }),

/***/ "./lib/ng-vcl/src/button/button-icon.component.html":
/*!**********************************************************!*\
  !*** ./lib/ng-vcl/src/button/button-icon.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icon [icon]=\"icon\">\n  <ng-content></ng-content>\n</vcl-icon>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/button/button-icon.component.ts":
/*!********************************************************!*\
  !*** ./lib/ng-vcl/src/button/button-icon.component.ts ***!
  \********************************************************/
/*! exports provided: ButtonIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return ButtonIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./lib/ng-vcl/src/button/button.component.ts");



var ButtonIconComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonIconComponent, _super);
    function ButtonIconComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vclSquare = true;
        return _this;
    }
    ButtonIconComponent_1 = ButtonIconComponent;
    var ButtonIconComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclSquare'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonIconComponent.prototype, "vclSquare", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonIconComponent.prototype, "icon", void 0);
    ButtonIconComponent = ButtonIconComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'button[vcl-icon-button], a[vcl-icon-button]',
            exportAs: 'vclButton',
            template: __webpack_require__(/*! ./button-icon.component.html */ "./lib/ng-vcl/src/button/button-icon.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                {
                    provide: _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ButtonIconComponent_1; })
                }
            ]
        })
    ], ButtonIconComponent);
    return ButtonIconComponent;
}(_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]));



/***/ }),

/***/ "./lib/ng-vcl/src/button/button.component.html":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/button/button.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/button/button.component.ts":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: BUTTON_OBSERVER_TOKEN, ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OBSERVER_TOKEN", function() { return BUTTON_OBSERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BUTTON_OBSERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('vcl_button_observer');
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(cdRef, elementRef, observer) {
        this.cdRef = cdRef;
        this.elementRef = elementRef;
        this.observer = observer;
        this._disabled = false;
        this.disabled = false;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vclButton = true;
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.selectable = false;
        this.selected = false;
    }
    Object.defineProperty(ButtonComponent.prototype, "isDisabled", {
        get: function () {
            return (this.disabled || this._disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.onMouseEnter = function () {
        this.hovered = true;
    };
    ButtonComponent.prototype.onMouseLeave = function () {
        this.hovered = false;
    };
    ButtonComponent.prototype.onClick = function () {
        if (this.selectable) {
            this.selected = !this.selected;
            this.select.emit(this.selected);
        }
        this.observer && this.observer.notifyButtonClick(this);
    };
    ButtonComponent.prototype.onBlur = function () {
        this.observer && this.observer.notifyButtonBlur(this);
    };
    ButtonComponent.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    ButtonComponent.prototype.setDisabled = function (disabled) {
        this._disabled = disabled;
        this.cdRef.markForCheck();
    };
    ButtonComponent.prototype.setSelected = function (selected) {
        this.selected = selected;
        this.cdRef.markForCheck();
    };
    // Workaround as not super.getters are allowed in ts
    ButtonComponent.prototype.getDisabled = function () {
        return (this.disabled || this._disabled);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "vclButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclHovered'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "hovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "selectable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclSelected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ButtonComponent.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ButtonComponent.prototype, "onMouseLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ButtonComponent.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ButtonComponent.prototype, "onBlur", null);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'button[vcl-button], a[vcl-button]',
            exportAs: 'vclButton',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./button.component.html */ "./lib/ng-vcl/src/button/button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(BUTTON_OBSERVER_TOKEN)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/button/index.ts":
/*!****************************************!*\
  !*** ./lib/ng-vcl/src/button/index.ts ***!
  \****************************************/
/*! exports provided: ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, BUTTON_OBSERVER_TOKEN, VCLButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLButtonModule", function() { return VCLButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icogram */ "./lib/ng-vcl/src/icogram/index.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.component */ "./lib/ng-vcl/src/button/button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OBSERVER_TOKEN", function() { return _button_component__WEBPACK_IMPORTED_MODULE_5__["BUTTON_OBSERVER_TOKEN"]; });

/* harmony import */ var _button_icogram_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-icogram.component */ "./lib/ng-vcl/src/button/button-icogram.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIcogramComponent", function() { return _button_icogram_component__WEBPACK_IMPORTED_MODULE_6__["ButtonIcogramComponent"]; });

/* harmony import */ var _button_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-icon.component */ "./lib/ng-vcl/src/button/button-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return _button_icon_component__WEBPACK_IMPORTED_MODULE_7__["ButtonIconComponent"]; });










var VCLButtonModule = /** @class */ (function () {
    function VCLButtonModule() {
    }
    VCLButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icon__WEBPACK_IMPORTED_MODULE_4__["VCLIconModule"], _icogram__WEBPACK_IMPORTED_MODULE_3__["VCLIcogramModule"]],
            exports: [_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _button_icogram_component__WEBPACK_IMPORTED_MODULE_6__["ButtonIcogramComponent"], _button_icon_component__WEBPACK_IMPORTED_MODULE_7__["ButtonIconComponent"]],
            declarations: [_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _button_icogram_component__WEBPACK_IMPORTED_MODULE_6__["ButtonIcogramComponent"], _button_icon_component__WEBPACK_IMPORTED_MODULE_7__["ButtonIconComponent"]],
            providers: [],
        })
    ], VCLButtonModule);
    return VCLButtonModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/checkbox/checkbox.component.html":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/checkbox/checkbox.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icon [icon]=\"checked ? 'vcl:box-checked' : 'vcl:box'\"></vcl-icon>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/checkbox/checkbox.component.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/checkbox/checkbox.component.ts ***!
  \*******************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_control_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-control-label */ "./lib/ng-vcl/src/form-control-label/index.ts");




var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxComponent; }),
    multi: true
};
var UNIQUE_ID = 0;
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(cdRef) {
        this.cdRef = cdRef;
        this.generatedId = 'vcl_checkbox_' + UNIQUE_ID++;
        this.classVCLCheckbox = true;
        this.attrRole = 'checkbox';
        this.tabindex = 0;
        this.disabled = false;
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
        this.formDisabled = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    CheckboxComponent_1 = CheckboxComponent;
    Object.defineProperty(CheckboxComponent.prototype, "elementId", {
        get: function () {
            return this.id || this.generatedId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "attrAriaChecked", {
        get: function () {
            return this.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "attrAriaDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "isDisabled", {
        get: function () {
            return this.formDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.notifyFormControlLabelClick = function (event) {
        this.toggleValue();
    };
    CheckboxComponent.prototype.onKeyup = function (e) {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                this.toggleValue();
                break;
        }
    };
    CheckboxComponent.prototype.onClick = function (e) {
        e.preventDefault();
        return this.toggleValue();
    };
    CheckboxComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    CheckboxComponent.prototype.toggleValue = function () {
        if (this.isDisabled) {
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.cdRef.markForCheck();
        this.onTouched();
        this.onChange(this.checked);
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
        this.cdRef.markForCheck();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (disabled) {
        this.formDisabled = disabled;
        this.cdRef.markForCheck();
    };
    var CheckboxComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent.prototype, "elementId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclCheckbox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "classVCLCheckbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "attrRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-checked'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent.prototype, "attrAriaChecked", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent.prototype, "attrAriaDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "checkedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onKeyup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onBlur", null);
    CheckboxComponent = CheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./lib/ng-vcl/src/checkbox/checkbox.component.html"),
            providers: [
                CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                {
                    provide: _form_control_label__WEBPACK_IMPORTED_MODULE_3__["FORM_CONTROL_LABEL_MEMBER_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxComponent_1; })
                },
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            exportAs: 'vclCheckbox',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/checkbox/index.ts":
/*!******************************************!*\
  !*** ./lib/ng-vcl/src/checkbox/index.ts ***!
  \******************************************/
/*! exports provided: CheckboxComponent, VCLCheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLCheckboxModule", function() { return VCLCheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _form_control_label_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../form-control-label/index */ "./lib/ng-vcl/src/form-control-label/index.ts");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox.component */ "./lib/ng-vcl/src/checkbox/checkbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]; });








var VCLCheckboxModule = /** @class */ (function () {
    function VCLCheckboxModule() {
    }
    VCLCheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icon_index__WEBPACK_IMPORTED_MODULE_3__["VCLIconModule"], _form_control_label_index__WEBPACK_IMPORTED_MODULE_4__["VCLFormControlLabelModule"]],
            exports: [_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]],
            declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]]
        })
    ], VCLCheckboxModule);
    return VCLCheckboxModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/core/index.ts":
/*!**************************************!*\
  !*** ./lib/ng-vcl/src/core/index.ts ***!
  \**************************************/
/*! exports provided: ObservableComponent, defineMetadata, getMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable.component */ "./lib/ng-vcl/src/core/observable.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableComponent", function() { return _observable_component__WEBPACK_IMPORTED_MODULE_0__["ObservableComponent"]; });

/* harmony import */ var _reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflect */ "./lib/ng-vcl/src/core/reflect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineMetadata", function() { return _reflect__WEBPACK_IMPORTED_MODULE_1__["defineMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return _reflect__WEBPACK_IMPORTED_MODULE_1__["getMetadata"]; });





/***/ }),

/***/ "./lib/ng-vcl/src/core/observable.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/core/observable.component.ts ***!
  \*****************************************************/
/*! exports provided: ObservableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableComponent", function() { return ObservableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ObservableComponent = /** @class */ (function () {
    function ObservableComponent() {
        this.changesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.observedProps = {};
        this.changes$ = this.changesSubject.asObservable();
    }
    ObservableComponent.prototype.ngOnChanges = function (changes) {
        this.changesSubject.next(changes);
    };
    ObservableComponent.prototype.ngOnDestroy = function () {
        this.changesSubject.complete();
    };
    ObservableComponent.prototype.observeChanges = function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        return this.changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (changes) { return props.some(function (p) { return changes.hasOwnProperty(p); }); }));
    };
    ObservableComponent.prototype.observeChange = function (prop) {
        if (!this.observedProps[prop]) {
            var c$ = this.changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (changes) { return changes.hasOwnProperty(prop); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) { return changes[prop]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publishReplay"])(1));
            c$.connect();
            this.observedProps[prop] = c$;
        }
        return this.observedProps[prop];
    };
    ObservableComponent.prototype.observeChangeValue = function (prop) {
        return this.observeChange(prop).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (change) { return change.currentValue; }));
    };
    return ObservableComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/core/reflect.ts":
/*!****************************************!*\
  !*** ./lib/ng-vcl/src/core/reflect.ts ***!
  \****************************************/
/*! exports provided: defineMetadata, getMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMetadata", function() { return defineMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return getMetadata; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);

function defineMetadata(key, value, target) {
    Reflect.defineMetadata(key, value, target);
}
function getMetadata(key, target) {
    return Reflect.getMetadata(key, target);
}


/***/ }),

/***/ "./lib/ng-vcl/src/date-picker/calendar-date.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/date-picker/calendar-date.ts ***!
  \*****************************************************/
/*! exports provided: CalendarDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDate", function() { return CalendarDate; });
/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
var MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var WEEK_DAYS = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];
var CalendarDate = /** @class */ (function () {
    function CalendarDate(date) {
        if (!(date instanceof Date)) {
            date = new Date;
        }
        this.date = date;
    }
    CalendarDate.prototype.clone = function () {
        return new CalendarDate(new Date(this.date.getTime()));
    };
    CalendarDate.prototype.getWeekDays = function () {
        return WEEK_DAYS;
    };
    CalendarDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return MONTH_NAMES[monthNr];
    };
    CalendarDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    /**
     * gets the first day of the month for the given date's month.
     */
    CalendarDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    CalendarDate.prototype.moveToYear = function (year) {
        var newDate = new Date(year, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new CalendarDate(newDate);
    };
    CalendarDate.prototype.addYears = function (amount) {
        if (amount === void 0) { amount = 1; }
        var newDate = new Date(this.date.getFullYear() + amount, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new CalendarDate(newDate);
    };
    CalendarDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    CalendarDate.prototype.moveDays = function (amount) {
        this.date = this.addDays(this.date, amount);
    };
    /**
     * returns true if this is greater than that
     */
    CalendarDate.prototype.gt = function (date) {
        return this.date > date;
    };
    /**
     * returns true if this is lower than that
     */
    CalendarDate.prototype.lt = function (date) {
        return this.date < date;
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     */
    CalendarDate.prototype.incrementMonths = function (numberOfMonths) {
        var dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < this.date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(this.date.getDate());
        }
        return new CalendarDate(dateInTargetMonth);
    };
    /**
      * Gets the number of days in the month for the given date's month
      */
    CalendarDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    CalendarDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    /**
      * Gets whether two dates have the same month and year
      */
    CalendarDate.prototype.isSameMonthAndYear = function (date) {
        if (date === void 0) { date = new CalendarDate(); }
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time)
     */
    CalendarDate.prototype.isSameDay = function (date) {
        return this.date.getDate() === date.date.getDate() && this.isSameMonthAndYear(date);
    };
    CalendarDate.prototype.isToday = function () {
        return this.isSameDay(new CalendarDate());
    };
    CalendarDate.prototype.isInYear = function (year) {
        return this.date.getFullYear() === year;
    };
    /**
     * returns a set of days which are in the given month or
     * are in the same weekNumber as a day in the given month
     */
    CalendarDate.prototype.getMonthBlock = function () {
        var dates = [];
        var firstDayOfMonth = this.getFirstDateOfMonth(this.date);
        var lastDayOfMonth = this.getLastDateOfMonth(this.date);
        var daysOfMonth = this.getNumberOfDaysInMonth(this.date);
        // all days of this month
        for (var i = 0; i < daysOfMonth; i++) {
            dates.push(this.addDays(firstDayOfMonth, i));
        }
        // days of prev month but in same week
        var weekDay = firstDayOfMonth.getDay();
        // since js starts counting week-days from Sunday (0), need to change it as last weekday (7)
        if (weekDay === 0) {
            weekDay = 7;
        }
        var minus = 0;
        while (weekDay > 1) {
            minus--;
            dates.unshift(this.addDays(firstDayOfMonth, minus));
            weekDay--;
        }
        // days of next month but in same week
        var addDays = 7 - lastDayOfMonth.getDay();
        var plus = 0;
        while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
            plus++;
            dates.push(this.addDays(lastDayOfMonth, plus));
            addDays--;
        }
        var ret = dates.map(function (date) { return new CalendarDate(date); });
        var blocks = [];
        // split in weeks
        var chunk = 7;
        for (var i = 0, j = ret.length; i < j; i += chunk) {
            var temparray = ret.slice(i, i + chunk);
            if (temparray.length === 7) {
                blocks.push(temparray);
            }
        }
        return blocks;
    };
    CalendarDate.prototype.getYearsBlock = function () {
        var years = [];
        var currentYear = this.date.getFullYear() - 12;
        while (years.length < 25) {
            years.push(currentYear);
            currentYear++;
        }
        // split rows
        var ret = [];
        var chunk = 5;
        for (var i = 0, j = years.length; i < j; i += chunk) {
            var temparray = years.slice(i, i + chunk);
            if (temparray.length === 5) {
                ret.push(temparray);
            }
        }
        return ret;
    };
    CalendarDate.prototype.getWeekNumber = function () {
        // Copy date so don't modify original
        var d = new Date(+this.date);
        d.setHours(0, 0, 0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(), 0, 1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    /**
     * returns true if this is between the given dates
     */
    CalendarDate.prototype.inRange = function (from, to) {
        if (!(from instanceof CalendarDate) || !(to instanceof CalendarDate)) {
            return false;
        }
        return (this.date >= from.date && this.date <= to.date)
            || this.isSameDay(from) || this.isSameDay(to);
    };
    CalendarDate.prototype.daysInRange = function (to) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
    };
    return CalendarDate;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/date-picker/date-picker.component.html":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/date-picker/date-picker.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclLayoutHorizontal\">\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" style=\"min-width: 18em;\" *ngIf=\"displayDate\">\n    <div class=\"vclDGRow\">\n      <div class=\"vclDGCell vclToolbar\">\n        <div class=\"vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n          <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [disabled]=\"disabled\" (click)=\"prevMonth()\">\n                <div class=\"vclIcogram\">\n                  <div class=\"vclIcon fas fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div>\n                </div>\n              </button>\n          <span class=\"vclCalHeaderLabel\" (click)=\"showYear()\" [class.date-picker-pointer]=\"!showYearPick\">\n            {{ viewDate?.getMonthString() }}&nbsp;&nbsp;{{ viewDate?.getYearString() }}\n          </span>\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [disabled]=\"disabled\" (click)=\"nextMonth()\">\n              <div class=\"vclIcogram\">\n                <div class=\"vclIcon fas fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div>\n              </div>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <ng-container *ngIf=\"!showYearPick\">\n        <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\">\n          <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclWeekdayLabel\">\n            week\n          </div>\n          <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\">\n            <ng-container *ngIf=\"displayWeekdays\">\n              {{ day }}\n            </ng-container>\n          </div>\n        </div>\n\n        <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock(); index as w\">\n          <div *ngIf=\"displayWeekNumbers && week.length == 7\" class=\"vclDGCell vclWeekdayLabel\">\n            {{ week[5].getWeekNumber() }}\n          </div>\n          <div *ngFor=\"let day of week; index as d\"\n            [tabindex]=\"w * d\"\n            class=\"vclDGCell vclCalItem\"\n            [class.vclToday]=\"highlightSelected && day.isToday()\"\n            [class.vclOtherMonth]=\"!day.isSameMonthAndYear(viewDate)\"\n            [class.vclDisabled]=\"disabled || isDayDisabled(day)\"\n            [class.vclSelected]=\"isMarked(day)\"\n            [class.vclSelectedAlt]=\"isBeginning(day) && !currentRangeEnd\"\n            [class.vclSelectedBeg]=\"isBeginning(day) && currentRangeEnd\"\n            [class.vclSelectedEnd]=\"isEnd(day)\"\n            (click)=\"onDateTap(day)\">\n            {{ day.date.getDate() }}\n          </div>\n        </div>\n\n        <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\">\n          <div class=\"vclDGCell\">\n            <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\">\n              <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" [disabled]=\"disabled\" (click)=\"gotoToday()\">\n                <div class=\" vclIcogram\">\n                  <span class=\"vclText \">go to today</span>\n                </div>\n              </button>\n              <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" [disabled]=\"disabled\" (click)=\"gotoSelected()\">\n                <div class=\" vclIcogram\">\n                  <span class=\"vclText \">go to selected</span>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"showYearPick\">\n        <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\">\n          <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\"\n            [class.vclSelected]=\"viewDate.date.getFullYear() == year\"\n            [class.vclToday]=\"highlightSelected && today.isInYear(year)\"\n            (click)=\"yearPickSelect(year)\">\n            {{ year }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <vcl-time-picker *ngIf=\"displayTime\"\n                     [(ngModel)]=\"selectedDate\"\n                     (ngModelChange)=\"timeChange($event)\"\n                     [displayHours]=\"displayHours\"\n                     [displayMinutes]=\"displayMinutes\"\n                     [displaySeconds]=\"displaySeconds\"\n                     [displayHours24]=\"displayHours24\"\n                     [ngStyle]=\"{ 'margin-left': displayDate ? '10px' : 0 }\">\n    </vcl-time-picker>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/date-picker/date-picker.component.ts":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/date-picker/date-picker.component.ts ***!
  \*************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _calendar_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-date */ "./lib/ng-vcl/src/date-picker/calendar-date.ts");




var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(cdRef) {
        this.cdRef = cdRef;
        this.tag = DatePickerComponent_1.Tag;
        this.debug = false;
        // behavior
        this.closeOnSelect = false;
        this.disabled = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.displayDate = true;
        this.displayTime = false;
        this.displayHours24 = true;
        this.displayHours = true;
        this.displayMinutes = true;
        this.displaySeconds = false;
        this.prevYearBtnIcon = 'fas:chevron-left';
        this.nextYearBtnIcon = 'fas:chevron-right';
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        this.selectRange = false;
        this.maxRangeLength = Infinity;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.today = new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        this.showYearPick = false;
        /**
        * things needed for ControlValueAccessor-Interface
        */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    DatePickerComponent_1 = DatePickerComponent;
    DatePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config) {
            Object.keys(this.config).forEach(function (key) {
                _this[key] = _this.config[key];
            });
        }
        this.setDate(this.selectedDate);
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"](this.selectedRangeEnd));
        }
    };
    DatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.setDate(changes.selectedDate.currentValue);
        }
    };
    DatePickerComponent.prototype.setDate = function (date) {
        if (date) {
            this.currentDate = new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"](date);
            this.viewDate = this.currentDate.clone();
        }
        else {
            this.viewDate = new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        }
    };
    DatePickerComponent.prototype.showYear = function () {
        if (this.disabled) {
            return;
        }
        this.showYearPick = true;
    };
    DatePickerComponent.prototype.onDateTap = function (date) {
        var tag = this.tag + ".onDateTap()";
        var debug = this.debug || false;
        if (debug) {
            console.log(tag, 'date:', date);
        }
        var isDayDisabled = this.isDayDisabled(date);
        if (debug) {
            console.log(tag, 'this.disabled:', this.disabled);
        }
        if (debug) {
            console.log(tag, 'isDayDisabled:', isDayDisabled);
        }
        if (this.disabled || isDayDisabled) {
            return;
        }
        this.select(date);
        if (!this.selectRange) {
            if (this.currentDate && !this.currentDate.isSameMonthAndYear(this.viewDate)) {
                this.gotoSelected();
            }
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            this.onChange && this.onChange(currentDate);
            this.change.emit(currentDate);
            this.selectedDate = currentDate;
        }
        else {
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            if (currentDate) {
                this.onChange && this.onChange(currentDate);
            }
            this.change.emit([currentDate, this.currentRangeEnd ? this.currentRangeEnd.date : undefined]);
        }
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        var tag = this.tag + ".select()";
        var debug = this.debug || false;
        if (debug) {
            console.log(tag, 'date:', date);
        }
        if (debug) {
            console.log(tag, 'this.selectRange:', this.selectRange);
        }
        if (!this.selectRange) {
            this.currentDate = date;
        }
        else {
            if (this.currentDate && this.currentRangeEnd) {
                this.currentDate = date;
                this.currentRangeEnd = undefined;
            }
            else if (this.currentDate && !this.currentRangeEnd) {
                this.currentRangeEnd = date;
            }
            else if (!this.currentDate) {
                this.currentDate = date;
            }
            // swap values if currentDate > currentRangeEnd
            if (this.currentRangeEnd &&
                this.currentDate &&
                this.currentRangeEnd.date < this.currentDate.date) {
                this.currentRangeEnd.date = [this.currentDate.date, this.currentDate.date = this.currentRangeEnd.date][0]; // swap values
            }
            // if more days selected than maxRangeLength, strip days
            if (this.selectRange &&
                this.currentRangeEnd &&
                this.currentDate &&
                this.currentDate.daysInRange(this.currentRangeEnd) > this.maxRangeLength) {
                var diffDays = this.currentDate.daysInRange(this.currentRangeEnd) - this.maxRangeLength;
                this.currentRangeEnd.moveDays(diffDays * (-1));
            }
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.currentDate && this.currentDate.isSameDay(date)) {
            return true;
        }
        return !!this.currentDate && !!this.currentRangeEnd && date.inRange(this.currentDate, this.currentRangeEnd);
    };
    DatePickerComponent.prototype.isBeginning = function (date) {
        return this.selectRange && !!this.currentDate && this.currentDate.isSameDay(date);
    };
    DatePickerComponent.prototype.isEnd = function (date) {
        return this.selectRange && !!this.currentRangeEnd && this.currentRangeEnd.isSameDay(date);
    };
    DatePickerComponent.prototype.isDayDisabled = function (day) {
        var minDate = this.minDate || new Date(0, 0, 1);
        var maxDate = this.maxDate || new Date(10000, 0, 1);
        return day.gt(maxDate) || day.lt(minDate);
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        var viewDate = this.viewDate || new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(1);
        }
    };
    DatePickerComponent.prototype.prevMonth = function () {
        var viewDate = this.viewDate || new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(-1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(-1);
        }
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.currentDate || new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        if (this.disabled) {
            return;
        }
        var viewDate = this.viewDate || new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        this.viewDate = viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.selectedDate = value;
        this.currentDate = value ? new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"](value) : undefined;
        this.viewDate = this.currentDate ? this.currentDate : new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.timeChange = function (date) {
        this.selectedDate = date;
        this.currentDate = date ? new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"](date) : undefined;
        if (this.currentDate) {
            this.onDateTap(this.currentDate);
        }
        this.viewDate = this.currentDate ? this.currentDate : new _calendar_date__WEBPACK_IMPORTED_MODULE_3__["CalendarDate"]();
        this.cdRef.markForCheck();
    };
    var DatePickerComponent_1;
    DatePickerComponent.Tag = 'DatePickerComponent';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "closeOnSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "highlightToday", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "highlightSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayWeekdays", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayHours24", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayMinutes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displaySeconds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayJumpToday", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "displayJumpSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerComponent.prototype, "selectedDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "selectRange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "maxRangeLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerComponent.prototype, "minDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "change", void 0);
    DatePickerComponent = DatePickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./lib/ng-vcl/src/date-picker/date-picker.component.html"),
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
            },
            styles: [".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/date-picker/index.ts":
/*!*********************************************!*\
  !*** ./lib/ng-vcl/src/date-picker/index.ts ***!
  \*********************************************/
/*! exports provided: DatePickerComponent, TimePickerComponent, VCLDatePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLDatePickerModule", function() { return VCLDatePickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-picker.component */ "./lib/ng-vcl/src/date-picker/date-picker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _date_picker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"]; });

/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _time_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-picker.component */ "./lib/ng-vcl/src/date-picker/time-picker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return _time_picker_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerComponent"]; });

/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var VCLDatePickerModule = /** @class */ (function () {
    function VCLDatePickerModule() {
    }
    VCLDatePickerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_index__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            exports: [_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"], _time_picker_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerComponent"]],
            declarations: [_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"], _time_picker_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerComponent"]],
            providers: [],
        })
    ], VCLDatePickerModule);
    return VCLDatePickerModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/date-picker/time-picker.component.html":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/date-picker/time-picker.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclLayoutHorizontal\">\n  <div *ngIf=\"displayHours\" class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" style=\"width: 18em;\">\n    <div *ngIf=\"displayHours24\" class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">Hour</div>\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\">12h</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i * 6 + x)\" (click)=\"onHourTap(i * 6 + x)\">{{ i * 6 + x }}</div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!displayHours24\" class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      \n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">AM</div>\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\">24h</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (click)=\"onHourTap(i % 12)\">{{ i }}</div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (click)=\"onHourTap(i % 12)\">{{ i }}</div>\n      </div>\n\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">PM</div>\n            <div class=\"vclButtonDim\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (click)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\n      </div>\n\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (click)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours ? '10px' : 0}\" *ngIf=\"displayMinutes\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n        <div class=\"vclDGRow\">\n          <div class=\"vclDGCell\">\n            <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n              <div class=\"vclButtonDim\"></div>\n              <div class=\"vclCalHeaderLabel\">Minute</div>\n              <div class=\"vclButtonDim\"></div>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isMinuteMarked(i * 10 + x)\" (click)=\"onMinuteTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours || displayMinutes ? '10px' : 0}\" *ngIf=\"displaySeconds\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">Second</div>\n            <div class=\"vclButtonDim\"></div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isSecondMarked(i * 10 + x)\" (click)=\"onSecondTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/date-picker/time-picker.component.ts":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/date-picker/time-picker.component.ts ***!
  \*************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, TimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return TimePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TimePickerComponent; }),
    multi: true
};
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(cdRef) {
        this.cdRef = cdRef;
        this.displayHours = true;
        this.displayMinutes = true;
        this.displaySeconds = true;
        this.displayHours24 = true;
        this.currentHour = -1;
        this.currentMinute = -1;
        this.currentSecond = -1;
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedDate) {
            this.currentHour = this.selectedDate.getHours();
            this.currentMinute = this.selectedDate.getMinutes();
            this.currentSecond = this.selectedDate.getSeconds();
        }
    };
    TimePickerComponent.prototype.isHourMarked = function (hour) {
        return hour === this.currentHour;
    };
    TimePickerComponent.prototype.isMinuteMarked = function (minute) {
        return minute === this.currentMinute;
    };
    TimePickerComponent.prototype.isSecondMarked = function (second) {
        return second === this.currentSecond;
    };
    TimePickerComponent.prototype.onHourTap = function (hour) {
        this.currentHour = hour;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setHours(hour);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onMinuteTap = function (minute) {
        this.currentMinute = minute;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setMinutes(minute);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onSecondTap = function (second) {
        this.currentSecond = second;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setSeconds(second);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onSwitch24h = function () {
        this.displayHours24 = !this.displayHours24;
    };
    TimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.selectedDate = changes.selectedDate.currentValue;
            if (this.selectedDate) {
                this.currentHour = this.selectedDate.getHours();
                this.currentMinute = this.selectedDate.getMinutes();
                this.currentSecond = this.selectedDate.getSeconds();
            }
        }
    };
    TimePickerComponent.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.selectedDate) {
            this.currentHour = this.selectedDate.getHours();
            this.currentMinute = this.selectedDate.getMinutes();
            this.currentSecond = this.selectedDate.getSeconds();
        }
        this.cdRef.markForCheck();
    };
    TimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TimePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TimePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.cdRef.markForCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], TimePickerComponent.prototype, "selectedDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimePickerComponent.prototype, "displayHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimePickerComponent.prototype, "displayMinutes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimePickerComponent.prototype, "displaySeconds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimePickerComponent.prototype, "displayHours24", void 0);
    TimePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-time-picker',
            template: __webpack_require__(/*! ./time-picker.component.html */ "./lib/ng-vcl/src/date-picker/time-picker.component.html"),
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
                '[style.height]': '"284px"' // TODO this fixes for IE11
            },
            styles: [".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TimePickerComponent);
    return TimePickerComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/dropdown/dropdown-option.component.ts":
/*!**************************************************************!*\
  !*** ./lib/ng-vcl/src/dropdown/dropdown-option.component.ts ***!
  \**************************************************************/
/*! exports provided: DropdownOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownOptionComponent", function() { return DropdownOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownOptionComponent = /** @class */ (function () {
    function DropdownOptionComponent() {
        this.disabled = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DropdownOptionComponent.prototype, "_content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownOptionComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownOptionComponent.prototype, "metadata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownOptionComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownOptionComponent.prototype, "sublabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownOptionComponent.prototype, "prepIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownOptionComponent.prototype, "appIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownOptionComponent.prototype, "appIconSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownOptionComponent.prototype, "prepIconSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownOptionComponent.prototype, "disabled", void 0);
    DropdownOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-dropdown-option',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], DropdownOptionComponent);
    return DropdownOptionComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/dropdown/dropdown.component.html":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/dropdown/dropdown.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul vcl-metalist #metalist\n  class=\"vclDropdown vclOpen\"\n  role=\"listbox\"\n  [class.vclLayoutHidden]=\"state === DropdownState.Closed\" \n  [value]=\"value\"\n  [mode]=\"mode\"\n  [maxSelectableItems]=\"maxSelectableItems\"\n  [class.vclDisabled]=\"disabled\"\n  [attr.tabindex]=\"tabindex\"\n  [attr.aria-multiselectable]=\"mode === 'multiple'\"\n  [style.position]=\"'static'\"\n  (change)=\"onMetalistChange($event)\"\n  (focus)=\"onMetalistFocus()\"\n  (blur)=\"onMetalistBlur()\"\n  (keydown)=\"onMetalistKeydown($event)\"\n  (itemsChange)=\"onItemsChange()\"\n  >\n    <li \n      *ngFor=\"let item of items\" \n      vcl-metalist-item\n      #meta=meta\n      [metadata]=\"item\"\n      [disabled]=\"disabled || item.disabled\"\n      [value]=\"item.value\"\n      role=\"option\"\n      class=\"vclDropdownItem\"\n      [class.vclSelected]=\"meta.selected\"\n      [class.vclDisabled]=\"disabled || meta.disabled\"\n      [class.vclHighlighted]=\"focused && meta.marked\"\n      [attr.aria-selected]=\"meta.selected\"\n      (click)=\"onMetalistItemTap(meta)\">\n      <vcl-icogram *ngIf=\"item.label\" class=\"vclDropdownItemLabel\"\n         [prepIcon]=\"item.prepIcon\"\n         [appIcon]=\"item.appIcon\"\n      >\n        {{item.label}}\n      </vcl-icogram>\n      <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">\n        {{item.sublabel}}\n      </div>\n      <wormhole *ngIf=\"item._content\" [connect]=\"item._content\"></wormhole>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/dropdown/dropdown.component.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/dropdown/dropdown.component.ts ***!
  \*******************************************************/
/*! exports provided: DropdownState, DROPDOWN_ANIMATIONS, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownState", function() { return DropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_ANIMATIONS", function() { return DROPDOWN_ANIMATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dropdown_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-option.component */ "./lib/ng-vcl/src/dropdown/dropdown-option.component.ts");
/* harmony import */ var _metalist_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metalist/index */ "./lib/ng-vcl/src/metalist/index.ts");






var DropdownState;
(function (DropdownState) {
    DropdownState[DropdownState["Expanded"] = 0] = "Expanded";
    DropdownState[DropdownState["Closed"] = 1] = "Closed";
    DropdownState[DropdownState["Expanding"] = 2] = "Expanding";
    DropdownState[DropdownState["Closing"] = 3] = "Closing";
})(DropdownState || (DropdownState = {}));
var DROPDOWN_ANIMATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ng-vcl/ng-vcl#dropdown_animations');
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DropdownComponent; }),
    multi: true
};
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(elementRef, cdRef, builder, animations) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.builder = builder;
        this.animations = animations;
        this.DropdownState = DropdownState;
        this.tabindex = 0;
        this.state = DropdownState.Expanded;
        this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.willExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.disabled = false;
        this.listenKeys = true;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(DropdownComponent.prototype, "expanded", {
        get: function () {
            return (this.state === DropdownState.Expanding || this.state === DropdownState.Expanded);
        },
        set: function (value) {
            if (value) {
                this.expand();
            }
            else {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.ngOnInit = function () {
        this.scroll('selected');
    };
    DropdownComponent.prototype.expand = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var player_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.state === DropdownState.Expanded || this.state === DropdownState.Expanding) {
                    return [2 /*return*/];
                }
                this.state = DropdownState.Expanding;
                this.willExpand.emit();
                if (this.enterAnimationFactory && this.elementRef) {
                    player_1 = this.enterAnimationFactory.create(this.elementRef.nativeElement);
                    player_1.onDone(function () {
                        player_1.destroy();
                        _this.state = DropdownState.Expanded;
                        _this.cdRef.markForCheck();
                    });
                    player_1.play();
                }
                else {
                    this.state = DropdownState.Expanded;
                    this.cdRef.markForCheck();
                }
                return [2 /*return*/];
            });
        });
    };
    DropdownComponent.prototype.close = function () {
        var _this = this;
        if (this.state === DropdownState.Closed || this.state === DropdownState.Closing) {
            return;
        }
        this.state = DropdownState.Closing;
        this.willClose.emit();
        if (this.leaveAnimationFactory && this.elementRef) {
            var player_2 = this.leaveAnimationFactory.create(this.elementRef.nativeElement);
            player_2.onDone(function () {
                player_2.destroy();
                _this.state = DropdownState.Closed;
                _this.cdRef.markForCheck();
            });
            player_2.play();
        }
        else {
            this.state = DropdownState.Closed;
            this.cdRef.markForCheck();
        }
    };
    DropdownComponent.prototype.scroll = function (target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectedItem, allItems_1, scrollTop_1, metalistItems;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 0); })];
                    case 1:
                        _a.sent();
                        if (this.listbox.nativeElement) {
                            selectedItem = this.listbox.nativeElement.querySelectorAll('.vclSelected')[0];
                            if (!selectedItem) {
                                return [2 /*return*/];
                            }
                            allItems_1 = this.listbox.nativeElement.querySelectorAll('.vclDropdownItem');
                            scrollTop_1 = -this.listbox.nativeElement.clientHeight / 2 + (selectedItem.clientHeight / 2);
                            metalistItems = this.metalist.itemsArray;
                            metalistItems.some(function (item, idx) {
                                if (item[target]) {
                                    _this.listbox.nativeElement.scrollTop = scrollTop_1;
                                    return true;
                                }
                                scrollTop_1 += allItems_1[idx].clientHeight;
                                return false;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DropdownComponent.prototype.onMetalistItemTap = function (metaItem) {
        this.metalist.select(metaItem);
        this.onTouched();
    };
    DropdownComponent.prototype.onMetalistKeydown = function (ev) {
        if (this.listenKeys) {
            var prevent = true;
            switch (ev.code) {
                case 'ArrowDown':
                    this.metalist.markNext();
                    this.scroll('marked');
                    break;
                case 'ArrowUp':
                    this.metalist.markPrev();
                    this.scroll('marked');
                    break;
                case 'Enter':
                    this.metalist.selectMarked();
                    break;
                default:
                    prevent = false;
            }
            this.onTouched();
            prevent && ev.preventDefault();
        }
    };
    DropdownComponent.prototype.ngAfterViewInit = function () {
        if (this.animations) {
            if (this.animations.enter) {
                this.enterAnimationFactory = this.builder.build(this.animations.enter);
            }
            if (this.animations.leave) {
                this.leaveAnimationFactory = this.builder.build(this.animations.leave);
            }
        }
    };
    DropdownComponent.prototype.onMetalistFocus = function () {
        this.focused = true;
    };
    DropdownComponent.prototype.onMetalistBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    DropdownComponent.prototype.onMetalistChange = function (value) {
        this.change.emit(value);
        this.onChange(value);
    };
    DropdownComponent.prototype.onItemsChange = function () {
        // Nested meta items have changed. So we need need to trigger change detection
        this.cdRef.detectChanges();
        this.itemsChange.emit();
    };
    DropdownComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.metalist.setValue(value);
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DropdownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('metalist'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _metalist_index__WEBPACK_IMPORTED_MODULE_5__["MetalistComponent"])
    ], DropdownComponent.prototype, "metalist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('metalist', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DropdownComponent.prototype, "listbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_dropdown_option_component__WEBPACK_IMPORTED_MODULE_4__["DropdownOptionComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], DropdownComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DropdownComponent.prototype, "expanded", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "willClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "willExpand", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DropdownComponent.prototype, "maxSelectableItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "listenKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "itemsChange", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./lib/ng-vcl/src/dropdown/dropdown.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[attr.tabindex]': '-1',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DROPDOWN_ANIMATIONS)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"], Object])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/dropdown/index.ts":
/*!******************************************!*\
  !*** ./lib/ng-vcl/src/dropdown/index.ts ***!
  \******************************************/
/*! exports provided: DropdownOptionComponent, DropdownComponent, DROPDOWN_ANIMATIONS, VCLDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLDropdownModule", function() { return VCLDropdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wormhole_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wormhole/index */ "./lib/ng-vcl/src/wormhole/index.ts");
/* harmony import */ var _metalist_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metalist/index */ "./lib/ng-vcl/src/metalist/index.ts");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown.component */ "./lib/ng-vcl/src/dropdown/dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_ANIMATIONS", function() { return _dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DROPDOWN_ANIMATIONS"]; });

/* harmony import */ var _dropdown_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-option.component */ "./lib/ng-vcl/src/dropdown/dropdown-option.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownOptionComponent", function() { return _dropdown_option_component__WEBPACK_IMPORTED_MODULE_6__["DropdownOptionComponent"]; });

/* harmony import */ var _icogram_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icogram/index */ "./lib/ng-vcl/src/icogram/index.ts");









var VCLDropdownModule = /** @class */ (function () {
    function VCLDropdownModule() {
    }
    VCLDropdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _metalist_index__WEBPACK_IMPORTED_MODULE_4__["VCLMetalistModule"], _wormhole_index__WEBPACK_IMPORTED_MODULE_3__["VCLWormholeModule"], _icogram_index__WEBPACK_IMPORTED_MODULE_7__["VCLIcogramModule"]],
            exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"], _dropdown_option_component__WEBPACK_IMPORTED_MODULE_6__["DropdownOptionComponent"]],
            declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"], _dropdown_option_component__WEBPACK_IMPORTED_MODULE_6__["DropdownOptionComponent"]],
            providers: [],
        })
    ], VCLDropdownModule);
    return VCLDropdownModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group-button.component.ts":
/*!**************************************************************************************!*\
  !*** ./lib/ng-vcl/src/embedded-input-group/embedded-input-group-button.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EmbeddedInputGroupButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupButtonComponent", function() { return EmbeddedInputGroupButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/embedded-input-group/interfaces.ts");




var EmbeddedInputGroupButtonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmbeddedInputGroupButtonComponent, _super);
    function EmbeddedInputGroupButtonComponent(group, elementRef, cdRef, observer) {
        var _this = _super.call(this, cdRef, elementRef, observer) || this;
        _this.group = group;
        _this.classVCLTransparent = true;
        _this.classVCLAppended = true;
        return _this;
    }
    EmbeddedInputGroupButtonComponent_1 = EmbeddedInputGroupButtonComponent;
    Object.defineProperty(EmbeddedInputGroupButtonComponent.prototype, "isDisabled", {
        get: function () {
            return (this.getDisabled() || this.group.disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    var EmbeddedInputGroupButtonComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclTransparent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmbeddedInputGroupButtonComponent.prototype, "classVCLTransparent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclAppended'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmbeddedInputGroupButtonComponent.prototype, "classVCLAppended", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmbeddedInputGroupButtonComponent.prototype, "isDisabled", null);
    EmbeddedInputGroupButtonComponent = EmbeddedInputGroupButtonComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'button[vcl-embedded-input-group]',
            template: __webpack_require__(/*! ../button/button-icon.component.html */ "./lib/ng-vcl/src/button/button-icon.component.html"),
            exportAs: 'vclButton',
            providers: [
                {
                    provide: _button__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmbeddedInputGroupButtonComponent_1; })
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_3__["EMBEDDED_INPUT_GROUP_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_button__WEBPACK_IMPORTED_MODULE_2__["BUTTON_OBSERVER_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object])
    ], EmbeddedInputGroupButtonComponent);
    return EmbeddedInputGroupButtonComponent;
}(_button__WEBPACK_IMPORTED_MODULE_2__["ButtonIconComponent"]));



/***/ }),

/***/ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group-input.directive.ts":
/*!*************************************************************************************!*\
  !*** ./lib/ng-vcl/src/embedded-input-group/embedded-input-group-input.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: EmbeddedInputGroupInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupInputDirective", function() { return EmbeddedInputGroupInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/embedded-input-group/interfaces.ts");




var EmbeddedInputGroupInputDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmbeddedInputGroupInputDirective, _super);
    function EmbeddedInputGroupInputDirective(elRef, host) {
        var _this = _super.call(this, elRef) || this;
        _this.host = host;
        return _this;
    }
    Object.defineProperty(EmbeddedInputGroupInputDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled || this.host.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputGroupInputDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputGroupInputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputGroupInputDirective.prototype, "prepItem", {
        get: function () {
            return !!this.host.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputGroupInputDirective.prototype, "hasAppendedItem", {
        get: function () {
            return this.host.hasAppendedItem;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmbeddedInputGroupInputDirective.prototype, "classDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmbeddedInputGroupInputDirective.prototype, "attrDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclPrepItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmbeddedInputGroupInputDirective.prototype, "prepItem", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclAppItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmbeddedInputGroupInputDirective.prototype, "hasAppendedItem", null);
    EmbeddedInputGroupInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[vclEmbeddedInputGroup]',
            exportAs: 'vclInput'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_3__["EMBEDDED_INPUT_GROUP_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], EmbeddedInputGroupInputDirective);
    return EmbeddedInputGroupInputDirective;
}(_input_index__WEBPACK_IMPORTED_MODULE_2__["InputDirective"]));



/***/ }),

/***/ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group.component.html":
/*!*********************************************************************************!*\
  !*** ./lib/ng-vcl/src/embedded-input-group/embedded-input-group.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='prepIcon' class=\"vclPrepended\">\n  <vcl-icon [icon]='prepIcon'></vcl-icon>\n</div>\n\n<ng-content select=\"input[vclEmbeddedInputGroup]\"></ng-content>\n\n<div *ngIf='appIcon' class=\"vclAppended\">\n  <vcl-icon [icon]='appIcon'></vcl-icon>\n</div>\n\n<ng-content select=\"button[vcl-embedded-input-group]\"></ng-content>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group.component.ts":
/*!*******************************************************************************!*\
  !*** ./lib/ng-vcl/src/embedded-input-group/embedded-input-group.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmbeddedInputGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedInputGroupComponent", function() { return EmbeddedInputGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/embedded-input-group/interfaces.ts");
/* harmony import */ var _embedded_input_group_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embedded-input-group-button.component */ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group-button.component.ts");




var EmbeddedInputGroupComponent = /** @class */ (function () {
    function EmbeddedInputGroupComponent() {
        // TODO remove workaround
        this.styleDisplay = 'block';
        this.classVCLInputGroupEmb = true;
        this.disabled = false;
    }
    EmbeddedInputGroupComponent_1 = EmbeddedInputGroupComponent;
    Object.defineProperty(EmbeddedInputGroupComponent.prototype, "hasAppendedItem", {
        get: function () {
            return !!this.appIcon || (this.buttons && this.buttons.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    var EmbeddedInputGroupComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmbeddedInputGroupComponent.prototype, "styleDisplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInputGroupEmb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmbeddedInputGroupComponent.prototype, "classVCLInputGroupEmb", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmbeddedInputGroupComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmbeddedInputGroupComponent.prototype, "prepIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmbeddedInputGroupComponent.prototype, "appIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return _embedded_input_group_button_component__WEBPACK_IMPORTED_MODULE_3__["EmbeddedInputGroupButtonComponent"]; })),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], EmbeddedInputGroupComponent.prototype, "buttons", void 0);
    EmbeddedInputGroupComponent = EmbeddedInputGroupComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-embedded-input-group',
            template: __webpack_require__(/*! ./embedded-input-group.component.html */ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group.component.html"),
            exportAs: 'vclEmbeddedInputGroup',
            providers: [
                {
                    provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["EMBEDDED_INPUT_GROUP_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmbeddedInputGroupComponent_1; })
                }
            ]
        })
    ], EmbeddedInputGroupComponent);
    return EmbeddedInputGroupComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/embedded-input-group/index.ts":
/*!******************************************************!*\
  !*** ./lib/ng-vcl/src/embedded-input-group/index.ts ***!
  \******************************************************/
/*! exports provided: VCLEmbeddedInputGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLEmbeddedInputGroupModule", function() { return VCLEmbeddedInputGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _embedded_input_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./embedded-input-group.component */ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group.component.ts");
/* harmony import */ var _embedded_input_group_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./embedded-input-group-button.component */ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group-button.component.ts");
/* harmony import */ var _embedded_input_group_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./embedded-input-group-input.directive */ "./lib/ng-vcl/src/embedded-input-group/embedded-input-group-input.directive.ts");









var VCLEmbeddedInputGroupModule = /** @class */ (function () {
    function VCLEmbeddedInputGroupModule() {
    }
    VCLEmbeddedInputGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_index__WEBPACK_IMPORTED_MODULE_3__["VCLButtonModule"], _input_index__WEBPACK_IMPORTED_MODULE_4__["VCLInputModule"], _icon_index__WEBPACK_IMPORTED_MODULE_5__["VCLIconModule"]],
            exports: [_embedded_input_group_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupComponent"], _embedded_input_group_input_directive__WEBPACK_IMPORTED_MODULE_8__["EmbeddedInputGroupInputDirective"], _embedded_input_group_button_component__WEBPACK_IMPORTED_MODULE_7__["EmbeddedInputGroupButtonComponent"]],
            declarations: [_embedded_input_group_component__WEBPACK_IMPORTED_MODULE_6__["EmbeddedInputGroupComponent"], _embedded_input_group_input_directive__WEBPACK_IMPORTED_MODULE_8__["EmbeddedInputGroupInputDirective"], _embedded_input_group_button_component__WEBPACK_IMPORTED_MODULE_7__["EmbeddedInputGroupButtonComponent"]],
        })
    ], VCLEmbeddedInputGroupModule);
    return VCLEmbeddedInputGroupModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/embedded-input-group/interfaces.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/embedded-input-group/interfaces.ts ***!
  \***********************************************************/
/*! exports provided: EMBEDDED_INPUT_GROUP_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMBEDDED_INPUT_GROUP_TOKEN", function() { return EMBEDDED_INPUT_GROUP_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var EMBEDDED_INPUT_GROUP_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('embedded-input-group');


/***/ }),

/***/ "./lib/ng-vcl/src/file-input/accept.ts":
/*!*********************************************!*\
  !*** ./lib/ng-vcl/src/file-input/accept.ts ***!
  \*********************************************/
/*! exports provided: accept */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accept", function() { return accept; });
function accept(file, acceptedFiles) {
    if (file && acceptedFiles) {
        var acceptedFilesArray = (Array.isArray(acceptedFiles) ?
            acceptedFiles :
            acceptedFiles.split(','));
        var fileName_1 = file.name || '';
        var mimeType_1 = file.type || '';
        var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
        return acceptedFilesArray.some(function (type) {
            var validType = type.trim();
            if (validType.charAt(0) === '.') {
                return fileName_1.toLowerCase().endsWith(validType.toLowerCase());
            }
            else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                return baseMimeType_1 === validType.replace(/\/.*$/, '');
            }
            return mimeType_1 === validType;
        });
    }
    return true;
}


/***/ }),

/***/ "./lib/ng-vcl/src/file-input/file-input.component.html":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/file-input/file-input.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #input type=\"file\" [style.display]=\"'none'\" (change)=\"onInputChange()\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\" />\n<div class=\"vclFileInputIcon vclIcon {{ icon }}\" aria-hidden=\"true\" aria-label=\"account\" role=\"img\"></div>\n<div class=\"vclFileInputPlaceholder\">\n  <ng-container *ngIf=\"filename\">{{ filename }}</ng-container>\n  <div *ngIf=\"!filename\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/file-input/file-input.component.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/file-input/file-input.component.ts ***!
  \***********************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FileInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accept */ "./lib/ng-vcl/src/file-input/accept.ts");




var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FileInputComponent; }),
    multi: true
};
var FileInputComponent = /** @class */ (function () {
    function FileInputComponent(cdRef) {
        this.cdRef = cdRef;
        this.icon = 'fas fa-upload';
        this.accept = '*';
        this.multiple = false;
        this.files = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tabindex = 0;
        this.disabled = false;
        this.invalidFiles = false;
        this.isDragging = false;
        this.isFocused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(FileInputComponent.prototype, "fileInput", {
        get: function () {
            return this.input && this.input.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    FileInputComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    FileInputComponent.prototype.onBlur = function () {
        this.isFocused = false;
        this.onTouched();
    };
    FileInputComponent.prototype.onInputChange = function () {
        if (this.fileInput && this.fileInput.files) {
            this.updateFiles(this.fileInput.files);
        }
    };
    FileInputComponent.prototype.checkFiles = function (files) {
        var _this = this;
        var hasWrongFiles = Array.from(files).some(function (file) { return !Object(_accept__WEBPACK_IMPORTED_MODULE_3__["accept"])(file, _this.accept); });
        // TODO remove *-check after issue https://github.com/okonet/attr-accept/issues/8
        this.invalidFiles = hasWrongFiles && this.accept !== '*';
    };
    FileInputComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Enter':
            case 'Space':
                ev.preventDefault();
                if (this.disabled) {
                    return;
                }
                this.fileInput && this.fileInput.click();
                this.onTouched();
                break;
        }
    };
    FileInputComponent.prototype.onClick = function (value) {
        if (this.disabled) {
            return;
        }
        this.fileInput && this.fileInput.click();
        this.onTouched();
    };
    FileInputComponent.prototype.onDragOver = function (e) {
        this.isDragging = true;
        e.preventDefault();
        e.stopPropagation();
    };
    FileInputComponent.prototype.onDragLeave = function (e) {
        this.isDragging = false;
        e.preventDefault();
        e.stopPropagation();
    };
    FileInputComponent.prototype.onDrop = function (e) {
        // cancel event and hover styling
        e.preventDefault();
        e.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.isDragging = false;
        // fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
        this.updateFiles(files);
        this.onTouched();
    };
    FileInputComponent.prototype.updateFiles = function (files) {
        if (files instanceof FileList) {
            var name_1 = files[0].name;
            if (this.multiple) {
                name_1 += ' (' + files.length + ')';
            }
            this.filename = name_1;
            this.value = files;
            this.checkFiles(files);
            this.files.emit(files);
            this.onChange(files);
        }
    };
    FileInputComponent.prototype.writeValue = function (files) {
        this.value = files;
        this.cdRef.markForCheck();
    };
    FileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    FileInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "accept", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "files", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclError'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "invalidFiles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDragndrop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "isDragging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.isFocused'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileInputComponent.prototype, "isFocused", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FileInputComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "onFocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "onBlur", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "keydown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.target.value']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDrop", null);
    FileInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-file-input',
            template: __webpack_require__(/*! ./file-input.component.html */ "./lib/ng-vcl/src/file-input/file-input.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclInput]': 'true',
                '[class.vclFileInput]': 'true',
                role: 'button',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FileInputComponent);
    return FileInputComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/file-input/index.ts":
/*!********************************************!*\
  !*** ./lib/ng-vcl/src/file-input/index.ts ***!
  \********************************************/
/*! exports provided: VCLFileInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLFileInputModule", function() { return VCLFileInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-input.component */ "./lib/ng-vcl/src/file-input/file-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var VCLFileInputModule = /** @class */ (function () {
    function VCLFileInputModule() {
    }
    VCLFileInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_file_input_component__WEBPACK_IMPORTED_MODULE_2__["FileInputComponent"]],
            declarations: [_file_input_component__WEBPACK_IMPORTED_MODULE_2__["FileInputComponent"]],
            providers: [],
        })
    ], VCLFileInputModule);
    return VCLFileInputModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/flip-switch/flip-switch.component.html":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/flip-switch/flip-switch.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"vclFlipSwitchLabel\">\n  <div class=\"vclFlipSwitchTrack\">\n    <div class=\"vclFlipSwitchActive\" [attr.aria-hidden]=\"!value\">{{onLabel}}</div>\n    <div class=\"vclFlipSwitchInactive\" [attr.aria-hidden]=\"value\">{{offLabel}}</div>\n  </div>\n  <div class=\"vclFlipSwitchKnob\"></div>\n</label>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/flip-switch/flip-switch.component.ts":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/flip-switch/flip-switch.component.ts ***!
  \*************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FlipSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipSwitchComponent", function() { return FlipSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = /** @class */ (function () {
    function FlipSwitchComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.value = false;
        this.disabled = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FlipSwitchComponent.prototype.onTap = function () {
        this.toggle();
    };
    FlipSwitchComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Space':
                ev.preventDefault();
                this.toggle();
                break;
            case 'ArrowLeft':
                ev.preventDefault();
                if (!this.value) {
                    this.toggle();
                }
                break;
            case 'ArrowRight':
                ev.preventDefault();
                if (this.value) {
                    this.toggle();
                }
                break;
        }
    };
    FlipSwitchComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    FlipSwitchComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FlipSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlipSwitchComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlipSwitchComponent.prototype, "onLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlipSwitchComponent.prototype, "offLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlipSwitchComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlipSwitchComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlipSwitchComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FlipSwitchComponent.prototype, "onTap", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FlipSwitchComponent.prototype, "keydown", null);
    FlipSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-flip-switch',
            template: __webpack_require__(/*! ./flip-switch.component.html */ "./lib/ng-vcl/src/flip-switch/flip-switch.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclFlipSwitch]': 'true',
                '[class.vclFlipSwitchPressed]': 'value',
                '[attr.role]': '"button"',
                '[attr.aria-pressed]': 'value',
                '[attr.touch-action]': '"pan-y"'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FlipSwitchComponent);
    return FlipSwitchComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/flip-switch/index.ts":
/*!*********************************************!*\
  !*** ./lib/ng-vcl/src/flip-switch/index.ts ***!
  \*********************************************/
/*! exports provided: VCLFlipSwitchModule, FlipSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLFlipSwitchModule", function() { return VCLFlipSwitchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flip_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip-switch.component */ "./lib/ng-vcl/src/flip-switch/flip-switch.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipSwitchComponent", function() { return _flip_switch_component__WEBPACK_IMPORTED_MODULE_3__["FlipSwitchComponent"]; });





var VCLFlipSwitchModule = /** @class */ (function () {
    function VCLFlipSwitchModule() {
    }
    VCLFlipSwitchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_flip_switch_component__WEBPACK_IMPORTED_MODULE_3__["FlipSwitchComponent"]],
            declarations: [_flip_switch_component__WEBPACK_IMPORTED_MODULE_3__["FlipSwitchComponent"]],
            providers: [],
        })
    ], VCLFlipSwitchModule);
    return VCLFlipSwitchModule;
}());




/***/ }),

/***/ "./lib/ng-vcl/src/font-awesome/alias-map.ts":
/*!**************************************************!*\
  !*** ./lib/ng-vcl/src/font-awesome/alias-map.ts ***!
  \**************************************************/
/*! exports provided: ALIAS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIAS_MAP", function() { return ALIAS_MAP; });
var ALIAS_MAP = {
    'close': 'fas fa-times',
    'busy': 'fas fa-circle-notch fa-spin',
    'box': 'fas fa-square',
    'box-checked': 'fas fa-check-square',
    'circle': 'fas fa-circle',
    'circle-checked': 'fas fa-dot-circle',
    'question': 'fas fa-question-circle',
    'info': 'fas fa-info-circle',
    'success': 'fas fa-check-circle',
    'warning': 'fas fa-exclamation-triangle',
    'error': 'fas fa-exclamation-circle'
};


/***/ }),

/***/ "./lib/ng-vcl/src/font-awesome/icon-resolver.service.ts":
/*!**************************************************************!*\
  !*** ./lib/ng-vcl/src/font-awesome/icon-resolver.service.ts ***!
  \**************************************************************/
/*! exports provided: FontAwesomeIconResolverService, FontAwesomeVCLIconResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIconResolverService", function() { return FontAwesomeIconResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeVCLIconResolverService", function() { return FontAwesomeVCLIconResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _alias_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alias-map */ "./lib/ng-vcl/src/font-awesome/alias-map.ts");




// The font-awesome name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `fas:user` into `fas fa-user`
var FontAwesomeIconResolverService = /** @class */ (function () {
    function FontAwesomeIconResolverService() {
        this.priority = 50;
        this.FA_REGEX = /^(fa[bsrl]):([a-z0-9-_]+)$/;
    }
    FontAwesomeIconResolverService.prototype.resolve = function (icon) {
        var result = this.FA_REGEX.exec(icon);
        if (result) {
            var s = result[0], prefix = result[1], value = result[2];
            return prefix + " fa-" + value;
        }
        return undefined;
    };
    FontAwesomeIconResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FontAwesomeIconResolverService);
    return FontAwesomeIconResolverService;
}());

var FontAwesomeVCLIconResolverService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FontAwesomeVCLIconResolverService, _super);
    function FontAwesomeVCLIconResolverService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.priority = 10;
        return _this;
    }
    FontAwesomeVCLIconResolverService.prototype.lookup = function (alias) {
        return _alias_map__WEBPACK_IMPORTED_MODULE_3__["ALIAS_MAP"][alias];
    };
    FontAwesomeVCLIconResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FontAwesomeVCLIconResolverService);
    return FontAwesomeVCLIconResolverService;
}(_icon__WEBPACK_IMPORTED_MODULE_2__["VCLIconResolverServiceBase"]));



/***/ }),

/***/ "./lib/ng-vcl/src/font-awesome/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/font-awesome/index.ts ***!
  \**********************************************/
/*! exports provided: FontAwesomeIconResolverService, FontAwesomeVCLIconResolverService, VCLFontAwesomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLFontAwesomeModule", function() { return VCLFontAwesomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-resolver.service */ "./lib/ng-vcl/src/font-awesome/icon-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIconResolverService", function() { return _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeVCLIconResolverService", function() { return _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeVCLIconResolverService"]; });






var VCLFontAwesomeModule = /** @class */ (function () {
    function VCLFontAwesomeModule() {
    }
    VCLFontAwesomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIconResolverService"],
                _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeVCLIconResolverService"],
                {
                    provide: _icon__WEBPACK_IMPORTED_MODULE_2__["IconResolverService"],
                    useExisting: _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIconResolverService"],
                    multi: true
                }, {
                    provide: _icon__WEBPACK_IMPORTED_MODULE_2__["IconResolverService"],
                    useExisting: _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeVCLIconResolverService"],
                    multi: true
                }
            ]
        })
    ], VCLFontAwesomeModule);
    return VCLFontAwesomeModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/form-control-label/form-control-label.component.ts":
/*!***************************************************************************!*\
  !*** ./lib/ng-vcl/src/form-control-label/form-control-label.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormControlLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlLabelComponent", function() { return FormControlLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/form-control-label/interfaces.ts");



var FormControlLabelComponent = /** @class */ (function () {
    function FormControlLabelComponent() {
        this.classVCLFormControlLabel = true;
    }
    Object.defineProperty(FormControlLabelComponent.prototype, "attrFor", {
        get: function () {
            if (this.for) {
                return this.for;
            }
            else if (this.target && this.target.elementId) {
                return this.target && this.target.elementId;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlLabelComponent.prototype, "classVCLFormControlLabelWrapping", {
        get: function () {
            return this.children && this.children.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlLabelComponent.prototype, "isDisabled", {
        get: function () {
            return this.targets.every(function (t) { return t.isDisabled; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlLabelComponent.prototype, "targets", {
        get: function () {
            return [this.target].concat(this.children.toArray()).filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    FormControlLabelComponent.prototype.onclick = function (event) {
        this.targets.forEach(function (t) { return t.notifyFormControlLabelClick(event); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormControlLabelComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormControlLabelComponent.prototype, "for", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.for'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormControlLabelComponent.prototype, "attrFor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclFormControlLabelWrapping'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormControlLabelComponent.prototype, "classVCLFormControlLabelWrapping", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_interfaces__WEBPACK_IMPORTED_MODULE_2__["FORM_CONTROL_LABEL_MEMBER_TOKEN"], {
            read: _interfaces__WEBPACK_IMPORTED_MODULE_2__["FORM_CONTROL_LABEL_MEMBER_TOKEN"],
            descendants: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], FormControlLabelComponent.prototype, "children", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclFormControlLabel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormControlLabelComponent.prototype, "classVCLFormControlLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormControlLabelComponent.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FormControlLabelComponent.prototype, "onclick", null);
    FormControlLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'label[vcl-form-control-label]',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        })
    ], FormControlLabelComponent);
    return FormControlLabelComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/form-control-label/index.ts":
/*!****************************************************!*\
  !*** ./lib/ng-vcl/src/form-control-label/index.ts ***!
  \****************************************************/
/*! exports provided: FormControlLabelComponent, FORM_CONTROL_LABEL_MEMBER_TOKEN, VCLFormControlLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLFormControlLabelModule", function() { return VCLFormControlLabelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _form_control_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-control-label.component */ "./lib/ng-vcl/src/form-control-label/form-control-label.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControlLabelComponent", function() { return _form_control_label_component__WEBPACK_IMPORTED_MODULE_4__["FormControlLabelComponent"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ "./lib/ng-vcl/src/form-control-label/interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_LABEL_MEMBER_TOKEN", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_5__["FORM_CONTROL_LABEL_MEMBER_TOKEN"]; });






// import { FormControlLabelWrappingComponent } from './form-control-label-wrapping.component';


var VCLFormControlLabelModule = /** @class */ (function () {
    function VCLFormControlLabelModule() {
    }
    VCLFormControlLabelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icon_index__WEBPACK_IMPORTED_MODULE_3__["VCLIconModule"]],
            exports: [_form_control_label_component__WEBPACK_IMPORTED_MODULE_4__["FormControlLabelComponent"]],
            declarations: [_form_control_label_component__WEBPACK_IMPORTED_MODULE_4__["FormControlLabelComponent"]]
        })
    ], VCLFormControlLabelModule);
    return VCLFormControlLabelModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/form-control-label/interfaces.ts":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/form-control-label/interfaces.ts ***!
  \*********************************************************/
/*! exports provided: FORM_CONTROL_LABEL_MEMBER_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_LABEL_MEMBER_TOKEN", function() { return FORM_CONTROL_LABEL_MEMBER_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FORM_CONTROL_LABEL_MEMBER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('vcl-form-control-label-member');


/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-body.component.html":
/*!************************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-body.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclGalleryContent\" style=\"overflow: hidden;\">\n  <button *ngIf=\"target.selectedImage > 0 || target.wrap\" vcl-button class=\"vclButton vclGalleryPrevButton\" (click)=\"selectPrevious()\">\n    <div class=\"vclIcon fas fa-caret-left\" aria-hidden=\"true\" aria-label=\"Previous\" role=\"img\"></div>\n  </button>\n\n  <div #imageContainer style=\"position: relative; width: 100%; height: 100%; transition: transform 0.5s\" [ngStyle]=\"imageContainerStyle\">\n    <img *ngFor=\"let img of target.imageArray; let i = index\" [attr.data-index]=\"i\" (click)=\"target.selectImage(i)\" (load)=\"imageLoaded()\" [src]=\"img.image\" [alt]=\"img.alt\" style=\"touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: absolute; left: 0; top: 0\">\n  </div>\n\n  <button *ngIf=\"target.selectedImage < (target.images ? target.images.length - 1 : 0) || target.wrap\" vcl-button class=\"vclButton vclGalleryNextButton\" (click)=\"selectNext()\">\n    <div class=\"vclIcon fas fa-caret-right\" aria-hidden=\"true\" aria-label=\"Previous\" role=\"img\"></div>\n  </button>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-body.component.ts":
/*!**********************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-body.component.ts ***!
  \**********************************************************/
/*! exports provided: GalleryBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryBodyComponent", function() { return GalleryBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./lib/ng-vcl/src/gallery/gallery.component.ts");



var GalleryBodyComponent = /** @class */ (function () {
    function GalleryBodyComponent(parent, elementRef) {
        this.elementRef = elementRef;
        this.initialized = false;
        this.containerHeight = 0;
        this.loadedCount = 0;
        if (this.target == null) {
            this.target = parent;
        }
    }
    GalleryBodyComponent.prototype.onSwipeLeft = function () {
        this.selectNext();
    };
    GalleryBodyComponent.prototype.onSwipeRight = function () {
        this.selectPrevious();
    };
    GalleryBodyComponent.prototype.ngAfterContentChecked = function () {
        if (!this.initialized) {
            var images = this.imageContainer.nativeElement.querySelectorAll('img');
            if (images.length === 0) {
                return;
            }
            this.initialized = true;
            this.imgS = Array.from(images);
        }
    };
    GalleryBodyComponent.prototype.imageLoaded = function () {
        this.loadedCount++;
        this.reload();
    };
    GalleryBodyComponent.prototype.reload = function () {
        var maxHeight = 0;
        var leftPos = 0;
        this.imgS.forEach(function (image) {
            if (image.clientHeight > maxHeight) {
                maxHeight = image.clientHeight;
            }
            image['style'].left = Math.round(leftPos) + 'px';
            leftPos += image.clientWidth;
        });
        this.containerHeight = maxHeight;
    };
    Object.defineProperty(GalleryBodyComponent.prototype, "translatePosition", {
        get: function () {
            if (!this.imgS) {
                return 0;
            }
            var result = this.imageContainer.nativeElement.clientWidth / 2;
            for (var i = 0; i < this.target.selectedImage; i++) {
                result -= this.imgS['' + i].clientWidth;
            }
            result -= this.imgS['' + this.target.selectedImage].clientWidth / 2;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryBodyComponent.prototype, "imageContainerStyle", {
        get: function () {
            return {
                height: this.containerHeight + 'px',
                transform: 'translateX(' + this.translatePosition + 'px)',
                transition: this.loadedCount === (this.target.images && this.target.images.length) ? 'transform 0.5s' : ''
            };
        },
        enumerable: true,
        configurable: true
    });
    GalleryBodyComponent.prototype.selectNext = function () {
        this.target.selectNext();
    };
    GalleryBodyComponent.prototype.selectPrevious = function () {
        this.target.selectPrevious();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"])
    ], GalleryBodyComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GalleryBodyComponent.prototype, "imageContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('swipeleft'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GalleryBodyComponent.prototype, "onSwipeLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('swiperight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GalleryBodyComponent.prototype, "onSwipeRight", null);
    GalleryBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-gallery-body',
            template: __webpack_require__(/*! ./gallery-body.component.html */ "./lib/ng-vcl/src/gallery/gallery-body.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], GalleryBodyComponent);
    return GalleryBodyComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-footer.component.html":
/*!**************************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclGalleryFooter vclAlignCentered\">\n  {{ target.selectedImage + 1 }}&nbsp;/&nbsp;{{ target.images ? target.images.length : 0 }}\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-footer.component.ts":
/*!************************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-footer.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryFooterComponent", function() { return GalleryFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./lib/ng-vcl/src/gallery/gallery.component.ts");



var GalleryFooterComponent = /** @class */ (function () {
    function GalleryFooterComponent(parent) {
        if (this.target == null) {
            this.target = parent;
        }
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"])
    ], GalleryFooterComponent.prototype, "target", void 0);
    GalleryFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-gallery-footer',
            template: __webpack_require__(/*! ./gallery-footer.component.html */ "./lib/ng-vcl/src/gallery/gallery-footer.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]])
    ], GalleryFooterComponent);
    return GalleryFooterComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-image.component.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-image.component.ts ***!
  \***********************************************************/
/*! exports provided: GalleryImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageComponent", function() { return GalleryImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent() {
        this.thumbnail = '';
        this.alt = '';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryImageComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryImageComponent.prototype, "thumbnail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryImageComponent.prototype, "alt", void 0);
    GalleryImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-gallery-image',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        })
    ], GalleryImageComponent);
    return GalleryImageComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-thumbnails.component.html":
/*!******************************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-thumbnails.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclGalleryThumbs vclLayoutHorizontal vclLayoutCenterJustified\" touch-action=\"pan-y\">\n  <div *ngFor=\"let image of target.images; let i = index\" class=\"vclGalleryThumbWrapper\" [ngClass]=\"{'vclSelected': i == target.selectedImage}\" (click)=\"target.selectImage(i)\">\n    <img class=\"vclGalleryThumb\" [src]=\"image.thumbnail || image.image\" [alt]=\"image.alt\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery-thumbnails.component.ts":
/*!****************************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery-thumbnails.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryThumbnailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryThumbnailsComponent", function() { return GalleryThumbnailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./lib/ng-vcl/src/gallery/gallery.component.ts");



var GalleryThumbnailsComponent = /** @class */ (function () {
    function GalleryThumbnailsComponent(parent) {
        if (this.target == null) {
            this.target = parent;
        }
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryThumbnailsComponent.prototype, "galleryTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"])
    ], GalleryThumbnailsComponent.prototype, "target", void 0);
    GalleryThumbnailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-gallery-thumbnails',
            template: __webpack_require__(/*! ./gallery-thumbnails.component.html */ "./lib/ng-vcl/src/gallery/gallery-thumbnails.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]])
    ], GalleryThumbnailsComponent);
    return GalleryThumbnailsComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery.component.html":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclGallery\" touch-action=\"pan-y\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/gallery/gallery.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/gallery/gallery.component.ts ***!
  \*****************************************************/
/*! exports provided: GALLERY_ANIMATIONS, ImageChange, GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERY_ANIMATIONS", function() { return GALLERY_ANIMATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageChange", function() { return ImageChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-image.component */ "./lib/ng-vcl/src/gallery/gallery-image.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var GALLERY_ANIMATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ng-vcl/ng-vcl#gallery_animations');
var ImageChange;
(function (ImageChange) {
    ImageChange[ImageChange["PREVIOUS"] = 0] = "PREVIOUS";
    ImageChange[ImageChange["NEXT"] = 1] = "NEXT";
})(ImageChange || (ImageChange = {}));
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(builder, animations) {
        this.builder = builder;
        this.animations = animations;
        this.selectedImage = 0;
        this.wrap = false;
    }
    GalleryComponent.prototype.ngAfterViewInit = function () {
        if (this.animations) {
            if (this.animations.middleRefade) {
                this.middleRefadeAnimationFactory = this.builder.build(this.animations.middleRefade);
            }
            if (this.animations.nextToMiddle) {
                this.nextToMiddleAnimationFactory = this.builder.build(this.animations.nextToMiddle);
            }
            if (this.animations.previousToMiddle) {
                this.previousToMiddleAnimationFactory = this.builder.build(this.animations.previousToMiddle);
            }
        }
    };
    GalleryComponent.prototype.ngAfterContentInit = function () {
        this.imageArray = this.images ? this.images.toArray() : [];
    };
    GalleryComponent.prototype.selectImage = function (index) {
        if (index !== undefined) {
            this.selectedImage = Math.max(0, Math.min(this.imageArray.length, index));
        }
    };
    GalleryComponent.prototype.nextImage = function () {
        var next = this.selectedImage + 1;
        if (!this.wrap) {
            next = Math.min(next, this.imageArray.length - 1);
        }
        if (next >= this.imageArray.length) {
            next = 0;
        }
        return next;
    };
    GalleryComponent.prototype.previousImage = function () {
        var previous = this.selectedImage - 1;
        if (!this.wrap) {
            previous = Math.max(previous, 0);
        }
        if (previous < 0) {
            previous = this.imageArray.length - 1;
        }
        return previous;
    };
    GalleryComponent.prototype.selectNext = function () {
        this.selectedImage = this.nextImage();
    };
    GalleryComponent.prototype.selectPrevious = function () {
        this.selectedImage = this.previousImage();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryComponent.prototype, "selectedImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryComponent.prototype, "wrap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_gallery_image_component__WEBPACK_IMPORTED_MODULE_2__["GalleryImageComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./lib/ng-vcl/src/gallery/gallery.component.html"),
            host: {
                '[attr.role]': '"gallery"',
            },
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(GALLERY_ANIMATIONS)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_3__["AnimationBuilder"], Object])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/gallery/index.ts":
/*!*****************************************!*\
  !*** ./lib/ng-vcl/src/gallery/index.ts ***!
  \*****************************************/
/*! exports provided: GALLERY_ANIMATIONS, VCLGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLGalleryModule", function() { return VCLGalleryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.component */ "./lib/ng-vcl/src/gallery/gallery.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GALLERY_ANIMATIONS", function() { return _gallery_component__WEBPACK_IMPORTED_MODULE_3__["GALLERY_ANIMATIONS"]; });

/* harmony import */ var _gallery_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-image.component */ "./lib/ng-vcl/src/gallery/gallery-image.component.ts");
/* harmony import */ var _gallery_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery-body.component */ "./lib/ng-vcl/src/gallery/gallery-body.component.ts");
/* harmony import */ var _gallery_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery-footer.component */ "./lib/ng-vcl/src/gallery/gallery-footer.component.ts");
/* harmony import */ var _gallery_thumbnails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery-thumbnails.component */ "./lib/ng-vcl/src/gallery/gallery-thumbnails.component.ts");









var VCLGalleryModule = /** @class */ (function () {
    function VCLGalleryModule() {
    }
    VCLGalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _gallery_image_component__WEBPACK_IMPORTED_MODULE_4__["GalleryImageComponent"], _gallery_body_component__WEBPACK_IMPORTED_MODULE_5__["GalleryBodyComponent"], _gallery_footer_component__WEBPACK_IMPORTED_MODULE_6__["GalleryFooterComponent"], _gallery_thumbnails_component__WEBPACK_IMPORTED_MODULE_7__["GalleryThumbnailsComponent"]],
            declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _gallery_image_component__WEBPACK_IMPORTED_MODULE_4__["GalleryImageComponent"], _gallery_body_component__WEBPACK_IMPORTED_MODULE_5__["GalleryBodyComponent"], _gallery_footer_component__WEBPACK_IMPORTED_MODULE_6__["GalleryFooterComponent"], _gallery_thumbnails_component__WEBPACK_IMPORTED_MODULE_7__["GalleryThumbnailsComponent"]]
        })
    ], VCLGalleryModule);
    return VCLGalleryModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/icogram/icogram.component.html":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/icogram/icogram.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icon *ngIf=\"prepIcon\" [icon]=\"prepIcon\">\n  <ng-content select=\"[prepIcon]\"></ng-content>\n</vcl-icon>\n<span class=\"vclText\"><ng-content></ng-content></span>\n<vcl-icon *ngIf=\"appIcon\" [icon]=\"appIcon\">\n  <ng-content select=\"[appIcon]\"></ng-content>\n</vcl-icon>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/icogram/icogram.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/icogram/icogram.component.ts ***!
  \*****************************************************/
/*! exports provided: IcogramComponent, IcogramLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcogramComponent", function() { return IcogramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcogramLinkComponent", function() { return IcogramLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IcogramComponent = /** @class */ (function () {
    function IcogramComponent() {
        this.clsIcogram = true;
        this.attrRole = true;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclIcogram'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IcogramComponent.prototype, "clsIcogram", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IcogramComponent.prototype, "attrRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IcogramComponent.prototype, "prepIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IcogramComponent.prototype, "appIcon", void 0);
    IcogramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-icogram',
            template: __webpack_require__(/*! ./icogram.component.html */ "./lib/ng-vcl/src/icogram/icogram.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], IcogramComponent);
    return IcogramComponent;
}());

var IcogramLinkComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IcogramLinkComponent, _super);
    function IcogramLinkComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clsContentLink = true;
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(IcogramLinkComponent.prototype, "styleCursor", {
        get: function () {
            return this.disabled ? 'not-allowed' : 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcogramLinkComponent.prototype, "attrHref", {
        get: function () {
            return this.disabled ? undefined : this.href;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclContentLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IcogramLinkComponent.prototype, "clsContentLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.title'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-label'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IcogramLinkComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IcogramLinkComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.cursor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IcogramLinkComponent.prototype, "styleCursor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IcogramLinkComponent.prototype, "href", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.href'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IcogramLinkComponent.prototype, "attrHref", null);
    IcogramLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a[vcl-icogram]',
            template: __webpack_require__(/*! ./icogram.component.html */ "./lib/ng-vcl/src/icogram/icogram.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], IcogramLinkComponent);
    return IcogramLinkComponent;
}(IcogramComponent));



/***/ }),

/***/ "./lib/ng-vcl/src/icogram/index.ts":
/*!*****************************************!*\
  !*** ./lib/ng-vcl/src/icogram/index.ts ***!
  \*****************************************/
/*! exports provided: IcogramComponent, IcogramLinkComponent, VCLIcogramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLIcogramModule", function() { return VCLIcogramModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _icogram_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icogram.component */ "./lib/ng-vcl/src/icogram/icogram.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcogramComponent", function() { return _icogram_component__WEBPACK_IMPORTED_MODULE_4__["IcogramComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcogramLinkComponent", function() { return _icogram_component__WEBPACK_IMPORTED_MODULE_4__["IcogramLinkComponent"]; });







var VCLIcogramModule = /** @class */ (function () {
    function VCLIcogramModule() {
    }
    VCLIcogramModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icon_index__WEBPACK_IMPORTED_MODULE_3__["VCLIconModule"]],
            exports: [_icogram_component__WEBPACK_IMPORTED_MODULE_4__["IcogramComponent"], _icogram_component__WEBPACK_IMPORTED_MODULE_4__["IcogramLinkComponent"]],
            declarations: [_icogram_component__WEBPACK_IMPORTED_MODULE_4__["IcogramComponent"], _icogram_component__WEBPACK_IMPORTED_MODULE_4__["IcogramLinkComponent"]],
            providers: [],
        })
    ], VCLIcogramModule);
    return VCLIcogramModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/icon/icon-resolver.service.ts":
/*!******************************************************!*\
  !*** ./lib/ng-vcl/src/icon/icon-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: IconResolverService, VCLIconResolverServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconResolverService", function() { return IconResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLIconResolverServiceBase", function() { return VCLIconResolverServiceBase; });
var IconResolverService = /** @class */ (function () {
    function IconResolverService() {
    }
    return IconResolverService;
}());

// The default icon resolver replaces icons prefixed with `vcl`. Usually you should provide only one default icon resolver in your app
var VCLIconResolverServiceBase = /** @class */ (function () {
    function VCLIconResolverServiceBase() {
        this.VCL_REGEX = /^vcl:([a-z0-9-_]+)$/;
    }
    VCLIconResolverServiceBase.prototype.resolve = function (icon) {
        var result = this.VCL_REGEX.exec(icon);
        if (result) {
            var s = result[0], alias = result[1];
            return this.lookup(alias) || undefined;
        }
        return undefined;
    };
    return VCLIconResolverServiceBase;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/icon/icon.component.ts":
/*!***********************************************!*\
  !*** ./lib/ng-vcl/src/icon/icon.component.ts ***!
  \***********************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.service */ "./lib/ng-vcl/src/icon/icon.service.ts");




var IconComponent = /** @class */ (function () {
    function IconComponent(ngClass, iconService) {
        this.ngClass = ngClass;
        this.iconService = iconService;
        this.vclIcon = true;
    }
    Object.defineProperty(IconComponent.prototype, "attrRole", {
        get: function () {
            return this.role || 'img';
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.prototype.ngOnChanges = function (changes) {
        if (changes.icon) {
            var icon = changes.icon.currentValue;
            var fontIconClass = void 0;
            if (!icon) {
                fontIconClass = [];
            }
            else {
                fontIconClass = this.iconService.resolve(icon);
            }
            this.ngClass.ngClass = fontIconClass;
            this.ngClass.ngDoCheck();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IconComponent.prototype, "role", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IconComponent.prototype, "vclIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconComponent.prototype, "attrRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IconComponent.prototype, "icon", void 0);
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-icon',
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
            template: '<ng-content></ng-content>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"],
            _icon_service__WEBPACK_IMPORTED_MODULE_3__["IconService"]])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/icon/icon.service.ts":
/*!*********************************************!*\
  !*** ./lib/ng-vcl/src/icon/icon.service.ts ***!
  \*********************************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-resolver.service */ "./lib/ng-vcl/src/icon/icon-resolver.service.ts");



var IconService = /** @class */ (function () {
    function IconService(iconResolvers) {
        if (iconResolvers) {
            this.iconResolvers = iconResolvers.sort(function (ir1, ir2) { return ir1.priority - ir2.priority; });
        }
        else {
            this.iconResolvers = [];
        }
    }
    IconService.prototype.resolve = function (icon) {
        // Resolve first match
        for (var _i = 0, _a = this.iconResolvers; _i < _a.length; _i++) {
            var resolver = _a[_i];
            var result = resolver.resolve(icon);
            if (result !== undefined) {
                return result;
            }
        }
        return icon;
    };
    IconService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_icon_resolver_service__WEBPACK_IMPORTED_MODULE_2__["IconResolverService"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], IconService);
    return IconService;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/icon/index.ts":
/*!**************************************!*\
  !*** ./lib/ng-vcl/src/icon/index.ts ***!
  \**************************************/
/*! exports provided: IconComponent, VCLIconResolverServiceBase, IconResolverService, IconService, VCLIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLIconModule", function() { return VCLIconModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.component */ "./lib/ng-vcl/src/icon/icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]; });

/* harmony import */ var _icon_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-resolver.service */ "./lib/ng-vcl/src/icon/icon-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIconResolverServiceBase", function() { return _icon_resolver_service__WEBPACK_IMPORTED_MODULE_4__["VCLIconResolverServiceBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconResolverService", function() { return _icon_resolver_service__WEBPACK_IMPORTED_MODULE_4__["IconResolverService"]; });

/* harmony import */ var _icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.service */ "./lib/ng-vcl/src/icon/icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return _icon_service__WEBPACK_IMPORTED_MODULE_5__["IconService"]; });








var VCLIconModule = /** @class */ (function () {
    function VCLIconModule() {
    }
    VCLIconModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]],
            declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]],
            providers: [_icon_service__WEBPACK_IMPORTED_MODULE_5__["IconService"]]
        })
    ], VCLIconModule);
    return VCLIconModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/index.ts":
/*!*********************************!*\
  !*** ./lib/ng-vcl/src/index.ts ***!
  \*********************************/
/*! exports provided: ObservableComponent, defineMetadata, getMetadata, InputDirective, VCLInputModule, VCLFileInputModule, VCLTextareaModule, VCLFlipSwitchModule, FlipSwitchComponent, IconComponent, VCLIconResolverServiceBase, IconResolverService, IconService, VCLIconModule, FontAwesomeIconResolverService, FontAwesomeVCLIconResolverService, VCLFontAwesomeModule, MaterialDesignIconResolverService, MaterialDesignVCLIconResolverServiceBase, VCLMaterialDesignModule, LayerRefComponent, ComponentLayerRef, LayerFactory, LayerRef, VCLLayerModule, MetalistItemComponent, MetalistComponent, VCLMetalistModule, DropdownOptionComponent, DropdownComponent, DROPDOWN_ANIMATIONS, VCLDropdownModule, SelectComponent, SelectOptionDirective, DropDirection, VCLSelectModule, IcogramComponent, IcogramLinkComponent, VCLIcogramModule, ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, BUTTON_OBSERVER_TOKEN, VCLButtonModule, ButtonGroupComponent, VCLButtonGroupModule, VCLTabNavModule, NavigationComponent, NavigationItemDirective, VCLNavigationModule, PopoverComponent, VCLPopoverModule, VCLProgressBarModule, RadioButtonComponent, RadioGroupComponent, VCLRadioButtonModule, CheckboxComponent, VCLCheckboxModule, VCLOffClickModule, DatePickerComponent, TimePickerComponent, VCLDatePickerModule, FormControlLabelComponent, FORM_CONTROL_LABEL_MEMBER_TOKEN, VCLFormControlLabelModule, TemplateWormhole, ComponentWormhole, Wormhole, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost, VCLWormholeModule, MonthPickerComponent, VCLMonthPickerModule, VCLLabelModule, TokenComponent, TokenInputContainerComponent, TokenInputDirective, TokenListComponent, VCLTokenModule, SliderComponent, VCLSliderModule, VCLInputControlGroupModule, AlertService, AlertType, AlertInput, AlertAlignment, VCLAlertModule, BusyIndicatorCoverComponent, BusyIndicatorComponent, VCLBusyIndicatorModule, TooltipComponent, AnimationState, Placement, VCLTooltipModule, VCLTableModule, PasswordInputComponent, PasswordInputDirective, VCLPasswordInputModule, VCLZoomBoxModule, VCLNotificationModule, GALLERY_ANIMATIONS, VCLGalleryModule, VCLBadgeModule, VCLEmbeddedInputGroupModule, AutocompleteComponent, AutocompleteItemComponent, AutocompleteSeperatorComponent, AutocompleteHeaderComponent, AutocompleteInputDirective, VCLAutocompleteModule, TourService, TourOptions, TourComponent, VCLTourModule, VCLRatingModule, notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType, NotificationType, FlexAlign, TextAlign, IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./lib/ng-vcl/src/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ObservableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineMetadata", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["defineMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["InputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLInputModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFileInputModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLFileInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTextareaModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLTextareaModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFlipSwitchModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLFlipSwitchModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipSwitchComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FlipSwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIconResolverServiceBase", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLIconResolverServiceBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconResolverService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IconService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIconModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLIconModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIconResolverService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeVCLIconResolverService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeVCLIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFontAwesomeModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLFontAwesomeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignIconResolverService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MaterialDesignIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignVCLIconResolverServiceBase", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MaterialDesignVCLIconResolverServiceBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLMaterialDesignModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLMaterialDesignModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRefComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LayerRefComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLayerRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLayerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LayerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LayerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLLayerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLLayerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetalistItemComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MetalistItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetalistComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MetalistComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLMetalistModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLMetalistModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownOptionComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DropdownOptionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_ANIMATIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DROPDOWN_ANIMATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLDropdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOptionDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SelectOptionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDirection", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DropDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLSelectModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLSelectModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcogramComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IcogramComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcogramLinkComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IcogramLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIcogramModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLIcogramModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIcogramComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonIcogramComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonIconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OBSERVER_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BUTTON_OBSERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLButtonModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLButtonGroupModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLButtonGroupModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTabNavModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLTabNavModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NavigationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationItemDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NavigationItemDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLNavigationModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLNavigationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLPopoverModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLPopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLProgressBarModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLProgressBarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RadioGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLRadioButtonModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLRadioButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CheckboxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLCheckboxModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLOffClickModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLOffClickModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLDatePickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLDatePickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControlLabelComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FormControlLabelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_LABEL_MEMBER_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FORM_CONTROL_LABEL_MEMBER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFormControlLabelModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLFormControlLabelModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateWormhole", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TemplateWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentWormhole", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wormhole", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Wormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WormholeDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["WormholeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomComponentWormhole", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DomComponentWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomTemplateWormhole", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DomTemplateWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WormholeHost", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["WormholeHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomWormholeHost", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DomWormholeHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLWormholeModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLWormholeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLMonthPickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLMonthPickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLLabelModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLLabelModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TokenComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInputContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TokenInputContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TokenInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TokenListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTokenModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLTokenModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SliderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLSliderModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLSliderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLInputControlGroupModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLInputControlGroupModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertInput", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertAlignment", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLAlertModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLAlertModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorCoverComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BusyIndicatorCoverComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BusyIndicatorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLBusyIndicatorModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLBusyIndicatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AnimationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Placement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTooltipModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTableModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLTableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PasswordInputComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PasswordInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLPasswordInputModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLPasswordInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLZoomBoxModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLZoomBoxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLNotificationModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLNotificationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GALLERY_ANIMATIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["GALLERY_ANIMATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLGalleryModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLGalleryModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLBadgeModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLBadgeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLEmbeddedInputGroupModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLEmbeddedInputGroupModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutocompleteComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteItemComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutocompleteItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteSeperatorComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutocompleteSeperatorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteHeaderComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutocompleteHeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutocompleteInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLAutocompleteModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLAutocompleteModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TourService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TourOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TourComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTourModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLTourModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLRatingModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VCLRatingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationTypeFromString", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["notificationTypeFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationIconFromType", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["notificationIconFromType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationStyleClassFromType", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["notificationStyleClassFromType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlign", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FlexAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TextAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IconType"]; });




/***/ }),

/***/ "./lib/ng-vcl/src/input-control-group/index.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/input-control-group/index.ts ***!
  \*****************************************************/
/*! exports provided: VCLInputControlGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLInputControlGroupModule", function() { return VCLInputControlGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_control_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-control-group.component */ "./lib/ng-vcl/src/input-control-group/input-control-group.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var VCLInputControlGroupModule = /** @class */ (function () {
    function VCLInputControlGroupModule() {
    }
    VCLInputControlGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_input_control_group_component__WEBPACK_IMPORTED_MODULE_2__["InputControlGroupComponent"]],
            declarations: [_input_control_group_component__WEBPACK_IMPORTED_MODULE_2__["InputControlGroupComponent"]],
            providers: [],
        })
    ], VCLInputControlGroupModule);
    return VCLInputControlGroupModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/input-control-group/input-control-group.component.html":
/*!*******************************************************************************!*\
  !*** ./lib/ng-vcl/src/input-control-group/input-control-group.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n\n<div *ngIf=\"type && label && label!==''\" class=\"vclFormControlHint\"\n  [class.vclError]=\"type=='error'\"\n  [class.vclWarning]=\"type=='warning'\"\n  [class.vclSuccess]=\"type=='success'\">\n  {{label}}\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/input-control-group/input-control-group.component.ts":
/*!*****************************************************************************!*\
  !*** ./lib/ng-vcl/src/input-control-group/input-control-group.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InputControlGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputControlGroupComponent", function() { return InputControlGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputControlGroupComponent = /** @class */ (function () {
    function InputControlGroupComponent() {
        this.inline = false;
    }
    Object.defineProperty(InputControlGroupComponent.prototype, "notInline", {
        get: function () {
            return !this.inline;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputControlGroupComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputControlGroupComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInputInlineControlGroup'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputControlGroupComponent.prototype, "inline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInputControlGroup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputControlGroupComponent.prototype, "notInline", null);
    InputControlGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-input-control-group, [vcl-input-control-group]',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./input-control-group.component.html */ "./lib/ng-vcl/src/input-control-group/input-control-group.component.html")
        })
    ], InputControlGroupComponent);
    return InputControlGroupComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/input/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/input/index.ts ***!
  \***************************************/
/*! exports provided: InputDirective, VCLInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLInputModule", function() { return VCLInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.directive */ "./lib/ng-vcl/src/input/input.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputDirective", function() { return _input_directive__WEBPACK_IMPORTED_MODULE_2__["InputDirective"]; });





var VCLInputModule = /** @class */ (function () {
    function VCLInputModule() {
    }
    VCLInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [_input_directive__WEBPACK_IMPORTED_MODULE_2__["InputDirective"]],
            declarations: [_input_directive__WEBPACK_IMPORTED_MODULE_2__["InputDirective"]],
            providers: [],
        })
    ], VCLInputModule);
    return VCLInputModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/input/input.directive.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/input/input.directive.ts ***!
  \*************************************************/
/*! exports provided: UNIQUE_ID, InputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIQUE_ID", function() { return UNIQUE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDirective", function() { return InputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_control_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control-label */ "./lib/ng-vcl/src/form-control-label/index.ts");



var UNIQUE_ID = 0;
var InputDirective = /** @class */ (function () {
    function InputDirective(elRef) {
        this.elRef = elRef;
        this.generatedId = 'vcl_input_' + UNIQUE_ID++;
        this._disabled = false;
        this.disabled = false;
        this.autoselect = false;
        this.classVclInput = true;
    }
    InputDirective_1 = InputDirective;
    Object.defineProperty(InputDirective.prototype, "elementId", {
        get: function () {
            return this.id || this.generatedId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled || this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    // Autoselect
    InputDirective.prototype.onFocus = function () {
        if (this.autoselect) {
            this.elRef.nativeElement.select();
        }
    };
    InputDirective.prototype.setDisabled = function (disabled) {
        this._disabled = disabled;
    };
    InputDirective.prototype.notifyFormControlLabelClick = function (event) {
        this.elRef.nativeElement.focus();
    };
    var InputDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputDirective.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputDirective.prototype, "elementId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputDirective.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputDirective.prototype, "autoselect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputDirective.prototype, "classVclInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputDirective.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputDirective.prototype, "attrDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InputDirective.prototype, "onFocus", null);
    InputDirective = InputDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[vclInput]',
            exportAs: 'vclInput',
            providers: [
                {
                    provide: _form_control_label__WEBPACK_IMPORTED_MODULE_2__["FORM_CONTROL_LABEL_MEMBER_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputDirective_1; })
                },
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], InputDirective);
    return InputDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/label/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/label/index.ts ***!
  \***************************************/
/*! exports provided: VCLLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLLabelModule", function() { return VCLLabelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _label_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label.directive */ "./lib/ng-vcl/src/label/label.directive.ts");




var VCLLabelModule = /** @class */ (function () {
    function VCLLabelModule() {
    }
    VCLLabelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_label_directive__WEBPACK_IMPORTED_MODULE_3__["LabelDirective"]],
            declarations: [_label_directive__WEBPACK_IMPORTED_MODULE_3__["LabelDirective"]],
            providers: [],
        })
    ], VCLLabelModule);
    return VCLLabelModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/label/label.directive.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/label/label.directive.ts ***!
  \*************************************************/
/*! exports provided: LabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDirective", function() { return LabelDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelDirective = /** @class */ (function () {
    function LabelDirective() {
        this.classVCLLabel = true;
    }
    Object.defineProperty(LabelDirective.prototype, "vclPrimary", {
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelDirective.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelDirective.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelDirective.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelDirective.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclLabel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LabelDirective.prototype, "classVCLLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LabelDirective.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclPrimary'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelDirective.prototype, "vclPrimary", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclSuccess'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelDirective.prototype, "vclSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelDirective.prototype, "vclInfo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclWarning'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelDirective.prototype, "vclWarning", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclError'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelDirective.prototype, "vclError", null);
    LabelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'vcl-label'
        })
    ], LabelDirective);
    return LabelDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/layer/component-layer-ref.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/layer/component-layer-ref.ts ***!
  \*****************************************************/
/*! exports provided: ComponentLayerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLayerRef", function() { return ComponentLayerRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _layer_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layer-ref */ "./lib/ng-vcl/src/layer/layer-ref.ts");







var ComponentLayerRef = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComponentLayerRef, _super);
    function ComponentLayerRef(componentType, zone, injector, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this) || this;
        _this.componentType = componentType;
        _this.zone = zone;
        _this.injector = injector;
        _this.opts = opts;
        _this._afterClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.afterClose = _this._afterClose.asObservable();
        _this.overlay = injector.get(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]);
        return _this;
    }
    Object.defineProperty(ComponentLayerRef.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentLayerRef.prototype, "componentRef", {
        get: function () {
            return this.attachmentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLayerRef.prototype.open = function (data, opts) {
        if (this.isAttached) {
            this.close();
        }
        // Merge defaults
        opts = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.opts, opts);
        this._data = data;
        var config = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayConfig"]({
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'vclLayerCover',
            panelClass: ['vclLayerBox', 'vclLayerBoxFix'],
            positionStrategy: opts.position || this.opts.position || this.overlay.position()
                .global()
                .centerHorizontally()
                .centerVertically(),
        });
        return this.attach(config);
    };
    ComponentLayerRef.prototype.close = function (result) {
        return _super.prototype.detach.call(this, result);
    };
    ComponentLayerRef.prototype.getInjector = function () {
        return this.injector;
    };
    ComponentLayerRef.prototype.createPortal = function () {
        var injectionTokens = new WeakMap();
        injectionTokens.set(ComponentLayerRef, this);
        var portalInjector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](this.injector, injectionTokens);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this.componentType, this.opts.viewContainerRef, portalInjector);
    };
    ComponentLayerRef.prototype.afterAttached = function (overlayRef) {
        var _this = this;
        this.layerOpenedSub = this.zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.opts.modal ? rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"] : overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
                return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"];
            })), _this.opts.modal ? rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"] : overlayRef.backdropClick());
        })).subscribe(function (result) {
            _super.prototype.detach.call(_this);
        });
    };
    ComponentLayerRef.prototype.afterDetached = function (result, overlayRef) {
        this.layerOpenedSub && this.layerOpenedSub.unsubscribe();
        this._afterClose.next(result);
    };
    return ComponentLayerRef;
}(_layer_ref__WEBPACK_IMPORTED_MODULE_6__["LayerRef"]));



/***/ }),

/***/ "./lib/ng-vcl/src/layer/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/layer/index.ts ***!
  \***************************************/
/*! exports provided: LayerRefComponent, ComponentLayerRef, LayerFactory, LayerRef, VCLLayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLLayerModule", function() { return VCLLayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _layer_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layer-ref */ "./lib/ng-vcl/src/layer/layer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRef", function() { return _layer_ref__WEBPACK_IMPORTED_MODULE_6__["LayerRef"]; });

/* harmony import */ var _layer_ref_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layer-ref.component */ "./lib/ng-vcl/src/layer/layer-ref.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRefComponent", function() { return _layer_ref_component__WEBPACK_IMPORTED_MODULE_7__["LayerRefComponent"]; });

/* harmony import */ var _component_layer_ref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-layer-ref */ "./lib/ng-vcl/src/layer/component-layer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLayerRef", function() { return _component_layer_ref__WEBPACK_IMPORTED_MODULE_8__["ComponentLayerRef"]; });

/* harmony import */ var _layer_factory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layer-factory.service */ "./lib/ng-vcl/src/layer/layer-factory.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerFactory", function() { return _layer_factory_service__WEBPACK_IMPORTED_MODULE_9__["LayerFactory"]; });












var VCLLayerModule = /** @class */ (function () {
    function VCLLayerModule() {
    }
    VCLLayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]],
            exports: [_layer_ref_component__WEBPACK_IMPORTED_MODULE_7__["LayerRefComponent"]],
            declarations: [_layer_ref_component__WEBPACK_IMPORTED_MODULE_7__["LayerRefComponent"]],
            providers: [_layer_factory_service__WEBPACK_IMPORTED_MODULE_9__["LayerFactory"]],
        })
    ], VCLLayerModule);
    return VCLLayerModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/layer/layer-factory.service.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/layer/layer-factory.service.ts ***!
  \*******************************************************/
/*! exports provided: LayerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerFactory", function() { return LayerFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_layer_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-layer-ref */ "./lib/ng-vcl/src/layer/component-layer-ref.ts");



var LayerFactory = /** @class */ (function () {
    function LayerFactory(injector, zone) {
        this.injector = injector;
        this.zone = zone;
    }
    LayerFactory.prototype.create = function (component, opts) {
        if (opts === void 0) { opts = {}; }
        var cls = opts.useClass || _component_layer_ref__WEBPACK_IMPORTED_MODULE_2__["ComponentLayerRef"];
        return new cls(component, this.zone, this.injector, opts);
    };
    LayerFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LayerFactory);
    return LayerFactory;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/layer/layer-ref.component.html":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/layer/layer-ref.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <div class=\"vclLayerBox\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/layer/layer-ref.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/layer/layer-ref.component.ts ***!
  \*****************************************************/
/*! exports provided: LayerRefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerRefComponent", function() { return LayerRefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _layer_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layer-ref */ "./lib/ng-vcl/src/layer/layer-ref.ts");








var LayerRefComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerRefComponent, _super);
    function LayerRefComponent(viewContainerRef, overlay, injector, zone) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.overlay = overlay;
        _this.injector = injector;
        _this.zone = zone;
        _this.modal = false;
        _this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(LayerRefComponent.prototype, "visible", {
        get: function () {
            return this.isAttached;
        },
        enumerable: true,
        configurable: true
    });
    LayerRefComponent.prototype.toggle = function () {
        if (this.visible) {
            this.close();
        }
        else {
            this.open();
        }
    };
    LayerRefComponent.prototype.open = function () {
        var config = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'vclLayerCover',
            // panelClass: 'vclLayerBox',
            positionStrategy: this.position ||
                this.overlay.position()
                    .global()
                    .centerHorizontally()
                    .centerVertically(),
        });
        return _super.prototype.attach.call(this, config);
    };
    LayerRefComponent.prototype.close = function (result) {
        return _super.prototype.detach.call(this, result);
    };
    LayerRefComponent.prototype.getInjector = function () {
        return this.injector;
    };
    LayerRefComponent.prototype.createPortal = function () {
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this.template, this.viewContainerRef);
    };
    LayerRefComponent.prototype.afterDetached = function (result, overlayRef) {
        this.layerOpenedSub && this.layerOpenedSub.unsubscribe();
        this.afterClose.emit(result);
    };
    LayerRefComponent.prototype.afterAttached = function (overlayRef) {
        var _this = this;
        this.layerOpenedSub = this.zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.modal ? rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"] : overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
                return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"];
            })), _this.modal ? rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"] : overlayRef.backdropClick());
        })).subscribe(function (result) {
            _this.close();
        });
    };
    LayerRefComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayerRefComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayerRefComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayerRefComponent.prototype, "afterClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], LayerRefComponent.prototype, "template", void 0);
    LayerRefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'vcl-layer',
            template: __webpack_require__(/*! ./layer-ref.component.html */ "./lib/ng-vcl/src/layer/layer-ref.component.html"),
            exportAs: 'vclLayer',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], LayerRefComponent);
    return LayerRefComponent;
}(_layer_ref__WEBPACK_IMPORTED_MODULE_7__["LayerRef"]));



/***/ }),

/***/ "./lib/ng-vcl/src/layer/layer-ref.ts":
/*!*******************************************!*\
  !*** ./lib/ng-vcl/src/layer/layer-ref.ts ***!
  \*******************************************/
/*! exports provided: LayerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerRef", function() { return LayerRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");



var LayerRef = /** @class */ (function () {
    function LayerRef() {
        this._detachEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isLayerDestroyed = false;
    }
    Object.defineProperty(LayerRef.prototype, "isAttached", {
        get: function () {
            return this.overlayRef && this.overlayRef.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    LayerRef.prototype.attach = function (config) {
        var _this = this;
        if (!this.overlayRef) {
            var injector = this.getInjector();
            var overlay = injector.get(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]);
            this.overlayRef = overlay.create(config);
            this.portal = this.createPortal();
            this.isLayerDestroyed = false;
        }
        if (!this.isAttached) {
            this.attachmentRef = this.overlayRef.attach(this.portal);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.overlayRef ? this.overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () { return _this.isAttached; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return undefined; })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined), this._detachEmitter.asObservable()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (result) {
                _this.overlayRef.detach();
                // this._closingSub.unsubscribe();
                _this.afterDetached(result, _this.overlayRef);
            });
            this.afterAttached(this.overlayRef);
        }
    };
    LayerRef.prototype.detach = function (result) {
        if (!this.isAttached) {
            return;
        }
        this._detachEmitter.next(result);
    };
    LayerRef.prototype.updatePosition = function () {
        this.overlayRef.updatePosition();
    };
    LayerRef.prototype.destroy = function () {
        this.isLayerDestroyed = true;
        if (this.overlayRef) {
            this.detach();
            this.overlayRef.dispose();
            this.overlayRef = undefined;
            this.attachmentRef = undefined;
        }
    };
    LayerRef.prototype.createLayerOffClickStream = function (document, exclude) {
        var _this = this;
        if (!document) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'touchend'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
            var clickTarget = event.target;
            var isOffClick = _this.isAttached &&
                exclude.every(function (element) { return clickTarget !== element; }) &&
                (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget));
            return isOffClick;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return undefined; }));
    };
    return LayerRef;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/material-design-icons/alias-map.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/material-design-icons/alias-map.ts ***!
  \***********************************************************/
/*! exports provided: ALIAS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIAS_MAP", function() { return ALIAS_MAP; });
var ALIAS_MAP = {
    'close': 'mdi mdi-close',
    'busy': 'mdi mdi-loading mdi-spin',
    'box': 'mdi mdi-checkbox-blank-outline',
    'box-checked': 'mdi mdi-check-box-outline',
    'circle': 'mdi mdi-radiobox-blank',
    'circle-checked': 'mdi mdi-radiobox-marked',
    'question': 'mdi mdi-help',
    'info': 'mdi mdi-information',
    'success': 'mdi mdi-check',
    'warning': 'mdi mdi-alert',
    'error': 'mdi mdi-alert-circle'
};


/***/ }),

/***/ "./lib/ng-vcl/src/material-design-icons/icon-resolver.service.ts":
/*!***********************************************************************!*\
  !*** ./lib/ng-vcl/src/material-design-icons/icon-resolver.service.ts ***!
  \***********************************************************************/
/*! exports provided: MaterialDesignIconResolverService, MaterialDesignVCLIconResolverServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignIconResolverService", function() { return MaterialDesignIconResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignVCLIconResolverServiceBase", function() { return MaterialDesignVCLIconResolverServiceBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _alias_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alias-map */ "./lib/ng-vcl/src/material-design-icons/alias-map.ts");




// The mdi name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `mdi:user` into `mdi mdi-user`
var MaterialDesignIconResolverService = /** @class */ (function () {
    function MaterialDesignIconResolverService() {
        this.priority = 55;
        this.MDI_REGEX = /^(mdi):([a-z0-9-_]+)$/;
    }
    MaterialDesignIconResolverService.prototype.resolve = function (icon) {
        var result = this.MDI_REGEX.exec(icon);
        if (result) {
            var s = result[0], prefix = result[1], value = result[2];
            return prefix + " mdi-" + value;
        }
        return undefined;
    };
    MaterialDesignIconResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MaterialDesignIconResolverService);
    return MaterialDesignIconResolverService;
}());

var MaterialDesignVCLIconResolverServiceBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MaterialDesignVCLIconResolverServiceBase, _super);
    function MaterialDesignVCLIconResolverServiceBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.priority = 15;
        return _this;
    }
    MaterialDesignVCLIconResolverServiceBase.prototype.lookup = function (alias) {
        return _alias_map__WEBPACK_IMPORTED_MODULE_3__["ALIAS_MAP"][alias];
    };
    return MaterialDesignVCLIconResolverServiceBase;
}(_icon__WEBPACK_IMPORTED_MODULE_2__["VCLIconResolverServiceBase"]));



/***/ }),

/***/ "./lib/ng-vcl/src/material-design-icons/index.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/material-design-icons/index.ts ***!
  \*******************************************************/
/*! exports provided: MaterialDesignIconResolverService, MaterialDesignVCLIconResolverServiceBase, VCLMaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLMaterialDesignModule", function() { return VCLMaterialDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-resolver.service */ "./lib/ng-vcl/src/material-design-icons/icon-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignIconResolverService", function() { return _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignVCLIconResolverServiceBase", function() { return _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignVCLIconResolverServiceBase"]; });






var VCLMaterialDesignModule = /** @class */ (function () {
    function VCLMaterialDesignModule() {
    }
    VCLMaterialDesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignIconResolverService"],
                _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignVCLIconResolverServiceBase"],
                {
                    provide: _icon__WEBPACK_IMPORTED_MODULE_2__["IconResolverService"],
                    useExisting: _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignIconResolverService"],
                    multi: true
                }, {
                    provide: _icon__WEBPACK_IMPORTED_MODULE_2__["IconResolverService"],
                    useExisting: _icon_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignVCLIconResolverServiceBase"],
                    multi: true
                }
            ]
        })
    ], VCLMaterialDesignModule);
    return VCLMaterialDesignModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/metalist/index.ts":
/*!******************************************!*\
  !*** ./lib/ng-vcl/src/metalist/index.ts ***!
  \******************************************/
/*! exports provided: MetalistItemComponent, MetalistComponent, VCLMetalistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLMetalistModule", function() { return VCLMetalistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wormhole_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wormhole/index */ "./lib/ng-vcl/src/wormhole/index.ts");
/* harmony import */ var _metalist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metalist.component */ "./lib/ng-vcl/src/metalist/metalist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetalistItemComponent", function() { return _metalist_component__WEBPACK_IMPORTED_MODULE_4__["MetalistItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetalistComponent", function() { return _metalist_component__WEBPACK_IMPORTED_MODULE_4__["MetalistComponent"]; });







var VCLMetalistModule = /** @class */ (function () {
    function VCLMetalistModule() {
    }
    VCLMetalistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _wormhole_index__WEBPACK_IMPORTED_MODULE_3__["VCLWormholeModule"]],
            exports: [_metalist_component__WEBPACK_IMPORTED_MODULE_4__["MetalistComponent"], _metalist_component__WEBPACK_IMPORTED_MODULE_4__["MetalistItemComponent"]],
            declarations: [_metalist_component__WEBPACK_IMPORTED_MODULE_4__["MetalistComponent"], _metalist_component__WEBPACK_IMPORTED_MODULE_4__["MetalistItemComponent"]],
            providers: [],
        })
    ], VCLMetalistModule);
    return VCLMetalistModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/metalist/metalist.component.html":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/metalist/metalist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/metalist/metalist.component.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/metalist/metalist.component.ts ***!
  \*******************************************************/
/*! exports provided: MetalistItemComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, MetalistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetalistItemComponent", function() { return MetalistItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetalistComponent", function() { return MetalistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MetalistItemComponent = /** @class */ (function () {
    function MetalistItemComponent(metalist) {
        this.metalist = metalist;
        this.disabled = false;
    }
    Object.defineProperty(MetalistItemComponent.prototype, "marked", {
        get: function () {
            return this.metalist.isMarked(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetalistItemComponent.prototype, "selected", {
        get: function () {
            return this.metalist.isSelected(this);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MetalistItemComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MetalistItemComponent.prototype, "metadata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MetalistItemComponent.prototype, "disabled", void 0);
    MetalistItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[vcl-metalist-item]',
            template: '<ng-content></ng-content>',
            exportAs: 'meta'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MetalistComponent; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MetalistItemComponent);
    return MetalistItemComponent;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MetalistComponent; }),
    multi: true
};
var MetalistComponent = /** @class */ (function () {
    function MetalistComponent(cdRef) {
        this.cdRef = cdRef;
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
    }
    Object.defineProperty(MetalistComponent.prototype, "itemsArray", {
        get: function () {
            return this.items ? this.items.toArray() : [];
        },
        enumerable: true,
        configurable: true
    });
    MetalistComponent.prototype.isMarked = function (item) {
        return this.markedItem === item;
    };
    MetalistComponent.prototype.isSelected = function (item) {
        var value = this.value;
        if (this.mode === 'multiple' && Array.isArray(value)) {
            return value.includes(item.value);
        }
        else {
            return item.value === value;
        }
    };
    Object.defineProperty(MetalistComponent.prototype, "selectedItem", {
        get: function () {
            return this.selectedItems[0] || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetalistComponent.prototype, "selectedItems", {
        get: function () {
            return this.itemsArray.filter(function (i) { return i.selected; });
        },
        enumerable: true,
        configurable: true
    });
    MetalistComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.itemsSub = this.items && this.items.changes.subscribe(function () {
            _this.itemsChange.emit();
        });
    };
    MetalistComponent.prototype.ngOnDestroy = function () {
        this.itemsSub && this.itemsSub.unsubscribe();
    };
    MetalistComponent.prototype.triggerChange = function () {
        this.itemsChange.emit();
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    MetalistComponent.prototype.select = function (item) {
        if (item === undefined) {
            return this.selectMarked();
        }
        if (typeof item === 'number') {
            item = this.itemsArray[item];
        }
        if (item instanceof MetalistItemComponent) {
            if (item.disabled) {
                return;
            }
            if (this.mode === 'multiple') {
                var selectedItems = this.itemsArray.filter(function (i) { return i.selected; });
                if (item.selected) {
                    var value_1 = item.value;
                    if (!Array.isArray(this.value)) {
                        this.value = [];
                    }
                    this.value = this.value.filter(function (v) { return v !== value_1; });
                }
                else {
                    // prevent overflow
                    var maxSelectableItems = typeof this.maxSelectableItems === 'number' ? this.maxSelectableItems : Infinity;
                    if (selectedItems.length < maxSelectableItems) {
                        if (!Array.isArray(this.value)) {
                            this.value = [];
                        }
                        this.value.push(item.value);
                    }
                }
            }
            else {
                this.value = item.value;
            }
            this.triggerChange();
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.deselect = function (item) {
        if (typeof item === 'number') {
            item = this.itemsArray[item];
        }
        if (item instanceof MetalistItemComponent) {
            var value_2 = item.value;
            if (this.mode === 'single' && this.value === value_2) {
                this.value = undefined;
                this.triggerChange();
            }
            else if (this.mode === 'multiple') {
                if (!Array.isArray(this.value)) {
                    this.value = [];
                }
                this.value = this.value.filter(function (v) { return v !== value_2; });
                this.triggerChange();
            }
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.determineMarkedIndex = function () {
        var idx = this.itemsArray.findIndex(function (item) { return item.marked; });
        return idx >= 0 ? idx : this.itemsArray.findIndex(function (metaItem) { return metaItem.selected; });
    };
    MetalistComponent.prototype.mark = function (item) {
        if (typeof item === 'number') {
            item = this.itemsArray[item];
        }
        if (item instanceof MetalistItemComponent) {
            this.markedItem = item;
            this.itemsChange.emit();
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.markNext = function () {
        var _this = this;
        var items = this.itemsArray;
        var newIdx = this.determineMarkedIndex() + 1;
        if (newIdx >= (items.length)) {
            newIdx = items.length - 1;
        }
        items.every(function (item, cidx) {
            var mark = cidx >= newIdx;
            if (!item.disabled && mark) {
                _this.markedItem = item;
                return false;
            }
            return true;
        });
        this.itemsChange.emit();
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.markPrev = function () {
        var _this = this;
        var items = this.itemsArray.reverse();
        var newIdx = this.determineMarkedIndex() - 1;
        if (newIdx <= 0 && items.length > 0) {
            newIdx = 0;
        }
        newIdx = (items.length - 1) - newIdx;
        items.every(function (item, cidx) {
            var mark = cidx >= newIdx;
            if (!item.disabled && mark) {
                _this.markedItem = item;
                return false;
            }
            return true;
        });
        this.itemsChange.emit();
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.selectMarked = function () {
        if (this.markedItem) {
            this.select(this.markedItem);
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.setValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    MetalistComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MetalistComponent.prototype.registerOnTouched = function (fn) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MetalistComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MetalistComponent.prototype, "maxSelectableItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MetalistComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MetalistComponent.prototype, "itemsChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(MetalistItemComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], MetalistComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MetalistComponent.prototype, "value", void 0);
    MetalistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-metalist, [vcl-metalist]',
            template: __webpack_require__(/*! ./metalist.component.html */ "./lib/ng-vcl/src/metalist/metalist.component.html"),
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MetalistComponent);
    return MetalistComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/month-picker/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/month-picker/index.ts ***!
  \**********************************************/
/*! exports provided: MonthPickerComponent, VCLMonthPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLMonthPickerModule", function() { return VCLMonthPickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _month_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./month-picker.component */ "./lib/ng-vcl/src/month-picker/month-picker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _month_picker_component__WEBPACK_IMPORTED_MODULE_4__["MonthPickerComponent"]; });







var VCLMonthPickerModule = /** @class */ (function () {
    function VCLMonthPickerModule() {
    }
    VCLMonthPickerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_index__WEBPACK_IMPORTED_MODULE_3__["VCLButtonModule"]],
            exports: [_month_picker_component__WEBPACK_IMPORTED_MODULE_4__["MonthPickerComponent"]],
            declarations: [_month_picker_component__WEBPACK_IMPORTED_MODULE_4__["MonthPickerComponent"]],
            providers: [],
        })
    ], VCLMonthPickerModule);
    return VCLMonthPickerModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/month-picker/month-picker.component.html":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/month-picker/month-picker.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclDatePicker\">\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput vclNoMargin\"\n    [attr.role]=\"'grid'\"\n    [attr.tabindex]=\"tabindex\"\n    [attr.aria-multiselectable]=\"maxSelectableMonths > 1\"\n    [attr.aria-expanded]=\"expanded\">\n\n    <div class=\"vclDGRow\">\n      <div class=\"vclToolbar vclLayoutHorizontal vclLayoutFlex vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n        <div class=\"vclLayoutHorizontal vclLayoutCenter\">\n          <button vcl-icon-button class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\n            type=\"button\"\n            [class.vclDisabled]=\"!prevYearAvailable\"\n            [icon]=\"prevYearBtnIcon\"\n            (click)=\"onPrevYearTap()\">\n          </button>\n\n          <span class=\"vclCalHeaderLabel\">{{ currentYear }}</span>\n\n          <button vcl-icon-button\n            type=\"button\"\n            class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\n            [class.vclDisabled]=\"!nextYearAvailable\"\n            [icon]=\"nextYearBtnIcon\"\n            (click)=\"onNextYearTap()\">\n          </button>\n        </div>\n\n        <div class=\"vclLayoutHorizontal vclLayoutFlex vclLayoutEndJustified\">\n          <button vcl-icon-button *ngIf=\"expandable\"\n            type=\"button\"\n            class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\n            [icon]=\"closeBtnIcon\"\n            (click)=\"onCloseBtnTap()\">\n          </button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"vclSeparator\"></div>\n\n    <ng-template ngFor let-iM [ngForOf]=\"months\" let-i=\"index\">\n      <div *ngIf=\"i % monthsPerRow === 0\" class=\"vclDGRow\" role=\"row\">\n        <div *ngFor=\"let jM of months.slice(i, (i + monthsPerRow > months.length ? months.length : i + monthsPerRow)); let j = index;\"\n          (click)=\"selectMonth(currentYear, i+j)\"\n          class=\"vclDGCell vclCalItem\"\n          [class.vclAvailable]=\"!useAvailableMonths || currentMeta[i+j].available\"\n          [class.vclUnavailable]=\"useAvailableMonths && !currentMeta[i+j].available\"\n          [class.vclToday]=\"isCurrentMonth(i+j)\"\n          [class.vclOtherMonth]=\"!isCurrentMonth(i+j)\"\n          [class.vclDisabled]=\"useAvailableMonths && !currentMeta[i+j].available\"\n          [class.vclSelected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\"\n          [style.background-color]=\"currentMeta[i+j].color\"\n          [style.order]=\"i+j\"\n          [attr.aria-selected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\"\n          [tabindex]=\"i+j\"\n          role=\"gridcell\">\n            <div class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel\">\n              {{months[i + j]}}\n            </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/month-picker/month-picker.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/month-picker/month-picker.component.ts ***!
  \***************************************************************/
/*! exports provided: MonthPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return MonthPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(ref) {
        this.ref = ref;
        this.tag = MonthPickerComponent_1.Tag;
        this.now = new Date();
        this.yearMeta = {};
        this.debug = false;
        this.expanded = true;
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentYear = this.now.getFullYear();
        this.currentYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prevYearBtnTap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextYearBtnTap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Customization
        this.tabindex = 0;
        this.monthsPerRow = 3;
        this.locales = 'en-US';
        this.dateOptions = { month: 'short' };
        this.expandable = false;
        this.prevYearAvailable = false;
        this.nextYearAvailable = false;
        this.useAvailableMonths = false;
        this.closeBtnIcon = 'fas:times';
        this.prevYearBtnIcon = 'fas:chevron-left';
        this.nextYearBtnIcon = 'fas:chevron-right';
        this.minSelectableMonths = 0;
        this.minYear = Number.MIN_SAFE_INTEGER;
        this.maxYear = Number.MAX_SAFE_INTEGER;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    MonthPickerComponent_1 = MonthPickerComponent;
    Object.defineProperty(MonthPickerComponent.prototype, "min", {
        set: function (value) {
            var tag = this.tag + ".min:";
            if (this.debug) {
                console.log(tag, 'value:', value);
            }
            if (!value) {
                return;
            }
            this.minValue = value;
            if (this.debug) {
                console.log(tag, 'this.maxValue:', this.maxValue);
            }
            if (this.debug) {
                console.log(tag, 'this.months:', this.months);
            }
            if (!this.maxValue || !this.months) {
                return;
            }
            this.setAvailableMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthPickerComponent.prototype, "max", {
        set: function (value) {
            var tag = this.tag + ".max:";
            if (this.debug) {
                console.log(tag, 'value:', value);
            }
            if (!value) {
                return;
            }
            this.maxValue = value;
            if (this.debug) {
                console.log(tag, 'this.minValue:', this.maxValue);
            }
            if (this.debug) {
                console.log(tag, 'this.months:', this.months);
            }
            if (!this.minValue || !this.months) {
                return;
            }
            this.setAvailableMonths();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.setAvailableMonths = function () {
        this.useAvailableMonths = true;
        this.removeAllAvailableMonths();
        this.addAvailableMonthRange();
    };
    MonthPickerComponent.prototype.onModelChange = function (value) {
        this.onChange && this.onChange(value);
    };
    MonthPickerComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectMonth(value.getFullYear(), value.getMonth());
            this.ref.markForCheck();
        }
    };
    MonthPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MonthPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    MonthPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tag = this.tag + ".ngOnInit()";
        // Create month labels.
        var date = new Date(this.now.getFullYear(), 0);
        this.months = Array(MonthPickerComponent_1.MonthCount).fill(0).map(function (_) {
            var month = date.toLocaleString(_this.locales, _this.dateOptions);
            date.setMonth(date.getMonth() + 1);
            return month;
        });
        if (!this.maxSelectableMonths) {
            this.maxSelectableMonths = this.colors && this.colors.length || 1;
        }
        this.availableColors = this.colors ? this.colors.map(function (color) { return true; }) : [];
        this.setYearMeta(this.currentYear);
        this.addAvailableMonthRange();
    };
    MonthPickerComponent.prototype.ngOnChanges = function (changes) {
        var tag = this.tag + ".ngOnChanges()";
        if (this.debug) {
            console.log(tag, 'changes:', changes);
        }
        if (changes.currentYear && !changes.currentYear.isFirstChange()) {
            this.setYearMeta(changes.currentYear.currentValue);
        }
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        var tag = this.tag + ".setYearMeta()";
        if (this.debug) {
            console.log(tag, 'year:', year);
        }
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (_) { return ({}); });
    };
    MonthPickerComponent.prototype.selectMonth = function (year, month) {
        if (!this.isMonthAvailable(year, month) || this.isMonthPreselected(year, month)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            if (this.getSelectedDates().length <= this.minSelectableMonths) {
                return;
            }
            return this.deselectMonth(year, month);
        }
        if (this.maxSelectableMonths === 1) {
            this.iterateMonthMetas(function (_year, _month, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        if (this.getSelectedDates().length < this.maxSelectableMonths) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(year, month);
            this.notifySelect(year + "." + month);
            this.onModelChange(new Date(year, month));
            if (this.maxSelectableMonths === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.preselectMonth = function (year, month, color) {
        var tag = this.tag + ".preselectMonth()";
        var debug = this.debug && false;
        if (debug) {
            console.log(tag, year + "." + month);
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            this.deselectMonth(year, month);
        }
        monthMeta.preselected = true;
        monthMeta.color = color;
        if (debug) {
            console.log(tag, 'monthMeta:', monthMeta);
        }
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.dePreselectMonth = function (year, month) {
        var tag = this.tag + ".dePreselectMonth()";
        var debug = this.debug && false;
        if (debug) {
            console.log(tag, year + "." + month);
        }
        if (!this.isMonthPreselected(year, month)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        monthMeta.preselected = false;
        delete monthMeta.color;
        if (debug) {
            console.log(tag, 'monthMeta:', monthMeta);
        }
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.isMonthAvailable = function (year, month) {
        return this.isDateInBounds(year, month) && (!this.useAvailableMonths ||
            this.yearMeta[year] && this.yearMeta[year][month].available);
    };
    MonthPickerComponent.prototype.isDateInBounds = function (year, month) {
        return this.isMonthInBounds(month) && this.isYearInBounds(year);
    };
    MonthPickerComponent.prototype.isMonthInBounds = function (month) {
        return month > -1 && month < MonthPickerComponent_1.MonthCount;
    };
    MonthPickerComponent.prototype.isYearInBounds = function (year) {
        return year > this.minYear && year < this.maxYear;
    };
    MonthPickerComponent.prototype.isMonthPreselected = function (year, month) {
        var tag = this.tag + ".isMonthPreselected()";
        var debug = this.debug && false;
        if (debug) {
            console.log(tag, year + "." + month);
        }
        var isMonthPreselected = !!(this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].preselected);
        if (debug) {
            console.log(tag, 'isMonthPreselected:', isMonthPreselected);
        }
        return isMonthPreselected;
    };
    MonthPickerComponent.prototype.getYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        return this.yearMeta[year];
    };
    MonthPickerComponent.prototype.iterateMonthMetas = function (cb) {
        var _this = this;
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                cb(Number(year), month, monthMeta);
            });
        });
    };
    MonthPickerComponent.prototype.getSelectedDates = function () {
        var selectedDates = [];
        this.iterateMonthMetas(function (year, month, monthMeta) {
            if (monthMeta.selected) {
                selectedDates.push(year + "." + month);
            }
        });
        return selectedDates;
    };
    MonthPickerComponent.prototype.setMonthBackgroundColor = function (year, month) {
        var color = this.getMonthBackgroundColor();
        if (color) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.color = color;
        }
    };
    MonthPickerComponent.prototype.getMonthBackgroundColor = function () {
        var index = this.availableColors.findIndex(function (available) { return available; });
        if (index !== -1) {
            this.availableColors[index] = false;
            return this.colors[index];
        }
    };
    MonthPickerComponent.prototype.deselectMonth = function (year, month) {
        if (this.isMonthSelected(year, month)) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.selected = false;
            this.clearMonthBackgroundColor(year, month);
            this.notifyDeselect(year + "." + month);
        }
    };
    MonthPickerComponent.prototype.isMonthSelected = function (year, month) {
        return this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].selected;
    };
    MonthPickerComponent.prototype.clearMonthBackgroundColor = function (year, month) {
        if (this.availableColors) {
            var monthMeta = this.getYearMeta(year)[month];
            if (monthMeta.color) {
                var index = this.colors.indexOf(monthMeta.color);
                this.availableColors[index] = true;
                delete monthMeta.color;
            }
        }
    };
    MonthPickerComponent.prototype.deselectAllMonths = function () {
        this.iterateMonthMetas(this.deselectMonth);
    };
    MonthPickerComponent.prototype.addAvailableMonthRange = function (min, max) {
        if (min === void 0) { min = this.minValue; }
        if (max === void 0) { max = this.maxValue; }
        var tag = this.tag + ".addAvailableMonthRange()";
        var debug = this.debug || false;
        if (debug) {
            console.log(tag, 'min:', min);
        }
        if (debug) {
            console.log(tag, 'max:', max);
        }
        for (var i = new Date(min); i <= max; i.setMonth(i.getMonth() + 1)) {
            this.addAvailableMonth(i.getFullYear(), i.getMonth());
        }
    };
    MonthPickerComponent.prototype.addAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            this.getYearMeta(year)[month].available = true;
            this.ref.markForCheck();
        }
    };
    MonthPickerComponent.prototype.removeAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month) && this.yearMeta[year]) {
            this.yearMeta[year][month].available = false;
        }
    };
    MonthPickerComponent.prototype.removeAllAvailableMonths = function () {
        var _this = this;
        this.iterateMonthMetas(function (year, month) {
            _this.dePreselectMonth(year, month);
            _this.deselectMonth(year, month);
            _this.removeAvailableMonth(year, month);
        });
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.onPrevYearTap = function () {
        if (this.prevYearAvailable) {
            this.currentYear--;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.prevYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onNextYearTap = function () {
        if (this.nextYearAvailable) {
            this.currentYear++;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.nextYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.notifySelect = function (date) {
        this.select.emit(date);
    };
    MonthPickerComponent.prototype.notifyDeselect = function (date) {
        this.deselect.emit(date);
    };
    MonthPickerComponent.prototype.isCurrentMonth = function (year, month) {
        return this.now.getFullYear() === year && this.now.getMonth() === month;
    };
    MonthPickerComponent.prototype.getMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            return Object.assign({
                date: year + "." + month,
                label: this.months[month]
            }, this.getYearMeta(year)[month]);
        }
    };
    var MonthPickerComponent_1;
    MonthPickerComponent.Tag = 'MonthPickerComponent';
    MonthPickerComponent.MonthCount = 12;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "debug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MonthPickerComponent.prototype, "expandedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthPickerComponent.prototype, "currentYear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MonthPickerComponent.prototype, "currentYearChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "prevYearBtnTap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "nextYearBtnTap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "deselect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "monthsPerRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MonthPickerComponent.prototype, "colors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "locales", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "dateOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "expandable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "prevYearAvailable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "nextYearAvailable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "useAvailableMonths", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "closeBtnIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "prevYearBtnIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "nextYearBtnIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthPickerComponent.prototype, "maxSelectableMonths", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "minSelectableMonths", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthPickerComponent.prototype, "minYear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthPickerComponent.prototype, "maxYear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthPickerComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('min'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])
    ], MonthPickerComponent.prototype, "min", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('max'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])
    ], MonthPickerComponent.prototype, "max", null);
    MonthPickerComponent = MonthPickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-month-picker',
            template: __webpack_require__(/*! ./month-picker.component.html */ "./lib/ng-vcl/src/month-picker/month-picker.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MonthPickerComponent_1; }),
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MonthPickerComponent);
    return MonthPickerComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/navigation/index.ts":
/*!********************************************!*\
  !*** ./lib/ng-vcl/src/navigation/index.ts ***!
  \********************************************/
/*! exports provided: NavigationComponent, NavigationItemDirective, VCLNavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLNavigationModule", function() { return VCLNavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icogram_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icogram/index */ "./lib/ng-vcl/src/icogram/index.ts");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.component */ "./lib/ng-vcl/src/navigation/navigation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationItemDirective", function() { return _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationItemDirective"]; });







var VCLNavigationModule = /** @class */ (function () {
    function VCLNavigationModule() {
    }
    VCLNavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icogram_index__WEBPACK_IMPORTED_MODULE_3__["VCLIcogramModule"]],
            exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationItemDirective"]],
            declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationItemDirective"]],
            providers: [],
        })
    ], VCLNavigationModule);
    return VCLNavigationModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [class.vclLayoutHorizontal]=\"type === 'horizontal'\">\n  <li *ngFor=\"let item of navigationItems\"\n      [class.vclSelected]=\"(item.showActive || item.selectable) && item.selected\"\n      [class.vclOpen]=\"item.opened\"\n      [class.vclClose]=\"!item.opened\"\n      [class.vclNavigationHeading]=\"item.heading\"\n      [class.vclNavigationItem]=\"!item.heading\"\n      [attr.aria-selected]=\"item.selectable && item.selected\"\n      [attr.role]=\"item.heading && 'sectionhead' || ariaRole\"\n      [attr.tabindex]=\"tabindex\"\n      [ngClass]=\"item.class\"\n      (mouseleave)=\"mouseLeave(item)\"\n      (mouseover)=\"mouseOver(item)\">\n\n      <span *ngIf=\"item.heading\">\n        {{item.label}}\n      </span>\n\n      <a vcl-icogram class=\"vclNavigationItemLabel\"\n        *ngIf=\"!item.heading\"\n        (click)=\"selectItem(item)\"\n        [prepIcon]=\"item.calcPrepIcon\"\n        [appIcon]=\"item.calcAppIcon\"\n        >{{item.label}}\n      </a>\n\n    <nav vcl-navigation *ngIf=\"item.items && item.items.length > 0\"\n         [inputItems]=\"item.items\"\n         [type]=\"type\"\n         [useRouter]=\"useRouter\"\n         [subLevelHintIconOpened]=\"subLevelHintIconOpened\"\n         [subLevelHintIconClosed]=\"subLevelHintIconClosed\"\n         [subLevelHintIconSide]=\"subLevelHintIconSide\"\n         (select)=\"onSubItemSelect($event)\">\n    </nav>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationItemDirective, NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItemDirective", function() { return NavigationItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavigationItemDirective = /** @class */ (function () {
    function NavigationItemDirective(router, nav, parent) {
        this.router = router;
        this.nav = nav;
        this.parent = parent;
        this.selected = false;
        this.selectable = true;
        this.opened = false;
        this.heading = false;
        this.exactRoute = true;
        this.showActive = false;
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavigationItemDirective_1 = NavigationItemDirective;
    Object.defineProperty(NavigationItemDirective.prototype, "items", {
        get: function () {
            var _this = this;
            return (this.contentItems && this.contentItems.filter(function (item) { return item !== _this; })) || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (route) {
            this._route = Array.isArray(route) ? route : [route];
            this._urlTree = this.router.createUrlTree(this._route);
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.updateSelectedState = function () {
        this.selected = !!this._urlTree && this.router.isActive(this._urlTree, this.exactRoute);
        if (this.selected) {
            this.openParents();
        }
    };
    NavigationItemDirective.prototype.openParents = function () {
        var openParents = function (item) {
            if (item.parent) {
                item.parent.opened = true;
                openParents(item.parent);
            }
        };
        openParents(this);
    };
    NavigationItemDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.nav.useRouter) {
            if (this.router.navigated) {
                this.updateSelectedState();
            }
            this._subscription = this.router.events.subscribe(function (s) {
                if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                    _this.updateSelectedState();
                }
            });
        }
    };
    NavigationItemDirective.prototype.ngOnDestroy = function () {
        this._subscription && this._subscription.unsubscribe();
    };
    Object.defineProperty(NavigationItemDirective.prototype, "calcPrepIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'left' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "calcAppIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'right' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.mouseOver = function () {
        this.hover.emit(this);
    };
    NavigationItemDirective.prototype.mouseLeave = function () {
        this.leave.emit(this);
    };
    var NavigationItemDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationItemDirective.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationItemDirective.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "selectable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationItemDirective.prototype, "prepIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationItemDirective.prototype, "appIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationItemDirective.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationItemDirective.prototype, "href", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "exactRoute", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "showActive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "hover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationItemDirective.prototype, "leave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], NavigationItemDirective.prototype, "route", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(NavigationItemDirective_1),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], NavigationItemDirective.prototype, "contentItems", void 0);
    NavigationItemDirective = NavigationItemDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'vcl-navitem'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NavigationComponent; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NavigationItemDirective_1)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, NavigationItemDirective])
    ], NavigationItemDirective);
    return NavigationItemDirective;
}());

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'vertical';
        this.useRouter = false;
        this.subLevelHintIconClosed = 'fas:chevron-right';
        this.subLevelHintIconOpened = 'fas:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NavigationComponent.prototype, "navigationItems", {
        get: function () {
            return this.inputItems || this.contentItems || [];
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.runItems = function (cb) {
        var runItems = function (items) {
            items.forEach(function (item) {
                cb(item);
                if (item.items) {
                    runItems(item.items);
                }
            });
        };
        runItems(this.navigationItems);
    };
    NavigationComponent.prototype.selectRoute = function (route, openParents) {
        var _this = this;
        if (openParents === void 0) { openParents = true; }
        this.runItems(function (item) {
            if (item.route) {
                // TODO should use containsTree from @angular/router for comparison
                // currently not exposed as public api
                item.selected = item.route.length === route.length && item.route.every(function (v, i) { return v === route[i]; });
                if (item.selected) {
                    _this.selectedItem = item;
                    if (openParents) {
                        item.openParents();
                    }
                }
            }
        });
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item.items && item.items.length > 0) {
            item.opened = !item.opened;
            return;
        }
        if (!item.selectable) {
            return;
        }
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        item.selected = true;
        this.selectedItem = item;
        if (item.href) {
            window.location.href = item.href;
        }
        else if (item.route) {
            if (this.useRouter) {
                this.router.navigate(item.route);
            }
            else {
                this.navigate.emit(item.route);
            }
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSubItemSelect = function (item) {
        this.selectItem(item);
    };
    NavigationComponent.prototype.mouseOver = function (item) {
        item.mouseOver();
    };
    NavigationComponent.prototype.mouseLeave = function (item) {
        item.mouseLeave();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationComponent.prototype, "ident", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "ariaRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "useRouter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], NavigationComponent.prototype, "inputItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "navigate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(NavigationItemDirective),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], NavigationComponent.prototype, "contentItems", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav[vcl-navigation]',
            host: {
                '[class.vclNavigation]': 'true'
            },
            template: __webpack_require__(/*! ./navigation.component.html */ "./lib/ng-vcl/src/navigation/navigation.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/notification/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/notification/index.ts ***!
  \**********************************************/
/*! exports provided: VCLNotificationModule, notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType, NotificationType, FlexAlign, TextAlign, IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLNotificationModule", function() { return VCLNotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.component */ "./lib/ng-vcl/src/notification/notification.component.ts");
/* harmony import */ var _notification_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-header.component */ "./lib/ng-vcl/src/notification/notification-header.component.ts");
/* harmony import */ var _notification_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-body.component */ "./lib/ng-vcl/src/notification/notification-body.component.ts");
/* harmony import */ var _notification_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification-footer.component */ "./lib/ng-vcl/src/notification/notification-footer.component.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/notification/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationTypeFromString", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["notificationTypeFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationIconFromType", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["notificationIconFromType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationStyleClassFromType", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["notificationStyleClassFromType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlign", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["FlexAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["TextAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _types__WEBPACK_IMPORTED_MODULE_8__["IconType"]; });










var VCLNotificationModule = /** @class */ (function () {
    function VCLNotificationModule() {
    }
    VCLNotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_index__WEBPACK_IMPORTED_MODULE_3__["VCLButtonModule"]],
            exports: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], _notification_header_component__WEBPACK_IMPORTED_MODULE_5__["NotificationHeaderComponent"], _notification_body_component__WEBPACK_IMPORTED_MODULE_6__["NotificationBodyComponent"], _notification_footer_component__WEBPACK_IMPORTED_MODULE_7__["NotificationFooterComponent"]],
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], _notification_header_component__WEBPACK_IMPORTED_MODULE_5__["NotificationHeaderComponent"], _notification_body_component__WEBPACK_IMPORTED_MODULE_6__["NotificationBodyComponent"], _notification_footer_component__WEBPACK_IMPORTED_MODULE_7__["NotificationFooterComponent"]]
        })
    ], VCLNotificationModule);
    return VCLNotificationModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/notification/notification-body.component.ts":
/*!********************************************************************!*\
  !*** ./lib/ng-vcl/src/notification/notification-body.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBodyComponent", function() { return NotificationBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/notification/types.ts");



var NotificationBodyComponent = /** @class */ (function () {
    function NotificationBodyComponent() {
        this.align = 'center';
    }
    Object.defineProperty(NotificationBodyComponent.prototype, "alignItems", {
        get: function () {
            return _types__WEBPACK_IMPORTED_MODULE_2__["FlexAlign"][this.align];
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationBodyComponent.prototype, "align", void 0);
    NotificationBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-notification-body',
            template: '<ng-content></ng-content>',
        })
    ], NotificationBodyComponent);
    return NotificationBodyComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/notification/notification-footer.component.ts":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/notification/notification-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationFooterComponent", function() { return NotificationFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/notification/types.ts");



var NotificationFooterComponent = /** @class */ (function () {
    function NotificationFooterComponent() {
        this.align = 'left';
    }
    Object.defineProperty(NotificationFooterComponent.prototype, "alignItems", {
        get: function () {
            return _types__WEBPACK_IMPORTED_MODULE_2__["FlexAlign"][this.align];
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationFooterComponent.prototype, "align", void 0);
    NotificationFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-notification-footer',
            template: '<ng-content></ng-content>',
        })
    ], NotificationFooterComponent);
    return NotificationFooterComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/notification/notification-header.component.ts":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/notification/notification-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationHeaderComponent", function() { return NotificationHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/notification/types.ts");



var NotificationHeaderComponent = /** @class */ (function () {
    function NotificationHeaderComponent() {
        this.align = 'left';
    }
    Object.defineProperty(NotificationHeaderComponent.prototype, "alignItems", {
        get: function () {
            return _types__WEBPACK_IMPORTED_MODULE_2__["FlexAlign"][this.align];
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationHeaderComponent.prototype, "align", void 0);
    NotificationHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-notification-header',
            template: '<ng-content></ng-content>',
        })
    ], NotificationHeaderComponent);
    return NotificationHeaderComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/notification/notification.component.html":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/notification/notification.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #notification class=\"vclNotification\" [ngClass]=\"notificationStyleClass\" [ngStyle]=\"notificationStyles\">\n\n  <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" *ngIf=\"header || (nested && headerComponent != null)\" [ngStyle]=\"headerStyle\">\n    <div class=\"vclLayoutFlex\" *ngIf=\"!nested\">{{ header }}</div>\n    <button vcl-icon-button class=\"vclTransparent\" *ngIf=\"(button && showButton) && !nested\" (click)=\"onClick()\" [icon]=\"button\"></button>\n\n    <ng-content *ngIf=\"nested && headerComponent != null\" select=\"vcl-notification-header\"></ng-content>\n  </div>\n\n  <div [ngClass]=\"{'vclLayoutHorizontal': !verticalBody, 'vlcLayoutVertical': verticalBody}\" [ngStyle]=\"bodyStyle\">\n    <div class=\"vclNotificationIconContainer\" *ngIf=\"drawIcon\" [ngStyle]=\"bodyIconStyle\">\n      <span class=\"vclIcon vclNotificationIcon {{ eIconClass }}\" *ngIf=\"iconType == 'fa' || iconType == 'custom'\"></span>\n      <img class=\"vclIcon vclNotificationIcon\" [src]=\"iconImage\" *ngIf=\"iconType == 'image'\">\n    </div>\n\n    <div class=\"vclNotificationContent vclLayoutFlex\">\n      <ng-content *ngIf=\"!nested\"></ng-content>\n\n      <ng-content *ngIf=\"nested && bodyComponent != null\" select=\"vcl-notification-body\"></ng-content>\n    </div>\n\n    <button vcl-icon-button class=\"vclTransparent vclLayoutSelfStart\" *ngIf=\"(button && showButton) && !header\" (click)=\"onClick()\" [icon]=\"button\"></button>\n  </div>\n\n  <div class=\"vclNotificationFooter vclLayoutHorizontal vclLayoutCenter\" [ngStyle]=\"footerStyle\" *ngIf=\"footer || (nested && footerComponent != null)\">\n    <ng-container *ngIf=\"footer && !nested\">{{ footer }}</ng-container>\n    <ng-content *ngIf=\"nested && footerComponent != null\" select=\"vcl-notification-footer\"></ng-content>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/notification/notification.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/notification/notification.component.ts ***!
  \***************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/ng-vcl/src/notification/types.ts");
/* harmony import */ var _notification_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-body.component */ "./lib/ng-vcl/src/notification/notification-body.component.ts");
/* harmony import */ var _notification_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-footer.component */ "./lib/ng-vcl/src/notification/notification-footer.component.ts");
/* harmony import */ var _notification_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-header.component */ "./lib/ng-vcl/src/notification/notification-header.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.nType = 'default';
        this.icon = '';
        this.iconClass = '';
        this.iconImage = '';
        this.iconSide = 'left';
        this.drawIcon = true;
        this.header = '';
        this.footer = '';
        this.button = '';
        this.showButton = true;
        this.verticalBody = false;
        this.styleClass = undefined;
        this.headerAlign = 'left';
        this.bodyAlign = 'center';
        this.footerAlign = 'left';
        this.textColor = '';
        this.backgroundColor = '';
        this.buttonClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NotificationComponent.prototype, "buttonClick", {
        get: function () {
            return this.buttonClickEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "eType", {
        get: function () {
            return Object(_types__WEBPACK_IMPORTED_MODULE_2__["notificationTypeFromString"])(this.nType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "notificationStyleClass", {
        get: function () {
            if (this.styleClass) {
                return this.styleClass;
            }
            return Object(_types__WEBPACK_IMPORTED_MODULE_2__["notificationStyleClassFromType"])(this.eType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "notificationStyles", {
        get: function () {
            return {
                color: this.textColor,
                'background-color': this.backgroundColor
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "eIconClass", {
        get: function () {
            if (this.icon) {
                return 'fas ' + this.icon;
            }
            else if (this.iconClass) {
                return this.iconClass;
            }
            return 'fas ' + Object(_types__WEBPACK_IMPORTED_MODULE_2__["notificationIconFromType"])(this.eType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "iconType", {
        get: function () {
            if (this.iconImage) {
                return _types__WEBPACK_IMPORTED_MODULE_2__["IconType"].Image;
            }
            else if (this.iconClass) {
                return _types__WEBPACK_IMPORTED_MODULE_2__["IconType"].Custom;
            }
            return _types__WEBPACK_IMPORTED_MODULE_2__["IconType"].FA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "nested", {
        get: function () {
            return this.headerComponent != null || this.bodyComponent != null || this.footerComponent != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "headerStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'align-items': (this.headerComponent != null ? this.headerComponent.alignItems : 'flex-start')
                };
            }
            return {
                'text-align': _types__WEBPACK_IMPORTED_MODULE_2__["TextAlign"][this.headerAlign]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "bodyStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'flex-direction': 'row',
                    'align-items': (this.bodyComponent != null ? this.bodyComponent.alignItems : 'flex-start')
                };
            }
            return {
                'flex-flow': this.verticalBody ? 'column' : '',
                'align-items': _types__WEBPACK_IMPORTED_MODULE_2__["FlexAlign"][this.bodyAlign],
                'text-align': this.verticalBody ? _types__WEBPACK_IMPORTED_MODULE_2__["TextAlign"][this.bodyAlign] : ''
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "footerStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'align-items': (this.footerComponent != null ? this.footerComponent.alignItems : 'flex-start')
                };
            }
            return {
                display: 'block',
                'text-align': _types__WEBPACK_IMPORTED_MODULE_2__["TextAlign"][this.footerAlign],
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "bodyIconStyle", {
        get: function () {
            if (this.verticalBody) {
                return {
                    padding: '1em',
                };
            }
            if (this.iconSide === 'right') {
                return {
                    order: 1,
                    'padding-right': '1em',
                    'padding-left': '0.3em'
                };
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    NotificationComponent.prototype.onClick = function () {
        this.buttonClickEvent.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationComponent.prototype, "nType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "iconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "iconImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationComponent.prototype, "iconSide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "drawIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "footer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "button", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "showButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "verticalBody", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationComponent.prototype, "headerAlign", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationComponent.prototype, "bodyAlign", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationComponent.prototype, "footerAlign", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "textColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_notification_header_component__WEBPACK_IMPORTED_MODULE_5__["NotificationHeaderComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _notification_header_component__WEBPACK_IMPORTED_MODULE_5__["NotificationHeaderComponent"])
    ], NotificationComponent.prototype, "headerComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_notification_body_component__WEBPACK_IMPORTED_MODULE_3__["NotificationBodyComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _notification_body_component__WEBPACK_IMPORTED_MODULE_3__["NotificationBodyComponent"])
    ], NotificationComponent.prototype, "bodyComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_notification_footer_component__WEBPACK_IMPORTED_MODULE_4__["NotificationFooterComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _notification_footer_component__WEBPACK_IMPORTED_MODULE_4__["NotificationFooterComponent"])
    ], NotificationComponent.prototype, "footerComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent.prototype, "buttonClick", null);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./lib/ng-vcl/src/notification/notification.component.html"),
        })
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/notification/types.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/notification/types.ts ***!
  \**********************************************/
/*! exports provided: notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType, NotificationType, FlexAlign, TextAlign, IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationTypeFromString", function() { return notificationTypeFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationIconFromType", function() { return notificationIconFromType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationStyleClassFromType", function() { return notificationStyleClassFromType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlign", function() { return FlexAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return TextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return IconType; });
var _a;
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Default"] = 0] = "Default";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Warning"] = 2] = "Warning";
    NotificationType[NotificationType["Error"] = 3] = "Error";
    NotificationType[NotificationType["Success"] = 4] = "Success";
})(NotificationType || (NotificationType = {}));
var DATA = (_a = {},
    _a[NotificationType.Default] = {
        icon: 'fa-bell-o',
        class: ''
    },
    _a[NotificationType.Info] = {
        icon: 'fa-info-circle',
        class: 'vclInfo'
    },
    _a[NotificationType.Warning] = {
        icon: 'fa-warning',
        class: 'vclWarning'
    },
    _a[NotificationType.Error] = {
        icon: 'fa-exclamation-circle',
        class: 'vclError'
    },
    _a[NotificationType.Success] = {
        icon: 'fa-check-circle',
        class: 'vclSuccess'
    },
    _a);
var FlexAlign = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
};
var TextAlign = {
    left: 'left',
    center: 'center',
    right: 'right'
};
var IconType;
(function (IconType) {
    IconType["FA"] = "fa";
    IconType["Custom"] = "custom";
    IconType["Image"] = "image";
})(IconType || (IconType = {}));
function notificationTypeFromString(type) {
    switch (type.toLocaleLowerCase()) {
        default:
            return NotificationType.Default;
        case 'info':
            return NotificationType.Info;
        case 'warning':
            return NotificationType.Warning;
        case 'error':
            return NotificationType.Error;
        case 'success':
            return NotificationType.Success;
    }
}
function notificationIconFromType(type) {
    return DATA[type].icon;
}
function notificationStyleClassFromType(type) {
    return DATA[type].class;
}



/***/ }),

/***/ "./lib/ng-vcl/src/off-click/index.ts":
/*!*******************************************!*\
  !*** ./lib/ng-vcl/src/off-click/index.ts ***!
  \*******************************************/
/*! exports provided: VCLOffClickModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLOffClickModule", function() { return VCLOffClickModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _off_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./off-click.directive */ "./lib/ng-vcl/src/off-click/off-click.directive.ts");



var VCLOffClickModule = /** @class */ (function () {
    function VCLOffClickModule() {
    }
    VCLOffClickModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_off_click_directive__WEBPACK_IMPORTED_MODULE_2__["OffClickDirective"]],
            exports: [_off_click_directive__WEBPACK_IMPORTED_MODULE_2__["OffClickDirective"]]
        })
    ], VCLOffClickModule);
    return VCLOffClickModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/off-click/off-click.directive.ts":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/off-click/off-click.directive.ts ***!
  \*********************************************************/
/*! exports provided: OffClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffClickDirective", function() { return OffClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var OffClickDirective = /** @class */ (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClickDelay = 10;
        this.offClickListen = true;
        this.offClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subs = [];
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Track mouse move on host element and store hovered inner elements
            var subTrack = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elem.nativeElement, 'mouseover').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) { return e.target || undefined; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elem.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return undefined; }))).subscribe(function (target) { return _this.hoveredElement = target; });
            // Add a small delay, so any click that causes this directive to render does not trigger an off-click
            var subClick = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this.offClickListen; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.offClickDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()))).subscribe(function (ev) {
                var popoverHostElement = _this.elem.nativeElement;
                // Check that the target is not the off-clicks target element or any sub element
                var checks = [
                    _this.hoveredElement,
                    popoverHostElement
                ].concat((_this.offClickExcludes || []).map(function (e) { return e instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? e.nativeElement : e; }).filter(function (e) { return e instanceof Element; })).filter(function (el) { return !!el; });
                var target = ev.target;
                if (target) {
                    var targetIsNotExcludedElementOrChildElement = checks.every(function (el) {
                        return !(el === target || el.contains(target));
                    });
                    if (targetIsNotExcludedElementOrChildElement) {
                        _this.offClick.emit();
                    }
                }
            });
            this.subs = [subTrack, subClick];
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffClickDirective.prototype, "offClickDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffClickDirective.prototype, "offClickListen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OffClickDirective.prototype, "offClickExcludes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffClickDirective.prototype, "offClick", void 0);
    OffClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[offClick]',
            exportAs: 'offClick'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OffClickDirective);
    return OffClickDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/password-input/index.ts":
/*!************************************************!*\
  !*** ./lib/ng-vcl/src/password-input/index.ts ***!
  \************************************************/
/*! exports provided: PasswordInputComponent, PasswordInputDirective, VCLPasswordInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLPasswordInputModule", function() { return VCLPasswordInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _password_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-input.component */ "./lib/ng-vcl/src/password-input/password-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputComponent", function() { return _password_input_component__WEBPACK_IMPORTED_MODULE_5__["PasswordInputComponent"]; });

/* harmony import */ var _password_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-input.directive */ "./lib/ng-vcl/src/password-input/password-input.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputDirective", function() { return _password_input_directive__WEBPACK_IMPORTED_MODULE_6__["PasswordInputDirective"]; });









var VCLPasswordInputModule = /** @class */ (function () {
    function VCLPasswordInputModule() {
    }
    VCLPasswordInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _input_index__WEBPACK_IMPORTED_MODULE_3__["VCLInputModule"], _button_index__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"]],
            exports: [_password_input_component__WEBPACK_IMPORTED_MODULE_5__["PasswordInputComponent"], _password_input_directive__WEBPACK_IMPORTED_MODULE_6__["PasswordInputDirective"]],
            declarations: [_password_input_component__WEBPACK_IMPORTED_MODULE_5__["PasswordInputComponent"], _password_input_directive__WEBPACK_IMPORTED_MODULE_6__["PasswordInputDirective"]]
        })
    ], VCLPasswordInputModule);
    return VCLPasswordInputModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/password-input/password-input.component.html":
/*!*********************************************************************!*\
  !*** ./lib/ng-vcl/src/password-input/password-input.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<button vcl-icon-button\n        [icon]=\"buttonIcon\" \n        [disabled]=\"disabled\"\n        (click)=\"toggle()\">\n</button>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/password-input/password-input.component.ts":
/*!*******************************************************************!*\
  !*** ./lib/ng-vcl/src/password-input/password-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordInputComponent", function() { return PasswordInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../input/index */ "./lib/ng-vcl/src/input/index.ts");



var PasswordInputComponent = /** @class */ (function () {
    function PasswordInputComponent() {
        this.visibleIcon = 'fas:eye';
        this.invisibleIcon = 'fas:eye-slash';
        this.visible = false;
        this.disabled = false;
    }
    Object.defineProperty(PasswordInputComponent.prototype, "buttonIcon", {
        get: function () {
            return this.visible ? this.visibleIcon : this.invisibleIcon;
        },
        enumerable: true,
        configurable: true
    });
    PasswordInputComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_input_index__WEBPACK_IMPORTED_MODULE_2__["InputDirective"], { read: _input_index__WEBPACK_IMPORTED_MODULE_2__["InputDirective"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _input_index__WEBPACK_IMPORTED_MODULE_2__["InputDirective"])
    ], PasswordInputComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordInputComponent.prototype, "visibleIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordInputComponent.prototype, "invisibleIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordInputComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordInputComponent.prototype, "disabled", void 0);
    PasswordInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./password-input.component.html */ "./lib/ng-vcl/src/password-input/password-input.component.html"),
            selector: 'vcl-password-input',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                '[class.vclInputGroup]': 'true',
                '[attr.tabindex]': '-1'
            }
        })
    ], PasswordInputComponent);
    return PasswordInputComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/password-input/password-input.directive.ts":
/*!*******************************************************************!*\
  !*** ./lib/ng-vcl/src/password-input/password-input.directive.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordInputDirective", function() { return PasswordInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _password_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-input.component */ "./lib/ng-vcl/src/password-input/password-input.component.ts");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");




var PasswordInputDirective = /** @class */ (function () {
    function PasswordInputDirective(input, passwordInput) {
        this.input = input;
        this.passwordInput = passwordInput;
    }
    Object.defineProperty(PasswordInputDirective.prototype, "isDisabled", {
        get: function () {
            return (this.input.disabled || this.passwordInput.disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordInputDirective.prototype, "type", {
        get: function () {
            return this.passwordInput.visible ? 'text' : 'password';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordInputDirective.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordInputDirective.prototype, "type", null);
    PasswordInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[vcl-password-input]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_input_index__WEBPACK_IMPORTED_MODULE_3__["InputDirective"],
            _password_input_component__WEBPACK_IMPORTED_MODULE_2__["PasswordInputComponent"]])
    ], PasswordInputDirective);
    return PasswordInputDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/popover/index.ts":
/*!*****************************************!*\
  !*** ./lib/ng-vcl/src/popover/index.ts ***!
  \*****************************************/
/*! exports provided: PopoverComponent, VCLPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLPopoverModule", function() { return VCLPopoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _off_click_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../off-click/index */ "./lib/ng-vcl/src/off-click/index.ts");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover.component */ "./lib/ng-vcl/src/popover/popover.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return _popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"]; });







var VCLPopoverModule = /** @class */ (function () {
    function VCLPopoverModule() {
    }
    VCLPopoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _off_click_index__WEBPACK_IMPORTED_MODULE_3__["VCLOffClickModule"]
            ],
            providers: [],
            exports: [_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"]],
            declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"]]
        })
    ], VCLPopoverModule);
    return VCLPopoverModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/popover/popover.component.html":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/popover/popover.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <!-- TODO: workaround. Unset vclPopOver position as it interferes with the positioning of the cdk overlay -->\n  <div class=\"vclPopOver\" style=\"position: unset\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>'\n"

/***/ }),

/***/ "./lib/ng-vcl/src/popover/popover.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/popover/popover.component.ts ***!
  \*****************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layer */ "./lib/ng-vcl/src/layer/index.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");






var PopoverComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PopoverComponent, _super);
    function PopoverComponent(_dir, viewContainerRef, overlay, injector, cdRef) {
        var _this = _super.call(this) || this;
        _this._dir = _dir;
        _this.viewContainerRef = viewContainerRef;
        _this.overlay = overlay;
        _this.injector = injector;
        _this.cdRef = cdRef;
        _this.originX = 'start';
        _this.originY = 'bottom';
        _this.overlayX = 'start';
        _this.overlayY = 'top';
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(PopoverComponent.prototype, "visible", {
        get: function () {
            return this.isAttached;
        },
        set: function (visible) {
            if (visible) {
                this.open();
            }
            else {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    PopoverComponent.prototype.reposition = function () {
        this.overlayRef && this.overlayRef.updatePosition();
    };
    PopoverComponent.prototype.open = function () {
        var config = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayConfig"]({
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            direction: this._dir,
            positionStrategy: this.position || this.overlay.position()
                .connectedTo(this.target, {
                originX: this.originX,
                originY: this.originY
            }, {
                overlayX: this.overlayX,
                overlayY: this.overlayY,
            })
                .withOffsetX(this.offsetX)
                .withOffsetY(this.offsetY),
        });
        this.attach(config);
        this.visibleChange.emit(this.isAttached);
    };
    PopoverComponent.prototype.close = function () {
        _super.prototype.detach.call(this);
        this.visibleChange.emit(this.isAttached);
    };
    PopoverComponent.prototype.toggle = function () {
        if (this.visible) {
            this.close();
        }
        else {
            this.open();
        }
    };
    PopoverComponent.prototype.getInjector = function () {
        return this.injector;
    };
    PopoverComponent.prototype.createPortal = function () {
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](this.template, this.viewContainerRef);
    };
    PopoverComponent.prototype.afterAttached = function (overlayRef) {
    };
    PopoverComponent.prototype.afterDetached = function (result, overlayRef) {
        if (!this.isLayerDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            this.cdRef.detectChanges();
        }
        this.afterClose.emit();
    };
    PopoverComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], PopoverComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PopoverComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverComponent.prototype, "originX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverComponent.prototype, "originY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverComponent.prototype, "overlayX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverComponent.prototype, "overlayY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverComponent.prototype, "offsetX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverComponent.prototype, "offsetY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PopoverComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PopoverComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], PopoverComponent.prototype, "visible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverComponent.prototype, "visibleChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverComponent.prototype, "afterClose", void 0);
    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./lib/ng-vcl/src/popover/popover.component.html"),
            exportAs: 'vclPopover',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PopoverComponent);
    return PopoverComponent;
}(_layer__WEBPACK_IMPORTED_MODULE_4__["LayerRef"]));



/***/ }),

/***/ "./lib/ng-vcl/src/progress-bar/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/progress-bar/index.ts ***!
  \**********************************************/
/*! exports provided: VCLProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLProgressBarModule", function() { return VCLProgressBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar.component */ "./lib/ng-vcl/src/progress-bar/progress-bar.component.ts");




var VCLProgressBarModule = /** @class */ (function () {
    function VCLProgressBarModule() {
    }
    VCLProgressBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]],
            declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]]
        })
    ], VCLProgressBarModule);
    return VCLProgressBarModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/progress-bar/progress-bar.component.html":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/progress-bar/progress-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclProgressBar\"\n     [attr.aria-valuenow]=\"value\" \n     [attr.aria-valuemin]=\"minValue\" \n     [attr.aria-valuemax]=\"maxValue\" \n     [attr.aria-valuetext]=\"label\"\n     [class.vclIndeterminate]=\"showIndeterminate\"\n     >\n  <div *ngIf=\"showValue\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.transform]=\"transformValue\"></div>\n  <div *ngIf=\"showSecondaryValue\" class=\"vclProgress vclSecondary vclLayoutFit\" [style.transform]=\"transformSecondaryValue\"></div>\n  <div *ngIf=\"showIndeterminate\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.animation-duration]=\"animationDurationValue\"></div>\n</div>\n\n"

/***/ }),

/***/ "./lib/ng-vcl/src/progress-bar/progress-bar.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/progress-bar/progress-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.minValue = 0;
        this.maxValue = 100;
        this.indeterminate = false;
        this.speed = 1;
    }
    Object.defineProperty(ProgressBarComponent.prototype, "showIndeterminate", {
        get: function () {
            return this.indeterminate && !this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showValue", {
        get: function () {
            return !this.indeterminate || this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showSecondaryValue", {
        get: function () {
            return this.validateValue(this.secondaryValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformValue", {
        get: function () {
            var value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformSecondaryValue", {
        get: function () {
            var value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "animationDurationValue", {
        get: function () {
            var value = this.isNumber(this.speed) ? this.speed : 1;
            return value + "s";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "range", {
        get: function () {
            return this.maxValue - this.minValue;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype.scaleValue = function (value) {
        return (value - this.minValue) / this.range;
    };
    ProgressBarComponent.prototype.validateValue = function (value) {
        return this.isNumber(value) &&
            value >= this.minValue &&
            value <= this.maxValue;
    };
    ProgressBarComponent.prototype.isNumber = function (value) {
        return typeof value === 'number' && value !== NaN;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "secondaryValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "minValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "maxValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "indeterminate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "speed", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./lib/ng-vcl/src/progress-bar/progress-bar.component.html"),
            host: {
                '[attr.role]': '"progressbar"',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/public_api.ts":
/*!**************************************!*\
  !*** ./lib/ng-vcl/src/public_api.ts ***!
  \**************************************/
/*! exports provided: ObservableComponent, defineMetadata, getMetadata, InputDirective, VCLInputModule, VCLFileInputModule, VCLTextareaModule, VCLFlipSwitchModule, FlipSwitchComponent, IconComponent, VCLIconResolverServiceBase, IconResolverService, IconService, VCLIconModule, FontAwesomeIconResolverService, FontAwesomeVCLIconResolverService, VCLFontAwesomeModule, MaterialDesignIconResolverService, MaterialDesignVCLIconResolverServiceBase, VCLMaterialDesignModule, LayerRefComponent, ComponentLayerRef, LayerFactory, LayerRef, VCLLayerModule, MetalistItemComponent, MetalistComponent, VCLMetalistModule, DropdownOptionComponent, DropdownComponent, DROPDOWN_ANIMATIONS, VCLDropdownModule, SelectComponent, SelectOptionDirective, DropDirection, VCLSelectModule, IcogramComponent, IcogramLinkComponent, VCLIcogramModule, ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, BUTTON_OBSERVER_TOKEN, VCLButtonModule, ButtonGroupComponent, VCLButtonGroupModule, VCLTabNavModule, NavigationComponent, NavigationItemDirective, VCLNavigationModule, PopoverComponent, VCLPopoverModule, VCLProgressBarModule, RadioButtonComponent, RadioGroupComponent, VCLRadioButtonModule, CheckboxComponent, VCLCheckboxModule, VCLOffClickModule, DatePickerComponent, TimePickerComponent, VCLDatePickerModule, FormControlLabelComponent, FORM_CONTROL_LABEL_MEMBER_TOKEN, VCLFormControlLabelModule, TemplateWormhole, ComponentWormhole, Wormhole, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost, VCLWormholeModule, MonthPickerComponent, VCLMonthPickerModule, VCLLabelModule, TokenComponent, TokenInputContainerComponent, TokenInputDirective, TokenListComponent, VCLTokenModule, SliderComponent, VCLSliderModule, VCLInputControlGroupModule, AlertService, AlertType, AlertInput, AlertAlignment, VCLAlertModule, BusyIndicatorCoverComponent, BusyIndicatorComponent, VCLBusyIndicatorModule, TooltipComponent, AnimationState, Placement, VCLTooltipModule, VCLTableModule, PasswordInputComponent, PasswordInputDirective, VCLPasswordInputModule, VCLZoomBoxModule, VCLNotificationModule, GALLERY_ANIMATIONS, VCLGalleryModule, VCLBadgeModule, VCLEmbeddedInputGroupModule, AutocompleteComponent, AutocompleteItemComponent, AutocompleteSeperatorComponent, AutocompleteHeaderComponent, AutocompleteInputDirective, VCLAutocompleteModule, TourService, TourOptions, TourComponent, VCLTourModule, VCLRatingModule, notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType, NotificationType, FlexAlign, TextAlign, IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./lib/ng-vcl/src/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableComponent", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["ObservableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineMetadata", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["defineMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["getMetadata"]; });

/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputDirective", function() { return _input_index__WEBPACK_IMPORTED_MODULE_1__["InputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLInputModule", function() { return _input_index__WEBPACK_IMPORTED_MODULE_1__["VCLInputModule"]; });

/* harmony import */ var _file_input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-input/index */ "./lib/ng-vcl/src/file-input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFileInputModule", function() { return _file_input_index__WEBPACK_IMPORTED_MODULE_2__["VCLFileInputModule"]; });

/* harmony import */ var _textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea/index */ "./lib/ng-vcl/src/textarea/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTextareaModule", function() { return _textarea_index__WEBPACK_IMPORTED_MODULE_3__["VCLTextareaModule"]; });

/* harmony import */ var _flip_switch_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip-switch/index */ "./lib/ng-vcl/src/flip-switch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFlipSwitchModule", function() { return _flip_switch_index__WEBPACK_IMPORTED_MODULE_4__["VCLFlipSwitchModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipSwitchComponent", function() { return _flip_switch_index__WEBPACK_IMPORTED_MODULE_4__["FlipSwitchComponent"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIconResolverServiceBase", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["VCLIconResolverServiceBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconResolverService", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["IconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["IconService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIconModule", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["VCLIconModule"]; });

/* harmony import */ var _font_awesome_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font-awesome/index */ "./lib/ng-vcl/src/font-awesome/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIconResolverService", function() { return _font_awesome_index__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeVCLIconResolverService", function() { return _font_awesome_index__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeVCLIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFontAwesomeModule", function() { return _font_awesome_index__WEBPACK_IMPORTED_MODULE_6__["VCLFontAwesomeModule"]; });

/* harmony import */ var _material_design_icons_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-design-icons/index */ "./lib/ng-vcl/src/material-design-icons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignIconResolverService", function() { return _material_design_icons_index__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignIconResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignVCLIconResolverServiceBase", function() { return _material_design_icons_index__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignVCLIconResolverServiceBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLMaterialDesignModule", function() { return _material_design_icons_index__WEBPACK_IMPORTED_MODULE_7__["VCLMaterialDesignModule"]; });

/* harmony import */ var _layer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layer/index */ "./lib/ng-vcl/src/layer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRefComponent", function() { return _layer_index__WEBPACK_IMPORTED_MODULE_8__["LayerRefComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLayerRef", function() { return _layer_index__WEBPACK_IMPORTED_MODULE_8__["ComponentLayerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerFactory", function() { return _layer_index__WEBPACK_IMPORTED_MODULE_8__["LayerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRef", function() { return _layer_index__WEBPACK_IMPORTED_MODULE_8__["LayerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLLayerModule", function() { return _layer_index__WEBPACK_IMPORTED_MODULE_8__["VCLLayerModule"]; });

/* harmony import */ var _metalist_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metalist/index */ "./lib/ng-vcl/src/metalist/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetalistItemComponent", function() { return _metalist_index__WEBPACK_IMPORTED_MODULE_9__["MetalistItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetalistComponent", function() { return _metalist_index__WEBPACK_IMPORTED_MODULE_9__["MetalistComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLMetalistModule", function() { return _metalist_index__WEBPACK_IMPORTED_MODULE_9__["VCLMetalistModule"]; });

/* harmony import */ var _dropdown_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown/index */ "./lib/ng-vcl/src/dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownOptionComponent", function() { return _dropdown_index__WEBPACK_IMPORTED_MODULE_10__["DropdownOptionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _dropdown_index__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_ANIMATIONS", function() { return _dropdown_index__WEBPACK_IMPORTED_MODULE_10__["DROPDOWN_ANIMATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLDropdownModule", function() { return _dropdown_index__WEBPACK_IMPORTED_MODULE_10__["VCLDropdownModule"]; });

/* harmony import */ var _select_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select/index */ "./lib/ng-vcl/src/select/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return _select_index__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOptionDirective", function() { return _select_index__WEBPACK_IMPORTED_MODULE_11__["SelectOptionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDirection", function() { return _select_index__WEBPACK_IMPORTED_MODULE_11__["DropDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLSelectModule", function() { return _select_index__WEBPACK_IMPORTED_MODULE_11__["VCLSelectModule"]; });

/* harmony import */ var _icogram_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icogram/index */ "./lib/ng-vcl/src/icogram/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcogramComponent", function() { return _icogram_index__WEBPACK_IMPORTED_MODULE_12__["IcogramComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcogramLinkComponent", function() { return _icogram_index__WEBPACK_IMPORTED_MODULE_12__["IcogramLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLIcogramModule", function() { return _icogram_index__WEBPACK_IMPORTED_MODULE_12__["VCLIcogramModule"]; });

/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _button_index__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIcogramComponent", function() { return _button_index__WEBPACK_IMPORTED_MODULE_13__["ButtonIcogramComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return _button_index__WEBPACK_IMPORTED_MODULE_13__["ButtonIconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OBSERVER_TOKEN", function() { return _button_index__WEBPACK_IMPORTED_MODULE_13__["BUTTON_OBSERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLButtonModule", function() { return _button_index__WEBPACK_IMPORTED_MODULE_13__["VCLButtonModule"]; });

/* harmony import */ var _button_group_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button-group/index */ "./lib/ng-vcl/src/button-group/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return _button_group_index__WEBPACK_IMPORTED_MODULE_14__["ButtonGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLButtonGroupModule", function() { return _button_group_index__WEBPACK_IMPORTED_MODULE_14__["VCLButtonGroupModule"]; });

/* harmony import */ var _tab_nav_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tab-nav/index */ "./lib/ng-vcl/src/tab-nav/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTabNavModule", function() { return _tab_nav_index__WEBPACK_IMPORTED_MODULE_15__["VCLTabNavModule"]; });

/* harmony import */ var _navigation_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/index */ "./lib/ng-vcl/src/navigation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _navigation_index__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationItemDirective", function() { return _navigation_index__WEBPACK_IMPORTED_MODULE_16__["NavigationItemDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLNavigationModule", function() { return _navigation_index__WEBPACK_IMPORTED_MODULE_16__["VCLNavigationModule"]; });

/* harmony import */ var _popover_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./popover/index */ "./lib/ng-vcl/src/popover/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return _popover_index__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLPopoverModule", function() { return _popover_index__WEBPACK_IMPORTED_MODULE_17__["VCLPopoverModule"]; });

/* harmony import */ var _progress_bar_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./progress-bar/index */ "./lib/ng-vcl/src/progress-bar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLProgressBarModule", function() { return _progress_bar_index__WEBPACK_IMPORTED_MODULE_18__["VCLProgressBarModule"]; });

/* harmony import */ var _radio_button_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./radio-button/index */ "./lib/ng-vcl/src/radio-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button_index__WEBPACK_IMPORTED_MODULE_19__["RadioButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return _radio_button_index__WEBPACK_IMPORTED_MODULE_19__["RadioGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLRadioButtonModule", function() { return _radio_button_index__WEBPACK_IMPORTED_MODULE_19__["VCLRadioButtonModule"]; });

/* harmony import */ var _checkbox_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./checkbox/index */ "./lib/ng-vcl/src/checkbox/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _checkbox_index__WEBPACK_IMPORTED_MODULE_20__["CheckboxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLCheckboxModule", function() { return _checkbox_index__WEBPACK_IMPORTED_MODULE_20__["VCLCheckboxModule"]; });

/* harmony import */ var _off_click_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./off-click/index */ "./lib/ng-vcl/src/off-click/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLOffClickModule", function() { return _off_click_index__WEBPACK_IMPORTED_MODULE_21__["VCLOffClickModule"]; });

/* harmony import */ var _date_picker_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./date-picker/index */ "./lib/ng-vcl/src/date-picker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _date_picker_index__WEBPACK_IMPORTED_MODULE_22__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return _date_picker_index__WEBPACK_IMPORTED_MODULE_22__["TimePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLDatePickerModule", function() { return _date_picker_index__WEBPACK_IMPORTED_MODULE_22__["VCLDatePickerModule"]; });

/* harmony import */ var _form_control_label_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form-control-label/index */ "./lib/ng-vcl/src/form-control-label/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControlLabelComponent", function() { return _form_control_label_index__WEBPACK_IMPORTED_MODULE_23__["FormControlLabelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROL_LABEL_MEMBER_TOKEN", function() { return _form_control_label_index__WEBPACK_IMPORTED_MODULE_23__["FORM_CONTROL_LABEL_MEMBER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLFormControlLabelModule", function() { return _form_control_label_index__WEBPACK_IMPORTED_MODULE_23__["VCLFormControlLabelModule"]; });

/* harmony import */ var _wormhole_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./wormhole/index */ "./lib/ng-vcl/src/wormhole/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateWormhole", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["TemplateWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentWormhole", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["ComponentWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wormhole", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["Wormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WormholeDirective", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["WormholeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomComponentWormhole", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["DomComponentWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomTemplateWormhole", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["DomTemplateWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WormholeHost", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["WormholeHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomWormholeHost", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["DomWormholeHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLWormholeModule", function() { return _wormhole_index__WEBPACK_IMPORTED_MODULE_24__["VCLWormholeModule"]; });

/* harmony import */ var _month_picker_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./month-picker/index */ "./lib/ng-vcl/src/month-picker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _month_picker_index__WEBPACK_IMPORTED_MODULE_25__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLMonthPickerModule", function() { return _month_picker_index__WEBPACK_IMPORTED_MODULE_25__["VCLMonthPickerModule"]; });

/* harmony import */ var _label_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./label/index */ "./lib/ng-vcl/src/label/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLLabelModule", function() { return _label_index__WEBPACK_IMPORTED_MODULE_26__["VCLLabelModule"]; });

/* harmony import */ var _token_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./token/index */ "./lib/ng-vcl/src/token/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return _token_index__WEBPACK_IMPORTED_MODULE_27__["TokenComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInputContainerComponent", function() { return _token_index__WEBPACK_IMPORTED_MODULE_27__["TokenInputContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInputDirective", function() { return _token_index__WEBPACK_IMPORTED_MODULE_27__["TokenInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListComponent", function() { return _token_index__WEBPACK_IMPORTED_MODULE_27__["TokenListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTokenModule", function() { return _token_index__WEBPACK_IMPORTED_MODULE_27__["VCLTokenModule"]; });

/* harmony import */ var _slider_index__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slider/index */ "./lib/ng-vcl/src/slider/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return _slider_index__WEBPACK_IMPORTED_MODULE_28__["SliderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLSliderModule", function() { return _slider_index__WEBPACK_IMPORTED_MODULE_28__["VCLSliderModule"]; });

/* harmony import */ var _input_control_group_index__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./input-control-group/index */ "./lib/ng-vcl/src/input-control-group/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLInputControlGroupModule", function() { return _input_control_group_index__WEBPACK_IMPORTED_MODULE_29__["VCLInputControlGroupModule"]; });

/* harmony import */ var _alert_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./alert/index */ "./lib/ng-vcl/src/alert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_30__["AlertService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_30__["AlertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertInput", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_30__["AlertInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertAlignment", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_30__["AlertAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLAlertModule", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_30__["VCLAlertModule"]; });

/* harmony import */ var _busy_indicator_index__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./busy-indicator/index */ "./lib/ng-vcl/src/busy-indicator/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorCoverComponent", function() { return _busy_indicator_index__WEBPACK_IMPORTED_MODULE_31__["BusyIndicatorCoverComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyIndicatorComponent", function() { return _busy_indicator_index__WEBPACK_IMPORTED_MODULE_31__["BusyIndicatorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLBusyIndicatorModule", function() { return _busy_indicator_index__WEBPACK_IMPORTED_MODULE_31__["VCLBusyIndicatorModule"]; });

/* harmony import */ var _tooltip_index__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tooltip/index */ "./lib/ng-vcl/src/tooltip/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _tooltip_index__WEBPACK_IMPORTED_MODULE_32__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationState", function() { return _tooltip_index__WEBPACK_IMPORTED_MODULE_32__["AnimationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return _tooltip_index__WEBPACK_IMPORTED_MODULE_32__["Placement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTooltipModule", function() { return _tooltip_index__WEBPACK_IMPORTED_MODULE_32__["VCLTooltipModule"]; });

/* harmony import */ var _table_index__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./table/index */ "./lib/ng-vcl/src/table/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTableModule", function() { return _table_index__WEBPACK_IMPORTED_MODULE_33__["VCLTableModule"]; });

/* harmony import */ var _password_input_index__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./password-input/index */ "./lib/ng-vcl/src/password-input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputComponent", function() { return _password_input_index__WEBPACK_IMPORTED_MODULE_34__["PasswordInputComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputDirective", function() { return _password_input_index__WEBPACK_IMPORTED_MODULE_34__["PasswordInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLPasswordInputModule", function() { return _password_input_index__WEBPACK_IMPORTED_MODULE_34__["VCLPasswordInputModule"]; });

/* harmony import */ var _zoom_box_index__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./zoom-box/index */ "./lib/ng-vcl/src/zoom-box/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLZoomBoxModule", function() { return _zoom_box_index__WEBPACK_IMPORTED_MODULE_35__["VCLZoomBoxModule"]; });

/* harmony import */ var _notification_index__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./notification/index */ "./lib/ng-vcl/src/notification/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLNotificationModule", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["VCLNotificationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationTypeFromString", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["notificationTypeFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationIconFromType", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["notificationIconFromType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationStyleClassFromType", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["notificationStyleClassFromType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlign", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["FlexAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["TextAlign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _notification_index__WEBPACK_IMPORTED_MODULE_36__["IconType"]; });

/* harmony import */ var _gallery_index__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./gallery/index */ "./lib/ng-vcl/src/gallery/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GALLERY_ANIMATIONS", function() { return _gallery_index__WEBPACK_IMPORTED_MODULE_37__["GALLERY_ANIMATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLGalleryModule", function() { return _gallery_index__WEBPACK_IMPORTED_MODULE_37__["VCLGalleryModule"]; });

/* harmony import */ var _badge_index__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./badge/index */ "./lib/ng-vcl/src/badge/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLBadgeModule", function() { return _badge_index__WEBPACK_IMPORTED_MODULE_38__["VCLBadgeModule"]; });

/* harmony import */ var _embedded_input_group_index__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./embedded-input-group/index */ "./lib/ng-vcl/src/embedded-input-group/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLEmbeddedInputGroupModule", function() { return _embedded_input_group_index__WEBPACK_IMPORTED_MODULE_39__["VCLEmbeddedInputGroupModule"]; });

/* harmony import */ var _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./autocomplete/index */ "./lib/ng-vcl/src/autocomplete/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__["AutocompleteComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteItemComponent", function() { return _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__["AutocompleteItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteSeperatorComponent", function() { return _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__["AutocompleteSeperatorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteHeaderComponent", function() { return _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__["AutocompleteHeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteInputDirective", function() { return _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__["AutocompleteInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLAutocompleteModule", function() { return _autocomplete_index__WEBPACK_IMPORTED_MODULE_40__["VCLAutocompleteModule"]; });

/* harmony import */ var _tour_index__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./tour/index */ "./lib/ng-vcl/src/tour/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return _tour_index__WEBPACK_IMPORTED_MODULE_41__["TourService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourOptions", function() { return _tour_index__WEBPACK_IMPORTED_MODULE_41__["TourOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourComponent", function() { return _tour_index__WEBPACK_IMPORTED_MODULE_41__["TourComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLTourModule", function() { return _tour_index__WEBPACK_IMPORTED_MODULE_41__["VCLTourModule"]; });

/* harmony import */ var _rating_index__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./rating/index */ "./lib/ng-vcl/src/rating/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCLRatingModule", function() { return _rating_index__WEBPACK_IMPORTED_MODULE_42__["VCLRatingModule"]; });

/*
 * Public API Surface of ng-vcl
 */













































/***/ }),

/***/ "./lib/ng-vcl/src/radio-button/index.ts":
/*!**********************************************!*\
  !*** ./lib/ng-vcl/src/radio-button/index.ts ***!
  \**********************************************/
/*! exports provided: RadioButtonComponent, RadioGroupComponent, VCLRadioButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLRadioButtonModule", function() { return VCLRadioButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _radio_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-button.component */ "./lib/ng-vcl/src/radio-button/radio-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button_component__WEBPACK_IMPORTED_MODULE_4__["RadioButtonComponent"]; });

/* harmony import */ var _radio_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-group.component */ "./lib/ng-vcl/src/radio-button/radio-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return _radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"]; });

/* harmony import */ var _form_control_label_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-control-label/index */ "./lib/ng-vcl/src/form-control-label/index.ts");








var VCLRadioButtonModule = /** @class */ (function () {
    function VCLRadioButtonModule() {
    }
    VCLRadioButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _icon_index__WEBPACK_IMPORTED_MODULE_3__["VCLIconModule"], _form_control_label_index__WEBPACK_IMPORTED_MODULE_6__["VCLFormControlLabelModule"]],
            exports: [_radio_button_component__WEBPACK_IMPORTED_MODULE_4__["RadioButtonComponent"], _radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"]],
            declarations: [_radio_button_component__WEBPACK_IMPORTED_MODULE_4__["RadioButtonComponent"], _radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"]]
        })
    ], VCLRadioButtonModule);
    return VCLRadioButtonModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/radio-button/radio-button.component.html":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/radio-button/radio-button.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icon [icon]=\"checked ? 'vcl:circle-checked' : 'vcl:circle'\"></vcl-icon>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/radio-button/radio-button.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/radio-button/radio-button.component.ts ***!
  \***************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, RADIO_BUTTON_OBSERVER_TOKEN, RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTON_OBSERVER_TOKEN", function() { return RADIO_BUTTON_OBSERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_control_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-control-label */ "./lib/ng-vcl/src/form-control-label/index.ts");




// import { RadioButtonParent, RADIO_BUTTON_PARENT_TOKEN } from './interfaces';
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioButtonComponent; }),
    multi: true
};
var RADIO_BUTTON_OBSERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('vcl_radio_button_observer');
var UNIQUE_ID = 0;
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent(cdRef, radioButtonObserver) {
        this.cdRef = cdRef;
        this.radioButtonObserver = radioButtonObserver;
        this.generatedId = 'vcl_radiobutton_' + UNIQUE_ID++;
        this._disabled = false;
        this.classVCLCheckbox = true;
        this.attrRole = 'radio';
        this.tabindex = 0;
        this.disabled = false;
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
        this.formDisabled = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioButtonComponent_1 = RadioButtonComponent;
    Object.defineProperty(RadioButtonComponent.prototype, "elementId", {
        get: function () {
            return this.id || this.generatedId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "attrAriaChecked", {
        get: function () {
            return this.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "attrAriaDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "isDisabled", {
        get: function () {
            return this._disabled || this.formDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.notifyFormControlLabelClick = function (event) {
        this.setCheckedUserInteraction();
    };
    RadioButtonComponent.prototype.onKeyup = function (e) {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                this.setCheckedUserInteraction();
                break;
        }
    };
    RadioButtonComponent.prototype.onClick = function (e) {
        e.preventDefault();
        this.setCheckedUserInteraction();
    };
    RadioButtonComponent.prototype.onBlur = function () {
        this.radioButtonObserver && this.radioButtonObserver.notifyRadioButtonBlur(this);
        this.onTouched();
    };
    RadioButtonComponent.prototype.setCheckedUserInteraction = function () {
        if (this.isDisabled) {
            return;
        }
        this.radioButtonObserver && this.radioButtonObserver.notifyRadioButtonChecked(this);
        // radio-buttons cannot be 'unchecked' by definition from user interaction
        this.checked = true;
        this.cdRef.markForCheck();
        this.onTouched();
        this.onChange(this.checked);
        this.checkedChange.emit(this.checked);
    };
    RadioButtonComponent.prototype.setChecked = function (checked) {
        this.checked = checked;
        this.cdRef.markForCheck();
        this.onTouched();
        this.onChange(this.checked);
        this.checkedChange.emit(this.checked);
    };
    RadioButtonComponent.prototype.setDisabled = function (disabled) {
        this._disabled = disabled;
        this.cdRef.markForCheck();
    };
    RadioButtonComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
        this.cdRef.markForCheck();
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioButtonComponent.prototype.setDisabledState = function (disabled) {
        this.formDisabled = disabled;
        this.cdRef.markForCheck();
    };
    var RadioButtonComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadioButtonComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioButtonComponent.prototype, "elementId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclRadioButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "classVCLCheckbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "attrRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-checked'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioButtonComponent.prototype, "attrAriaChecked", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioButtonComponent.prototype, "attrAriaDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioButtonComponent.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioButtonComponent.prototype, "checkedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RadioButtonComponent.prototype, "onKeyup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RadioButtonComponent.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RadioButtonComponent.prototype, "onBlur", null);
    RadioButtonComponent = RadioButtonComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-radio-button',
            template: __webpack_require__(/*! ./radio-button.component.html */ "./lib/ng-vcl/src/radio-button/radio-button.component.html"),
            providers: [
                CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                {
                    provide: _form_control_label__WEBPACK_IMPORTED_MODULE_3__["FORM_CONTROL_LABEL_MEMBER_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioButtonComponent_1; })
                },
            ],
            // changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'vclCheckbox',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RADIO_BUTTON_OBSERVER_TOKEN)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/radio-button/radio-group.component.ts":
/*!**************************************************************!*\
  !*** ./lib/ng-vcl/src/radio-button/radio-group.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectionMode, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, RadioGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return SelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return RadioGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _radio_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-button.component */ "./lib/ng-vcl/src/radio-button/radio-button.component.ts");





var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = /** @class */ (function () {
    function RadioGroupComponent() {
        this._disabled = false;
        this.attrRole = 'radiogroup';
        // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
        this.formDisabled = false;
        /**
        * things needed for ControlValueAccessor-Interface
        */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioGroupComponent_1 = RadioGroupComponent;
    Object.defineProperty(RadioGroupComponent.prototype, "disabled", {
        set: function (disabled) {
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupComponent.prototype, "isDisabled", {
        get: function () {
            return this._disabled || this.formDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupComponent.prototype.syncRadioButtons = function () {
        var _this = this;
        if (!this.radioButtons) {
            return;
        }
        this.radioButtons.forEach(function (rbtn, idx) {
            var value = rbtn.value === undefined ? idx : rbtn.value;
            rbtn.setChecked(_this.value === value);
            rbtn.setDisabled(_this.isDisabled);
        });
    };
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Syncs changed radio buttons checked state to be in line with the current group value
        this.radioButtonsSub = this.radioButtons.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(function () {
            if (_this.radioButtons) {
                _this.syncRadioButtons();
            }
        });
    };
    RadioGroupComponent.prototype.notifyRadioButtonChecked = function (rb) {
        this.value = rb.value;
        this.syncRadioButtons();
        this.onChange(this.value);
        this.onTouched();
    };
    RadioGroupComponent.prototype.notifyRadioButtonBlur = function (rb) {
        if (this.radioButtons.last === rb) {
            this.onTouched();
        }
    };
    RadioGroupComponent.prototype.ngOnDestroy = function () {
        this.radioButtonsSub && this.radioButtonsSub.unsubscribe();
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.syncRadioButtons();
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioGroupComponent.prototype.setDisabledState = function (disabled) {
        this.formDisabled = disabled;
    };
    var RadioGroupComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioGroupComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioGroupComponent.prototype, "attrRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_radio_button_component__WEBPACK_IMPORTED_MODULE_4__["RadioButtonComponent"], {
            descendants: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], RadioGroupComponent.prototype, "radioButtons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], RadioGroupComponent.prototype, "disabled", null);
    RadioGroupComponent = RadioGroupComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-radio-group',
            template: "<ng-content></ng-content>",
            providers: [
                CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                {
                    provide: _radio_button_component__WEBPACK_IMPORTED_MODULE_4__["RADIO_BUTTON_OBSERVER_TOKEN"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioGroupComponent_1; })
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/rating/index.ts":
/*!****************************************!*\
  !*** ./lib/ng-vcl/src/rating/index.ts ***!
  \****************************************/
/*! exports provided: VCLRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLRatingModule", function() { return VCLRatingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.component */ "./lib/ng-vcl/src/rating/rating.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var VCLRatingModule = /** @class */ (function () {
    function VCLRatingModule() {
    }
    VCLRatingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]],
            declarations: [_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]],
            providers: [],
        })
    ], VCLRatingModule);
    return VCLRatingModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/rating/rating.component.html":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/rating/rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"type === 'horizontal' || type === 'vertical'\">\n  <span class=\"vclRating\"\n        [class.vclDisabled]=\"disabled\"\n        [class.vclRatingVertical]=\"type === 'vertical'\"\n        style=\"height: unset\">\n    <span *ngFor=\"let star of starArray\"\n          [ngClass]=\"getIcon(star)\"\n          [attr.tabindex]=\"readonly ? undefined : 0\"\n          (mousedown)=\"clickStar(star)\"\n          [ngStyle]=\"{'font-size': iconSize}\">\n    </span>\n  </span>\n</ng-container>\n<ng-container *ngIf=\"type === 'small'\">\n  <span class=\"vclRating\" [class.vclDisabled]=\"disabled\" style=\"height: unset\">\n    <span [ngClass]=\"getIcon(0, true)\" [ngStyle]=\"{'font-size': iconSize}\">\n    </span>\n    <strong *ngIf=\"showText\" [ngStyle]=\"{'font-size': textSize}\">{{ value }}</strong>\n  </span>\n</ng-container>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/rating/rating.component.ts":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/rating/rating.component.ts ***!
  \***************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.type = 'horizontal';
        this.fullStar = 'fas fa-star';
        this.halfStar = 'fas fa-star-half-alt';
        this.emptyStar = 'fas fa-star';
        this.starCount = 5;
        this.halves = true;
        this.value = 0;
        this.readonly = false;
        this.iconSize = undefined;
        this.textSize = undefined;
        this.showText = true;
        this.disabled = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    RatingComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    RatingComponent.prototype.clickStar = function (star) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.value = star;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    RatingComponent.prototype.isHalfStar = function (star) {
        return this.halves ? (Math.round(this.value * 2) / 2) === star - 0.5 : false;
    };
    RatingComponent.prototype.round = function (x) {
        return Math.round(x);
    };
    RatingComponent.prototype.getIcon = function (stars, small) {
        if (small === void 0) { small = false; }
        var classes = [
            'vclRatingItem',
            'vclIcon'
        ];
        if (small) {
            if (this.value >= this.starCount) {
                classes.push.apply(classes, this.fullStar.split(' '));
            }
            else if (this.value >= this.starCount / 2 && this.value < this.starCount) {
                classes.push.apply(classes, this.halfStar.split(' '));
            }
            else {
                classes.push.apply(classes, this.emptyStar.split(' '));
            }
        }
        else {
            if (this.round(this.value) >= stars && !this.isHalfStar(stars)) {
                classes.push.apply(classes, this.fullStar.split(' '));
            }
            else if (this.isHalfStar(stars)) {
                classes.push.apply(classes, this.halfStar.split(' '));
            }
            else {
                classes.push.apply(classes, this.emptyStar.split(' '));
            }
        }
        return classes;
    };
    Object.defineProperty(RatingComponent.prototype, "starArray", {
        get: function () {
            return Array(this.starCount).fill(0).map(function (x, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RatingComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "fullStar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "halfStar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "emptyStar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "starCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "halves", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RatingComponent.prototype, "iconSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RatingComponent.prototype, "textSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "showText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RatingComponent.prototype, "onBlur", null);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./lib/ng-vcl/src/rating/rating.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            styles: ["\n      .vclRatingVertical {\n        flex-direction: column;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/select/index.ts":
/*!****************************************!*\
  !*** ./lib/ng-vcl/src/select/index.ts ***!
  \****************************************/
/*! exports provided: SelectComponent, SelectOptionDirective, DropDirection, VCLSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLSelectModule", function() { return VCLSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown/index */ "./lib/ng-vcl/src/dropdown/index.ts");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _off_click_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../off-click/index */ "./lib/ng-vcl/src/off-click/index.ts");
/* harmony import */ var _popover_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/index */ "./lib/ng-vcl/src/popover/index.ts");
/* harmony import */ var _token_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../token/index */ "./lib/ng-vcl/src/token/index.ts");
/* harmony import */ var _select_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-option.component */ "./lib/ng-vcl/src/select/select-option.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectOptionDirective", function() { return _select_option_component__WEBPACK_IMPORTED_MODULE_8__["SelectOptionDirective"]; });

/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select.component */ "./lib/ng-vcl/src/select/select.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return _select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDirection", function() { return _select_component__WEBPACK_IMPORTED_MODULE_9__["DropDirection"]; });












var VCLSelectModule = /** @class */ (function () {
    function VCLSelectModule() {
    }
    VCLSelectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dropdown_index__WEBPACK_IMPORTED_MODULE_3__["VCLDropdownModule"], _button_index__WEBPACK_IMPORTED_MODULE_4__["VCLButtonModule"], _off_click_index__WEBPACK_IMPORTED_MODULE_5__["VCLOffClickModule"], _popover_index__WEBPACK_IMPORTED_MODULE_6__["VCLPopoverModule"], _token_index__WEBPACK_IMPORTED_MODULE_7__["VCLTokenModule"]],
            exports: [_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"], _select_option_component__WEBPACK_IMPORTED_MODULE_8__["SelectOptionDirective"]],
            declarations: [_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"], _select_option_component__WEBPACK_IMPORTED_MODULE_8__["SelectOptionDirective"]],
            providers: []
        })
    ], VCLSelectModule);
    return VCLSelectModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/select/select-option.component.ts":
/*!**********************************************************!*\
  !*** ./lib/ng-vcl/src/select/select-option.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectOptionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionDirective", function() { return SelectOptionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectOptionDirective = /** @class */ (function () {
    function SelectOptionDirective() {
        this.disabled = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SelectOptionDirective.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectOptionDirective.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectOptionDirective.prototype, "sublabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectOptionDirective.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectOptionDirective.prototype, "prepIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectOptionDirective.prototype, "appIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectOptionDirective.prototype, "appIconSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectOptionDirective.prototype, "prepIconSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectOptionDirective.prototype, "disabled", void 0);
    SelectOptionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'vcl-select-option'
        })
    ], SelectOptionDirective);
    return SelectOptionDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/select/select.component.html":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/select/select.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (offClick)=\"close()\">\n  <div\n    #select\n    class=\"vclSelect vclInputGroupEmb\"\n    [style.marginBottom]=\"0\"\n    >\n    <div *ngIf=\"showDisplayValue\" class=\"vclInput vclReadonly vclAppItem\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle()\">\n      {{displayValue}}\n    </div>\n    <div *ngIf=\"!showDisplayValue\" class=\"vclInput vclReadonly vclTokenInput vclLayoutWrap\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle()\">\n      <vcl-token-list [disabled]=\"disabled\">\n        <vcl-token *ngFor=\"let item of selectedItems\" [label]=\"item.label\" [removable]=\"true\" (remove)=\"deselectItem(item.metaItem)\"></vcl-token>\n      </vcl-token-list>\n    </div>\n\n    <button vcl-icon-button\n      [disabled]=\"disabled\"\n      type=\"button\"\n      tabindex=\"-1\"\n      class=\"vclAppended\"\n      [icon]=\"expanded ? expandedIcon : collapsedIcon\"\n      (click)=\"toggle()\">\n    </button>\n  </div>\n\n  <vcl-dropdown\n      #dropdown\n      tabindex=\"-1\"\n      [disabled]=\"disabled\"\n      [expanded]=\"expanded\"\n      [value]=\"value\"\n      [mode]=\"mode\"\n      [maxSelectableItems]=\"maxSelectableItems\"\n      [style.position]=\"'relative'\"\n      [style.top.px]=\"dropdownTop\"\n      [style.width]=\"'100%'\"\n      [style.position]=\"'absolute'\"\n      [style.zIndex]=\"zIndex\"\n      (change)=\"onDropdownChange($event)\"\n      (itemsChange)=\"onItemsChange()\"\n  >\n    <vcl-dropdown-option\n      *ngFor=\"let item of items\"\n      [metadata]=\"item\"\n      [value]=\"item.value\"\n      [disabled]=\"disabled || item.disabled\"\n      [label]=\"item.label\"\n      [sublabel]=\"item.sublabel\"\n      [prepIcon]=\"item.prepIcon\"\n      [appIcon]=\"item.appIcon\"\n      [appIconSrc]=\"item.appIconSrc\"\n      [prepIconSrc]=\"item.prepIconSrc\"\n      >\n    </vcl-dropdown-option>\n  </vcl-dropdown>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/select/select.component.ts":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/select/select.component.ts ***!
  \***************************************************/
/*! exports provided: DropDirection, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDirection", function() { return DropDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dropdown_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown/index */ "./lib/ng-vcl/src/dropdown/index.ts");
/* harmony import */ var _select_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-option.component */ "./lib/ng-vcl/src/select/select-option.component.ts");





var DropDirection;
(function (DropDirection) {
    DropDirection[DropDirection["Top"] = 0] = "Top";
    DropDirection[DropDirection["Bottom"] = 1] = "Bottom";
})(DropDirection || (DropDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.debug = false;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.mode = 'single';
        this.placeholder = 'Select value';
        this.tabindex = 0;
        this.expanded = false;
        this.zIndex = 999999;
        this.disabled = false;
        this.listenKeys = true;
        // styling
        this.expandedIcon = 'fas:chevron-up';
        this.collapsedIcon = 'fas:chevron-down';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focused = false;
        this.dropdownTop = -1;
        this.selectedItems = [];
        /**
         * Things needed for ControlValueAccessor-Interface.
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    SelectComponent_1 = SelectComponent;
    SelectComponent.prototype.ngAfterViewInit = function () {
        var tag = SelectComponent_1.Tag + ".ngAfterViewInit()";
        var debug = this.debug || false;
        if (debug) {
            console.log(tag);
        }
        this.onItemsChange();
    };
    SelectComponent.prototype.keydown = function (ev) {
        if (this.listenKeys) {
            var prevent = true;
            switch (ev.code) {
                case 'ArrowDown':
                    if (this.expanded) {
                        this.dropdown.onMetalistKeydown(ev);
                        // this.dropdown.metalist.markNext();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'ArrowUp':
                    if (this.expanded) {
                        this.dropdown.onMetalistKeydown(ev);
                        // this.dropdown.metalist.markPrev();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'Enter':
                    if (this.expanded) {
                        this.dropdown.onMetalistKeydown(ev);
                        // this.dropdown.metalist.selectMarked();
                        // this.cdRef.detectChanges();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'Space':
                    this.toggle();
                    break;
                case 'Tab':
                    this.close();
                    break;
                case 'Escape':
                    this.close();
                    break;
                default:
                    prevent = false;
            }
            prevent && ev.preventDefault();
        }
    };
    SelectComponent.prototype.reFocus = function () {
        this.elementRef.nativeElement.focus();
    };
    SelectComponent.prototype.onFocus = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.focused = true;
                return [2 /*return*/];
            });
        });
    };
    SelectComponent.prototype.onBlur = function (event) {
        var _this = this;
        // When the element loses focus, the dropdown should close
        // Only close when the active element is not a child element of the select component
        setTimeout(function () {
            var target = typeof document !== undefined && document.activeElement;
            var nativeElement = _this.elementRef && _this.elementRef.nativeElement;
            if (target && nativeElement && !_this.elementRef.nativeElement.contains(target)) {
                _this.close();
                _this.cdRef.markForCheck();
            }
        }, 1);
        this.focused = false;
        this.onTouched();
    };
    SelectComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        if (!this.expanded) {
            this.open();
        }
        else {
            this.close();
        }
    };
    SelectComponent.prototype.close = function () {
        this.expanded = false;
    };
    Object.defineProperty(SelectComponent.prototype, "showDisplayValue", {
        get: function () {
            return this.mode === 'single' || this.selectedItems.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.open = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tag, debug, position, clientHeight, screenHeight, spaceBottom, spaceTop, dropDirection;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = SelectComponent_1.Tag + ".open()";
                        debug = this.debug || false;
                        this.expanded = true;
                        position = this.elementRef.nativeElement.getBoundingClientRect();
                        if (this.debug) {
                            console.log(tag, 'position:', position);
                        }
                        clientHeight = document.documentElement ? document.documentElement.clientHeight : undefined;
                        screenHeight = window.innerHeight
                            || clientHeight
                            || document.body.clientHeight;
                        if (this.debug) {
                            console.log(tag, 'screenHeight:', screenHeight);
                        }
                        spaceBottom = screenHeight - position.bottom;
                        if (this.debug) {
                            console.log(tag, 'spaceBottom:', spaceBottom);
                        }
                        spaceTop = position.top;
                        if (this.debug) {
                            console.log(tag, 'spaceTop:', spaceTop);
                        }
                        dropDirection = (this.dropDirection === DropDirection.Top ||
                            this.dropDirection === DropDirection.Bottom) ? this.dropDirection :
                            (spaceBottom < spaceTop) ? DropDirection.Top : DropDirection.Bottom;
                        if (this.debug) {
                            console.log(tag, 'dropDirection:', DropDirection[dropDirection]);
                        }
                        // Wait for the dropdown to be rendered, so the offsetHeight can be determined
                        return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 0); })];
                    case 1:
                        // Wait for the dropdown to be rendered, so the offsetHeight can be determined
                        _a.sent();
                        switch (dropDirection) {
                            case DropDirection.Top:
                                this.dropdownTop = -1 *
                                    (this.dropdown.elementRef.nativeElement.children[0].offsetHeight
                                        - 1 // border
                                        + 0.3 // fix chrome ugly 1-pixel-render
                                    );
                                break;
                            case DropDirection.Bottom:
                                this.dropdownTop = -1.1
                                    + this.select.nativeElement.offsetHeight;
                                break;
                        }
                        this.cdRef.markForCheck();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectComponent.prototype.syncDisplayValue = function () {
        var items = ((this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || []);
        this.selectedItems = items.map(function (_item) {
            var label = (_item.metadata && _item.metadata.metadata && _item.metadata.metadata.label) || String(_item.value);
            return {
                label: label,
                metaItem: _item
            };
        });
        var item = this.selectedItems[0];
        if (item) {
            this.displayValue = item.label;
        }
        else {
            this.displayValue = this.placeholder;
        }
    };
    SelectComponent.prototype.deselectItem = function (item) {
        this.dropdown.metalist.deselect(item);
    };
    SelectComponent.prototype.onItemsChange = function () {
        this.syncDisplayValue();
        this.cdRef.detectChanges();
        this.cdRef.markForCheck();
    };
    SelectComponent.prototype.onDropdownChange = function (value) {
        var _this = this;
        if (this.mode === 'single') {
            this.close();
        }
        this.syncDisplayValue();
        // propagate value change
        this.change.emit(value);
        // propagate form-change
        this.onChange(value);
        // refocus
        setTimeout(function () { return _this.reFocus(); }, 0);
    };
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.dropdown.writeValue(value);
        this.syncDisplayValue();
        this.cdRef.markForCheck();
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    var SelectComponent_1;
    SelectComponent.Tag = 'SelectComponent';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "debug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropdown'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dropdown_index__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"])
    ], SelectComponent.prototype, "dropdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_select_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectOptionDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SelectComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('select'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "zIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "listenKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SelectComponent.prototype, "maxSelectableItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "expandedIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "collapsedIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SelectComponent.prototype, "dropDirection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SelectComponent.prototype, "keydown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
    ], SelectComponent.prototype, "onFocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SelectComponent.prototype, "onBlur", null);
    SelectComponent = SelectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-select',
            template: __webpack_require__(/*! ./select.component.html */ "./lib/ng-vcl/src/select/select.component.html"),
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[style.position]': '"relative"',
                '[style.display]': '"block"'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/slider/index.ts":
/*!****************************************!*\
  !*** ./lib/ng-vcl/src/slider/index.ts ***!
  \****************************************/
/*! exports provided: SliderComponent, VCLSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLSliderModule", function() { return VCLSliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider.component */ "./lib/ng-vcl/src/slider/slider.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return _slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]; });






var VCLSliderModule = /** @class */ (function () {
    function VCLSliderModule() {
    }
    VCLSliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]],
            declarations: [_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]],
            providers: [],
        })
    ], VCLSliderModule);
    return VCLSliderModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclSliderRail\">\n  <div class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\" #scale>\n    <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointMark\"></div>\n  </div>\n  <div *ngIf=\"valueValid\" class=\"vclSliderKnobContainer\" [style.left]=\"percentLeftKnob + '%'\" (pan)=\"onPan($event)\">\n    <div  class=\"vclSliderKnob\"></div>\n  </div>\n</div>\n<div *ngIf=\"showScale\" class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\">\n  <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointLabel\" (click)=\"selectPoint(point)\">{{point.label}}</div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: MoveDirection, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveDirection", function() { return MoveDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["Left"] = 0] = "Left";
    MoveDirection[MoveDirection["Right"] = 1] = "Right";
})(MoveDirection || (MoveDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.value = 0;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabled = false;
        this.min = 0;
        this.max = 10;
        this.mousewheel = false;
        this.lock = false;
        this.focused = false;
        this.percentLeftKnob = 0;
        this.scalePoints = [];
        this.firstPan = true;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(SliderComponent.prototype, "pmin", {
        get: function () {
            var min = Number(this.min);
            return !isNaN(min) ? min : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "pmax", {
        get: function () {
            var max = Number(this.max);
            return !isNaN(max) ? max : 0;
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
    };
    Object.defineProperty(SliderComponent.prototype, "valueValid", {
        get: function () {
            return this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.validateValue = function (value) {
        return typeof this.value === 'number' && this.value >= this.pmin && this.value <= this.pmax;
    };
    Object.defineProperty(SliderComponent.prototype, "showScale", {
        get: function () {
            return Array.isArray(this.scale) || (typeof this.scale === 'boolean' && this.scale);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if ('min' in changes || 'max' in changes || 'scale' in changes) {
            this.updateScalePoints();
        }
        if ('value' in changes) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
        }
    };
    SliderComponent.prototype.setValue = function (value, updateKnob) {
        this.value = Number(value);
        if (updateKnob) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(value);
        }
        this.valueChange.emit(this.value);
        this.onChange(this.value);
    };
    SliderComponent.prototype.calculatePercentLeftKnob = function (value) {
        if (!this.validateValue(value)) {
            return 0;
        }
        var rangeLength = this.pmax - this.pmin;
        var valueLeft = value - this.pmin;
        var delta = rangeLength / valueLeft;
        return 100 / delta;
    };
    SliderComponent.prototype.percentToValue = function (per) {
        var rangeLength = this.pmax - this.pmin;
        var newVal = (rangeLength / 100) * per;
        return Math.round(newVal);
    };
    SliderComponent.prototype.updateScalePoints = function () {
        var _this = this;
        if (Array.isArray(this.scale)) {
            var steps_1 = this.scale.length;
            this.scalePoints = this.scale.map(function (label, idx) {
                return {
                    label: label,
                    percent: (100 / (steps_1 - 1)) * idx
                };
            });
        }
        else {
            var steps_2;
            if (typeof this.scale === 'number') {
                steps_2 = this.scale;
            }
            else {
                steps_2 = this.pmax - this.pmin + 1;
            }
            this.scalePoints = Array.from(Array(steps_2).keys()).map(function (i) {
                var percent = (100 / (steps_2 - 1)) * i;
                return {
                    label: _this.percentToValue(percent).toString(),
                    percent: percent
                };
            });
        }
    };
    SliderComponent.prototype.closestScalePoint = function (percentValue) {
        var closest = this.scalePoints[0];
        var dist = 100;
        this.scalePoints.forEach(function (sP) {
            var pDist = Math.abs(sP.percent - percentValue);
            if (pDist < dist) {
                closest = sP;
                dist = pDist;
            }
        });
        return closest.percent;
    };
    SliderComponent.prototype.deltaPxToPercent = function (deltaPx) {
        var fullPx = this.scaleElement.nativeElement.offsetWidth;
        var deltaPer = 100 / (fullPx / deltaPx);
        return Math.round(deltaPer * 100) / 100; // round 2 decs
    };
    SliderComponent.prototype.onFocus = function () {
        this.focused = true;
    };
    SliderComponent.prototype.onBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    /**
     * clicking the rail should also reposition the bar
     */
    SliderComponent.prototype.onTap = function (event) {
        if (this.disabled || event.target.className === 'vclSliderKnob') {
            return;
        }
        var railX = event.changedPointers[0].offsetX;
        if (railX <= 0) {
            return;
        }
        var percentLeftKnob = this.deltaPxToPercent(railX);
        this.percentLeftKnob = this.lock ? this.closestScalePoint(percentLeftKnob) : percentLeftKnob;
        var value = this.percentToValue(this.percentLeftKnob);
        this.setValue(value, false);
    };
    SliderComponent.prototype.selectPoint = function (p) {
        var value = this.percentToValue(p.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.move = function (direction) {
        if (this.lock) {
            this.moveToPoint(direction);
        }
        else {
            this.moveValue(direction);
        }
    };
    SliderComponent.prototype.moveToPoint = function (direction) {
        var currentPointValue = this.closestScalePoint(this.calculatePercentLeftKnob(this.value));
        var currentPoint = this.scalePoints.find(function (p) { return p.percent === currentPointValue; });
        var i = currentPoint ? this.scalePoints.indexOf(currentPoint) : 0;
        var nextPoint;
        if (direction === MoveDirection.Right) {
            i++;
            if (i >= this.scalePoints.length) {
                i = this.scalePoints.length - 1;
            }
            nextPoint = this.scalePoints[i];
        }
        else {
            i--;
            if (i < 0) {
                i = 0;
            }
            nextPoint = this.scalePoints[i];
        }
        var value = this.percentToValue(nextPoint.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.moveValue = function (direction) {
        var value = this.valueValid ? this.value : this.pmin;
        if (direction === MoveDirection.Right) {
            value++;
            if (value > this.pmax) {
                value = this.pmax;
            }
        }
        else {
            value--;
            if (value < this.pmin) {
                value = this.pmin;
            }
        }
        this.setValue(value, true);
    };
    SliderComponent.prototype.onWheel = function (ev) {
        if (this.disabled || !this.mousewheel) {
            return;
        }
        if (ev.deltaY < 0) {
            this.move(MoveDirection.Right);
            ev.preventDefault();
        }
        else if (ev.deltaY > 0) {
            this.move(MoveDirection.Left);
            ev.preventDefault();
        }
    };
    SliderComponent.prototype.keydown = function (ev) {
        if (this.disabled) {
            return;
        }
        switch (ev.code) {
            case 'ArrowLeft':
                this.move(MoveDirection.Left);
                ev.preventDefault();
                break;
            case 'ArrowRight':
                this.move(MoveDirection.Right);
                ev.preventDefault();
                break;
            case 'Space':
                this.moveToPoint(MoveDirection.Right);
                ev.preventDefault();
                break;
        }
    };
    SliderComponent.prototype.onPan = function (ev) {
        if (this.disabled) {
            return;
        }
        if (this.firstPan) {
            this.firstPan = false;
            this.lastPercentLeftKnob = this.percentLeftKnob;
        }
        var deltaPx = ev.deltaX;
        var percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
        if (percentLeftKnob < 0) {
            percentLeftKnob = 0;
        }
        else if (percentLeftKnob > 100) {
            percentLeftKnob = 100;
        }
        if (this.lock) {
            this.percentLeftKnob = this.closestScalePoint(percentLeftKnob);
        }
        else {
            var newValue = this.percentToValue(percentLeftKnob);
            this.percentLeftKnob = this.calculatePercentLeftKnob(newValue);
        }
        if (ev.isFinal) {
            this.firstPan = true;
            var value = this.percentToValue(this.percentLeftKnob);
            this.setValue(value, false);
        }
    };
    SliderComponent.prototype.writeValue = function (value) {
        this.setValue(value, true);
        this.cdRef.markForCheck();
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "mousewheel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "lock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclFocused'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "focused", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scale'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SliderComponent.prototype, "scaleElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SliderComponent.prototype, "onFocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SliderComponent.prototype, "onBlur", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('tap', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SliderComponent.prototype, "onTap", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('wheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SliderComponent.prototype, "onWheel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SliderComponent.prototype, "keydown", null);
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./lib/ng-vcl/src/slider/slider.component.html"),
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclSlider]': 'true'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tab-nav/index.ts":
/*!*****************************************!*\
  !*** ./lib/ng-vcl/src/tab-nav/index.ts ***!
  \*****************************************/
/*! exports provided: VCLTabNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTabNavModule", function() { return VCLTabNavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tab_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-nav.component */ "./lib/ng-vcl/src/tab-nav/tab-nav.component.ts");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.component */ "./lib/ng-vcl/src/tab-nav/tab.component.ts");
/* harmony import */ var _wormhole_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wormhole/index */ "./lib/ng-vcl/src/wormhole/index.ts");






var VCLTabNavModule = /** @class */ (function () {
    function VCLTabNavModule() {
    }
    VCLTabNavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _wormhole_index__WEBPACK_IMPORTED_MODULE_5__["VCLWormholeModule"]],
            exports: [_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"], _tab_component__WEBPACK_IMPORTED_MODULE_4__["TabLabelDirective"], _tab_nav_component__WEBPACK_IMPORTED_MODULE_3__["TabNavComponent"]],
            declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"], _tab_component__WEBPACK_IMPORTED_MODULE_4__["TabLabelDirective"], _tab_nav_component__WEBPACK_IMPORTED_MODULE_3__["TabNavComponent"]],
            providers: [],
        })
    ], VCLTabNavModule);
    return VCLTabNavModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tab-nav/tab-nav.component.html":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/tab-nav/tab-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclTabbable {{tabbableClass}}\"\n     [class.vclTabsLeft]=\"layout==='left'\"\n     [class.vclTabsRight]=\"layout==='right'\">\n  <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\">\n    <div *ngFor=\"let tab of tabs; let i = index\"\n         class=\"vclTab {{tab.tabClass}}\" \n         role=\"tab\"\n         [class.vclDisabled]=\"tab.disabled\"\n         [class.vclSelected]=\"selectedTabIndex===i\"\n         [class.aria-selected]=\"selectedTabIndex===i\"\n         (click)=\"onTabClick(tab)\">\n        <span class=\"vclTabLabel\"> \n          <wormhole [connect]=\"tab.label\"></wormhole>\n        </span>\n    </div>\n  </div>\n  <div [style.display]=\"hideContent === true ? 'none' : null\" class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\">\n      <div role=\"tabpanel\" class=\"vclTabPanel\">\n          <div #tabContent></div>\n    </div>\n    <div role=\"tabpanel\" class=\"vclTabPanel\">\n        <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/tab-nav/tab-nav.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/tab-nav/tab-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: TabNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavComponent", function() { return TabNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wormhole_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../wormhole/index */ "./lib/ng-vcl/src/wormhole/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.component */ "./lib/ng-vcl/src/tab-nav/tab.component.ts");





var TabNavComponent = /** @class */ (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        this.hideContent = false;
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    Object.defineProperty(TabNavComponent.prototype, "tabContent", {
        set: function (tabContent) {
            if (tabContent) {
                this.wormholeHost = new _wormhole_index__WEBPACK_IMPORTED_MODULE_1__["WormholeHost"](tabContent);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a valid selectedTabIndex
    TabNavComponent.prototype.selectTab = function (tab) {
        if (!this.tabs) {
            return;
        }
        var tabs = this.tabs.toArray();
        var tabIdx;
        var tabComp;
        if (tab instanceof _tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"]) {
            tabIdx = tabs.indexOf(tab);
            tabComp = tab;
        }
        else if (typeof tab === 'number' && tabs[tab]) {
            tabIdx = tab;
            tabComp = tabs[tabIdx];
        }
        else {
            tabIdx = -1;
            tabComp = null;
        }
        if (tabIdx >= 0 && tabComp instanceof _tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"] && !tabComp.disabled) {
            if (this.wormholeHost) {
                this.wormholeHost.clearWormholes();
                this.wormholeHost.connectWormhole(tabComp.content);
            }
            this.selectedTabIndex = tabIdx;
        }
    };
    TabNavComponent.prototype.onTabClick = function (tab) {
        this.selectTab(tab);
        this.selectedTabIndexChange$.emit(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngAfterContentInit = function () {
        this.selectTab(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngOnDestroy = function () {
        if (this.wormholeHost) {
            this.wormholeHost.clearWormholes();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]])
    ], TabNavComponent.prototype, "tabContent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], TabNavComponent.prototype, "tabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "tabbableClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "tabsClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "tabContentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "hideContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "borders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabNavComponent.prototype, "selectedTabIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabNavComponent.prototype, "selectedTabIndexChange", null);
    TabNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'vcl-tab-nav',
            template: __webpack_require__(/*! ./tab-nav.component.html */ "./lib/ng-vcl/src/tab-nav/tab-nav.component.html")
        })
    ], TabNavComponent);
    return TabNavComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tab-nav/tab.component.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/tab-nav/tab.component.ts ***!
  \*************************************************/
/*! exports provided: TabLabelDirective, TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLabelDirective", function() { return TabLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabLabelDirective = /** @class */ (function () {
    function TabLabelDirective() {
    }
    TabLabelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[vcl-tab-label]' })
    ], TabLabelDirective);
    return TabLabelDirective;
}());

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TabLabelDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", TabLabelDirective)
    ], TabComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TabComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabComponent.prototype, "tabClass", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-tab',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/components/sorticon.component.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/table/components/sorticon.component.ts ***!
  \***************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortIconComponent = /** @class */ (function () {
    function SortIconComponent(e, renderer) {
        this.e = e;
        this.renderer = renderer;
        this.sort = 0;
        this.rootElement = e;
        this.renderer.addClass(e.nativeElement, 'vclFloatRight');
        this.renderer.addClass(e.nativeElement, 'vclIcon');
        this.renderer.addClass(e.nativeElement, 'fa');
        this.ChangeSortOrder(this.sort);
    }
    SortIconComponent.prototype.ChangeSortOrder = function (order) {
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort');
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-up');
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-down');
        switch (order) {
            case 0: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-up');
                break;
            }
            case -1: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-down');
                break;
            }
            default: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort');
                break;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SortIconComponent.prototype, "sort", void 0);
    SortIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sort-icon',
            template: "<ng-content></ng-content>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SortIconComponent);
    return SortIconComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/alignmentbottom.directive.ts":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/alignmentbottom.directive.ts ***!
  \**********************************************************************/
/*! exports provided: AlignmentbottomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentbottomDirective", function() { return AlignmentbottomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/



var AlignmentbottomDirective = /** @class */ (function () {
    function AlignmentbottomDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    AlignmentbottomDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignBottom', this.align, '');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('align-bottom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlignmentbottomDirective.prototype, "align", void 0);
    AlignmentbottomDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[align-bottom]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AlignmentbottomDirective);
    return AlignmentbottomDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/alignmentcenter.directive.ts":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/alignmentcenter.directive.ts ***!
  \**********************************************************************/
/*! exports provided: AlignmentCenterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentCenterDirective", function() { return AlignmentCenterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/



var AlignmentCenterDirective = /** @class */ (function () {
    function AlignmentCenterDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    AlignmentCenterDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignCentered', this.align, 'td');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('align-center'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlignmentCenterDirective.prototype, "align", void 0);
    AlignmentCenterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[align-center]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AlignmentCenterDirective);
    return AlignmentCenterDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/alignmentmiddle.directive.ts":
/*!**********************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/alignmentmiddle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: AlignmentMiddleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentMiddleDirective", function() { return AlignmentMiddleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/



var AlignmentMiddleDirective = /** @class */ (function () {
    function AlignmentMiddleDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    AlignmentMiddleDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignMiddle', this.align, '');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('align-middle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlignmentMiddleDirective.prototype, "align", void 0);
    AlignmentMiddleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[align-middle]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AlignmentMiddleDirective);
    return AlignmentMiddleDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/alignmentright.directive.ts":
/*!*********************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/alignmentright.directive.ts ***!
  \*********************************************************************/
/*! exports provided: AlignmentRightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentRightDirective", function() { return AlignmentRightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/



var AlignmentRightDirective = /** @class */ (function () {
    function AlignmentRightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    AlignmentRightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignRight', this.align, 'td');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('align-right'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlignmentRightDirective.prototype, "align", void 0);
    AlignmentRightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[align-right]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AlignmentRightDirective);
    return AlignmentRightDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/breakingwords.directive.ts":
/*!********************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/breakingwords.directive.ts ***!
  \********************************************************************/
/*! exports provided: BreakingWordsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakingWordsDirective", function() { return BreakingWordsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Wrapping behavior

To allow breaking words of textual cell content apart, use the modifier vclBreakWords. This works best in combination with the fixed layout mode.
*/



var BreakingWordsDirective = /** @class */ (function () {
    function BreakingWordsDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    BreakingWordsDirective.prototype.ngOnChanges = function (changes) {
        if (changes.breakWords) {
            this.breakWords = this.tableService.ClassToggle('vclBreakWords', this.breakWords, '');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('break-words'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreakingWordsDirective.prototype, "breakWords", void 0);
    BreakingWordsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[break-words]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], BreakingWordsDirective);
    return BreakingWordsDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/directives.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/directives.ts ***!
  \*******************************************************/
/*! exports provided: directives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return directives; });
/* harmony import */ var _vcltable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcltable.directive */ "./lib/ng-vcl/src/table/directives/vcltable.directive.ts");
/* harmony import */ var _span_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span.directive */ "./lib/ng-vcl/src/table/directives/span.directive.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight.directive */ "./lib/ng-vcl/src/table/directives/highlight.directive.ts");
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort.directive */ "./lib/ng-vcl/src/table/directives/sort.directive.ts");
/* harmony import */ var _select_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select.directive */ "./lib/ng-vcl/src/table/directives/select.directive.ts");
/* harmony import */ var _selectable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectable.directive */ "./lib/ng-vcl/src/table/directives/selectable.directive.ts");
/* harmony import */ var _disable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disable.directive */ "./lib/ng-vcl/src/table/directives/disable.directive.ts");
/* harmony import */ var _alignmentcenter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alignmentcenter.directive */ "./lib/ng-vcl/src/table/directives/alignmentcenter.directive.ts");
/* harmony import */ var _alignmentright_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alignmentright.directive */ "./lib/ng-vcl/src/table/directives/alignmentright.directive.ts");
/* harmony import */ var _alignmentbottom_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alignmentbottom.directive */ "./lib/ng-vcl/src/table/directives/alignmentbottom.directive.ts");
/* harmony import */ var _alignmentmiddle_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alignmentmiddle.directive */ "./lib/ng-vcl/src/table/directives/alignmentmiddle.directive.ts");
/* harmony import */ var _nowrap_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nowrap.directive */ "./lib/ng-vcl/src/table/directives/nowrap.directive.ts");
/* harmony import */ var _overflowellipsis_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overflowellipsis.directive */ "./lib/ng-vcl/src/table/directives/overflowellipsis.directive.ts");
/* harmony import */ var _breakingwords_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./breakingwords.directive */ "./lib/ng-vcl/src/table/directives/breakingwords.directive.ts");














var directives = [
    _vcltable_directive__WEBPACK_IMPORTED_MODULE_0__["VclTableDirective"],
    _span_directive__WEBPACK_IMPORTED_MODULE_1__["SpanDirective"],
    _highlight_directive__WEBPACK_IMPORTED_MODULE_2__["HighlightDirective"],
    _sort_directive__WEBPACK_IMPORTED_MODULE_3__["SortDirective"],
    _select_directive__WEBPACK_IMPORTED_MODULE_4__["SelectDirective"],
    _selectable_directive__WEBPACK_IMPORTED_MODULE_5__["SelectableDirective"],
    _disable_directive__WEBPACK_IMPORTED_MODULE_6__["DisableDirective"],
    _alignmentcenter_directive__WEBPACK_IMPORTED_MODULE_7__["AlignmentCenterDirective"],
    _alignmentright_directive__WEBPACK_IMPORTED_MODULE_8__["AlignmentRightDirective"],
    _alignmentbottom_directive__WEBPACK_IMPORTED_MODULE_9__["AlignmentbottomDirective"],
    _alignmentmiddle_directive__WEBPACK_IMPORTED_MODULE_10__["AlignmentMiddleDirective"],
    _nowrap_directive__WEBPACK_IMPORTED_MODULE_11__["NoWrapDirective"],
    _overflowellipsis_directive__WEBPACK_IMPORTED_MODULE_12__["OverflowEllipsisDirective"],
    _breakingwords_directive__WEBPACK_IMPORTED_MODULE_13__["BreakingWordsDirective"]
];


/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/disable.directive.ts":
/*!**************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/disable.directive.ts ***!
  \**************************************************************/
/*! exports provided: DisableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableDirective", function() { return DisableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Disabled rows

Rows can be visually disabled with the vclDisabled modifier.
*/



var DisableDirective = /** @class */ (function () {
    function DisableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    DisableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            this.disabled = this.tableService.ClassToggle('vclDisabled', this.disabled, 'tr');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DisableDirective.prototype, "disabled", void 0);
    DisableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[disabled]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DisableDirective);
    return DisableDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/highlight.directive.ts":
/*!****************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/highlight.directive.ts ***!
  \****************************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Cell and column highlighting

Single cells and columns can be highlighted by using the
vclCellHighlight class on each tdin the respective column or on single cells only.
*/



var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    HighlightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hightlight) {
            this.hightlight = this.tableService.ClassToggle('vclCellHighlight', this.hightlight, 'td');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HighlightDirective.prototype, "hightlight", void 0);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[hightlight]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/nowrap.directive.ts":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/nowrap.directive.ts ***!
  \*************************************************************/
/*! exports provided: NoWrapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWrapDirective", function() { return NoWrapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/



var NoWrapDirective = /** @class */ (function () {
    function NoWrapDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    NoWrapDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nowrap) {
            this.nowrap = this.tableService.ClassToggle('vclNoWrap', this.nowrap, 'td');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NoWrapDirective.prototype, "nowrap", void 0);
    NoWrapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[nowrap]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NoWrapDirective);
    return NoWrapDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/overflowellipsis.directive.ts":
/*!***********************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/overflowellipsis.directive.ts ***!
  \***********************************************************************/
/*! exports provided: OverflowEllipsisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowEllipsisDirective", function() { return OverflowEllipsisDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/



var OverflowEllipsisDirective = /** @class */ (function () {
    function OverflowEllipsisDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    OverflowEllipsisDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ellipsis) {
            this.ellipsis = this.tableService.ClassToggle('vclOverflowEllipsis', this.ellipsis, 'td');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('overflow-ellipsis'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverflowEllipsisDirective.prototype, "ellipsis", void 0);
    OverflowEllipsisDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[overflow-ellipsis]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OverflowEllipsisDirective);
    return OverflowEllipsisDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/select.directive.ts":
/*!*************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/select.directive.ts ***!
  \*************************************************************/
/*! exports provided: SelectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirective", function() { return SelectDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Row and cell selection

Individual cells and thus rows can be visually selected using the vclSelected class.
*/



var SelectDirective = /** @class */ (function () {
    function SelectDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    SelectDirective.prototype.ngOnChanges = function (changes) {
        if (changes.selected) {
            this.selected = this.tableService.ClassToggle('vclSelected', this.selected, 'tr');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectDirective.prototype, "selected", void 0);
    SelectDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[selected]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectDirective);
    return SelectDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/selectable.directive.ts":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/selectable.directive.ts ***!
  \*****************************************************************/
/*! exports provided: SelectableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableDirective", function() { return SelectableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Row and cell selectability

Rows can be styled to suggest their selectability (single or multiple) using the vclRowSelectability modifier which makes rows show a pointer cursor on hover.
*/



var SelectableDirective = /** @class */ (function () {
    function SelectableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    SelectableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclRowSelectability', this.selectable, 'tr');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectableDirective.prototype, "selectable", void 0);
    SelectableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[selectable]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectableDirective);
    return SelectableDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/sort.directive.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/sort.directive.ts ***!
  \***********************************************************/
/*! exports provided: SortDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirective", function() { return SortDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_sorticon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sorticon.component */ "./lib/ng-vcl/src/table/components/sorticon.component.ts");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Column sortability

Sortable columns are defined with the vclSortableCol class on the respective ths.
This class gives the whole header a pointer cursor on hover to indicate an action.
The application must register an appropriate event handler to change the sort order
for the whole th accordingly. Also an icon which indicates sortability should be
used as shown in the second column. The currently active sort order is indicated
by a respective icon and the classes vclSortAsc or vclSortDesc on the th element.
*/




var SortDirective = /** @class */ (function () {
    function SortDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHeader = false;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"](renderer, el);
        this.isHeader =
            this.tableService.ClassToggle('vclSortableCol', true, 'th') &&
                this.tableService.ClassToggle('vclClearFix', true, 'th');
    }
    SortDirective.prototype.OnChangeOrder = function () {
        if (this.isHeader) {
            this.order = this.order === 1 ? -1 : 1;
            this.change.emit(this.order);
            switch (this.order) {
                case 1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(1);
                    }
                    break;
                }
                case -1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(-1);
                    }
                    break;
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_components_sorticon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_sorticon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"])
    ], SortDirective.prototype, "sortIconComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SortDirective.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SortDirective.prototype, "OnChangeOrder", null);
    SortDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sort]',
            exportAs: 'sort-directive'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortDirective);
    return SortDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/span.directive.ts":
/*!***********************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/span.directive.ts ***!
  \***********************************************************/
/*! exports provided: SpanDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanDirective", function() { return SpanDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
Column width

The column width can be defined in the table header using one of
the layout spans vclSpan-5p - vclSpan-100p from the corresponding module.
*/


var SpanDirective = /** @class */ (function () {
    function SpanDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    SpanDirective.prototype.ngOnChanges = function (changes) {
        if (changes.width) {
            this.ngAfterContentInit();
        }
    };
    SpanDirective.prototype.ngAfterContentInit = function () {
        // Apply class only on header
        if (this.el.nativeElement.localName === 'th') {
            var vclSpan = "vclSpan-" + this.width + "p";
            this.renderer.addClass(this.el.nativeElement, vclSpan);
        }
        else {
            throw new Error('Column width can be set only for header tag!');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('span'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpanDirective.prototype, "width", void 0);
    SpanDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[span]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SpanDirective);
    return SpanDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/directives/vcltable.directive.ts":
/*!***************************************************************!*\
  !*** ./lib/ng-vcl/src/table/directives/vcltable.directive.ts ***!
  \***************************************************************/
/*! exports provided: VclTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VclTableDirective", function() { return VclTableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./lib/ng-vcl/src/table/services/table.service.ts");
/*
Enables VCL table behavior
*/



var VclTableDirective = /** @class */ (function () {
    function VclTableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"](renderer, el);
    }
    VclTableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclTable', this.selectable, 'table');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VclTableDirective.prototype, "selectable", void 0);
    VclTableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[vcl-table]',
            host: {
                '[class.vclTable]': 'true',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], VclTableDirective);
    return VclTableDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/table/index.ts ***!
  \***************************************/
/*! exports provided: VCLTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTableModule", function() { return VCLTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/directives */ "./lib/ng-vcl/src/table/directives/directives.ts");
/* harmony import */ var _components_sorticon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sorticon.component */ "./lib/ng-vcl/src/table/components/sorticon.component.ts");





var VCLTableModule = /** @class */ (function () {
    function VCLTableModule() {
    }
    VCLTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_components_sorticon_component__WEBPACK_IMPORTED_MODULE_4__["SortIconComponent"]].concat(_directives_directives__WEBPACK_IMPORTED_MODULE_3__["directives"]),
            declarations: [_components_sorticon_component__WEBPACK_IMPORTED_MODULE_4__["SortIconComponent"]].concat(_directives_directives__WEBPACK_IMPORTED_MODULE_3__["directives"]),
            entryComponents: [_components_sorticon_component__WEBPACK_IMPORTED_MODULE_4__["SortIconComponent"]],
            providers: [],
        })
    ], VCLTableModule);
    return VCLTableModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/table/services/table.service.ts":
/*!********************************************************!*\
  !*** ./lib/ng-vcl/src/table/services/table.service.ts ***!
  \********************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableService = /** @class */ (function () {
    function TableService(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    TableService.prototype.ClassToggle = function (className, add, targetEl) {
        if (this.el.nativeElement.localName === targetEl || !targetEl) {
            if (add === '' || add) {
                // For table tag vclTable class is required to enable vcl table behavior
                if (targetEl === 'table' && className !== 'vclTable') {
                    this.addClass('vclTable');
                }
                return this.addClass(className);
            }
            else {
                return this.removeClass(className);
            }
        }
        else {
            console.error(className + " can only be used on " + targetEl + " tag!");
            return false;
        }
    };
    TableService.prototype.addClass = function (className) {
        this.renderer.addClass(this.el.nativeElement, className);
        return true;
    };
    TableService.prototype.removeClass = function (className) {
        this.renderer.removeClass(this.el.nativeElement, className);
        return false;
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/textarea/index.ts":
/*!******************************************!*\
  !*** ./lib/ng-vcl/src/textarea/index.ts ***!
  \******************************************/
/*! exports provided: VCLTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTextareaModule", function() { return VCLTextareaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _textarea_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea.directive */ "./lib/ng-vcl/src/textarea/textarea.directive.ts");




var VCLTextareaModule = /** @class */ (function () {
    function VCLTextareaModule() {
    }
    VCLTextareaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            exports: [_textarea_directive__WEBPACK_IMPORTED_MODULE_3__["TextareaDirective"]],
            declarations: [_textarea_directive__WEBPACK_IMPORTED_MODULE_3__["TextareaDirective"]],
            providers: [],
        })
    ], VCLTextareaModule);
    return VCLTextareaModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/textarea/textarea.directive.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/textarea/textarea.directive.ts ***!
  \*******************************************************/
/*! exports provided: TextareaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaDirective", function() { return TextareaDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UNIQUE_ID = 0;
var TextareaDirective = /** @class */ (function () {
    function TextareaDirective(elRef) {
        this.elRef = elRef;
        this.generatedId = 'vcl_input_' + UNIQUE_ID++;
        this.classVclInput = true;
        this.disabled = false;
        this.autoselect = false;
        this.autogrow = false;
    }
    Object.defineProperty(TextareaDirective.prototype, "elementId", {
        get: function () {
            return this.id || this.generatedId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextareaDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    TextareaDirective.prototype.onChange = function () {
        var value = this.elRef && this.elRef.nativeElement.value;
        this.setRows(value);
    };
    TextareaDirective.prototype.ngOnChanges = function (changes) {
        if ('value' in changes) {
            this.setRows(changes.value.currentValue);
        }
    };
    TextareaDirective.prototype.ngDoCheck = function () {
        var value = this.elRef && this.elRef.nativeElement.value;
        this.setRows(value);
    };
    TextareaDirective.prototype.ngAfterViewInit = function () {
        var value = this.elRef && this.elRef.nativeElement.value;
        this.setRows(value);
    };
    TextareaDirective.prototype.setRows = function (value) {
        if (this.autogrow && typeof value === 'string') {
            var rows = value.split('\n').length + 1;
            if (typeof this.minRows === 'number' && rows < this.minRows) {
                this.rows = this.minRows;
            }
            else if (typeof this.maxRows === 'number' && rows > this.maxRows) {
                this.rows = this.maxRows;
            }
            else {
                this.rows = rows;
            }
        }
    };
    TextareaDirective.prototype.notifyFormControlLabelClick = function (event) {
        this.elRef.nativeElement.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaDirective.prototype, "classVclInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextareaDirective.prototype, "elementId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextareaDirective.prototype, "isDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextareaDirective.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaDirective.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaDirective.prototype, "autoselect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaDirective.prototype, "autogrow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaDirective.prototype, "maxRows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaDirective.prototype, "minRows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.rows'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaDirective.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('propertychange'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TextareaDirective.prototype, "onChange", null);
    TextareaDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'textarea[vclInput]',
            host: {
                '[class.vclInput]': 'true',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextareaDirective);
    return TextareaDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/token/index.ts":
/*!***************************************!*\
  !*** ./lib/ng-vcl/src/token/index.ts ***!
  \***************************************/
/*! exports provided: TokenComponent, TokenInputContainerComponent, TokenInputDirective, TokenListComponent, VCLTokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTokenModule", function() { return VCLTokenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");
/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/index */ "./lib/ng-vcl/src/icon/index.ts");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _wormhole_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wormhole/index */ "./lib/ng-vcl/src/wormhole/index.ts");
/* harmony import */ var _icogram_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icogram/index */ "./lib/ng-vcl/src/icogram/index.ts");
/* harmony import */ var _token_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token.component */ "./lib/ng-vcl/src/token/token.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return _token_component__WEBPACK_IMPORTED_MODULE_9__["TokenComponent"]; });

/* harmony import */ var _token_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token-list.component */ "./lib/ng-vcl/src/token/token-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListComponent", function() { return _token_list_component__WEBPACK_IMPORTED_MODULE_10__["TokenListComponent"]; });

/* harmony import */ var _token_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-input.component */ "./lib/ng-vcl/src/token/token-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInputContainerComponent", function() { return _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInputDirective", function() { return _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputDirective"]; });














var VCLTokenModule = /** @class */ (function () {
    function VCLTokenModule() {
    }
    VCLTokenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _input_index__WEBPACK_IMPORTED_MODULE_4__["VCLInputModule"], _button_index__WEBPACK_IMPORTED_MODULE_6__["VCLButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _icon_index__WEBPACK_IMPORTED_MODULE_5__["VCLIconModule"], _icogram_index__WEBPACK_IMPORTED_MODULE_8__["VCLIcogramModule"], _wormhole_index__WEBPACK_IMPORTED_MODULE_7__["VCLWormholeModule"]],
            exports: [_token_component__WEBPACK_IMPORTED_MODULE_9__["TokenComponent"], _token_list_component__WEBPACK_IMPORTED_MODULE_10__["TokenListComponent"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputContainerComponent"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputDirective"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputLabelPostDirective"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputLabelPreDirective"]],
            declarations: [_token_component__WEBPACK_IMPORTED_MODULE_9__["TokenComponent"], _token_list_component__WEBPACK_IMPORTED_MODULE_10__["TokenListComponent"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputContainerComponent"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputDirective"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputLabelPostDirective"], _token_input_component__WEBPACK_IMPORTED_MODULE_11__["TokenInputLabelPreDirective"]],
            providers: [],
        })
    ], VCLTokenModule);
    return VCLTokenModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/token/token-input.component.html":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/token/token-input.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclTokenContainer\">\n  <wormhole *ngIf=\"labelPre\" [connect]=\"labelPre\"></wormhole>\n  <vcl-token *ngFor=\"let token of tokens\"\n             (remove)=\"onTokenRemove(token)\"\n             (click)=\"select(token)\"\n             [tokenIcon]=\"token.tokenIcon\"\n             [disabled]=\"disabled\"\n             [ngClass]=\"tokenClass\"\n             [selected]=\"token.selected\"\n             [removable]=\"true\"\n             [icon]=\"removeIcon\"\n             [attr.tabindex]=\"-1\"\n             [label]=\"token.label\">\n  </vcl-token>\n  <wormhole *ngIf=\"labelPost\" [connect]=\"labelPost\"></wormhole>\n</div>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/token/token-input.component.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/token/token-input.component.ts ***!
  \*******************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, TokenInputLabelPreDirective, TokenInputLabelPostDirective, TokenInputContainerComponent, TokenInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInputLabelPreDirective", function() { return TokenInputLabelPreDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInputLabelPostDirective", function() { return TokenInputLabelPostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInputContainerComponent", function() { return TokenInputContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInputDirective", function() { return TokenInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/index */ "./lib/ng-vcl/src/input/index.ts");




var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TokenInputContainerComponent; }),
    multi: true
};
var TokenInputLabelPreDirective = /** @class */ (function () {
    function TokenInputLabelPreDirective() {
    }
    TokenInputLabelPreDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[vcl-token-input-pre]' })
    ], TokenInputLabelPreDirective);
    return TokenInputLabelPreDirective;
}());

var TokenInputLabelPostDirective = /** @class */ (function () {
    function TokenInputLabelPostDirective() {
    }
    TokenInputLabelPostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[vcl-token-input-post]' })
    ], TokenInputLabelPostDirective);
    return TokenInputLabelPostDirective;
}());

var TokenInputContainerComponent = /** @class */ (function () {
    function TokenInputContainerComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.tokens = [];
        this.selectable = false;
        this.allowDuplicates = false;
        this.preselect = false;
        this.removeIcon = 'fas:times';
        this.removeToken = true;
        this.tabindex = 0;
        this.controlAsString = false;
        this.disabled = false;
        this.tokensChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Emits on enter key with no input
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    TokenInputContainerComponent.prototype.removeLastToken = function () {
        this.tokens = this.tokens.slice();
        this.tokens.pop();
        this.triggerChange();
        this.cdRef.markForCheck();
    };
    TokenInputContainerComponent.prototype.addToken = function (token) {
        token = typeof token === 'string' ? { label: token } : token;
        var newToken = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, token, { selected: token.selected === undefined ? this.preselect : token.selected, value: token.value === undefined ? token.label : token.value });
        if (this.allowDuplicates === false && this.tokens.some(function (thisToken) { return thisToken.value === newToken.value; })) {
            return;
        }
        this.tokens = this.tokens.concat([newToken]);
        this.triggerChange();
        this.cdRef.markForCheck();
    };
    TokenInputContainerComponent.prototype.select = function (token) {
        if (this.selectable) {
            token.selected = !token.selected;
            this.triggerChange();
        }
    };
    TokenInputContainerComponent.prototype.onTokenRemove = function (token) {
        this.remove.emit(token);
        if (this.removeToken) {
            this.tokens = this.tokens.filter(function (t) { return t !== token; });
            this.triggerChange();
        }
    };
    TokenInputContainerComponent.prototype.triggerChange = function () {
        this.tokensChange.emit(this.tokens);
        if (this.controlAsString) {
            this.onChange(this.tokens.map(function (t) { return t.label; }));
        }
        else {
            this.onChange(this.tokens);
        }
    };
    TokenInputContainerComponent.prototype.writeValue = function (tokens) {
        var _this = this;
        if (Array.isArray(tokens)) {
            this.tokens = tokens.map(function (t) { return typeof t === 'string' ? { label: t, selected: _this.preselect } : t; })
                .filter(function (t) { return typeof t === 'object' && t; });
        }
        else {
            this.tokens = [];
        }
        this.cdRef.markForCheck();
    };
    TokenInputContainerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TokenInputContainerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TokenInputContainerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "selectable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "allowDuplicates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "preselect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "removeIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "removeToken", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TokenInputContainerComponent.prototype, "tokenClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "controlAsString", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "tokensChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "remove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputContainerComponent.prototype, "confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TokenInputLabelPreDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", TokenInputLabelPreDirective)
    ], TokenInputContainerComponent.prototype, "labelPre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TokenInputLabelPostDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", TokenInputLabelPostDirective)
    ], TokenInputContainerComponent.prototype, "labelPost", void 0);
    TokenInputContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-token-input-container',
            template: __webpack_require__(/*! ./token-input.component.html */ "./lib/ng-vcl/src/token/token-input.component.html"),
            host: {
                '[class.vclInput]': 'true',
                '[class.vclTokenInput]': 'true',
                '[class.vclLayoutHorizontal]': 'true',
                '[class.vclLayoutWrap]': 'true',
                '[attr.tabindex]': '-1',
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TokenInputContainerComponent);
    return TokenInputContainerComponent;
}());

var TokenInputDirective = /** @class */ (function () {
    function TokenInputDirective(elementRef, input, tokenInputContainer) {
        this.elementRef = elementRef;
        this.input = input;
        this.tokenInputContainer = tokenInputContainer;
        this.addTokenOnEnter = true;
        if (!tokenInputContainer) {
            throw new Error('vcl-token-input ,must be used within a vcl-token-input-container');
        }
    }
    Object.defineProperty(TokenInputDirective.prototype, "isDisabled", {
        get: function () {
            return this.input.disabled || this.tokenInputContainer.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    TokenInputDirective.prototype.onKeydown = function (ev) {
        var value = ev.target.value;
        var code = ev && (ev.code || ev.key); // fallback for ie11
        if (code === 'Backspace' && this.lastKey === 'Backspace' && value === '') {
            // remove last token
            this.tokenInputContainer.removeLastToken();
        }
        else if (code === 'Enter') {
            ev.preventDefault();
        }
        else if (code) {
            this.lastKey = code;
        }
    };
    TokenInputDirective.prototype.onKeyPressEnter = function (ev) {
        var value = ev.target.value;
        if (value === '') {
            this.tokenInputContainer.confirm.emit();
        }
        else if (this.addTokenOnEnter) {
            this.tokenInputContainer.addToken(value);
            this.elementRef.nativeElement.value = '';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenInputDirective.prototype, "addTokenOnEnter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInputDirective.prototype, "classDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInputDirective.prototype, "attrDisabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TokenInputDirective.prototype, "onKeydown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup.enter', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TokenInputDirective.prototype, "onKeyPressEnter", null);
    TokenInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[vcl-token-input]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _input_index__WEBPACK_IMPORTED_MODULE_3__["InputDirective"],
            TokenInputContainerComponent])
    ], TokenInputDirective);
    return TokenInputDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/token/token-list.component.ts":
/*!******************************************************!*\
  !*** ./lib/ng-vcl/src/token/token-list.component.ts ***!
  \******************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, TokenListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListComponent", function() { return TokenListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _token_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.component */ "./lib/ng-vcl/src/token/token.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TokenListComponent; }),
    multi: true
};
var TokenListComponent = /** @class */ (function () {
    function TokenListComponent(cdRef) {
        this.cdRef = cdRef;
        this.selectable = false;
        this.dispatchEvent = false;
        this.disabled = false;
        this.tokensChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.labels = [];
    }
    TokenListComponent.prototype.syncTokens = function () {
        var labels = this.labels;
        if (Array.isArray(labels)) {
            this.tokens && this.tokens.forEach(function (token) {
                token.selected = labels.includes(token.label);
            });
        }
    };
    TokenListComponent.prototype.syncSelectedValues = function () {
        this.labels = this.tokens ? this.tokens.filter(function (t) { return t.selected; }).map(function (t) { return t.label; }) : [];
    };
    TokenListComponent.prototype.triggerChange = function () {
        this.tokensChange.emit(this.labels);
        !!this.onChangeCallback && this.onChangeCallback(this.labels);
    };
    TokenListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            this.setDisabledState(changes.disabled.currentValue);
        }
    };
    TokenListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Update the selectedIndex to match the selected buttons when not using ngModel
        if (!this.onChangeCallback) {
            this.syncSelectedValues();
            this.triggerChange();
        }
        // Subscribes to buttons press event
        var listenButtonPress = function () {
            if (!_this.tokens) {
                return;
            }
            _this.dispose();
            _this.cdRef.markForCheck();
            var select$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, (_this.tokens.map(function (token) { return token.select.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return token; })); })));
            _this.tokenSubscription = select$.subscribe(function (token) {
                if (_this.selectable) {
                    token.selected = !token.selected;
                }
                _this.syncSelectedValues();
                _this.triggerChange();
            });
        };
        this.tokens && this.tokens.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null)).subscribe(function () {
            listenButtonPress();
            setTimeout(function () {
                _this.syncSelectedValues();
                _this.setDisabledState(_this.disabled);
            });
        });
    };
    TokenListComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    TokenListComponent.prototype.dispose = function () {
        this.tokenSubscription && this.tokenSubscription.unsubscribe();
    };
    TokenListComponent.prototype.writeValue = function (value) {
        this.labels = value;
        this.syncTokens();
        this.cdRef.markForCheck();
    };
    TokenListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenListComponent.prototype.registerOnTouched = function (fn) {
    };
    TokenListComponent.prototype.setDisabledState = function (isDisabled) {
        this.tokens && this.tokens.forEach(function (t) { return t.setDisabledState(isDisabled); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_token_component__WEBPACK_IMPORTED_MODULE_4__["TokenComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TokenListComponent.prototype, "tokens", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenListComponent.prototype, "selectable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenListComponent.prototype, "dispatchEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenListComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenListComponent.prototype, "tokensChange", void 0);
    TokenListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-token-list',
            template: '<ng-content></ng-content>',
            host: {
                '[class.vclTokenList]': 'true',
                '[class.vclTokenContainer]': 'true'
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TokenListComponent);
    return TokenListComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/token/token.component.html":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/token/token.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icogram *ngIf=\"tokenIcon\"  [appIcon]=\"tokenIcon\" ></vcl-icogram>\n<span class=\"vclTokenLabel\">{{label}}</span>\n<button vcl-icon-button\n        [disabled]=\"isDisabled\"\n        *ngIf=\"removable\" \n        class=\"vclTransparent\"\n        type=\"button\" \n        title=\"Remove\"\n        [icon]=\"icon\"\n        (click)=\"onRemoveClick($event)\">\n</button>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/token/token.component.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/token/token.component.ts ***!
  \*************************************************/
/*! exports provided: TokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return TokenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenComponent = /** @class */ (function () {
    function TokenComponent(cdRef) {
        this.cdRef = cdRef;
        this.label = '';
        this.disabled = false;
        this.selected = false;
        this.removable = false;
        this.icon = 'fas:times';
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Store cva disabled state in an extra property to remember the old state after the token-list has been disabled
        this.cvaDisabled = false;
    }
    TokenComponent.prototype.onTap = function (e) {
        if (this.isDisabled) {
            return;
        }
        this.select.emit(e);
    };
    TokenComponent.prototype.onRemoveClick = function (event) {
        event.stopPropagation();
        this.remove.emit(event);
    };
    TokenComponent.prototype.setDisabledState = function (isDisabled) {
        this.cvaDisabled = isDisabled;
        this.cdRef.markForCheck();
    };
    Object.defineProperty(TokenComponent.prototype, "isDisabled", {
        get: function () {
            return this.cvaDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TokenComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclSelected'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "removable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TokenComponent.prototype, "tokenIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "remove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TokenComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('tap', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TokenComponent.prototype, "onTap", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vclDisabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenComponent.prototype, "isDisabled", null);
    TokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-token',
            template: __webpack_require__(/*! ./token.component.html */ "./lib/ng-vcl/src/token/token.component.html"),
            host: {
                '[class.vclToken]': 'true',
            },
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TokenComponent);
    return TokenComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tooltip/index.ts":
/*!*****************************************!*\
  !*** ./lib/ng-vcl/src/tooltip/index.ts ***!
  \*****************************************/
/*! exports provided: TooltipComponent, AnimationState, Placement, VCLTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTooltipModule", function() { return VCLTooltipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.component */ "./lib/ng-vcl/src/tooltip/tooltip.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationState", function() { return _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["AnimationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["Placement"]; });

/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.directive */ "./lib/ng-vcl/src/tooltip/tooltip.directive.ts");
/* harmony import */ var _tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.service */ "./lib/ng-vcl/src/tooltip/tooltip.service.ts");







var VCLTooltipModule = /** @class */ (function () {
    function VCLTooltipModule() {
    }
    VCLTooltipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"]],
            declarations: [_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"]],
            providers: [_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"]],
            entryComponents: [_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]]
        })
    ], VCLTooltipModule);
    return VCLTooltipModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tooltip/tooltip.component.html":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/tooltip/tooltip.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@enterAnimation]=\"animationState || _animationState\" [style.left]=\"tooltipPlacement.Left + 'px'\" [style.top]=\"tooltipPlacement.Top + 'px'\"\n  style=\"white-space:nowrap;\" role=\"tooltip\" [class]=\"tooltipPosition\">\n  <div class=\"vclTooltipContent\">\n    {{ content }}\n    <ng-content></ng-content>\n  </div>\n  <div [class.vclArrowPointer]=\"showArrowPointer\"></div>\n</div>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/tooltip/tooltip.component.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/tooltip/tooltip.component.ts ***!
  \*****************************************************/
/*! exports provided: AnimationState, Placement, TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationState", function() { return AnimationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return Placement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.service */ "./lib/ng-vcl/src/tooltip/tooltip.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var AnimationState;
(function (AnimationState) {
    AnimationState["Shown"] = "shown";
    AnimationState["Hidden"] = "hidden";
    AnimationState["None"] = "none";
})(AnimationState || (AnimationState = {}));
var Placement;
(function (Placement) {
    Placement["Top"] = "top";
    Placement["Bottom"] = "bottom";
    Placement["Left"] = "left";
    Placement["Right"] = "right";
})(Placement || (Placement = {}));
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(element, document, renderer, tooltipService) {
        this.element = element;
        this.document = document;
        this.renderer = renderer;
        this.tooltipService = tooltipService;
        this.debug = false;
        this.placement = Placement.Top;
        this._animationState = AnimationState.Hidden;
        this.showArrowPointer = true;
        // Initial position should out of screen
        this.tooltipPlacement = { Top: -1000, Left: -1000 };
        // true if initialized by directive
        this.showOnInit = false;
    }
    TooltipComponent_1 = TooltipComponent;
    TooltipComponent.prototype.ngOnChanges = function (changes) {
        if (changes.placement || changes.content || changes.animationState) {
            this.showTooltip()();
        }
    };
    TooltipComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tag = TooltipComponent_1.Tag + ".ngAfterViewInit()";
        var debug = this.debug || false;
        if (debug) {
            console.log(tag, 'this:', this);
        }
        if (debug) {
            console.log(tag, 'this.animationState:', this.animationState);
        }
        setTimeout(function () {
            if (_this.showOnInit || _this.animationState === AnimationState.Shown) {
                setTimeout(function () { return _this.showTooltip()(); });
            }
            else if (!_this.animationState) {
                _this._animationState = AnimationState.None;
                _this.renderer.listen(_this.hostElement, 'mouseenter', function () { _this.showTooltip(); });
                _this.renderer.listen(_this.hostElement, 'focusin', function () { _this.showTooltip(); });
                _this.renderer.listen(_this.hostElement, 'focusout', function () { _this._animationState = AnimationState.Hidden; });
                _this.renderer.listen(_this.hostElement, 'mouseleave', function () { _this._animationState = AnimationState.Hidden; });
            }
        });
    };
    TooltipComponent.prototype.showTooltip = function () {
        var _this = this;
        var tag = TooltipComponent_1.Tag + ".showTooltip()";
        var debug = this.debug || false;
        return function () {
            if (_this.hostElement) {
                var tooltipOffset = _this.tooltipService.positionElements(_this.hostElement, _this.element.nativeElement.children[0].children[0], _this.placement);
                if (debug) {
                    console.log(tag, 'tooltipOffset:', tooltipOffset);
                }
                _this.tooltipPlacement = {
                    Top: tooltipOffset.Top,
                    Left: tooltipOffset.Left
                };
                if (debug) {
                    console.log(tag, 'this.tooltipPlacement:', _this.tooltipPlacement);
                }
                _this._animationState = AnimationState.Shown;
                _this.document.querySelector('body').appendChild(_this.element.nativeElement);
                return true;
            }
            else {
                console.error('Host element not specified');
                return false;
            }
        };
    };
    Object.defineProperty(TooltipComponent.prototype, "tooltipPosition", {
        get: function () {
            switch (this.placement) {
                case Placement.Right:
                    return 'vclTooltip vclArrowPointerLeft';
                case Placement.Left:
                    return 'vclTooltip vclArrowPointerRight';
                case Placement.Bottom:
                    return 'vclTooltip vclArrowPointerTop';
                case Placement.Top:
                default:
                    return 'vclTooltip vclArrowPointerBottom';
            }
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnDestroy = function () {
        if (!this.showOnInit) {
            var parentNode = this.element.nativeElement.parentNode;
            parentNode && parentNode.removeChild(this.element.nativeElement);
        }
    };
    var TooltipComponent_1;
    TooltipComponent.Tag = 'TooltipComponent';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TooltipComponent.prototype, "debug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "placement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)
    ], TooltipComponent.prototype, "hostElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "animationState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TooltipComponent.prototype, "showArrowPointer", void 0);
    TooltipComponent = TooltipComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./lib/ng-vcl/src/tooltip/tooltip.component.html"),
            host: {
                '[class.vclTooltip]': 'true',
            },
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, 'z-index': 'initial' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, 'z-index': '-1' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.2s')),
                ])
            ],
            styles: [":host{ top: 0; left: 0 }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _tooltip_service__WEBPACK_IMPORTED_MODULE_2__["TooltipService"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tooltip/tooltip.directive.ts":
/*!*****************************************************!*\
  !*** ./lib/ng-vcl/src/tooltip/tooltip.directive.ts ***!
  \*****************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "./lib/ng-vcl/src/tooltip/tooltip.component.ts");



var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(element, resolver, viewContainerRef) {
        this.element = element;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.content = '';
    }
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (this.tooltip) {
            if (changes.content) {
                this.tooltip.instance.content = this.content;
            }
            else if (changes.position) {
                this.tooltip.instance.placement = this.position;
            }
        }
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        var factory = this.resolver.resolveComponentFactory(_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"]);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.placement = this.position;
        this.tooltip.instance.hostElement = this.element.nativeElement;
        this.tooltip.instance.showOnInit = true;
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.tooltip) {
            this.tooltip.destroy();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TooltipDirective.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipDirective.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusout'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TooltipDirective.prototype, "ngOnDestroy", null);
    TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[vcl-tooltip]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tooltip/tooltip.service.ts":
/*!***************************************************!*\
  !*** ./lib/ng-vcl/src/tooltip/tooltip.service.ts ***!
  \***************************************************/
/*! exports provided: TooltipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipService", function() { return TooltipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipService = /** @class */ (function () {
    function TooltipService() {
        // padding between tooltip and target obj.
        this.offsetCorrection = 10;
    }
    TooltipService.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var tooltipAlignment = positionStr;
        // set tooltip at middle of host element for now
        var alignmentCorrection = 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (tooltipAlignment) {
            case 'right':
                targetElPos = {
                    Top: shiftHeight[alignmentCorrection](),
                    Left: shiftWidth[tooltipAlignment]() + this.offsetCorrection
                };
                break;
            case 'left':
                targetElPos = {
                    Top: shiftHeight[alignmentCorrection](),
                    Left: hostElPos.left - targetElWidth - this.offsetCorrection
                };
                break;
            case 'bottom':
                targetElPos = {
                    Top: shiftHeight[tooltipAlignment]() + this.offsetCorrection,
                    Left: shiftWidth[alignmentCorrection]()
                };
                break;
            default:
                targetElPos = {
                    Top: hostElPos.top - targetElHeight - this.offsetCorrection,
                    Left: shiftWidth[alignmentCorrection]()
                };
                break;
        }
        return targetElPos;
    };
    TooltipService.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipService.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        var scrollTop = window.document.documentElement ? window.document.documentElement.scrollTop : undefined;
        var scrollLeft = window.document.documentElement ? window.document.documentElement.scrollLeft : undefined;
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || scrollLeft)
        };
    };
    TooltipService.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) { // IE
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        return nativeEl.style[cssProp];
    };
    TooltipService.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    TooltipService.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TooltipService);
    return TooltipService;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tour/index.ts":
/*!**************************************!*\
  !*** ./lib/ng-vcl/src/tour/index.ts ***!
  \**************************************/
/*! exports provided: TourService, TourOptions, TourComponent, VCLTourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTourModule", function() { return VCLTourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/index */ "./lib/ng-vcl/src/button/index.ts");
/* harmony import */ var _popover_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover/index */ "./lib/ng-vcl/src/popover/index.ts");
/* harmony import */ var _tour_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tour-overlay.component */ "./lib/ng-vcl/src/tour/tour-overlay.component.ts");
/* harmony import */ var _tour_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour.service */ "./lib/ng-vcl/src/tour/tour.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return _tour_service__WEBPACK_IMPORTED_MODULE_6__["TourService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourOptions", function() { return _tour_service__WEBPACK_IMPORTED_MODULE_6__["TourOptions"]; });

/* harmony import */ var _tour_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tour.component */ "./lib/ng-vcl/src/tour/tour.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourComponent", function() { return _tour_component__WEBPACK_IMPORTED_MODULE_7__["TourComponent"]; });










var VCLTourModule = /** @class */ (function () {
    function VCLTourModule() {
    }
    VCLTourModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _popover_index__WEBPACK_IMPORTED_MODULE_4__["VCLPopoverModule"], _button_index__WEBPACK_IMPORTED_MODULE_3__["VCLButtonModule"]],
            exports: [_tour_component__WEBPACK_IMPORTED_MODULE_7__["TourComponent"], _tour_overlay_component__WEBPACK_IMPORTED_MODULE_5__["TourOverlayComponent"]],
            declarations: [_tour_component__WEBPACK_IMPORTED_MODULE_7__["TourComponent"], _tour_overlay_component__WEBPACK_IMPORTED_MODULE_5__["TourOverlayComponent"]],
            providers: [_tour_service__WEBPACK_IMPORTED_MODULE_6__["TourService"]],
        })
    ], VCLTourModule);
    return VCLTourModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour-overlay.component.css":
/*!********************************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour-overlay.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.vclTourOverlay {\n    position: fixed !important ;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .5);\n    z-index: 20;\n    top: 0;\n    left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9uZy12Y2wvc3JjL3RvdXIvdG91ci1vdmVybGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztBQUNYIiwiZmlsZSI6ImxpYi9uZy12Y2wvc3JjL3RvdXIvdG91ci1vdmVybGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52Y2xUb3VyT3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQgO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour-overlay.component.html":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour-overlay.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"vclTourOverlay\" \n  [class.vclLayoutHidden]=\"!tour.showOverlay\"\n  (click)=\"tour.onOverlayClick()\">\n</div>"

/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour-overlay.component.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour-overlay.component.ts ***!
  \*******************************************************/
/*! exports provided: TourOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourOverlayComponent", function() { return TourOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tour_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tour.service */ "./lib/ng-vcl/src/tour/tour.service.ts");



var TourOverlayComponent = /** @class */ (function () {
    function TourOverlayComponent(tour) {
        this.tour = tour;
    }
    TourOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-tour-overlay',
            template: __webpack_require__(/*! ./tour-overlay.component.html */ "./lib/ng-vcl/src/tour/tour-overlay.component.html"),
            styles: [__webpack_require__(/*! ./tour-overlay.component.css */ "./lib/ng-vcl/src/tour/tour-overlay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tour_service__WEBPACK_IMPORTED_MODULE_2__["TourService"]])
    ], TourOverlayComponent);
    return TourOverlayComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour.component.css":
/*!************************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vclTourContainer {\n    background-color: #fff;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    border-radius: 5px;\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  }\n  \n.vclTourContainer .vclTourContainerHeader {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  background-color: #ddd;\n  border-radius: 5px;\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n}\n  \n.vclTourContainer .vclTourContainerContent {\n  padding: 10px;\n}\n  \n.vclTourContainer .vclTourContainerFooter {\n  padding: 10px;\n}\n  \n.vclTourContainer .vclButton:first {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9uZy12Y2wvc3JjL3RvdXIvdG91ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUVsQiw4Q0FBOEM7RUFDaEQ7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFFbEIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJsaWIvbmctdmNsL3NyYy90b3VyL3RvdXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52Y2xUb3VyQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgLjUpO1xuICB9XG4gIFxuLnZjbFRvdXJDb250YWluZXIgLnZjbFRvdXJDb250YWluZXJIZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAuNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAuNSk7XG59XG4gIFxuLnZjbFRvdXJDb250YWluZXIgLnZjbFRvdXJDb250YWluZXJDb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnZjbFRvdXJDb250YWluZXIgLnZjbFRvdXJDb250YWluZXJGb290ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udmNsVG91ckNvbnRhaW5lciAudmNsQnV0dG9uOmZpcnN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour.component.html":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-popover #popover\n  [visible]=\"visible\"\n  [target]=\"target\"\n  [originX]=\"originX\"\n  [overlayX]=\"overlayX\"\n  [offsetX]=\"offsetX\"\n  [originY]=\"originY\"\n  [overlayY]=\"overlayY\"\n  [offsetY]=\"offsetY\"\n  [style.z-index]=\"tour.options?.zIndex\">\n\n  <div class=\"vclTourContainer\">\n\n    <div class=\"vclTourContainerHeader\" *ngIf=\"title\">\n      {{ title }}\n    </div>\n\n    <div class=\"vclTourContainerContent\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"vclTourContainerFooter\">\n      \n      <button vcl-icogram-button *ngIf=\"hasPrevious\"\n        [ngClass]=\"tour.options?.buttonClass\"\n        [prepIcon]=\"tour.options?.previousIcon\"\n        (click)=\"previous()\">\n        {{tour.options?.previousLabel}}\n      </button>\n\n      <button vcl-icogram-button *ngIf=\"hasNext\"\n        [ngClass]=\"tour.options?.buttonClass\"\n        [appIcon]=\"tour.options?.nextIcon\"\n        (click)=\"next()\">\n        {{tour.options?.nextLabel}}\n      </button>\n\n      <button vcl-icogram-button\n        [ngClass]=\"tour.options?.buttonClass\"\n        [prepIcon]=\"tour.options?.exitIcon\"\n        (click)=\"exit()\">\n        {{tour.options?.exitLabel}}\n      </button>\n\n    </div>\n    \n  </div>\n\n</vcl-popover>\n"

/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour.component.ts":
/*!***********************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour.component.ts ***!
  \***********************************************/
/*! exports provided: VCLTourStepTag, TourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLTourStepTag", function() { return VCLTourStepTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourComponent", function() { return TourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover/index */ "./lib/ng-vcl/src/popover/index.ts");
/* harmony import */ var _tour_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour.service */ "./lib/ng-vcl/src/tour/tour.service.ts");




var VCLTourStepTag = 'vcl-tour-step';
var TourComponent = /** @class */ (function () {
    function TourComponent(tour) {
        this.tour = tour;
        this.originX = 'center';
        this.originY = 'bottom';
        this.overlayX = 'center';
        this.overlayY = 'top';
        this.visible = false;
        this.hasNext = false;
        this.hasPrevious = false;
    }
    TourComponent.prototype.ngOnInit = function () {
        this.tour.register(this);
    };
    TourComponent.prototype.show = function () {
        var el = this.popover.target.nativeElement;
        if (el) {
            el.style.zIndex = "" + this.tour.options.zIndex;
            if (this.tour.options.elementsDisabled) {
                this.disableClick(el);
            }
            if (this.tour.options.applyRelative) {
                this.enableHighlight(el);
            }
        }
        this.visible = true;
        this.hasNext = this.tour.hasNext;
        this.hasPrevious = this.tour.hasPrevious;
    };
    TourComponent.prototype.hide = function () {
        var highlightedElement = this.popover.target.nativeElement;
        if (highlightedElement) {
            highlightedElement.style.zIndex = null;
            this.enableClick(highlightedElement);
            this.disableHighlight(highlightedElement);
        }
        this.visible = false;
    };
    TourComponent.prototype.previous = function () {
        this.tour.showPrevious();
    };
    TourComponent.prototype.next = function () {
        this.tour.showNext();
    };
    TourComponent.prototype.exit = function () {
        this.tour.end();
    };
    TourComponent.prototype.disableClick = function (element) {
        element.style.cursor = 'default';
        element.style.pointerEvents = 'none';
    };
    TourComponent.prototype.enableClick = function (element) {
        element.style.cursor = 'auto';
        element.style.pointerEvents = 'visiblePainted';
    };
    TourComponent.prototype.enableHighlight = function (element) {
        element.setAttribute('position', element.style.position);
        element.style.position = 'relative';
    };
    TourComponent.prototype.disableHighlight = function (element) {
        element.style.position = element.getAttribute('position');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _popover_index__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"])
    ], TourComponent.prototype, "popover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TourComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TourComponent.prototype, "order", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TourComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TourComponent.prototype, "originX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TourComponent.prototype, "originY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TourComponent.prototype, "overlayX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TourComponent.prototype, "overlayY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TourComponent.prototype, "offsetX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TourComponent.prototype, "offsetY", void 0);
    TourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: VCLTourStepTag,
            template: __webpack_require__(/*! ./tour.component.html */ "./lib/ng-vcl/src/tour/tour.component.html"),
            styles: [__webpack_require__(/*! ./tour.component.css */ "./lib/ng-vcl/src/tour/tour.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tour_service__WEBPACK_IMPORTED_MODULE_3__["TourService"]])
    ], TourComponent);
    return TourComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/tour/tour.service.ts":
/*!*********************************************!*\
  !*** ./lib/ng-vcl/src/tour/tour.service.ts ***!
  \*********************************************/
/*! exports provided: TourOptions, TourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourOptions", function() { return TourOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return TourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TourOptions = /** @class */ (function () {
    function TourOptions() {
        this.useOrder = false;
        this.elementsDisabled = true;
        this.applyRelative = true;
        this.dismissOnOverlay = false;
        this.zIndex = 21;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.exitLabel = 'Exit';
        this.previousIcon = 'fas fa-chevron-left';
        this.nextIcon = 'fas fa-chevron-right';
        this.exitIcon = 'fas fa-close';
        this.buttonClass = '';
        this.offsetX = 0;
        this.offsetY = 0;
    }
    return TourOptions;
}());

var TourService = /** @class */ (function () {
    function TourService() {
        this._tourComponents = [];
        this.tourComponents = [];
        this.index = 0;
        this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tourComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._showOverlay = false;
    }
    Object.defineProperty(TourService.prototype, "showOverlay", {
        get: function () {
            return this._showOverlay;
        },
        set: function (showOverlay) {
            this._showOverlay = showOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TourService.prototype, "hasPrevious", {
        get: function () {
            var hasPrevious = this.index > 0;
            return hasPrevious;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TourService.prototype, "hasNext", {
        get: function () {
            var hasNext = this.index < this.tourComponents.length - 1;
            return hasNext;
        },
        enumerable: true,
        configurable: true
    });
    TourService.prototype.register = function (tourComponent) {
        this._tourComponents = this._tourComponents.includes(tourComponent) ?
            this._tourComponents : this._tourComponents.concat([tourComponent]);
    };
    TourService.prototype.initialize = function (options) {
        if (options === void 0) { options = new TourOptions(); }
        this.options = Object.assign(new TourOptions(), options);
    };
    TourService.prototype.start = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (!this.options) {
            this.initialize();
        }
        this.tourComponents = this.options.useOrder ?
            this._tourComponents.slice().sort(function (s1, s2) { return s1.order - s2.order; }) :
            this._tourComponents;
        this.tourComponents.forEach(function (tourComponent) {
            tourComponent.offsetX = isNumber(tourComponent.offsetX) ?
                tourComponent.offsetX : _this.options.offsetX;
            tourComponent.offsetY = isNumber(tourComponent.offsetY) ?
                tourComponent.offsetY : _this.options.offsetY;
        });
        this.show(index);
    };
    TourService.prototype.show = function (index) {
        this.tourComponent && this.tourComponent.hide();
        var tourComponent = this.tourComponents[index];
        if (!tourComponent) {
            this.tourComponent = null;
            this.index = 0;
            return;
        }
        this.tourComponent = tourComponent;
        this.index = index;
        this.showOverlay = true;
        tourComponent.show();
        this.tourComponent$.next(this.tourComponent);
    };
    TourService.prototype.showPrevious = function () {
        if (!this.hasPrevious) {
            return this.end();
        }
        this.show(this.index - 1);
    };
    TourService.prototype.showNext = function () {
        if (!this.hasNext) {
            return this.end();
        }
        this.show(this.index + 1);
    };
    TourService.prototype.end = function () {
        this.tourComponent && this.tourComponent.hide();
        this.showOverlay = false;
        this.index = 0;
        this.end$.next(true);
    };
    TourService.prototype.onOverlayClick = function () {
        if (this.options.dismissOnOverlay) {
            this.showNext();
        }
    };
    TourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TourService);
    return TourService;
}());

var isNumber = function (v) { return !isNaN(Number(v)) && isFinite(v); };


/***/ }),

/***/ "./lib/ng-vcl/src/wormhole/index.ts":
/*!******************************************!*\
  !*** ./lib/ng-vcl/src/wormhole/index.ts ***!
  \******************************************/
/*! exports provided: TemplateWormhole, ComponentWormhole, Wormhole, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost, VCLWormholeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLWormholeModule", function() { return VCLWormholeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wormhole_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wormhole-base */ "./lib/ng-vcl/src/wormhole/wormhole-base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wormhole", function() { return _wormhole_base__WEBPACK_IMPORTED_MODULE_2__["Wormhole"]; });

/* harmony import */ var _wormhole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wormhole */ "./lib/ng-vcl/src/wormhole/wormhole.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateWormhole", function() { return _wormhole__WEBPACK_IMPORTED_MODULE_3__["TemplateWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentWormhole", function() { return _wormhole__WEBPACK_IMPORTED_MODULE_3__["ComponentWormhole"]; });

/* harmony import */ var _wormhole_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wormhole-dom */ "./lib/ng-vcl/src/wormhole/wormhole-dom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomComponentWormhole", function() { return _wormhole_dom__WEBPACK_IMPORTED_MODULE_4__["DomComponentWormhole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomTemplateWormhole", function() { return _wormhole_dom__WEBPACK_IMPORTED_MODULE_4__["DomTemplateWormhole"]; });

/* harmony import */ var _wormhole_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wormhole.directive */ "./lib/ng-vcl/src/wormhole/wormhole.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WormholeDirective", function() { return _wormhole_directive__WEBPACK_IMPORTED_MODULE_5__["WormholeDirective"]; });

/* harmony import */ var _wormhole_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wormhole-host */ "./lib/ng-vcl/src/wormhole/wormhole-host.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WormholeHost", function() { return _wormhole_host__WEBPACK_IMPORTED_MODULE_6__["WormholeHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomWormholeHost", function() { return _wormhole_host__WEBPACK_IMPORTED_MODULE_6__["DomWormholeHost"]; });









var VCLWormholeModule = /** @class */ (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_wormhole_directive__WEBPACK_IMPORTED_MODULE_5__["WormholeDirective"]],
            declarations: [_wormhole_directive__WEBPACK_IMPORTED_MODULE_5__["WormholeDirective"]],
            providers: []
        })
    ], VCLWormholeModule);
    return VCLWormholeModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/wormhole/wormhole-base.ts":
/*!**************************************************!*\
  !*** ./lib/ng-vcl/src/wormhole/wormhole-base.ts ***!
  \**************************************************/
/*! exports provided: Wormhole, TemplateWormholeBase, ComponentWormholeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wormhole", function() { return Wormhole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateWormholeBase", function() { return TemplateWormholeBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWormholeBase", function() { return ComponentWormholeBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var Wormhole = /** @class */ (function () {
    function Wormhole() {
    }
    return Wormhole;
}());

var TemplateWormholeBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplateWormholeBase, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormholeBase(templateRef) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        if (!(templateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])) {
            throw new Error('invalid TemplateRef');
        }
        return _this;
    }
    Object.defineProperty(TemplateWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!(this.viewRef);
        },
        enumerable: true,
        configurable: true
    });
    TemplateWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.viewRef = this.attach(this.templateRef, index);
        this.viewRef.onDestroy(function () {
            _this.viewRef = undefined;
        });
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(this.viewRef.context, this.cachedAttrs);
        }
        this.viewRef.detectChanges();
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"];
    };
    TemplateWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.viewRef = undefined;
    };
    TemplateWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.viewRef && attrs && typeof attrs === 'object') {
            Object.assign(this.viewRef.context, attrs);
            this.viewRef.markForCheck();
        }
    };
    return TemplateWormholeBase;
}(Wormhole));

var ComponentWormholeBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComponentWormholeBase, _super);
    function ComponentWormholeBase(componentClass) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        if (!(typeof componentClass === 'function')) {
            throw new Error('invalid component class');
        }
        return _this;
    }
    Object.defineProperty(ComponentWormholeBase.prototype, "compInstance", {
        get: function () {
            return this.compRef && this.compRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.compRef = this.attach(this.componentClass, index);
        this.compRef.onDestroy(function () {
            _this.compRef = undefined;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events$ = (events || []).map(function (event) {
            if (!instance[event]) {
                throw new Error('Event not found: ' + event);
            }
            return instance[event] && instance[event].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ type: event, value: value }); }));
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, events$);
    };
    ComponentWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.compRef = undefined;
    };
    ComponentWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                // tslint:disable-next-line:no-bitwise
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 3);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    return ComponentWormholeBase;
}(Wormhole));



/***/ }),

/***/ "./lib/ng-vcl/src/wormhole/wormhole-dom.ts":
/*!*************************************************!*\
  !*** ./lib/ng-vcl/src/wormhole/wormhole-dom.ts ***!
  \*************************************************/
/*! exports provided: DomComponentWormhole, DomTemplateWormhole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomComponentWormhole", function() { return DomComponentWormhole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomTemplateWormhole", function() { return DomTemplateWormhole; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wormhole_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wormhole-base */ "./lib/ng-vcl/src/wormhole/wormhole-base.ts");



function getViewRootNode(embeddedViewRef) {
    var rootNodes = embeddedViewRef.rootNodes;
    return (rootNodes && rootNodes.length && rootNodes[0]) || undefined;
}
function getComponentRootNode(componentRef) {
    return getViewRootNode(componentRef.hostView);
}
var DomComponentWormhole = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DomComponentWormhole, _super);
    function DomComponentWormhole(componentClass, appRef, node, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomComponentWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw new Error('Application root component not found');
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        var compRef = this.compFactory.create(injector);
        this.appRef.attachView(compRef.hostView);
        var compRefRootNode = getComponentRootNode(compRef);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw new Error('component root node not found');
        }
        if (!node) {
            throw new Error('root node not found');
        }
        node.appendChild(compRefRootNode);
        return compRef;
    };
    DomComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(DomComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomComponentWormhole;
}(_wormhole_base__WEBPACK_IMPORTED_MODULE_2__["ComponentWormholeBase"]));

var DomTemplateWormhole = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DomTemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function DomTemplateWormhole(templateRef, appRef, node, injector) {
        var _this = _super.call(this, templateRef) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomTemplateWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw new Error('Application root component not found');
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomTemplateWormhole.prototype.attach = function (templateRef, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        var embeddedView = templateRef.createEmbeddedView(undefined);
        this.appRef.attachView(embeddedView);
        var compRefRootNode = getViewRootNode(embeddedView);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw new Error('component root node not found');
        }
        if (!node) {
            throw new Error('root node not found');
        }
        node.appendChild(compRefRootNode);
        return embeddedView;
    };
    DomTemplateWormhole.prototype.detach = function () {
        if (this.viewRef && this.currentIndex >= 0) {
            this.viewRef.destroy();
        }
    };
    Object.defineProperty(DomTemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomTemplateWormhole;
}(_wormhole_base__WEBPACK_IMPORTED_MODULE_2__["TemplateWormholeBase"]));



/***/ }),

/***/ "./lib/ng-vcl/src/wormhole/wormhole-host.ts":
/*!**************************************************!*\
  !*** ./lib/ng-vcl/src/wormhole/wormhole-host.ts ***!
  \**************************************************/
/*! exports provided: WormholeHostBase, WormholeHost, DomWormholeHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WormholeHostBase", function() { return WormholeHostBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WormholeHost", function() { return WormholeHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomWormholeHost", function() { return DomWormholeHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wormhole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wormhole */ "./lib/ng-vcl/src/wormhole/wormhole.ts");
/* harmony import */ var _wormhole_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wormhole-dom */ "./lib/ng-vcl/src/wormhole/wormhole-dom.ts");




var WormholeHostBase = /** @class */ (function () {
    function WormholeHostBase() {
        this._wormholes = [];
    }
    Object.defineProperty(WormholeHostBase.prototype, "wormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WormholeHostBase.prototype, "connectedWormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    WormholeHostBase.prototype.getWormhole = function (index) {
        return this._wormholes[index];
    };
    WormholeHostBase.prototype.connectWormhole = function (target, attrs, events) {
        var wormhole = this.createWormhole(target);
        wormhole.connect(attrs, events);
        return wormhole;
    };
    WormholeHostBase.prototype.disconnectWormhole = function (index) {
        var w = this.getWormhole(index);
        if (w) {
            w.disconnect();
        }
    };
    WormholeHostBase.prototype.disconnectWormholes = function () {
        this._wormholes.forEach(function (w) { return w.disconnect(); });
    };
    WormholeHostBase.prototype.clearWormholes = function () {
        this.disconnectWormholes();
        this._wormholes = [];
    };
    WormholeHostBase.prototype.removeWormhole = function (wormhole) {
        var w = typeof wormhole === 'number' ? this.getWormhole(wormhole) : wormhole;
        if (w) {
            w.disconnect();
            this._wormholes = this._wormholes.filter(function (cw) { return cw !== w; });
        }
    };
    return WormholeHostBase;
}());

var WormholeHost = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WormholeHost, _super);
    function WormholeHost(_host, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._injector = _injector;
        if (!_host) {
            throw new Error('missing host ViewContainerRef');
        }
        return _this;
    }
    WormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host) {
            wormhole = new _wormhole__WEBPACK_IMPORTED_MODULE_2__["ComponentWormhole"](arg2, this._host, this._injector);
        }
        else if (arg2 instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] && this._host) {
            wormhole = new _wormhole__WEBPACK_IMPORTED_MODULE_2__["TemplateWormhole"](arg2, this._host);
        }
        else {
            throw new Error('Parameter must be component class or templateRef');
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return WormholeHost;
}(WormholeHostBase));

var DomWormholeHost = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DomWormholeHost, _super);
    function DomWormholeHost(_host, _node, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._node = _node;
        _this._injector = _injector;
        if (!_host) {
            throw new Error('missing host ApplicationRef');
        }
        return _this;
    }
    DomWormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]) {
            wormhole = new _wormhole_dom__WEBPACK_IMPORTED_MODULE_3__["DomComponentWormhole"](arg2, this._host, this._node, this._injector);
        }
        else if (arg2 instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] && this._host) {
            wormhole = new _wormhole_dom__WEBPACK_IMPORTED_MODULE_3__["DomTemplateWormhole"](arg2, this._host, this._node, this._injector);
        }
        else {
            throw new Error('Parameter must be component class or templateRef');
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return DomWormholeHost;
}(WormholeHostBase));



/***/ }),

/***/ "./lib/ng-vcl/src/wormhole/wormhole.directive.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/wormhole/wormhole.directive.ts ***!
  \*******************************************************/
/*! exports provided: WormholeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WormholeDirective", function() { return WormholeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wormhole_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wormhole-host */ "./lib/ng-vcl/src/wormhole/wormhole-host.ts");



var WormholeDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WormholeDirective, _super);
    function WormholeDirective(viewContainerRef, injector) {
        return _super.call(this, viewContainerRef, injector) || this;
    }
    Object.defineProperty(WormholeDirective.prototype, "isConnected", {
        get: function () {
            return !!this.wormhole && this.wormhole.isConnected;
        },
        enumerable: true,
        configurable: true
    });
    WormholeDirective.prototype.ngOnChanges = function (changes) {
        var attrs = ('attrs' in changes && changes['attrs'].currentValue) || undefined;
        if ('target' in changes) {
            this.clearWormholes();
            var target = changes['target'].currentValue;
            if (target) {
                this.wormhole = this.connectWormhole(target, attrs);
            }
        }
        else if (attrs && this.wormhole) {
            this.wormhole.setAttributes(attrs);
        }
    };
    WormholeDirective.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('connect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WormholeDirective.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WormholeDirective.prototype, "attrs", void 0);
    WormholeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'wormhole'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], WormholeDirective);
    return WormholeDirective;
}(_wormhole_host__WEBPACK_IMPORTED_MODULE_2__["WormholeHost"]));



/***/ }),

/***/ "./lib/ng-vcl/src/wormhole/wormhole.ts":
/*!*********************************************!*\
  !*** ./lib/ng-vcl/src/wormhole/wormhole.ts ***!
  \*********************************************/
/*! exports provided: TemplateWormhole, ComponentWormhole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateWormhole", function() { return TemplateWormhole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWormhole", function() { return ComponentWormhole; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wormhole_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wormhole-base */ "./lib/ng-vcl/src/wormhole/wormhole-base.ts");



var TemplateWormhole = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormhole(templateRef, viewContainerRef) {
        var _this = _super.call(this, templateRef) || this;
        _this.viewContainerRef = viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('missing ViewContainerRef');
        }
        return _this;
    }
    TemplateWormhole.prototype.attach = function (templateRef, index) {
        return this.viewContainerRef.createEmbeddedView(templateRef, null, typeof index === 'number' ? index : this.viewContainerRef.length);
    };
    TemplateWormhole.prototype.detach = function () {
        if (this.isConnected && this.currentIndex >= 0) {
            this.viewContainerRef.remove(this.currentIndex);
        }
    };
    Object.defineProperty(TemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return TemplateWormhole;
}(_wormhole_base__WEBPACK_IMPORTED_MODULE_2__["TemplateWormholeBase"]));

var ComponentWormhole = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComponentWormhole, _super);
    function ComponentWormhole(componentClass, viewContainerRef, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.viewContainerRef = viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('missing ViewContainerRef');
        }
        _this.injector = injector || viewContainerRef.injector;
        return _this;
    }
    ComponentWormhole.prototype.attach = function (componentClass, index) {
        if (!this.compFactory && this.injector) {
            var componentFactoryResolver = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        return this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index : this.viewContainerRef.length, this.injector);
    };
    ComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(ComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentWormhole;
}(_wormhole_base__WEBPACK_IMPORTED_MODULE_2__["ComponentWormholeBase"]));



/***/ }),

/***/ "./lib/ng-vcl/src/zoom-box/index.ts":
/*!******************************************!*\
  !*** ./lib/ng-vcl/src/zoom-box/index.ts ***!
  \******************************************/
/*! exports provided: VCLZoomBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLZoomBoxModule", function() { return VCLZoomBoxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zoom_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom-box.component */ "./lib/ng-vcl/src/zoom-box/zoom-box.component.ts");
/* harmony import */ var _zoom_box_magnifier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-box-magnifier.component */ "./lib/ng-vcl/src/zoom-box/zoom-box-magnifier.component.ts");
/* harmony import */ var _zoom_box_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zoom-box-container.component */ "./lib/ng-vcl/src/zoom-box/zoom-box-container.component.ts");






var VCLZoomBoxModule = /** @class */ (function () {
    function VCLZoomBoxModule() {
    }
    VCLZoomBoxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_zoom_box_component__WEBPACK_IMPORTED_MODULE_3__["ZoomBoxComponent"], _zoom_box_magnifier_component__WEBPACK_IMPORTED_MODULE_4__["ZoomBoxMagnifierComponent"], _zoom_box_container_component__WEBPACK_IMPORTED_MODULE_5__["ZoomBoxContainerComponent"]],
            declarations: [_zoom_box_component__WEBPACK_IMPORTED_MODULE_3__["ZoomBoxComponent"], _zoom_box_magnifier_component__WEBPACK_IMPORTED_MODULE_4__["ZoomBoxMagnifierComponent"], _zoom_box_container_component__WEBPACK_IMPORTED_MODULE_5__["ZoomBoxContainerComponent"]]
        })
    ], VCLZoomBoxModule);
    return VCLZoomBoxModule;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/zoom-box/zoom-box-container.component.ts":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/zoom-box/zoom-box-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: ZoomBoxContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomBoxContainerComponent", function() { return ZoomBoxContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zoom_box_magnifier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom-box-magnifier.component */ "./lib/ng-vcl/src/zoom-box/zoom-box-magnifier.component.ts");



var ZoomBoxContainerComponent = /** @class */ (function () {
    function ZoomBoxContainerComponent(element, renderer) {
        this.element = element;
        this.x = 0;
        this.y = 0;
        this.resetOnOut = false;
        this.hidden = false;
        this.hiding = false;
        this.invisible = false;
        this.startX = -1;
        this.startY = -1;
        renderer.setStyle(element.nativeElement, 'position', 'relative');
    }
    ZoomBoxContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.magnifier.parent = this;
        this.magnifier.update();
        this.imgContent = this.element.nativeElement.querySelector('img');
        this.imgContent.onmousemove = function (event) { return _this.onMove(event); };
        this.imgContent.onmouseover = function () { return _this.onOver(); };
        this.imgContent.onmouseout = function () { return _this.onOut(); };
    };
    ZoomBoxContainerComponent.prototype.onMove = function (event) {
        if (this.startX === -1) {
            this.startX = this.x;
            this.startY = this.y;
        }
        var minX = this.width / 2;
        var maxX = this.imgContent.width - (this.width / 2);
        var minY = this.height / 2;
        var maxY = this.imgContent.height - (this.height / 2);
        this.x = Math.max(minX, Math.min(maxX, event.layerX)) - (this.width / 2);
        this.y = Math.max(minY, Math.min(maxY, event.layerY)) - (this.height / 2);
        this.magnifier.update();
    };
    ZoomBoxContainerComponent.prototype.onOver = function () {
        if (this.hidden || this.hiding) {
            this.hiding = false;
        }
        this.magnifier.update();
    };
    ZoomBoxContainerComponent.prototype.onOut = function () {
        if (this.resetOnOut) {
            this.x = this.startX;
            this.y = this.startY;
        }
        if (this.hidden) {
            this.hiding = true;
        }
        this.magnifier.update();
    };
    Object.defineProperty(ZoomBoxContainerComponent.prototype, "image", {
        get: function () {
            return this.imgContent.getAttribute('src');
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomBoxContainerComponent.prototype, "x", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomBoxContainerComponent.prototype, "y", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomBoxContainerComponent.prototype, "resetOnOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomBoxContainerComponent.prototype, "hidden", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomBoxContainerComponent.prototype, "hiding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomBoxContainerComponent.prototype, "invisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_zoom_box_magnifier_component__WEBPACK_IMPORTED_MODULE_2__["ZoomBoxMagnifierComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _zoom_box_magnifier_component__WEBPACK_IMPORTED_MODULE_2__["ZoomBoxMagnifierComponent"])
    ], ZoomBoxContainerComponent.prototype, "magnifier", void 0);
    ZoomBoxContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-zoom-box-container',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ZoomBoxContainerComponent);
    return ZoomBoxContainerComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/zoom-box/zoom-box-magnifier.component.ts":
/*!*****************************************************************!*\
  !*** ./lib/ng-vcl/src/zoom-box/zoom-box-magnifier.component.ts ***!
  \*****************************************************************/
/*! exports provided: ZoomBoxMagnifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomBoxMagnifierComponent", function() { return ZoomBoxMagnifierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZoomBoxMagnifierComponent = /** @class */ (function () {
    function ZoomBoxMagnifierComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        renderer.addClass(element.nativeElement, 'vclZoomBoxMagnifier');
    }
    ZoomBoxMagnifierComponent.prototype.update = function () {
        var _this = this;
        var styles = {
            top: this.parent.y + 'px',
            left: this.parent.x + 'px',
            width: this.parent.width + 'px',
            height: this.parent.height + 'px',
            display: (!this.parent.hiding && !this.parent.invisible) ? 'block' : 'none',
            'pointer-events': 'none'
        };
        Object.keys(styles).forEach(function (style) {
            _this.renderer.setStyle(_this.element.nativeElement, style, styles[style]);
        });
    };
    ZoomBoxMagnifierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-zoom-box-magnifier',
            template: '<ng-content></ng-content>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ZoomBoxMagnifierComponent);
    return ZoomBoxMagnifierComponent;
}());



/***/ }),

/***/ "./lib/ng-vcl/src/zoom-box/zoom-box.component.html":
/*!*********************************************************!*\
  !*** ./lib/ng-vcl/src/zoom-box/zoom-box.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vclZoomBox\" [ngStyle]=\"{\n'position': 'static',\n'background-image': 'url(' + zoomedSource + ')',\n'width': zoomedWidth + 'px',\n'height': zoomedHeight + 'px',\n'background-position-x': '-' + zoomedX + 'px',\n'background-position-y': '-' + zoomedY + 'px'}\"></div>\n\n"

/***/ }),

/***/ "./lib/ng-vcl/src/zoom-box/zoom-box.component.ts":
/*!*******************************************************!*\
  !*** ./lib/ng-vcl/src/zoom-box/zoom-box.component.ts ***!
  \*******************************************************/
/*! exports provided: ZoomBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomBoxComponent", function() { return ZoomBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zoom_box_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom-box-container.component */ "./lib/ng-vcl/src/zoom-box/zoom-box-container.component.ts");



var ZoomBoxComponent = /** @class */ (function () {
    function ZoomBoxComponent() {
    }
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedSource", {
        get: function () {
            if (this.image) {
                return this.image;
            }
            return this.target.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedX", {
        get: function () {
            if (this.image) {
                return this.target.x * this.scale;
            }
            return this.target.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedY", {
        get: function () {
            if (this.image) {
                return this.target.y * this.scale;
            }
            return this.target.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedWidth", {
        get: function () {
            if (this.image) {
                return this.target.width * this.scale;
            }
            return this.target.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedHeight", {
        get: function () {
            if (this.image) {
                return this.target.height * this.scale;
            }
            return this.target.height;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _zoom_box_container_component__WEBPACK_IMPORTED_MODULE_2__["ZoomBoxContainerComponent"])
    ], ZoomBoxComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoomBoxComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ZoomBoxComponent.prototype, "scale", void 0);
    ZoomBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vcl-zoom-box',
            template: __webpack_require__(/*! ./zoom-box.component.html */ "./lib/ng-vcl/src/zoom-box/zoom-box.component.html"),
            host: {
                '[attr.role]': '"zoombox"',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        })
    ], ZoomBoxComponent);
    return ZoomBoxComponent;
}());



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/README.md":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/README.md ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"ng-vcl\"><a href=\"https://ng-vcl.github.io/ng-vcl/\">ng-vcl</a></h1>\n<p>A comprehensive library of components for Angular 6+ with <a href=\"http://vcl.github.io/\">VCL</a> based styling.</p>\n<p><strong><a href=\"https://ng-vcl.github.io/ng-vcl/master\">Browse master demo</a></strong><br><br><strong><a href=\"https://ng-vcl.github.io/ng-vcl/dev\">Browse dev demo</a></strong></p>\n<h2 id=\"installation\">Installation</h2>\n<pre class=\"hljs\"><code>npm install @ng-vcl/ng-vcl --save</code></pre>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLIconModule, VCLLayerModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [\n    VCLIconModule,\n    ...\n  ]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppModule</span> </span>{ }</pre>\n"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"ng-vcl","version":"0.8.0-1","scripts":{"ng":"ng","start":"npm run dev:demo","dev:demo":"ng serve ng-vcl-demo --plugin ~webpack.custom.js","dev:ng-vcl":"ng build @ng-vcl/ng-vcl --watch","dev:animations":"ng build @ng-vcl/animations --watch","dev:jss-form":"ng build @ng-vcl/jss-form --watch","dev:wc":"ng serve ng-vcl-wc-test --plugin ~webpack.custom.js","docs":"npm-run-all docs:clean docs:pull-current docs:build","docs:build":"cross-env GIT_BRANCH=$TRAVIS_BRANCH ng build --plugin ~webpack.custom.js","docs:deploy":"git-directory-deploy --directory docs --branch gh-pages","docs:clean":"rimraf docs","docs:lint":"ng lint ng-vcl-demo","docs:pull-current":"npm run docs:clean && git clone -b gh-pages --single-branch https://github.com/ng-vcl/ng-vcl.git docs","test:ng-vcl":"ng test @ng-vcl/ng-vcl --watch=false","test:animations":"ng test @ng-vcl/animations --watch=false","test:jss-form":"ng test @ng-vcl/jss-form --watch=false","test":"npm-run-all test:ng-vcl test:animations test:jss-form","lint":"ng lint","e2e":"ng e2e","build:clean":"rimraf dist/ng-vcl","build:ng-vcl/ng-vcl":"ng build @ng-vcl/ng-vcl","build:ng-vcl/animations":"ng build @ng-vcl/animations","build:ng-vcl/jss-form":"ng build @ng-vcl/jss-form","build:ng-vcl":"npm-run-all build:ng-vcl/ng-vcl build:ng-vcl/animations build:ng-vcl/jss-form","build":"npm-run-all build:clean build:ng-vcl","build:wc":"ng build ng-vcl-wc-test --prod --output-hashing none --single-bundle false --plugin ~webpack.custom.js","clean":"npm-run-all build:clean docs:clean","docker":"docker run -it -v $(pwd):/app -p 0.0.0.0:3000:3000 node:6.9.1 /bin/bash /app/entrypoint.bash","markdownlint":"markdownlint -c markdownlint.json lib/","publish":"npm-run-all publish:ng-vcl publish:animations publish:jss-form","publish:next":"npm-run-all publish:ng-vcl:next publish:animations:next publish:jss-form:next","publish:ng-vcl":"cd dist/ng-vcl/ng-vcl && npm publish","publish:animations":"cd dist/ng-vcl/animations && npm publish","publish:jss-form":"cd dist/ng-vcl/jss-form && npm publish","publish:ng-vcl:next":"cd dist/ng-vcl/ng-vcl && npm publish --tag next","publish:animations:next":"cd dist/ng-vcl/animations && npm publish --tag next","publish:jss-form:next":"cd dist/ng-vcl/jss-form && npm publish --tag next"},"dependencies":{"@angular/animations":"~7.2.10","@angular/cdk":"^7.3.6","@angular/common":"~7.2.10","@angular/compiler":"~7.2.10","@angular/core":"~7.2.10","@angular/elements":"~7.2.10","@angular/forms":"~7.2.10","@angular/http":"~7.2.10","@angular/platform-browser":"~7.2.10","@angular/platform-browser-dynamic":"~7.2.10","@angular/router":"~7.2.10","@vcl/breakpoints":"^0.4.0","@vcl/core-modules":"^0.4.0","@vcl/font-awesome":"^0.4.0","@vcl/theme":"^0.4.0","core-js":"^2.5.4","document-register-element":"1.8.1","fuse.js":"^3.4.4","hammerjs":"^2.0.8","jsonschema":"^1.2.4","ngx-build-plus":"^7.7.6","normalize.css":"^8.0.1","rxjs":"~6.4.0","tslib":"^1.9.0","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.5","@angular-devkit/build-ng-packagr":"^0.13.5","@angular/cli":"~7.3.6","@angular/compiler-cli":"~7.2.10","@angular/language-service":"~7.2.10","@ng-vcl/webpack-helper":"0.1.0-3","@types/jasmine":"^3.3.9","@types/jasminewd2":"~2.0.3","@types/node":"^8.9.5","@vcl/preprocessor":"^0.4.0","codelyzer":"~4.5.0","cross-env":"^5.2.0","git-branch":"^2.0.1","git-directory-deploy":"^1.5.1","highlight-loader":"^0.7.3","jasmine-core":"^3.3.0","jasmine-spec-reporter":"~4.2.1","karma":"~3.1.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","markdown-loader":"^5.0.0","ng-packagr":"^4.7.1","npm-run-all":"^4.1.5","protractor":"~5.4.0","ts-node":"^8.0.3","tsickle":">=0.34.0","tslib":"^1.9.0","tslint":"^5.14.0","typescript":"~3.2.2"}};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/ng-vcl/ng-vcl/demo/main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map