# vcl-radio-button

A radio button utilizing `vcl-icon`

## Usage

```html
<vcl-radio-button [(checked)]="checked"></vcl-radio-button> Label
```

```html
<vcl-radio-group [(ngModel)]="value">
  <vcl-radio-button value="red"></vcl-radio-button> Red
  <vcl-radio-button value="green"></vcl-radio-button> Green
</vcl-radio-group>
```

### API

#### vcl-radio-button attributes

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked`*          | boolean     | false              | 2-Way-Binding. State of radio button
| `value`             | any         |                    | Value of the radio button
| `tabindex`          | number      | 0                  | The tabindex of the radio button

#### vcl-radio-group attributes

| Name                  | Type                          | Default      | Description
| --------------------- | ----------------------        | --------     |--------------
| `ngModel`             | any                           |              | Value of the checked radio button


*(1) Supports Two-way binding*
