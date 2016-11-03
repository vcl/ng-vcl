"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var month_selector_component_1 = require('./month-selector.component');
var button_module_1 = require('../button/button.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLMonthSelectorModule = (function () {
    function VCLMonthSelectorModule() {
    }
    VCLMonthSelectorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, button_module_1.VCLButtonModule, l10n_module_1.L10nModule],
                    exports: [month_selector_component_1.MonthSelectorComponent],
                    declarations: [month_selector_component_1.MonthSelectorComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLMonthSelectorModule.ctorParameters = [];
    return VCLMonthSelectorModule;
}());
exports.VCLMonthSelectorModule = VCLMonthSelectorModule;
