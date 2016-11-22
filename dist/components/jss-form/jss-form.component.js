"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var schemaToFormGroup_1 = require('./schemaToFormGroup');
var Validator = require('jsonschema'); // TODO use import { Validator } from 'jsonschema';
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
    JssFormObjectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-jss-form-object',
                    templateUrl: 'jss-form-object.component.html',
                },] },
    ];
    /** @nocollapse */
    JssFormObjectComponent.ctorParameters = [];
    JssFormObjectComponent.propDecorators = {
        'schema': [{ type: core_1.Input, args: ['schema',] },],
    };
    return JssFormObjectComponent;
}());
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
        // the module-based forms logic is made with the FormBuilder
        this.form = this.fb.group(schemaToFormGroup_1.schemaToFormGroup(this.schema), {
            validator: function (c) {
                return true; // TODO validate if form matches
                /*        return c.get('myname').value === c.get('myname2').value
                          ? null : { notequal: true };*/
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
    JssFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-jss-form',
                    templateUrl: 'jss-form.component.html',
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    JssFormComponent.ctorParameters = [
        { type: forms_1.FormBuilder, },
    ];
    JssFormComponent.propDecorators = {
        'schema': [{ type: core_1.Input, args: ['schema',] },],
        'value': [{ type: core_1.Input, args: ['value',] },],
    };
    return JssFormComponent;
}());
exports.JssFormComponent = JssFormComponent;
