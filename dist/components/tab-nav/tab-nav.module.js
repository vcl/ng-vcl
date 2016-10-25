"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var tab_nav_component_1 = require('./tab-nav.component');
var l10n_module_1 = require('../../l10n/l10n.module');
var wormhole_module_1 = require('../../directives/wormhole/wormhole.module');
var VCLTabNavModule = (function () {
    function VCLTabNavModule() {
    }
    VCLTabNavModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, wormhole_module_1.VCLWormholeModule],
                    exports: [tab_nav_component_1.TabComponent, tab_nav_component_1.TabContentDirective, tab_nav_component_1.TabLabelDirective, tab_nav_component_1.TabNavComponent],
                    declarations: [tab_nav_component_1.TabComponent, tab_nav_component_1.TabContentDirective, tab_nav_component_1.TabLabelDirective, tab_nav_component_1.TabNavComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLTabNavModule.ctorParameters = [];
    return VCLTabNavModule;
}());
exports.VCLTabNavModule = VCLTabNavModule;
