# vcl-autocomplete

## Usage

```html
<vcl-embedded-input-group prepIcon="fa:search">
  <input vcl-input vcl-embedded-input placeholder="Search" [vcl-input-autocomplete]="acCountry" />
</vcl-embedded-input-group>

<vcl-autocomplete #acCountry="vclAutocomplete">
  <vcl-autocomplete-option type="header" label="Europe"></vcl-autocomplete-option>
  <vcl-autocomplete-option label="France" value="fr"></vcl-autocomplete-option>
  <vcl-autocomplete-option label="Germany" value="de"></vcl-autocomplete-option>
  <vcl-autocomplete-option label="Greece" value="gr"></vcl-autocomplete-option>
  <vcl-autocomplete-content>Custom content</vcl-autocomplete-content>
</vcl-autocomplete>

```

### vcl-autocomplete-option attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`label`    | string  |         | The items label
`sublabel` | string  |         | The items sub label
