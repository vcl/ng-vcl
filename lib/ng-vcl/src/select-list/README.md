# vcl-select-list

A list consisting of items which can be selected.

## Usage

```html
<vcl-select-list [(value)]="value">
  <vcl-select-list-item value="1">
    Item 1
  </vcl-select-list-item>
  <vcl-select-list-item value="2">
    Item 2
  </vcl-select-list-item>
  <vcl-select-list-item value="3" [disabled]="true">
    Item 3
  </vcl-select-list-item>
</vcl-select-list>
```

### vcl-select-list attributes

Name            | Type       | Default     | Description
----------      |------------| -------     | --------------------------------------
`value`         | any        |             | Current value
`selectionMode` | 'single' \| 'multiple' \| 'none' | 'single'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected.
`search`        | string     |             | Value to search for in all results

### vcl-select-list events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`valueChange`   | any     | Fired when the select-list value has changes


### vcl-select-list-item attributes

Name              | Type                  | Default   | Description
----------        | -------               | -------   | --------------------------------------
`value`           | any                   |           | The items value
`disabled`        | boolean               |           | Disables the item
