"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var icogram_component_1 = require('./icogram.component');
var icon_module_1 = require('../icon/icon.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLIcogramModule = (function () {
    function VCLIcogramModule() {
    }
    VCLIcogramModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, icon_module_1.VCLIconModule, l10n_module_1.L10nModule],
                    exports: [icogram_component_1.IcogramComponent],
                    declarations: [icogram_component_1.IcogramComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLIcogramModule.ctorParameters = [];
    return VCLIcogramModule;
}());
exports.VCLIcogramModule = VCLIcogramModule;
