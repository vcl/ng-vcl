"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var button_component_1 = require('./button.component');
var icogram_module_1 = require('../icogram/icogram.module');
var l10n_module_1 = require('../../l10n/l10n.module');
var VCLButtonModule = (function () {
    function VCLButtonModule() {
    }
    VCLButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, icogram_module_1.VCLIcogramModule, l10n_module_1.L10nModule],
            exports: [button_component_1.ButtonComponent],
            declarations: [button_component_1.ButtonComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLButtonModule);
    return VCLButtonModule;
}());
exports.VCLButtonModule = VCLButtonModule;
