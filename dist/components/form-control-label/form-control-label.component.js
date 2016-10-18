"use strict";
var core_1 = require('@angular/core');
var FormControlLabelComponent = (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // Whether the label prepends the child content
        this.prepend = false;
        // Whether the label wraps the labelled control
        this.wrapping = false;
        // Whether an indicator that an input in to the labelled control is required
        this.required = false;
    }
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
        'disabled': [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['class.vclDisabled',] },],
        'requiredIndicatorCharacter': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'subLabel': [{ type: core_1.Input },],
        'prepend': [{ type: core_1.Input },],
        'wrapping': [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['class.vclFormControlLabelWrapping',] },],
        'required': [{ type: core_1.Input },],
        'requiredIndLabel': [{ type: core_1.Input },],
    };
    return FormControlLabelComponent;
}());
exports.FormControlLabelComponent = FormControlLabelComponent;
