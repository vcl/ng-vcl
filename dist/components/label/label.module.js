"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var label_component_1 = require('./label.component');
var metalist_module_1 = require('../metalist/metalist.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLLabelModule = (function () {
    function VCLLabelModule() {
    }
    VCLLabelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, metalist_module_1.VCLMetalistModule],
                    exports: [label_component_1.LabelComponent],
                    declarations: [label_component_1.LabelComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLLabelModule.ctorParameters = [];
    return VCLLabelModule;
}());
exports.VCLLabelModule = VCLLabelModule;
