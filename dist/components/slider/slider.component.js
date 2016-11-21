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
        this.step = 10;
        this.stepsOnly = false;
        this.round = 0;
        this.percentLeftKnob = 0;
        this.firstPan = true;
    }
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.calculatePercentLeftKnob();
        this.getScalePoints();
    };
    SliderComponent.prototype.calculatePercentLeftKnob = function () {
        var rangeLength = this.max - this.min;
        var valueLeft = this.value - this.min;
        var delta = rangeLength / valueLeft;
        this.percentLeftKnob = 100 / delta;
    };
    SliderComponent.prototype.percentToValue = function (per) {
        var rangeLength = this.max - this.min;
        var newVal = (rangeLength / 100) * per;
        return newVal;
    };
    SliderComponent.prototype.getScalePoints = function () {
        var rangeLength = this.max - this.min;
        var amount = Math.ceil(rangeLength / this.step);
        var scalePoints = [];
        while (scalePoints.length < amount) {
            scalePoints.push({
                label: this.scalePointLabel(scalePoints.length),
                percent: (100 / (amount - 1)) * scalePoints.length
            });
        }
        this.scalePoints = scalePoints;
    };
    SliderComponent.prototype.closestScalePoint = function (percentValue) {
        var closest = this.scalePoints[0];
        var dist = 100;
        this.scalePoints.forEach(function (sP) {
            var pDist = Math.abs(sP.percent - percentValue);
            if (pDist < dist) {
                closest = sP;
                dist = pDist;
            }
        });
        return closest.percent;
    };
    SliderComponent.prototype.scalePointLabel = function (i) {
        if (!this.scaleNames)
            return (i * this.step + this.min).toString();
        if (this.scaleNames[i])
            return this.scaleNames[i];
        return '';
    };
    SliderComponent.prototype.deltaPxToPercent = function (deltaPx) {
        var fullPx = this.scale.nativeElement.offsetWidth;
        var deltaPer = 100 / (fullPx / deltaPx);
        deltaPer = Math.round(deltaPer * 100) / 100; // round 2 decs
        return deltaPer;
    };
    SliderComponent.prototype.onPan = function (ev) {
        if (this.firstPan) {
            this.firstPan = false;
            this.lastPercentLeftKnob = this.percentLeftKnob;
        }
        var deltaPx = ev.deltaX;
        this.percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
        if (this.percentLeftKnob < 0)
            this.percentLeftKnob = 0;
        if (this.percentLeftKnob > 100)
            this.percentLeftKnob = 100;
        if (this.stepsOnly) {
            //calculate closest step and move to there
            this.percentLeftKnob = this.closestScalePoint(this.percentLeftKnob);
        }
        if (ev.isFinal) {
            this.firstPan = true;
            this.value = this.percentToValue(this.percentLeftKnob);
            !!this.onChangeCallback && this.onChangeCallback(this.value);
        }
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
        'stepsOnly': [{ type: core_1.Input, args: ['stepsOnly',] },],
        'round': [{ type: core_1.Input, args: ['round',] },],
        'scaleNames': [{ type: core_1.Input, args: ['scaleNames',] },],
        'scale': [{ type: core_1.ViewChild, args: ['scale',] },],
    };
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
