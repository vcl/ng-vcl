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
var LabelComponent = (function () {
    function LabelComponent() {
        this.type = '';
        this.requiredIndicatorCharacter = '•';
        this.required = false;
        this.labelClass = '';
        this.for = '';
    }
    LabelComponent.prototype.ngOnInit = function () {
        if (this.type != '')
            this.labelClass = 'vclLabel vcl' + this.ucfirst(this.type);
    };
    LabelComponent.prototype.ucfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return LabelComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], LabelComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('subLabel'),
    __metadata("design:type", String)
], LabelComponent.prototype, "subLabel", void 0);
__decorate([
    core_1.Input('type'),
    __metadata("design:type", String)
], LabelComponent.prototype, "type", void 0);
__decorate([
    core_1.Input('requiredIndicatorCharacter'),
    __metadata("design:type", String)
], LabelComponent.prototype, "requiredIndicatorCharacter", void 0);
__decorate([
    core_1.Input('required'),
    __metadata("design:type", Boolean)
], LabelComponent.prototype, "required", void 0);
__decorate([
    core_1.Input('for'),
    __metadata("design:type", String)
], LabelComponent.prototype, "for", void 0);
LabelComponent = __decorate([
    core_1.Component({
        selector: 'vcl-label',
        templateUrl: 'label.component.html',
        host: {
            '[class.vclFormControlLabel]': 'true',
            '[class]': 'labelClass',
        }
    }),
    __metadata("design:paramtypes", [])
], LabelComponent);
exports.LabelComponent = LabelComponent;
