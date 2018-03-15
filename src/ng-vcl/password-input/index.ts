import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VCLInputModule } from '../input/index';
import { VCLButtonModule } from '../button/index';
import { PasswordInputContainerComponent }   from './password-input-container.component';
import { PasswordInputDirective }   from './password-input.directive';

export { PasswordInputContainerComponent, PasswordInputDirective };

@NgModule({
  imports: [ FormsModule, VCLInputModule, VCLButtonModule ],
  exports: [PasswordInputContainerComponent, PasswordInputDirective],
  declarations: [PasswordInputContainerComponent, PasswordInputDirective]
})
export class VCLPasswordInputModule { }
