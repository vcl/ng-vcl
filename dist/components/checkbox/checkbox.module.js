"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var icon_module_1 = require('./../icon/icon.module');
var checkbox_component_1 = require('./checkbox.component');
exports.CheckboxComponent = checkbox_component_1.CheckboxComponent;
var VCLCheckboxModule = (function () {
    function VCLCheckboxModule() {
    }
    VCLCheckboxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, icon_module_1.VCLIconModule],
                    exports: [checkbox_component_1.CheckboxComponent],
                    declarations: [checkbox_component_1.CheckboxComponent]
                },] },
    ];
    /** @nocollapse */
    VCLCheckboxModule.ctorParameters = [];
    return VCLCheckboxModule;
}());
exports.VCLCheckboxModule = VCLCheckboxModule;
