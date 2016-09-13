"use strict";
var core_1 = require('@angular/core');
/**
Radio button.

## Usage

```html+hbs
<vcl-radio-button [(checked)]="checked"></vcl-radio-button>
```

@demo example
*/
var RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef) {
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        /**
        Refelects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        The first parameter is the value of the `checked` property.
        @public
        @action
        */
        this.checkedChange = new core_1.EventEmitter();
    }
    RadioButtonComponent.prototype.ngOnInit = function () { };
    RadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            this.checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(RadioButtonComponent.prototype, "hbVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "hbAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "hbChecked", {
        get: function () {
            return !!this.checked;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.onKeyup = function (e) {
        if (e.keyCode === 32) {
            return this.triggerChangeAction(e);
        }
    };
    RadioButtonComponent.prototype.onClick = function (e) {
        return this.triggerChangeAction(e);
    };
    RadioButtonComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    };
    RadioButtonComponent.prototype.focusMaintenance = function (checked) {
        if (this.checked === true && this.elementRef.nativeElement) {
            this.elementRef.nativeElement.focus();
        }
    };
    Object.defineProperty(RadioButtonComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-radio-button',
                    template: "<vcl-icon [icon]=\"icon\"></vcl-icon><ng-content></ng-content>",
                    host: {
                        '[attr.ariaRole]': '"radio"',
                        '[class.vclRadioButton]': 'true',
                        '[class.vclScale130p]': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    RadioButtonComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    RadioButtonComponent.propDecorators = {
        'checkedIcon': [{ type: core_1.Input },],
        'uncheckedIcon': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'checked': [{ type: core_1.Input },],
        'checkedChange': [{ type: core_1.Output },],
        'hbVclDisabled': [{ type: core_1.HostBinding, args: ['class.vclDisabled',] },],
        'hbAriaDisabled': [{ type: core_1.HostBinding, args: ['attr.aria-disabled',] },],
        'hbChecked': [{ type: core_1.HostBinding, args: ['attr.checked',] },],
        'onKeyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return RadioButtonComponent;
}());
exports.RadioButtonComponent = RadioButtonComponent;
