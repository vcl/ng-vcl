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
        this.selectRange = false;
        this.selectedDate = new Date();
        this.pickedDate = PickDate_1.PickDateCreate(this.selectedDate);
        this.isDateRangeEnd = PickDate_1.PickDateCreate(this.selectedRangeEnd);
        this.viewDate = PickDate_1.PickDateCreate();
    }
    DatePickerComponent.prototype.nextMonth = function () {
        this.viewDate = this.viewDate.incrementMonths(1);
    };
    DatePickerComponent.prototype.prevMonth = function () {
        this.viewDate = this.viewDate.incrementMonths(-1);
    };
    DatePickerComponent.prototype.select = function (date) {
        this.pickedDate = date;
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
    core_1.Input('selectRange'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "selectRange", void 0);
__decorate([
    core_1.Input('selectedTime'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedDate", void 0);
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
