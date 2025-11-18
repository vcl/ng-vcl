import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLInputModule,
  VCLSpinnerComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [FormsModule, VCLInputModule, VCLSpinnerComponent],
})
export class SpinnerDemoComponent {
  data1 = 0;
  data2 = 0;
}
