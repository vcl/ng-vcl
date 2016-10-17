"use strict";
var core_1 = require('@angular/core');
var off_click_directive_1 = require('./off-click.directive');
var VCLOffClickModule = (function () {
    function VCLOffClickModule() {
    }
    VCLOffClickModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [off_click_directive_1.OffClickDirective],
                    exports: [off_click_directive_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    VCLOffClickModule.ctorParameters = [];
    return VCLOffClickModule;
}());
exports.VCLOffClickModule = VCLOffClickModule;
