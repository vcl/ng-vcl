import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { ButtonComponent, ButtonObserver, BUTTON_OBSERVER_TOKEN } from './button.component';

export { ButtonComponent, ButtonObserver, BUTTON_OBSERVER_TOKEN };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [ButtonComponent, VCLIconModule, VCLIcogramModule],
  declarations: [ButtonComponent],
  providers: [],
})
export class VCLButtonModule { }
