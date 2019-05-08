# vcl-select-list

A list consisting of items which can be selected.

## Usage

```html
<vcl-select-list [(value)]="value">
  <vcl-select-list-item value="1">
    <vcl-select-list-label>Item 1</vcl-select-list-label>
  </vcl-select-list-item>
  <vcl-select-list-item value="2">
    <vcl-select-list-label>Item 2</vcl-select-list-label>
  </vcl-select-list-item>
  <vcl-select-list-item value="3" [disabled]="true">
    <vcl-select-list-label>Item 3</vcl-select-list-label>
  </vcl-select-list-item>
</vcl-select-list>
```

### vcl-select-list attributes

Name            | Type                             | Default     | Description
----------      | -------                          | -------     | --------------------------------------
`value`         | any                              |             | Current value
`selectionMode` | 'single' \| 'multiple' \| 'none' | 'single'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected.

### vcl-select-list events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`valueChange`   | any     | Fired when the select-list value has changes


### vcl-select-list-item attributes

Name              | Type                  | Default   | Description
----------        | -------               | -------   | --------------------------------------
`value`           | any                   |           | The items value
`disabled`        | boolean               |           | Disables the item
