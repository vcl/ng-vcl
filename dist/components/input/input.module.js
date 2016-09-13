(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', './input.component'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var input_component_1 = require('./input.component');
    var VCLInputModule = (function () {
        function VCLInputModule() {
        }
        VCLInputModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [],
                        exports: [input_component_1.InputComponent],
                        declarations: [input_component_1.InputComponent],
                        providers: [],
                    },] },
        ];
        /** @nocollapse */
        VCLInputModule.ctorParameters = [];
        return VCLInputModule;
    }());
    exports.VCLInputModule = VCLInputModule;
});
