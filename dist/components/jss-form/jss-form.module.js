"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var jss_form_component_1 = require('./jss-form.component');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLJssFormModule = (function () {
    function VCLJssFormModule() {
    }
    VCLJssFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule],
                    exports: [jss_form_component_1.JssFormComponent],
                    declarations: [jss_form_component_1.JssFormComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLJssFormModule.ctorParameters = [];
    return VCLJssFormModule;
}());
exports.VCLJssFormModule = VCLJssFormModule;
