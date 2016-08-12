import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent } from './icon.component';
import {IconService} from '../../services/icon.service';

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService],
})
export class VCLIconModule { }
