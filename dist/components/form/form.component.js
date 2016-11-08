"use strict";
var core_1 = require('@angular/core');
var FormInputControlGroup = (function () {
    function FormInputControlGroup() {
        this.inline = false;
    }
    FormInputControlGroup.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-input-control-group',
                    template: "<div [class.vclInputControlGroup]=\"!inline\" [class.vclInputInlineControlGroup]=\"inline\"><ng-content></ng-content></div>"
                },] },
    ];
    /** @nocollapse */
    FormInputControlGroup.ctorParameters = [];
    FormInputControlGroup.propDecorators = {
        'inline': [{ type: core_1.Input },],
    };
    return FormInputControlGroup;
}());
exports.FormInputControlGroup = FormInputControlGroup;
var FormComponent = (function () {
    function FormComponent() {
        this.layout = 'vertical';
        this.valueChange = new core_1.EventEmitter(); // emits ngForm
    }
    FormComponent.prototype.onSubmitTemplateBased = function () {
    };
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.ngSubmit = function (form) {
        this.valueChange.emit(form);
    };
    /*  @Input()
      @HostBinding('class.vclDisabled')
      disabled: boolean = false;
  
      @Input()
      requiredIndicatorCharacter: string = '•';
  
      // The label
      @Input()
      label: string;
  
      // Optional sub-label
      @Input()
      subLabel: string;
  
      // Whether the label prepends the child content
      @Input()
      prepend: boolean = false;
  
      // Whether the label wraps the labelled control
      @Input()
      @HostBinding('class.vclFormControlLabelWrapping')
      wrapping: boolean  = false;
  
      // Whether an indicator that an input in to the labelled control is required
      @Input()
      required: boolean  = false;
  
      // Accessible label for the required indicator
      @Input()
      requiredIndLabel: string;
    */
    FormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-form',
                    templateUrl: 'form.component.html',
                    host: {
                        '[class.vclForm]': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = [];
    FormComponent.propDecorators = {
        'layout': [{ type: core_1.Input },],
        'valueChange': [{ type: core_1.Output, args: ['ngSubmit',] },],
    };
    return FormComponent;
}());
exports.FormComponent = FormComponent;
