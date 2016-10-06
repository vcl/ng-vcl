"use strict";
var core_1 = require('@angular/core');
/**
Checkbox.

## Usage

```html
<vcl-checkbox
  [(checked)]="checked">
</vcl-checkbox>
```
*/
var CheckboxComponent = (function () {
    function CheckboxComponent(elementRef) {
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:check-square-o';
        this.uncheckedIcon = 'fa:square-o';
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
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            this.checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "hbVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "hbAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "hbChecked", {
        get: function () {
            return !!this.checked;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onKeyup = function (e) {
        if (e.keyCode === 32) {
            return this.triggerChangeAction(e);
        }
    };
    CheckboxComponent.prototype.onClick = function (e) {
        return this.triggerChangeAction(e);
    };
    CheckboxComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    };
    CheckboxComponent.prototype.focusMaintenance = function (checked) {
        if (this.checked === true && this.elementRef.nativeElement) {
            this.elementRef.nativeElement.focus();
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-checkbox',
                    template: "<vcl-icon [icon]=\"icon\"></vcl-icon><ng-content></ng-content>",
                    host: {
                        '[attr.role]': '"checkbox"',
                        '[class.vclCheckbox]': 'true',
                        '[class.vclScale130p]': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    CheckboxComponent.propDecorators = {
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
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
