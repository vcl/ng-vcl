# vcl-tooltip

## Usage:
`vcl-tooltip` directive with `content` input is the minimal settings required to set up tooltip.
```html
<div vcl-tooltip content="Tooltip on the top">
  ...
</div>
```
Default tooltip placement is at the `top` of target element. To change tooltip placement set `position` value to either `right`, `left` or `bottom`.
```html
<div vcl-tooltip position="right" content="Tooltip on the right">
  ...
</div>
```

The content can also be made up of other components.
```html
<div #hostElement>
  <vcl-tooltip [hostElement]="hostElement" placement="bottom">
    <my-component></my-component>
  </vcl-tooltip>
</div>
```
