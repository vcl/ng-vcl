"use strict";
var core_1 = require('@angular/core');
var MonthSelectorComponent = (function () {
    function MonthSelectorComponent() {
        this.yearMeta = {};
        this.prevMonthBtnIcon = "fa:chevron-left";
        this.nextMonthBtnIcon = "fa:chevron-right";
        this.closeBtnIcon = "fa:times";
        this.expandable = false;
        this.expanded = true;
        this.expandedChange = new core_1.EventEmitter();
        this.currentYear = new Date().getUTCFullYear();
        this.currentYearChange = new core_1.EventEmitter();
        this.currentMonth = new Date().getUTCMonth();
        this.currentMonthChange = new core_1.EventEmitter();
        this.minDate = this.currentYear + ".0";
        this.maxDate = this.currentYear + ".this.currentMonth";
        this.useShortNames = false;
        this.prevMonthAvailable = false;
        this.prevMonthBtnTap = new core_1.EventEmitter();
        this.nextMonthAvailable = false;
        this.nextMonthBtnTap = new core_1.EventEmitter();
        this.tabindex = 0;
    }
    MonthSelectorComponent.prototype.ngOnInit = function () {
        // TODO: Localize here instead of in the template so outside components
        // when calling month-picker.getMonth(month) get calendar's localized and used label.
        this.months = (this.useShortNames ? MonthSelectorComponent.monthNamesShort :
            MonthSelectorComponent.monthNames).map(function (month) { return ({
            label: month
        }); });
        this.setMinDate();
        this.setMaxDate();
    };
    MonthSelectorComponent.prototype.setMinDate = function () {
        var dateSplit = this.minDate.split('.');
        this.minYear = Number.parseInt(dateSplit[0]);
        this.minYearMonth = Number.parseInt(dateSplit[1]);
    };
    MonthSelectorComponent.prototype.setMaxDate = function () {
        var dateSplit = this.maxDate.split('.');
        this.maxYear = Number.parseInt(dateSplit[0]);
        this.maxYearMonth = Number.parseInt(dateSplit[1]);
    };
    MonthSelectorComponent.prototype.onPrevMonthTap = function () {
        if (this.prevMonthAvailable) {
            this.currentYear--;
            this.currentYearChange.emit(this.currentYear);
            this.prevMonthBtnTap.emit();
        }
    };
    MonthSelectorComponent.prototype.isPrevMonthAvailalbe = function () {
        return false;
    };
    MonthSelectorComponent.prototype.onNextMonthTap = function () {
        if (this.nextMonthAvailable) {
            this.currentYear++;
            this.currentYearChange.emit(this.currentYear);
            this.nextMonthBtnTap.emit();
        }
    };
    MonthSelectorComponent.prototype.isNextMonthAvailalbe = function () {
        return false;
    };
    MonthSelectorComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthSelectorComponent.prototype.isCurrentMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        var now = new Date();
        return now.getFullYear() == year && now.getUTCMonth() === month;
    };
    MonthSelectorComponent.monthNames = [
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
    MonthSelectorComponent.monthNamesShort = MonthSelectorComponent.monthNames
        .map(function (name) { return name.substr(0, 3); });
    MonthSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-month-selector',
                    templateUrl: 'month-selector.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MonthSelectorComponent.ctorParameters = [];
    MonthSelectorComponent.propDecorators = {
        'prevMonthBtnIcon': [{ type: core_1.Input },],
        'nextMonthBtnIcon': [{ type: core_1.Input },],
        'closeBtnIcon': [{ type: core_1.Input },],
        'expandable': [{ type: core_1.Input },],
        'expanded': [{ type: core_1.Input },],
        'expandedChange': [{ type: core_1.Output },],
        'currentYear': [{ type: core_1.Input },],
        'currentYearChange': [{ type: core_1.Output },],
        'currentMonth': [{ type: core_1.Input },],
        'currentMonthChange': [{ type: core_1.Output },],
        'minDate': [{ type: core_1.Input },],
        'maxDate': [{ type: core_1.Input },],
        'useShortNames': [{ type: core_1.Input },],
        'prevMonthBtnTap': [{ type: core_1.Output },],
        'nextMonthBtnTap': [{ type: core_1.Output },],
        'tabindex': [{ type: core_1.Input },],
    };
    return MonthSelectorComponent;
}());
exports.MonthSelectorComponent = MonthSelectorComponent;
