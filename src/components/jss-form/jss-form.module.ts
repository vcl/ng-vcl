import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent } from './jss-form.component';
import { L10nModule } from '../../l10n/l10n.module';


@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [JssFormComponent],
  declarations: [JssFormComponent],
  providers: [],
})
export class VCLJssFormModule { }
