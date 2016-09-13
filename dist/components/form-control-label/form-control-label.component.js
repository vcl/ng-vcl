"use strict";
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
    FormControlLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[vcl-form-control-label]',
                    templateUrl: 'form-control-label.component.html',
                    host: {
                        '[class.vclFormControlLabel]': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    FormControlLabelComponent.ctorParameters = [];
    FormControlLabelComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'requiredIndicatorCharacter': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'subLabel': [{ type: core_1.Input },],
        'prepend': [{ type: core_1.Input },],
        'wrapping': [{ type: core_1.Input },],
        'required': [{ type: core_1.Input },],
        'requiredIndLabel': [{ type: core_1.Input },],
        'hbWrapping': [{ type: core_1.HostBinding, args: ['class.vclFormControlLabelWrapping',] },],
        'hbVclDisabled': [{ type: core_1.HostBinding, args: ['class.vclDisabled',] },],
    };
    return FormControlLabelComponent;
}());
exports.FormControlLabelComponent = FormControlLabelComponent;
