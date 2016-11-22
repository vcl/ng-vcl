import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent, JssFormObjectComponent } from './jss-form.component';
import { L10nModule } from '../../l10n/l10n.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VCLFlipSwitchModule } from '../flip-switch/flip-switch.module';
import { VCLSliderModule } from '../slider/slider.module';


@NgModule({
  imports: [CommonModule, L10nModule, FormsModule, ReactiveFormsModule,
    VCLFlipSwitchModule,
    VCLSliderModule],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
})
export class VCLJssFormModule { }