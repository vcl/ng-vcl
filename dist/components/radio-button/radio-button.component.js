"use strict";
// TODO: This class is just a copy of the checkbox with slight modifications
// Use inheritance once supported
// https://github.com/angular/angular/issues/11606
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        /**
        Refelects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this._checkedChange = new core_1.EventEmitter();
        this._checkedChange.subscribe(function (newVal) {
            !!_this.onChangeCallback && _this.onChangeCallback(newVal);
        });
    }
    Object.defineProperty(RadioButtonComponent.prototype, "checkedChange", {
        get: function () {
            return this._checkedChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ;
    RadioButtonComponent.prototype.ngOnInit = function () { };
    RadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            // this._checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(RadioButtonComponent.prototype, "clsVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "attrAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "attrChecked", {
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
        this._checkedChange.emit(this.checked);
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
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    RadioButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-radio-button',
                    templateUrl: 'radio-button.component.html',
                    host: {
                        '[attr.role]': '"radio"',
                        '[class.vclCheckbox]': 'true',
                        '[class.vclScale130p]': 'true',
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
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
        'labelPosition': [{ type: core_1.Input, args: ['labelPosition',] },],
        'tabindex': [{ type: core_1.HostBinding, args: ['attr.tabindex',] }, { type: core_1.Input },],
        'checked': [{ type: core_1.Input },],
        'checkedChange': [{ type: core_1.Output },],
        'clsVclDisabled': [{ type: core_1.HostBinding, args: ['class.vclDisabled',] },],
        'attrAriaDisabled': [{ type: core_1.HostBinding, args: ['attr.aria-disabled',] },],
        'attrChecked': [{ type: core_1.HostBinding, args: ['attr.checked',] },],
        'onKeyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return RadioButtonComponent;
}());
exports.RadioButtonComponent = RadioButtonComponent;
