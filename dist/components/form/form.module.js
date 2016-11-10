"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var form_component_1 = require('./form.component');
var VCLFormModule = (function () {
    function VCLFormModule() {
    }
    VCLFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [forms_1.ReactiveFormsModule, forms_1.FormsModule],
                    exports: [form_component_1.FormComponent, form_component_1.FormInputControlGroup, forms_1.FormsModule, forms_1.ReactiveFormsModule],
                    declarations: [form_component_1.FormComponent, form_component_1.FormInputControlGroup]
                },] },
    ];
    /** @nocollapse */
    VCLFormModule.ctorParameters = [];
    return VCLFormModule;
}());
exports.VCLFormModule = VCLFormModule;
