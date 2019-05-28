# vcl-popover

A popover is a dom-element which 'floats' at the position of the target element.

## Usage

Provide a

```html
<div #myTarget>any dom-element which is the target</div>

<vcl-popover [target]="myTarget" [position]="myPositions" [(visible)]="true">
  Popover-Content
</vcl-popover>
```

### API

#### Attributes

Name                | Type                          | Default             | Description
------------------- | ---------------------------   | ------------------- | ------------------- 
`visible` _(1)_     | boolean                       | false                | the popover is hidden if false
`target`            | ElementRef \| HTMLElement     |                     | the target must be an ElementRef instance
`positions`         | OverlayPosition[]             |                     | @angular/cdk OverlayPosition array
`config`            | OverlayConfig                 |                     | @angular/cdk OverlayConfig
  
#### Methods  

Name             | Attributes | Description
------------     | ---------- | --------------------------------------------------------------------------
`open`           |            | will show the popover
`close`          |            | will hide the popover
`reposition`     |            | re-positions the popover, use this if the popover changes its content-size

_(1) Supports Two-way binding_
