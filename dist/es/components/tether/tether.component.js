var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef } from '@angular/core';
import * as Tether from 'tether';
export var TetherComponent = (function () {
    function TetherComponent(myElement) {
        this.myElement = myElement;
        this.id = 'theterId' + Math.floor(Math.random() * 10000);
    }
    TetherComponent.prototype.ngAfterViewInit = function () {
        try {
            new Tether({
                element: '#' + this.id,
                target: this.target,
                attachment: this.attachment,
                targetAttachment: this.targetAttachment
            });
        }
        catch (ex) {
            console.log(ex);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "target", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "class", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TetherComponent.prototype, "zIndex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "targetAttachment", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "attachment", void 0);
    TetherComponent = __decorate([
        Component({
            selector: 'vcl-tether',
            templateUrl: 'tether.component.html'
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], TetherComponent);
    return TetherComponent;
}());
