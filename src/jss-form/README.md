# vcl-jss-form

Creates a html-form from a [jsonschema](http://jsonschema.net/).

## Installation

```sh
npm install @ng-vcl/jss-form --save
```

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

example-schema:

```json
{
    "title": "hero schema",
    "description": "describes a simple hero",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "formType": "text",
        "placeholder": "The heroe's name",
        "minLength": 4,
        "maxLength": 100,
      },
      "color": {
        "description": "color defines which team the hero belongs to",
        "label": "team",
        "formType": "select",
        "type": "string",
        "enum": ["#ff0000", "#008000", "#0000FF", "#FFFF00"],
        "items": [
          {
            "label": "Red",
            "value": "#ff0000"
          },
          {
            "label": "Green",
            "value": "#008000"
          },
          {
            "label": "Blue",
            "value": "#0000FF"
          },
          {
            "label": "Yellow",
            "value": "#FFFF00"
          }
        ]
      },
      "color2": {
        "label": "subcolor",
        "formType": "radio",
        "type": "string",
        "enum": ["red", "green", "blue", "yellow"]
      },
      "isleader": {
        "label": "leader",
        "formType": "checkbox",
        "type": "boolean"
      },
      "hp": {
        "type": "number",
        "formType": "slider"
      },
      "alive": {
        "type": "boolean",
        "formType": "switch"
      },
      "mainSkill": {
        "description": "nested object",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "formType": "text",
            "minLength": 1
          },
          "damage": {
            "type": "number",
            "formType": "number",
            "min": 0,
            "max": 100
          }
        },
        "required": ["name", "damage"]
      }
    },
    "required": ["name", "color"]
  };
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

#### formTypes:

Name       | Type   | ValueType
---------- | ------ | --------------
`text`     | string | string
`select`   | string | string of enum
`radio`    | string | string of enum
`checkbox` | string | boolean
`switch`   | string | boolean
`number`   | string | number
`slider`   | string | number
