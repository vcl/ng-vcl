"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var PickDate_1 = require('./PickDate');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        // behaviour
        this.closeOnSelect = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        // values
        this.selectedDate = new Date();
        this.selectRange = false;
        this.today = PickDate_1.PickDateCreate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedRangeEnd)
            this.selectRange = true;
        this.pickedDate = PickDate_1.PickDateCreate(this.selectedDate);
        this.viewDate = PickDate_1.PickDateCreate();
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(PickDate_1.PickDateCreate(this.selectedRangeEnd));
        }
        if (!this.minDate)
            this.minDate = new Date(0, 0, 1);
        if (!this.maxDate)
            this.maxDate = new Date(10000, 0, 1);
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.pickedDate = date;
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
            return;
        }
        if (this.pickedDate && this.pickedRangeEnd) {
            // reset all
            this.pickedDate = null;
            this.pickedRangeEnd = null;
        }
        else if (this.pickedDate && !this.pickedRangeEnd) {
            this.pickedRangeEnd = date;
        }
        else if (!this.pickedDate) {
            this.pickedDate = date;
        }
        // swap values if pickedDate > pickedRangeEnd
        if (this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedRangeEnd.date < this.pickedDate.date) {
            this.pickedRangeEnd.date = [this.pickedDate.date, this.pickedDate.date = this.pickedRangeEnd.date][0]; // swap values
        }
        // if more days selected than maxRangeLength, strip days
        if (this.selectRange &&
            this.pickedRangeEnd &&
            this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength) {
            var diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
            this.pickedRangeEnd.moveDays(diffDays * (-1));
        }
        !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.pickedDate.isSameDay(date))
            return true;
        return date.inRange(this.pickedDate, this.pickedRangeEnd);
    };
    DatePickerComponent.prototype.isDisabled = function (day) {
        if (!this.viewDate.isSameMonthAndYear(day) ||
            day.gt(this.maxDate) ||
            day.lt(this.minDate)) {
            return true;
        }
        return false;
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(1);
        else
            this.viewDate = this.viewDate.incrementMonths(1);
    };
    DatePickerComponent.prototype.prevMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(-1);
        else
            this.viewDate = this.viewDate.incrementMonths(-1);
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = PickDate_1.PickDateCreate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.pickedDate;
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        this.viewDate = this.viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.pickedDate = PickDate_1.PickDateCreate(value);
        if (!value)
            this.pickedDate = PickDate_1.PickDateCreate();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-date-picker',
                    templateUrl: 'date-picker.component.html',
                    styles: [".hidden{display:none;}"],
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    host: {
                        '[class.vclDatePicker]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = [];
    DatePickerComponent.propDecorators = {
        'closeOnSelect': [{ type: core_1.Input, args: ['closeOnSelect',] },],
        'highlightToday': [{ type: core_1.Input, args: ['highlightToday',] },],
        'highlightSelected': [{ type: core_1.Input, args: ['highlightSelected',] },],
        'displayWeekNumbers': [{ type: core_1.Input, args: ['displayWeekNumbers',] },],
        'displayWeekdays': [{ type: core_1.Input, args: ['displayWeekdays',] },],
        'prevYearBtnIcon': [{ type: core_1.Input, args: ['prevYearBtnIcon',] },],
        'nextYearBtnIcon': [{ type: core_1.Input, args: ['nextYearBtnIcon',] },],
        'displayJumpToday': [{ type: core_1.Input, args: ['displayJumpToday',] },],
        'displayJumpSelected': [{ type: core_1.Input, args: ['displayJumpSelected',] },],
        'selectedDate': [{ type: core_1.Input, args: ['selectedDate',] },],
        'selectRange': [{ type: core_1.Input, args: ['selectRange',] },],
        'selectedRangeEnd': [{ type: core_1.Input, args: ['selectedRangeEnd',] },],
        'maxRangeLength': [{ type: core_1.Input, args: ['maxRangeLength',] },],
        'minDate': [{ type: core_1.Input, args: ['minDate',] },],
        'maxDate': [{ type: core_1.Input, args: ['maxDate',] },],
    };
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
