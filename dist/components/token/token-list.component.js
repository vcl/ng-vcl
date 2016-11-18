"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var token_component_1 = require('./token.component');
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
        'templateItems': [{ type: core_1.ContentChildren, args: [token_component_1.TokenComponent,] },],
    };
    return TokenListComponent;
}());
exports.TokenListComponent = TokenListComponent;
