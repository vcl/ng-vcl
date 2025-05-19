import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLIcogramModule, VCLRadioButtonModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [FormsModule, VCLRadioButtonModule, VCLIcogramModule],
})
export class RadioButtonDemoComponent {
  isChecked = false;

  rgValue1 = 'red';
  rgValue2 = 'f';
  rgValue3 = 'g';

  onChange(value) {
    console.log('radio-button onChange fired');
    console.dir(value);
  }
}
