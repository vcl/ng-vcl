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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PickDate_1 = require("./PickDate");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.closeOnSelect = false;
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
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
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.pickedDate = date;
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
            return;
        }
        if (this.pickedDate && this.pickedRangeEnd) {
            this.pickedDate = null;
            this.pickedRangeEnd = null;
        }
        else if (this.pickedDate && !this.pickedRangeEnd) {
            this.pickedRangeEnd = date;
        }
        else if (!this.pickedDate) {
            this.pickedDate = date;
        }
        if (this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedRangeEnd.date < this.pickedDate.date) {
            this.pickedRangeEnd.date = [this.pickedDate.date, this.pickedDate.date = this.pickedRangeEnd.date][0];
        }
        if (this.selectRange &&
            this.pickedRangeEnd &&
            this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength) {
            var diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
            this.pickedRangeEnd.moveDays(diffDays * (-1));
        }
        !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
    };
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
    return DatePickerComponent;
}());
__decorate([
    core_1.Input('closeOnSelect'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "closeOnSelect", void 0);
__decorate([
    core_1.Input('highlightToday'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "highlightToday", void 0);
__decorate([
    core_1.Input('highlightSelected'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "highlightSelected", void 0);
__decorate([
    core_1.Input('displayWeekNumbers'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
__decorate([
    core_1.Input('displayWeekdays'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekdays", void 0);
__decorate([
    core_1.Input('prevYearBtnIcon'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
__decorate([
    core_1.Input('nextYearBtnIcon'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
__decorate([
    core_1.Input('displayJumpToday'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpToday", void 0);
__decorate([
    core_1.Input('displayJumpSelected'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpSelected", void 0);
__decorate([
    core_1.Input('selectedDate'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedDate", void 0);
__decorate([
    core_1.Input('selectRange'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "selectRange", void 0);
__decorate([
    core_1.Input('selectedRangeEnd'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
__decorate([
    core_1.Input('maxRangeLength'),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "maxRangeLength", void 0);
__decorate([
    core_1.Input('minDate'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "minDate", void 0);
__decorate([
    core_1.Input('maxDate'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "maxDate", void 0);
DatePickerComponent = __decorate([
    core_1.Component({
        selector: 'vcl-date-picker',
        templateUrl: 'date-picker.component.html',
        styles: [".hidden{display:none;}"],
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        host: {
            '[class.vclDatePicker]': 'true'
        }
    }),
    __metadata("design:paramtypes", [])
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
