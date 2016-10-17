"use strict";
var core_1 = require('@angular/core');
var wormhole_directive_1 = require('./wormhole.directive');
exports.WormholeGenerator = wormhole_directive_1.WormholeGenerator;
exports.Wormhole = wormhole_directive_1.Wormhole;
var VCLWormholeModule = (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [wormhole_directive_1.Wormhole, wormhole_directive_1.WormholeGenerator],
                    declarations: [wormhole_directive_1.Wormhole, wormhole_directive_1.WormholeGenerator]
                },] },
    ];
    /** @nocollapse */
    VCLWormholeModule.ctorParameters = [];
    return VCLWormholeModule;
}());
exports.VCLWormholeModule = VCLWormholeModule;
