"use strict";
var core_1 = require('@angular/core');
var Tether = require('tether');
var tetherID = 10000;
var TetherComponent = (function () {
    function TetherComponent(myElement) {
        this.myElement = myElement;
        this._error = new core_1.EventEmitter();
        this.id = 'vcl-tetherId' + tetherID++;
    }
    Object.defineProperty(TetherComponent.prototype, "error", {
        get: function () {
            return this._error.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TetherComponent.prototype.ngAfterViewInit = function () {
        try {
            this.tether = new Tether({
                element: '#' + this.id,
                target: this.target,
                attachment: this.attachment,
                targetAttachment: this.targetAttachment
            });
        }
        catch (ex) {
            this._error.emit(ex);
        }
    };
    TetherComponent.prototype.ngOnDestroy = function () {
        try {
            this.tether && this.tether.destroy();
        }
        catch (ex) { }
    };
    TetherComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-tether',
                    templateUrl: 'tether.component.html'
                },] },
    ];
    /** @nocollapse */
    TetherComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    TetherComponent.propDecorators = {
        'target': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'zIndex': [{ type: core_1.Input },],
        'targetAttachment': [{ type: core_1.Input },],
        'attachment': [{ type: core_1.Input },],
        'error': [{ type: core_1.Output },],
    };
    return TetherComponent;
}());
exports.TetherComponent = TetherComponent;
