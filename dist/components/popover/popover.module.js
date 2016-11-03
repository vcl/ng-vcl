"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var popover_component_1 = require('./popover.component');
exports.PopoverComponent = popover_component_1.PopoverComponent;
var tether_module_1 = require('../tether/tether.module');
var off_click_module_1 = require('../../directives/off-click/off-click.module');
var VCLPopoverModule = (function () {
    function VCLPopoverModule() {
    }
    VCLPopoverModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        tether_module_1.VCLTetherModule,
                        off_click_module_1.VCLOffClickModule
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
