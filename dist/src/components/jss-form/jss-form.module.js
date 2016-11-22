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
var jss_form_component_1 = require("./jss-form.component");
var l10n_module_1 = require("../../l10n/l10n.module");
var forms_1 = require("@angular/forms");
var flip_switch_module_1 = require("../flip-switch/flip-switch.module");
var slider_module_1 = require("../slider/slider.module");
var VCLJssFormModule = (function () {
    function VCLJssFormModule() {
    }
    return VCLJssFormModule;
}());
VCLJssFormModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, l10n_module_1.L10nModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            flip_switch_module_1.VCLFlipSwitchModule,
            slider_module_1.VCLSliderModule],
        exports: [jss_form_component_1.JssFormComponent, jss_form_component_1.JssFormObjectComponent],
        declarations: [jss_form_component_1.JssFormComponent, jss_form_component_1.JssFormObjectComponent],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], VCLJssFormModule);
exports.VCLJssFormModule = VCLJssFormModule;
