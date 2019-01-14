import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { ButtonDirective } from './button.directive';
import { ButtonLabelComponent } from './button.label.component';
import { ButtonSelectDirective } from './button.select.directive';
import { ButtonIconComponent } from './button.icon.component';

export { ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent };

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent],
  declarations: [ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent],
  providers: [],
})
export class VCLButtonModule { }
