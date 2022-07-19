# vcl-select

A select control. Wraps the vcl-select-list to render a list of selectable items in a dropdown.

## Usage

```html
<vcl-form-control-group>
  <vcl-label>Select item</vcl-label>
  <vcl-select>
    <vcl-select-list [(value)]="value">
      <vcl-select-list-item label=" -">
        [Clear selection]
      </vcl-select-list-item>
      <vcl-select-list-item [value]="1">
        Item 1
      </vcl-select-list-item>
      <vcl-select-list-item [value]="2">
        Item 2
      </vcl-select-list-item>
      <vcl-select-list-item [value]="3">
        Item 3
      </vcl-select-list-item>
    </vcl-select-list>
  </vcl-select>
</vcl-form-control-group>
```

### API

#### vcl-select attributes

Name                  | Type     | Default | Description
--------------------- |----------|---------| --------------------------------------------------------------------------------
`placeholder`         | string   |         |
`tabindex`            | number   | 0       | The tabindex of the select
`search`              | booolean | false   | Enable search capability
`showSearchIcon`      | boolean  | false   | Prepend search icon to the select input-field input
