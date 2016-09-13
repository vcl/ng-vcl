(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var OverlayManagerService = (function () {
        function OverlayManagerService() {
            this.components = [];
        }
        OverlayManagerService.prototype.register = function (component) {
            var zIndex = 100;
            for (var i = 0; i < this.components.length; i++) {
                if (this.components[i].zIndex >= zIndex) {
                    zIndex = this.components[i].zIndex;
                }
            }
            this.components.push(component);
            return zIndex + 10;
        };
        OverlayManagerService.prototype.unregister = function (component) {
            var index = this.components.indexOf(component);
            this.components.splice(index, 1);
            return -1;
        };
        OverlayManagerService.decorators = [
            { type: core_1.Injectable },
        ];
        /** @nocollapse */
        OverlayManagerService.ctorParameters = [];
        return OverlayManagerService;
    }());
    exports.OverlayManagerService = OverlayManagerService;
});
