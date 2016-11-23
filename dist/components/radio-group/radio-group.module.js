"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var icon_module_1 = require('./../icon/icon.module');
var radio_group_component_1 = require('./radio-group.component');
var radio_button_module_1 = require('../radio-button/radio-button.module');
var VCLRadioGroupModule = (function () {
    function VCLRadioGroupModule() {
    }
    VCLRadioGroupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, icon_module_1.VCLIconModule, radio_button_module_1.VCLRadioButtonModule],
                    exports: [radio_group_component_1.RadioGroupComponent],
                    declarations: [radio_group_component_1.RadioGroupComponent]
                },] },
    ];
    /** @nocollapse */
    VCLRadioGroupModule.ctorParameters = [];
    return VCLRadioGroupModule;
}());
exports.VCLRadioGroupModule = VCLRadioGroupModule;
