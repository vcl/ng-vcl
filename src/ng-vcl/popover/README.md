# vcl-popover

A popover is a dom-element which 'floats' at the position of the target element.

## Usage

```html
<div #myTarget>any dom-element which is the target</div>

<vcl-popover [target]="myTarget" [(open)]="true" targetX="right" attachmentX="left" targetY="top" attachmentY="top">
  Popover-Content
</vcl-popover>
```

### API

#### Attributes

Name                | Type                        | Default             | Description
------------------- | --------------------------- | ------------------- | ------------------- 
`debug`             | boolean                     | false               | output debug information
`visible` _(1)_     | boolean                     | true                | the popover is hidden if false
`target`            | string  ElementRef  Element |                     | the target can be a selector, element or ElementRef instance
`targetX`           | AttachmentX                 | AttachmentX.Left    | position of the target-side
`attachmentX`       | AttachmentX                 | AttachmentX.Left    | position of the popover-side
`offsetAttachmentX` | number                      | 0                   | attachmentX offset
`targetY`           | AttachmentY                 | AttachmentY.Bottom  | position of the target-vertical
`attachmentY`       | AttachmentY                 | AttachmentY.Top     | position of the popover-vertical
`offsetAttachmentY` | number                      | 0                   | attachmentY offset

#### Methods

Name         | Attributes | Description
------------ | ---------- | --------------------------------------------------------------------------
`open`       |            | will show the popover
`close`      |            | will hide the popover
`reposition` |            | re-positions the popover, use this if the popover changes its content-size

_(1) Supports Two-way binding_