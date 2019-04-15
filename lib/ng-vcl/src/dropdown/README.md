# vcl-dropdown

## Usage

```html
<input placeholder="Select item" [vclDropdown]="dropdown" />

<vcl-dropdown #dropdown="vclDropdown">
  <vcl-dropdown-item value="1">Item 1</vcl-dropdown-item>
  <vcl-dropdown-item value="2">Item 2</vcl-dropdown-item>
  <vcl-dropdown-item value="3">Item 3</vcl-dropdown-item>
  <vcl-dropdown-item value="4" [disabled]="true">Item 4</vcl-dropdown-item>
  <vcl-dropdown-item value="5">Item 5</vcl-dropdown-option>
</vcl-dropdown>
```

### vcl-dropdown attributes

Name            | Type    | Default | Description
----------      | ------- | ------- | --------------------------------------

### vcl-dropdown events

Name            | Type    | Description
----------      | ------- | --------------------------------------


### vcl-dropdown-item attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`disabled` | boolean |         | Disables the item

### input[vclDropdown] attributes

Name                         | Type                                   | Default | Description
----------                   | -------                                | ------- | --------------------------------------
`vclDropdown`                | vcl-dropdown                           |         | The dropdown component to use
