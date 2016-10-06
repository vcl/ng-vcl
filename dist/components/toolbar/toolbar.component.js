"use strict";
var core_1 = require('@angular/core');
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.ariaLevel = 1;
    }
    ToolbarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-toolbar',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.vclToolbar]': 'true',
                        '[class.vclLayoutHorizontal]': 'true',
                        '[class.vclLayoutJustified]': 'true',
                        '[class.vclSecondary]': 'ariaLevel == 2',
                        '[attr.aria-level]': 'ariaLevel',
                        '[attr.role]': '"menubar"',
                    }
                },] },
    ];
    /** @nocollapse */
    ToolbarComponent.ctorParameters = [];
    ToolbarComponent.propDecorators = {
        'ariaLevel': [{ type: core_1.Input },],
    };
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
