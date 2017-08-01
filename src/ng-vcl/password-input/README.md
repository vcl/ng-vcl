# vcl-password-input

A version of the input which offers a button to toggle visibility of the input value.

## Usage:

```html
<vcl-password-input [(ngModel)]="password" placeholder="Enter password"></vcl-password-input>
```

### API

#### Properties:

Name            | Type    | Default           | Description
--------------- | ------- | -------           | -----------------------------------------------
`ngModel`       | string  |                   | Password Input value
`visibleIcon`   | string  | `fa:eye-slash`    | The icon on the button in visible state 
`invisibleIcon` | string  | `fa:eye`          | The icon on the button in invisible state 
`inputId`       | string  |                   | id of the input element
`visible`       | boolean | false             | Input is visible by default when true
`selectOnFocus` | boolean | false             | Selects the content on focus
`disabled`      | boolean | false             | Disables the Password Input when true
`placeholder`   | string  |                   | Input's placeholder 
`tabindex`      | number  |                   | Input's tabindex
