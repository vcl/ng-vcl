import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLLabelDirective, VCLSpinnerComponent } from '@vcl/ng-vcl';
import { VCLInputDirective } from '../../../../lib/ng-vcl/src/input/input.directive';
import { VCLInputFieldComponent } from '../../../../lib/ng-vcl/src/input/input-field.component';
import { EmbeddedInputFieldLabelDirective } from '../../../../lib/ng-vcl/src/input/embedded-label.directive';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLLabelDirective,
    FormsModule,
    VCLInputDirective,
    VCLInputFieldComponent,
    EmbeddedInputFieldLabelDirective,
    VCLSpinnerComponent,
  ],
})
export class SpinnerDemoComponent {
  data1 = 0;
  data2 = 0;
}
