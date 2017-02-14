"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PopoverComponent = (function () {
    function PopoverComponent() {
        this.open = false;
        this.open2 = false;
        this.state = 'inactive';
        this.style = {
            border: '3px double red',
            padding: '20px',
            overflow: 'hidden'
        };
    }
    PopoverComponent.prototype.togglePopover = function () {
        this.open = !this.open;
    };
    PopoverComponent.prototype.closePopover = function () {
        this.open = false;
    };
    PopoverComponent.prototype.showPopover2 = function () {
        this.open2 = true;
    };
    return PopoverComponent;
}());
PopoverComponent = __decorate([
    core_1.Component({
        templateUrl: 'popover.component.html',
    })
], PopoverComponent);
exports.PopoverComponent = PopoverComponent;
