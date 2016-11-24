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
var Validator = require('jsonschema').Validator;
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
    JssFormObjectComponent.prototype.placeholder = function (schemaObj) {
        if (typeof schemaObj.placeholder !== "undefined")
            return schemaObj.placeholder;
        return '';
    };
    JssFormObjectComponent.prototype.radioOptions = function (schemaObj) {
        var opts = schemaObj.enum.map(function (str) {
            return {
                label: str,
                value: str
            };
        });
        return opts;
    };
    return JssFormObjectComponent;
}());
__decorate([
    core_1.Input('schema'),
    __metadata("design:type", Object)
], JssFormObjectComponent.prototype, "schema", void 0);
__decorate([
    core_1.Input('parentPath'),
    __metadata("design:type", String)
], JssFormObjectComponent.prototype, "parentPath", void 0);
__decorate([
    core_1.Input('formGroup'),
    __metadata("design:type", forms_1.FormGroup)
], JssFormObjectComponent.prototype, "formGroup", void 0);
JssFormObjectComponent = __decorate([
    core_1.Component({
        selector: 'vcl-jss-form-object',
        templateUrl: 'jss-form-object.component.html',
    }),
    __metadata("design:paramtypes", [])
], JssFormObjectComponent);
exports.JssFormObjectComponent = JssFormObjectComponent;
var JssFormComponent = (function () {
    function JssFormComponent(fb) {
        this.fb = fb;
        this.value = {};
        this.error = new core_1.EventEmitter();
    }
    JssFormComponent.prototype.ngOnInit = function () {
        this.form = this.formGroupFromSchema(this.schema);
        this.value && this.form.patchValue(this.value);
    };
    JssFormComponent.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    JssFormComponent.prototype.formGroupFromSchema = function (schemaObj) {
        var _this = this;
        var ret = {};
        Object.keys(schemaObj.properties)
            .filter(function (k) { return schemaObj.properties[k].type != 'object'; })
            .map(function (k) { return ret[k] = ['']; });
        Object.keys(schemaObj.properties)
            .filter(function (k) { return schemaObj.properties[k].type == 'object'; })
            .map(function (k) { return ret[k] = _this.formGroupFromSchema(schemaObj.properties[k]); });
        return this.fb.group(ret, {
            validator: function (c) {
                var errors = _this.jsonSchemaValidate(c.value, schemaObj);
                return errors;
            }
        });
    };
    JssFormComponent.prototype.jsonSchemaValidate = function (obj, schema) {
        if (schema === void 0) { schema = this.schema; }
        if (!VALIDATOR)
            VALIDATOR = new Validator();
        var valid = VALIDATOR.validate(obj, schema);
        if (valid.errors.length == 0) {
            this.error.emit(null);
            return null;
        }
        this.error.emit(valid.errors);
        return valid.errors;
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
__decorate([
    core_1.Output('error'),
    __metadata("design:type", Object)
], JssFormComponent.prototype, "error", void 0);
JssFormComponent = __decorate([
    core_1.Component({
        selector: 'vcl-jss-form',
        templateUrl: 'jss-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], JssFormComponent);
exports.JssFormComponent = JssFormComponent;
