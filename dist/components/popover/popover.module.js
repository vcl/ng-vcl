(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/common', './popover.component', '../tether/tether.module'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var popover_component_1 = require('./popover.component');
    exports.PopoverComponent = popover_component_1.PopoverComponent;
    var tether_module_1 = require('../tether/tether.module');
    var VCLPopoverModule = (function () {
        function VCLPopoverModule() {
        }
        VCLPopoverModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [
                            common_1.CommonModule,
                            tether_module_1.VCLTetherModule,
                        ],
                        exports: [popover_component_1.PopoverComponent],
                        declarations: [popover_component_1.PopoverComponent]
                    },] },
        ];
        /** @nocollapse */
        VCLPopoverModule.ctorParameters = [];
        return VCLPopoverModule;
    }());
    exports.VCLPopoverModule = VCLPopoverModule;
});
