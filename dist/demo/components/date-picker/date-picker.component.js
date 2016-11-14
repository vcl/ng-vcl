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
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.expanded = false;
        this.thisYear = new Date().getUTCFullYear();
        this.currentYear = this.thisYear;
        this.prevYearAvailable = true;
        this.nextYearAvailable = false;
        this.selectedDate = new Date();
        this.selectRange = true;
        this.selectedRangeEnd = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3);
        this.minDate = new Date();
    }
    DatePickerComponent.prototype.ngOnInit = function () { };
    DatePickerComponent.prototype.expandDatePicker = function () {
        this.expanded = !this.expanded;
    };
    DatePickerComponent.prototype.onSelect = function (date) {
        console.log('onSelect():', date);
    };
    return DatePickerComponent;
}());
DatePickerComponent = __decorate([
    core_1.Component({
        selector: 'date-picker',
        templateUrl: 'date-picker.component.html',
        styles: ["\n    .100px{\n      width: 100px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
