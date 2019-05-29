# vcl-popover

A popover is an overlay floating at the position of the target element.

## Usage

```html
<div #myTarget>any dom element can be the target</div>
<button (click)="popover.toggle()"> 

<vcl-popover #popover="vclPopover" [target]="myTarget" [position]="myPositions">
  Popover-Content
</vcl-popover>
```

### API

#### Attributes

Name                | Type                          | Default             | Description
------------------- | ---------------------------   | ------------------- | ------------------- 
`target`            | ElementRef \| HTMLElement     |                     | the target must be an ElementRef instance
`positions`         | [ConnectedPosition](https://material.angular.io/cdk/overlay/api#ConnectedPosition) | | @angular/cdk OverlayPosition array
`visible` _(1)_     | boolean                       | false               | the popover is hidden if false
  
#### Methods  

Name             | Attributes | Description
------------     | ---------- | --------------------------------------------------------------------------
`open`           |            | will show the popover
`close`          |            | will hide the popover
`toggle`         |            | will show when hidden and hide when visible

_(1) Supports Two-way binding_
