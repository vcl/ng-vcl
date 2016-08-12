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
// import template from './icon.component.html';
var icon_service_1 = require('../../services/icon.service');
/**
Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.
The `label` is never displayed, it is only for accessibility with screen
readers.
The `hidden` attribute is only reflected in the `aria-hidden` property which
allows to hide the icon to screen readers, if it is only of presentational character.
See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.

Usage:

```html
<vcl-icon icon="fa:fa-chevron-right" label="chevron right" hidden="false"></vcl-icon>
```

or

```html
<vcl-icon class="fa fa-chevron-right"></vcl-icon>
```

or

```html
<vcl-icon src="..."></vcl-icon>
```

or

```html
<vcl-icon svguse="..."></vcl-icon>
````

@param    src             optional      URL of a graphics resource
@param    svguse          optional      Generates an SVG `use` tag referencing the value
@param    icon            optional      Icon generator lookup via icon provider registered in the meta facility
@param    label           optional      `aria-label`
@param    hidden          optional      `aria-hidden` state, defaults to `true`, is `false` if there is a `label` given
*/
var IconComponent = (function () {
    function IconComponent(_iconService) {
        this._iconService = _iconService;
        this.hidden = true;
    }
    Object.defineProperty(IconComponent.prototype, "fontIconClass", {
        get: function () {
            if (this.icon) {
                return this._iconService.lookup(this.icon);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
        get: function () {
            return (this.fontIconClass || '') + " " + (this.iconClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isHidden", {
        get: function () {
            return (this.hidden || !this.label);
        },
        enumerable: true,
        configurable: true
    });
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
    ], IconComponent.prototype, "iconClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], IconComponent.prototype, "hidden", void 0);
    IconComponent = __decorate([
        core_1.Component({
            selector: 'vcl-icon',
            templateUrl: 'icon.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [icon_service_1.IconService]
        }), 
        __metadata('design:paramtypes', [icon_service_1.IconService])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
