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
<span vcl-badge>default</span>

<span vcl-badge="primary">primary</span>

<span vcl-badge="success">success</span>

<span vcl-badge="info">info</span>

<span vcl-badge="warning">warning</span>

<span vcl-badge="error">error</span>

```

### API

#### vcl-badge Properties:

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`vcl-badge`| string |         | the badge's type
