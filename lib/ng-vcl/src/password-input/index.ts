import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VCLButtonModule } from '../button/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLIconModule } from '../icon/index';
import { VCLInputModule } from '../input/index';

import { PasswordInputComponent } from './password-input.component';

export { PasswordInputComponent };

@NgModule({
  imports: [
    FormsModule,
    VCLInputModule,
    VCLButtonModule,
    VCLIconModule,
    VCLFormControlGroupModule,
  ],
  exports: [PasswordInputComponent],
  declarations: [PasswordInputComponent],
})
export class VCLPasswordInputModule {}
