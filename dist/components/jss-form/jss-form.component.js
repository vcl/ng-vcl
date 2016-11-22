"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var Validator = require('jsonschema'); // TODO use import { Validator } from 'jsonschema';
var VALIDATOR;
var JssFormObjectComponent = (function () {
    function JssFormObjectComponent() {
        this.parentPath = '';
    }
    JssFormObjectComponent.prototype.formType = function (schemaObj) {
        if (schemaObj.formType)
            return schemaObj.formType;
        if (schemaObj.type == 'string') {
            if (schemaObj.enum) {
                return 'select';
            }
            return 'text';
        }
        if (schemaObj.type == 'number')
            return 'number';
        if (schemaObj.type == 'boolean')
            return 'switch';
    };
    JssFormObjectComponent.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    JssFormObjectComponent.prototype.name = function (parentPath, key) {
        var name = parentPath + '.' + key;
        while (name.charAt(0) === '.')
            name = name.substr(1);
        return name;
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
        'parentPath': [{ type: core_1.Input, args: ['parentPath',] },],
        'formGroup': [{ type: core_1.Input, args: ['formGroup',] },],
    };
    return JssFormObjectComponent;
}());
exports.JssFormObjectComponent = JssFormObjectComponent;
var JssFormComponent = (function () {
    function JssFormComponent(fb) {
        this.fb = fb;
        this.value = {};
    }
    JssFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', forms_1.Validators.required],
            color: ['', forms_1.Validators.required],
            hp: ['', forms_1.Validators.required],
            alive: ['', forms_1.Validators.required],
            mainSkill: this.fb.group({
                name: ['', forms_1.Validators.required],
                damage: ['', forms_1.Validators.required]
            })
        });
        // the module-based forms logic is made with the FormBuilder
        /*    this.form = this.fb.group(schemaToFormGroup(this.schema), {
              validator: (c: AbstractControl) => {
                return true; // TODO validate if form matches
    //         return c.get('myname').value === c.get('myname2').value
    //                      ? null : { notequal: true };
      }
    });*/
        this.value && this.form.patchValue(this.value);
        console.log('formGroup::::');
        console.dir(this.form);
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
                    templateUrl: 'jss-form.component.html'
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
