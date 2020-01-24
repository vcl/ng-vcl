# vcl-select

A select control. Wraps the vcl-select-list to render a list of selectable items in a dropdown.

## Usage

```html
<vcl-select>
  <vcl-select-list [(value)]="value">
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
`placeholder`         | string                      |          | 
`tabindex`            | number                      | 0        | The tabindex of the select