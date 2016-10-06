import { Component, Input } from '@angular/core';

import { IcogramComponent } from '../icogram/icogram.component';

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

@Component({
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
})
export class LinkComponent {
  @Input()
  href: string;

  @Input()
  target: string;

  @Input()
  tabindex: number;

  @Input()
  scheme: string;

  @Input()
  disabled: boolean;

  @Input()
  label: string;

  @Input()
  title: string;

  @Input()
  prepIcon: string;

  @Input()
  appIcon: string;

  @Input()
  class: string;

  get _href(): string {
    if (this.disabled) return null;

    return this.scheme
      ? `${this.scheme}:${this.href}`
      : this.href;
  }

  get _label(): string {
    return this.label
      ? this.label
      : this.href;
  }
}
