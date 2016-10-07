"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var icon_component_1 = require('./icon.component');
exports.IconComponent = icon_component_1.IconComponent;
var icon_service_1 = require('./icon.service');
exports.IconService = icon_service_1.IconService;
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLIconModule = (function () {
    function VCLIconModule() {
    }
    VCLIconModule.forRoot = function (config) {
        return {
            ngModule: VCLIconModule,
            providers: [
                {
                    provide: icon_service_1.IconService,
                    useClass: config.service || icon_service_1.IconService
                }
            ]
        };
    };
    VCLIconModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule],
                    exports: [icon_component_1.IconComponent],
                    declarations: [icon_component_1.IconComponent],
                    providers: [icon_service_1.IconService],
                },] },
    ];
    /** @nocollapse */
    VCLIconModule.ctorParameters = [];
    return VCLIconModule;
}());
exports.VCLIconModule = VCLIconModule;
