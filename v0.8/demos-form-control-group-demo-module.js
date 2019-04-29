(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-form-control-group-demo-module"],{

/***/ "./demo/app/demos/form-control-group/demo.component.html":
/*!***************************************************************!*\
  !*** ./demo/app/demos/form-control-group/demo.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form vclForm novalidate [formGroup]=\"formGroup\" #form=\"ngForm\">\n    <h2>Create your hero</h2>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Name<vcl-required></vcl-required></label>\n      <input vclInput formControlName=\"name\" placeholder=\"Name of the hero\">\n      <vcl-hint-error error=\"required\">Name is required</vcl-hint-error>\n      <vcl-hint-error error=\"minlength\">Name must have a length of at least 2 characters</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Description</label>\n      <textarea vclInput formControlName=\"description\" placeholder=\"Description of the hero\" [autogrow]=\"true\" [minRows]=\"3\" [maxRows]=\"10\"></textarea>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Leader</label>\n      <vcl-flip-switch formControlName=\"leader\"></vcl-flip-switch>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Picture</label>\n      <vcl-file-input [multiple]=\"false\" formControlName=\"picture\">Picture of the hero</vcl-file-input>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Email</label>\n      <vcl-embedded-input-group>\n        <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n        <input vclInput formControlName=\"email\">\n      </vcl-embedded-input-group>\n      <vcl-hint-error error=\"required\">Email is required</vcl-hint-error>\n      <vcl-hint-error error=\"email\">Invalid Email address</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Gender<vcl-required></vcl-required></label>\n      <vcl-radio-group formControlName=\"gender\">\n        <label vclRadioButtonLabel>\n          <vcl-radio-button value=\"m\">Male</vcl-radio-button>\n          <vcl-icogram>\n            Male\n            <vcl-icon vclAppend icon=\"fas:mars\"></vcl-icon>\n          </vcl-icogram>\n        </label>\n        <label vclRadioButtonLabel>\n          <vcl-radio-button value=\"f\"></vcl-radio-button>\n          <vcl-icogram appIcon=\"fas:venus\">Female</vcl-icogram>\n        </label>\n        <label vclRadioButtonLabel>\n          <vcl-radio-button value=\"g\"></vcl-radio-button>\n          <vcl-icogram appIcon=\"fas:genderless\">Genderless</vcl-icogram>\n        </label>\n        <vcl-hint-error error=\"required\">You must select a gender</vcl-hint-error>\n      </vcl-radio-group>\n  \n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Alignment<vcl-required></vcl-required></label>\n      <vcl-button-group formControlName=\"alignment\">\n        <button vcl-button [value]=\"'good'\">Good</button>\n        <button vcl-button [value]=\"'neutral'\">Neutral</button>\n        <button vcl-button [value]=\"'evil'\">Evil</button>\n      </vcl-button-group>\n      <vcl-hint-error error=\"required\">You must select an alignment</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <h3>Skills</h3>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Strength<vcl-required></vcl-required></label>\n      <vcl-slider formControlName=\"strength\" [min]=\"1\" [max]=\"10\" [scale]=\"10\" [lock]=\"true\"></vcl-slider>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <label vclFormControlLabel>Agility<vcl-required></vcl-required></label>\n      <vcl-slider formControlName=\"agility\" [min]=\"1\" [max]=\"10\" [scale]=\"10\" [lock]=\"true\"></vcl-slider>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <label vclFormControlLabel>Intelligence<vcl-required></vcl-required></label>\n      <vcl-slider formControlName=\"intelligence\" [min]=\"1\" [max]=\"10\" [scale]=\"10\" [lock]=\"true\"></vcl-slider>\n    </vcl-form-control-group>\n    <vcl-hint-warning *ngIf=\"!form.hasError('skills') && skillPoints < 20\">The hero still has {{20 - skillPoints}} skill points available</vcl-hint-warning>\n    <vcl-hint-error *ngIf=\"form.hasError('skills')\">Your hero has used more than 20 skill points combined</vcl-hint-error>\n  \n    <vcl-form-control-group>\n      <label vclFormControlLabel>Perks<vcl-required></vcl-required></label>\n      <vcl-select formControlName=\"perks\" label=\"Select perks\" selectionMode=\"multiple\" >\n        <vcl-dropdown>\n          <vcl-dropdown-item [value]=\"'snakeeater'\">\n            <vcl-dropdown-label>Snake Eater</vcl-dropdown-label>\n            <vcl-dropdown-sublabel>It gives you a 25% increase to your poison resistance.\t</vcl-dropdown-sublabel>\n          </vcl-dropdown-item>\n          <vcl-dropdown-item [value]=\"'swiftlearner'\">\n            <vcl-dropdown-label>Swift Learner</vcl-dropdown-label>\n            <vcl-dropdown-sublabel>Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk.</vcl-dropdown-sublabel>\n          </vcl-dropdown-item>\n          <vcl-dropdown-item [value]=\"'toughness'\">\n            <vcl-dropdown-label>Toughness</vcl-dropdown-label>\n            <vcl-dropdown-sublabel>It adds 10% to your general damage resistance per level.</vcl-dropdown-sublabel>\n          </vcl-dropdown-item>\n          <vcl-dropdown-item [value]=\"'explorer'\">\n            <vcl-dropdown-label>Explorer</vcl-dropdown-label>\n            <vcl-dropdown-sublabel>You'll get more random encounters with this perk.</vcl-dropdown-sublabel>\n          </vcl-dropdown-item> \n        </vcl-dropdown>\n      </vcl-select>\n      <vcl-hint-error error=\"perks\">You must select at least two perks</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group>\n      <label vclCheckboxLabel>\n        <vcl-checkbox formControlName=\"terms\" [errorStateAgent]=\"termsErrorStateAgent\"></vcl-checkbox>\n        Agree to our terms<vcl-required></vcl-required>\n      </label>\n      <vcl-hint>Read the <a href=\"'https://github.com/ng-vcl/ng-vcl'\" target=\"'_blank'\">terms</a> to learn how we collect, use and share your data</vcl-hint>\n      <vcl-hint-error error=\"termsDisagree\">You must agree to our Terms</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <div class=\"vclLooseButtonGroup\">\n      <button vcl-button type=\"submit\" class=\"vclEmphasized\">Submit</button>\n      <button vcl-button type=\"button\" (click)=\"form.resetForm(defaultValues)\">Reset</button>\n    </div>\n  \n    <div class=\"value\">\n      <h4>Form</h4>\n      <pre>status: {{ form.status }}</pre>\n      <pre>valid: {{ form.valid }}</pre>\n      <pre>dirty: {{ form.dirty }}</pre>\n      <pre>submitted: {{ form.submitted }}</pre>\n      <pre>touched: {{ form.touched }}</pre>\n      <pre>pristine: {{ form.pristine }}</pre>\n      <pre>errors: {{ form.errors | json }}</pre>\n      <pre>value: {{ form.value | json }}</pre>\n  \n    </div>\n  \n  </form>\n  "

/***/ }),

/***/ "./demo/app/demos/form-control-group/demo.component.ts":
/*!*************************************************************!*\
  !*** ./demo/app/demos/form-control-group/demo.component.ts ***!
  \*************************************************************/
/*! exports provided: FormControlGroupDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlGroupDemoComponent", function() { return FormControlGroupDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormControlGroupDemoComponent = /** @class */ (function () {
    function FormControlGroupDemoComponent() {
        this.defaultValues = {
            leader: false,
            strength: 5,
            agility: 5,
            intelligence: 5,
        };
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('test', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultValues.leader, []),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [
                function (control) {
                    if (!control.value) {
                        return {
                            termsDisagree: true,
                        };
                    }
                    return null;
                }
            ]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            alignment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            strength: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultValues.strength, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]),
            agility: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultValues.agility, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]),
            intelligence: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultValues.intelligence, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]),
            perks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.validatePerks.bind(this)])
        }, [
            this.validateSkills.bind(this)
        ]);
        this.termsErrorStateAgent = function (form, input) {
            return form && input && input.ngControl && input.ngControl.invalid && form.submitted;
        };
    }
    Object.defineProperty(FormControlGroupDemoComponent.prototype, "skillPoints", {
        get: function () {
            var s = this.formGroup && this.formGroup.get('strength');
            var a = this.formGroup && this.formGroup.get('agility');
            var i = this.formGroup && this.formGroup.get('intelligence');
            if (s && a && i) {
                return s.value + a.value + i.value;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    FormControlGroupDemoComponent.prototype.validateSkills = function (c) {
        if ((this.skillPoints) > 20) {
            return {
                skills: true
            };
        }
        return null;
    };
    FormControlGroupDemoComponent.prototype.validatePerks = function (c) {
        return (Array.isArray(c.value) && c.value.length >= 2) ? null : { perks: true };
    };
    FormControlGroupDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/form-control-group/demo.component.html")
        })
    ], FormControlGroupDemoComponent);
    return FormControlGroupDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/form-control-group/demo.module.ts":
/*!**********************************************************!*\
  !*** ./demo/app/demos/form-control-group/demo.module.ts ***!
  \**********************************************************/
/*! exports provided: demo, FormControlGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlGroupDemoModule", function() { return FormControlGroupDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/form-control-group/demo.component.ts");








function demo() {
    return {
        name: 'Form',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["FormControlGroupDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/form-control-group/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/form-control-group/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/form-control-group/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/form-control-group/demo.component.ts")
            }
        }
    };
}
var FormControlGroupDemoModule = /** @class */ (function () {
    function FormControlGroupDemoModule() {
    }
    FormControlGroupDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLEmbeddedInputGroupModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonGroupModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLInputModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFileInputModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFlipSwitchModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLIconModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLDropdownModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLCheckboxModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLIcogramModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLLabelModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLRadioButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLSliderModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLSelectModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLTokenModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLTextareaModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFormControlGroupModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FormControlGroupDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["FormControlGroupDemoComponent"]]
        })
    ], FormControlGroupDemoModule);
    return FormControlGroupDemoModule;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"vclArticleHeader\"> {{title}}</h2>\n<div *ngIf=\"tabs.length>0\">\n  <vcl-tab-nav borders=true>\n    <vcl-tab *ngFor=\"let tab of tabs\">\n      <ng-template vcl-tab-label>{{tab.name}}</ng-template>\n      <wormhole *ngIf=\"tab.type==='component'\" [connect]=\"tab.content\"></wormhole>\n      <div *ngIf=\"tab.type==='text'\"><pre>{{tab.content}}</pre></div>\n      <div *ngIf=\"tab.type==='html'\" [innerHtml]=\"tab.content\"></div>\n      <div *ngIf=\"tab.type==='md'\"   class=\"markdown-body\"  [innerHtml]=\"tab.content\"></div>\n      <pre *ngIf=\"tab.type==='pre'\"  [innerHtml]=\"tab.content\"></pre>\n    </vcl-tab>\n  </vcl-tab-nav>\n</div>\n"

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




var DemoComponent = /** @class */ (function () {
    function DemoComponent(activatedRoute, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.tabs = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.activatedRoute.snapshot.data['demo']();
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
                        content = data.tabs[key];
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







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLTabNavModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLWormholeModule"]
            ],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/form-control-group/demo.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/form-control-group/demo.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">vclForm</span> <span class=\"hljs-attr\">novalidate</span> [<span class=\"hljs-attr\">formGroup</span>]=<span class=\"hljs-string\">\"formGroup\"</span> #<span class=\"hljs-attr\">form</span>=<span class=\"hljs-string\">\"ngForm\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Create your hero<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Name<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"name\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Name of the hero\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"required\"</span>&gt;</span>Name is required<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"minlength\"</span>&gt;</span>Name must have a length of at least 2 characters<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Description<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"description\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Description of the hero\"</span> [<span class=\"hljs-attr\">autogrow</span>]=<span class=\"hljs-string\">\"true\"</span> [<span class=\"hljs-attr\">minRows</span>]=<span class=\"hljs-string\">\"3\"</span> [<span class=\"hljs-attr\">maxRows</span>]=<span class=\"hljs-string\">\"10\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Leader<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-flip-switch</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"leader\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-flip-switch</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Picture<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-file-input</span> [<span class=\"hljs-attr\">multiple</span>]=<span class=\"hljs-string\">\"false\"</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"picture\"</span>&gt;</span>Picture of the hero<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-file-input</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclPrepend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:envelope\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"email\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-embedded-input-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"required\"</span>&gt;</span>Email is required<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"email\"</span>&gt;</span>Invalid Email address<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Gender<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-group</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"gender\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclRadioButtonLabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"m\"</span>&gt;</span>Male<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n            Male\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icon</span> <span class=\"hljs-attr\">vclAppend</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">\"fas:mars\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icon</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclRadioButtonLabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"f\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:venus\"</span>&gt;</span>Female<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclRadioButtonLabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-radio-button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"g\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-button</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:genderless\"</span>&gt;</span>Genderless<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"required\"</span>&gt;</span>You must select a gender<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-radio-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Alignment<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-button-group</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"alignment\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'good'\"</span>&gt;</span>Good<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'neutral'\"</span>&gt;</span>Neutral<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'evil'\"</span>&gt;</span>Evil<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-button-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"required\"</span>&gt;</span>You must select an alignment<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Skills<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Strength<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"strength\"</span> [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"1\"</span> [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">lock</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Agility<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"agility\"</span> [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"1\"</span> [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">lock</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Intelligence<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-slider</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"intelligence\"</span> [<span class=\"hljs-attr\">min</span>]=<span class=\"hljs-string\">\"1\"</span> [<span class=\"hljs-attr\">max</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">scale</span>]=<span class=\"hljs-string\">\"10\"</span> [<span class=\"hljs-attr\">lock</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-slider</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-warning</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"!form.hasError('skills') &amp;&amp; skillPoints &lt; 20\"</span>&gt;</span>The hero still has {{20 - skillPoints}} skill points available<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-warning</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"form.hasError('skills')\"</span>&gt;</span>Your hero has used more than 20 skill points combined<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Perks<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-select</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"perks\"</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"Select perks\"</span> <span class=\"hljs-attr\">selectionMode</span>=<span class=\"hljs-string\">\"multiple\"</span> &gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'snakeeater'\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Snake Eater<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>It gives you a 25% increase to your poison resistance.\t<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'swiftlearner'\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Swift Learner<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'toughness'\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Toughness<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>It adds 10% to your general damage resistance per level.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-item</span> [<span class=\"hljs-attr\">value</span>]=<span class=\"hljs-string\">\"'explorer'\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>Explorer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-label</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>You'll get more random encounters with this perk.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-sublabel</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown-item</span>&gt;</span> \n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-dropdown</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-select</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"perks\"</span>&gt;</span>You must select at least two perks<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclCheckboxLabel</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-checkbox</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">\"terms\"</span> [<span class=\"hljs-attr\">errorStateAgent</span>]=<span class=\"hljs-string\">\"termsErrorStateAgent\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-checkbox</span>&gt;</span>\n        Agree to our terms<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint</span>&gt;</span>Read the <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"'https://github.com/ng-vcl/ng-vcl'\"</span> <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"'_blank'\"</span>&gt;</span>terms<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span> to learn how we collect, use and share your data<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">\"termsDisagree\"</span>&gt;</span>You must agree to our Terms<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclLooseButtonGroup\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vclEmphasized\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">vcl-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"button\"</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">\"form.resetForm(defaultValues)\"</span>&gt;</span>Reset<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"value\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h4</span>&gt;</span>Form<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h4</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>status: {{ form.status }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>valid: {{ form.valid }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>dirty: {{ form.dirty }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>submitted: {{ form.submitted }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>touched: {{ form.touched }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>pristine: {{ form.pristine }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>errors: {{ form.errors | json }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>value: {{ form.value | json }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  \n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  \n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n  "

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/form-control-group/demo.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/form-control-group/demo.component.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ViewChild } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { FormGroup, Validators, AbstractControl, FormControl, ValidationErrors } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { FormControlErrorStateAgent, FormControlHost, FormControlInput } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'lib/ng-vcl'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FormControlGroupDemoComponent {\n\n  defaultValues = {\n    leader: <span class=\"hljs-literal\">false</span>,\n    strength: <span class=\"hljs-number\">5</span>,\n    agility: <span class=\"hljs-number\">5</span>,\n    intelligence: <span class=\"hljs-number\">5</span>,\n  };\n\n  formGroup = <span class=\"hljs-keyword\">new</span> FormGroup({\n    name: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-string\">'test'</span>, [\n      Validators.required,\n      Validators.minLength(<span class=\"hljs-number\">2</span>),\n    ]),\n    description: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-string\">''</span>, []),\n    picture: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-literal\">null</span>, [ ]),\n    leader: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-keyword\">this</span>.defaultValues.leader, [ ]),\n    email: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-string\">''</span>, [\n      Validators.email,\n    ]),\n    terms: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-literal\">false</span>, [\n      <span class=\"hljs-function\">(<span class=\"hljs-params\">control</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (!control.value) {\n          <span class=\"hljs-keyword\">return</span> {\n            termsDisagree: <span class=\"hljs-literal\">true</span>,\n          };\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n      }\n    ]),\n    gender: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-literal\">null</span>, Validators.required),\n    alignment: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-literal\">null</span>, [ Validators.required ]),\n    strength: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-keyword\">this</span>.defaultValues.strength, [ Validators.min(<span class=\"hljs-number\">1</span>), Validators.max(<span class=\"hljs-number\">10</span>)]),\n    agility: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-keyword\">this</span>.defaultValues.agility, [ Validators.min(<span class=\"hljs-number\">1</span>), Validators.max(<span class=\"hljs-number\">10</span>)]),\n    intelligence: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-keyword\">this</span>.defaultValues.intelligence, [ Validators.min(<span class=\"hljs-number\">1</span>), Validators.max(<span class=\"hljs-number\">10</span>)]),\n    perks: <span class=\"hljs-keyword\">new</span> FormControl(<span class=\"hljs-literal\">null</span>, [ <span class=\"hljs-keyword\">this</span>.validatePerks.bind(<span class=\"hljs-keyword\">this</span>) ])\n  }, [\n    <span class=\"hljs-keyword\">this</span>.validateSkills.bind(<span class=\"hljs-keyword\">this</span>)\n  ]);\n\n  <span class=\"hljs-keyword\">get</span> skillPoints() {\n    <span class=\"hljs-keyword\">const</span> s = <span class=\"hljs-keyword\">this</span>.formGroup &amp;&amp; <span class=\"hljs-keyword\">this</span>.formGroup.get(<span class=\"hljs-string\">'strength'</span>);\n    <span class=\"hljs-keyword\">const</span> a = <span class=\"hljs-keyword\">this</span>.formGroup &amp;&amp; <span class=\"hljs-keyword\">this</span>.formGroup.get(<span class=\"hljs-string\">'agility'</span>);\n    <span class=\"hljs-keyword\">const</span> i = <span class=\"hljs-keyword\">this</span>.formGroup &amp;&amp; <span class=\"hljs-keyword\">this</span>.formGroup.get(<span class=\"hljs-string\">'intelligence'</span>);\n    <span class=\"hljs-keyword\">if</span> (s &amp;&amp; a &amp;&amp; i) {\n      <span class=\"hljs-keyword\">return</span> s.value + a.value + i.value;\n    }\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-number\">0</span>;\n  }\n\n  validateSkills(c: AbstractControl) {\n    <span class=\"hljs-keyword\">if</span> ((<span class=\"hljs-keyword\">this</span>.skillPoints) &gt; <span class=\"hljs-number\">20</span>) {\n      <span class=\"hljs-keyword\">return</span> {\n        skills: <span class=\"hljs-literal\">true</span>\n      };\n    }\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n  }\n\n  validatePerks(c: AbstractControl) {\n    <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-built_in\">Array</span>.isArray(c.value) &amp;&amp; c.value.length &gt;= <span class=\"hljs-number\">2</span>) ? <span class=\"hljs-literal\">null</span> : { perks: <span class=\"hljs-literal\">true</span> };\n  }\n\n  termsErrorStateAgent: FormControlErrorStateAgent = <span class=\"hljs-function\">(<span class=\"hljs-params\">form?: FormControlHost, input?: FormControlInput&lt;<span class=\"hljs-built_in\">any</span>&gt;</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">return</span> form &amp;&amp; input &amp;&amp; input.ngControl &amp;&amp; input.ngControl.invalid &amp;&amp; form.submitted;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/form-control-group/README.md":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/form-control-group/README.md ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-form-control-group\">vcl-form-control-group</h1>\n<p>Form control group to handle the error-state of form controls</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { vclFormControlGroupModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ vclFormControlGroupModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">vclForm</span> [<span class=\"hljs-attr\">formGroup</span>]=<span class=\"hljs-string\">&quot;formGroup&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vclFormControlLabel</span>&gt;</span>Name<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">vclInput</span> <span class=\"hljs-attr\">formControlName</span>=<span class=\"hljs-string\">&quot;name&quot;</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">&quot;Name&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">&quot;required&quot;</span>&gt;</span>Name is required<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-hint-error</span> <span class=\"hljs-attr\">error</span>=<span class=\"hljs-string\">&quot;minlength&quot;</span>&gt;</span>Name must have a length of at least 2 characters<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-hint-error</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-form-control-group</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span></pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-form-control-group-demo-module.js.map