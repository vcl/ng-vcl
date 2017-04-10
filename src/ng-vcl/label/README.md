# vcl-label

A visually highlighted tag to attribute items.

## Usage:

```javascript
import { VCLLabelModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLLabelModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-label label="mylabel"></vcl-label>

<vcl-label label="mylabel" type="success"></vcl-label>

<vcl-label label="mylabel" type="info"></vcl-label>

<span vcl-label label="mylabel" type="warning"></span>
```

### API

#### vcl-navigation Properties:

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`label`    | string |         | the label's text
`type`     | string |         | colored types; ENUM(primary, success, info, warning, error)
