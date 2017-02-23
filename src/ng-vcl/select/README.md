# vcl-select

## Usage:

```html
<vcl-select
  (change)="onSelect($event)"
  [(expanded)]="expanded"
  [items]="items"
  [maxSelectableItems]="1"
  [tabindex]="77"
></vcl-select>
```

```html
<vcl-select (change)="onSelect($event)" [maxSelectableItems]="1" >
  <vcl-select-option value="1">Item 1</vcl-select-option>
  <vcl-select-option value="2" [selected]="true">Item 2 (preselect)</vcl-select-option>
  <vcl-select-option value="3">Item 3</vcl-select-option>
  <vcl-select-option value="4" [disabled]="true">Item 4</vcl-select-option>
  <vcl-select-option value="5">Item 5</vcl-select-option>
</vcl-select>
```


### API

#### Properties:

Name         | Type            | Default | Description
------------ | --------------- | ------- | --------------------------------------------------------------------------------
`items`      | Item[]          | []      | Array with the items
`change`     | event           |         | emits when the new value when it is
`expanded`   | boolean         |         | toggle to show/hide the items

#### Items:

Items are javascript-objects with the following attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`label`    | string  |         | text which is shown
`value`    | any     | `label` |
`sublabel` | string  |         |
`selected` | boolean | false   | preselect the item. Ignored when using ngModel
`disabled` | boolean | false   | if true, the item cant be selected
`marked`   | boolean | false   | you can mark items for whatever reason
