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
var core_1 = require('@angular/core');
/**
Radio button.

## Usage

```html+hbs
<vcl-radio-button [(checked)]="checked"></vcl-radio-button>
```

@demo example
*/
var FormControlLabelComponent = (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // The label
        this.label = null;
        // Optional sub-label
        this.subLabel = null;
        // Whether the label prepends the child content
        this.prepend = false;
        // Whether the label wraps the labelled control
        this.wrapping = false;
        // Whether an indicator that an input in to the labelled control is required
        this.required = false;
        // Accessible label for the required indicator
        this.requiredIndLabel = null;
    }
    FormControlLabelComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(FormControlLabelComponent.prototype, "hbWrapping", {
        get: function () {
            return !!this.wrapping;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlLabelComponent.prototype, "hbVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "subLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "prepend", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "wrapping", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
    __decorate([
        core_1.HostBinding('class.vclFormControlLabelWrapping'), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "hbWrapping", null);
    __decorate([
        core_1.HostBinding('class.vclDisabled'), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "hbVclDisabled", null);
    FormControlLabelComponent = __decorate([
        core_1.Component({
            selector: '[vcl-form-control-label]',
            templateUrl: 'form-control-label.component.html',
            host: {
                '[class.vclFormControlLabel]': 'true',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], FormControlLabelComponent);
    return FormControlLabelComponent;
}());
exports.FormControlLabelComponent = FormControlLabelComponent;
