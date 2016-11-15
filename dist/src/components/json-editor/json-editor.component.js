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
        this.mode = 'tree';
        this.value = {};
        this.options = {};
        this.height = '250px';
    }
    JsonEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.options.onChange = function () {
            _this.value = _this.editor.get();
            !!_this.onChangeCallback && _this.onChangeCallback(_this.value);
        };
        this.options.onModeChange = function (newMode) {
            _this.mode = newMode;
        };
        this.editor = new JSONEditor(this.el.nativeElement, this.options);
        this.editor.set(this.value);
    };
    JsonEditorComponent.prototype.getValue = function () {
        return this.editor.get();
    };
    JsonEditorComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.editor.set(this.value);
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
__decorate([
    core_1.Input('mode'),
    __metadata("design:type", String)
], JsonEditorComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], JsonEditorComponent.prototype, "value", void 0);
__decorate([
    core_1.Input('options'),
    __metadata("design:type", Object)
], JsonEditorComponent.prototype, "options", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", String)
], JsonEditorComponent.prototype, "height", void 0);
JsonEditorComponent = __decorate([
    core_1.Component({
        selector: 'vcl-json-editor',
        templateUrl: 'json-editor.component.html',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], JsonEditorComponent);
exports.JsonEditorComponent = JsonEditorComponent;
