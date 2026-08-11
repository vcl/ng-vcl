import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLLabelDirective,
  VCLSpinnerComponent,
  VCLInputDirective,
  VCLInputFieldComponent,
  EmbeddedInputFieldLabelDirective,
} from '@vcl/ng-vcl';

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
