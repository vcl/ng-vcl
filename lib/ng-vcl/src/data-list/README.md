# vcl-data-list

Tabular data browser, selection list and navigation menu.

## Usage

```html
<vcl-data-list [(value)]="value">
  <vcl-data-list-item value="1">
    Item 1
  </vcl-data-list-item>
  <vcl-data-list-item value="2">
    Item 2
  </vcl-data-list-item>
  <vcl-data-list-item value="3" [disabled]="true">
    Item 3
  </vcl-data-list-item>
</vcl-data-list>
```

### vcl-data-list attributes

Name            | Type                                          | Default     | Description
----------      | -------                                       | -------     | --------------------------------------
`value`         | any                                           |             | Current value
`divider`       | boolean                                       | false       | Show a vertical divider (border) between items when true
`noBorder`      | boolean                                       | false       | No top/ bottom borders when true
`mode`          | 'single' \| 'multiple' \| 'none'              | 'single'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected. `none` disables item interaction.

### vcl-data-list events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`valueChange`   | any     | Fired when the data-list value has changes


### vcl-data-list-item attributes

Name                 | Type                  | Default   | Description
----------           | -------               | -------   | --------------------------------------
`value`              | any                   |           | The items value
`disabled`           | boolean               |           | Disables the item
`selectable`         | boolean \| undefined  | undefined | 

