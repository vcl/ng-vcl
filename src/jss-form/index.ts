import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent } from './jss-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLButtonModule, VCLDropdownModule, VCLFlipSwitchModule, VCLSliderModule, VCLCheckboxModule, VCLSelectModule, VCLRadioButtonModule, VCLInputControlGroupModule, VCLFormControlLabelModule, L10nModule } from '@ng-vcl/ng-vcl';
import { JssFormObjectComponent, JssFormSchema, JssFormSchemaOptions } from './jss-form-object.component';

export { JssFormComponent, JssFormObjectComponent, JssFormSchema, JssFormSchemaOptions };

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    L10nModule,
    VCLButtonModule,
    VCLDropdownModule,
    VCLFlipSwitchModule,
    VCLSliderModule,
    VCLCheckboxModule,
    VCLSelectModule,
    VCLRadioButtonModule,
    VCLFormControlLabelModule,
    VCLInputControlGroupModule
  ],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
})
export class VCLJssFormModule { }
