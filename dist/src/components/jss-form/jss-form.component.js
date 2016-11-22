"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var schemaToFormGroup_1 = require("./schemaToFormGroup");
var Validator = require('jsonschema');
var VALIDATOR;
var JssFormObjectComponent = (function () {
    function JssFormObjectComponent() {
    }
    JssFormObjectComponent.prototype.inputSwitch = function (schemaObj) {
        if (schemaObj.type == 'string')
            return 'textinput';
        if (schemaObj.type == 'number')
            return 'numberinput';
    };
    JssFormObjectComponent.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    return JssFormObjectComponent;
}());
__decorate([
    core_1.Input('schema'),
    __metadata("design:type", Object)
], JssFormObjectComponent.prototype, "schema", void 0);
JssFormObjectComponent = __decorate([
    core_1.Component({
        selector: 'vcl-jss-form-object',
        templateUrl: 'jss-form-object.component.html',
    }),
    __metadata("design:paramtypes", [])
], JssFormObjectComponent);
exports.JssFormObjectComponent = JssFormObjectComponent;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return JssFormComponent; }),
    multi: true
};
var JssFormComponent = (function () {
    function JssFormComponent(fb) {
        this.fb = fb;
        this.value = {};
    }
    JssFormComponent.prototype.ngOnInit = function () {
        console.log('constructor:');
        console.dir(this.schema);
        this.form = this.fb.group(schemaToFormGroup_1.schemaToFormGroup(this.schema), {
            validator: function (c) {
                return true;
            }
        });
        this.value && this.form.patchValue(this.value);
    };
    JssFormComponent.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    JssFormComponent.prototype.jsonSchemaValidate = function (obj) {
        if (!VALIDATOR)
            VALIDATOR = new Validator();
        var valid = VALIDATOR.validate(obj, this.schema);
        if (valid.errors.length > 0) {
            throw new Error(JSON.stringify({
                name: 'schema mismatch',
                errors: valid.errors,
                object: obj,
                schema: this.schema
            }));
        }
        return true;
    };
    JssFormComponent.prototype.ngAfterViewInit = function () {
    };
    return JssFormComponent;
}());
__decorate([
    core_1.Input('schema'),
    __metadata("design:type", Object)
], JssFormComponent.prototype, "schema", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], JssFormComponent.prototype, "value", void 0);
JssFormComponent = __decorate([
    core_1.Component({
        selector: 'vcl-jss-form',
        templateUrl: 'jss-form.component.html',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], JssFormComponent);
exports.JssFormComponent = JssFormComponent;
