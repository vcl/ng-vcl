# vcl-select

## Usage

```html
<vcl-select [value]="2" (change)="onSelect($event)" [maxSelectableItems]="1" >
  <vcl-select-option value="1" label="Item 1"></vcl-select-option>
  <vcl-select-option value="2" label="Item 2"></vcl-select-option>
  <vcl-select-option value="3" label="Item 3"></vcl-select-option>
  <vcl-select-option value="4" label="Item 4" [disabled]="true"></vcl-select-option>
  <vcl-select-option value="5" label="Item 5"></vcl-select-option>
</vcl-select>
```

### API

#### vcl-select attributes

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -------  | --------------------------------------------------------------------------------
`ngModel`             | any &#124; any[]            |          | value(s) of the selected option(s)
`value`               | any &#124; any[]            |          | value(s) of the selected option(s)
`mode`                | "single" &#124; "multiple"  | "single" |
`maxSelectableItems`  | number &#124; undefined     |          | maximum number of options that can be selected at the same time. Unlimited if undefined.
`listenKeys`          | boolean                     | true     | if true, the select will listen and interact to keypress-events
`zIndex`              | number                      | 999999   | z-index of the dropdown

#### vcl-select events

Name                  | Type             | Description
--------------------- | ---------------  | -
`change`              | any &#124; any[] | emits the new value when the selected options change

#### vcl-select-option attributes

Name         | Type    | Default | Description
------------ | ------- | ------- | --------------------------------------
`value`      | any     |         | The items value
`label`      | string  |         | The items label
`sublabel`   | string  |         | The items sublabel
`disabled`   | boolean | false   | if true, the item cannot be selected
`prepIcon`   | string  |         | Icon as defined by the icon component
`appIcon`    | string  |         | Same as `prepIcon` but appended
`prepIconSrc`| string  |         | Image as defined by the icon component
`appIconSrc` | string  |         | Same as `prepIconSrc` but appended
