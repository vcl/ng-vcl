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
var SelectOptionComponent = (function () {
    function SelectOptionComponent() {
        this.class = '';
    }
    SelectOptionComponent.prototype.toObject = function () {
        var ret = {
            label: this.label,
            sublabel: this.sublabel,
            class: this.class
        };
        return ret;
    };
    return SelectOptionComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], SelectOptionComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('sublabel'),
    __metadata("design:type", String)
], SelectOptionComponent.prototype, "sublabel", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String)
], SelectOptionComponent.prototype, "class", void 0);
SelectOptionComponent = __decorate([
    core_1.Directive({
        selector: 'vcl-select-option'
    }),
    __metadata("design:paramtypes", [])
], SelectOptionComponent);
exports.SelectOptionComponent = SelectOptionComponent;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent() {
        var _this = this;
        this.clickInside = false;
        this.popoverTarget = 'popoverTarget' + Math.random().toString().slice(2);
        this.select = new core_1.EventEmitter();
        this.expanded = false;
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.inputValue = 'label';
        this.emptyLabel = 'Select value';
        this.select.subscribe(function (selectedItems) {
            _this.selected = selectedItems;
            if (!_this.onChangeCallback)
                return;
            var pubValue = _this.maxSelectableItems == 1 ? selectedItems[0].label : selectedItems.map(function (i) { return i.label; });
            _this.onChangeCallback(pubValue);
        });
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.displayValue = this.emptyLabel;
    };
    SelectComponent.prototype.ngAfterContentInit = function () {
        var templateItemsAr = this.templateItems.toArray();
        if (templateItemsAr.length > 0) {
            var items_1 = [];
            templateItemsAr.map(function (i) { return items_1.push(i.toObject()); });
            this.items = items_1;
        }
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
    };
    SelectComponent.prototype.onOutsideClick = function (event) {
        this.expanded = false;
    };
    SelectComponent.prototype.writeValue = function (value) {
        if (value !== this.selected) {
            this.selected = value;
        }
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return SelectComponent;
}());
__decorate([
    core_1.ViewChild('dropdown'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "dropdown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "select", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "expanded", void 0);
__decorate([
    core_1.ContentChildren(SelectOptionComponent),
    __metadata("design:type", core_1.QueryList)
], SelectComponent.prototype, "templateItems", void 0);
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
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], SelectComponent);
exports.SelectComponent = SelectComponent;
