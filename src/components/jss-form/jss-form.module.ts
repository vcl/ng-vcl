import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent, JssFormObjectComponent } from './jss-form.component';
import { L10nModule } from '../../l10n/l10n.module';


@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [JssFormComponent, JssFormObjectComponent],
  declarations: [JssFormComponent, JssFormObjectComponent],
  providers: [],
})
export class VCLJssFormModule { }
