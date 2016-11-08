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
var FormInputControlGroup = (function () {
    function FormInputControlGroup() {
        this.inline = false;
    }
    return FormInputControlGroup;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormInputControlGroup.prototype, "inline", void 0);
FormInputControlGroup = __decorate([
    core_1.Component({
        selector: 'vcl-input-control-group',
        template: "<div [class.vclInputControlGroup]=\"!inline\" [class.vclInputInlineControlGroup]=\"inline\"><ng-content></ng-content></div>"
    }),
    __metadata("design:paramtypes", [])
], FormInputControlGroup);
exports.FormInputControlGroup = FormInputControlGroup;
var FormComponent = (function () {
    function FormComponent() {
        this.layout = 'vertical';
        this.valueChange = new core_1.EventEmitter();
    }
    FormComponent.prototype.onSubmitTemplateBased = function () {
    };
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.ngSubmit = function (form) {
        this.valueChange.emit(form);
    };
    return FormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "layout", void 0);
__decorate([
    core_1.Output('ngSubmit'),
    __metadata("design:type", Object)
], FormComponent.prototype, "valueChange", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'vcl-form',
        templateUrl: 'form.component.html',
        host: {
            '[class.vclForm]': 'true',
        }
    }),
    __metadata("design:paramtypes", [])
], FormComponent);
exports.FormComponent = FormComponent;
