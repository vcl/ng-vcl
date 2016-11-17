"use strict";
var core_1 = require('@angular/core');
var LabelComponent = (function () {
    function LabelComponent() {
        this.type = '';
        this.requiredIndicatorCharacter = '•';
        this.required = false;
        this.labelClass = '';
    }
    LabelComponent.prototype.ngOnInit = function () {
        /**
         * TODO(issue) this overwrites the users classes
         * @link https://github.com/angular/angular/issues/7289
         */
        if (this.type != '')
            this.labelClass = 'vclLabel vcl' + this.ucfirst(this.type);
    };
    LabelComponent.prototype.ucfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    LabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-label',
                    templateUrl: 'label.component.html',
                    host: {
                        '[class.vclFormControlLabel]': 'true',
                        '[class]': 'labelClass',
                    }
                },] },
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = [];
    LabelComponent.propDecorators = {
        'label': [{ type: core_1.Input, args: ['label',] },],
        'subLabel': [{ type: core_1.Input, args: ['subLabel',] },],
        'type': [{ type: core_1.Input, args: ['type',] },],
        'requiredIndicatorCharacter': [{ type: core_1.Input, args: ['requiredIndicatorCharacter',] },],
        'required': [{ type: core_1.Input, args: ['required',] },],
        'for': [{ type: core_1.Input, args: ['for',] },],
    };
    return LabelComponent;
}());
exports.LabelComponent = LabelComponent;
