# vcl-autocomplete

An autocomplete extension for inputs utilizing the select-list

## Usage


```html
<input placeholder="Type to open dropdown" [vclAutocomplete]="ac" />

<vcl-autocomplete #ac="vclAutocomplete">
  <vcl-select-list-header>Items</vcl-select-list-header>
  <vcl-select-list-item value="1">
    <vcl-select-list-label>Item 1</vcl-select-list-label>
    <vcl-select-list-sublabel>Description of Item 1</vcl-select-list-sublabel>
  </vcl-select-list-item>
  <vcl-select-list-item value="2">
    <vcl-select-list-label>Item 2</vcl-select-list-label>
    <vcl-select-list-sublabel>Description of Item 2</vcl-select-list-sublabel>
  </vcl-select-list-item>
  <vcl-select-list-item value="3" [disabled]="true">
    <vcl-select-list-label>Item 3</vcl-select-list-label>
    <vcl-select-list-sublabel>Description of Item 3</vcl-select-list-sublabel>
  </vcl-select-list-item>
  <vcl-select-list-seperator></vcl-select-list-seperator>
  <vcl-select-list-item value="4" [disabled]="true">
    <vcl-select-list-label>Seperated Item 4</vcl-select-list-label>
    <vcl-select-list-sublabel>Description of Item 4</vcl-select-list-sublabel>
  </vcl-select-list-item>
</vcl-autocomplete>
```

### vcl-autocomplete attributes

Name            | Type                             | Default     | Description
----------      | -------                          | -------     | --------------------------------------
`width`         | number \| string                 |             | Dropdown width
`height`        | number \| string                 | '20em'      | Dropdown height
`maxHeight`     | number \| string                 |             | Dropdown max height

### vcl-autocomplete events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`afterClose`    | any     | Fired after the dropdown was closed

### input[vclAutocomplete] attributes

Name                         | Type                                   | Default | Description
----------                   | -------                                | ------- | --------------------------------------
`vclAutocomplete`            | vcl-autocomplete                       |         | The autocomplete component to use
