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
var JSONEditor = require('jsoneditor/dist/jsoneditor.js');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return JsonEditorComponent; }),
    multi: true
};
var JsonEditorComponent = (function () {
    function JsonEditorComponent() {
        this.options = {};
    }
    JsonEditorComponent.prototype.ngAfterViewInit = function () {
        console.log('...');
        console.dir(this.el.nativeElement);
        console.dir(JSONEditor);
        this.editor = new JSONEditor(this.el.nativeElement, this.options);
    };
    JsonEditorComponent.prototype.writeValue = function (value) {
    };
    JsonEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    JsonEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return JsonEditorComponent;
}());
__decorate([
    core_1.ViewChild('el'),
    __metadata("design:type", Object)
], JsonEditorComponent.prototype, "el", void 0);
JsonEditorComponent = __decorate([
    core_1.Component({
        selector: 'vcl-json-editor',
        templateUrl: 'json-editor.component.html',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], JsonEditorComponent);
exports.JsonEditorComponent = JsonEditorComponent;
