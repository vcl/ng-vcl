import {
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  UntypedFormGroup,
  Validators,
  AbstractControl,
  UntypedFormControl,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NotifierService,
  FormControlErrorStateAgent,
  LayerConfig,
  DateAdapter,
  VCLDatePickerModule,
  VCLNotifierModule,
  VCLTokenModule,
  VCLSelectModule,
  VCLIcogramModule,
  VCLIconModule,
  VCLLayerModule,
  VCLLabelDirective,
  VCLSubLabelDirective,
} from '@vcl/ng-vcl';
import { CounterComponent } from './counter.component';
import { JsonPipe, NgIf } from '@angular/common';
import { VCLButtonComponent } from '../../../../lib/ng-vcl/src/button/button.component';
import { VCLButtonGroupComponent } from '../../../../lib/ng-vcl/src/button-group/button-group.component';
import { VCLInputDirective } from '../../../../lib/ng-vcl/src/input/input.directive';
import { TextareaDirective } from '../../../../lib/ng-vcl/src/input/textarea.directive';
import { VCLInputFieldComponent } from '../../../../lib/ng-vcl/src/input/input-field.component';
import { EmbeddedInputFieldLabelDirective } from '../../../../lib/ng-vcl/src/input/embedded-label.directive';
import { VCLPasswordInputComponent } from '../../../../lib/ng-vcl/src/password-input/password-input.component';
import { VCLRatingComponent } from '../../../../lib/ng-vcl/src/rating/rating.component';
import { VCLRatingItemComponent } from '../../../../lib/ng-vcl/src/rating/rating-item.component';
import { VCLRatingItemLabelComponent } from '../../../../lib/ng-vcl/src/rating/rating-label.component';
import { FileInputComponent } from '../../../../lib/ng-vcl/src/file-input/file-input.component';
import { FlipSwitchComponent } from '../../../../lib/ng-vcl/src/flip-switch/flip-switch.component';
import { VCLPanelComponent } from '../../../../lib/ng-vcl/src/panel/panel.component';
import {
  VCLPanelTitleDirective,
  VCLPanelFooterButtonDirective,
  VCLPanelDialogDirective,
} from '../../../../lib/ng-vcl/src/panel/panel.directive';
import { VCLCheckboxComponent } from '../../../../lib/ng-vcl/src/checkbox/checkbox.component';
import { VCLRadioButtonComponent } from '../../../../lib/ng-vcl/src/radio-button/radio-button.component';
import { VCLRadioGroupComponent } from '../../../../lib/ng-vcl/src/radio-button/radio-group.component';
import { VCLSliderComponent } from '../../../../lib/ng-vcl/src/slider/slider.component';
import { VCLSelectListComponent } from '../../../../lib/ng-vcl/src/select-list/select-list.component';
import { VCLSelectListItemComponent } from '../../../../lib/ng-vcl/src/select-list/components/select-list-item.component';
import { FormControlGroupComponent } from '../../../../lib/ng-vcl/src/form-control-group/form-control-group.component';
import {
  FormControlHintComponent,
  FormControlHintErrorComponent,
} from '../../../../lib/ng-vcl/src/form-control-group/hint.component';
import { FormDirective } from '../../../../lib/ng-vcl/src/form-control-group/form.directive';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf,
    ReactiveFormsModule,
    JsonPipe,
    VCLButtonComponent,
    VCLButtonGroupComponent,
    VCLInputDirective,
    TextareaDirective,
    VCLInputFieldComponent,
    EmbeddedInputFieldLabelDirective,
    VCLPasswordInputComponent,
    VCLRatingComponent,
    VCLRatingItemComponent,
    VCLRatingItemLabelComponent,
    FileInputComponent,
    VCLLayerModule,
    FlipSwitchComponent,
    VCLIconModule,
    VCLPanelComponent,
    VCLPanelTitleDirective,
    VCLPanelFooterButtonDirective,
    VCLPanelDialogDirective,
    VCLCheckboxComponent,
    VCLIcogramModule,
    VCLRadioButtonComponent,
    VCLRadioGroupComponent,
    VCLSliderComponent,
    VCLSelectModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    VCLTokenModule,
    VCLNotifierModule,
    VCLDatePickerModule,
    FormControlGroupComponent,
    FormControlHintComponent,
    FormControlHintErrorComponent,
    FormDirective,
    CounterComponent,
    VCLLabelDirective,
    VCLSubLabelDirective
  ],
})
export class FormControlGroupDemoComponent {
  constructor(
    private notifier: NotifierService,
    private da: DateAdapter
  ) {}

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
