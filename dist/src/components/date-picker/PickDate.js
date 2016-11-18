"use strict";
var PickDate = (function () {
    function PickDate(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    PickDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return PickDate.monthNames[monthNr];
    };
    PickDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    PickDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    PickDate.prototype.moveToYear = function (year) {
        var newDate = new Date(year, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new PickDate(newDate);
    };
    PickDate.prototype.addYears = function (amount) {
        if (amount === void 0) { amount = 1; }
        var newDate = new Date(this.date.getFullYear() + amount, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new PickDate(newDate);
    };
    PickDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    PickDate.prototype.moveDays = function (amount) {
        this.date = this.addDays(this.date, amount);
    };
    PickDate.prototype.gt = function (date) {
        return this.date > date;
    };
    PickDate.prototype.lt = function (date) {
        return this.date < date;
    };
    PickDate.prototype.incrementMonths = function (numberOfMonths) {
        var dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1);
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < this.date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(this.date.getDate());
        }
        return new PickDate(dateInTargetMonth);
    };
    PickDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    PickDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    PickDate.prototype.isSameMonthAndYear = function (date) {
        if (date === void 0) { date = new PickDate(); }
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    PickDate.prototype.isSameDay = function (date) {
        return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
    };
    PickDate.prototype.isToday = function () {
        return this.isSameDay(new PickDate());
    };
    PickDate.prototype.isInYear = function (year) {
        return this.date.getFullYear() === year;
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
        while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
            plus++;
            ret.push(this.addDays(lastDayOfMonth, plus));
            addDays--;
        }
        ret = ret.map(function (date) { return new PickDate(date); });
        var blocks = [];
        var temparray, chunk = 7;
        for (var i = 0, j = ret.length; i < j; i += chunk) {
            temparray = ret.slice(i, i + chunk);
            if (temparray.length == 7)
                blocks.push(temparray);
        }
        return blocks;
    };
    PickDate.prototype.getYearsBlock = function () {
        var years = [];
        var currentYear = this.date.getFullYear() - 12;
        while (years.length < 25) {
            years.push(currentYear);
            currentYear++;
        }
        var ret = [];
        var temparray, chunk = 5;
        for (var i = 0, j = years.length; i < j; i += chunk) {
            temparray = years.slice(i, i + chunk);
            if (temparray.length == 5)
                ret.push(temparray);
        }
        return ret;
    };
    PickDate.prototype.getWeekDays = function () {
        return PickDate.weekDays;
    };
    PickDate.prototype.getWeekNumber = function () {
        var d = new Date(+this.date);
        d.setHours(0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        var yearStart = new Date(d.getFullYear(), 0, 1);
        var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        return weekNo;
    };
    PickDate.prototype.inRange = function (from, to) {
        try {
            if (this.isSameDay(from) || this.isSameDay(to))
                return true;
        }
        catch (e) { }
        if (!from || !to)
            return false;
        return this.date >= from.date && this.date <= to.date;
    };
    PickDate.prototype.daysInRange = function (to) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
    };
    PickDate.prototype.dir = function () { console.dir(this.date); return ''; };
    ;
    return PickDate;
}());
exports.PickDate = PickDate;
PickDate.monthNames = [
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
PickDate.weekDays = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];
function PickDateCreate(date) {
    if (date === void 0) { date = new Date(); }
    return new PickDate(date);
}
exports.PickDateCreate = PickDateCreate;
