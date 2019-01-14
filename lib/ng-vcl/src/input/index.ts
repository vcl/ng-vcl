import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLWormholeModule } from './../wormhole/index';
import { VCLPopoverModule } from '../popover/index';
import { InputDirective, InputAutoSelectDirective }   from './input.directive';

export { InputDirective };

@NgModule({
  imports: [],
  exports: [InputDirective, InputAutoSelectDirective],
  declarations: [InputDirective, InputAutoSelectDirective],
  providers: [],
})
export class VCLInputModule { }
