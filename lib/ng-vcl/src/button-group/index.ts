import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent, ButtonGroupButtonComponent } from './button-group.component';
import { VCLButtonModule } from '../button/index';

export { ButtonGroupComponent, ButtonGroupButtonComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [ButtonGroupComponent, ButtonGroupButtonComponent, VCLButtonModule],
  declarations: [ButtonGroupComponent, ButtonGroupButtonComponent],
  providers: [],
})
export class VCLButtonGroupModule { }
