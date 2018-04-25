# vcl-metalist

## Usage:

```html
<div vcl-metalist #metalist [value]="value" (change)="onChange($event)">
  <div vcl-metalist-item #meta=meta [value]="1">
    Item 1
    <button vcl-button (click)="metalist.select(meta)">Select</button>
    <span *ngIf="meta.selected"> // selected</span>
    <span *ngIf="meta.marked"> // marked</span>
  </div>
  <div vcl-metalist-item #meta=meta [value]="2">
    Item 2
    <button vcl-button (click)="metalist.select(meta)">Select</button>
    <span *ngIf="meta.selected"> // selected</span>
    <span *ngIf="meta.marked"> // marked</span>
  </div>
</div>
```

### API

#### vcl-metalist attributes:

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -        | -
`ngModel`             | any &#124; any[]            |          | value(s) of the selected item(s)
`value`               | any &#124; any[]            |          | value(s) of the selected item(s)
`mode`                | "single" &#124; "multiple"  | "single" | 1 item can be selected in "single" mode. 0 to `maxSelectableItems` in ""multiple"
`maxSelectableItems`  | number &#124; undefined     |          | maximum number of options that can be selected at the same time. Unlimited if undefined.

#### vcl-metalist events:

Name                  | Type                  | Description
--------------------- | ---------------       | -
`change`              | any &#124; any[]      | emits the new value when the selected items change
`itemsChange`         |                       | emits when the items change

#### vcl-metalist-item attributes:

Name       | Type              | Default | Description
---------- | -------           | ------- | --------------------------------------
`selected` | boolean           | false   | readonly - true if the item is selected
`disabled` | boolean           | false   | if true, the item cannot be selected
`marked`   | boolean           |         | marks the item

#### vcl-metalist-item methods:

Name                  | Type                   | Description
--------------------- | ---------------        | -
`select`              | (MetalistItem) => void | Selects the passed item
