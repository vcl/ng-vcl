import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLButtonComponent, VCLIconModule, VCLInputModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [FormsModule, VCLInputModule, VCLButtonComponent, VCLIconModule],
})
export class InputDemoComponent {
  data1 = '';
  data2 = '';
}
