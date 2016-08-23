import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent } from './icon.component';
import {IconService} from '../../services/icon.service';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService],
})
export class VCLIconModule { }
