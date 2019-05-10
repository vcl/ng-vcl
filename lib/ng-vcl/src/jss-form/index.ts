import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VCLButtonModule } from '../button/index';
import { VCLButtonGroupModule } from '../button-group/index';
import { VCLSelectListModule } from '../select-list/index';
import { VCLFlipSwitchModule } from '../flip-switch/index';
import { VCLSliderModule } from '../slider/index';
import { VCLCheckboxModule } from '../checkbox/index';
import { VCLRadioButtonModule } from '../radio-button/index';
import { VCLInputModule } from '../input/index';
import { VCLTextareaModule } from '../textarea/index';
import { VCLPasswordInputModule } from '../password-input/index';
import { VCLTokenModule } from '../token/index';
import { VCLIconModule } from '../icon/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLDatePickerModule } from '../date-picker/index';
import { VCLSelectModule } from '../select/index';
import { VCLFileInputModule } from '../file-input/index';
import { VCLRatingModule } from '../rating/index';

import { VCLFormSchemaOptions, VCLFormSchema, VCLFormSchemaRoot } from './types';
import { JssFormComponent } from './jss-form.component';
import { JssFormControlComponent } from './jss-form-control.component';
import { JssFormHintsComponent } from './jss-form-hints.component';


export { JssFormComponent, VCLFormSchema, VCLFormSchemaOptions, VCLFormSchemaRoot };
export * from './types';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VCLButtonModule,
    VCLButtonGroupModule,
    VCLSelectListModule,
    VCLFlipSwitchModule,
    VCLSliderModule,
    VCLCheckboxModule,
    VCLRadioButtonModule,
    VCLInputModule,
    VCLTextareaModule,
    VCLPasswordInputModule,
    VCLTokenModule,
    VCLIconModule,
    VCLFormControlGroupModule,
    VCLDatePickerModule,
    VCLSelectModule,
    VCLFileInputModule,
    VCLRatingModule
  ],
  exports: [JssFormComponent],
  declarations: [JssFormComponent, JssFormControlComponent, JssFormHintsComponent],
  providers: [],
  entryComponents: []
})
export class VCLJssFormModule { }

