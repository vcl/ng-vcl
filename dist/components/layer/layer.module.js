"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var layer_component_1 = require('./layer.component');
var wormhole_1 = require('../../directives/wormhole');
var VCLLayerModule = (function () {
    function VCLLayerModule() {
    }
    VCLLayerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, wormhole_1.VCLWormholeModule],
                    exports: [layer_component_1.LayerBaseComponent, layer_component_1.LayerDirective],
                    declarations: [layer_component_1.LayerBaseComponent, layer_component_1.LayerDirective]
                },] },
    ];
    /** @nocollapse */
    VCLLayerModule.ctorParameters = [];
    return VCLLayerModule;
}());
exports.VCLLayerModule = VCLLayerModule;
