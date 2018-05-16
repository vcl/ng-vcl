# vcl-textarea

Enhanced textarea

## Usage

 ```html
<textarea vcl-textarea [(ngModel)]="data1" [autogrow]="true" [minRows]="5" [maxRows]="10"></textarea>
```

### API 

#### Properties

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `autogrow`          | boolean     | false              | Adjusts the `rows` attribute so it matches the current values number of lines   
| `minRows`           | number      |                    | The min value for `rows` when using autogrow   
| `maxRows`           | number      |                    | The max value for `rows` when using autogrow   
