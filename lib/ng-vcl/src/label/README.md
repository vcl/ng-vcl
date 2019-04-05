# vcl-label

A visually highlighted tag to attribute items.

## Usage

```js
import { VCLLabelModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLLabelModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-label>default</vcl-label>

<vcl-label type="primary">primary</vcl-label>

<vcl-label type="success">success</vcl-label>

<vcl-label type="info">info</vcl-label>

<vcl-label type="warning">warning</vcl-label>

<vcl-label type="error">error</vcl-label>
```

### API

#### vcl-label attributes

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`vcl-label`| string |         | the label's type
