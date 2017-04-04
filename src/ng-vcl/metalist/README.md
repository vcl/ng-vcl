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

#### vcl-metalist Attributes:

Name                  | Type            | Default | Description
--------------------- | --------------- | ------- | --------------------------------------------------------------------------------
`change`              | event           |         | emits the new value when the selected items change
`maxSelectableItems`  | number          | 1       | number of items that can be selected at the same time

#### vcl-metalist-item Attributes:

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | value of the item
`selected` | boolean | false   | preselects the item. Ignored when using ngModel
`disabled` | boolean | false   | if true, the item cannot be selected
`marked`   | boolean | false   | marks the item
