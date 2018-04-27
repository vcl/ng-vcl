import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { ButtonDirective } from './button.directive';
import { ButtonLabelComponent } from './button.label.component';
import { ButtonSelectDirective } from './button.select.directive';
import { ButtonBusyComponent } from './button.busy.component';
import { ButtonIconComponent } from './button.icon.component';

export { ButtonDirective, ButtonLabelComponent, ButtonBusyComponent, ButtonSelectDirective, ButtonIconComponent };

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [ButtonDirective, ButtonLabelComponent, ButtonBusyComponent, ButtonSelectDirective, ButtonIconComponent],
  declarations: [ButtonDirective, ButtonLabelComponent, ButtonBusyComponent, ButtonSelectDirective, ButtonIconComponent],
  providers: [],
})
export class VCLButtonModule { }
