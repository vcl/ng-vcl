# vclBusyIndicator

## vcl-busy-indicator

An indicator to show that a lasting operation is currently in progress.

### Usage

```html
<vcl-busy-indicator type="straight">
  <span>Loading…</span>
</vcl-busy-indicator>
```

### API

#### vclBusy Attributes

| Name                | Type                       | Default    | Description
| ------------------- | -------------------------- | ---------- |--------------
| `type`              | "circular" or "straight"   | "circular" | The indicator type
| `label`             | string                     | "Loading"  | icon aria label
| `iconHeight`        | string                     | "3em"      | icon height
| `iconWidth`         | string                     | "3em"      | icon width
| `direction`         | "vertical" or "horizontal" | "vertical" | The indicator direction

## vclBusy

Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.

### Usage

```html
<div [vclBusy]="true" [busyLabel]="'Loading…'" [busyIndicatorType]="">
    This content will be covered by the layer
</div>
```

### API

#### vclBusy Attributes

| Name                     | Type                       | Default    | Description
| ------------------------ | -------------------------- | ---------- |--------------
| `vclBusy`                | boolean                    | false      | Shows the layer when `true`
| `busyIndicatorType`      | "circular" or "straight"   | "circular" | The indicator type
| `busyLabel`              | string                     |            | Optional - The busy layers label
| `busyIconHeight`         | string                     | "3em"      | icon height
| `busyIconWidth`          | string                     | "3em"      | icon width
| `busyIndicatorDirection` | "vertical" or "horizontal" | "vertical" | The indicator direction
