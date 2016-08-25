var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { OverlayManagerService } from '../../services/overlayManager.service';
export let LayerComponent = class LayerComponent {
    constructor(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.open = false;
        this.openChange = new EventEmitter();
        this.modal = true;
        this.zIndex = -1;
        this.coverZIndex = -1;
    }
    close() {
        this.open = false;
        this.openChange.emit(this.open);
    }
    onClick(event) {
        //layer covers 100% screen width & height. first element in layer represents 'outside'
        if (!this.modal && event.target.parentNode === this.myElement.nativeElement) {
            this.close();
        }
    }
    ngOnChanges(changes) {
        try {
            if (changes.open.currentValue === true) {
                this.zIndex = this.overlayManger.register(this);
                this.coverZIndex = this.zIndex - 1;
            }
            else if (changes.open.currentValue === false) {
                this.zIndex = this.overlayManger.unregister(this);
                this.coverZIndex = -1;
            }
        }
        catch (ex) { }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], LayerComponent.prototype, "open", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], LayerComponent.prototype, "openChange", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], LayerComponent.prototype, "modal", void 0);
LayerComponent = __decorate([
    Component({
        selector: 'vcl-layer',
        templateUrl: 'layer.component.html',
        host: {
            '(document:click)': 'onClick($event)',
        },
    }), 
    __metadata('design:paramtypes', [OverlayManagerService, ElementRef])
], LayerComponent);
