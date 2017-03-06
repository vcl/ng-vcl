import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent, JssFormObjectComponent } from './jss-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VCLDropdownModule, VCLFlipSwitchModule, VCLSliderModule, VCLCheckboxModule, VCLSelectModule, VCLRadioButtonModule, VCLInputControlGroupModule, L10nModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [
    CommonModule, L10nModule, FormsModule, ReactiveFormsModule,
    VCLDropdownModule,
    VCLFlipSwitchModule,
    VCLSliderModule,
    VCLCheckboxModule,
    VCLSelectModule,
    VCLRadioButtonModule,
    VCLInputControlGroupModule
  ],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
})
export class VCLJssFormModule { }
