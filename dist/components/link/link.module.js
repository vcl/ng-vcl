"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var link_component_1 = require('./link.component');
var icogram_module_1 = require('../icogram/icogram.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLLinkModule = (function () {
    function VCLLinkModule() {
    }
    VCLLinkModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, icogram_module_1.VCLIcogramModule],
                    exports: [link_component_1.LinkComponent],
                    declarations: [link_component_1.LinkComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLLinkModule.ctorParameters = [];
    return VCLLinkModule;
}());
exports.VCLLinkModule = VCLLinkModule;
