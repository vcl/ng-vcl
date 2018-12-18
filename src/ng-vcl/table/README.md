# vcl-table

Display tabular data.

## Usage

You can simply add directive to necessary element

```html
<table hover>
...
</table>
```

or pass parameter to toggle it behavior

```html
<table [hover]="true">
...
  <th [span]="10"></th>
...
</table>
```

## Features

| Selector                      | Type    | Default | Description|
| ----------------------------- | ------- |-------- | ---------- |
| `hightlight`                  | boolean | true    | Highlight single cells and columns. |
| `span`                        | number  | 0       | Defines column width from `0` to `100` percents. Have to be used on the `th`s. |
| `sort`                        | boolean | true    | Sortable columns are defined with the `sort` directive  on the respective `th`s. To handle sorting changes subscribe for `change` event `EventEmitter<-1` &#124; `0` &#124; `1>`. To add additional sort icon use `sort-icon` component withinside `th`s.  |
| `selectable`                  | boolean | true    | Rows can be styled to suggest their selectability (single or multiple) using the `selectable` directive, which makes rows show a pointer cursor on hover. |
| `selected`                    | boolean | true    | Visually select individual cells and thus rows. |
| `disabled`                    | boolean | true    | Visually disable row content. |
| `align-center`                | boolean | true    | Specifies the horizontal alignment of the `td`s or `table`s content to center |
| `align-right`                 | boolean | true    | Specifies the horizontal alignment of the `td`s or `table`s content to right |
| `align-bottom`                | boolean | true    | Specifies the vertical alignment of the `td`s or `table`s content to bottom |
| `align-middle`                | boolean | true    | Specifies the vertical alignment of the `td`s or `table`s content to middle |
| `nowrap`, `overflow-ellipsis` | boolean | true    | In conjunction with the fixed layout mode, this directive can be used to truncate all cell content which would span more than one line and show an ellipsis to indicate truncated content instead |
| `break-words`                 | boolean | true    | Break words of textual cell content apart. This works best in combination with the `fixed` layout mode|
