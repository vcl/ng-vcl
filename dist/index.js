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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var icon_module_1 = require('./components/icon/icon.module');
var icogram_module_1 = require('./components/icogram/icogram.module');
var button_module_1 = require('./components/button/button.module');
var layer_module_1 = require('./components/layer/layer.module');
var tether_module_1 = require('./components/tether/tether.module');
var popover_module_1 = require('./components/popover/popover.module');
__export(require('./components/icon/icon.module'));
__export(require('./components/icogram/icogram.module'));
__export(require('./components/button/button.module'));
__export(require('./l10n/l10n.module'));
var overlayManager_service_1 = require('./services/overlayManager.service');
var VCLModule = (function () {
    function VCLModule() {
    }
    VCLModule = __decorate([
        core_1.NgModule({
            imports: [
                icon_module_1.VCLIconModule,
                icogram_module_1.VCLIcogramModule,
                button_module_1.VCLButtonModule,
                layer_module_1.VCLLayerModule,
                tether_module_1.VCLTetherModule,
                popover_module_1.VCLPopoverModule,
            ],
            exports: [
                icon_module_1.VCLIconModule,
                icogram_module_1.VCLIcogramModule,
                button_module_1.VCLButtonModule,
                layer_module_1.VCLLayerModule,
                tether_module_1.VCLTetherModule,
                popover_module_1.VCLPopoverModule,
            ],
            providers: [
                // IconService,
                overlayManager_service_1.OverlayManagerService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLModule);
    return VCLModule;
}());
exports.VCLModule = VCLModule;
