"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var dropdown_module_1 = require('../dropdown/dropdown.module');
var button_module_1 = require('../button/button.module');
var select_component_1 = require('./select.component');
var popover_module_1 = require('../popover/popover.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var off_click_module_1 = require('../../directives/off-click/off-click.module');
var VCLSelectModule = (function () {
    function VCLSelectModule() {
    }
    VCLSelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, dropdown_module_1.VCLDropdownModule, button_module_1.VCLButtonModule, off_click_module_1.VCLOffClickModule, popover_module_1.VCLPopoverModule],
                    exports: [select_component_1.SelectComponent, select_component_1.SelectOptionComponent],
                    declarations: [select_component_1.SelectComponent, select_component_1.SelectOptionComponent],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    VCLSelectModule.ctorParameters = [];
    return VCLSelectModule;
}());
exports.VCLSelectModule = VCLSelectModule;
