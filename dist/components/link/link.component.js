"use strict";
var core_1 = require('@angular/core');
var LinkComponent = (function () {
    function LinkComponent() {
    }
    Object.defineProperty(LinkComponent.prototype, "attrHref", {
        get: function () {
            if (this.disabled)
                return null;
            return this.scheme
                ? this.scheme + ":" + this.href
                : this.href;
        },
        enumerable: true,
        configurable: true
    });
    LinkComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[vcl-link]',
                    templateUrl: 'link.component.html',
                    host: {
                        '[attr.touch-action]': 'touchAction',
                        '[attr.aria-label]': 'title | loc',
                        '[attr.title]': 'title | loc'
                    },
                },] },
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = [];
    LinkComponent.propDecorators = {
        'href': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'scheme': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.HostBinding, args: ['class.vclDisabled',] }, { type: core_1.Input },],
        'attrHref': [{ type: core_1.HostBinding, args: ['attr.href',] },],
    };
    return LinkComponent;
}());
exports.LinkComponent = LinkComponent;
