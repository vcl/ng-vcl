(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/common', './icon.component', '../../services/icon.service', '../../l10n/l10n.module'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var icon_component_1 = require('./icon.component');
    var icon_service_1 = require('../../services/icon.service');
    var l10n_module_1 = require('../../l10n/l10n.module');
    var VCLIconModule = (function () {
        function VCLIconModule() {
        }
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
});
