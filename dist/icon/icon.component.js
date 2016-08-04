var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', './icon.component.html'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var icon_component_html_1 = require('./icon.component.html');
    var IconComponent = (function () {
        function IconComponent() {
        }
        IconComponent.prototype.ngOnInit = function () {
            if (this.icon) {
                this.fontIconClass = this.icon.split(':').join(' fa-');
            }
        };
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], IconComponent.prototype, "class", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], IconComponent.prototype, "src", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], IconComponent.prototype, "svguse", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], IconComponent.prototype, "icon", void 0);
        IconComponent = __decorate([
            core_1.Component({
                selector: 'vcl-icon',
                template: icon_component_html_1.default
            }), 
            __metadata('design:paramtypes', [])
        ], IconComponent);
        return IconComponent;
    }());
    exports.IconComponent = IconComponent;
});
