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
