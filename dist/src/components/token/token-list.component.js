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
var token_component_1 = require("./token.component");
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
    core_1.ContentChildren(token_component_1.TokenComponent),
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
