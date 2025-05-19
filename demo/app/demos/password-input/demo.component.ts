import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    FormsModule,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLPasswordInputModule,
  ],
})
export class PasswordInputDemoComponent {
  password = 'password';
}
