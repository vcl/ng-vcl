(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/common', './layer.component'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var layer_component_1 = require('./layer.component');
    var VCLLayerModule = (function () {
        function VCLLayerModule() {
        }
        VCLLayerModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [common_1.CommonModule],
                        exports: [layer_component_1.LayerComponent],
                        declarations: [layer_component_1.LayerComponent]
                    },] },
        ];
        /** @nocollapse */
        VCLLayerModule.ctorParameters = [];
        return VCLLayerModule;
    }());
    exports.VCLLayerModule = VCLLayerModule;
});
