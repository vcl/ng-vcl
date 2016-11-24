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
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
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
        this.checked = false;
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
    return RadioButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "checkedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input('labelPosition'),
    __metadata("design:type", String)
], RadioButtonComponent.prototype, "labelPosition", void 0);
__decorate([
    core_1.HostBinding('attr.tabindex'),
    core_1.Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "checked", void 0);
__decorate([
    core_1.Output('change'),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "_checkedChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Observable_1.Observable),
    __metadata("design:paramtypes", [])
], RadioButtonComponent.prototype, "checkedChange", null);
__decorate([
    core_1.HostBinding('class.vclDisabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], RadioButtonComponent.prototype, "clsVclDisabled", null);
__decorate([
    core_1.HostBinding('attr.aria-disabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], RadioButtonComponent.prototype, "attrAriaDisabled", null);
__decorate([
    core_1.HostBinding('attr.checked'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], RadioButtonComponent.prototype, "attrChecked", null);
__decorate([
    core_1.HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RadioButtonComponent.prototype, "onKeyup", null);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RadioButtonComponent.prototype, "onClick", null);
RadioButtonComponent = __decorate([
    core_1.Component({
        selector: 'vcl-radio-button',
        templateUrl: 'radio-button.component.html',
        host: {
            '[attr.role]': '"radio"',
            '[class.vclCheckbox]': 'true',
            '[class.vclScale130p]': 'true',
        },
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], RadioButtonComponent);
exports.RadioButtonComponent = RadioButtonComponent;
