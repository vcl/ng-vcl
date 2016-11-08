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
var SelectComponent = (function () {
    function SelectComponent() {
        this.ariaRole = 'list';
        this.clickInside = false;
        this.select = new core_1.EventEmitter();
        this.expanded = false;
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.inputValue = 'label';
        this.emptyLabel = 'Select value';
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.displayValue = this.emptyLabel;
    };
    SelectComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
    };
    SelectComponent.prototype.selectItem = function (item) {
        this.dropdown.selectItem(item);
    };
    SelectComponent.prototype.onSelect = function (items) {
        this.clickInside = true;
        this.select.emit(items);
        if (items && items[0] && this.maxSelectableItems === 1) {
            this.displayValue = items[0][this.inputValue];
        }
        else if (!items || items.length === 0) {
            this.displayValue = this.emptyLabel;
        }
        else {
            var result = '';
            for (var i = 0; i < items.length; i++) {
                result += items[i][this.inputValue];
                if (i !== items.length - 1) {
                    result += ', ';
                }
            }
            this.displayValue = result;
        }
        this.hide.nativeElement.innerHTML = this.displayValue;
        this.input.nativeElement.style.minWidth = (this.hide.nativeElement.offsetWidth * 1.25) + 'px';
        this.hide.nativeElement.innerHTML = '';
    };
    SelectComponent.prototype.onOutsideClick = function (event) {
        this.expanded = false;
    };
    return SelectComponent;
}());
__decorate([
    core_1.ViewChild('dropdown'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "dropdown", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "input", void 0);
__decorate([
    core_1.ViewChild('hide'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "hide", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "select", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "expanded", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SelectComponent.prototype, "minSelectableItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SelectComponent.prototype, "maxSelectableItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "expandedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "collapsedIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "inputValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "emptyLabel", void 0);
SelectComponent = __decorate([
    core_1.Component({
        selector: 'vcl-select',
        templateUrl: 'select.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], SelectComponent);
exports.SelectComponent = SelectComponent;
