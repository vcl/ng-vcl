# vcl-slider

## Usage

_Note: HammerJS must be loaded for touch events_

```js
import { VCLSliderModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLSliderModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-slider
  [(value)]="value1"
  [min]="0"
  [max]="100"
  [scale]="10">
</vcl-slider>
```

```html
<vcl-slider
  [(value)]="value2"
  [min]="0"
  [max]="50"
  [lock]="5"
  [enableWheel]="true"
  [scale]="['Zero','One','Two','Three','Four','Five']">
</vcl-slider>
```

### API

#### Attributes

| Name                | Type                   | Default            | Description
| ------------        | -----------            | ------------------ |--------------
| `value`             | number                 |                    | The current value
| `min`               | number                 | 0                  | The min value
| `max`               | number                 | 100                | The max value
| `scale`             | string[] &#124 number  |                    | The legend below the slider
| `lock`              | boolean                | false              | The selectable value is locked to the scale
| `enableWheel`       | boolean                | false              | Allows to change the value with the mouse wheel
| `disabled`          | boolean                | false              | Disables the slider when true
| `tabindex`          | number                 | 0                  | The tabindex of the slider

#### Events

Name                  | Type             | Description
--------------------- | ---------------  | -
`valueChange`         | any &#124; any[] | emits the new value when slider value changes
