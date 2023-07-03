# vcl-progress-bar

The progress is reflected as horizontal bar which is shown within a container.
There are two overlaying bars to represent a primary and an optional secondary progress.
In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.

## Usage

```html
<vcl-progress-bar [value]="0"></vcl-progress-bar>
```

### API

#### Attributes

| Name             | Type    | Default | Description                                                                 |
| ---------------- | ------- | ------- | --------------------------------------------------------------------------- |
| `value`          | number  |         | the current primary progress value                                          |
| `secondaryValue` | number  |         | the current secondary progress value. hidden unless this value is specified |
| `minValue`       | number  |         | the minimum value of the progress                                           |
| `maxValue`       | number  |         | the maximum value of the progress                                           |
| `indeterminate`  | boolean | false   | show an animiation if the value is not set or invalid                       |
| `speed`          | number  | 1       | set custom animation duration/speed in seconds                              |
