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
var TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removeable = false;
        this.onRemove = new core_1.EventEmitter();
    }
    TokenComponent.prototype.remove = function () {
        this.onRemove.emit();
    };
    return TokenComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], TokenComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('selected'),
    __metadata("design:type", Boolean)
], TokenComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input('removeable'),
    __metadata("design:type", Boolean)
], TokenComponent.prototype, "removeable", void 0);
__decorate([
    core_1.Output('onRemove'),
    __metadata("design:type", Object)
], TokenComponent.prototype, "onRemove", void 0);
TokenComponent = __decorate([
    core_1.Component({
        selector: 'vcl-token',
        template: "\n      <span class=\"vclTokenLabel\">{{ label }}</span>\n      <button *ngIf=\"removeable\" type=\"button\" title=\"Remove\"\n      class=\"vclTransparent vclButton\">\n        <div class=\"vclIcogram\" (tap)=\"remove()\">\n          <span class=\"vclIcon fa fa-remove\"></span>\n        </div>\n      </button>",
        host: {
            '[class.vclToken]': 'true',
            '[class.vclSelected]': 'selected'
        }
    }),
    __metadata("design:paramtypes", [])
], TokenComponent);
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
    return TokenListComponent;
}());
__decorate([
    core_1.Input('tokens'),
    __metadata("design:type", Array)
], TokenListComponent.prototype, "tokens", void 0);
__decorate([
    core_1.Output('onChange'),
    __metadata("design:type", Object)
], TokenListComponent.prototype, "onChange", void 0);
__decorate([
    core_1.ContentChildren(TokenComponent),
    __metadata("design:type", core_1.QueryList)
], TokenListComponent.prototype, "templateItems", void 0);
TokenListComponent = __decorate([
    core_1.Component({
        selector: 'vcl-token-list',
        templateUrl: 'tokenlist.component.html',
        host: {
            '[class.vclTokenList]': 'true',
            '[class.vclTokenContainer]': 'true'
        },
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], TokenListComponent);
exports.TokenListComponent = TokenListComponent;
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
