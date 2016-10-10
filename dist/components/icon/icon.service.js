"use strict";
var core_1 = require('@angular/core');
var IconService = (function () {
    function IconService() {
    }
    // A default name resolver following the CSS class name conventions of
    // the well-known Font Awesome icon font. Bascially it translates
    // `fa:user` into `fa fa-user`
    IconService.prototype.defaultNameResolver = function (icon) {
        var iconParts = icon.split(':');
        var setName = iconParts[0];
        var iconName = iconParts[1];
        return setName + " " + setName + "-" + iconName;
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
                // TODO: for now, just hardcode to default resolver, later we need
                // a mapping between the provider and the resolver or each font
                // brings its own resolver.
                providerName = 'defaultNameResolver';
                return this[providerName](iconName);
            }
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
