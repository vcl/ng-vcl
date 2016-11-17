"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var token_component_1 = require('./token.component');
var metalist_module_1 = require('../metalist/metalist.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var forms_1 = require('@angular/forms');
var VCLTokenModule = (function () {
    function VCLTokenModule() {
    }
    VCLTokenModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, l10n_module_1.L10nModule, metalist_module_1.VCLMetalistModule, forms_1.FormsModule],
                    exports: [token_component_1.TokenComponent, token_component_1.TokenListComponent, token_component_1.TokenInputComponent],
                    declarations: [token_component_1.TokenComponent, token_component_1.TokenListComponent, token_component_1.TokenInputComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    VCLTokenModule.ctorParameters = [];
    return VCLTokenModule;
}());
exports.VCLTokenModule = VCLTokenModule;
