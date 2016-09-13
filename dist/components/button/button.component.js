"use strict";
var core_1 = require('@angular/core');
require('hammerjs');
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
        this._press = new core_1.EventEmitter();
    }
    Object.defineProperty(ButtonComponent.prototype, "press", {
        get: function () {
            return this._press.asObservable();
        },
        enumerable: true,
        configurable: true
    });
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
    ButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[vcl-button]',
                    host: {
                        '(mouseenter)': 'hovered=true',
                        '(mouseleave)': 'hovered=false',
                        '(mousedown)': 'pressed=true',
                        '(mouseup)': 'pressed=false',
                        '(onfocus)': 'focused=true;',
                        '(onblur)': 'focused=false',
                        '(tap)': '_press.emit($event)',
                        '[class.vclButton]': 'true',
                        '[class.vclHovered]': 'hovered',
                        '[class.vclDisabled]': 'disabled',
                        '[class.vclSelected]': 'selected',
                    },
                    templateUrl: 'button.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = [];
    ButtonComponent.propDecorators = {
        'busy': [{ type: core_1.Input },],
        'flexLabel': [{ type: core_1.Input },],
        'busyLabel': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'prepIconBusy': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'appIconBusy': [{ type: core_1.Input },],
        'press': [{ type: core_1.Output },],
    };
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
