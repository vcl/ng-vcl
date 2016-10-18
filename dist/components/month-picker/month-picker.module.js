"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var month_picker_component_1 = require('./month-picker.component');
var button_module_1 = require('../button/button.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLMonthPickerModule = (function () {
    function VCLMonthPickerModule() {
    }
    VCLMonthPickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, button_module_1.VCLButtonModule, l10n_module_1.L10nModule],
                    exports: [month_picker_component_1.MonthPickerComponent],
                    declarations: [month_picker_component_1.MonthPickerComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLMonthPickerModule.ctorParameters = [];
    return VCLMonthPickerModule;
}());
exports.VCLMonthPickerModule = VCLMonthPickerModule;
