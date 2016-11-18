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
        if (!this.tokens)
            this.tokens = [];
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
    return TokenInputComponent;
}());
__decorate([
    core_1.Input('tokens'),
    __metadata("design:type", Array)
], TokenInputComponent.prototype, "tokens", void 0);
TokenInputComponent = __decorate([
    core_1.Component({
        selector: 'vcl-token-input',
        templateUrl: 'tokeninput.component.html',
        host: {
            '[class.vclInput]': 'true',
            '[class.vclTokenInput]': 'true'
        },
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2]
    }),
    __metadata("design:paramtypes", [])
], TokenInputComponent);
exports.TokenInputComponent = TokenInputComponent;
