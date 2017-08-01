import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { VCLInputModule } from '../input/index';
import { VCLButtonModule } from '../button/index';
import { PasswordInputComponent }   from './password-input.component';

export { PasswordInputComponent };

@NgModule({
  imports: [ FormsModule, VCLInputModule, VCLButtonModule ],
  exports: [PasswordInputComponent],
  declarations: [PasswordInputComponent]
})
export class VCLPasswordInputModule { }
