# vcl-popover

A popover is a dom-element which 'floats' at the position of the target element.
The popover uses [@angular/cdk's](https://material.angular.io/cdk/overlay/overview) overlay for positioning.

## Usage

```html
<div #myTarget>any dom-element which is the target</div>

<vcl-popover [target]="myTarget" [(visible)]="true" originX="end" originY="top" overlayX="start" overlayY="top">
  Popover-Content
</vcl-popover>
```

### API

#### Attributes

Name                | Type                          | Default             | Description
------------------- | ---------------------------   | ------------------- | ------------------- 
`visible` _(1)_     | boolean                       | true                | the popover is hidden if false
`target`            | ElementRef                    |                     | the target must be an ElementRef instance
`originX`           | "start" \| "center" \| "end"  | "start"             | horizontal position on the target
`originY`           | "bottom" \| "center" \| "top"   | "bottom"            | vertical position on the target
`overlayX`          | "start" \| "center" \| "end"    | "start"             | horizontal position of the popover
`overlayY`          | "bottom" \| "center" \| "top"   | "top"               | vertical position of the popover
`offsetX`           | number                        | 0                   | horizontal popover offset
`offsetY`           | number                        | 0                   | vertical popover offset
`width`             | number \| string               |                     | popover width
`offsetY`           | number \| string               |                     | popover height
`position`          | PositionStrategy              |                     | A custom position strategy. See cdk docs.
  
#### Methods  

Name             | Attributes | Description
------------     | ---------- | --------------------------------------------------------------------------
`open`           |            | will show the popover
`close`          |            | will hide the popover
`updatePosition` |            | re-positions the popover, use this if the popover changes its content-size

_(1) Supports Two-way binding_
