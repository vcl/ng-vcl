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
var PickDate_1 = require("./PickDate");
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.closeOnSelect = false;
        this.selectedDate = new Date();
        this.selectRange = true;
        this.pickedDate = PickDate_1.PickDateCreate(this.selectedDate);
        this.pickedRangeEnd = this.selectedRangeEnd ? PickDate_1.PickDateCreate(this.selectedRangeEnd) : null;
        this.viewDate = PickDate_1.PickDateCreate();
    }
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.pickedDate = date;
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
    };
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.pickedDate.isSameDay(date))
            return true;
        return date.inRange(this.pickedDate, this.pickedRangeEnd);
    };
    DatePickerComponent.prototype.nextMonth = function () {
        this.viewDate = this.viewDate.incrementMonths(1);
    };
    DatePickerComponent.prototype.prevMonth = function () {
        this.viewDate = this.viewDate.incrementMonths(-1);
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = PickDate_1.PickDateCreate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.pickedDate;
    };
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
    core_1.Input('highlightSelected'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "highlightSelected", void 0);
__decorate([
    core_1.Input('displayWeekNumbers'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
__decorate([
    core_1.Input('closeOnSelect'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "closeOnSelect", void 0);
__decorate([
    core_1.Input('selectedTime'),
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
DatePickerComponent = __decorate([
    core_1.Component({
        selector: 'vcl-date-picker',
        templateUrl: 'date-picker.component.html'
    }),
    __metadata("design:paramtypes", [])
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
