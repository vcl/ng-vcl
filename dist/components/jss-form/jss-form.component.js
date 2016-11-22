"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// TODO include this css-file without breaking everything else
// require('style!jsoneditor/dist/jsoneditor.css');
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
    /**
     * get the current state of the edited json
     */
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
    JssFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-jss-form',
                    templateUrl: 'jss-form.component.html',
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    JssFormComponent.ctorParameters = [];
    JssFormComponent.propDecorators = {
        'el': [{ type: core_1.ViewChild, args: ['el',] },],
        'mode': [{ type: core_1.Input, args: ['mode',] },],
        'value': [{ type: core_1.Input, args: ['value',] },],
    };
    return JssFormComponent;
}());
exports.JssFormComponent = JssFormComponent;
