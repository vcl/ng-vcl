import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormControlErrorStateAgent, FormControlHost, FormControlInput } from 'lib/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class FormControlGroupDemoComponent {

  defaultValues = {
    leader: false,
    strength: 5,
    agility: 5,
    intelligence: 5,
  };

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    description: new FormControl('', []),
    picture: new FormControl(null, [ ]),
    leader: new FormControl(this.defaultValues.leader, [ ]),
    email: new FormControl('', [
      Validators.email,
    ]),
    terms: new FormControl(false, [
      (control) => {
        if (!control.value) {
          return {
            termsDisagree: true,
          };
        }
        return null;
      }
    ]),
    gender: new FormControl(null, Validators.required),
    alignment: new FormControl(null, [ Validators.required ]),
    strength: new FormControl(this.defaultValues.strength, [ Validators.min(1), Validators.max(10)]),
    agility: new FormControl(this.defaultValues.agility, [ Validators.min(1), Validators.max(10)]),
    intelligence: new FormControl(this.defaultValues.intelligence, [ Validators.min(1), Validators.max(10)]),
    perks: new FormControl(null, [ this.validatePerks.bind(this) ])
  }, [
    this.validateSkills.bind(this)
  ]);

  get skillPoints() {
    const s = this.formGroup && this.formGroup.get('strength');
    const a = this.formGroup && this.formGroup.get('agility');
    const i = this.formGroup && this.formGroup.get('intelligence');
    if (s && a && i) {
      return s.value + a.value + i.value;
    }
    return 0;
  }

  validateSkills(c: AbstractControl) {
    if ((this.skillPoints) > 20) {
      return {
        skills: true
      };
    }
    return null;
  }

  validatePerks(c: AbstractControl) {
    return (Array.isArray(c.value) && c.value.length >= 2) ? null : { perks: true };
  }

  termsErrorStateAgent: FormControlErrorStateAgent = (form?: FormControlHost, input?: FormControlInput<any>) => {
    return form && input && input.ngControl && input.ngControl.invalid && form.submitted;
  }

}
