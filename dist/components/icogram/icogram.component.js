"use strict";
var core_1 = require('@angular/core');
var IcogramComponent = (function () {
    function IcogramComponent(elRef) {
        this.elRef = elRef;
    }
    IcogramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-icogram, [vcl-icogram]',
                    host: {
                        '[class.vclIcogram]': 'true',
                        '[attr.role]': 'img'
                    },
                    templateUrl: 'icogram.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    IcogramComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    IcogramComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'flexLabel': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'prepIconSrc': [{ type: core_1.Input },],
        'appIconSrc': [{ type: core_1.Input },],
    };
    return IcogramComponent;
}());
exports.IcogramComponent = IcogramComponent;
