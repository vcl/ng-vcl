# vcl-jss-form

Creates a from from a [jsonschema](http://jsonschema.net/).

## Usage:

```javascript
import { VCLJssFormModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLJssFormModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-jss-form [schema]="mySchema" [(value)]="value"></vcl-jss-form>
```

### API

#### vcl-jss-form properties:

Name     | Type   | Default | Description
-------- | ------ | ------- | -----------------------------------------------
`schema` | object |         | a jsonschema to build the form from
`value`  | object | {}      | An Object to begin editing with (2-way binding)
`error`  | event  |         | Event-stream which emits schema-errors or null

#### schema properties

In addition to the [generic keywords](https://spacetelescope.github.io/understanding-json-schema/reference/generic.html) of jsonschema, vcl-jss-form is using keywords to let you define the generated form.

Name          | Type   | Default | Description
------------- | ------ | ------- | --------------------------------------------------------------------------------------
`label`       | string |         | a label-string. attributeName will be the default
`placeholder` | string |         | define a placeholder which will be sued for the input-field
`formType`    | string |         | defines the input-type of the form-element. ENUM(text, number, select, switch, slider)
