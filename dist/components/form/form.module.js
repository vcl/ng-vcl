"use strict";
var core_1 = require('@angular/core');
var form_component_1 = require('./form.component');
var VCLFormModule = (function () {
    function VCLFormModule() {
    }
    VCLFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [form_component_1.FormComponent],
                    declarations: [form_component_1.FormComponent]
                },] },
    ];
    /** @nocollapse */
    VCLFormModule.ctorParameters = [];
    return VCLFormModule;
}());
exports.VCLFormModule = VCLFormModule;
