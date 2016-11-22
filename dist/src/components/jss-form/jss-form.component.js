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
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return JssFormComponent; }),
    multi: true
};
var JssFormComponent = (function () {
    function JssFormComponent() {
        this.mode = 'tree';
        this.value = {};
    }
    JssFormComponent.prototype.ngAfterViewInit = function () {
    };
    JssFormComponent.prototype.getValue = function () {
        return this.editor.get();
    };
    JssFormComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.editor.set(this.value);
    };
    JssFormComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    JssFormComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return JssFormComponent;
}());
__decorate([
    core_1.ViewChild('el'),
    __metadata("design:type", Object)
], JssFormComponent.prototype, "el", void 0);
__decorate([
    core_1.Input('mode'),
    __metadata("design:type", String)
], JssFormComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], JssFormComponent.prototype, "value", void 0);
JssFormComponent = __decorate([
    core_1.Component({
        selector: 'vcl-jss-form',
        templateUrl: 'jss-form.component.html',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], JssFormComponent);
exports.JssFormComponent = JssFormComponent;
