(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/common', './button.component', '../icogram/icogram.module', '../../l10n/l10n.module'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var button_component_1 = require('./button.component');
    var icogram_module_1 = require('../icogram/icogram.module');
    var l10n_module_1 = require('../../l10n/l10n.module');
    var VCLButtonModule = (function () {
        function VCLButtonModule() {
        }
        VCLButtonModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [common_1.CommonModule, icogram_module_1.VCLIcogramModule, l10n_module_1.L10nModule],
                        exports: [button_component_1.ButtonComponent],
                        declarations: [button_component_1.ButtonComponent],
                        providers: [],
                    },] },
        ];
        /** @nocollapse */
        VCLButtonModule.ctorParameters = [];
        return VCLButtonModule;
    }());
    exports.VCLButtonModule = VCLButtonModule;
});
