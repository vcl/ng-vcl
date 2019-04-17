# vcl-select

A select control. Uses the dropdown component to render a list of selectable items.

## Usage

```html
<vcl-select [value]="value" (selectionChange)="onSelectionChange($event)" [tabindex]="1">
  <vcl-dropdown>
    <vcl-dropdown-item label=" -">
      <vcl-dropdown-label>[Clear selection]</vcl-dropdown-label>
    </vcl-dropdown-item>
    <vcl-dropdown-item [value]="1">
      <vcl-dropdown-label>Item 1</vcl-dropdown-label>
    </vcl-dropdown-item>
    <vcl-dropdown-item [value]="2">
      <vcl-dropdown-label>Item 2</vcl-dropdown-label>
    </vcl-dropdown-item>
    <vcl-dropdown-item [value]="3">
      <vcl-dropdown-label>Item 3</vcl-dropdown-label>
    </vcl-dropdown-item>
  </vcl-dropdown>
</vcl-select>
```

### API

#### vcl-select attributes

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -------  | --------------------------------------------------------------------------------
`ngModel`             | any &#124; any[]            |          | value(s) of the selected option(s)
`value`               | any &#124; any[]            |          | value(s) of the selected option(s)
`selectionMode`       | "single" &#124; "multiple"  | "single" |

#### vcl-select events

Name                  | Type             | Description
--------------------- | ---------------  | -
`selectionChange`     | any &#124; any[] | emits the new value when the selected options change
