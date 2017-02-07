# vcl-dropdown

## Usage:

```html
<vcl-dropdown
  (change)="onSelect($event)"
  [(expanded)]="expanded"
  [items]="items"
  [maxSelectableItems]="1"
  [tabindex]="77"
></vcl-dropdown>
```

```html
<vcl-dropdown (change)="onSelect($event)" [(expanded)]="expanded" [tabindex]="77" [maxSelectableItems]="1" [listenKeys]="true">
  <vcl-dropdown-option value="1">Item 1</vcl-dropdown-option>
  <vcl-dropdown-option value="2" [selected]="true">Item 2 (preselect)</vcl-dropdown-option>
  <vcl-dropdown-option value="3">Item 3</vcl-dropdown-option>
  <vcl-dropdown-option value="4" [disabled]="true">Item 4</vcl-dropdown-option>
  <vcl-dropdown-option value="5">Item 5</vcl-dropdown-option>
</vcl-dropdown>
```


### API

#### Properties:

Name         | Type            | Default | Description
------------ | --------------- | ------- | --------------------------------------------------------------------------------
`value`      | string/string[] | []      | set the value (all items with this value will be selected)
`items`      | any[]           | []      | Array with the items
`change`     | event           |         | emits when the new value when it is
`expanded`   | boolean         |         | toggle to show/hide the items
`listenKeys` | boolean         | false   | if true, the dropdown will listen to global keypress-events and interact to them

#### Items:

Items are javascript-objects with the following attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`label`    | string  |         | text which is shown
`value`    | string  | label   |
`sublabel` | string  |         |
`selected` | boolean | false   |
`disabled` | boolean | false   | if true, the item cant be selected
`marked`   | boolean | false   | you can mark items for whatever reason
