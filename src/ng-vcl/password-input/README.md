# vcl-password-input

A container for the vcl-input which offers a button to toggle visibility of the input value.

## Usage:

```html
<vcl-password-input>
  <input vcl-input [(ngModel)]="password" placeholder="Enter password">
</vcl-password-input>

```

### API

#### Properties:

Name            | Type    | Default           | Description
--------------- | ------- | -------           | -----------------------------------------------
`visibleIcon`   | string  | `fa:eye-slash`    | The icon on the button in visible state 
`invisibleIcon` | string  | `fa:eye`          | The icon on the button in invisible state 
`visible`       | boolean | false             | Input is visible by default when true
`disabled`      | boolean | false             | Disables the Password Input when true
