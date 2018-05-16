# vcl-tooltip

## Usage
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

### API

#### Attributes

| Name                | Type           | Default       | Description
| ------------        | -------------- | ------------- |--------------
| `debug`             | boolean        | false         | Whether to output debug information
| `content`           | string         |               | Content displayed within the tooltip (for the directive)
| `placement`         | Placement      | Placement.Top | Placement of the tooltip
| `hostElement`       | HTMLElement    |               | The describyed element by the tooltip
| `animationState`    | AnimationState |               | Override the tooltip
| `showArrowPointer`  | boolean        | true          | Whether to show the tooltip's arrow pointer
