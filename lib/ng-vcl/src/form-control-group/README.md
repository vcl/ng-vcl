# vcl-form-control-group

Form control group to handle the error-state of form controls

## Usage

```js
import { VCLFormControlGroupModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLFormControlGroupModule ],
  ...
})
export class AppComponent {}
```

```html
<form vclForm [formGroup]="formGroup">
  <vcl-form-control-group>
    <vcl-label>Name</vcl-label>
    <vcl-input-field>
      <input formControlName="name">
    </vcl-input-field>
    <vcl-hint-error error="required">Name is required</vcl-hint-error>
    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>
  </vcl-form-control-group>
</form>
```
