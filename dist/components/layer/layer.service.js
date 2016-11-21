"use strict";
var Subject_1 = require('rxjs/Subject');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var LayerService = (function () {
    function LayerService() {
        this.layerNameMap = new Map();
        this.layerMap = new Map();
        this._visibleLayers = new Subject_1.Subject();
        this._visibleLayers$ = this._visibleLayers.asObservable().scan(function (accLayers, layer) {
            if (layer.visible) {
                return accLayers.concat([layer]);
            }
            else {
                return accLayers.filter(function (l) { return layer !== l; });
            }
        }, []);
    }
    LayerService.prototype.visibleLayersFor = function (base) {
        if (base === void 0) { base = 'default'; }
        return this._visibleLayers$.map(function (layers) { return layers.filter(function (layer) { return layer.base !== base; }); });
    };
    LayerService.prototype.open = function (layerName, data) {
        if (this.layerNameMap.has(layerName)) {
            return this.layerNameMap.get(layerName).open(data);
        }
        else {
            return Observable_1.Observable.throw('Layer not found: ' + layerName);
        }
    };
    LayerService.prototype.close = function (layerName) {
        if (this.layerNameMap.has(layerName)) {
            this.layerNameMap.get(layerName).close();
        }
    };
    LayerService.prototype.register = function (layer, base) {
        var _this = this;
        if (base === void 0) { base = 'default'; }
        if (layer.name && this.layerNameMap.has(layer.name)) {
            throw 'Duplicate layer name: ' + layer.name;
        }
        this.layerMap.set(layer, layer.visibilityChange$.subscribe(function () {
            _this._visibleLayers.next(layer);
        }));
        if (layer.name) {
            this.layerNameMap.set(layer.name, layer);
        }
    };
    LayerService.prototype.unregister = function (layer) {
        layer.close();
        if (layer.name) {
            this.layerNameMap.delete(layer.name);
        }
        var sub = this.layerMap.get(layer);
        if (sub && !sub.closed) {
            sub.unsubscribe();
        }
        this.layerMap.delete(layer);
    };
    LayerService.prototype.ngOnDestroy = function () {
        this.layerMap.forEach(function (sub) {
            if (sub && !sub.closed) {
                sub.unsubscribe();
            }
        });
        this.layerMap.clear();
        this.layerNameMap.clear();
    };
    LayerService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LayerService.ctorParameters = [];
    return LayerService;
}());
exports.LayerService = LayerService;
