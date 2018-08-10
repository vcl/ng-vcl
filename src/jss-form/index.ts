import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent } from './jss-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  VCLButtonModule, VCLDropdownModule, VCLFlipSwitchModule,
  VCLSliderModule, VCLCheckboxModule, VCLSelectModule,
  VCLRadioButtonModule, VCLInputControlGroupModule,
  VCLFormControlLabelModule, VCLTokenModule, VCLIconModule,
  VCLTextareaModule, VCLPasswordInputModule, VCLInputModule
} from '@ng-vcl/ng-vcl';
import { JssFormObjectComponent } from './jss-form-object.component';
import { JssFormSchemaOptions, JssFormSchema } from './types';

export { JssFormComponent, JssFormObjectComponent, JssFormSchema, JssFormSchemaOptions };
export { markAsDeeplyTouched } from './utils';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VCLButtonModule,
    VCLDropdownModule,
    VCLFlipSwitchModule,
    VCLSliderModule,
    VCLCheckboxModule,
    VCLSelectModule,
    VCLRadioButtonModule,
    VCLFormControlLabelModule,
    VCLInputControlGroupModule,
    VCLInputModule,
    VCLTextareaModule,
    VCLPasswordInputModule,
    VCLTokenModule,
    VCLIconModule
  ],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
})
export class VCLJssFormModule { }

