"use strict";
var core_1 = require('@angular/core');
var Wormhole = (function () {
    function Wormhole(templateRef) {
        this.templateRef = templateRef;
    }
    Object.defineProperty(Wormhole.prototype, "isConnected", {
        get: function () {
            return !!this.source;
        },
        enumerable: true,
        configurable: true
    });
    Wormhole.prototype.disconnect = function () {
        this.source = null;
    };
    Wormhole.prototype.connect = function (wormhole) {
        this.source = wormhole;
    };
    Wormhole.prototype.getTemplateRef = function () {
        return this.templateRef;
    };
    Wormhole.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[wormhole]',
                    exportAs: 'wormhole',
                },] },
    ];
    /** @nocollapse */
    Wormhole.ctorParameters = [
        { type: core_1.TemplateRef, },
    ];
    return Wormhole;
}());
exports.Wormhole = Wormhole;
var ConnectWormhole = (function () {
    function ConnectWormhole(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(ConnectWormhole.prototype, "isConnected", {
        get: function () {
            return !!this.connectedWormhole;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectWormhole.prototype, "wormhole", {
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
    ConnectWormhole.prototype.connect = function (wormhole) {
        this.connectedWormhole = wormhole;
        wormhole.connect(this);
        var templateRef = wormhole.getTemplateRef();
        this.viewContainerRef.createEmbeddedView(templateRef);
    };
    ConnectWormhole.prototype.disconnect = function () {
        if (this.connectedWormhole) {
            this.connectedWormhole.disconnect();
        }
        this.connectedWormhole = null;
        this.viewContainerRef.clear();
    };
    ConnectWormhole.prototype.dispose = function () {
        if (this.isConnected) {
            this.disconnect();
        }
    };
    ConnectWormhole.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ConnectWormhole.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[connectWormhole]'
                },] },
    ];
    /** @nocollapse */
    ConnectWormhole.ctorParameters = [
        { type: core_1.ViewContainerRef, },
    ];
    ConnectWormhole.propDecorators = {
        'wormhole': [{ type: core_1.Input, args: ['connectWormhole',] },],
    };
    return ConnectWormhole;
}());
exports.ConnectWormhole = ConnectWormhole;
var VCLWormholeModule = (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [Wormhole, ConnectWormhole],
                    declarations: [Wormhole, ConnectWormhole]
                },] },
    ];
    /** @nocollapse */
    VCLWormholeModule.ctorParameters = [];
    return VCLWormholeModule;
}());
exports.VCLWormholeModule = VCLWormholeModule;
