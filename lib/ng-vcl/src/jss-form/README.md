# vcl-jss-form

Creates a html-form from a provided schema.

## Usage

```ts
import { VCLJssFormModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLJssFormModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-jss-form
  [schema]="mySchema"
  (formSubmit)="onSubmit($event)"
  (formAction)="onAction($event)"></vcl-jss-form>
```

```ts
import { Validators } from '@angular/forms';
import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

const SCHEMA: VCLFormFieldSchemaRoot = {
  type: 'form',
  fields: {
    name: {
      type: 'input',
      label: 'Name',
      params: {
        placeholder: 'Your name',
      },
      validators: [Validators.required, Validators.minLength(2)],
      required: true,
      hints: [
        {
          type: 'error',
          error: 'required',
          message: 'Name is required',
        },
        {
          type: 'error',
          error: 'minlength',
          message: 'Name must have a length of at least 2 characters',
        },
      ],
    },
    email: {
      type: 'input',
      label: 'Email',
      validators: [Validators.email],
      required: false,
      hints: [
        {
          type: 'error',
          error: 'email',
          message: 'Invalid Email address',
        },
      ],
    },
    gender: {
      type: 'radio-group',
      label: 'Gender',
      defaultValue: 'm',
      params: {
        options: [
          {
            label: 'Male',
            value: 'm',
          },
          {
            label: 'Female',
            value: 'f',
          },
          {
            label: 'Genderless',
            value: 'g',
          },
        ],
      },
    },
    language: {
      type: 'hidden',
      defaultValue: navigator.language,
    },
    terms: {
      type: 'checkbox',
      label: 'Agree to our terms',
      validators: [
        (control: AbstractControl) => {
          if (!control.value) {
            return {
              termsDisagree: true,
            };
          }
          return null;
        },
      ],
      hints: [
        {
          type: 'default',
          message:
            'Read the terms to learn how we collect, use and share your data',
        },
        {
          type: 'error',
          error: 'termsDisagree',
          message: 'You must agree to our Terms',
        },
      ],
    },
    submit: {
      type: 'buttons',
      buttons: [
        {
          type: 'submit',
          label: 'Submit',
          class: 'emphasized',
        },
        {
          type: 'button',
          label: 'Reset',
          action: 'reset',
        },
      ],
    },
  },
};
```

#### Conditional properties

Some properties can be conditional and change when another field value changes.

```ts
import { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';

const SCHEMA: VCLFormFieldSchemaRoot = {
  type: 'form',
  fields: {
    one: {
      type: 'checkbox',
      label: 'One'
    },
    two: {
      type: 'checkbox',
      visible: conditional(['one', (one) => !!one.value])
      label: 'Two',
    }
  }
}
```

#### Custom fields

A component used in a custom field must implement the `ControlValueAccessor` interface to support the `formControl` directive.

```ts
@Component({
  template: `
    <span *ngIf="field.label">{{ field.label }}</span
    ><br />
    <my-counter
      [formControl]="field.control"
      [max]="field.params.max"></my-counter>
  `,
})
export class CounterFormFieldComponent {
  constructor(public field: FormFieldControl) {}
}

FormFieldControl.register('counter', CounterFormFieldComponent);
```

```ts
import { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';

const SCHEMA: VCLFormFieldSchemaRoot = {
  type: 'form',
  fields: {
    level: {
      type: 'counter',
      label: 'Counter',
      params: {
        max: 10,
      },
    },
  },
};
```
