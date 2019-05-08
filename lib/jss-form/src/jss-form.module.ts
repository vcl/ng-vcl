import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent } from './jss-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  VCLButtonModule, VCLDropdownModule, VCLFlipSwitchModule,
  VCLSliderModule, VCLCheckboxModule,VCLFormControlGroupModule,
  VCLRadioButtonModule, VCLTokenModule, VCLIconModule,VCLSelectModule,
  VCLTextareaModule, VCLPasswordInputModule, VCLInputModule, VCLDatePickerModule, VCLButtonGroupModule
} from '@ng-vcl/ng-vcl';


import { JssFormObjectComponent } from './jss-form-object.component';
import { VCLFormSchemaOptions, VCLFormSchema } from './types';


export { JssFormComponent, JssFormObjectComponent, VCLFormSchema, VCLFormSchemaOptions };
export { markAsDeeplyTouched } from './utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VCLButtonModule,
    VCLButtonGroupModule,
    VCLDropdownModule,
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
  ],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
  entryComponents: []
})
export class VCLJssFormModule { }

