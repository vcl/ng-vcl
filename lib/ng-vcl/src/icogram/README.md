# vcl-icogram

Combination of icon and text.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts.
Also supports the anchor tag

## Usage

```html
<vcl-icogram>
  <vcl-icon vclPrepend icon="fas:chevron-left"></vcl-icon>
  Label
  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>
</vcl-icogram>
  
<a vcl-icogram
  [href]="'https://github.com/ng-vcl/ng-vcl'"
  [disabled]="true">
  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>
  Link
</a>
```
