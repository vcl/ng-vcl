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
        define(["require", "exports", '@angular/core', '@angular/common', './icon.component', '../../services/icon.service', '../../l10n/l10n.module'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var common_1 = require('@angular/common');
    var icon_component_1 = require('./icon.component');
    var icon_service_1 = require('../../services/icon.service');
    var l10n_module_1 = require('../../l10n/l10n.module');
    var VCLIconModule = (function () {
        function VCLIconModule() {
        }
        VCLIconModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, l10n_module_1.L10nModule],
                exports: [icon_component_1.IconComponent],
                declarations: [icon_component_1.IconComponent],
                providers: [icon_service_1.IconService],
            }), 
            __metadata('design:paramtypes', [])
        ], VCLIconModule);
        return VCLIconModule;
    }());
    exports.VCLIconModule = VCLIconModule;
});
