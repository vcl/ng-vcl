"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var popover_component_1 = require("./popover.component");
exports.PopoverComponent = popover_component_1.PopoverComponent;
var off_click_module_1 = require("../off-click/off-click.module");
var VCLPopoverModule = (function () {
    function VCLPopoverModule() {
    }
    return VCLPopoverModule;
}());
VCLPopoverModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            off_click_module_1.VCLOffClickModule
        ],
        providers: [],
        exports: [popover_component_1.PopoverComponent],
        declarations: [popover_component_1.PopoverComponent]
    })
], VCLPopoverModule);
exports.VCLPopoverModule = VCLPopoverModule;
