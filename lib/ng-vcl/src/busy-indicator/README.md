# Busy Indicator

## vcl-busy-indicator

An indicator to show that a lasting operation is currently in progress.

### Usage

```html
<vcl-busy-indicator>
  <span>Loading…</span>
</vcl-busy-indicator>

<vcl-busy-indicator icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>
```

### API

#### vcl-busy-indicator Attributes

| Name                | Type                       | Default    | Description
| ------------------- | -------------------------- | ---------- |--------------
| `icon`              | string                     | "Loading"  | Alternative icon
| `label`             | string                     | "Loading"  | icon aria label
| `imageHeight`       | string                     | "3em"      | icon height
| `imageWidth`        | string                     | "3em"      | icon width
| `layout`            | "vertical" or "horizontal" | "vertical" | The indicator direction

## [vcl-busy-indicator-cover]

Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.

### Usage

```html
<div [vcl-busy-indicator-cover]="true">
  <vcl-busy-indicator></vcl-busy-indicator>
  This content will be covered by the layer
</div>
```

### API

#### vcl-busy-indicator-cover Attributes

| Name                       | Type                       | Default    | Description
| ------------------------   | -------------------------- | ---------- |--------------
| `vcl-busy-indicator-cover` | boolean                    | false      | Shows the layer when `true`
