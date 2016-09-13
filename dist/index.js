(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './components/input/input.module', '@angular/core', './components/icon/icon.module', './components/icogram/icogram.module', './components/button/button.module', './components/button-group/button-group.module', './components/layer/layer.module', './components/tether/tether.module', './components/popover/popover.module', './components/radio-button/radio-button.module', './components/checkbox/checkbox.module', './components/form-control-label/form-control-label.module', './components/icon/icon.module', './components/icogram/icogram.module', './components/button/button.module', './components/button-group/button-group.module', './components/layer/layer.module', './components/tether/tether.module', './components/tether/tether.component', './components/popover/popover.module', './l10n/l10n.module', './services/overlayManager.service', './services/overlayManager.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var input_module_1 = require('./components/input/input.module');
    var core_1 = require('@angular/core');
    var icon_module_1 = require('./components/icon/icon.module');
    var icogram_module_1 = require('./components/icogram/icogram.module');
    var button_module_1 = require('./components/button/button.module');
    var button_group_module_1 = require('./components/button-group/button-group.module');
    var layer_module_1 = require('./components/layer/layer.module');
    var tether_module_1 = require('./components/tether/tether.module');
    var popover_module_1 = require('./components/popover/popover.module');
    var radio_button_module_1 = require('./components/radio-button/radio-button.module');
    var checkbox_module_1 = require('./components/checkbox/checkbox.module');
    var form_control_label_module_1 = require('./components/form-control-label/form-control-label.module');
    __export(require('./components/icon/icon.module'));
    __export(require('./components/icogram/icogram.module'));
    __export(require('./components/button/button.module'));
    __export(require('./components/button-group/button-group.module'));
    __export(require('./components/layer/layer.module'));
    __export(require('./components/tether/tether.module'));
    __export(require('./components/tether/tether.component'));
    __export(require('./components/popover/popover.module'));
    __export(require('./l10n/l10n.module'));
    __export(require('./services/overlayManager.service'));
    var overlayManager_service_2 = require('./services/overlayManager.service');
    var VCLModule = (function () {
        function VCLModule() {
        }
        VCLModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [
                            icon_module_1.VCLIconModule,
                            icogram_module_1.VCLIcogramModule,
                            button_module_1.VCLButtonModule,
                            button_group_module_1.VCLButtonGroupModule,
                            layer_module_1.VCLLayerModule,
                            tether_module_1.VCLTetherModule,
                            input_module_1.VCLInputModule,
                            popover_module_1.VCLPopoverModule,
                            radio_button_module_1.VCLRadioButtonModule,
                            checkbox_module_1.VCLCheckboxModule,
                            form_control_label_module_1.VCLFormControlLabelModule
                        ],
                        exports: [
                            icon_module_1.VCLIconModule,
                            icogram_module_1.VCLIcogramModule,
                            button_module_1.VCLButtonModule,
                            button_group_module_1.VCLButtonGroupModule,
                            layer_module_1.VCLLayerModule,
                            tether_module_1.VCLTetherModule,
                            input_module_1.VCLInputModule,
                            popover_module_1.VCLPopoverModule,
                            radio_button_module_1.VCLRadioButtonModule,
                            checkbox_module_1.VCLCheckboxModule,
                            form_control_label_module_1.VCLFormControlLabelModule
                        ],
                        providers: [
                            overlayManager_service_2.OverlayManagerService
                        ],
                    },] },
        ];
        /** @nocollapse */
        VCLModule.ctorParameters = [];
        return VCLModule;
    }());
    exports.VCLModule = VCLModule;
});
