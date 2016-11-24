"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var JSONEditor = require('jsoneditor/dist/jsoneditor.js');
/**
 * The JSON editor needs styling and some graphics
 * We read the raw css and svg files and replace any file reference to the svg with
 * an inline reference of the data encoded svg file
 *
 * The css must be added as a style with  ViewEncapsulation set to None
 */
var JSONEditorSVG = require('!raw-loader!jsoneditor/dist/img/jsoneditor-icons.svg');
var JSONEditorCSS = require('!raw-loader!jsoneditor/dist/jsoneditor.css')
    .replace(/img\/jsoneditor-icons\.svg/g, 'data:image/svg+xml;base64,' + btoa(JSONEditorSVG));
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return JsonEditorComponent; }),
    multi: true
};
var JsonEditorComponent = (function () {
    function JsonEditorComponent() {
        this.mode = 'tree';
        this.value = {};
        /**
         * @link https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
         */
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
    /**
     * get the current state of the edited json
     */
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
    JsonEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-json-editor',
                    styles: [JSONEditorCSS],
                    encapsulation: core_1.ViewEncapsulation.None,
                    templateUrl: 'json-editor.component.html',
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    JsonEditorComponent.ctorParameters = [];
    JsonEditorComponent.propDecorators = {
        'el': [{ type: core_1.ViewChild, args: ['el',] },],
        'mode': [{ type: core_1.Input, args: ['mode',] },],
        'value': [{ type: core_1.Input, args: ['value',] },],
        'options': [{ type: core_1.Input, args: ['options',] },],
        'height': [{ type: core_1.Input, args: ['height',] },],
    };
    return JsonEditorComponent;
}());
exports.JsonEditorComponent = JsonEditorComponent;
