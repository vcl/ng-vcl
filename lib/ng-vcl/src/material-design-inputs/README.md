# Material Design Inputs

Material design inputs

## Usage

```js
import { VCLMaterialDesignInputsModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLMaterialDesignInputsModule ],
  ...
})
export class AppComponent {}
```

```html
<!-- Enables material mode for all supported input controls -->
<form vclForm [formGroup]="formGroup" vclMaterial>
  <vcl-form-control-group>
    <label vclFormControlLabel>Name</label>
    <input vclInput formControlName="name" placeholder="Name">
  </vcl-form-control-group>
  <!-- Override material mode for description -->
  <vcl-form-control-group vclMaterial="static">
    <label vclFormControlLabel>Description</label>
    <input vclInput formControlName="description" placeholder="Name">
  </vcl-form-control-group>
</form>
```

#### form[vclMaterial] attributes

Name            | Type    | Default | Description
--------------- | ------- | ------- | -----------------------------------------------
`vclMaterial`   | 'float' \| 'static' \| 'disabled'  | 'float' | Material mode 

#### vcl-form-control-group[vclMaterial] attributes

Name            | Type    | Default | Description
--------------- | ------- | ------- | -----------------------------------------------
`vclMaterial`   | 'float' \| 'static' \| 'disabled'  | 'float' | Material mode 
