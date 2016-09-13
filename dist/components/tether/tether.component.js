(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', 'tether'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var tether_1 = require('tether');
    var TetherComponent = (function () {
        function TetherComponent(myElement) {
            this.myElement = myElement;
            this.id = 'theterId' + Math.floor(Math.random() * 10000);
        }
        TetherComponent.prototype.ngAfterViewInit = function () {
            try {
                new tether_1.default({
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
});
