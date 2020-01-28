# vcl-badge

A visually highlighted tag to attribute items.

## Usage

```js
import { VCLBadgeModule } from '@vcl/ng-vcl';

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

<vcl-badge vclRounded>default</vcl-badge>

<vcl-badge vclRounded type="primary">primary</vcl-badge>

<vcl-badge vclRounded type="success">success</vcl-badge>

<vcl-badge vclRounded type="info">info</vcl-badge>

<vcl-badge vclRounded type="warning">warning</vcl-badge>

<vcl-badge vclRounded type="error">error</vcl-badge>
```

### API

#### vcl-badge attributes

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`type`     | string |         | the badge's type

#### vclRounded directive

Name         | Description
----------   | ------------------------------------------------------------
`vclRounded` | Enables rounded corners
