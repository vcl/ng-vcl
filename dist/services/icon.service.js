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
var core_1 = require('@angular/core');
var IconService = (function () {
    function IconService() {
    }
    IconService.prototype.fa = function (icon) {
        return "fa fa-" + icon;
    };
    IconService.prototype.lookup = function (icon) {
        var className = '';
        if (typeof icon === 'string' && icon) {
            var iconName = icon;
            var providerName = void 0;
            var iconParts = iconName.split(':');
            if (iconParts.length > 1) {
                providerName = iconParts[0];
                iconName = iconParts[1];
            }
            else {
                providerName = 'fa';
            }
            if (!this[providerName]) {
                throw new Error('Invalid icon provider: ' + providerName);
            }
            return this[providerName](iconName);
        }
        return null;
    };
    IconService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], IconService);
    return IconService;
}());
exports.IconService = IconService;
