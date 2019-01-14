import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VCLInputModule } from '../input/index';
import { VCLButtonModule } from '../button/index';
import { PasswordInputComponent }   from './password-input.component';
import { PasswordInputDirective }   from './password-input.directive';

export { PasswordInputComponent, PasswordInputDirective };

@NgModule({
  imports: [ FormsModule, VCLInputModule, VCLButtonModule ],
  exports: [PasswordInputComponent, PasswordInputDirective],
  declarations: [PasswordInputComponent, PasswordInputDirective]
})
export class VCLPasswordInputModule { }
