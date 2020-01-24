import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl, ValidationErrors, NgForm } from '@angular/forms';
import { NotifierService, FormControlErrorStateAgent, FormControlHost, FormControlInput } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class MaterialDesignInputsDemoComponent {

  constructor(private notifier: NotifierService) { }

  material = 'float';

  @ViewChild('form')
  form: NgForm;

  defaultValues = {
    perks: []
  };

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dob: new FormControl(null, [
      Validators.required
    ]),
    description: new FormControl('', []),
    password: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.email,
    ]),
    perks: new FormControl(this.defaultValues.perks, [ this.validatePerks.bind(this) ])
  }, []);

  validatePerks(c: AbstractControl) {
    return (Array.isArray(c.value) && c.value.length === 2) ? null : { perks: true };
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.notifier.success('Hero created');
    } else {
     this.notifier.error('Hero invalid');
    }
  }

  onReset() {
    this.form.resetForm(this.defaultValues);
    this.notifier.info('Hero reset');
  }
}
