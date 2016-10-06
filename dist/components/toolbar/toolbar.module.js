"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var toolbar_component_1 = require('./toolbar.component');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLToolbarModule = (function () {
    function VCLToolbarModule() {
    }
    VCLToolbarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule],
                    exports: [toolbar_component_1.ToolbarComponent],
                    declarations: [toolbar_component_1.ToolbarComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLToolbarModule.ctorParameters = [];
    return VCLToolbarModule;
}());
exports.VCLToolbarModule = VCLToolbarModule;
