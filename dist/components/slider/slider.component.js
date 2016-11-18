"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = (function () {
    function SliderComponent() {
        this.value = 0;
        this.min = 0;
        this.max = 100;
        this.step = 100;
        this.round = 100;
        this.percentLeftKnob = 0;
    }
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.calculatePercentLeftKnob();
    };
    SliderComponent.prototype.calculatePercentLeftKnob = function () {
        console.log('....');
        var rangeLength = this.max - this.min;
        var valueLeft = this.value - this.min;
        var delta = rangeLength / valueLeft;
        this.percentLeftKnob = 100 / delta;
        console.log('aaa');
        console.log(this.percentLeftKnob);
    };
    SliderComponent.prototype.writeValue = function (value) {
        if (value !== this.value) {
            this.value = value;
        }
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-slider',
                    templateUrl: 'slider.component.html',
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    host: {
                        '[class.vclSlider]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = [];
    SliderComponent.propDecorators = {
        'value': [{ type: core_1.Input, args: ['value',] },],
        'min': [{ type: core_1.Input, args: ['min',] },],
        'max': [{ type: core_1.Input, args: ['max',] },],
        'step': [{ type: core_1.Input, args: ['step',] },],
        'round': [{ type: core_1.Input, args: ['round',] },],
        'scaleNames': [{ type: core_1.Input, args: ['scaleNames',] },],
    };
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
