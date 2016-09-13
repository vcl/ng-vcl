"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var icon_module_1 = require('./../icon/icon.module');
var radio_button_component_1 = require('./radio-button.component');
var VCLRadioButtonModule = (function () {
    function VCLRadioButtonModule() {
    }
    VCLRadioButtonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, icon_module_1.VCLIconModule],
                    exports: [radio_button_component_1.RadioButtonComponent],
                    declarations: [radio_button_component_1.RadioButtonComponent]
                },] },
    ];
    /** @nocollapse */
    VCLRadioButtonModule.ctorParameters = [];
    return VCLRadioButtonModule;
}());
exports.VCLRadioButtonModule = VCLRadioButtonModule;
