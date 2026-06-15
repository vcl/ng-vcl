import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
