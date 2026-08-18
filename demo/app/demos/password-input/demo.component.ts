import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLFormControlGroupComponent,
  VCLInputDirective,
  EmbeddedInputFieldLabelDirective,
  VCLLabelDirective,
  VCLPasswordInputComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    VCLLabelDirective,
    VCLFormControlGroupComponent,
    VCLInputDirective,
    EmbeddedInputFieldLabelDirective,
    VCLPasswordInputComponent,
  ],
})
export class PasswordInputDemoComponent {
  password = 'password';
}
