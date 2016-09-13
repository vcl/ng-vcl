"use strict";
var core_1 = require('@angular/core');
var IconService = (function () {
    function IconService() {
    }
    IconService.prototype.fa = function (icon) {
        return "fa fa-" + icon;
    };
    IconService.prototype.lookup = function (icon) {
        if (typeof icon === 'string' && icon) {
            var iconName = icon;
            var providerName = void 0;
            var iconParts = iconName.split(':');
            if (iconParts.length > 1) {
                providerName = iconParts[0];
                iconName = iconParts[1];
            }
            else {
                providerName = 'fa';
            }
            if (!this[providerName]) {
                throw new Error('Invalid icon provider: ' + providerName);
            }
            return this[providerName](iconName);
        }
        return null;
    };
    IconService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    IconService.ctorParameters = [];
    return IconService;
}());
exports.IconService = IconService;
