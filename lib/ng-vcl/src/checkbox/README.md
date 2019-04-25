# vcl-checkbox

A Checkbox utilizing `vcl-icon`

## Usage

```js
import { VCLCheckboxModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLCheckboxModule ],
  ...
})
export class AppComponent {}
```

```html
<label vclCheckboxLabel>
  <vcl-checkbox [(checked)]="value1"></vcl-checkbox>
  Check! 
</label>
```

### API

#### Attributes

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked` *(1)*     | boolean     | false              | State of checkbox
| `tabindex`          | number      | 0                  | The tabindex of the checkbox
| `disabled`          | boolean     | false              | Disables checkbox if true

*(1) Supports Two-way binding*
