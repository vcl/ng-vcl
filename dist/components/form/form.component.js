"use strict";
var core_1 = require('@angular/core');
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
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
        'label': [{ type: core_1.Input },],
    };
    return FormComponent;
}());
exports.FormComponent = FormComponent;
