# vcl-badge

A visually highlighted tag to attribute items.

## Usage:

```javascript
import { VCLBadgeModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLBadgeModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-badge label="mylabel"></vcl-badge>

<vcl-badge label="mylabel" type="primary"></vcl-badge>

<vcl-badge label="mylabel" type="success"></vcl-badge>

<vcl-badge label="mylabel" type="info"></vcl-badge>

<vcl-badge label="mylabel" type="warning"></vcl-badge>

<vcl-badge label="mylabel" type="error"></vcl-badge>

<span vcl-badge label="mylabel" type="warning"></span>
```

### API

#### vcl-badge Properties:

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`label`    | string |         | the label's text
`type`     | string |         | colored types; ENUM(primary, success, info, warning, error)
