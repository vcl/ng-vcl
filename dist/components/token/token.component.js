"use strict";
var core_1 = require('@angular/core');
var TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removeable = false;
        this.onRemove = new core_1.EventEmitter();
    }
    TokenComponent.prototype.remove = function () {
        this.onRemove.emit();
    };
    TokenComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-token',
                    template: "\n      <span class=\"vclTokenLabel\">{{ label }}</span>\n      <button *ngIf=\"removeable\" type=\"button\" title=\"Remove\"\n      class=\"vclTransparent vclButton\">\n        <div class=\"vclIcogram\" (tap)=\"remove()\">\n          <span class=\"vclIcon fa fa-remove\"></span>\n        </div>\n      </button>",
                    host: {
                        '[class.vclToken]': 'true',
                        '[class.vclSelected]': 'selected'
                    }
                },] },
    ];
    /** @nocollapse */
    TokenComponent.ctorParameters = [];
    TokenComponent.propDecorators = {
        'label': [{ type: core_1.Input, args: ['label',] },],
        'selected': [{ type: core_1.Input, args: ['selected',] },],
        'removeable': [{ type: core_1.Input, args: ['removeable',] },],
        'onRemove': [{ type: core_1.Output, args: ['onRemove',] },],
    };
    return TokenComponent;
}());
exports.TokenComponent = TokenComponent;
