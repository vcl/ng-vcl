var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/common', './button-group.component', '../button/button.module', '../../l10n/l10n.module'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var button_group_component_1 = require('./button-group.component');
    var button_module_1 = require('../button/button.module');
    var l10n_module_1 = require('../../l10n/l10n.module');
    var VCLButtonGroupModule = (function () {
        function VCLButtonGroupModule() {
        }
        VCLButtonGroupModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, button_module_1.VCLButtonModule, l10n_module_1.L10nModule],
                exports: [button_group_component_1.ButtonGroupComponent],
                declarations: [button_group_component_1.ButtonGroupComponent],
                providers: [],
            }), 
            __metadata('design:paramtypes', [])
        ], VCLButtonGroupModule);
        return VCLButtonGroupModule;
    }());
    exports.VCLButtonGroupModule = VCLButtonGroupModule;
});
