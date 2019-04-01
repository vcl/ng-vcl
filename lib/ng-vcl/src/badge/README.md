# vcl-badge

A visually highlighted tag to attribute items.

## Usage

```js
import { VCLBadgeModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLBadgeModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-badge>default</vcl-badge>

<vcl-badge type="primary">primary</vcl-badge>

<vcl-badge type="success">success</vcl-badge>

<vcl-badge type="info">info</vcl-badge>

<vcl-badge type="warning">warning</vcl-badge>

<vcl-badge type="error">error</vcl-badge>
```

### API

#### vcl-badge attributes

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`type`     | string |         | the badge's type
