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
`ngModel`       | string  |         | Input value
`selectOnFocus` | boolean | false   | Selects the content on focus
`disabled`      | boolean | false   | Disables the input when true
`vclPrepItem`   | boolean | false   | Adds embedded class
