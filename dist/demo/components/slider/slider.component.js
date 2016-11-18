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
var SliderComponent = (function () {
    function SliderComponent() {
        this.customScaleNames = [
            'Zero',
            'One',
            'Two',
            'Three',
            'Four',
            'Five'
        ];
        this.customScaleNames2 = [
            '☀',
            '☁',
            '☂',
            '☃',
            '☄'
        ];
    }
    SliderComponent.prototype.ngOnInit = function () { };
    SliderComponent.prototype.ngAfterViewInit = function () {
    };
    SliderComponent.prototype.onSelect = function (items) {
        if (items.length) {
            this.selectedItemSingle = items[0];
        }
        else {
            this.selectedItemSingle = null;
        }
        console.log('Selected Items: ', items);
    };
    SliderComponent.prototype.onSelectMulti = function (items) {
        this.selectedItemsMulti = items;
        console.log('Selected Items: ', items);
    };
    return SliderComponent;
}());
__decorate([
    core_1.ViewChild('select'),
    __metadata("design:type", Object)
], SliderComponent.prototype, "select", void 0);
SliderComponent = __decorate([
    core_1.Component({
        templateUrl: 'slider.component.html'
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
exports.SliderComponent = SliderComponent;
