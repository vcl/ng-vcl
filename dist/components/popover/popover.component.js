"use strict";
var core_1 = require('@angular/core');
var overlayManager_service_1 = require('../../services/overlayManager.service');
var PopoverComponent = (function () {
    function PopoverComponent(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.opening = false;
        this.class = 'vclPopOver';
        this.zIndex = 10;
        this.coverZIndex = -1;
        this.targetAttachment = 'bottom left';
        this.attachment = 'top left';
        this.open = false;
        this.layer = false;
        this.openChange = new core_1.EventEmitter();
        this.zIndexManaged = true;
        this.expandManaged = true;
        this.state = 'open';
    }
    PopoverComponent.prototype.close = function () {
        this.state = 'void';
        this.open = false;
        this.openChange.emit(this.open);
    };
    PopoverComponent.prototype.onClick = function (event) {
        if (!this.opening && this.expandManaged && event.path.indexOf(this.myElement.nativeElement) === -1) {
            this.close();
        }
        this.opening = false;
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        try {
            if (this.zIndexManaged) {
                if (changes.open.currentValue === true) {
                    this.zIndex = this.overlayManger.register(this);
                    this.coverZIndex = this.zIndex - 1;
                    this.opening = true;
                    this.state = 'open';
                }
                else if (changes.open.currentValue === false) {
                    this.state = 'void';
                    this.zIndex = this.overlayManger.unregister(this);
                    this.coverZIndex = -1;
                }
            }
        }
        catch (ex) { }
    };
    PopoverComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-popover',
                    templateUrl: 'popover.component.html',
                    host: {
                        '(document:click)': 'onClick($event)',
                    },
                    animations: [
                        core_1.trigger('popOverState', [])
                    ]
                },] },
    ];
    /** @nocollapse */
    PopoverComponent.ctorParameters = [
        { type: overlayManager_service_1.OverlayManagerService, },
        { type: core_1.ElementRef, },
    ];
    PopoverComponent.propDecorators = {
        'target': [{ type: core_1.Input },],
        'style': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'zIndex': [{ type: core_1.Input },],
        'targetAttachment': [{ type: core_1.Input },],
        'attachment': [{ type: core_1.Input },],
        'open': [{ type: core_1.Input },],
        'layer': [{ type: core_1.Input },],
        'openChange': [{ type: core_1.Output },],
        'zIndexManaged': [{ type: core_1.Input },],
        'expandManaged': [{ type: core_1.Input },],
    };
    return PopoverComponent;
}());
exports.PopoverComponent = PopoverComponent;
