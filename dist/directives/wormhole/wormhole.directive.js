"use strict";
var core_1 = require('@angular/core');
// The wormhole Directive is just a reference to a template
var WormholeGenerator = (function () {
    function WormholeGenerator(templateRef) {
        this.templateRef = templateRef;
    }
    Object.defineProperty(WormholeGenerator.prototype, "isConnected", {
        get: function () {
            return !!this.source;
        },
        enumerable: true,
        configurable: true
    });
    WormholeGenerator.prototype.disconnect = function () {
        this.source = null;
    };
    WormholeGenerator.prototype.connect = function (wormhole) {
        this.source = wormhole;
    };
    WormholeGenerator.prototype.getTemplateRef = function () {
        return this.templateRef;
    };
    WormholeGenerator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[generateWormhole]',
                    exportAs: 'wormhole',
                },] },
    ];
    /** @nocollapse */
    WormholeGenerator.ctorParameters = [
        { type: core_1.TemplateRef, },
    ];
    return WormholeGenerator;
}());
exports.WormholeGenerator = WormholeGenerator;
var Wormhole = (function () {
    function Wormhole(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        // TODO: workaround. Does not disconnect the view when destroying the element when true
        // ngOnDestroy is called before the animations are fully traversed. This would remove the wormhole's ContentChild
        // before it's host is removed from the DOM
        this.indisposable = false;
    }
    Object.defineProperty(Wormhole.prototype, "isConnected", {
        get: function () {
            return !!this.connectedWormhole;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wormhole.prototype, "wormhole", {
        get: function () {
            return this._wormhole;
        },
        set: function (wormhole) {
            if (this.isConnected) {
                this.disconnect();
            }
            if (wormhole) {
                this.connect(wormhole);
                this._wormhole = wormhole;
            }
        },
        enumerable: true,
        configurable: true
    });
    Wormhole.prototype.connect = function (wormhole) {
        this.connectedWormhole = wormhole;
        wormhole.connect(this);
        var templateRef = wormhole.getTemplateRef();
        this.viewContainerRef.createEmbeddedView(templateRef);
    };
    Wormhole.prototype.disconnect = function () {
        if (this.connectedWormhole) {
            this.connectedWormhole.disconnect();
        }
        this.connectedWormhole = null;
        this.viewContainerRef.clear();
    };
    Wormhole.prototype.ngOnDestroy = function () {
        if (this.isConnected && !this.indisposable) {
            this.disconnect();
        }
    };
    Wormhole.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[wormhole]'
                },] },
    ];
    /** @nocollapse */
    Wormhole.ctorParameters = [
        { type: core_1.ViewContainerRef, },
    ];
    Wormhole.propDecorators = {
        'indisposable': [{ type: core_1.Input, args: ['wormhole-indisposable',] },],
        'wormhole': [{ type: core_1.Input, args: ['wormhole',] },],
    };
    return Wormhole;
}());
exports.Wormhole = Wormhole;
