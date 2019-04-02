# vcl-autocomplete

## Usage

```html
<input vclInput placeholder="Search" [vclInputAutocomplete]="acCountry" />

<vcl-autocomplete #acCountry="vclAutocomplete">
  <vcl-autocomplete-header>Header</vcl-autocomplete-header>
  <vcl-autocomplete-item label="France" value="fr"></vcl-autocomplete-item>
  <vcl-autocomplete-item label="Germany" value="de"></vcl-autocomplete-item>
  <vcl-autocomplete-seperator></vcl-autocomplete-seperator>
  <vcl-autocomplete-item label="New Zealand" value="nz"></vcl-autocomplete-item>
  <div>Custom content</div>
</vcl-autocomplete>

```

### vcl-autocomplete-item attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`label`    | string  |         | The items label
