"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var json_editor_component_1 = require('./json-editor.component');
var metalist_module_1 = require('../metalist/metalist.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLJsonEditorModule = (function () {
    function VCLJsonEditorModule() {
    }
    VCLJsonEditorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, metalist_module_1.VCLMetalistModule],
                    exports: [json_editor_component_1.JsonEditorComponent],
                    declarations: [json_editor_component_1.JsonEditorComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLJsonEditorModule.ctorParameters = [];
    return VCLJsonEditorModule;
}());
exports.VCLJsonEditorModule = VCLJsonEditorModule;
