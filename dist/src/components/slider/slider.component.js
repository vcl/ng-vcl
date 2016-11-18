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
    core_1.Input('round'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "round", void 0);
__decorate([
    core_1.Input('scaleNames'),
    __metadata("design:type", Array)
], SliderComponent.prototype, "scaleNames", void 0);
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
