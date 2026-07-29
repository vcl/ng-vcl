import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLLabelDirective, VCLPasswordInputComponent } from '@vcl/ng-vcl';
import { FormControlGroupComponent } from '../../../../lib/ng-vcl/src/form-control-group/form-control-group.component';
import { VCLInputDirective } from '../../../../lib/ng-vcl/src/input/input.directive';
import { EmbeddedInputFieldLabelDirective } from '../../../../lib/ng-vcl/src/input/embedded-label.directive';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    VCLLabelDirective,
    FormControlGroupComponent,
    VCLInputDirective,
    EmbeddedInputFieldLabelDirective,
    VCLPasswordInputComponent,
  ],
})
export class PasswordInputDemoComponent {
  password = 'password';
}
