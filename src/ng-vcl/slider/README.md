# vcl-slider

## Usage:

_Note: the slider requires that HammerJS is loaded_

```js
import { VCLSliderModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLTabNavModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-slider [min]="0" [max]="100" [step]="20" [round]="0" [value]="30" [scaleNames]="customScaleNames"></vcl-slider>
```
