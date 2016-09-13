"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var button_group_component_1 = require('./button-group.component');
var button_module_1 = require('../button/button.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLButtonGroupModule = (function () {
    function VCLButtonGroupModule() {
    }
    VCLButtonGroupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, button_module_1.VCLButtonModule, l10n_module_1.L10nModule],
                    exports: [button_group_component_1.ButtonGroupComponent],
                    declarations: [button_group_component_1.ButtonGroupComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLButtonGroupModule.ctorParameters = [];
    return VCLButtonGroupModule;
}());
exports.VCLButtonGroupModule = VCLButtonGroupModule;
