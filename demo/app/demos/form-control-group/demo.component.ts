import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl, ValidationErrors, NgForm } from '@angular/forms';
import { NotifierService, FormControlErrorStateAgent, FormControlHost, FormControlInput } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class FormControlGroupDemoComponent {

  constructor(private notifier: NotifierService) { }

  @ViewChild('form')
  form: NgForm;

  skillPointsMax = 10;

  defaultValues = {
    level: 1,
    leader: false,
    hitpoints: 10,
    strength: 3,
    agility: 3,
    intelligence: 3,
    perks: []
  };

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    description: new FormControl('', []),
    dob: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
    ]),
    picture: new FormControl(null, []),
    level: new FormControl(this.defaultValues.level, []),
    leader: new FormControl(this.defaultValues.leader, []),
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
    class: new FormControl(null, [ Validators.required ]),
    alignment: new FormControl(null, [ Validators.required ]),
    hitpoints: new FormControl(this.defaultValues.hitpoints, [ Validators.min(1), Validators.max(100)]),
    strength: new FormControl(this.defaultValues.strength, [ Validators.min(1), Validators.max(10)]),
    agility: new FormControl(this.defaultValues.agility, [ Validators.min(1), Validators.max(10)]),
    intelligence: new FormControl(this.defaultValues.intelligence, [ Validators.min(1), Validators.max(10)]),
    perks: new FormControl(this.defaultValues.perks, [ this.validatePerks.bind(this) ])
  }, [
    this.validateSkills.bind(this)
  ]);

  get level() {
    const c = this.formGroup && this.formGroup.get('level');
    return c ? c.value : 0;
  }

  get skillPoints() {
    const s = this.formGroup && this.formGroup.get('strength');
    const a = this.formGroup && this.formGroup.get('agility');
    const i = this.formGroup && this.formGroup.get('intelligence');
    if (s && a && i) {
      return s.value + a.value + i.value;
    }
    return 0;
  }

  get skillPointsAvailable() {
    return this.skillPointsMax - this.skillPoints;
  }

  validateSkills(c: AbstractControl) {
    if ((this.skillPoints) > this.skillPointsMax) {
      return {
        skills: true
      };
    }
    return null;
  }

  validatePerks(c: AbstractControl) {
    return (Array.isArray(c.value) && c.value.length === 2) ? null : { perks: true };
  }

  // Show only if invalid and after submitted
  termsErrorStateAgent: FormControlErrorStateAgent = (form?: FormControlHost, input?: FormControlInput<any>) => {
    return form && input && input.ngControl && input.ngControl.invalid && form.submitted;
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
