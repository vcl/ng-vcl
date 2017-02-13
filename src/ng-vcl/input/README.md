# vcl-input

Enhanced text input

## Usage:

```html
<input vcl-input [(ngModel)]="data1">
<input vcl-input [(ngModel)]="data2" selectOnFocus=true>
<input vcl-input [(ngModel)]="data3" type="number">
```

### API

#### Properties:

Name            | Type    | Default | Description
--------------- | ------- | ------- | -----------------------------------------------
`ngModel` _(1)_ | any     |         | native angular-2 ngModel to bind value to variable
`selectOnFocus` | boolean | false   | Selects the content on focus
`state`         | string  |         | defines how the input is layouted. ENUM('error' | 'warning' | 'success')

_(1) Supports Two-way binding_
