# vcl-jss-form

Creates a html-form from a [jsonschema](http://jsonschema.net/).

## Installation

```sh
npm install @ng-vcl/jss-form --save
```

## Usage

```js
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
      "formControl": "text",
      "label": "Name",
      "type": "string",
      "minLength": 4,
      "placeholder": "The hero's name"
    },
    "color": {
      "formControl": "select",
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
      "formControl": "radio",
      "label": "Gender",
      "type": "string",
      "enum": [
        "male",
        "female"
      ]
    },
    "perks": {
      "formControl": "dropdown",
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
      "formControl": "checkbox",
      "label": "Leader",
      "type": "boolean"
    },
    "hp": {
      "formControl": "slider",
      "label": "Hitpoints",
      "type": "number",
      "minimum": 0,
      "maximum": 20
    },
    "alive": {
      "formControl": "switch",
      "label": "Is alive?",
      "type": "boolean"
    },
    "custom": {
      "formControl": "custom",
      "label": "Custom Component",
      "type": "number",
      "minimum": 3,
      "maximum": 5,
      "customComponent": CustomSampleComponent,
      "customParameters": {
        "message": "Counter:"
      }
    },
    "mainSkill": {
      "label": "Main skill",
      "description": "nested object",
      "type": "object",
      "properties": {
        "name": {
          "formControl": "text",
          "label": "Skill name",
          "type": "string",
          "minLength": 1,
          "hint": "The items name",
          "classInputGroup": "vclLayoutHorizontal",
          "classLabel": "vclLayoutFlex vclLayout1 vclAlignRight paddingRight1",
          "classInput": "vclLayoutFlex vclLayout11"
        },
        "damage": {
          "formControl": "number",
          "label": "Skill damage",
          "type": "number",
          "min": 0,
          "max": 100,
          "classInputGroup": "vclLayoutHorizontal",
          "classLabel": "vclLayoutFlex vclLayout1 vclAlignRight paddingRight1",
          "classInput": "vclLayoutFlex vclLayout11"
        }
      },
      "required": [
        "name",
        "damage"
      ]
    },
    "submit": {
      "formControl": "buttons",
      "buttons": [
        {
          "formControl": "submit",
          "label": "Submit",
          "class": "vclEmphasized"
        },
        {
          "formControl": "button",
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

#### vcl-jss-form attributes

Name     | Type   | Default | Description
-------- | ------ | ------- | -----------------------------------------------
`schema` | object |         | a jsonschema to build the form from
`ngModel`| any              | Value of the form

#### schema attributes

In addition to the [generic keywords](https://spacetelescope.github.io/understanding-json-schema/reference/generic.html) of jsonschema, vcl-jss-form is using keywords to let you define the generated form.

Name              | Type                   | Default | FormControl           | Description
----------------- | ---------------------- | ------- | --------------------- | ------------------------------------------------------------------
`formControl`     | string                 |         |                       | defines the input-type of the form-element. For types see below.
`type`            | string                 |         |                       | defines the type of the value. For types see below.
`label`           | string                 |         |                       | a label-string. attribute name will be the default
`placeholder`     | string                 |         |                       | defines a placeholder which will be sued for the input-field
`hint`            | string                 |         |                       | defines a hint placed under infut field
`options`         | JssFormSchemaOptions[] |         | select dropdown radio | options used in select, dropdown and radio
`enum`            | string[]               |         | select dropdown radio | options used in select, dropdown and radio, label same with value
`hideLabel`       | boolean                | false   |                       | hides the label
`customComponent` | Component              |         | custom                | an implementation of `ControlValueAccessor`
`customParameters`| any                    |         | custom                | values will be provided in `customComponent`
`action`          | any                    |         | submit                | value to provide on a button press
`autoDisable`     | boolean                | false   | submit                | disables the submit button when the form is invalid
`prepIcon`        | string                 |         | button                | button icon to be prepended to the label
`appIcon`         | string                 |         | button                | button icon to be appended to the label
`class`           | string                 |         | button                | addtional button class
`singularLabel`   | string                 |         |                       | label for single item when type `array`
`visibleIcon`     | string                 |         | password              | icon for mode visible of password input
`invisibleIcon`   | string                 |         | password              | icon for mode hidden of password input
`classInputGroup` | string                 |         |                       | class for input group
`classLabel`      | string                 |         |                       | class for div containing label
`classInput`      | string                 |         |                       | class for div containing input, error and hint

#### vcl-dropdown events

Name                  | Type             | Description
--------------------- | ---------------  | -
`ngSubmit`            | any              | triggered when the form is submitted
`action`              | any              | triggered when a button is pressed

#### formControls

Name       | Type   | ValueType
---------- | ------ | --------------
`custom`   | string | to be used in combination with `customComponent` and if needed `customParameters`
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

#### type

Name       | Type   | Description
---------- | ------ | --------------
`text`     | string | string
`number`   | string | number
`array`    | string | array
`object`   | string | object

```ts
export interface JssFormSchemaOptions {
  label?: string;
  value: any;
}
```


#### CustomFormControl

When value of `formControl` is `custom`,  `customComponent` must be provided as well, and if needed `customParameters`.
A custom component should be an implementation of `ControlValueAccessor`.
Parameters provided in `customParameters` are accesible as inputs.

```ts
@Component({
  template: `<span>{{ message }} {{ counter }}</span><br>
  <button vcl-button type="button" class="vclButton" [disabled]="disabled" (click)="increment()">+</button>
  <button vcl-button type="button" class="vclButton" [disabled]="disabled" (click)="decrement()" style="margin-left: 5px;">-</button>`
})
export class CustomSampleComponent implements ControlValueAccessor {

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
    this.onChangeCallback && this.onChangeCallback(value);
  }

  @Input()
  message = '';

  disabled = false;

  private _counter = 0;

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: number | undefined) => void;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  writeValue(value: number): void {
    this._counter = value;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
```

