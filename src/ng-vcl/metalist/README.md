# vcl-metalist

## Usage:

```html
<vcl-metalist #metalist (change)="onChange($event)">
  <vcl-metalist-item #meta [value]="item.value" [selected]="item.selected">
    Item 1
    <button vcl-button (tap)="metalist.select(meta)">Select</button>
    <span *ngIf="meta.selected"> // selected</span>
    <span *ngIf="meta.marked"> // marked</span>
  </vcl-metalist-item>
  <vcl-metalist-item #meta [value]="item.value" [selected]="item.selected">
    Item 2
    <button vcl-button (tap)="metalist.select(meta)">Select</button>
    <span *ngIf="meta.selected"> // selected</span>
    <span *ngIf="meta.marked"> // marked</span>
  </vcl-metalist-item>
</vcl-metalist>
```

### API

#### vcl-metalist attributes:

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -        | -
`ngModel`             | any &#124; any[]            |          | value(s) of the selected items
`mode`                | "single" &#124; "multiple"  | "single" | 1 item can be selected in "single" mode. 0 to `maxSelectableItems` in ""multiple"
`maxSelectableItems`  | number &#124; undefined     |          | maximum number of options that can be selected at the same time. Unlimited if undefined.

#### vcl-metalist events:

Name                  | Type             | Description
--------------------- | ---------------  | -
`change`              | any &#124; any[] | emits the new value when the selected items change

#### vcl-metalist-item attributes:

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | value of the item
`selected` | boolean | false   | preselects the item. Ignored when using ngModel
`disabled` | boolean | false   | if true, the item cannot be selected
`marked`   | boolean | false   | marks the item

#### vcl-metalist-item methods:

Name                  | Type                   | Description
--------------------- | ---------------        | -
`select`              | (MetalistItem) => void | Selects the passed item
