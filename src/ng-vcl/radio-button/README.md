# vcl-radio-button

A radio button utilizing `vcl-icon`

## Usage

```html
<vcl-radio-button [(checked)]="checked">Label</vcl-radio-button>
```

```html
<vcl-radio-group [(value)]="value">
  <vcl-radio-button label="Red" value="red"></vcl-radio-button>
  <vcl-radio-button label="Green" value="green"></vcl-radio-button>
</vcl-radio-group>
```

### API

#### vcl-radio-button attributes

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked`*          | boolean     | false              | 2-Way-Binding. State of radio button
| `label`             | string      |                    | A label
| `value`             | any         |                    | Value of the radio button
| `checkedIcon`       | string      | fa:chWeck-square-o  | Icon to be displayed when checked
| `uncheckedIcon`     | string      | fa:square-o        | Icon to be displayed when unchecked
| `tabindex`          | number      | 0                  | The tabindex of the radio button

#### vcl-radio-group attributes

| Name                  | Type                          | Default      | Description
| --------------------- | ----------------------        | --------     |--------------
| `ngModel`             | any                           |              | Value of the checked radio button
| `layout`              | 'horizontal &#124; 'vertical' | 'horizontal' |

#### vcl-radio-group events

| Name                  | Type    | Description
| --------------------- | ------- | --------------
| `change`              | any     | Triggers when selected radio button changes

*(1) Supports Two-way binding*
