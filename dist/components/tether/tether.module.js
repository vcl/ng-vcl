(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/common', './tether.component'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var tether_component_1 = require('./tether.component');
    var VCLTetherModule = (function () {
        function VCLTetherModule() {
        }
        VCLTetherModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [common_1.CommonModule],
                        exports: [tether_component_1.TetherComponent],
                        declarations: [tether_component_1.TetherComponent]
                    },] },
        ];
        /** @nocollapse */
        VCLTetherModule.ctorParameters = [];
        return VCLTetherModule;
    }());
    exports.VCLTetherModule = VCLTetherModule;
});
