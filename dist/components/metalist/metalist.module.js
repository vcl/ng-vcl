"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var metalist_component_1 = require('./metalist.component');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLMetalistModule = (function () {
    function VCLMetalistModule() {
    }
    VCLMetalistModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule],
                    exports: [metalist_component_1.MetalistComponent],
                    declarations: [metalist_component_1.MetalistComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLMetalistModule.ctorParameters = [];
    return VCLMetalistModule;
}());
exports.VCLMetalistModule = VCLMetalistModule;
