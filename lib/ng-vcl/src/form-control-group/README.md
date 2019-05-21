# vcl-form-control-group

Form control group to handle the error-state of form controls

## Usage

```js
import { vclFormControlGroupModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ vclFormControlGroupModule ],
  ...
})
export class AppComponent {}
```

```html
<form vclForm [formGroup]="formGroup">
  <vcl-form-control-group>
    <label vclFormControlLabel>Name<vcl-required></vcl-required></label>
    <input vclInput formControlName="name" placeholder="Name">
    <vcl-hint-error error="required">Name is required</vcl-hint-error>
    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>
  </vcl-form-control-group>
</form>
```
