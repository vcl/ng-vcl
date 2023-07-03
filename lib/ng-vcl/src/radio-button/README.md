# vcl-radio-button

A radio group with radio buttons utilizing `vcl-icon`

## Usage

```html
<vcl-radio-group [(value)]="value">
  <vcl-radio-button value="red"></vcl-radio-button> Red
  <vcl-radio-button value="green"></vcl-radio-button> Green
</vcl-radio-group>
```

### API

#### vcl-radio-button attributes

| Name        | Type    | Default | Description                          |
| ----------- | ------- | ------- | ------------------------------------ |
| `checked`\* | boolean | false   | 2-Way-Binding. State of radio button |
| `value`     | any     |         | Value of the radio button            |
| `tabindex`  | number  | 0       | The tabindex of the radio button     |

#### vcl-radio-group attributes

| Name     | Type                       | Default      | Description                                    |
| -------- | -------------------------- | ------------ | ---------------------------------------------- |
| `value`  | any \| any[]               |              | Value of the checked radio button              |
| `layout` | 'horizontal' \| 'vertical' | 'horizontal' | Renders radio group horizontally or vertically |

#### Events

| Name          | Type             | Description                                        |
| ------------- | ---------------- | -------------------------------------------------- |
| `valueChange` | any &#124; any[] | emits the new value when radio group value changes |
