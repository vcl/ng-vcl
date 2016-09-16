"use strict";
var core_1 = require('@angular/core');
var LayerManagerService = (function () {
    function LayerManagerService() {
        this.visibleLayersChanged$ = new core_1.EventEmitter();
        this.layers = new Map();
    }
    Object.defineProperty(LayerManagerService.prototype, "visibleLayersChanged", {
        get: function () {
            return this.visibleLayersChanged$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayerManagerService.prototype, "visibleLayers", {
        get: function () {
            return Array.from(this.layers.keys()).filter(function (layer) { return layer.visible; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManagerService.prototype, "currentZIndex", {
        get: function () {
            return this.visibleLayers
                .map(function (layer) { return layer.zIndex; })
                .reduce(function (pzIndex, czIndex) { return Math.max(pzIndex, czIndex); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    LayerManagerService.prototype.register = function (layer) {
        var _this = this;
        var sub = layer.visibilityChange.subscribe(function (visible) {
            _this.visibleLayersChanged$.emit(_this.visibleLayers);
        });
        this.layers.set(layer, sub);
    };
    LayerManagerService.prototype.unregister = function (layer) {
        layer.close();
        this.layers.get(layer).unsubscribe();
        this.layers.delete(layer);
    };
    LayerManagerService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LayerManagerService.ctorParameters = [];
    LayerManagerService.propDecorators = {
        'visibleLayersChanged': [{ type: core_1.Output },],
    };
    return LayerManagerService;
}());
exports.LayerManagerService = LayerManagerService;
