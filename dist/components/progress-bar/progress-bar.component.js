"use strict";
var core_1 = require('@angular/core');
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.value = null;
        this.secondaryValue = null;
        this.minValue = 0;
        this.maxValue = 100;
        this.indeterminate = false;
        this.label = null;
    }
    Object.defineProperty(ProgressBarComponent.prototype, "showIndeterminate", {
        get: function () {
            return this.indeterminate && !this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showValue", {
        get: function () {
            return !this.indeterminate || this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showSecondaryValue", {
        get: function () {
            return this.validateValue(this.secondaryValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformValue", {
        get: function () {
            var value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformSecondaryValue", {
        get: function () {
            var value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "range", {
        get: function () {
            return this.maxValue - this.minValue;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype.scaleValue = function (value) {
        return (value - this.minValue) / this.range;
    };
    ProgressBarComponent.prototype.validateValue = function (value) {
        return typeof value === 'number' &&
            value !== NaN &&
            value >= this.minValue &&
            value <= this.maxValue;
    };
    ProgressBarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-progress-bar',
                    templateUrl: 'progress-bar.component.html',
                    host: {
                        '[attr.role]': '"progressbar"',
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ProgressBarComponent.ctorParameters = [];
    ProgressBarComponent.propDecorators = {
        'value': [{ type: core_1.Input },],
        'secondaryValue': [{ type: core_1.Input },],
        'minValue': [{ type: core_1.Input },],
        'maxValue': [{ type: core_1.Input },],
        'indeterminate': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
    };
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
