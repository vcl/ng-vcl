# vcl-rating

## Usage

```html
<vcl-rating></vcl-rating>
```

### API

#### Attributes

Name          | Type                              | Default                | Description
------------- | --------------------------------- | ---------------------- | -----------------------------------------
`value` _(1)_ | number                            | 0                      | set the value
`type`        | 'horizontal', 'vertical', 'small' | 'horizontal'           | Rating type. 
`fullStar`    | string                            | 'fas fa-star'          | Full star icon
`halfStar`    | string                            | 'fas fa-star-half-alt' | Half star icon
`emptyStar`   | string                            | 'far fa-star'          | Empty star icon
`starCount`   | number                            | 5                      | Max rating
`halves`      | boolean                           | true                   | Whether to show halves
`readonly`    | boolean                           | false                  | Whether the stars can be clicked
`iconSize`    | string                            |                        | Size of the icons
`textSize`    | string                            |                        | Size of the text (only on small type)
`showText`    | boolean                           | true                   | Whether to show text (only on small type)

_(1) Supports Two-way binding_
