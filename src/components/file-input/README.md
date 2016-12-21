# vcl-file-input

Enhanced file input

## Usage:

```html
<vcl-file-input [multiple]="true" [accept]="accept" [placeholder]="placeholder" [disabled]="disabled">My biggest Files</vcl-file-input>
```

### API

#### Properties:

Name          | Type    | Default      | Description
------------- | ------- | ------------ | ---------------------------------------------------
`state`       | string  | ''           | marks the state ENUM(busy, error, warning, success)
`layout`      | string  | 'horizontal' | horizontal or vertical
`placeholder` | string  | ''           |
`accept`      | string  | '\*'          | like html5 file-input
`name`        | string  | ''           | value shown on load
`disabled`    | boolean | false        |
`multiple`    | boolean | false        | if true, more than 1 file can be used
