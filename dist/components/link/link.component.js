"use strict";
var core_1 = require('@angular/core');
/**
The anchor tag with VCL and Angular awareness.

## Usage

```html
<vcl-link
  [href]="'http://www.example.com'"
  [label]="'Example Link'"
  [prepIcon]="'fa:chevron-right'">
```

@property     {String}    href         `href` attribute
@property     {String}    target       `target` attribute
@property     {String}    tabindex     `tabindex` attribute
@property     {String}    scheme       URL scheme to be used, e. g. `tel`, `mailto` etc.
@property     {String}    disabled     disabled if `true`
@property     {String}    label        textual label with automatic Ember-i18n lookup
@property     {String}    title        textual title with automatic Ember-i18n lookup
@property     {String}    prepIcon     icon to be prepended to the label
@property     {String}    appIcon      icon to be appended to the label
@property     {String}    class        additional class to be added
*/
var LinkComponent = (function () {
    function LinkComponent() {
    }
    Object.defineProperty(LinkComponent.prototype, "_href", {
        get: function () {
            if (this.disabled)
                return null;
            return this.scheme
                ? this.scheme + ":" + this.href
                : this.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "_label", {
        get: function () {
            return this.label
                ? this.label
                : this.href;
        },
        enumerable: true,
        configurable: true
    });
    LinkComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[vcl-link]',
                    templateUrl: 'link.component.html',
                    host: {
                        '[attr.href]': '_href',
                        '[attr.target]': 'target',
                        '[attr.tabindex]': 'tabindex',
                        '[attr.touch-action]': 'touchAction',
                        '[attr.aria-label]': 'title | loc',
                        '[attr.title]': 'title | loc',
                        '[attr.disabled]': 'disabled',
                        '[class.vclDisabled]': 'disabled',
                    },
                },] },
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = [];
    LinkComponent.propDecorators = {
        'href': [{ type: core_1.Input },],
        'target': [{ type: core_1.Input },],
        'tabindex': [{ type: core_1.Input },],
        'scheme': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
    };
    return LinkComponent;
}());
exports.LinkComponent = LinkComponent;
