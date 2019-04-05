import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram';
import { VCLIconModule } from '../icon';
import { ButtonComponent, VCLButton, ButtonObserver, BUTTON_OBSERVER_TOKEN } from './button.component';
import { ButtonIcogramComponent } from './button-icogram.component';
import { ButtonIconComponent } from './button-icon.component';

export { ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, ButtonObserver, BUTTON_OBSERVER_TOKEN, VCLButton };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [ButtonComponent, ButtonIcogramComponent, ButtonIconComponent],
  declarations: [ButtonComponent, ButtonIcogramComponent, ButtonIconComponent],
  providers: [],
})
export class VCLButtonModule { }
