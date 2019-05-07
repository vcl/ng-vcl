import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent } from './jss-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  VCLButtonModule, VCLDropdownModule, VCLFlipSwitchModule,
  VCLSliderModule, VCLCheckboxModule,VCLFormControlGroupModule,
  VCLRadioButtonModule, VCLTokenModule, VCLIconModule,VCLSelectModule,
  VCLTextareaModule, VCLPasswordInputModule, VCLInputModule, VCLDatePickerModule, VCLButtonGroupModule
} from '@ng-vcl/ng-vcl';


import { JssFormObjectComponent } from './jss-form-object.component';
import { VCLFormSchemaOptions, VCLFormSchema } from './types';
import { FormsModule } from '@angular/forms';

export { JssFormComponent, JssFormObjectComponent, VCLFormSchema, VCLFormSchemaOptions };
export { markAsDeeplyTouched } from './utils';

@NgModule({
  imports: [
    CommonModule,
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
    FormsModule
  ],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
  entryComponents: []
})
export class VCLJssFormModule { }

