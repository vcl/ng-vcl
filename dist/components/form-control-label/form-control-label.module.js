"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var icon_module_1 = require('./../icon/icon.module');
var form_control_label_component_1 = require('./form-control-label.component');
var VCLFormControlLabelModule = (function () {
    function VCLFormControlLabelModule() {
    }
    VCLFormControlLabelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, icon_module_1.VCLIconModule],
                    exports: [form_control_label_component_1.FormControlLabelComponent],
                    declarations: [form_control_label_component_1.FormControlLabelComponent]
                },] },
    ];
    /** @nocollapse */
    VCLFormControlLabelModule.ctorParameters = [];
    return VCLFormControlLabelModule;
}());
exports.VCLFormControlLabelModule = VCLFormControlLabelModule;
