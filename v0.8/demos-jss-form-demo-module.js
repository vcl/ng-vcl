(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-jss-form-demo-module"],{

/***/ "./demo/app/demos/jss-form/counter.component.ts":
/*!******************************************************!*\
  !*** ./demo/app/demos/jss-form/counter.component.ts ***!
  \******************************************************/
/*! exports provided: CounterComponent, FormFieldCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldCounterComponent", function() { return FormFieldCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.counter = 0;
    }
    CounterComponent_1 = CounterComponent;
    CounterComponent.prototype.increment = function () {
        this.counter++;
        this.onChange(this.counter);
    };
    CounterComponent.prototype.decrement = function () {
        this.counter--;
        this.onChange(this.counter);
    };
    CounterComponent.prototype.writeValue = function (obj) {
        this.counter = obj;
    };
    CounterComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CounterComponent.prototype.registerOnTouched = function (fn) { };
    var CounterComponent_1;
    CounterComponent = CounterComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'demo-counter',
            template: "\n  <button vcl-button type=\"button\" (click)=\"decrement()\" style=\"margin-left: 5px;\">-</button>\n  {{counter}}\n  <button vcl-button type=\"button\" (click)=\"increment()\">+</button>\n  ",
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CounterComponent_1; }),
                    multi: true
                }]
        })
    ], CounterComponent);
    return CounterComponent;
}());

var FormFieldCounterComponent = /** @class */ (function () {
    function FormFieldCounterComponent(field) {
        this.field = field;
        this.label = field.schema.label || '';
    }
    FormFieldCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <span *ngIf=\"label\">{{ label }}</span><br>\n    <demo-counter [formControl]=\"field.control\"></demo-counter>\n    ",
            styles: [":host {\n        display: block;\n        padding-bottom: 2em;\n      }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["FormFieldControl"]])
    ], FormFieldCounterComponent);
    return FormFieldCounterComponent;
}());

Object(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["registerControlField"])('counter', FormFieldCounterComponent);


/***/ }),

/***/ "./demo/app/demos/jss-form/demo.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/jss-form/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create a hero</h2>\n<vcl-jss-form \n  #heroForm=\"vclJssForm\"\n  [schema]=\"heroSchema\" \n  (formSubmit)=\"onSubmit($event, heroForm.ngForm.valid)\" \n  (formAction)=\"onAction($event)\">\n</vcl-jss-form>\n\n<div class=\"value\">\n  <h4>Form</h4>\n  <pre>status: {{ heroForm.ngForm.status }}</pre>\n  <pre>valid: {{ heroForm.ngForm.valid }}</pre>\n  <pre>dirty: {{ heroForm.ngForm.dirty }}</pre>\n  <pre>submitted: {{ heroForm.ngForm.submitted }}</pre>\n  <pre>touched: {{ heroForm.ngForm.touched }}</pre>\n  <pre>pristine: {{ heroForm.ngForm.pristine }}</pre>\n  <pre>errors: {{ heroForm.ngForm.errors | json }}</pre>\n  <pre>value: {{ heroForm.ngForm.value | json }}</pre>\n</div>\n"

/***/ }),

/***/ "./demo/app/demos/jss-form/demo.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/jss-form/demo.component.ts ***!
  \***************************************************/
/*! exports provided: JssFormDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JssFormDemoComponent", function() { return JssFormDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ "./demo/app/demos/jss-form/hero.ts");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");




var JssFormDemoComponent = /** @class */ (function () {
    function JssFormDemoComponent(notifier) {
        this.notifier = notifier;
        this.heroSchema = _hero__WEBPACK_IMPORTED_MODULE_2__["HERO_SCHEMA"];
        this.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _hero__WEBPACK_IMPORTED_MODULE_2__["HERO_DEFAULTS"]);
    }
    JssFormDemoComponent.prototype.onSubmit = function () {
        if (this.heroForm.ngForm.valid) {
            this.notifier.success('Hero created');
        }
        else {
            this.notifier.error('Hero invalid');
        }
    };
    JssFormDemoComponent.prototype.onAction = function (action) {
        if (action === 'reset' && this.heroForm.ngForm) {
            this.heroForm.ngForm.resetForm(this.heroForm.field.defaultValue);
            this.notifier.info('Hero reset');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('heroForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["JssFormComponent"])
    ], JssFormDemoComponent.prototype, "heroForm", void 0);
    JssFormDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/jss-form/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], JssFormDemoComponent);
    return JssFormDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/jss-form/demo.module.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/jss-form/demo.module.ts ***!
  \************************************************/
/*! exports provided: demo, VCLJssFormDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCLJssFormDemoModule", function() { return VCLJssFormDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/jss-form/demo.component.ts");
/* harmony import */ var _counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter.component */ "./demo/app/demos/jss-form/counter.component.ts");









function demo() {
    return {
        label: 'JSS-Form',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["JssFormDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/jss-form/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/jss-form/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/jss-form/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/demo.component.ts")
            },
            'counter.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./counter.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/counter.component.ts")
            },
            'hero.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./hero.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/hero.ts")
            }
        }
    };
}
var VCLJssFormDemoModule = /** @class */ (function () {
    function VCLJssFormDemoModule() {
    }
    VCLJssFormDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLJssFormModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLNotifierModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["JssFormDemoComponent"], _counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"], _counter_component__WEBPACK_IMPORTED_MODULE_8__["FormFieldCounterComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["JssFormDemoComponent"], _counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"], _counter_component__WEBPACK_IMPORTED_MODULE_8__["FormFieldCounterComponent"]]
        })
    ], VCLJssFormDemoModule);
    return VCLJssFormDemoModule;
}());



/***/ }),

/***/ "./demo/app/demos/jss-form/hero.ts":
/*!*****************************************!*\
  !*** ./demo/app/demos/jss-form/hero.ts ***!
  \*****************************************/
/*! exports provided: HERO_SCHEMA, HERO_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERO_SCHEMA", function() { return HERO_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERO_DEFAULTS", function() { return HERO_DEFAULTS; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var HERO_SCHEMA = {
    type: 'form',
    fields: {
        name: {
            type: 'input',
            label: 'Name',
            placeholder: 'The hero\'s name',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)],
            required: true,
            hints: [
                {
                    type: 'error',
                    error: 'required',
                    message: 'Name is required'
                },
                {
                    type: 'error',
                    error: 'minlength',
                    message: 'Name must have a length of at least 2 characters'
                }
            ]
        },
        description: {
            type: 'textarea',
            label: 'Description',
            placeholder: 'The hero\'s Description',
            required: true,
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            hints: [
                {
                    type: 'default',
                    message: 'Name is required'
                },
                {
                    type: 'error',
                    error: 'required',
                    message: 'Description is required'
                }
            ]
        },
        leader: {
            type: 'switch',
            offLabel: 'No',
            onLabel: 'Yes',
            defaultValue: false,
            label: 'Leader'
        },
        picture: {
            type: 'file-input',
            label: 'Picture',
            multiple: false,
            placeholder: 'Picture of the hero'
        },
        email: {
            type: 'input',
            label: 'Email',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            required: true,
            hints: [
                {
                    type: 'error',
                    error: 'required',
                    message: 'Email is required'
                },
                {
                    type: 'error',
                    error: 'email',
                    message: 'Invalid Email address'
                }
            ]
        },
        gender: {
            type: 'radio-group',
            label: 'Gender',
            options: [{
                    label: 'Male',
                    value: 'm'
                }, {
                    label: 'Female',
                    value: 'f'
                }, {
                    label: 'Genderless',
                    value: 'g'
                }],
            defaultValue: 'm'
        },
        // alignment: {
        //   type: 'button-group',
        //   label: 'Alignment',
        //   options: [{
        //     label: 'Good',
        //     value: 1
        //   }, {
        //     label: 'Neutral',
        //     value: 0
        //   }, {
        //     label: 'Evil',
        //     value: -1
        //   }]
        // },
        hitpoints: {
            type: 'slider',
            label: 'Hit Points',
            min: 5,
            max: 20,
            scale: 16,
            lock: true
        },
        skills: {
            type: 'object',
            layout: 'fieldset',
            label: 'Skills',
            fields: {
                strength: {
                    type: 'rating',
                    label: function (label) { return "Strength (" + label + ")"; },
                    items: ['1', '2', '3', '4', '5'],
                    defaultValue: 3
                },
                agility: {
                    type: 'rating',
                    label: function (label) { return "Agility (" + label + ")"; },
                    items: ['1', '2', '3', '4', '5'],
                    defaultValue: 3
                },
                intelligence: {
                    type: 'rating',
                    label: function (label) { return "Intelligence (" + label + ")"; },
                    items: ['1', '2', '3', '4', '5'],
                    defaultValue: 3
                }
            },
            validators: [function (control) {
                    var s = control.get('strength');
                    var a = control.get('agility');
                    var i = control.get('intelligence');
                    var skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;
                    return skillPoints > 10 ? { skills: true } : null;
                }],
            hints: [
                function (control) {
                    var s = control.get('strength');
                    var a = control.get('agility');
                    var i = control.get('intelligence');
                    var skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;
                    var message = skillPoints + " of 10 skill points used";
                    if (control.hasError('skills')) {
                        return {
                            type: 'error',
                            message: message
                        };
                    }
                    else {
                        var skillPointsAvailable = 10 - skillPoints;
                        if (skillPointsAvailable > 0) {
                            return {
                                type: 'warning',
                                message: message
                            };
                        }
                        return {
                            type: 'default',
                            message: message
                        };
                    }
                }
            ]
        },
        attributes: {
            type: 'token',
            label: 'Attributes'
        },
        counter: {
            type: 'counter',
            label: 'Counter',
            defaultValue: 1
        },
        perks: {
            type: 'select',
            label: 'Perks',
            placeholder: 'Select perks',
            selectionMode: 'multiple',
            options: [{
                    label: 'Snake Eater',
                    sublabel: 'It gives you a 25% increase to your poison resistance.',
                    value: 'snakeeater'
                },
                {
                    label: 'Swift Learner',
                    sublabel: 'Swift Learner	Whenever you gain experience, you\'ll receive 5% more experience per level of the perk.',
                    value: 'swiftlearner',
                },
                {
                    label: 'Toughness',
                    sublabel: 'It adds 10% to your general damage resistance per level.',
                    value: 'toughness'
                },
                {
                    label: 'Explorer',
                    sublabel: 'You\'ll get more random encounters with this perk.',
                    value: 'explorer'
                }],
            validators: [
                function (ctrl) {
                    if (ctrl.value && Array.isArray(ctrl.value) && ctrl.value.length === 2) {
                        return null;
                    }
                    return {
                        perks: true
                    };
                }
            ],
            hints: [{
                    type: 'error',
                    error: 'perks',
                    message: 'You must select two perks'
                }],
        },
        terms: {
            type: 'checkbox',
            label: 'Agree to our terms',
            validators: [function (control) {
                    if (!control.value) {
                        return {
                            termsDisagree: true,
                        };
                    }
                    return null;
                }],
            hints: [
                'Read the terms to learn how we collect, use and share your data',
                {
                    type: 'error',
                    error: 'termsDisagree',
                    message: 'You must agree to our Terms'
                }
            ]
        },
        submit: {
            type: 'buttons',
            buttons: [
                {
                    type: 'submit',
                    label: 'Submit',
                    class: 'vclEmphasized'
                },
                {
                    type: 'button',
                    label: 'Reset',
                    action: 'reset'
                }
            ]
        }
    },
};
var HERO_DEFAULTS = {
    color: '#008000',
    gender: 'male',
    hp: 5,
    custom: 3,
    items: [{ name: 'Item 1', quantity: 2 }],
    perks: ['heave_ho']
};


/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/jss-form/demo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/jss-form/demo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Create a hero<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-jss-form</span> \n  #<span class=\"hljs-attr\">heroForm</span>=<span class=\"hljs-string\">\"vclJssForm\"</span>\n  [<span class=\"hljs-attr\">schema</span>]=<span class=\"hljs-string\">\"heroSchema\"</span> \n  (<span class=\"hljs-attr\">formSubmit</span>)=<span class=\"hljs-string\">\"onSubmit($event, heroForm.ngForm.valid)\"</span> \n  (<span class=\"hljs-attr\">formAction</span>)=<span class=\"hljs-string\">\"onAction($event)\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-jss-form</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"value\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h4</span>&gt;</span>Form<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h4</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>status: {{ heroForm.ngForm.status }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>valid: {{ heroForm.ngForm.valid }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>dirty: {{ heroForm.ngForm.dirty }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>submitted: {{ heroForm.ngForm.submitted }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>touched: {{ heroForm.ngForm.touched }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>pristine: {{ heroForm.ngForm.pristine }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>errors: {{ heroForm.ngForm.errors | json }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>value: {{ heroForm.ngForm.value | json }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/counter.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/jss-form/counter.component.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, Input, forwardRef } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { FormFieldControl, registerControlField } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { ControlValueAccessor, NG_VALUE_ACCESSOR } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/forms'</span>;\n\n\n<span class=\"hljs-meta\">@Component</span>({\n  selector: <span class=\"hljs-string\">'demo-counter'</span>,\n  template: <span class=\"hljs-string\">`\n  &lt;button vcl-button type=\"button\" (click)=\"decrement()\" style=\"margin-left: 5px;\"&gt;-&lt;/button&gt;\n  {{counter}}\n  &lt;button vcl-button type=\"button\" (click)=\"increment()\"&gt;+&lt;/button&gt;\n  `</span>,\n  providers: [{\n    provide: NG_VALUE_ACCESSOR,\n    useExisting: forwardRef(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> CounterComponent),\n    multi: <span class=\"hljs-literal\">true</span>\n  }]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CounterComponent <span class=\"hljs-keyword\">implements</span> ControlValueAccessor {\n  counter = <span class=\"hljs-number\">0</span>;\n  onChange;\n\n  increment() {\n    <span class=\"hljs-keyword\">this</span>.counter++;\n    <span class=\"hljs-keyword\">this</span>.onChange(<span class=\"hljs-keyword\">this</span>.counter);\n  }\n  decrement() {\n    <span class=\"hljs-keyword\">this</span>.counter--;\n    <span class=\"hljs-keyword\">this</span>.onChange(<span class=\"hljs-keyword\">this</span>.counter);\n  }\n  writeValue(obj: <span class=\"hljs-built_in\">any</span>): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>.counter = obj;\n  }\n  registerOnChange(fn: <span class=\"hljs-built_in\">any</span>): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>.onChange = fn;\n  }\n  registerOnTouched(fn: <span class=\"hljs-built_in\">any</span>): <span class=\"hljs-built_in\">void</span> { }\n}\n\n<span class=\"hljs-meta\">@Component</span>({\n  template: <span class=\"hljs-string\">`\n    &lt;span *ngIf=\"label\"&gt;{{ label }}&lt;/span&gt;&lt;br&gt;\n    &lt;demo-counter [formControl]=\"field.control\"&gt;&lt;/demo-counter&gt;\n    `</span>,\n    styles: [\n      <span class=\"hljs-string\">`:host {\n        display: block;\n        padding-bottom: 2em;\n      }`</span>\n    ]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FormFieldCounterComponent {\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">public</span> field: FormFieldControl</span>) {\n    <span class=\"hljs-keyword\">this</span>.label = field.schema.label || <span class=\"hljs-string\">''</span>;\n  }\n  label: <span class=\"hljs-built_in\">string</span>;\n}\n\nregisterControlField(<span class=\"hljs-string\">'counter'</span>, FormFieldCounterComponent);\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/demo.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/jss-form/demo.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit, ViewChild } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { HERO_SCHEMA, HERO_DEFAULTS } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./hero'</span>;\n<span class=\"hljs-keyword\">import</span> { JssFormComponent, NotifierService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> JssFormDemoComponent {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> notifier: NotifierService</span>) { }\n\n  <span class=\"hljs-meta\">@ViewChild</span>(<span class=\"hljs-string\">'heroForm'</span>)\n  heroForm: JssFormComponent;\n\n  heroSchema = HERO_SCHEMA;\n\n  value = {...HERO_DEFAULTS};\n\n  onSubmit() {\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.heroForm.ngForm.valid) {\n      <span class=\"hljs-keyword\">this</span>.notifier.success(<span class=\"hljs-string\">'Hero created'</span>);\n    } <span class=\"hljs-keyword\">else</span> {\n     <span class=\"hljs-keyword\">this</span>.notifier.error(<span class=\"hljs-string\">'Hero invalid'</span>);\n    }\n  }\n\n  onAction(action: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-keyword\">if</span> (action === <span class=\"hljs-string\">'reset'</span> &amp;&amp; <span class=\"hljs-keyword\">this</span>.heroForm.ngForm) {\n      <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.resetForm(<span class=\"hljs-keyword\">this</span>.heroForm.field.defaultValue);\n      <span class=\"hljs-keyword\">this</span>.notifier.info(<span class=\"hljs-string\">'Hero reset'</span>);\n    }\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/hero.ts":
/*!******************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/jss-form/hero.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Validators, AbstractControl } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { VCLFormFieldSchemaRoot } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> HERO_SCHEMA: VCLFormFieldSchemaRoot = {\n  <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'form'</span>,\n  fields: {\n    name: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'input'</span>,\n      label: <span class=\"hljs-string\">'Name'</span>,\n      placeholder: <span class=\"hljs-string\">'The hero\\'s name'</span>,\n      validators: [ Validators.required, Validators.minLength(<span class=\"hljs-number\">2</span>) ],\n      required: <span class=\"hljs-literal\">true</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'required'</span>,\n          message: <span class=\"hljs-string\">'Name is required'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'minlength'</span>,\n          message: <span class=\"hljs-string\">'Name must have a length of at least 2 characters'</span>\n        }\n      ]\n    },\n    description: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'textarea'</span>,\n      label: <span class=\"hljs-string\">'Description'</span>,\n      placeholder: <span class=\"hljs-string\">'The hero\\'s Description'</span>,\n      required: <span class=\"hljs-literal\">true</span>,\n      validators: [ Validators.required ],\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'default'</span>,\n          message: <span class=\"hljs-string\">'Name is required'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'required'</span>,\n          message: <span class=\"hljs-string\">'Description is required'</span>\n        }\n      ]\n    },\n    leader: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'switch'</span>,\n      offLabel: <span class=\"hljs-string\">'No'</span>,\n      onLabel: <span class=\"hljs-string\">'Yes'</span>,\n      defaultValue: <span class=\"hljs-literal\">false</span>,\n      label: <span class=\"hljs-string\">'Leader'</span>\n    },\n    picture: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'file-input'</span>,\n      label: <span class=\"hljs-string\">'Picture'</span>,\n      multiple: <span class=\"hljs-literal\">false</span>,\n      placeholder: <span class=\"hljs-string\">'Picture of the hero'</span>\n    },\n    email: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'input'</span>,\n      label: <span class=\"hljs-string\">'Email'</span>,\n      validators: [ Validators.required, Validators.email ],\n      required: <span class=\"hljs-literal\">true</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'required'</span>,\n          message: <span class=\"hljs-string\">'Email is required'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'email'</span>,\n          message: <span class=\"hljs-string\">'Invalid Email address'</span>\n        }\n      ]\n    },\n    gender: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'radio-group'</span>,\n      label: <span class=\"hljs-string\">'Gender'</span>,\n      options: [{\n        label: <span class=\"hljs-string\">'Male'</span>,\n        value: <span class=\"hljs-string\">'m'</span>\n      }, {\n        label: <span class=\"hljs-string\">'Female'</span>,\n        value: <span class=\"hljs-string\">'f'</span>\n      }, {\n        label: <span class=\"hljs-string\">'Genderless'</span>,\n        value: <span class=\"hljs-string\">'g'</span>\n      }],\n      defaultValue: <span class=\"hljs-string\">'m'</span>\n    },\n    <span class=\"hljs-comment\">// alignment: {</span>\n    <span class=\"hljs-comment\">//   type: 'button-group',</span>\n    <span class=\"hljs-comment\">//   label: 'Alignment',</span>\n    <span class=\"hljs-comment\">//   options: [{</span>\n    <span class=\"hljs-comment\">//     label: 'Good',</span>\n    <span class=\"hljs-comment\">//     value: 1</span>\n    <span class=\"hljs-comment\">//   }, {</span>\n    <span class=\"hljs-comment\">//     label: 'Neutral',</span>\n    <span class=\"hljs-comment\">//     value: 0</span>\n    <span class=\"hljs-comment\">//   }, {</span>\n    <span class=\"hljs-comment\">//     label: 'Evil',</span>\n    <span class=\"hljs-comment\">//     value: -1</span>\n    <span class=\"hljs-comment\">//   }]</span>\n    <span class=\"hljs-comment\">// },</span>\n    hitpoints: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'slider'</span>,\n      label: <span class=\"hljs-string\">'Hit Points'</span>,\n      min: <span class=\"hljs-number\">5</span>,\n      max: <span class=\"hljs-number\">20</span>,\n      scale: <span class=\"hljs-number\">16</span>,\n      lock: <span class=\"hljs-literal\">true</span>\n    },\n    skills: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'object'</span>,\n      layout: <span class=\"hljs-string\">'fieldset'</span>,\n      label: <span class=\"hljs-string\">'Skills'</span>,\n      fields: {\n        strength: {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'rating'</span>,\n          label: <span class=\"hljs-function\">(<span class=\"hljs-params\">label</span>) =&gt;</span> <span class=\"hljs-string\">`Strength (<span class=\"hljs-subst\">${label}</span>)`</span>,\n          items: [<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>, <span class=\"hljs-string\">'4'</span>, <span class=\"hljs-string\">'5'</span>],\n          defaultValue: <span class=\"hljs-number\">3</span>\n        },\n        agility: {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'rating'</span>,\n          label: <span class=\"hljs-function\">(<span class=\"hljs-params\">label</span>) =&gt;</span> <span class=\"hljs-string\">`Agility (<span class=\"hljs-subst\">${label}</span>)`</span>,\n          items: [<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>, <span class=\"hljs-string\">'4'</span>, <span class=\"hljs-string\">'5'</span>],\n          defaultValue: <span class=\"hljs-number\">3</span>\n        },\n        intelligence: {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'rating'</span>,\n          label: <span class=\"hljs-function\">(<span class=\"hljs-params\">label</span>) =&gt;</span> <span class=\"hljs-string\">`Intelligence (<span class=\"hljs-subst\">${label}</span>)`</span>,\n          items: [<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>, <span class=\"hljs-string\">'4'</span>, <span class=\"hljs-string\">'5'</span>],\n          defaultValue: <span class=\"hljs-number\">3</span>\n        }\n      },\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">const</span> s = control.get(<span class=\"hljs-string\">'strength'</span>);\n        <span class=\"hljs-keyword\">const</span> a = control.get(<span class=\"hljs-string\">'agility'</span>);\n        <span class=\"hljs-keyword\">const</span> i = control.get(<span class=\"hljs-string\">'intelligence'</span>);\n        <span class=\"hljs-keyword\">const</span> skillPoints = (s &amp;&amp; a &amp;&amp; i) ? (s.value + a.value + i.value) : <span class=\"hljs-number\">0</span>;\n        <span class=\"hljs-keyword\">return</span> skillPoints &gt; <span class=\"hljs-number\">10</span> ? { skills: <span class=\"hljs-literal\">true</span> } : <span class=\"hljs-literal\">null</span>;\n      }],\n      hints: [\n        <span class=\"hljs-function\">(<span class=\"hljs-params\">control</span>) =&gt;</span> {\n          <span class=\"hljs-keyword\">const</span> s = control.get(<span class=\"hljs-string\">'strength'</span>);\n          <span class=\"hljs-keyword\">const</span> a = control.get(<span class=\"hljs-string\">'agility'</span>);\n          <span class=\"hljs-keyword\">const</span> i = control.get(<span class=\"hljs-string\">'intelligence'</span>);\n          <span class=\"hljs-keyword\">const</span> skillPoints = (s &amp;&amp; a &amp;&amp; i) ? (s.value + a.value + i.value) : <span class=\"hljs-number\">0</span>;\n          <span class=\"hljs-keyword\">const</span> message = <span class=\"hljs-string\">`<span class=\"hljs-subst\">${skillPoints}</span> of 10 skill points used`</span>;\n          <span class=\"hljs-keyword\">if</span> (control.hasError(<span class=\"hljs-string\">'skills'</span>)) {\n            <span class=\"hljs-keyword\">return</span> {\n              <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n              message\n            };\n          } <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-keyword\">const</span> skillPointsAvailable = <span class=\"hljs-number\">10</span> - skillPoints;\n            <span class=\"hljs-keyword\">if</span> (skillPointsAvailable &gt; <span class=\"hljs-number\">0</span>) {\n              <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'warning'</span>,\n                message\n              };\n            }\n            <span class=\"hljs-keyword\">return</span> {\n              <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'default'</span>,\n              message\n            };\n          }\n        }\n      ]\n    },\n    attributes: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'token'</span>,\n      label: <span class=\"hljs-string\">'Attributes'</span>\n    },\n    counter: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'counter'</span>,\n      label: <span class=\"hljs-string\">'Counter'</span>,\n      defaultValue: <span class=\"hljs-number\">1</span>\n    },\n    perks: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'select'</span>,\n      label: <span class=\"hljs-string\">'Perks'</span>,\n      placeholder: <span class=\"hljs-string\">'Select perks'</span>,\n      selectionMode: <span class=\"hljs-string\">'multiple'</span>,\n      options: [{\n        label: <span class=\"hljs-string\">'Snake Eater'</span>,\n        sublabel: <span class=\"hljs-string\">'It gives you a 25% increase to your poison resistance.'</span>,\n        value: <span class=\"hljs-string\">'snakeeater'</span>\n      },\n      {\n        label: <span class=\"hljs-string\">'Swift Learner'</span>,\n        sublabel: <span class=\"hljs-string\">'Swift Learner\tWhenever you gain experience, you\\'ll receive 5% more experience per level of the perk.'</span>,\n        value: <span class=\"hljs-string\">'swiftlearner'</span>,\n      },\n      {\n        label: <span class=\"hljs-string\">'Toughness'</span>,\n        sublabel: <span class=\"hljs-string\">'It adds 10% to your general damage resistance per level.'</span>,\n        value: <span class=\"hljs-string\">'toughness'</span>\n      },\n      {\n        label: <span class=\"hljs-string\">'Explorer'</span>,\n        sublabel: <span class=\"hljs-string\">'You\\'ll get more random encounters with this perk.'</span>,\n        value: <span class=\"hljs-string\">'explorer'</span>\n      }],\n      validators: [\n        <span class=\"hljs-function\">(<span class=\"hljs-params\">ctrl: AbstractControl</span>) =&gt;</span> {\n          <span class=\"hljs-keyword\">if</span> (ctrl.value &amp;&amp; <span class=\"hljs-built_in\">Array</span>.isArray(ctrl.value) &amp;&amp; ctrl.value.length === <span class=\"hljs-number\">2</span>) {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n          }\n          <span class=\"hljs-keyword\">return</span> {\n            perks: <span class=\"hljs-literal\">true</span>\n          };\n        }\n      ],\n      hints: [{\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n        error: <span class=\"hljs-string\">'perks'</span>,\n        message: <span class=\"hljs-string\">'You must select two perks'</span>\n      }],\n    },\n    terms: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'checkbox'</span>,\n      label: <span class=\"hljs-string\">'Agree to our terms'</span>,\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (!control.value) {\n          <span class=\"hljs-keyword\">return</span> {\n            termsDisagree: <span class=\"hljs-literal\">true</span>,\n          };\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n      }],\n      hints: [\n        <span class=\"hljs-string\">'Read the terms to learn how we collect, use and share your data'</span>,\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'termsDisagree'</span>,\n          message: <span class=\"hljs-string\">'You must agree to our Terms'</span>\n        }\n      ]\n    },\n    submit: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'buttons'</span>,\n      buttons: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'submit'</span>,\n          label: <span class=\"hljs-string\">'Submit'</span>,\n          <span class=\"hljs-keyword\">class</span>: <span class=\"hljs-string\">'vclEmphasized'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'button'</span>,\n          label: <span class=\"hljs-string\">'Reset'</span>,\n          action: <span class=\"hljs-string\">'reset'</span>\n        }\n      ]\n    }\n  },\n};\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> HERO_DEFAULTS = {\n  color: <span class=\"hljs-string\">'#008000'</span>,\n  gender: <span class=\"hljs-string\">'male'</span>,\n  hp: <span class=\"hljs-number\">5</span>,\n  custom: <span class=\"hljs-number\">3</span>,\n  items: [{name: <span class=\"hljs-string\">'Item 1'</span>, quantity: <span class=\"hljs-number\">2</span>}],\n  perks: [<span class=\"hljs-string\">'heave_ho'</span>]\n};\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/jss-form/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/jss-form/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-jss-form\">vcl-jss-form</h1>\n<p>Creates a html-form from a <a href=\"http://jsonschema.net/\">jsonschema</a>.</p>\n<h2 id=\"installation\">Installation</h2>\n<pre class=\"hljs\"><code>npm install @ng-vcl/jss-form --save</code></pre>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLJssFormModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLJssFormModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><code>&lt;vcl-jss-form [schema]=&quot;mySchema&quot; [(ngModel)]=&quot;value&quot; (ngSubmit)=&quot;onSubmit($event)&quot; (action)=&quot;onAction($event)&quot; &gt;&lt;/vcl-jss-form&gt;</code></pre>\n<p>example-schema:</p>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">const</span> HERO_SCHEMA: VCLFormSchema = {\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">&apos;hero schema&apos;</span>,\n  <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;object&apos;</span>,\n  <span class=\"hljs-attr\">properties</span>: {\n    <span class=\"hljs-attr\">name</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;input&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Name&apos;</span>,\n      <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s name&apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s name&apos;</span>,\n      <span class=\"hljs-attr\">validator</span>: {\n        <span class=\"hljs-attr\">minLength</span>: <span class=\"hljs-number\">4</span>,\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&apos;string&apos;</span>\n      }\n    },\n    <span class=\"hljs-attr\">description</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;textarea&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Description&apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s description&apos;</span>,\n    },\n    <span class=\"hljs-attr\">password</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;password&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Password&apos;</span>,\n      <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">&apos;Password&apos;</span>,\n      <span class=\"hljs-attr\">visibleIcon</span>: <span class=\"hljs-string\">&apos; fas fa-unlock &apos;</span>,\n      <span class=\"hljs-attr\">invisibleIcon</span>: <span class=\"hljs-string\">&apos; fas fa-unlock-alt &apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The account password&apos;</span>\n    },\n    <span class=\"hljs-attr\">mail_old</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;hidden&apos;</span>,\n    },\n    <span class=\"hljs-attr\">color</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;select&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Team&apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;color defines which team the hero belongs to&apos;</span>,\n      <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">&apos;single&apos;</span>,\n      <span class=\"hljs-attr\">options</span>: [\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Red&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;#ff0000&apos;</span>\n        },\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Green&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;#008000&apos;</span>\n        },\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Blue&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;#0000FF&apos;</span>,\n          <span class=\"hljs-attr\">sublabel</span>: <span class=\"hljs-string\">&apos;Sublabels!&apos;</span>\n        },\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Yellow&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;#FFFF00&apos;</span>\n        }\n      ]\n    },\n    <span class=\"hljs-attr\">gender</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;radio&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Gender&apos;</span>,\n      <span class=\"hljs-attr\">options</span>: [{<span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;male&apos;</span>}, {<span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;female&apos;</span>}],\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s gender&apos;</span>,\n    },\n    <span class=\"hljs-attr\">perks</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;dropdown&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Perks&apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s perks&apos;</span>,\n      <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">&apos;multiple&apos;</span>,\n      <span class=\"hljs-attr\">validator</span>: {\n        <span class=\"hljs-attr\">minItems</span>: <span class=\"hljs-number\">1</span>,\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&apos;array&apos;</span>\n      },\n      <span class=\"hljs-attr\">options</span>: [\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Heave Ho!&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;heave_ho    &apos;</span>\n        },\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Snakeater&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;snakeater&apos;</span>,\n          <span class=\"hljs-attr\">sublabel</span>: <span class=\"hljs-string\">&apos;Sublabels!&apos;</span>\n        },\n        {\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Karma Beacon&apos;</span>,\n          <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">&apos;karma_beacon&apos;</span>\n        },\n      ]\n    },\n    <span class=\"hljs-attr\">leader</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;checkbox&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Leader&apos;</span>,\n      <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;Whether the hero is a leader&apos;</span>,\n    },\n    <span class=\"hljs-attr\">hp</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;slider&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Hitpoints&apos;</span>,\n      <span class=\"hljs-attr\">minimum</span>: <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-attr\">maximum</span>: <span class=\"hljs-number\">20</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s max health&apos;</span>,\n    },\n    <span class=\"hljs-attr\">alive</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;switch&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Is alive?&apos;</span>,\n    },\n    <span class=\"hljs-attr\">mainSkill</span>: {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Main skill&apos;</span>,\n      <span class=\"hljs-attr\">description</span>: <span class=\"hljs-string\">&apos;nested object&apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s main skill&apos;</span>,\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;object&apos;</span>,\n      <span class=\"hljs-attr\">properties</span>: {\n        <span class=\"hljs-attr\">name</span>: {\n          <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;input&apos;</span>,\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Skill name&apos;</span>,\n          <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The skills name&apos;</span>,\n          <span class=\"hljs-attr\">validator</span>: {\n            <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&apos;string&apos;</span>,\n            <span class=\"hljs-attr\">minLength</span>: <span class=\"hljs-number\">6</span>\n          }\n        },\n        <span class=\"hljs-attr\">damage</span>: {\n          <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;number&apos;</span>,\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Skill damage&apos;</span>,\n          <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The skills max damage&apos;</span>,\n          <span class=\"hljs-attr\">validator</span>: {\n            <span class=\"hljs-attr\">type</span>: [<span class=\"hljs-string\">&apos;number&apos;</span>, <span class=\"hljs-string\">&apos;null&apos;</span>],\n            <span class=\"hljs-attr\">minimum</span>: <span class=\"hljs-number\">0</span>,\n            <span class=\"hljs-attr\">maximum</span>: <span class=\"hljs-number\">100</span>,\n          }\n        }\n      },\n    },\n    <span class=\"hljs-attr\">attributes</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;token&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Attributes&apos;</span>,\n    },\n    <span class=\"hljs-attr\">dob</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;date&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Date of Birth&apos;</span>,\n      <span class=\"hljs-attr\">datePickerConfig</span>: {\n        <span class=\"hljs-attr\">displayTime</span>: <span class=\"hljs-literal\">true</span>\n      }\n    },\n    <span class=\"hljs-attr\">custom</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;custom&apos;</span>,\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Custom Component&apos;</span>,\n      <span class=\"hljs-attr\">customComponent</span>: CustomSampleComponent,\n      <span class=\"hljs-attr\">customParameters</span>: {\n        <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&apos;Counter:&apos;</span>\n      }\n    },\n    <span class=\"hljs-attr\">items</span>: {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Items&apos;</span>,\n      <span class=\"hljs-attr\">singularLabel</span>: <span class=\"hljs-string\">&apos;Item&apos;</span>,\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;array&apos;</span>,\n      <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The hero\\&apos;s items&apos;</span>,\n      <span class=\"hljs-attr\">items</span>: {\n        <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;object&apos;</span>,\n        <span class=\"hljs-attr\">properties</span>: {\n          <span class=\"hljs-attr\">name</span>: {\n            <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;input&apos;</span>,\n            <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Item name&apos;</span>,\n            <span class=\"hljs-attr\">validator</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">c: AbstractControl</span>) =&gt;</span> {\n              <span class=\"hljs-keyword\">if</span> (c.value) {\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n              }\n              <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">foo</span>: <span class=\"hljs-string\">&apos;bar&apos;</span>\n              };\n            },\n            <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The items name&apos;</span>,\n            <span class=\"hljs-attr\">classInputGroup</span>: <span class=\"hljs-string\">&apos;vclLayoutHorizontal&apos;</span>,\n            <span class=\"hljs-attr\">classLabel</span>: <span class=\"hljs-string\">&apos;vclLayoutFlex vclLayout1 vclAlignRight paddingRight1&apos;</span>,\n            <span class=\"hljs-attr\">classInput</span>: <span class=\"hljs-string\">&apos;vclLayoutFlex vclLayout11&apos;</span>\n          },\n          <span class=\"hljs-attr\">quantity</span>: {\n            <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;number&apos;</span>,\n            <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Quantity&apos;</span>,\n            <span class=\"hljs-attr\">hint</span>: <span class=\"hljs-string\">&apos;The item quantity&apos;</span>,\n            <span class=\"hljs-attr\">required</span>: <span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">classInputGroup</span>: <span class=\"hljs-string\">&apos;vclLayoutHorizontal&apos;</span>,\n            <span class=\"hljs-attr\">classLabel</span>: <span class=\"hljs-string\">&apos;vclLayoutFlex vclLayout1 vclAlignRight paddingRight1&apos;</span>,\n            <span class=\"hljs-attr\">classInput</span>: <span class=\"hljs-string\">&apos;vclLayoutFlex vclLayout11&apos;</span>\n          }\n        }\n      }\n    },\n    <span class=\"hljs-attr\">submit</span>: {\n      <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;buttons&apos;</span>,\n      <span class=\"hljs-attr\">buttons</span>: [\n        {\n          <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;submit&apos;</span>,\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Submit&apos;</span>,\n          <span class=\"hljs-attr\">class</span>: <span class=\"hljs-string\">&apos;vclEmphasized&apos;</span>\n        },\n        {\n          <span class=\"hljs-attr\">formControl</span>: <span class=\"hljs-string\">&apos;button&apos;</span>,\n          <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&apos;Reset&apos;</span>,\n          <span class=\"hljs-attr\">action</span>: <span class=\"hljs-string\">&apos;reset&apos;</span>\n        }\n      ]\n    }\n  },\n};</pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-jss-form-attributes\">vcl-jss-form attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>schema</code></td>\n<td>object</td>\n<td></td>\n<td>a jsonschema to build the form from</td>\n</tr>\n<tr>\n<td><code>ngModel</code></td>\n<td>any</td>\n<td>Value of the form</td>\n<td></td>\n</tr>\n</tbody></table>\n<h4 id=\"jss-form-events\">jss-form events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngSubmit</code></td>\n<td>any</td>\n<td>triggered when the form is submitted</td>\n</tr>\n<tr>\n<td><code>action</code></td>\n<td>any</td>\n<td>triggered when a button is pressed</td>\n</tr>\n</tbody></table>\n<h4 id=\"vclformschemabase-attributes\">VCLFormSchemaBase attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>formControl</code></td>\n<td>string</td>\n<td></td>\n<td>defines the input-type of the form-element. For types see below.</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>a label-string. attribute name will be the default</td>\n</tr>\n<tr>\n<td><code>hint</code></td>\n<td>string</td>\n<td></td>\n<td>defines a hint placed under input field</td>\n</tr>\n<tr>\n<td><code>required</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>form input is required</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>form input is disabled</td>\n</tr>\n<tr>\n<td><code>validator</code></td>\n<td>ValidatorFn</td>\n<td>jssSchema</td>\n<td></td>\n</tr>\n</tbody></table>\n<h4 id=\"formcontrols\">formControls</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>ValueType</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>custom</code></td>\n<td>any</td>\n</tr>\n<tr>\n<td><code>input</code></td>\n<td>string</td>\n</tr>\n<tr>\n<td><code>textarea</code></td>\n<td>string</td>\n</tr>\n<tr>\n<td><code>password</code></td>\n<td>string</td>\n</tr>\n<tr>\n<td><code>hidden</code></td>\n<td>string</td>\n</tr>\n<tr>\n<td><code>select</code></td>\n<td>string of enum</td>\n</tr>\n<tr>\n<td><code>radio</code></td>\n<td>string of enum</td>\n</tr>\n<tr>\n<td><code>checkbox</code></td>\n<td>boolean</td>\n</tr>\n<tr>\n<td><code>switch</code></td>\n<td>boolean</td>\n</tr>\n<tr>\n<td><code>number</code></td>\n<td>number</td>\n</tr>\n<tr>\n<td><code>slider</code></td>\n<td>number</td>\n</tr>\n<tr>\n<td><code>button</code></td>\n<td>number</td>\n</tr>\n<tr>\n<td><code>submit</code></td>\n<td>number</td>\n</tr>\n<tr>\n<td><code>buttons</code></td>\n<td>number</td>\n</tr>\n<tr>\n<td><code>date</code></td>\n<td>date</td>\n</tr>\n</tbody></table>\n<pre class=\"hljs\">export interface VCLFormSchemaInput extends VCLFormSchemaBase {\n  formControl: &apos;input&apos; | &apos;number&apos;;\n  placeholder?: string;\n}\n\nexport interface VCLFormSchemaPassword extends VCLFormSchemaBase {\n  formControl: &apos;password&apos;;\n  placeholder?: string;\n  visibleIcon?: string;\n  invisibleIcon?: string;\n}\n\nexport interface VCLFormSchemaHidden extends VCLFormSchemaBase {\n  formControl: &apos;hidden&apos;;\n}\n\nexport interface VCLFormSchemaTextarea extends VCLFormSchemaBase {\n  formControl: &apos;textarea&apos;;\n  minRows: number;\n  maxRows: number;\n}\n\nexport interface VCLFormSchemaOptions {\n  label?: string;\n  sublabel?: string;\n  value: any;\n}\n\nexport interface VCLFormSchemaSelect extends VCLFormSchemaBase {\n  formControl: &apos;select&apos;;\n  mode: &apos;multiple&apos; | &apos;single&apos;;\n  expandedIcon: string;\n  collapsedIcon: string;\n  options: VCLFormSchemaOptions[];\n}\n\nexport interface VCLFormSchemaDropdown extends VCLFormSchemaBase {\n  formControl: &apos;dropdown&apos;;\n  mode: &apos;multiple&apos; | &apos;single&apos;;\n  options: VCLFormSchemaOptions[];\n}\n\nexport interface VCLFormSchemaSwitch extends VCLFormSchemaBase {\n  formControl: &apos;switch&apos;;\n}\n\nexport interface VCLFormSchemaSlider extends VCLFormSchemaBase {\n  formControl: &apos;slider&apos;;\n  scale?: number | string[];\n  minimum: number;\n  maximum: number;\n}\nexport interface VCLFormSchemaCheckbox extends VCLFormSchemaBase {\n  formControl: &apos;checkbox&apos;;\n  iconPosition: &apos;left&apos; | &apos;right&apos;;\n  checkedIcon: string;\n  uncheckedIcon: string;\n}\n\nexport interface VCLFormSchemaRadio extends VCLFormSchemaBase {\n  formControl: &apos;radio&apos;;\n  iconPosition: &apos;left&apos; | &apos;right&apos;;\n  checkedIcon: string;\n  uncheckedIcon: string;\n  options: VCLFormSchemaOptions[];\n}\n\nexport interface VCLFormSchemaToken extends VCLFormSchemaBase {\n  formControl: &apos;token&apos;;\n}\n\nexport interface VCLFormSchemaDate extends VCLFormSchemaBase {\n  formControl: &apos;date&apos;;\n  datePickerConfig: DatePickerConfig;\n}\n\nexport interface VCLFormSchemaSubmit extends VCLFormSchemaBase {\n  prepIcon: string;\n  appIcon: string;\n  class: string;\n  autoDisable: boolean;\n  formControl: &apos;submit&apos;;\n}\n\nexport interface VCLFormSchemaButton extends VCLFormSchemaBase {\n  prepIcon: string;\n  appIcon: string;\n  class: string;\n  action: any;\n  formControl: &apos;button&apos;;\n}\n\nexport interface VCLFormSchemaButtons extends VCLFormSchemaBase {\n  formControl: &apos;buttons&apos;;\n  buttons: VCLFormSchemaButton[];\n}\n\nexport interface VCLFormSchemaArray extends VCLFormSchemaBase {\n  formControl: &apos;array&apos;;\n}\n\nexport interface VCLFormSchemaRoot extends VCLFormSchemaBase {\n  formControl: &apos;object&apos;;\n  title?: string;\n  description?: string;\n  properties?: { [name: string]: VCLFormSchema };\n}\n\nexport interface VCLFormSchemaCustom extends VCLFormSchemaBase {\n  formControl: &apos;custom&apos;;\n  type: string;\n  customComponent: ControlValueAccessory;\n  customParameters: any;\n}\n\nexport type VCLFormSchema = VCLFormSchemaRoot | VCLFormSchemaInput | VCLFormSchemaTextarea\n                          | VCLFormSchemaPassword | VCLFormSchemaHidden\n                          | VCLFormSchemaCheckbox | VCLFormSchemaArray | VCLFormSchemaSelect\n                          | VCLFormSchemaDropdown | VCLFormSchemaSwitch | VCLFormSchemaSlider\n                          | VCLFormSchemaRadio | VCLFormSchemaToken | VCLFormSchemaDate\n                          | VCLFormSchemaCustom | VCLFormSchemaSubmit | VCLFormSchemaButton\n                          | VCLFormSchemaButtons;\n</pre>\n<h4 id=\"customformcontrol\">CustomFormControl</h4>\n<p>A custom component should be an implementation of <code>ControlValueAccessor</code>.<br>Parameters provided in <code>customParameters</code> are accessible as inputs.</p>\n<pre class=\"hljs\"><span class=\"hljs-meta\">@Component</span>({\n  template: <span class=\"hljs-string\">`&lt;span&gt;{{ message }} {{ counter }}&lt;/span&gt;&lt;br&gt;\n  &lt;button vcl-button type=&quot;button&quot; class=&quot;vclButton&quot; [disabled]=&quot;disabled&quot; (click)=&quot;increment()&quot;&gt;+&lt;/button&gt;\n  &lt;button vcl-button type=&quot;button&quot; class=&quot;vclButton&quot; [disabled]=&quot;disabled&quot; (click)=&quot;decrement()&quot; style=&quot;margin-left: 5px;&quot;&gt;-&lt;/button&gt;`</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CustomSampleComponent <span class=\"hljs-keyword\">implements</span> ControlValueAccessor {\n\n  <span class=\"hljs-keyword\">get</span> counter(): <span class=\"hljs-built_in\">number</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._counter;\n  }\n\n  <span class=\"hljs-keyword\">set</span> counter(value: <span class=\"hljs-built_in\">number</span>) {\n    <span class=\"hljs-keyword\">this</span>._counter = value;\n    <span class=\"hljs-keyword\">this</span>.onChangeCallback &amp;&amp; <span class=\"hljs-keyword\">this</span>.onChangeCallback(value);\n  }\n\n  <span class=\"hljs-meta\">@Input</span>()\n  message = <span class=\"hljs-string\">&apos;&apos;</span>;\n\n  disabled = <span class=\"hljs-literal\">false</span>;\n\n  <span class=\"hljs-keyword\">private</span> _counter = <span class=\"hljs-number\">0</span>;\n\n  <span class=\"hljs-comment\">/**\n   * things needed for ControlValueAccessor-Interface\n   */</span>\n  <span class=\"hljs-keyword\">private</span> onTouchedCallback: <span class=\"hljs-function\">(<span class=\"hljs-params\">_: <span class=\"hljs-built_in\">any</span></span>) =&gt;</span> <span class=\"hljs-built_in\">void</span>;\n  <span class=\"hljs-keyword\">private</span> onChangeCallback: <span class=\"hljs-function\">(<span class=\"hljs-params\">_: <span class=\"hljs-built_in\">number</span> | <span class=\"hljs-literal\">undefined</span></span>) =&gt;</span> <span class=\"hljs-built_in\">void</span>;\n\n  increment() {\n    <span class=\"hljs-keyword\">this</span>.counter++;\n  }\n\n  decrement() {\n    <span class=\"hljs-keyword\">this</span>.counter--;\n  }\n\n  writeValue(value: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>._counter = value;\n  }\n\n  registerOnChange(fn: <span class=\"hljs-built_in\">any</span>) {\n    <span class=\"hljs-keyword\">this</span>.onChangeCallback = fn;\n  }\n\n  registerOnTouched(fn: <span class=\"hljs-built_in\">any</span>) {\n    <span class=\"hljs-keyword\">this</span>.onTouchedCallback = fn;\n  }\n\n  setDisabledState(isDisabled: <span class=\"hljs-built_in\">boolean</span>) {\n    <span class=\"hljs-keyword\">this</span>.disabled = isDisabled;\n  }\n\n}</pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-jss-form-demo-module.js.map