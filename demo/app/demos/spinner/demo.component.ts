import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLInputModule, VCLSpinnerComponent } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, VCLInputModule, VCLSpinnerComponent],
})
export class SpinnerDemoComponent {
  data1 = 0;
  data2 = 0;
}
