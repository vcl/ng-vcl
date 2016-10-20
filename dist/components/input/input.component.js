"use strict";
var core_1 = require('@angular/core');
var InputComponent = (function () {
    function InputComponent(elRef) {
        this.elRef = elRef;
        this.valueType = null;
        this.typedValue = null;
        this._typedValueChange = new core_1.EventEmitter();
        this.selectAllOnFocus = false;
    }
    Object.defineProperty(InputComponent.prototype, "typedValueChange", {
        get: function () {
            return this._typedValueChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent.prototype.onChange = function (value) {
        this._typedValueChange.emit(this.toType(value));
    };
    InputComponent.prototype.toType = function (value) {
        if (this.valueType === 'number') {
            var tValue = Number(value);
            return isNaN(tValue) ? 0 : tValue;
        }
        else {
            return value;
        }
    };
    InputComponent.prototype.onFocus = function (value) {
        if (this.selectAllOnFocus) {
            if (this.elRef && this.elRef.nativeElement) {
                this.elRef.nativeElement.select();
            }
        }
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
        { type: core_1.ElementRef, },
    ];
    InputComponent.propDecorators = {
        'valueType': [{ type: core_1.Input },],
        'typedValue': [{ type: core_1.Input },],
        'typedValueChange': [{ type: core_1.Output },],
        'selectAllOnFocus': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.HostListener, args: ['input', ['$event.target.value'],] },],
        'onFocus': [{ type: core_1.HostListener, args: ['focus', ['$event.target.value'],] },],
    };
    return InputComponent;
}());
exports.InputComponent = InputComponent;
