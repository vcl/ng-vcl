var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core'], factory);
    }
})(function (require, exports) {
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
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "checkedIcon", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "disabled", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "checked", void 0);
        __decorate([
            core_1.Output(), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "checkedChange", void 0);
        __decorate([
            core_1.HostBinding('class.vclDisabled'), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "hbVclDisabled", null);
        __decorate([
            core_1.HostBinding('attr.aria-disabled'), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "hbAriaDisabled", null);
        __decorate([
            core_1.HostBinding('attr.checked'), 
            __metadata('design:type', Object)
        ], RadioButtonComponent.prototype, "hbChecked", null);
        __decorate([
            core_1.HostListener('keyup', ['$event']), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object]), 
            __metadata('design:returntype', void 0)
        ], RadioButtonComponent.prototype, "onKeyup", null);
        __decorate([
            core_1.HostListener('click', ['$event']), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object]), 
            __metadata('design:returntype', void 0)
        ], RadioButtonComponent.prototype, "onClick", null);
        RadioButtonComponent = __decorate([
            core_1.Component({
                selector: 'vcl-radio-button',
                template: "<vcl-icon [icon]=\"icon\"></vcl-icon><ng-content></ng-content>",
                host: {
                    '[attr.ariaRole]': '"radio"',
                    '[class.vclRadioButton]': 'true',
                    '[class.vclScale130p]': 'true',
                }
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef])
        ], RadioButtonComponent);
        return RadioButtonComponent;
    }());
    exports.RadioButtonComponent = RadioButtonComponent;
});
