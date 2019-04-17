import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram';
import { VCLIconModule } from '../icon';
import { ButtonComponent, VCLButton, ButtonObserver, BUTTON_OBSERVER_TOKEN } from './button.component';

export { ButtonComponent, ButtonObserver, BUTTON_OBSERVER_TOKEN, VCLButton };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class VCLButtonModule { }
