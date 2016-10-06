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
export declare class LinkComponent {
    href: string;
    target: string;
    tabindex: number;
    scheme: string;
    disabled: boolean;
    label: string;
    title: string;
    prepIcon: string;
    appIcon: string;
    class: string;
    readonly _href: string;
    readonly _label: string;
}
