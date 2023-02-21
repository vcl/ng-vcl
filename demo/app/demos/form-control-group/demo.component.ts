import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormGroup,
  Validators,
  AbstractControl,
  UntypedFormControl,
  NgForm,
} from '@angular/forms';
import {
  NotifierService,
  FormControlErrorStateAgent,
  LayerConfig,
  DateAdapter,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlGroupDemoComponent {
  constructor(private notifier: NotifierService, private da: DateAdapter) {}

  @ViewChild('form')
  form: NgForm;

  datePattern = this.da.pattern('date');

  skillPointsMax = 10;

  defaultValues = {
    level: 1,
    leader: false,
    hitpoints: 10,
    strength: 3,
    agility: 3,
    intelligence: 3,
    perks: [],
  };

  formGroup = new UntypedFormGroup(
    {
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new UntypedFormControl('', []),
      dob: new UntypedFormControl(null, [Validators.required]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      picture: new UntypedFormControl(null, []),
      level: new UntypedFormControl(this.defaultValues.level, []),
      leader: new UntypedFormControl(this.defaultValues.leader, []),
      email: new UntypedFormControl('', {
        validators: [Validators.email],
      }),
      terms: new UntypedFormControl(false, [
        control => {
          if (!control.value) {
            return {
              termsDisagree: true,
            };
          }
          return null;
        },
      ]),
      gender: new UntypedFormControl(null, Validators.required),
      class: new UntypedFormControl(null, [Validators.required]),
      alignment: new UntypedFormControl(null, [Validators.required]),
      hitpoints: new UntypedFormControl(this.defaultValues.hitpoints, [
        Validators.min(1),
        Validators.max(100),
      ]),
      strength: new UntypedFormControl(this.defaultValues.strength, [
        Validators.min(1),
        Validators.max(10),
      ]),
      agility: new UntypedFormControl(this.defaultValues.agility, [
        Validators.min(1),
        Validators.max(10),
      ]),
      intelligence: new UntypedFormControl(this.defaultValues.intelligence, [
        Validators.min(1),
        Validators.max(10),
      ]),
      perks: new UntypedFormControl(this.defaultValues.perks, [
        this.validatePerks.bind(this),
      ]),
    },
    [this.validateSkills.bind(this)]
  );

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

  validateSkills() {
    if (this.skillPoints > this.skillPointsMax) {
      return {
        skills: true,
      };
    }
    return null;
  }

  validatePerks(c: AbstractControl) {
    return Array.isArray(c.value) && c.value.length === 2
      ? null
      : { perks: true };
  }

  // Show only if invalid and after submitted
  termsErrorStateAgent: FormControlErrorStateAgent = (form?, ngControl?) => {
    return form && ngControl && ngControl.invalid && form.submitted;
  };

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

  helpLayerConfig: LayerConfig = {
    maxWidth: '25em',
  };
}
