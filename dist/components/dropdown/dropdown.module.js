"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var dropdown_component_1 = require('./dropdown.component');
var metalist_module_1 = require('../metalist/metalist.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLDropdownModule = (function () {
    function VCLDropdownModule() {
    }
    VCLDropdownModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, metalist_module_1.VCLMetalistModule],
                    exports: [dropdown_component_1.DropdownComponent],
                    declarations: [dropdown_component_1.DropdownComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLDropdownModule.ctorParameters = [];
    return VCLDropdownModule;
}());
exports.VCLDropdownModule = VCLDropdownModule;
