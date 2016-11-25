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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = (function () {
    function SliderComponent() {
        this.value = 0;
        this.stepsOnly = false;
        this.round = 0;
        this.percentLeftKnob = 0;
        this.firstPan = true;
    }
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.value = this.value || 0;
        this.min = this.min || 0;
        this.max = this.max || 100;
        this.step = this.step || 10;
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
        newVal = Math.round(newVal);
        return newVal;
    };
    SliderComponent.prototype.getScalePoints = function () {
        var rangeLength = this.max - this.min;
        var amount = Math.ceil(rangeLength / this.step) + 1;
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
        deltaPer = Math.round(deltaPer * 100) / 100;
        return deltaPer;
    };
    SliderComponent.prototype.onTap = function (event) {
        if (event.target.className == 'vclSliderKnob')
            return;
        var layerX = event.changedPointers[0].layerX;
        if (layerX != 0) {
            this.percentLeftKnob = this.deltaPxToPercent(layerX);
            if (this.stepsOnly)
                this.percentLeftKnob = this.closestScalePoint(this.percentLeftKnob);
            this.value = this.percentToValue(this.percentLeftKnob);
            !!this.onChangeCallback && this.onChangeCallback(this.value);
        }
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
        if (this.stepsOnly)
            this.percentLeftKnob = this.closestScalePoint(this.percentLeftKnob);
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
    return SliderComponent;
}());
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "value", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "min", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "max", void 0);
__decorate([
    core_1.Input('step'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "step", void 0);
__decorate([
    core_1.Input('stepsOnly'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "stepsOnly", void 0);
__decorate([
    core_1.Input('round'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "round", void 0);
__decorate([
    core_1.Input('scaleNames'),
    __metadata("design:type", Array)
], SliderComponent.prototype, "scaleNames", void 0);
__decorate([
    core_1.ViewChild('scale'),
    __metadata("design:type", Object)
], SliderComponent.prototype, "scale", void 0);
__decorate([
    core_1.HostListener('tap', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SliderComponent.prototype, "onTap", null);
SliderComponent = __decorate([
    core_1.Component({
        selector: 'vcl-slider',
        templateUrl: 'slider.component.html',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        host: {
            '[class.vclSlider]': 'true'
        }
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
exports.SliderComponent = SliderComponent;
