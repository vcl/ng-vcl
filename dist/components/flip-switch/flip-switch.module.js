"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var flip_switch_component_1 = require('./flip-switch.component');
var metalist_module_1 = require('../metalist/metalist.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLFlipSwitchModule = (function () {
    function VCLFlipSwitchModule() {
    }
    VCLFlipSwitchModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, metalist_module_1.VCLMetalistModule],
                    exports: [flip_switch_component_1.FlipSwitchComponent],
                    declarations: [flip_switch_component_1.FlipSwitchComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLFlipSwitchModule.ctorParameters = [];
    return VCLFlipSwitchModule;
}());
exports.VCLFlipSwitchModule = VCLFlipSwitchModule;
