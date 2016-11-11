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
var PickDate = (function () {
    function PickDate(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    PickDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return [
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
        ][monthNr];
    };
    PickDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    PickDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    PickDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    PickDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    PickDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    PickDate.prototype.isSameMonthAndYear = function (date) {
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    PickDate.prototype.isSameDay = function (date) {
        return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
    };
    PickDate.prototype.getMonthBlock = function () {
        var ret = [];
        var firstDayOfMonth = this.getFirstDateOfMonth(this.date);
        var lastDayOfMonth = this.getLastDateOfMonth(this.date);
        var daysOfMonth = this.getNumberOfDaysInMonth(this.date);
        for (var i = 0; i < daysOfMonth; i++) {
            ret.push(this.addDays(firstDayOfMonth, i));
        }
        var weekDay = firstDayOfMonth.getDay();
        var minus = 0;
        while (weekDay > 1) {
            minus--;
            ret.unshift(this.addDays(firstDayOfMonth, minus));
            weekDay--;
        }
        var addDays = 7 - lastDayOfMonth.getDay();
        var plus = 0;
        while (addDays > 0) {
            plus++;
            ret.push(this.addDays(lastDayOfMonth, plus));
            addDays--;
        }
        ret = ret.map(function (date) { return new PickDate(date); });
        var blocks = [];
        var temparray, chunk = 7;
        for (var i = 0, j = ret.length; i < j; i += chunk) {
            temparray = ret.slice(i, i + chunk);
            blocks.push(temparray);
        }
        return blocks;
    };
    return PickDate;
}());
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.yearMeta = {};
        this.displayJumpToday = false;
        this.displayJumpSelected = false;
        this.highlightToday = true;
        this.displayWeekNumbers = false;
        this.closeOnSelect = false;
        this.selectRange = false;
        this.selectedTime = new Date();
        this.isDate = new PickDate(this.selectedTime);
        this.isDateRangeEnd = new PickDate(this.selectedRangeEnd);
        this.viewDate = new PickDate();
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    return DatePickerComponent;
}());
__decorate([
    core_1.Input('displayJumpToday'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpToday", void 0);
__decorate([
    core_1.Input('displayJumpSelected'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpSelected", void 0);
__decorate([
    core_1.Input('highlightToday'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "highlightToday", void 0);
__decorate([
    core_1.Input('displayWeekNumbers'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
__decorate([
    core_1.Input('closeOnSelect'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "closeOnSelect", void 0);
__decorate([
    core_1.Input('selectRange'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "selectRange", void 0);
__decorate([
    core_1.Input('selectedTime'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedTime", void 0);
__decorate([
    core_1.Input('selectedRangeEnd'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
DatePickerComponent = __decorate([
    core_1.Component({
        selector: 'vcl-date-picker',
        templateUrl: 'date-picker.component.html'
    }),
    __metadata("design:paramtypes", [])
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
