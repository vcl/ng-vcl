(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-jss-form-demo-module"],{

/***/ "./demo/app/demos/jss-form/demo.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/jss-form/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create a hero</h2>\n<vcl-jss-form \n  #heroForm=\"vclJssForm\"\n  [schema]=\"heroSchema\" \n  (formSubmit)=\"onSubmit($event)\" \n  (formAction)=\"onAction($event)\">\n</vcl-jss-form>\n\n<div class=\"value\" *ngIf=\"state$ | async as formState\">\n  <h4>Form</h4>\n  <pre>{{formState | json}}</pre>\n</div>\n"

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
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero */ "./demo/app/demos/jss-form/hero.ts");






var JssFormDemoComponent = /** @class */ (function () {
    function JssFormDemoComponent(notifier) {
        this.notifier = notifier;
        this.heroSchema = _hero__WEBPACK_IMPORTED_MODULE_5__["HERO_SCHEMA"];
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
    JssFormDemoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.heroForm.ngForm.statusChanges, this.heroForm.ngForm.valueChanges, this.heroForm.ngForm.ngSubmit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return {
                status: _this.heroForm.ngForm.status,
                valid: _this.heroForm.ngForm.valid,
                dirty: _this.heroForm.ngForm.dirty,
                submitted: _this.heroForm.ngForm.submitted,
                touched: _this.heroForm.ngForm.touched,
                pristine: _this.heroForm.ngForm.pristine,
                errors: _this.heroForm.ngForm.errors,
                value: _this.heroForm.ngForm.value,
            };
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('heroForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["JssFormComponent"])
    ], JssFormDemoComponent.prototype, "heroForm", void 0);
    JssFormDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/jss-form/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])
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
/* harmony import */ var _jss_form_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jss-form-extended */ "./demo/app/demos/jss-form/jss-form-extended.ts");
/* harmony import */ var _form_control_group_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-control-group/counter.component */ "./demo/app/demos/form-control-group/counter.component.ts");










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
            'jss-form-extended.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./jss-form-extended.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/jss-form-extended.ts")
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
                _form_control_group_counter_component__WEBPACK_IMPORTED_MODULE_9__["VCLCounterModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLIcogramModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLButtonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLJssFormModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLNotifierModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["JssFormDemoComponent"], _jss_form_extended__WEBPACK_IMPORTED_MODULE_8__["FormFieldCounterComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["JssFormDemoComponent"], _jss_form_extended__WEBPACK_IMPORTED_MODULE_8__["FormFieldCounterComponent"]]
        })
    ], VCLJssFormDemoModule);
    return VCLJssFormDemoModule;
}());



/***/ }),

/***/ "./demo/app/demos/jss-form/hero.ts":
/*!*****************************************!*\
  !*** ./demo/app/demos/jss-form/hero.ts ***!
  \*****************************************/
/*! exports provided: HERO_SCHEMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERO_SCHEMA", function() { return HERO_SCHEMA; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");


var HERO_SCHEMA = {
    type: 'form',
    fields: [
        {
            name: 'name',
            type: 'input',
            label: 'Name',
            params: {
                placeholder: 'The hero\'s name',
                inputType: 'password'
            },
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)
            ],
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
        {
            type: 'textarea',
            name: 'description',
            label: 'Description',
            params: {
                placeholder: 'The hero\'s Description',
            }
        },
        {
            type: 'counter',
            name: 'level',
            label: 'Level',
            defaultValue: 1,
            params: {
                min: 1,
                max: 10
            }
        },
        {
            type: 'switch',
            name: 'leader',
            label: 'Leader',
            defaultValue: false,
            visible: Object(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["conditional"])(['level'], function (level) { return level.value >= 5; }),
            validators: [function (control) {
                    if (!control.value) {
                        return {
                            leader: true,
                        };
                    }
                    return null;
                }],
            params: {
                offLabel: 'No',
                onLabel: 'Yes',
            }
        },
        {
            type: 'file-input',
            name: 'picture',
            label: 'Picture',
            params: {
                multiple: false,
                placeholder: 'Picture of the hero'
            }
        },
        {
            type: 'input',
            name: 'email',
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
        {
            type: 'radio-group',
            name: 'gender',
            label: 'Gender',
            defaultValue: 'm',
            params: {
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
            }
        },
        {
            type: 'button-group',
            name: 'alignment',
            label: 'Alignment',
            params: {
                options: [{
                        label: 'Good',
                        value: 1
                    }, {
                        label: 'Neutral',
                        value: 0
                    }, {
                        label: 'Evil',
                        value: -1
                    }]
            }
        },
        {
            type: 'hidden',
            name: 'language',
            defaultValue: navigator.language
        },
        {
            type: 'select-list',
            name: 'class',
            label: 'Class',
            defaultValue: null,
            params: {
                options: [{
                        label: 'Warrior',
                        value: 'warrior'
                    }, {
                        label: 'Mage',
                        value: 'mage'
                    }, {
                        label: 'Rogue',
                        value: 'rogue'
                    }]
            }
        },
        {
            type: 'slider',
            name: 'hitpoints',
            label: 'Hit Points',
            defaultValue: 15,
            disabled: Object(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["conditional"])(['class'], function (c) { return !c.value; }),
            params: Object(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["conditional"])(['class'], function (control) {
                if (control.value === 'rogue') {
                    return {
                        min: 8,
                        max: 18,
                        scale: 11,
                        lock: true,
                    };
                }
                else if (control.value === 'mage') {
                    return {
                        min: 5,
                        max: 15,
                        scale: 11,
                        lock: true,
                    };
                }
                else {
                    return {
                        min: 10,
                        max: 20,
                        scale: 11,
                        lock: true,
                    };
                }
            }),
        },
        {
            type: 'object',
            name: 'skills',
            layout: 'fieldset',
            label: 'Skills',
            fields: [
                {
                    type: 'rating',
                    name: 'strength',
                    defaultValue: 3,
                    params: {
                        items: ['1', '2', '3', '4', '5'],
                        valueLabel: function (label) { return "Strength (" + label + ")"; },
                    },
                },
                {
                    type: 'rating',
                    name: 'agility',
                    defaultValue: 3,
                    params: {
                        items: ['1', '2', '3', '4', '5'],
                        valueLabel: function (label) { return "Agility (" + label + ")"; },
                    },
                },
                {
                    type: 'rating',
                    name: 'intelligence',
                    defaultValue: 3,
                    params: {
                        items: ['1', '2', '3', '4', '5'],
                        valueLabel: function (label) { return "Intelligence (" + label + ")"; },
                    },
                },
            ],
            validators: [function (control) {
                    var s = control.get('strength');
                    var a = control.get('agility');
                    var i = control.get('intelligence');
                    var skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;
                    return skillPoints > 10 ? { skills: true } : null;
                }],
            hints: [
                Object(_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_1__["conditional"])(['skills', 'skills.strength', 'skills.agility', 'skills.intelligence'], function (control, s, a, i) {
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
                })
            ]
        },
        {
            type: 'token',
            name: 'attributes',
            label: 'Attributes',
            hints: [
                {
                    type: 'default',
                    message: 'Attributes'
                },
                {
                    type: 'error',
                    error: 'minLength',
                    message: 'Minimum length is 2'
                },
            ],
            validators: [function (control) {
                    return Array.isArray(control.value) && control.value.length > 1 ? null : { minLength: true };
                }],
        },
        {
            type: 'select',
            name: 'perks',
            label: 'Perks',
            params: {
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
            },
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
        {
            type: 'array',
            name: 'items',
            label: 'Items',
            initialFields: 0,
            fieldLabel: function (index) { return 'Item ' + (index + 1); },
            noFieldsLabel: 'No items',
            field: {
                type: 'object',
                name: 'item_object',
                fields: [
                    {
                        type: 'input',
                        name: 'item_name',
                        label: 'Name',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                        required: true,
                        hints: [
                            {
                                type: 'error',
                                error: 'required',
                                message: 'Item name is required'
                            },
                        ]
                    },
                    {
                        type: 'input',
                        name: 'item_quantity',
                        label: 'Quantity',
                        params: {
                            inputType: 'number'
                        },
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(10)],
                        required: true,
                        hints: [
                            {
                                type: 'error',
                                error: 'required',
                                message: 'Item quantity is required'
                            },
                            {
                                type: 'error',
                                error: 'min',
                                message: 'Minimum is 1'
                            },
                            {
                                type: 'error',
                                error: 'max',
                                message: 'Maximum is 10'
                            },
                        ]
                    }
                ]
            }
        },
        {
            type: 'checkbox',
            name: 'terms',
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
                {
                    type: 'default',
                    message: 'Read the terms to learn how we collect, use and share your data'
                },
                {
                    type: 'error',
                    error: 'termsDisagree',
                    message: 'You must agree to our Terms'
                }
            ],
            errorStateAgent: function (host, input) { return input.ngControl.invalid && host.submitted; }
        },
        {
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
    ]
};


/***/ }),

/***/ "./demo/app/demos/jss-form/jss-form-extended.ts":
/*!******************************************************!*\
  !*** ./demo/app/demos/jss-form/jss-form-extended.ts ***!
  \******************************************************/
/*! exports provided: FormFieldCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldCounterComponent", function() { return FormFieldCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");



var FormFieldCounterComponent = /** @class */ (function () {
    function FormFieldCounterComponent(field) {
        this.field = field;
    }
    FormFieldCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <span *ngIf=\"field.label\">{{ field.label }}</span><br>\n    <demo-counter [formControl]=\"field.control\" [min]=\"field.params.min\" [max]=\"field.params.max\"></demo-counter>\n    ",
            styles: [":host {\n        display: block;\n        padding-top: 1em;\n        padding-bottom: 1em;\n      }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["FormFieldControl"]])
    ], FormFieldCounterComponent);
    return FormFieldCounterComponent;
}());

// Register counter component as field
_ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_2__["FormFieldControl"].register('counter', FormFieldCounterComponent);


/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/jss-form/demo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/jss-form/demo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>Create a hero<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-jss-form</span> \n  #<span class=\"hljs-attr\">heroForm</span>=<span class=\"hljs-string\">\"vclJssForm\"</span>\n  [<span class=\"hljs-attr\">schema</span>]=<span class=\"hljs-string\">\"heroSchema\"</span> \n  (<span class=\"hljs-attr\">formSubmit</span>)=<span class=\"hljs-string\">\"onSubmit($event)\"</span> \n  (<span class=\"hljs-attr\">formAction</span>)=<span class=\"hljs-string\">\"onAction($event)\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-jss-form</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"value\"</span> *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">\"state$ | async as formState\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h4</span>&gt;</span>Form<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h4</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span>&gt;</span>{{formState | json}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/demo.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/jss-form/demo.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ViewChild, AfterViewInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { JssFormComponent, NotifierService } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { merge, Observable } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { map } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'rxjs/operators'</span>;\n<span class=\"hljs-keyword\">import</span> { HERO_SCHEMA } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./hero'</span>;\n\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> JssFormDemoComponent <span class=\"hljs-keyword\">implements</span> AfterViewInit {\n\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> notifier: NotifierService</span>) { }\n\n  <span class=\"hljs-meta\">@ViewChild</span>(<span class=\"hljs-string\">'heroForm'</span>)\n  heroForm: JssFormComponent;\n\n  heroSchema = HERO_SCHEMA;\n\n  state$: Observable&lt;<span class=\"hljs-built_in\">any</span>&gt;;\n\n  onSubmit() {\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.heroForm.ngForm.valid) {\n      <span class=\"hljs-keyword\">this</span>.notifier.success(<span class=\"hljs-string\">'Hero created'</span>);\n    } <span class=\"hljs-keyword\">else</span> {\n     <span class=\"hljs-keyword\">this</span>.notifier.error(<span class=\"hljs-string\">'Hero invalid'</span>);\n    }\n  }\n\n  onAction(action: <span class=\"hljs-built_in\">string</span>) {\n    <span class=\"hljs-keyword\">if</span> (action === <span class=\"hljs-string\">'reset'</span> &amp;&amp; <span class=\"hljs-keyword\">this</span>.heroForm.ngForm) {\n      <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.resetForm(<span class=\"hljs-keyword\">this</span>.heroForm.field.defaultValue);\n      <span class=\"hljs-keyword\">this</span>.notifier.info(<span class=\"hljs-string\">'Hero reset'</span>);\n    }\n  }\n\n  ngAfterViewInit() {\n    <span class=\"hljs-keyword\">this</span>.state$ = merge(<span class=\"hljs-keyword\">this</span>.heroForm.ngForm.statusChanges, <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.valueChanges, <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.ngSubmit).pipe(\n      map(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n        <span class=\"hljs-keyword\">return</span> {\n          status: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.status,\n          valid: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.valid,\n          dirty: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.dirty,\n          submitted: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.submitted,\n          touched: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.touched,\n          pristine: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.pristine,\n          errors: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.errors,\n          value: <span class=\"hljs-keyword\">this</span>.heroForm.ngForm.value,\n        };\n      })\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/hero.ts":
/*!******************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/jss-form/hero.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Validators, AbstractControl } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { conditional } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n<span class=\"hljs-keyword\">import</span> { ExtendedFormFieldSchemaRoot } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./jss-form-extended'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> HERO_SCHEMA: ExtendedFormFieldSchemaRoot = {\n  <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'form'</span>,\n  fields: [\n    {\n      name: <span class=\"hljs-string\">'name'</span>,\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'input'</span>,\n      label: <span class=\"hljs-string\">'Name'</span>,\n      params: {\n        placeholder: <span class=\"hljs-string\">'The hero\\'s name'</span>,\n        inputType: <span class=\"hljs-string\">'password'</span>\n      },\n      validators: [\n        Validators.required, Validators.minLength(<span class=\"hljs-number\">2</span>)\n      ],\n      required: <span class=\"hljs-literal\">true</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'required'</span>,\n          message: <span class=\"hljs-string\">'Name is required'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'minlength'</span>,\n          message: <span class=\"hljs-string\">'Name must have a length of at least 2 characters'</span>\n        }\n      ]\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'textarea'</span>,\n      name: <span class=\"hljs-string\">'description'</span>,\n      label: <span class=\"hljs-string\">'Description'</span>,\n      params: {\n        placeholder: <span class=\"hljs-string\">'The hero\\'s Description'</span>,\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'counter'</span>,\n      name: <span class=\"hljs-string\">'level'</span>,\n      label: <span class=\"hljs-string\">'Level'</span>,\n      defaultValue: <span class=\"hljs-number\">1</span>,\n      params: {\n        min: <span class=\"hljs-number\">1</span>,\n        max: <span class=\"hljs-number\">10</span>\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'switch'</span>,\n      name: <span class=\"hljs-string\">'leader'</span>,\n      label: <span class=\"hljs-string\">'Leader'</span>,\n      defaultValue: <span class=\"hljs-literal\">false</span>,\n      visible: conditional([<span class=\"hljs-string\">'level'</span>], <span class=\"hljs-function\">(<span class=\"hljs-params\">level: AbstractControl</span>) =&gt;</span> level.value &gt;= <span class=\"hljs-number\">5</span>),\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (!control.value) {\n          <span class=\"hljs-keyword\">return</span> {\n            leader: <span class=\"hljs-literal\">true</span>,\n          };\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n      }],\n      params: {\n        offLabel: <span class=\"hljs-string\">'No'</span>,\n        onLabel: <span class=\"hljs-string\">'Yes'</span>,\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'file-input'</span>,\n      name: <span class=\"hljs-string\">'picture'</span>,\n      label: <span class=\"hljs-string\">'Picture'</span>,\n      params: {\n        multiple: <span class=\"hljs-literal\">false</span>,\n        placeholder: <span class=\"hljs-string\">'Picture of the hero'</span>\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'input'</span>,\n      name: <span class=\"hljs-string\">'email'</span>,\n      label: <span class=\"hljs-string\">'Email'</span>,\n      validators: [Validators.required, Validators.email],\n      required: <span class=\"hljs-literal\">true</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'required'</span>,\n          message: <span class=\"hljs-string\">'Email is required'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'email'</span>,\n          message: <span class=\"hljs-string\">'Invalid Email address'</span>\n        }\n      ]\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'radio-group'</span>,\n      name: <span class=\"hljs-string\">'gender'</span>,\n      label: <span class=\"hljs-string\">'Gender'</span>,\n      defaultValue: <span class=\"hljs-string\">'m'</span>,\n      params: {\n        options: [{\n          label: <span class=\"hljs-string\">'Male'</span>,\n          value: <span class=\"hljs-string\">'m'</span>\n        }, {\n          label: <span class=\"hljs-string\">'Female'</span>,\n          value: <span class=\"hljs-string\">'f'</span>\n        }, {\n          label: <span class=\"hljs-string\">'Genderless'</span>,\n          value: <span class=\"hljs-string\">'g'</span>\n        }],\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'button-group'</span>,\n      name: <span class=\"hljs-string\">'alignment'</span>,\n      label: <span class=\"hljs-string\">'Alignment'</span>,\n      params: {\n        options: [{\n          label: <span class=\"hljs-string\">'Good'</span>,\n          value: <span class=\"hljs-number\">1</span>\n        }, {\n          label: <span class=\"hljs-string\">'Neutral'</span>,\n          value: <span class=\"hljs-number\">0</span>\n        }, {\n          label: <span class=\"hljs-string\">'Evil'</span>,\n          value: <span class=\"hljs-number\">-1</span>\n        }]\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'hidden'</span>,\n      name: <span class=\"hljs-string\">'language'</span>,\n      defaultValue: navigator.language\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'select-list'</span>,\n      name: <span class=\"hljs-string\">'class'</span>,\n      label: <span class=\"hljs-string\">'Class'</span>,\n      defaultValue: <span class=\"hljs-literal\">null</span>,\n      params: {\n        options: [{\n          label: <span class=\"hljs-string\">'Warrior'</span>,\n          value: <span class=\"hljs-string\">'warrior'</span>\n        }, {\n          label: <span class=\"hljs-string\">'Mage'</span>,\n          value: <span class=\"hljs-string\">'mage'</span>\n        }, {\n          label: <span class=\"hljs-string\">'Rogue'</span>,\n          value: <span class=\"hljs-string\">'rogue'</span>\n        }]\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'slider'</span>,\n      name: <span class=\"hljs-string\">'hitpoints'</span>,\n      label: <span class=\"hljs-string\">'Hit Points'</span>,\n      defaultValue: <span class=\"hljs-number\">15</span>,\n      disabled: conditional([<span class=\"hljs-string\">'class'</span>], <span class=\"hljs-function\">(<span class=\"hljs-params\">c</span>) =&gt;</span> !c.value),\n      params: conditional([<span class=\"hljs-string\">'class'</span>], <span class=\"hljs-function\">(<span class=\"hljs-params\">control</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (control.value === <span class=\"hljs-string\">'rogue'</span>) {\n          <span class=\"hljs-keyword\">return</span> {\n            min: <span class=\"hljs-number\">8</span>,\n            max: <span class=\"hljs-number\">18</span>,\n            scale: <span class=\"hljs-number\">11</span>,\n            lock: <span class=\"hljs-literal\">true</span>,\n          };\n        }  <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (control.value === <span class=\"hljs-string\">'mage'</span>) {\n          <span class=\"hljs-keyword\">return</span> {\n            min: <span class=\"hljs-number\">5</span>,\n            max: <span class=\"hljs-number\">15</span>,\n            scale: <span class=\"hljs-number\">11</span>,\n            lock: <span class=\"hljs-literal\">true</span>,\n          };\n        } <span class=\"hljs-keyword\">else</span> {\n          <span class=\"hljs-keyword\">return</span> {\n            min: <span class=\"hljs-number\">10</span>,\n            max: <span class=\"hljs-number\">20</span>,\n            scale: <span class=\"hljs-number\">11</span>,\n            lock: <span class=\"hljs-literal\">true</span>,\n          };\n        }\n      }),\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'object'</span>,\n      name: <span class=\"hljs-string\">'skills'</span>,\n      layout: <span class=\"hljs-string\">'fieldset'</span>,\n      label: <span class=\"hljs-string\">'Skills'</span>,\n      fields: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'rating'</span>,\n          name: <span class=\"hljs-string\">'strength'</span>,\n          defaultValue: <span class=\"hljs-number\">3</span>,\n          params: {\n            items: [<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>, <span class=\"hljs-string\">'4'</span>, <span class=\"hljs-string\">'5'</span>],\n            valueLabel: <span class=\"hljs-function\">(<span class=\"hljs-params\">label</span>) =&gt;</span> <span class=\"hljs-string\">`Strength (<span class=\"hljs-subst\">${label}</span>)`</span>,\n          },\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'rating'</span>,\n          name: <span class=\"hljs-string\">'agility'</span>,\n          defaultValue: <span class=\"hljs-number\">3</span>,\n          params: {\n            items: [<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>, <span class=\"hljs-string\">'4'</span>, <span class=\"hljs-string\">'5'</span>],\n            valueLabel: <span class=\"hljs-function\">(<span class=\"hljs-params\">label</span>) =&gt;</span> <span class=\"hljs-string\">`Agility (<span class=\"hljs-subst\">${label}</span>)`</span>,\n          },\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'rating'</span>,\n          name: <span class=\"hljs-string\">'intelligence'</span>,\n          defaultValue: <span class=\"hljs-number\">3</span>,\n          params: {\n            items: [<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>, <span class=\"hljs-string\">'4'</span>, <span class=\"hljs-string\">'5'</span>],\n            valueLabel: <span class=\"hljs-function\">(<span class=\"hljs-params\">label</span>) =&gt;</span> <span class=\"hljs-string\">`Intelligence (<span class=\"hljs-subst\">${label}</span>)`</span>,\n          },\n        },\n      ],\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">const</span> s = control.get(<span class=\"hljs-string\">'strength'</span>);\n        <span class=\"hljs-keyword\">const</span> a = control.get(<span class=\"hljs-string\">'agility'</span>);\n        <span class=\"hljs-keyword\">const</span> i = control.get(<span class=\"hljs-string\">'intelligence'</span>);\n        <span class=\"hljs-keyword\">const</span> skillPoints = (s &amp;&amp; a &amp;&amp; i) ? (s.value + a.value + i.value) : <span class=\"hljs-number\">0</span>;\n        <span class=\"hljs-keyword\">return</span> skillPoints &gt; <span class=\"hljs-number\">10</span> ? { skills: <span class=\"hljs-literal\">true</span> } : <span class=\"hljs-literal\">null</span>;\n      }],\n      hints: [\n        conditional([<span class=\"hljs-string\">'skills'</span>, <span class=\"hljs-string\">'skills.strength'</span>, <span class=\"hljs-string\">'skills.agility'</span>, <span class=\"hljs-string\">'skills.intelligence'</span>], <span class=\"hljs-function\">(<span class=\"hljs-params\">control, s, a, i</span>) =&gt;</span> {\n          <span class=\"hljs-keyword\">const</span> skillPoints = (s &amp;&amp; a &amp;&amp; i) ? (s.value + a.value + i.value) : <span class=\"hljs-number\">0</span>;\n          <span class=\"hljs-keyword\">const</span> message = <span class=\"hljs-string\">`<span class=\"hljs-subst\">${skillPoints}</span> of 10 skill points used`</span>;\n          <span class=\"hljs-keyword\">if</span> (control.hasError(<span class=\"hljs-string\">'skills'</span>)) {\n            <span class=\"hljs-keyword\">return</span> {\n              <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n              message\n            };\n          } <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-keyword\">const</span> skillPointsAvailable = <span class=\"hljs-number\">10</span> - skillPoints;\n            <span class=\"hljs-keyword\">if</span> (skillPointsAvailable &gt; <span class=\"hljs-number\">0</span>) {\n              <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'warning'</span>,\n                message\n              };\n            }\n            <span class=\"hljs-keyword\">return</span> {\n              <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'default'</span>,\n              message\n            };\n          }\n        })\n      ]\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'token'</span>,\n      name: <span class=\"hljs-string\">'attributes'</span>,\n      label: <span class=\"hljs-string\">'Attributes'</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'default'</span>,\n          message: <span class=\"hljs-string\">'Attributes'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'minLength'</span>,\n          message: <span class=\"hljs-string\">'Minimum length is 2'</span>\n        },\n      ],\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Array</span>.isArray(control.value) &amp;&amp; control.value.length &gt; <span class=\"hljs-number\">1</span> ? <span class=\"hljs-literal\">null</span> : { minLength: <span class=\"hljs-literal\">true</span> };\n      }],\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'select'</span>,\n      name: <span class=\"hljs-string\">'perks'</span>,\n      label: <span class=\"hljs-string\">'Perks'</span>,\n      params: {\n        placeholder: <span class=\"hljs-string\">'Select perks'</span>,\n        selectionMode: <span class=\"hljs-string\">'multiple'</span>,\n        options: [{\n          label: <span class=\"hljs-string\">'Snake Eater'</span>,\n          sublabel: <span class=\"hljs-string\">'It gives you a 25% increase to your poison resistance.'</span>,\n          value: <span class=\"hljs-string\">'snakeeater'</span>\n        },\n        {\n          label: <span class=\"hljs-string\">'Swift Learner'</span>,\n          sublabel: <span class=\"hljs-string\">'Swift Learner\tWhenever you gain experience, you\\'ll receive 5% more experience per level of the perk.'</span>,\n          value: <span class=\"hljs-string\">'swiftlearner'</span>,\n        },\n        {\n          label: <span class=\"hljs-string\">'Toughness'</span>,\n          sublabel: <span class=\"hljs-string\">'It adds 10% to your general damage resistance per level.'</span>,\n          value: <span class=\"hljs-string\">'toughness'</span>\n        },\n        {\n          label: <span class=\"hljs-string\">'Explorer'</span>,\n          sublabel: <span class=\"hljs-string\">'You\\'ll get more random encounters with this perk.'</span>,\n          value: <span class=\"hljs-string\">'explorer'</span>\n        }],\n      },\n      validators: [\n        <span class=\"hljs-function\">(<span class=\"hljs-params\">ctrl: AbstractControl</span>) =&gt;</span> {\n          <span class=\"hljs-keyword\">if</span> (ctrl.value &amp;&amp; <span class=\"hljs-built_in\">Array</span>.isArray(ctrl.value) &amp;&amp; ctrl.value.length === <span class=\"hljs-number\">2</span>) {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n          }\n          <span class=\"hljs-keyword\">return</span> {\n            perks: <span class=\"hljs-literal\">true</span>\n          };\n        }\n      ],\n      hints: [{\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n        error: <span class=\"hljs-string\">'perks'</span>,\n        message: <span class=\"hljs-string\">'You must select two perks'</span>\n      }],\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'array'</span>,\n      name: <span class=\"hljs-string\">'items'</span>,\n      label: <span class=\"hljs-string\">'Items'</span>,\n      initialFields: <span class=\"hljs-number\">0</span>,\n      fieldLabel: <span class=\"hljs-function\">(<span class=\"hljs-params\">index</span>) =&gt;</span> <span class=\"hljs-string\">'Item '</span> + (index + <span class=\"hljs-number\">1</span>),\n      noFieldsLabel: <span class=\"hljs-string\">'No items'</span>,\n      field: {\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'object'</span>,\n        name: <span class=\"hljs-string\">'item_object'</span>,\n        fields: [\n          {\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'input'</span>,\n            name: <span class=\"hljs-string\">'item_name'</span>,\n            label: <span class=\"hljs-string\">'Name'</span>,\n            validators: [ Validators.required],\n            required: <span class=\"hljs-literal\">true</span>,\n            hints: [\n              {\n                <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n                error: <span class=\"hljs-string\">'required'</span>,\n                message: <span class=\"hljs-string\">'Item name is required'</span>\n              },\n            ]\n          },\n          {\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'input'</span>,\n            name: <span class=\"hljs-string\">'item_quantity'</span>,\n            label: <span class=\"hljs-string\">'Quantity'</span>,\n            params: {\n              inputType: <span class=\"hljs-string\">'number'</span>\n            },\n            validators: [ Validators.required, Validators.min(<span class=\"hljs-number\">1</span>), Validators.max(<span class=\"hljs-number\">10</span>)],\n            required: <span class=\"hljs-literal\">true</span>,\n            hints: [\n              {\n                <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n                error: <span class=\"hljs-string\">'required'</span>,\n                message: <span class=\"hljs-string\">'Item quantity is required'</span>\n              },\n              {\n                <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n                error: <span class=\"hljs-string\">'min'</span>,\n                message: <span class=\"hljs-string\">'Minimum is 1'</span>\n              },\n              {\n                <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n                error: <span class=\"hljs-string\">'max'</span>,\n                message: <span class=\"hljs-string\">'Maximum is 10'</span>\n              },\n            ]\n          }\n        ]\n      }\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'checkbox'</span>,\n      name: <span class=\"hljs-string\">'terms'</span>,\n      label: <span class=\"hljs-string\">'Agree to our terms'</span>,\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (!control.value) {\n          <span class=\"hljs-keyword\">return</span> {\n            termsDisagree: <span class=\"hljs-literal\">true</span>,\n          };\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n      }],\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'default'</span>,\n          message: <span class=\"hljs-string\">'Read the terms to learn how we collect, use and share your data'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'error'</span>,\n          error: <span class=\"hljs-string\">'termsDisagree'</span>,\n          message: <span class=\"hljs-string\">'You must agree to our Terms'</span>\n        }\n      ],\n      errorStateAgent: <span class=\"hljs-function\">(<span class=\"hljs-params\">host, input</span>) =&gt;</span> input.ngControl.invalid &amp;&amp; host.submitted\n    },\n    {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'buttons'</span>,\n      buttons: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'submit'</span>,\n          label: <span class=\"hljs-string\">'Submit'</span>,\n          <span class=\"hljs-keyword\">class</span>: <span class=\"hljs-string\">'vclEmphasized'</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'button'</span>,\n          label: <span class=\"hljs-string\">'Reset'</span>,\n          action: <span class=\"hljs-string\">'reset'</span>\n        }\n      ]\n    }\n  ]\n};\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/jss-form/jss-form-extended.ts":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/jss-form/jss-form-extended.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { VCLFormFieldSchemaRoot, FormFieldControl, VCLFormFieldControlSchema, Conditional } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@ng-vcl/ng-vcl'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  template: <span class=\"hljs-string\">`\n    &lt;span *ngIf=\"field.label\"&gt;{{ field.label }}&lt;/span&gt;&lt;br&gt;\n    &lt;demo-counter [formControl]=\"field.control\" [min]=\"field.params.min\" [max]=\"field.params.max\"&gt;&lt;/demo-counter&gt;\n    `</span>,\n    styles: [\n      <span class=\"hljs-string\">`:host {\n        display: block;\n        padding-top: 1em;\n        padding-bottom: 1em;\n      }`</span>\n    ]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> FormFieldCounterComponent {\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">public</span> field: FormFieldControl</span>) { }\n}\n\n<span class=\"hljs-comment\">// Register counter component as field</span>\nFormFieldControl.register(<span class=\"hljs-string\">'counter'</span>, FormFieldCounterComponent);\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> CounterSchemaParams {\n  min?: <span class=\"hljs-built_in\">number</span>;\n  max?: <span class=\"hljs-built_in\">number</span>;\n}\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> CounterSchema <span class=\"hljs-keyword\">extends</span> VCLFormFieldControlSchema {\n  <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'counter'</span>;\n  params?: CounterSchemaParams | Conditional&lt;CounterSchemaParams&gt;;\n}\n\n<span class=\"hljs-comment\">// Add counter to schema</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">type</span> ExtendedFormFieldSchemaRoot = VCLFormFieldSchemaRoot&lt;CounterSchema&gt;;\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/jss-form/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/jss-form/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-jss-form\">vcl-jss-form</h1>\n<p>Creates a html-form from a provided schema.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLJssFormModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n<span class=\"hljs-meta\">@NgModule</span>({\n  imports: [ VCLJssFormModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> AppComponent {}</pre>\n<pre class=\"hljs\"><code>&lt;vcl-jss-form [schema]=&quot;mySchema&quot; (formSubmit)=&quot;onSubmit($event)&quot; (formAction)=&quot;onAction($event)&quot; &gt;&lt;/vcl-jss-form&gt;</code></pre>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { Validators } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@angular/forms&apos;</span>;\n<span class=\"hljs-keyword\">import</span> { VCLFormFieldSchemaRoot } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n<span class=\"hljs-keyword\">const</span> SCHEMA: VCLFormFieldSchemaRoot = {\n  <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;form&apos;</span>,\n  fields: {\n    name: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;input&apos;</span>,\n      label: <span class=\"hljs-string\">&apos;Name&apos;</span>,\n      params: {\n        placeholder: <span class=\"hljs-string\">&apos;Your name&apos;</span>,\n      },\n      validators: [\n        Validators.required, Validators.minLength(<span class=\"hljs-number\">2</span>)\n      ],\n      required: <span class=\"hljs-literal\">true</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;error&apos;</span>,\n          error: <span class=\"hljs-string\">&apos;required&apos;</span>,\n          message: <span class=\"hljs-string\">&apos;Name is required&apos;</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;error&apos;</span>,\n          error: <span class=\"hljs-string\">&apos;minlength&apos;</span>,\n          message: <span class=\"hljs-string\">&apos;Name must have a length of at least 2 characters&apos;</span>\n        }\n      ]\n    },\n    email: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;input&apos;</span>,\n      label: <span class=\"hljs-string\">&apos;Email&apos;</span>,\n      validators: [Validators.email],\n      required: <span class=\"hljs-literal\">false</span>,\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;error&apos;</span>,\n          error: <span class=\"hljs-string\">&apos;email&apos;</span>,\n          message: <span class=\"hljs-string\">&apos;Invalid Email address&apos;</span>\n        }\n      ]\n    },\n    gender: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;radio-group&apos;</span>,\n      label: <span class=\"hljs-string\">&apos;Gender&apos;</span>,\n      defaultValue: <span class=\"hljs-string\">&apos;m&apos;</span>,\n      params: {\n        options: [{\n          label: <span class=\"hljs-string\">&apos;Male&apos;</span>,\n          value: <span class=\"hljs-string\">&apos;m&apos;</span>\n        }, {\n          label: <span class=\"hljs-string\">&apos;Female&apos;</span>,\n          value: <span class=\"hljs-string\">&apos;f&apos;</span>\n        }, {\n          label: <span class=\"hljs-string\">&apos;Genderless&apos;</span>,\n          value: <span class=\"hljs-string\">&apos;g&apos;</span>\n        }],\n      }\n    },\n    language: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;hidden&apos;</span>,\n      defaultValue: navigator.language\n    },\n    terms: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;checkbox&apos;</span>,\n      label: <span class=\"hljs-string\">&apos;Agree to our terms&apos;</span>,\n      validators: [<span class=\"hljs-function\">(<span class=\"hljs-params\">control: AbstractControl</span>) =&gt;</span> {\n        <span class=\"hljs-keyword\">if</span> (!control.value) {\n          <span class=\"hljs-keyword\">return</span> {\n            termsDisagree: <span class=\"hljs-literal\">true</span>,\n          };\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n      }],\n      hints: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;default&apos;</span>,\n          message: <span class=\"hljs-string\">&apos;Read the terms to learn how we collect, use and share your data&apos;</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;error&apos;</span>,\n          error: <span class=\"hljs-string\">&apos;termsDisagree&apos;</span>,\n          message: <span class=\"hljs-string\">&apos;You must agree to our Terms&apos;</span>\n        }\n      ]\n    },\n    submit: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;buttons&apos;</span>,\n      buttons: [\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;submit&apos;</span>,\n          label: <span class=\"hljs-string\">&apos;Submit&apos;</span>,\n          <span class=\"hljs-keyword\">class</span>: <span class=\"hljs-string\">&apos;vclEmphasized&apos;</span>\n        },\n        {\n          <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;button&apos;</span>,\n          label: <span class=\"hljs-string\">&apos;Reset&apos;</span>,\n          action: <span class=\"hljs-string\">&apos;reset&apos;</span>\n        }\n      ]\n    }\n  },\n};</pre>\n<h4 id=\"conditional-properties\">Conditional properties</h4>\n<p>Some properties can be conditional and change when another field value changes.</p>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLFormFieldSchemaRoot, conditional } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n<span class=\"hljs-keyword\">const</span> SCHEMA: VCLFormFieldSchemaRoot = {\n  <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;form&apos;</span>,\n  fields: {\n    one: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;checkbox&apos;</span>,\n      label: <span class=\"hljs-string\">&apos;One&apos;</span>\n    },\n    two: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;checkbox&apos;</span>,\n      visible: conditional([<span class=\"hljs-string\">&apos;one&apos;</span>, <span class=\"hljs-function\">(<span class=\"hljs-params\">one</span>) =&gt;</span> !!one.value])\n      label: <span class=\"hljs-string\">&apos;Two&apos;</span>,\n    }\n  }\n}</pre>\n<h4 id=\"custom-fields\">Custom fields</h4>\n<p>A component used in a custom field must implement the <code>ControlValueAccessor</code> interface to support the <code>formControl</code> directive.</p>\n<pre class=\"hljs\"><span class=\"hljs-meta\">@Component</span>({\n  template: <span class=\"hljs-string\">`\n    &lt;span *ngIf=&quot;field.label&quot;&gt;{{ field.label }}&lt;/span&gt;&lt;br&gt;\n    &lt;my-counter [formControl]=&quot;field.control&quot; [max]=&quot;field.params.max&quot;&gt;&lt;/my-counter&gt;\n    `</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CounterFormFieldComponent {\n  <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">public</span> field: FormFieldControl</span>) { }\n}\n\nFormFieldControl.register(<span class=\"hljs-string\">&apos;counter&apos;</span>, CounterFormFieldComponent);</pre>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLFormFieldSchemaRoot, conditional } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n<span class=\"hljs-keyword\">const</span> SCHEMA: VCLFormFieldSchemaRoot = {\n  <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;form&apos;</span>,\n  fields: {\n    level: {\n      <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">&apos;counter&apos;</span>,\n      label: <span class=\"hljs-string\">&apos;Counter&apos;</span>,\n      params: {\n        max: <span class=\"hljs-number\">10</span>\n      }\n    }\n  }\n}</pre>\n"

/***/ })

}]);
//# sourceMappingURL=demos-jss-form-demo-module.js.map