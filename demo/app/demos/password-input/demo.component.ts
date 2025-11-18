import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    FormsModule,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLPasswordInputComponent,
  ],
})
export class PasswordInputDemoComponent {
  password = 'password';
}
