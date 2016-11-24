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
    useExisting: core_1.forwardRef(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = (function () {
    function RadioGroupComponent() {
    }
    RadioGroupComponent.prototype.ngOnInit = function () {
        console.dir(this.value);
    };
    RadioGroupComponent.prototype.ngOnChanges = function () { };
    RadioGroupComponent.prototype.isChecked = function (option) {
        return option.value == this.value;
    };
    RadioGroupComponent.prototype.buttonChanged = function (value, state) {
        console.log('btn changeD:');
        this.value = value;
        !!this.onChangeCallback && this.onChangeCallback(this.value);
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return RadioGroupComponent;
}());
__decorate([
    core_1.Input('value'),
    __metadata("design:type", String)
], RadioGroupComponent.prototype, "value", void 0);
__decorate([
    core_1.Input('options'),
    __metadata("design:type", Array)
], RadioGroupComponent.prototype, "options", void 0);
RadioGroupComponent = __decorate([
    core_1.Component({
        selector: 'vcl-radio-group',
        templateUrl: 'radio-group.component.html',
        host: {},
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], RadioGroupComponent);
exports.RadioGroupComponent = RadioGroupComponent;
