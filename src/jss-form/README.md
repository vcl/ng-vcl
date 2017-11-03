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
<vcl-jss-form [schema]="mySchema" [(ngModel)]="value" (ngSubmit)="onSubmit($event)" (action)="onAction($event)" ></vcl-jss-form>
```

example-schema:

```json
{
  "title": "hero schema",
  "description": "describes a simple hero",
  "type": "object",
  "properties": {
    "name": {
      "formType": "text",
      "label": "Name",
      "type": "string",
      "minLength": 4,
      "placeholder": "The hero's name"
    },
    "color": {
      "formType": "select",
      "label": "Team",
      "description": "color defines which team the hero belongs to",
      "type": "string",
      "options": [
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
    "gender": {
      "formType": "radio",
      "label": "Gender",
      "type": "string",
      "enum": [
        "male",
        "female"
      ]
    },
    "perks": {
      "formType": "dropdown",
      "label": "Perks",
      "type": "array",
      "options": [
        {
          "label": "Heave Ho!",
          "value": "heave_ho\t"
        },
        {
          "label": "Snakeater",
          "value": "snakeater"
        },
        {
          "label": "Karma Beacon",
          "value": "karma_beacon"
        }
      ]
    },
    "leader": {
      "formType": "checkbox",
      "label": "Leader",
      "type": "boolean"
    },
    "hp": {
      "formType": "slider",
      "label": "Hitpoints",
      "type": "number",
      "minimum": 0,
      "maximum": 20
    },
    "alive": {
      "formType": "switch",
      "label": "Is alive?",
      "type": "boolean"
    },
    "mainSkill": {
      "label": "Main skill",
      "description": "nested object",
      "type": "object",
      "properties": {
        "name": {
          "formType": "text",
          "label": "Skill name",
          "type": "string",
          "minLength": 1
        },
        "damage": {
          "formType": "number",
          "label": "Skill damage",
          "type": "number",
          "min": 0,
          "max": 100
        }
      },
      "required": [
        "name",
        "damage"
      ]
    },
    "submit": {
      "formType": "buttons",
      "buttons": [
        {
          "formType": "submit",
          "label": "Submit",
          "class": "vclEmphasized"
        },
        {
          "formType": "button",
          "label": "Reset",
          "action": "reset"
        }
      ]
    }
  },
  "required": [
    "name",
    "color",
    "perks"
  ]
}
```

### API

#### vcl-jss-form properties:

Name     | Type   | Default | Description
-------- | ------ | ------- | -----------------------------------------------
`schema` | object |         | a jsonschema to build the form from
`ngModel`| any              | Value of the form

#### schema properties

In addition to the [generic keywords](https://spacetelescope.github.io/understanding-json-schema/reference/generic.html) of jsonschema, vcl-jss-form is using keywords to let you define the generated form.

Name          | Type                   | Default | Description
------------- | ------                 | ------- | --------------------------------------------------------------------------------------
`formType`    | string                 |         | defines the input-type of the form-element. For types see below.
`label`       | string                 |         | a label-string. attribute name will be the default
`placeholder` | string                 |         | define a placeholder which will be sued for the input-field
`options`     | JssFormSchemaOptions[] |         | options used in select, dropdown and radio
`action`      | any                    |         | value to provide on a button press
`autoDisable` | boolean                | false   | disables the submit button when the form is invalid
`prepIcon`    | string                 |         | button icon to be prepended to the label
`appIcon`     | string                 |         | button icon to be appended to the label
`class`       | string                 |         | addtional button class

#### vcl-dropdown events:

Name                  | Type             | Description
--------------------- | ---------------  | -
`ngSubmit`            | any              | triggered when the form is submitted
`action`              | any              | triggered when a button is pressed

#### formTypes:

Name       | Type   | ValueType
---------- | ------ | --------------
`text`     | string | string
`textarea` | string | string
`password` | string | string
`hidden`   | string | string
`select`   | string | string of enum
`radio`    | string | string of enum
`checkbox` | string | boolean
`switch`   | string | boolean
`number`   | string | number
`slider`   | string | number
`button`   | string | number
`submit`   | string | number
`buttons`  | string | number

```ts
export interface JssFormSchemaOptions {
  label?: string;
  value: any;
}
```
