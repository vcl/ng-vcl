"use strict";
// TODO: This class is just a copy of the checkbox with slight modifications
// Use inheritance once supported
// https://github.com/angular/angular/issues/11606
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = (function () {
    function RadioGroupComponent() {
        this.disabled = false;
        /*    this._checkedChange.subscribe(newVal => {
              !!this.onChangeCallback && this.onChangeCallback(newVal);
            });
          */
    }
    RadioGroupComponent.prototype.ngOnInit = function () {
        console.dir(this.value);
    };
    RadioGroupComponent.prototype.ngOnChanges = function () { };
    RadioGroupComponent.prototype.isChecked = function (option) {
        return option.value == this.value;
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        /*    if (value !== this.checked) {
              this.checked = value;
            }*/
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    RadioGroupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-radio-group',
                    templateUrl: 'radio-group.component.html',
                    host: {
                        '[attr.role]': '"radio"',
                        '[class.vclCheckbox]': 'true',
                        '[class.vclScale130p]': 'true',
                    },
                    //changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RadioGroupComponent.ctorParameters = [];
    RadioGroupComponent.propDecorators = {
        'value': [{ type: core_1.Input, args: ['value',] },],
        'options': [{ type: core_1.Input, args: ['options',] },],
        'disabled': [{ type: core_1.Input, args: ['disabled',] },],
    };
    return RadioGroupComponent;
}());
exports.RadioGroupComponent = RadioGroupComponent;
