# vcl-select

A select control. Utilizes the select-list to render a list of selectable items in a dropdown.

## Usage

```html
<vcl-select [(value)]="value">
  <vcl-select-list>
    <vcl-select-list-item label=" -">
      <vcl-select-list-label>[Clear selection]</vcl-select-list-label>
    </vcl-select-list-item>
    <vcl-select-list-item [value]="1">
      <vcl-select-list-label>Item 1</vcl-select-list-label>
    </vcl-select-list-item>
    <vcl-select-list-item [value]="2">
      <vcl-select-list-label>Item 2</vcl-select-list-label>
    </vcl-select-list-item>
    <vcl-select-list-item [value]="3">
      <vcl-select-list-label>Item 3</vcl-select-list-label>
    </vcl-select-list-item>
  </vcl-select-list>
</vcl-select>
```

### API

#### vcl-select attributes

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -------  | --------------------------------------------------------------------------------
`value`               | any &#124; any[]            |          | value(s) of the selected option(s)
`selectionMode`       | "single" &#124; "multiple"  | "single" |
`tabindex`            | number                      | 0        | The tabindex of the select
`disabled`            | boolean                     | false    | Disabled the control when true

#### vcl-select events

Name                  | Type             | Description
--------------------- | ---------------  | -
`valueChange`         | any &#124; any[] | emits the new value when the selected options change
