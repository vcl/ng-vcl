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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var flip_switch_component_1 = require("./flip-switch.component");
var metalist_module_1 = require("../metalist/metalist.module");
var l10n_module_1 = require("../../l10n/l10n.module");
var VCLFlipSwitchModule = (function () {
    function VCLFlipSwitchModule() {
    }
    return VCLFlipSwitchModule;
}());
VCLFlipSwitchModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, l10n_module_1.L10nModule, metalist_module_1.VCLMetalistModule],
        exports: [flip_switch_component_1.FlipSwitchComponent],
        declarations: [flip_switch_component_1.FlipSwitchComponent],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], VCLFlipSwitchModule);
exports.VCLFlipSwitchModule = VCLFlipSwitchModule;
