import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram';
import { VCLIconModule } from '../icon';
import { ButtonComponent } from './button.component';
import { ButtonIcogramComponent } from './button-icogram.component';
import { ButtonIconComponent } from './button-icon.component';
import { ButtonSelectableDirective } from './button.selectable.directive';

export { ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, ButtonSelectableDirective };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, ButtonSelectableDirective],
  declarations: [ButtonComponent, ButtonIcogramComponent, ButtonIconComponent, ButtonSelectableDirective],
  providers: [],
})
export class VCLButtonModule { }
