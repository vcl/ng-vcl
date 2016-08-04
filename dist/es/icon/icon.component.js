var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import template from './icon.component.html';
export let IconComponent = class IconComponent {
    ngOnInit() {
        if (this.icon) {
            // TODO: use vcl-icon-providers
            this.fontIconClass = this.icon.split(':').join(' fa-');
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], IconComponent.prototype, "class", void 0);
__decorate([
    // CSS classes, usually the class(es) of an icon from an icon font
    Input(), 
    __metadata('design:type', String)
], IconComponent.prototype, "src", void 0);
__decorate([
    // URL of a graphics resource
    Input(), 
    __metadata('design:type', String)
], IconComponent.prototype, "svguse", void 0);
__decorate([
    // Generates an SVG `use` tag referencing the value
    Input(), 
    __metadata('design:type', String)
], IconComponent.prototype, "icon", void 0);
IconComponent = __decorate([
    Component({
        selector: 'vcl-icon',
        template
    }), 
    __metadata('design:paramtypes', [])
], IconComponent);
