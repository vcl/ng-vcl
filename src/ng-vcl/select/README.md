# vcl-select

## Usage:

```html
<vcl-select (change)="onSelect($event)" [maxSelectableItems]="1" >
  <vcl-select-option value="1" label="Item 1"></vcl-select-option>
  <vcl-select-option value="2" label="Item 2" [selected]="true"></vcl-select-option>
  <vcl-select-option value="3" label="Item 3"></vcl-select-option>
  <vcl-select-option value="4" label="Item 4" [disabled]="true"></vcl-select-option>
  <vcl-select-option value="5" label="Item 5"></vcl-select-option>
</vcl-select>
```


### API

#### vcl-select attributes:

Name                  | Type                        | Default  | Description
--------------------- | ---------------             | -------  | --------------------------------------------------------------------------------
`ngModel`             | any &#124; any[]            |          | value of the selected option(s)
`mode`                | "single" &#124; "multiple"  | "single" | 
`maxSelectableItems`  | number &#124; undefined     |          | maximum number of options that can be selected at the same time. Unlimited if undefined.
`listenKeys`          | boolean                     | true     | if true, the select will listen and interact to keypress-events 

#### vcl-select events:

Name                  | Type             | Description
--------------------- | ---------------  | -
`change`              | any &#124; any[] | emits the new value when the selected options change

#### vcl-select-option attributes:

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`label`    | string  |         | The items label
`sublabel` | string  |         | The items sublabel
`selected` | boolean | false   | preselects the item. Ignored when using ngModel
`disabled` | boolean | false   | if true, the item cannot be selected
