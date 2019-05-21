# vcl-rating

## Usage

```html
<vcl-rating [(value)]="value"></vcl-rating>
```

### API

#### Attributes

Name          | Type                              | Default                | Description
------------- | --------------------------------- | ---------------------- | -----------------------------------------
`value` _(1)_ | number                            | 0                      | set the value
`type`        | 'horizontal', 'vertical', 'small' | 'horizontal'           | Rating type.
`fullStar`    | string                            | 'vcl:star'             | Full star icon
`halfStar`    | string                            | 'vcl:star-half'        | Half star icon
`emptyStar`   | string                            | 'vcl:star-empty'       | Empty star icon
`starCount`   | number                            | 5                      | Max rating
`readonly`    | boolean                           | false                  | Whether the stars can be clicked

#### Events

Name                  | Type             | Description
--------------------- | ---------------  | -
`valueChange`         | number           | emits when the value changes
