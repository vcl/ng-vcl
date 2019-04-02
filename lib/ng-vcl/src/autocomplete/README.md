# vcl-autocomplete

## Usage

```html
<input placeholder="Select country" [vclAutocompleteInput]="acCountries" />

<vcl-autocomplete #acCountries="vclAutocomplete">
  <vcl-autocomplete-header>Header</vcl-autocomplete-header>
  <vcl-autocomplete-item label="France" value="fr"></vcl-autocomplete-item>
  <vcl-autocomplete-item label="Germany" value="de"></vcl-autocomplete-item>
  <vcl-autocomplete-seperator></vcl-autocomplete-seperator>
  <vcl-autocomplete-item label="New Zealand" value="nz"></vcl-autocomplete-item>
  <div>Custom content</div>
</vcl-autocomplete>

```
### vcl-autocomplete attributes

Name            | Type    | Default | Description
----------      | ------- | ------- | --------------------------------------
`disabled`      | boolean | false   | Disables the autocomplete
`popoverWidth`  | number  |         | popover width. Uses host width by default.

### vcl-autocomplete events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`itemSelected`  | any     | Emits the value after an item was selected


### vcl-autocomplete-item attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`disabled` | boolean |         | Disables the item

### input[vclAutocompleteInput] attributes

Name                         | Type                                   | Default | Description
----------                   | -------                                | ------- | --------------------------------------
`vclAutocomplete`         | vcl-autocomplete                          |         | The autocomplete component to use
`vclAutocompleteDisabled` | boolean                                   | false   | Disables autocompletion
`vclAutocompleteSelect`   | 'value' \| 'void' \| `(value) => string`  | value   | Value to pass to input after selection
