# vcl-slider

## Usage:

_Note: the slider requires that HammerJS is loaded_

```js
import { VCLSliderModule } from 'ng-vcl';

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
  [step]="20" 
  [scale]="['Zero','One','Two','Three','Four','Five']">
</vcl-slider>```
```

### API 

#### Attributes:

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `value` *(1)*       | number      | 0                  | The current value
| `min`               | number      | 0                  | The min value
| `max`               | number      | 100                | The max value
| `scale`             | string[]    |                    | The legend below the slider
| `step`              | number      | 10                 | Number of steps when moving the knob
| `stepsOnly`         | boolean     | false              | The selectable value is locked to the steps
| `mousewheel`        | boolean     | false              | Allows to change the value with the mouse wheel
| `disabled`          | boolean     | false              | Disables the slider when true
| `tabindex`          | number      | 0                  | The tabindex of the slider

*(1) Supports Two-way binding*
