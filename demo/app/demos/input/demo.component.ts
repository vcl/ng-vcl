import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLButtonComponent, VCLIconModule, VCLInputModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, VCLInputModule, VCLButtonComponent, VCLIconModule],
})
export class InputDemoComponent {
  data1 = '';
  data2 = '';
}
