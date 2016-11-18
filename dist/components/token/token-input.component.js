"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2 = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TokenInputComponent; }),
    multi: true
};
var TokenInputComponent = (function () {
    function TokenInputComponent() {
        this.tokens = [];
        this.addtext = '';
    }
    TokenInputComponent.prototype.keydown = function (ev) {
        if (ev.key != 'Enter')
            return;
        if (this.addtext == '')
            return;
        this.tokens.push({ label: this.addtext });
        this.addtext = '';
        !!this.onChangeCallback && this.onChangeCallback(this.tokens);
    };
    TokenInputComponent.prototype.remove = function (token) {
        this.tokens = this.tokens.filter(function (t) { return t.label != token.label; });
        !!this.onChangeCallback && this.onChangeCallback(this.tokens);
    };
    TokenInputComponent.prototype.writeValue = function (tokens) {
        this.tokens = tokens;
    };
    TokenInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TokenInputComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-token-input',
                    templateUrl: 'tokeninput.component.html',
                    host: {
                        '[class.vclInput]': 'true',
                        '[class.vclTokenInput]': 'true'
                    },
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2]
                },] },
    ];
    /** @nocollapse */
    TokenInputComponent.ctorParameters = [];
    TokenInputComponent.propDecorators = {
        'tokens': [{ type: core_1.Input, args: ['tokens',] },],
    };
    return TokenInputComponent;
}());
exports.TokenInputComponent = TokenInputComponent;
