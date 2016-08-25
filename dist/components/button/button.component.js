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
var core_1 = require('@angular/core');
/**
The main control for triggering actions

## Usage

```html
<button vcl-button label="My Button" (click)=""doSomething()></button>
```

@demo example

@property     {String}    label    textual label
*/
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        this.focused = false; // `true` if the element is focused  (CSS' :focus)
        this.selected = false;
        // TODO: Doc missing. Input attr?
        this.busy = false; // State to indicate that the button is disabled as a operation is in progress
        this.flexLabel = false;
    }
    ButtonComponent.prototype.domouseenter = function () {
        console.log('mouseenter');
    };
    ButtonComponent.prototype.domouseleave = function () {
        console.log('mouseleave');
    };
    ButtonComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ButtonComponent.prototype, "calculatedLabel", {
        get: function () {
            return (this.busy && this.busyLabel) ? this.busyLabel : this.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "calculatedPrepIcon", {
        get: function () {
            return (this.busy && this.prepIconBusy) ? this.prepIconBusy : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "calculatedAppIcon", {
        get: function () {
            return (this.busy && this.appIconBusy) ? this.appIconBusy : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "busy", void 0);
    __decorate([
        // State to indicate that the button is disabled as a operation is in progress
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "flexLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "busyLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "prepIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "prepIconBusy", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIconBusy", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: '[vcl-button]',
            host: {
                '(mouseenter)': 'hovered=true',
                '(mouseleave)': 'hovered=false',
                '(mousedown)': 'pressed=true',
                '(mouseup)': 'pressed=false',
                '(onfocus)': 'focused=true;',
                '(onblur)': 'focused=false',
                '[class.vclButton]': 'true',
                '[class.vclHovered]': 'hovered',
                '[class.vclDisabled]': 'disabled',
                '[class.vclSelected]': 'selected',
            },
            templateUrl: 'button.component.html',
            // encapsulation: ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
