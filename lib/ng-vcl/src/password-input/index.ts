import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLInputModule } from '../input/index';
import { VCLButtonModule } from '../button/index';
import { PasswordInputComponent } from './password-input.component';
import { VCLIconModule } from '../icon/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export { PasswordInputComponent };

@NgModule({
  imports: [PasswordInputComponent],
  exports: [PasswordInputComponent],
})
export class VCLPasswordInputModule {}
