"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var progress_bar_component_1 = require('./progress-bar.component');
var VCLProgressBarModule = (function () {
    function VCLProgressBarModule() {
    }
    VCLProgressBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [progress_bar_component_1.ProgressBarComponent],
                    declarations: [progress_bar_component_1.ProgressBarComponent]
                },] },
    ];
    /** @nocollapse */
    VCLProgressBarModule.ctorParameters = [];
    return VCLProgressBarModule;
}());
exports.VCLProgressBarModule = VCLProgressBarModule;
