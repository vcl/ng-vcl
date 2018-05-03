import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent, GroupButtonDirective } from './button-group.component';
import { VCLButtonModule } from '../button/index';

export { ButtonGroupComponent, GroupButtonDirective };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [ButtonGroupComponent, GroupButtonDirective, VCLButtonModule],
  declarations: [ButtonGroupComponent, GroupButtonDirective],
  providers: [],
})
export class VCLButtonGroupModule { }
