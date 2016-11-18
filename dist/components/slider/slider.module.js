"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var slider_component_1 = require('./slider.component');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLSliderModule = (function () {
    function VCLSliderModule() {
    }
    VCLSliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule],
                    exports: [slider_component_1.SliderComponent],
                    declarations: [slider_component_1.SliderComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLSliderModule.ctorParameters = [];
    return VCLSliderModule;
}());
exports.VCLSliderModule = VCLSliderModule;
