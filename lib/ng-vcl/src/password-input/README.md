# vcl-password-input

A container for the vcl-input which offers a button to toggle visibility of the input value.

## Usage

```html
<vcl-password-input>
  <input vclInput [(value)]="password" placeholder="Enter password">
</vcl-password-input>
```

### API

#### Attributes

Name            | Type    | Default           | Description
--------------- | ------- | -------           | -----------------------------------------------
`visible`       | boolean | false             | Input is visible by default when true
