(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var InputComponent = (function () {
        function InputComponent(renderer) {
            this.renderer = renderer;
            this.valueType = null;
            this.typedValue = null;
            this.typedValueChange = new core_1.EventEmitter();
        }
        InputComponent.prototype.ngOnInit = function () { };
        InputComponent.prototype.onChange = function (value) {
            this.typedValueChange.emit(this.toType(value));
        };
        InputComponent.prototype.toType = function (value) {
            if (this.valueType === 'number') {
                return value = Number(value);
            }
            return value;
        };
        InputComponent.decorators = [
            { type: core_1.Directive, args: [{
                        selector: '[vcl-input]',
                        host: {
                            '[class.vclInput]': 'true',
                        },
                    },] },
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = [
            { type: core_1.Renderer, },
        ];
        InputComponent.propDecorators = {
            'valueType': [{ type: core_1.Input },],
            'typedValue': [{ type: core_1.Input },],
            'typedValueChange': [{ type: core_1.Output },],
            'onChange': [{ type: core_1.HostListener, args: ['input', ['$event.target.value'],] },],
        };
        return InputComponent;
    }());
    exports.InputComponent = InputComponent;
});
