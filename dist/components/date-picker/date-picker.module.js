"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var date_picker_component_1 = require('./date-picker.component');
var button_module_1 = require('../button/button.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLDatePickerModule = (function () {
    function VCLDatePickerModule() {
    }
    VCLDatePickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, button_module_1.VCLButtonModule, l10n_module_1.L10nModule],
                    exports: [date_picker_component_1.DatePickerComponent],
                    declarations: [date_picker_component_1.DatePickerComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLDatePickerModule.ctorParameters = [];
    return VCLDatePickerModule;
}());
exports.VCLDatePickerModule = VCLDatePickerModule;
