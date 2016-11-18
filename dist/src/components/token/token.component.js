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
