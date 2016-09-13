"use strict";
var core_1 = require('@angular/core');
var overlayManager_service_1 = require('../../services/overlayManager.service');
var LayerComponent = (function () {
    function LayerComponent(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.open = false;
        this.openChange = new core_1.EventEmitter();
        this.modal = true;
        this.zIndex = -1;
        this.coverZIndex = -1;
    }
    LayerComponent.prototype.close = function () {
        this.open = false;
        this.openChange.emit(this.open);
    };
    LayerComponent.prototype.onClick = function (event) {
        //layer covers 100% screen width & height. first element in layer represents 'outside'
        if (!this.modal && event.target.parentNode === this.myElement.nativeElement) {
            this.close();
        }
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        try {
            if (changes.open.currentValue === true) {
                this.zIndex = this.overlayManger.register(this);
                this.coverZIndex = this.zIndex - 1;
            }
            else if (changes.open.currentValue === false) {
                this.zIndex = this.overlayManger.unregister(this);
                this.coverZIndex = -1;
            }
        }
        catch (ex) { }
    };
    LayerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-layer',
                    templateUrl: 'layer.component.html',
                    host: {
                        '(document:click)': 'onClick($event)',
                    },
                },] },
    ];
    /** @nocollapse */
    LayerComponent.ctorParameters = [
        { type: overlayManager_service_1.OverlayManagerService, },
        { type: core_1.ElementRef, },
    ];
    LayerComponent.propDecorators = {
        'open': [{ type: core_1.Input },],
        'openChange': [{ type: core_1.Output },],
        'modal': [{ type: core_1.Input },],
    };
    return LayerComponent;
}());
exports.LayerComponent = LayerComponent;
