import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLInputModule, VCLSpinnerModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [FormsModule, VCLInputModule, VCLSpinnerModule],
})
export class SpinnerDemoComponent {
  data1 = 0;
  data2 = 0;
}
