import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { VCLInputModule } from '../input';
import { VCLButtonModule } from '../button';
import { PasswordInputComponent }   from './password-input.component';

export { PasswordInputComponent };

@NgModule({
  imports: [ FormsModule, VCLInputModule, VCLButtonModule ],
  exports: [PasswordInputComponent],
  declarations: [PasswordInputComponent],
  providers: [],
})
export class VCLPasswordInputModule { }
