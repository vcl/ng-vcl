# vcl-popover

A popover is a dom-element which 'floats' at the position of the target element.

## Usage:

```html
<div id="myTarget">any dom-element which is the target</div>

<vcl-popover target='#myTarget' [(open)]="true" targetX="right" attachmentX="left" targetY="top" attachmentY="top">
  Popover-Content
</vcl-popover>
```

### API

#### Properties:

Name          | Type    | Default  | Description
------------- | ------- | -------- | --------------------------------
`open` _(1)_  | boolean | true     | if false, the popover is hidden
`targetX`     | string  | 'left'   | position of the target-side
`attachmentX` | string  | 'left'   | position of the popover-side
`targetY`     | string  | 'bottom' | position of the target-vertical
`attachmentY` | string  | 'top'    | position of the popover-vertical

#### Methods:

Name         | Attributes | Description
------------ | ---------- | --------------------------------------------------------------------------
`close`      |            | will hide the popover
`reposition` |            | re-positions the popover, use this if the popover changes its content-size

_(1) Supports Two-way binding_
