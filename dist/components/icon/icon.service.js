"use strict";
var core_1 = require('@angular/core');
var IconService = (function () {
    function IconService() {
    }
    IconService.prototype.fa = function (icon) {
        var fa = icon.split(':').join(' fa-');
        return "fa fa-" + fa;
    };
    IconService.prototype.lookup = function (icon) {
        if (typeof icon === 'string' && icon) {
            var iconName = icon;
            var providerName = void 0;
            var iconParts = iconName.split(/:(.+)?/);
            if (iconParts.length === 0) {
                return icon;
            }
            else {
                providerName = iconParts[0];
                iconName = iconParts[1];
            }
            if (!this[providerName]) {
                return icon;
            }
            return this[providerName](iconName);
        }
        return icon;
    };
    IconService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    IconService.ctorParameters = [];
    return IconService;
}());
exports.IconService = IconService;
