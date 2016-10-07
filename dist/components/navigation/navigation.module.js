"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var navigation_component_1 = require('./navigation.component');
var link_module_1 = require('../link/link.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLNavigationModule = (function () {
    function VCLNavigationModule() {
    }
    VCLNavigationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, link_module_1.VCLLinkModule],
                    exports: [navigation_component_1.NavigationComponent],
                    declarations: [navigation_component_1.NavigationComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLNavigationModule.ctorParameters = [];
    return VCLNavigationModule;
}());
exports.VCLNavigationModule = VCLNavigationModule;
