# vclBusy

Covers an element with a layer to indicate a busy state and prevent interaction

## Usage:

Set the vclBusy to `true` to show the layer. The label is optional.

```html
  <div [vclBusy]="true" [busyLabel]="'Loading...'">
    This content will be covered by the layer
  </div>
</div>
```

### API

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `vclBusy`          | boolean     | false    | Shows the layer when `true`
| `busyLabel`         | string      |          | Optional - The busy layers label

