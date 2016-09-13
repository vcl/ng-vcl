"use strict";
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
    // TODO: Not necessary: icon is always hidden
    // If a textual label is given, the icons can be
    // hidden in terms of a11ly.
    // get a11IconHidden() {
    //  return !!this.label;
    // }
    IcogramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-icogram, [vcl-icogram]',
                    templateUrl: 'icogram.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    IcogramComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    IcogramComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'href': [{ type: core_1.Input },],
        'flexLabel': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'ariaRole': [{ type: core_1.HostBinding, args: ['attr.role',] },],
    };
    return IcogramComponent;
}());
exports.IcogramComponent = IcogramComponent;
