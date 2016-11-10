"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = (function () {
    function CheckboxComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:check-square-o';
        this.uncheckedIcon = 'fa:square-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        /**
        Reflects the checked state, `true` is checked and `false` is unchecked
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
    Object.defineProperty(CheckboxComponent.prototype, "checkedChange", {
        get: function () {
            return this._checkedChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ;
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            // this._checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "clsVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "attrAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "attrChecked", {
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
        this._checkedChange.emit(this.checked);
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
    CheckboxComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    CheckboxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-checkbox',
                    templateUrl: 'checkbox.component.html',
                    host: {
                        '[attr.role]': '"checkbox"',
                        '[class.vclCheckbox]': 'true',
                        '[class.vclScale130p]': 'true',
                    },
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
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
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
