# vcl-checkbox

A Checkbox utilizing `vcl-icon`

## Usage:

```js
import { VCLCheckboxModule } from 'ng-vcl';

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

#### Properties:

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked` *(1)*     | boolean     | false              | 2-Way-Binding. State of checkbox 
| `checkedIcon`       | string      | fa:check-square-o  | Icon to be displayed when checked 
| `uncheckedIcon`     | string      | fa:square-o        | Icon to be displayed when unchecked
| `tabindex`          | number      | 0                  | The tabindex of the checkbox

1: Supports Two-way binding
