import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { ButtonDirective } from './button.directive';
import { ButtonLabelComponent } from './button.label.component';
import { ButtonSelectDirective } from './button.select.directive';
import { ButtonBusyComponent } from './button.busy.component';

export { ButtonDirective, ButtonLabelComponent, ButtonBusyComponent, ButtonSelectDirective };

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [ButtonDirective, ButtonLabelComponent, ButtonBusyComponent, ButtonSelectDirective],
  declarations: [ButtonDirective, ButtonLabelComponent, ButtonBusyComponent, ButtonSelectDirective],
  providers: [],
})
export class VCLButtonModule { }
