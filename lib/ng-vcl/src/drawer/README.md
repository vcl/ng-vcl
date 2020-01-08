# vcl-drawer

Sliding drawer with content area. In closed state, only the content area is visible.

## Usage

```html
    <vcl-drawer-container>
      <vcl-drawer mode="side">
        Drawer
      </vcl-drawer>
      Content
    </vcl-drawer-container>
```

### Drawer modes

`side`: Drawer appears besides the content. The content is pushed away and shrinked to make space for the drawer.
`over`: Drawer floats over the content. The content is covered by a backdrop.

### Opening and closing the drawer

A drawer can be opened and closed with the `opened` property.

The opened state can also be changed via the drawer instance. 
It exposes a `open()`, `close()` and `toggle()` method.


```html
    <vcl-drawer-container #drawer="vclDrawer">
      <vcl-drawer>...</vcl-drawer>
      ...
    </vcl-drawer-container>
    <button (click)="drawer.toggle()">Toggle</button>
```

### API

#### Attributes

| Name                | Type                  | Default            | Description
| ------------        | -----------           | --------           |--------------
| `position`          | 'left  \| 'right'     | 'left'             | Drawer position
| `mode`              | 'side  \| 'over'      | 'side'             | Drawer mode
| `opened`            | boolean               | `false` | `true`   | Drawer is opened. Default value is `true` for `side` mode and `false` for `over` mode.
