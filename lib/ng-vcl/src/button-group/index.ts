import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group.component';
import { VCLButtonModule } from '../button/index';

export { ButtonGroupComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [ButtonGroupComponent, VCLButtonModule],
  declarations: [ButtonGroupComponent],
  providers: [],
})
export class VCLButtonGroupModule { }
