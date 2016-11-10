"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = (function () {
    function FlipSwitchComponent() {
        var _this = this;
        this.value = false;
        this.toggle$ = new core_1.EventEmitter();
        this.toggle$.subscribe(function (newVal) {
            _this.value = newVal;
            !!_this.onChangeCallback && _this.onChangeCallback(newVal);
        });
    }
    FlipSwitchComponent.prototype.onClick = function () {
        this.value = !this.value;
        this.toggle$.emit(this.value);
    };
    FlipSwitchComponent.prototype.writeValue = function (value) {
        if (value !== this.value)
            this.value = value;
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FlipSwitchComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-flip-switch',
                    templateUrl: 'flip-switch.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    FlipSwitchComponent.ctorParameters = [];
    FlipSwitchComponent.propDecorators = {
        'onLabel': [{ type: core_1.Input, args: ['onLabel',] },],
        'offLabel': [{ type: core_1.Input, args: ['offLabel',] },],
        'value': [{ type: core_1.Input, args: ['value',] },],
        'toggle$': [{ type: core_1.Output },],
    };
    return FlipSwitchComponent;
}());
exports.FlipSwitchComponent = FlipSwitchComponent;
