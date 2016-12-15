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

### API

#### Properties:

Name       | Type            | Default | Description
---------- | --------------- | ------- | ----------------------------------------------------------
`value`    | string/string[] | []      | set the value (all items with this value will be selected)
`items`    | any[]           | []      | Array with the items
`change`   | event           |         | emits when the new value when it is
`expanded` | boolean         |         | toggle to show/hide the items

#### Items:

Items are javascript-objects with the following attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | ----------------------------------
`label`    | string  |         | text which is shown
`value`    | string  | label   |
`sublabel` | string  |         |
`selected` | boolean | false   |
`disabled` | boolean | false   | if true, the item cant be selected
