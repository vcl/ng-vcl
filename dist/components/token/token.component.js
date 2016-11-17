"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removeable = false;
        this.onRemove = new core_1.EventEmitter();
    }
    TokenComponent.prototype.remove = function () {
        this.onRemove.emit();
    };
    TokenComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-token',
                    template: "\n      <span class=\"vclTokenLabel\">{{ label }}</span>\n      <button *ngIf=\"removeable\" type=\"button\" title=\"Remove\"\n      class=\"vclTransparent vclButton\">\n        <div class=\"vclIcogram\" (tap)=\"remove()\">\n          <span class=\"vclIcon fa fa-remove\"></span>\n        </div>\n      </button>",
                    host: {
                        '[class.vclToken]': 'true',
                        '[class.vclSelected]': 'selected'
                    }
                },] },
    ];
    /** @nocollapse */
    TokenComponent.ctorParameters = [];
    TokenComponent.propDecorators = {
        'label': [{ type: core_1.Input, args: ['label',] },],
        'selected': [{ type: core_1.Input, args: ['selected',] },],
        'removeable': [{ type: core_1.Input, args: ['removeable',] },],
        'onRemove': [{ type: core_1.Output, args: ['onRemove',] },],
    };
    return TokenComponent;
}());
exports.TokenComponent = TokenComponent;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TokenListComponent; }),
    multi: true
};
var TokenListComponent = (function () {
    function TokenListComponent() {
        this.value = [];
        this.onChange = new core_1.EventEmitter();
    }
    TokenListComponent.prototype.ngAfterContentInit = function () { };
    TokenListComponent.prototype.ngOnInit = function () { };
    TokenListComponent.prototype.change = function () {
        this.value = this.tokens
            .filter(function (t) { return t.selected; });
        this.onChange.emit(this.value);
        !!this.onChangeCallback && this.onChangeCallback(this.value);
    };
    TokenListComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TokenListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TokenListComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-token-list',
                    templateUrl: 'tokenlist.component.html',
                    host: {
                        '[class.vclTokenList]': 'true',
                        '[class.vclTokenContainer]': 'true'
                    },
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    TokenListComponent.ctorParameters = [];
    TokenListComponent.propDecorators = {
        'tokens': [{ type: core_1.Input, args: ['tokens',] },],
        'onChange': [{ type: core_1.Output, args: ['onChange',] },],
        'templateItems': [{ type: core_1.ContentChildren, args: [TokenComponent,] },],
    };
    return TokenListComponent;
}());
exports.TokenListComponent = TokenListComponent;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2 = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TokenListComponent; }),
    multi: true
};
var TokenInputComponent = (function () {
    function TokenInputComponent() {
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
