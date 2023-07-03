# vcl-tooltip

The tooltip directive provides a message or rich content that is displayed when the user hovers an element.

## Usage

```html
<div vclTooltip="Tooltip message">...</div>
```

Default tooltip placement is at the `top` of target element. To change tooltip placement set `vclTooltipPosition` value to either `right`, `left` or `bottom`.

```html
<div vclTooltip="Tooltip message" vclTooltipPosition="right">...</div>
```

You can also use rich content.

```html
<div [vclTooltip]="tt">
  <vcl-tooltip #tt="vclTooltip">
    <p>My content</p>
  </vcl-tooltip>
</div>
```

### API

#### [vclTooltip] Attributes

| Name                     | Type                  | Default                             | Description                                                   |
| ------------------------ | --------------------- | ----------------------------------- | ------------------------------------------------------------- |
| `vclTooltip`             | string \| TemplateRef |                                     | Content displayed within the tooltip                          |
| `vclTooltipPosition`     | string \| string[]    | ['top', 'right', 'left', 'bottom']; | Placement of the tooltip                                      |
| `vclTooltipArrowPointer` | boolean               | true                                | Whether to show the tooltip's arrow pointer                   |
| `vclTooltipShowDelay`    | number                | 0                                   | Delay before showing the tooltip after hovering the element   |
| `vclTooltipHideDelay`    | number                | 0                                   | Delay before hiding the tooltip after the element loses hover |
| `vclTooltipCursor`       | string                | help                                | Cursor type when hovering                                     |
