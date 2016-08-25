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
/**
Combination of icon and text of which both are optional and can be permuted.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts or directly from file based imagery.
The component takes care of accessibility aspects such rendering appropriate aria
attributes.
It also renders accessability labels for icons if no label for the icogram is
provided.
Note: the optionally generated anchor elemt's default action (follow the link)
is _not_ supressed when using the `href` property.
Us the vcl-link component if you want to have a fully fledged anchor tag.
## Usage
```html
<vcl-icogram label="some label" prepIcon="fa fa-chevron-right" flexLabel=true></vcl-icogram>
<vcl-icogram label="some label" prepIconSrc="..." href="http://example.org"></vcl-icogram>
<vcl-icogram label="some label" use="..."></vcl-icogram>
<vcl-icogram>
  <vcl-icon icon="fa:close"></vcl-icon>
</vcl-icogram>
```
@param    label           optional      textual label
@param    href            optional      if an href is given an accessible link is generated
@param    flexLabel       optional      the label gets a `vclLayoutFlex` class if true
@param    prepIcon        optional      Icon as defined by the icon component
@param    appIcon         optional      Same as `prepIcon` but appended
@demo example
*/
var IcogramComponent = (function () {
    // TODO prepIconSrc not implemented but used in example
    // @Input() prepIconSrc: string;
    function IcogramComponent(elRef) {
        this.el = elRef.nativeElement;
    }
    IcogramComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(IcogramComponent.prototype, "ariaRole", {
        get: function () {
            return (this.el && this.el.tagName.toLowerCase() !== 'a' && this.href) ? 'link' : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "href", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], IcogramComponent.prototype, "flexLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "prepIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "appIcon", void 0);
    __decorate([
        core_1.HostBinding('attr.role'), 
        __metadata('design:type', Object)
    ], IcogramComponent.prototype, "ariaRole", null);
    IcogramComponent = __decorate([
        core_1.Component({
            selector: 'vcl-icogram, [vcl-icogram]',
            templateUrl: 'icogram.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], IcogramComponent);
    return IcogramComponent;
}());
exports.IcogramComponent = IcogramComponent;
