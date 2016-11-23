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
var dropdown_module_1 = require("../dropdown/dropdown.module");
var button_module_1 = require("../button/button.module");
var select_component_1 = require("./select.component");
var popover_module_1 = require("../popover/popover.module");
var l10n_module_1 = require("../../l10n/l10n.module");
var off_click_module_1 = require("../../directives/off-click/off-click.module");
var VCLSelectModule = (function () {
    function VCLSelectModule() {
    }
    return VCLSelectModule;
}());
VCLSelectModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, l10n_module_1.L10nModule, dropdown_module_1.VCLDropdownModule, button_module_1.VCLButtonModule, off_click_module_1.VCLOffClickModule, popover_module_1.VCLPopoverModule],
        exports: [select_component_1.SelectComponent, select_component_1.SelectOptionComponent],
        declarations: [select_component_1.SelectComponent, select_component_1.SelectOptionComponent],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], VCLSelectModule);
exports.VCLSelectModule = VCLSelectModule;
