# vcl-autocomplete

An autocomplete extension for inputs utilizing the select-list

## Usage


```html
<input placeholder="Type to open dropdown" [vclAutocompleteInput]="ac" />

<ng-template vclAutocomplete #ac="vclAutocomplete">
  <vcl-select-list>
    <vcl-select-list-header>Items</vcl-select-list-header>
    <vcl-select-list-item value="1">
      Item 1
      <vcl-sub-label>Description of Item 1</vcl-sub-label>
    </vcl-select-list-item>
    <vcl-select-list-item value="2">
      Item 2
      <vcl-sub-label>Description of Item 2</vcl-sub-label>
    </vcl-select-list-item>
    <vcl-select-list-item value="3" [disabled]="true">
      Item 3
      <vcl-sub-label>Description of Item 3</vcl-sub-label>
    </vcl-select-list-item>
    <vcl-select-list-seperator></vcl-select-list-seperator>
    <vcl-select-list-item value="4" [disabled]="true">
      Seperated Item
      <vcl-sub-label>Description of Item 4</vcl-sub-label>
    </vcl-select-list-item>
  </vcl-select-list>
</ng-template>
```

### vclAutocomplete attributes

Name            | Type                             | Default     | Description
----------      | -------                          | -------     | --------------------------------------
`width`         | number \| string                 |             | Dropdown width
`height`        | number \| string                 | '20em'      | Dropdown height
`maxHeight`     | number \| string                 |             | Dropdown max height

### vclAutocomplete events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`afterClose`    | any     | Fired after the dropdown was closed

### input[vclAutocompleteInput] attributes

Name                         | Type                                   | Default | Description
----------                   | -------                                | ------- | --------------------------------------
`vclAutocomplete`            | vcl-autocomplete                       |         | The autocomplete component to use
