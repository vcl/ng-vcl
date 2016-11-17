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
var Token = (function () {
    function Token() {
        this.selected = false;
        this.removeable = false;
        this.labelClass = '';
        this.onRemove = new core_1.EventEmitter();
    }
    Token.prototype.remove = function () {
        this.onRemove.emit();
    };
    return Token;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], Token.prototype, "label", void 0);
__decorate([
    core_1.Input('selected'),
    __metadata("design:type", Boolean)
], Token.prototype, "selected", void 0);
__decorate([
    core_1.Input('removeable'),
    __metadata("design:type", Boolean)
], Token.prototype, "removeable", void 0);
__decorate([
    core_1.Input('labelClass'),
    __metadata("design:type", String)
], Token.prototype, "labelClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Token.prototype, "onRemove", void 0);
Token = __decorate([
    core_1.Component({
        selector: 'vcl-token',
        template: "\n    <div class=\"vclToken\"\n      [class.vclSelected]=\"selected\"\n    >\n      <span class=\"vclTokenLabel\">{{ label }}</span>\n      <button *ngIf=\"removeable\" type=\"button\" title=\"Remove\" class=\"vclTransparent vclButton\">\n        <div class=\"vclIcogram\" (tap)=\"remove()\">\n          <span class=\"vclIcon fa fa-remove\"></span>\n        </div>\n      </button>\n    </div>",
        host: {
            '[class.vclSelected]': 'selected',
            '[class]': 'labelClass',
        }
    }),
    __metadata("design:paramtypes", [])
], Token);
exports.Token = Token;
var TokenComponent = (function () {
    function TokenComponent() {
        this.type = '';
        this.requiredIndicatorCharacter = '•';
        this.required = false;
        this.labelClass = '';
    }
    TokenComponent.prototype.ngOnInit = function () {
        if (this.type != '')
            this.labelClass = 'vclLabel vcl' + this.ucfirst(this.type);
    };
    TokenComponent.prototype.ucfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return TokenComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], TokenComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('subLabel'),
    __metadata("design:type", String)
], TokenComponent.prototype, "subLabel", void 0);
__decorate([
    core_1.Input('type'),
    __metadata("design:type", String)
], TokenComponent.prototype, "type", void 0);
__decorate([
    core_1.Input('requiredIndicatorCharacter'),
    __metadata("design:type", String)
], TokenComponent.prototype, "requiredIndicatorCharacter", void 0);
__decorate([
    core_1.Input('required'),
    __metadata("design:type", Boolean)
], TokenComponent.prototype, "required", void 0);
__decorate([
    core_1.Input('for'),
    __metadata("design:type", String)
], TokenComponent.prototype, "for", void 0);
TokenComponent = __decorate([
    core_1.Component({
        selector: 'vcl-token-list',
        templateUrl: 'token.component.html',
        host: {
            '[class.vclFormControlLabel]': 'true',
            '[class]': 'labelClass',
        }
    }),
    __metadata("design:paramtypes", [])
], TokenComponent);
exports.TokenComponent = TokenComponent;
