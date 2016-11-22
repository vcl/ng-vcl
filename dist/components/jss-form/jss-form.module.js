"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var jss_form_component_1 = require('./jss-form.component');
var l10n_module_1 = require('../../l10n/l10n.module');
var forms_1 = require('@angular/forms');
var flip_switch_module_1 = require('../flip-switch/flip-switch.module');
var slider_module_1 = require('../slider/slider.module');
var VCLJssFormModule = (function () {
    function VCLJssFormModule() {
    }
    VCLJssFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                        flip_switch_module_1.VCLFlipSwitchModule,
                        slider_module_1.VCLSliderModule],
                    exports: [jss_form_component_1.JssFormComponent, jss_form_component_1.JssFormObjectComponent],
                    declarations: [jss_form_component_1.JssFormComponent, jss_form_component_1.JssFormObjectComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLJssFormModule.ctorParameters = [];
    return VCLJssFormModule;
}());
exports.VCLJssFormModule = VCLJssFormModule;
