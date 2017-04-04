# vcl-dropdown

## Usage:

```html
<vcl-dropdown (change)="onSelect($event)" [maxSelectableItems]="1" [listenKeys]="true">
  <vcl-dropdown-option value="1" label="Item 1"></vcl-dropdown-option>
  <vcl-dropdown-option value="2" label="Item 2" [selected]="true"></vcl-dropdown-option>
  <vcl-dropdown-option value="3" label="Item 3"></vcl-dropdown-option>
  <vcl-dropdown-option value="4" label="Item 4" [disabled]="true"></vcl-dropdown-option>
  <vcl-dropdown-option value="5" label="Item 5"></vcl-dropdown-option>
</vcl-dropdown>
```


### API

#### vcl-dropdown attributes:

Name                  | Type            | Default | Description
--------------------- | --------------- | ------- | --------------------------------------------------------------------------------
`change`              | event           |         | emits the new value when the selected items change
`maxSelectableItems`  | number          | 1       | number of items that can be selected at the same time
`listenKeys`          | boolean         | true    | if true, the dropdown will listen and interact to keypress-events 

#### vcl-dropdown-option attributes:

Items are javascript-objects with the following attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`label`    | string  |         | The items label
`sublabel` | string  |         | The items sub label
`selected` | boolean | false   | preselects the item. Ignored when using ngModel
`disabled` | boolean | false   | if true, the item cannot be selected
