# vcl-busy

Covers an element with a layer to indicate a busy state and prevent interaction

## Usage:

Set the vcl-busy to `true` to show the layer. The label is optional.

```html
  <div [vcl-busy]="true" [busyLabel]="'Loading...'">
    This content will be covered by the layer
  </div>
</div>
```

### API

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `vcl-busy`          | boolean     | false    | Shows the layer when `true`
| `busyLabel`         | string      |          | Optional - The busy layers label

