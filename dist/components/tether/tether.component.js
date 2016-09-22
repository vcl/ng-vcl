"use strict";
var core_1 = require('@angular/core');
var Tether = require('tether');
var TetherComponent = (function () {
    function TetherComponent(myElement) {
        this.myElement = myElement;
        this.id = 'tetherId' + Math.floor(Math.random() * 10000);
    }
    TetherComponent.prototype.ngAfterViewInit = function () {
        try {
            new Tether({
                element: '#' + this.id,
                target: this.target,
                attachment: this.attachment,
                targetAttachment: this.targetAttachment
            });
        }
        catch (ex) {
            console.log(ex);
        }
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
    };
    return TetherComponent;
}());
exports.TetherComponent = TetherComponent;
