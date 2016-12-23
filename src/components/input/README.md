# vcl-input

Enhanced text input

## Usage:

```html
<input vcl-input [(value)]="data1">
<input vcl-input [(value)]="data2" selectOnFocus=true>
<input vcl-input [(value)]="data3" type="number">
```

### API

#### Properties:

Name            | Type    | Default | Description
--------------- | ------- | ------- | -----------------------------------------------
`value` _(1)_   | any     |         | current value of the input
`type`          | string  | 'text'  | equal to html5-input's attribute 'type'
`selectOnFocus` | boolean | false   | Selects
`state`         | string  |         | defines how the input is layouted. ENUM('error' | 'warning' | 'success')

_(1) Supports Two-way binding_
