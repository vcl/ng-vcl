"use strict";
var core_1 = require('@angular/core');
var LayerService = (function () {
    function LayerService() {
        this.visibleLayersChanged$ = new core_1.EventEmitter();
        this.subscriptions = new Map();
        this.layers = new Map();
    }
    Object.defineProperty(LayerService.prototype, "visibleLayersChanged", {
        get: function () {
            return this.visibleLayersChanged$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayerService.prototype, "visibleLayers", {
        get: function () {
            return Array.from(this.subscriptions.keys()).filter(function (layer) { return layer.visible; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerService.prototype, "currentZIndex", {
        get: function () {
            return this.visibleLayers
                .map(function (layer) { return layer.zIndex; })
                .reduce(function (pzIndex, czIndex) { return Math.max(pzIndex, czIndex); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    LayerService.prototype.open = function (layerName) {
        if (this.layers.has(layerName)) {
            this.layers.get(layerName).open();
        }
    };
    LayerService.prototype.close = function (layerName) {
        if (this.layers.has(layerName)) {
            this.layers.get(layerName).close();
        }
    };
    LayerService.prototype.register = function (layer) {
        var _this = this;
        var sub = layer.visibilityChange.subscribe(function (visible) {
            _this.visibleLayersChanged$.emit(_this.visibleLayers);
        });
        this.subscriptions.set(layer, sub);
        if (layer.name) {
            this.layers.set(layer.name, layer);
        }
    };
    LayerService.prototype.unregister = function (layer) {
        layer.close();
        if (layer.name) {
            this.layers.delete(name);
        }
        this.subscriptions.get(layer).unsubscribe();
        this.subscriptions.delete(layer);
    };
    LayerService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LayerService.ctorParameters = [];
    LayerService.propDecorators = {
        'visibleLayersChanged': [{ type: core_1.Output },],
    };
    return LayerService;
}());
exports.LayerService = LayerService;
