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
<vcl-checkbox [(checked)]="checked"></vcl-checkbox> 
```

### API 

#### Properties

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked` *(1)*     | boolean     | false              | State of checkbox 
| `checkedIcon`       | string      | fa:check-square-o  | Icon to be displayed when checked 
| `uncheckedIcon`     | string      | fa:square-o        | Icon to be displayed when unchecked
| `tabindex`          | number      | 0                  | The tabindex of the checkbox
| `disabled`          | boolean     | false              | Disables checkbox if true
| `iconPosition`      | string      | left               | Icon positioning relative to content

*(1) Supports Two-way binding*
