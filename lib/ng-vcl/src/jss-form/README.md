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

```js
const HERO_SCHEMA: VCLFormSchema = {
  title: 'hero schema',
  formControl: 'object',
  properties: {
    name: {
      formControl: 'input',
      label: 'Name',
      placeholder: 'The hero\'s name',
      hint: 'The hero\'s name',
      validator: {
        minLength: 4,
        type: 'string'
      }
    },
    description: {
      formControl: 'textarea',
      label: 'Description',
      hint: 'The hero\'s description',
    },
    password: {
      formControl: 'password',
      label: 'Password',
      placeholder: 'Password',
      visibleIcon: ' fas fa-unlock ',
      invisibleIcon: ' fas fa-unlock-alt ',
      hint: 'The account password'
    },
    mail_old: {
      formControl: 'hidden',
    },
    color: {
      formControl: 'select',
      label: 'Team',
      hint: 'color defines which team the hero belongs to',
      mode: 'single',
      options: [
        {
          label: 'Red',
          value: '#ff0000'
        },
        {
          label: 'Green',
          value: '#008000'
        },
        {
          label: 'Blue',
          value: '#0000FF',
          sublabel: 'Sublabels!'
        },
        {
          label: 'Yellow',
          value: '#FFFF00'
        }
      ]
    },
    gender: {
      formControl: 'radio',
      label: 'Gender',
      options: [{value: 'male'}, {value: 'female'}],
      hint: 'The hero\'s gender',
    },
    perks: {
      formControl: 'dropdown',
      label: 'Perks',
      hint: 'The hero\'s perks',
      mode: 'multiple',
      validator: {
        minItems: 1,
        type: 'array'
      },
      options: [
        {
          label: 'Heave Ho!',
          value: 'heave_ho	'
        },
        {
          label: 'Snakeater',
          value: 'snakeater',
          sublabel: 'Sublabels!'
        },
        {
          label: 'Karma Beacon',
          value: 'karma_beacon'
        },
      ]
    },
    leader: {
      formControl: 'checkbox',
      label: 'Leader',
      hideLabel: true,
      hint: 'Whether the hero is a leader',
    },
    hp: {
      formControl: 'slider',
      label: 'Hitpoints',
      minimum: 0,
      maximum: 20,
      hint: 'The hero\'s max health',
    },
    alive: {
      formControl: 'switch',
      label: 'Is alive?',
    },
    mainSkill: {
      label: 'Main skill',
      description: 'nested object',
      hint: 'The hero\'s main skill',
      formControl: 'object',
      properties: {
        name: {
          formControl: 'input',
          label: 'Skill name',
          hint: 'The skills name',
          validator: {
            type: 'string',
            minLength: 6
          }
        },
        damage: {
          formControl: 'number',
          label: 'Skill damage',
          hint: 'The skills max damage',
          validator: {
            type: ['number', 'null'],
            minimum: 0,
            maximum: 100,
          }
        }
      },
    },
    attributes: {
      formControl: 'token',
      label: 'Attributes',
    },
    dob: {
      formControl: 'date',
      label: 'Date of Birth',
      datePickerConfig: {
        displayTime: true
      }
    },
    custom: {
      formControl: 'custom',
      label: 'Custom Component',
      customComponent: CustomSampleComponent,
      customParameters: {
        message: 'Counter:'
      }
    },
    items: {
      label: 'Items',
      singularLabel: 'Item',
      formControl: 'array',
      hint: 'The hero\'s items',
      items: {
        formControl: 'object',
        properties: {
          name: {
            formControl: 'input',
            label: 'Item name',
            validator: (c: AbstractControl) => {
              if (c.value) {
                return null;
              }
              return {
                foo: 'bar'
              };
            },
            hint: 'The items name',
            classInputGroup: 'vclLayoutHorizontal',
            classLabel: 'vclLayoutFlex vclLayout1 vclAlignRight paddingRight1',
            classInput: 'vclLayoutFlex vclLayout11'
          },
          quantity: {
            formControl: 'number',
            label: 'Quantity',
            hint: 'The item quantity',
            required: true,
            classInputGroup: 'vclLayoutHorizontal',
            classLabel: 'vclLayoutFlex vclLayout1 vclAlignRight paddingRight1',
            classInput: 'vclLayoutFlex vclLayout11'
          }
        }
      }
    },
    submit: {
      formControl: 'buttons',
      buttons: [
        {
          formControl: 'submit',
          label: 'Submit',
          class: 'vclEmphasized'
        },
        {
          formControl: 'button',
          label: 'Reset',
          action: 'reset'
        }
      ]
    }
  },
};
```

### API

#### vcl-jss-form attributes

Name     | Type   | Default | Description
-------- | ------ | ------- | -----------------------------------------------
`schema` | object |         | a jsonschema to build the form from
`ngModel`| any              | Value of the form

#### jss-form events

Name                  | Type  | Description
--------------------- | ----- | ------------------------------------
`ngSubmit`            | any   | triggered when the form is submitted
`action`              | any   | triggered when a button is pressed

#### VCLFormSchemaBase attributes

Name              | Type                     | Default | Description
----------------- | ------------------------ | ------- | ------------------------------------------------------------------
`formControl`     | string                   |         | defines the input-type of the form-element. For types see below.
`label`           | string                   |         | a label-string. attribute name will be the default
`hint`            | string                   |         | defines a hint placed under input field
`required`        | boolean                  | false   | form input is required
`disabled`        | boolean                  | false   | form input is disabled
`validator`       | ValidatorFn | jssSchema  |         | Validator function or [jsonschema](http://jsonschema.net/).

#### formControls

Name       | ValueType
---------- | --------------
`custom`   | any
`input`    | string
`textarea` | string
`password` | string
`hidden`   | string
`select`   | string of enum
`radio`    | string of enum
`checkbox` | boolean
`switch`   | boolean
`number`   | number
`slider`   | number
`button`   | number
`submit`   | number
`buttons`  | number
`date`     | date

```js
export interface VCLFormSchemaInput extends VCLFormSchemaBase {
  formControl: 'input' | 'number';
  placeholder?: string;
}

export interface VCLFormSchemaPassword extends VCLFormSchemaBase {
  formControl: 'password';
  placeholder?: string;
  visibleIcon?: string;
  invisibleIcon?: string;
}

export interface VCLFormSchemaHidden extends VCLFormSchemaBase {
  formControl: 'hidden';
}

export interface VCLFormSchemaTextarea extends VCLFormSchemaBase {
  formControl: 'textarea';
  minRows: number;
  maxRows: number;
}

export interface VCLFormSchemaOptions {
  label?: string;
  sublabel?: string;
  value: any;
}

export interface VCLFormSchemaSelect extends VCLFormSchemaBase {
  formControl: 'select';
  mode: 'multiple' | 'single';
  expandedIcon: string;
  collapsedIcon: string;
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaDropdown extends VCLFormSchemaBase {
  formControl: 'dropdown';
  mode: 'multiple' | 'single';
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaSwitch extends VCLFormSchemaBase {
  formControl: 'switch';
}

export interface VCLFormSchemaSlider extends VCLFormSchemaBase {
  formControl: 'slider';
  scale?: number | string[];
  minimum: number;
  maximum: number;
}
export interface VCLFormSchemaCheckbox extends VCLFormSchemaBase {
  formControl: 'checkbox';
  iconPosition: 'left' | 'right';
  checkedIcon: string;
  uncheckedIcon: string;
}

export interface VCLFormSchemaRadio extends VCLFormSchemaBase {
  formControl: 'radio';
  iconPosition: 'left' | 'right';
  checkedIcon: string;
  uncheckedIcon: string;
  options: VCLFormSchemaOptions[];
}

export interface VCLFormSchemaToken extends VCLFormSchemaBase {
  formControl: 'token';
}

export interface VCLFormSchemaDate extends VCLFormSchemaBase {
  formControl: 'date';
  datePickerConfig: DatePickerConfig;
}

export interface VCLFormSchemaSubmit extends VCLFormSchemaBase {
  prepIcon: string;
  appIcon: string;
  class: string;
  autoDisable: boolean;
  formControl: 'submit';
}

export interface VCLFormSchemaButton extends VCLFormSchemaBase {
  prepIcon: string;
  appIcon: string;
  class: string;
  action: any;
  formControl: 'button';
}

export interface VCLFormSchemaButtons extends VCLFormSchemaBase {
  formControl: 'buttons';
  buttons: VCLFormSchemaButton[];
}

export interface VCLFormSchemaArray extends VCLFormSchemaBase {
  formControl: 'array';
}

export interface VCLFormSchemaRoot extends VCLFormSchemaBase {
  formControl: 'object';
  title?: string;
  description?: string;
  properties?: { [name: string]: VCLFormSchema };
}

export interface VCLFormSchemaCustom extends VCLFormSchemaBase {
  formControl: 'custom';
  type: string;
  customComponent: ControlValueAccessory;
  customParameters: any;
}

export type VCLFormSchema = VCLFormSchemaRoot | VCLFormSchemaInput | VCLFormSchemaTextarea
                          | VCLFormSchemaPassword | VCLFormSchemaHidden
                          | VCLFormSchemaCheckbox | VCLFormSchemaArray | VCLFormSchemaSelect
                          | VCLFormSchemaDropdown | VCLFormSchemaSwitch | VCLFormSchemaSlider
                          | VCLFormSchemaRadio | VCLFormSchemaToken | VCLFormSchemaDate
                          | VCLFormSchemaCustom | VCLFormSchemaSubmit | VCLFormSchemaButton
                          | VCLFormSchemaButtons;

```

#### CustomFormControl

A custom component should be an implementation of `ControlValueAccessor`.
Parameters provided in `customParameters` are accessible as inputs.

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