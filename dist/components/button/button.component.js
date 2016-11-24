"use strict";
var core_1 = require('@angular/core');
var ButtonComponent = (function () {
    function ButtonComponent(elementRef) {
        this.elementRef = elementRef;
        this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        this.focused = false; // `true` if the element is focused  (CSS' :focus)
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.selected = false;
        this.busy = false; // State to indicate that the button is disabled as a operation is in progress
        this.flexLabel = false;
        this.autoBlur = true;
        this._press = new core_1.EventEmitter();
    }
    Object.defineProperty(ButtonComponent.prototype, "press", {
        get: function () {
            return this._press.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.press.subscribe(function () {
            if (_this.autoBlur) {
                if (_this.elementRef.nativeElement && _this.elementRef.nativeElement.blur) {
                    _this.elementRef.nativeElement.blur();
                }
            }
        });
    };
    ButtonComponent.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonComponent.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonComponent.prototype.onMouseUp = function (e) { this.pressed = false; };
    ButtonComponent.prototype.onMouseDown = function (e) { this.pressed = true; };
    ButtonComponent.prototype.onFocus = function (e) { this.focused = true; };
    ButtonComponent.prototype.onBlur = function (e) { this.focused = false; };
    ButtonComponent.prototype.onTap = function (e) { this._press.emit(e); };
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
                        '[class.vclButton]': 'true',
                    },
                    templateUrl: 'button.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    ButtonComponent.propDecorators = {
        'hovered': [{ type: core_1.HostBinding, args: ['class.vclHovered',] },],
        'selected': [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['class.vclSelected',] },],
        'title': [{ type: core_1.HostBinding, args: ['attr.aria-label',] }, { type: core_1.Input },],
        'busy': [{ type: core_1.Input },],
        'flexLabel': [{ type: core_1.Input },],
        'busyLabel': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'prepIconBusy': [{ type: core_1.Input },],
        'autoBlur': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'appIconBusy': [{ type: core_1.Input },],
        'press': [{ type: core_1.Output },],
        'onMouseEnter': [{ type: core_1.HostListener, args: ['mouseenter', ['$event'],] },],
        'onMouseLeave': [{ type: core_1.HostListener, args: ['mouseleave', ['$event'],] },],
        'onMouseUp': [{ type: core_1.HostListener, args: ['mouseup', ['$event'],] },],
        'onMouseDown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        'onFocus': [{ type: core_1.HostListener, args: ['onfocus', ['$event'],] },],
        'onBlur': [{ type: core_1.HostListener, args: ['onblur', ['$event'],] },],
        'onTap': [{ type: core_1.HostListener, args: ['tap', ['$event'],] },],
    };
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
