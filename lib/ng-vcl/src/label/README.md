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
<span vcl-label>default</span>

<span vcl-label="primary">primary</span>

<span vcl-label="success">success</span>

<span vcl-label="info">info</span>

<span vcl-label="warning">warning</span>

<span vcl-label="error">error</span>
```

### API

#### vcl-label attributes

Name       | Type   | Default | Description
---------- | ------ | ------- | ------------------------------------------------------------
`vcl-label`| string |         | the label's type
