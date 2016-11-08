"use strict";
var core_1 = require('@angular/core');
var MonthPickerComponent = (function () {
    function MonthPickerComponent() {
        this.yearMeta = {};
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.closeBtnIcon = "fa:times";
        this.monthsPerRow = 3;
        this.expandable = false;
        this.expanded = true;
        this.expandedChange = new core_1.EventEmitter();
        this.maxYear = Number.MAX_SAFE_INTEGER;
        this.currentYear = new Date().getUTCFullYear();
        this.currentYearChange = new core_1.EventEmitter();
        this.useShortNames = false;
        this.useAvailableMonths = false;
        this.colors = null;
        this.minSelectableItems = 1;
        this.prevYearAvailable = false;
        this.nextYearAvailable = false;
        this.prevYearBtnTap = new core_1.EventEmitter();
        this.nextYearBtnTap = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.deselect = new core_1.EventEmitter();
        this.tabindex = 0;
    }
    MonthPickerComponent.prototype.ngOnInit = function () {
        // TODO: Localize here instead of in the template so outside components
        // when calling month-picker.getMonth(month) get calendar's localized and used label.
        this.months = (this.useShortNames ? MonthPickerComponent.monthNamesShort :
            MonthPickerComponent.monthNames).map(function (month) { return ({
            label: month
        }); });
        if (!this.maxSelectableItems) {
            this.maxSelectableItems = this.colors && this.colors.length || 1;
        }
        if (this.colors) {
            this.availableColors = this.colors.slice();
        }
        this.setYearMeta(this.currentYear);
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (monthMeta) { return new Object(); });
    };
    MonthPickerComponent.prototype.selectMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        if (!this.isMonthAvailable(month, year)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            return this.deselectMonth(month, year);
        }
        if (this.maxSelectableItems === 1) {
            this.iterateMonthMetas(function (month, year, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        else if (this.getSelectedDates().length < this.maxSelectableItems) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(month, year);
            this.notifySelect(year + "." + month);
            if (this.maxSelectableItems === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.isMonthAvailable = function (month, year) {
        return this.isDateInBounds(month, year) && (!this.useAvailableMonths ||
            this.yearMeta[year] && this.yearMeta[year][month].available);
    };
    MonthPickerComponent.prototype.isDateInBounds = function (month, year) {
        return this.isMonthInBounds(month) && this.isYearInBounds(year);
    };
    MonthPickerComponent.prototype.isMonthInBounds = function (month) {
        return month > -1 && month < this.months.length;
    };
    MonthPickerComponent.prototype.isYearInBounds = function (year) {
        return year > -1 && year < this.maxYear;
    };
    MonthPickerComponent.prototype.getYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        return this.yearMeta[year];
    };
    MonthPickerComponent.prototype.iterateMonthMetas = function (cb) {
        var _this = this;
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                cb(month, +year, monthMeta);
            });
        });
    };
    MonthPickerComponent.prototype.getSelectedDates = function () {
        var _this = this;
        var selectedDates = [];
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                if (monthMeta.selected) {
                    selectedDates.push(year + "." + month);
                }
            });
        });
        return selectedDates;
    };
    MonthPickerComponent.prototype.setMonthBackgroundColor = function (month, year) {
        var color = this.getMonthBackgroundColor();
        if (color) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.color = color;
        }
    };
    MonthPickerComponent.prototype.getMonthBackgroundColor = function () {
        if (this.availableColors && this.availableColors.length) {
            return this.availableColors.shift();
        }
    };
    MonthPickerComponent.prototype.deselectMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        if (this.isMonthSelected(month, year)) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.selected = false;
            this.clearMonthBackgroundColor(month, year);
            this.notifyDeselect(year + "." + month);
        }
    };
    MonthPickerComponent.prototype.isMonthSelected = function (month, year) {
        return this.isDateInBounds(month, year) &&
            this.yearMeta[year] && this.yearMeta[year][month].selected;
    };
    MonthPickerComponent.prototype.clearMonthBackgroundColor = function (month, year) {
        if (this.availableColors) {
            var monthMeta = this.getYearMeta(year)[month];
            if (monthMeta.color) {
                this.availableColors.unshift(monthMeta.color);
                monthMeta.color = undefined;
            }
        }
    };
    MonthPickerComponent.prototype.deselectAllMonths = function () {
        var _this = this;
        this.iterateMonthMetas(function (month, year, monthMeta) {
            monthMeta.selected = false;
            _this.clearMonthBackgroundColor(month, year);
            _this.notifyDeselect(year + "." + month);
        });
    };
    MonthPickerComponent.prototype.addAvailableMonth = function (month, year) {
        if (this.isDateInBounds(month, year)) {
            this.getYearMeta(year)[month].available = true;
        }
    };
    MonthPickerComponent.prototype.removeAvailableMonth = function (month, year) {
        if (this.isDateInBounds(month, year) && this.yearMeta[year]) {
            this.yearMeta[year][month].available = false;
        }
    };
    MonthPickerComponent.prototype.removeAllAvailableMonths = function () {
        this.iterateMonthMetas(function (month, year, monthMeta) {
            monthMeta.available = false;
        });
    };
    MonthPickerComponent.prototype.onPrevYearTap = function () {
        if (this.prevYearAvailable) {
            this.currentYear--;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.prevYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onNextYearTap = function () {
        if (this.nextYearAvailable) {
            this.currentYear++;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.nextYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.notifySelect = function (date) {
        this.select.emit(date);
    };
    MonthPickerComponent.prototype.notifyDeselect = function (date) {
        this.deselect.emit(date);
    };
    MonthPickerComponent.prototype.isCurrentMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        var now = new Date();
        return now.getFullYear() == year && now.getUTCMonth() === month;
    };
    MonthPickerComponent.prototype.getMonth = function (month) {
        return this.isMonthInBounds(month) ? this.months[month] : null;
    };
    MonthPickerComponent.monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    MonthPickerComponent.monthNamesShort = MonthPickerComponent.monthNames
        .map(function (name) { return name.substr(0, 3); });
    MonthPickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-month-picker',
                    templateUrl: 'month-picker.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = [];
    MonthPickerComponent.propDecorators = {
        'prevYearBtnIcon': [{ type: core_1.Input },],
        'nextYearBtnIcon': [{ type: core_1.Input },],
        'closeBtnIcon': [{ type: core_1.Input },],
        'monthsPerRow': [{ type: core_1.Input },],
        'expandable': [{ type: core_1.Input },],
        'expanded': [{ type: core_1.Input },],
        'expandedChange': [{ type: core_1.Output },],
        'maxYear': [{ type: core_1.Input },],
        'currentYear': [{ type: core_1.Input },],
        'currentYearChange': [{ type: core_1.Output },],
        'useShortNames': [{ type: core_1.Input },],
        'useAvailableMonths': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'maxSelectableItems': [{ type: core_1.Input },],
        'minSelectableItems': [{ type: core_1.Input },],
        'prevYearAvailable': [{ type: core_1.Input },],
        'nextYearAvailable': [{ type: core_1.Input },],
        'prevYearBtnTap': [{ type: core_1.Output },],
        'nextYearBtnTap': [{ type: core_1.Output },],
        'select': [{ type: core_1.Output },],
        'deselect': [{ type: core_1.Output },],
        'tabindex': [{ type: core_1.Input },],
    };
    return MonthPickerComponent;
}());
exports.MonthPickerComponent = MonthPickerComponent;
